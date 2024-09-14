
import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, ScrollView } from 'react-native';

import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './../style/index'
import { useState } from 'react';
import { TrendingMovies } from '@/components/TrendingMovies';
import MovieList from '@/components/MovieList';
import { toprated, trending, upcoming } from '@/assets/fetchedImages';

export default function App() {

  const ios = Platform.OS =='ios'
  return (
   <View className='flex-1 bg-neutral-800'>
    <SafeAreaView className={ios ? '-mb-2':'mb-3'}>
      <StatusBar style='light'/>
        <View className='flex-row justify-between items-center mx-4'>
        <Bars3CenterLeftIcon color='white' size={30} strokeWidth={2}/>
        <Text className='text-3xl text-white font-bold'>
         <Text style={styles.text}>M</Text>ovbeby</Text>  
        <MagnifyingGlassIcon color='white' size={30} strokeWidth={2}/>
        </View>
        </SafeAreaView>

        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:10}}
        >
          {/* trending movies in carousel */}
          <TrendingMovies data={trending}/>
          {/* upcoming movies */}
          <MovieList data={upcoming} title='Upcoming Movies'/>
          {/* top rated movies */}
          <MovieList data={toprated} title='Top rated movies'/>

        </ScrollView>
   </View>
  );
}


