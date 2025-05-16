import { useState } from "react";
import {FlatList, Text, View } from "react-native";
import { MovieCard } from "./MovieCard"; 
import { TrendingMoviesProps } from "./Types";



export const TrendingMovies: React.FC<TrendingMoviesProps> = ({ navigation,data,fetchNextTrendingPage, hasNextTrendingPage }) => {
  const [selectedId, setSelectedId] = useState<string>();
  const handleClick = (item: any) => {
    setSelectedId(item?.id)
    navigation.navigate('MovieDetails', item);
  };

  const renderItem = ({ item, index }: { item: any, index:number }) => {
    return <MovieCard key={index} item={item} handleClick={() => handleClick(item)}  />;
  };
  const handleEndReached = () => {
    if (hasNextTrendingPage) {
      fetchNextTrendingPage(); 
    }
  };
  return (
    <View style={{ marginBottom: 32, marginLeft:15 }}>
      <Text className="text-2xl text-white">Trending</Text>
     {data && <FlatList
        data={data} 
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        extraData={selectedId}
        onEndReached={handleEndReached}
      />} 
    </View>
  );
};
