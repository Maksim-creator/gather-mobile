import {StyleSheet} from 'react-native';
import {black, darkGrey, linkBlue, white} from '../../../../assets/colors.ts';

export default StyleSheet.create({
  coverContainer: {
    position: 'relative',
    paddingHorizontal: 10,
  },
  coverImage: {
    width: '100%',
    height: 130,
    borderRadius: 12,
  },
  avatar: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: linkBlue,
    bottom: -40,
    left: 20,
  },
  avatarText: {
    fontFamily: 'Inter-SemiBold',
    color: white,
    fontSize: 16,
  },
  settingsButton: {
    position: 'absolute',
    backgroundColor: white,
    right: 20,
    top: 10,
    padding: 5,
    borderRadius: 100,
  },
  content: {
    marginTop: 45,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  username: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: black,
  },
  gender: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: darkGrey,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: black,
  },
  bioText: {
    color: black,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    width: '90%',
    paddingTop: 4,
  },
});
