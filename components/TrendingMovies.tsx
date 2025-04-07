import { useState } from "react";
import {FlatList, Text, View } from "react-native";
// import Carousel from "react-native-snap-carousel";
import { MovieCard } from "./MovieCard"; 
import { TrendingMoviesProps } from "./Types";
// import { useNavigation } from "@react-navigation/native";




// const {height, width } = Dimensions.get("window");

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
    console.log('opali')
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
      {/* <Carousel
      vertical={false}
        layout={'default'}
        data={data[0]}
        //@ts-ignore
        renderItem={renderItem}
        sliderWidth={width} 
        itemWidth={width * 0.62}
        useScrollView={true}
        firstItem={2}
        loop={true}
        slideStyle={{ display: "flex", alignItems: "center", justifyContent:'center' }}
        onSnapToItem={handleSnapToItem}
      /> */}
    </View>
  );
};
