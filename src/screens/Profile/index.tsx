import React, {useState} from 'react';
import {SafeAreaView, Text, useWindowDimensions, View} from 'react-native';
import {linkBlue} from '../../assets/colors.ts';
import {useAppSelector} from '../../redux/store.ts';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  NavigationState,
  Route,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import Header from './components/Header';
import styles from './styles.ts';
import {routes} from './utils.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const renderScene = SceneMap({
  active: () => <></>,
  saved: () => <></>,
  finished: () => <></>,
});

const Profile = () => {
  const {user} = useAppSelector(state => state.auth);
  const layout = useWindowDimensions();
  const [tabIndex, setTabIndex] = useState(0);
  const insets = useSafeAreaInsets();

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<Route>;
    },
  ) => {
    return (
      <TabBar
        {...props}
        renderLabel={({focused, route}) => (
          <View style={styles.tabBarItem}>
            <Icon
              name={route.icon as string}
              size={18}
              color={focused ? linkBlue : '#adaaaa'}
            />
            <Text
              style={{
                color: focused ? linkBlue : '#adaaaa',
                fontFamily: 'Inter-Medium',
                fontSize: 13,
              }}>
              {route.title}
            </Text>
          </View>
        )}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.content, {paddingTop: insets.top !== 0 ? 0 : 20}]}>
        <Header user={user} />
        <TabView
          onIndexChange={setTabIndex}
          navigationState={{
            index: tabIndex,
            routes,
          }}
          renderScene={renderScene}
          initialLayout={{width: layout.width}}
          sceneContainerStyle={styles.sceneContainer}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
