import screenNames from './screenNames.ts';
import ProfileTabIcon from '../components/ProfileTabIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import {darkGrey, linkBlue} from '../assets/colors.ts';

export const getTabBarIcon = (
  size: number,
  color: string,
  focused: boolean,
  routeName: string,
) => {
  switch (routeName) {
    case screenNames.PROFILE:
      return <ProfileTabIcon focused={focused} />;
    case screenNames.SEARCH:
      return (
        <Icon
          name="search-outline"
          size={size}
          color={focused ? linkBlue : darkGrey}
        />
      );
  }
};
