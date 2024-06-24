import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  LayoutAnimation,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {ActivitiesOnboardingData} from '../../index.tsx';
import Tag from '../../../../components/Tag';
import {ActivityIndicator, Button, Divider} from '../../../../components';
import {black, linkBlue} from '../../../../assets/colors.ts';
import {useAppDispatch, useAppSelector} from '../../../../redux/store.ts';
import {getAllActivities} from '../../../../redux/activities/thunk.ts';
import {
  NavigationState,
  SceneRendererProps,
  TabView,
} from 'react-native-tab-view';
import {Activity} from '../../../../redux/activities/entities.ts';
import {styles} from './styles.ts';
import i18n from '../../../../i18n';

const t = i18n.withScope('OnboardingScreen');

const Activities = ({
  onSubmit,
}: {
  onSubmit: (data: ActivitiesOnboardingData[]) => void;
}) => {
  const dispatch = useAppDispatch();
  const {activities, activitiesLoading} = useAppSelector(
    state => state.activities,
  );

  const [selectedActivities, setSelectedActivities] = useState<
    ActivitiesOnboardingData[]
  >([]);
  const layout = useWindowDimensions();

  const availableScrollRef = useRef<ScrollView | null>(null);
  const selectedScrollRef = useRef<ScrollView | null>(null);

  const [selectedIndex, setIndex] = React.useState(0);

  const handeAddActivity = (activity: ActivitiesOnboardingData) => () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedActivities(prev => [...prev, activity]);
    setTimeout(() => {
      selectedScrollRef.current?.scrollToEnd({animated: true});
    }, 200);
  };

  const handleRemoveActivity = (id: string) => () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedActivities(prev => prev.filter(a => a.id !== id));
  };
  const groupedActivities = useMemo(() => {
    const result: {[category: string]: {id: string; name: string}[]} = {};

    activities?.forEach((item: Activity) => {
      result[item.category] = item.activities.map(activity => ({
        id: activity.id,
        name: activity.name,
      }));
    });

    return result;
  }, [activities]);

  const tabTitles = useMemo(
    () =>
      groupedActivities
        ? Object.keys(groupedActivities).map(activityName => ({
            key: activityName,
          }))
        : [],
    [groupedActivities],
  );

  const renderScene = ({
    route: {key},
  }: SceneRendererProps & {route: {key: string}}) => {
    return (
      <ScrollView
        contentContainerStyle={styles.sceneContainer}
        style={styles.scene}>
        {groupedActivities?.[key].map(activity => {
          const included = selectedActivities.includes(activity);
          return (
            <Tag
              key={activity.id}
              text={t(activity.name)}
              style={{
                borderColor: included ? linkBlue : black,
              }}
              onPress={
                included
                  ? handleRemoveActivity(activity.id)
                  : handeAddActivity(activity)
              }
            />
          );
        })}
      </ScrollView>
    );
  };

  const scrollTabsToNext = (i: number, routesLength: number) => {
    if (i === routesLength - 1) {
      availableScrollRef.current?.scrollToEnd();
    } else if (i > selectedIndex) {
      availableScrollRef.current?.scrollTo({
        x: i * 110,
      });
    } else {
      availableScrollRef.current?.scrollTo({
        x: i * 110 - 50,
      });
    }
  };

  const renderTabBar = ({
    navigationState,
  }: {
    navigationState: NavigationState<{key: string}>;
  }) => {
    const handleTabChange = (i: number) => () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      if (i === selectedIndex) {
        return;
      }
      setIndex(i);
      scrollTabsToNext(i, navigationState.routes.length);
    };

    return (
      <View style={styles.tabBar}>
        <ScrollView
          ref={availableScrollRef}
          contentContainerStyle={styles.tabBarContent}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {navigationState.routes.map((route, index) => (
            <TouchableOpacity
              key={index}
              style={styles.tabItem(selectedIndex === index)}
              onPress={handleTabChange(index)}>
              <Text key={index} style={styles.text}>
                {t(route.key)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  useEffect(() => {
    if (!activities) {
      dispatch(getAllActivities());
    }
  }, [activities]);

  return (
    <View style={styles.container}>
      {activitiesLoading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="md" />
        </View>
      ) : (
        <View>
          {selectedActivities.length ? (
            <View style={styles.selectedActivitiesContent}>
              <Text style={styles.selectedActivitiesTitle}>
                {t('selected_activities_title')}
              </Text>
              <ScrollView
                horizontal
                ref={selectedScrollRef}
                contentContainerStyle={styles.selectedActivitiesScroll}
                showsHorizontalScrollIndicator={false}>
                {selectedActivities.map(activity => (
                  <Tag
                    text={t(activity.name)}
                    key={activity.id}
                    iconName={'close-outline'}
                    onPress={handleRemoveActivity(activity.id)}
                  />
                ))}
              </ScrollView>
              <Divider />
            </View>
          ) : null}
          <View style={styles.tabsContent}>
            <Text style={styles.selectedActivitiesTitle}>
              {t('available_activities_title')}
            </Text>
            <TabView
              navigationState={{index: selectedIndex, routes: tabTitles}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              renderTabBar={renderTabBar}
              initialLayout={{width: layout.width}}
            />
          </View>
        </View>
      )}
      <Button
        text={t('next_button')}
        disabled={!selectedActivities.length}
        onPress={() => onSubmit(selectedActivities)}
        style={styles.bottomButton}
      />
    </View>
  );
};

export default Activities;
