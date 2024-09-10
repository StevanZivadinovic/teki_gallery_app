import React from 'react'
import { Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'

interface trendingMovies{
data:any[]
}

export const TrendingMovies = ({data}:trendingMovies) => {
    console.log(data)
  return (
    <View className='mb-8'>
        <Text>Trending</Text>
        <Carousel
        data={data}
        renderItem={(item)=>{<MovieCard item={item} handleClick={handleClick}/>}}
        firstItem={1}
        />

    </View>
  )
}
