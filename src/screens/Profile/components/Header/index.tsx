import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {User} from '../../../../redux/auth/entities.ts';
import styles from './styles.ts';
import {renderGender} from '../../utils.ts';
import {black} from '../../../../assets/colors.ts';

interface Props {
  user?: User;
}

const Header: React.FC<Props> = ({user}) => {
  return (
    <>
      <View style={styles.coverContainer}>
        <Image
          source={require('../../../../assets/images/cover.jpg')}
          style={styles.coverImage}
        />
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.firstName[0].toUpperCase()}
            {user?.lastName[0].toUpperCase()}
          </Text>
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings-outline" size={20} color={black} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.username}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Text style={styles.gender}>{renderGender(user?.gender)}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.locationText}>
            {user?.location.country.emoji} {user?.location.country.name}{' '}
            {user?.location.city.name}, {user?.location.city.name}
          </Text>
          <Text style={styles.locationText}>🎂 {user?.dateOfBirth}</Text>
        </View>
        {user?.bio ? <Text style={styles.bioText}>{user.bio}</Text> : null}
      </View>
    </>
  );
};

export default Header;
