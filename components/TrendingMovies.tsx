import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { MovieCard } from "./MovieCard"; 
import { ScreenNavigationPropType, MovieType, TrendingMoviesProps } from "./Types";
import { useNavigation } from "@react-navigation/native";




const {height, width } = Dimensions.get("window");

export const TrendingMovies: React.FC<TrendingMoviesProps> = ({ data }) => {
  const navigation = useNavigation<ScreenNavigationPropType>();
  const handleClick = (item: MovieType) => {   
    navigation.navigate('MovieDetails', item);
  };

  const renderItem = ({ item, index }: { item: MovieType, index:number }) => {
    return <MovieCard item={item} handleClick={() => handleClick(item)}  />;
  };
  return (
    <View style={{ marginBottom: 32, marginLeft:15 }}>
      <Text className="text-2xl text-white">Trending</Text>
      <Carousel
        layout={'default'}
        data={data}
        //@ts-ignore
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.62}
        useScrollView={true}
        firstItem={2}
        loop={true}
        slideStyle={{ display: "flex", alignItems: "center", justifyContent:'center' }}
      />
    </View>
  );
};
