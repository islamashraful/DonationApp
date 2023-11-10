import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import Badge from '../Badge';
import Header from '../Header';
import { horizontalScale, verticalScale } from '@/styles/scaling';

interface Props {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress?: () => void;
}

const SingleDonationItem = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
  onPress,
}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image source={{ uri }} style={styles.img} />
      </View>
      <View style={styles.donationInformation}>
        <Header
          title={donationTitle}
          type="small"
          color="#0a043c"
          numberOfLines={1}
        />
        <View style={styles.price}>
          <Header title={`$${price.toFixed(2)}`} type="small" color="#156CF7" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  img: {
    width: horizontalScale(140),
    height: verticalScale(170),
    borderRadius: 20,
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  donationInformation: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default SingleDonationItem;
