import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from '@/components/MovieList';
import { useNavigation, useRouter } from 'expo-router';
import Loading from '@/components/Loading';
import useMovies from '@/hooks/useMovies';
import { useInfiniteQuery } from '@tanstack/react-query';
import  fetchTrending from '@/Api/moviesApi';
import { TrendingMovies } from '@/components/TrendingMovies';
import { ScreenNavigationPropType } from '@/components/Types';
import './../tailwind.css'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
export default function App() {
  const ios = Platform.OS === 'ios';
  const navigate = useRouter();
  const { topRatedData, upcomingData } = useMovies();

  const navigation = useNavigation<ScreenNavigationPropType>();
  const {
    data: trendingData,
    isLoading: trendingIsLoading,
    fetchNextPage: fetchNextTrendingPage,
    hasNextPage: hasNextTrendingPage,
  } = useInfiniteQuery({
    queryKey: ['popularMovies'],
    queryFn: ({ pageParam }) => fetchTrending(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>  lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    

  });

  if (trendingIsLoading) {
    return <Loading />;
  }
 
  return (
    <View className='flex-1 bg-neutral-800'>
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style='light' />
        <View className='flex-row justify-between items-center mx-4'>
          <Bars3CenterLeftIcon color='white' size={30} strokeWidth={2} />
          <Text className='text-3xl text-white text-center font-bold' style={{ flex: 1, backgroundColor: 'transparent'}}>
            <Text style={{ flex: 1, backgroundColor: 'transparent', color:'orange' }} >M</Text>ovbeby
          </Text>
          <Pressable onPress={() => { navigate.navigate('/SearchScreen'); }}>
            <MagnifyingGlassIcon color='white' size={30} strokeWidth={2} />
          </Pressable>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        
        <TrendingMovies navigation={navigation} data={trendingData?.pages?.flat()} fetchNextTrendingPage={fetchNextTrendingPage} hasNextTrendingPage={hasNextTrendingPage}/>
        <MovieList navigation={navigation} data={upcomingData} title='Upcoming Movies' showSeeAll={true} />
        <MovieList navigation={navigation} data={topRatedData} title='Top rated movies' showSeeAll={true} />
      </ScrollView>
    </View>
  );
}
