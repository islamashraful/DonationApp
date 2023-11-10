import Header from '@/components/Header';
import Search from '@/components/Search';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from 'redux/store';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '@/styles/scaling';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.categories);

  console.log(categories);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello, </Text>
            <View style={styles.username}>
              <Header
                title={`${user.firstName} ${user.lastName[0]}. 👋`}
                type="large"
              />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.search}>
          <Search />
        </View>
        <Pressable style={styles.highlightedImageContainer}>
          <Image
            source={require('../../../assets/images/highlighted_image.png')}
            resizeMode="contain"
            style={styles.highlightedImage}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  username: {
    marginTop: verticalScale(5),
  },
  image: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  search: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default Home;
