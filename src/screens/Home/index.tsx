import Header from '@/components/Header';
import Search from '@/components/Search';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Text,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '@/styles/scaling';
import Tab from '@/components/Tab';
import {
  Category,
  updateSelectedCategoryId,
} from '../../../redux/reducers/categories';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.categories);
  const disapatch = useDispatch();

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const categoryPageSize = 4;

  const pagination = (db: Category[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= db.length) {
      return [];
    }
    return db.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoading(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prevState => prevState + 1);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <View style={styles.categoryHeader}>
          <Header title="Select Category" type="medium" />
        </View>
        <View style={styles.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoading) {
                return;
              }
              setIsLoading(true);
              const newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prev => [...prev, ...newData]);
                setCategoryPage(prev => prev + 1);
              }
              setIsLoading(false);
            }}
            data={categoryList}
            keyExtractor={item => item.categoryId.toString()}
            renderItem={({ item }) => (
              <View style={styles.categoryItem}>
                <Tab
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={() => {
                    disapatch(
                      updateSelectedCategoryId({ categoryId: item.categoryId }),
                    );
                  }}
                />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
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
  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(6),
  },
});

export default Home;
