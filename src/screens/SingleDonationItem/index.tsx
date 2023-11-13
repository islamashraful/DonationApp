import BackButton from '@/components/BackButton';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { AppStackParamList } from '@/navigation/routes';
import { RootState } from '@/redux/store';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '@/styles/scaling';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';

type Props = StackScreenProps<AppStackParamList, 'SingleDonationItem'>;

const SingleDonationItem = ({ navigation, route }: Props) => {
  const selectedDontationInformation = useSelector(
    (state: RootState) => state.donations.selectedDontationInformation,
  );

  if (!selectedDontationInformation) {
    return null; // TODO: Show meaningful information to user
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: selectedDontationInformation.image }}
          style={styles.image}
        />
        <View style={styles.badge}>
          <Badge title={route.params.badgeTitle} />
        </View>
        <Header title={selectedDontationInformation.name} type="large" />
        <Text style={styles.description}>
          {selectedDontationInformation.description}
          {selectedDontationInformation.description}
          {selectedDontationInformation.description}
          {selectedDontationInformation.description}
          {selectedDontationInformation.description}
          {selectedDontationInformation.description}
          {selectedDontationInformation.description}
          {selectedDontationInformation.description}
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <Button title="Donate" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: scaleFontSize(29),
    fontSize: scaleFontSize(14),
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  },
});

export default SingleDonationItem;
