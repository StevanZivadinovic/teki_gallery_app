
import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, ScrollView, Pressable } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './../style/index'
import { TrendingMovies } from '@/components/TrendingMovies';
import MovieList from '@/components/MovieList';
import { toprated, trending, upcoming } from '@/assets/fetchedImages';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import { fetchTrending } from "./../Api/moviesApi";
import useMovies from '@/hooks/useMovies';
export default function App() {

  const ios = Platform.OS =='ios'
  const navigate = useRouter();

  const { loading, trendingData, topRatedData, upcomingData } = useMovies();
  return (
   
  loading ? <Loading/> : <View className='flex-1 bg-neutral-800'>
    <SafeAreaView className={ios ? '-mb-2':'mb-3'}>
      <StatusBar style='light'/>
        <View className='flex-row justify-between items-center mx-4'>
        <Bars3CenterLeftIcon color='white' size={30} strokeWidth={2}/>
        <Text className='text-3xl text-white font-bold'>
         <Text style={styles.text}>M</Text>ovbeby</Text>  
         <Pressable onPress={()=>{navigate.navigate('/SearchScreen')}}>
        <MagnifyingGlassIcon color='white' size={30} strokeWidth={2}/>
         </Pressable>
        </View>
        </SafeAreaView>

        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:10}}
        >
          {/* trending movies in carousel */}
          <TrendingMovies data={trendingData}/>
          {/* upcoming movies */}
          <MovieList data={upcomingData} title='Upcoming Movies' showSeeAll={true}/>
          {/* top rated movies */}
          <MovieList data={topRatedData} title='Top rated movies' showSeeAll={true}/>

        </ScrollView>
   </View>
  );
}


