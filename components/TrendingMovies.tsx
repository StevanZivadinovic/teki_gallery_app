import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { MovieCard } from "./MovieCard"; // Ensure correct import path

interface TrendingMoviesProps {
  data: MovieType[];
}

interface MovieType {
  id: string;
  title: string;
  url: string;
}

const {height, width } = Dimensions.get("window");

export const TrendingMovies: React.FC<TrendingMoviesProps> = ({ data }) => {
  const isCarousel = React.useRef(null);
  const handleClick = (item: MovieType) => {
    console.log("clicked", item);
    // navigation.navigate('Movie', item);
  };

  const renderItem = ({ item }: { item: MovieType }) => {
    return <MovieCard item={item} handleClick={() => handleClick(item)} />;
  };
  console.log(data);
  return (
    <View style={{ marginBottom: 32 }}>
      <Text className="text-2xl text-white">Trending</Text>
      <Carousel
        layout={'default'}
        ref={isCarousel}
        data={data}
        //@ts-ignore
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.62}
        useScrollView={true}
        firstItem={1}
        loop={true}
        slideStyle={{ display: "flex", alignItems: "center", justifyContent:'center' }}
      />
    </View>
  );
};
