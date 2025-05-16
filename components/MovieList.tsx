import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { imageName, imageSource } from "@/helperFunctions/global";

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.6;
const ITEM_SPACING = (width - ITEM_WIDTH) / 2;

const MovieList = ({
  navigation,
  data,
  title,
  carousel3d = false, 
}: {
  navigation: any;
  data: any[];
  title: string;
  carousel3d?: boolean;
}) => {
  const scrollX = useRef(new Animated.Value(100)).current;

  const handleClick = (item: any) => {
    navigation.navigate("MovieDetails", item);
  };

  if (carousel3d) {
    return (
      <View className="mb-8">
        <Text className="text-3xl font-bold text-white mx-4 mb-4">{title}</Text>
        <Animated.FlatList
        initialScrollIndex={-10}
        initialNumToRender={1}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH + ITEM_SPACING,
          offset: (ITEM_WIDTH + ITEM_SPACING) * index,
          index,
        })}
          data={data}
          keyExtractor={(item, index) => String(index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          bounces={false}
          contentContainerStyle={{
            paddingLeft: 10,  
          paddingRight: (width - ITEM_WIDTH) / 2,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => {
            const inputRange = [
              0,1
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1],
              extrapolate: "clamp",
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1],
              extrapolate: "clamp",
            });

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1],
              extrapolate: "clamp",
            });

            return (
              <TouchableWithoutFeedback onPress={() => handleClick(item)}>
                <Animated.View
                  style={{
                    width: ITEM_WIDTH,
                    marginHorizontal: 10,
                    transform: [{ scale }, { translateY }],
                    opacity,
                    shadowColor: "#000",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 10 },
                    shadowRadius: 20,
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundColor: "#111",
                  }}
                >
                  <Image
                    source={imageSource(item)}
                    style={{ width: "100%", height: height * 0.45 }}
                    resizeMode="cover"
                  />
                  <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-b-2xl">
                    <Text
                      className="text-white text-lg font-bold"
                      numberOfLines={2}
                    >
                      {imageName(item)}
                    </Text>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    );
  }

  // fallback: klasični prikaz kao pre
  return (
    <View className="mb-8">
      <View className="flex-row items-center justify-between mx-4 mb-3">
        <Text className="text-2xl font-semibold text-white">{title}</Text>
      </View>
      <View className="mx-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16, gap: 12 }}
        >
          {data?.map((item: any, index: number) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => handleClick(item)}
            >
              <View className="w-[140px]">
                <Image
                  source={imageSource(item)}
                  style={{
                    width: width * 0.35,
                    height: height * 0.22,
                  }}
                  className="rounded-2xl shadow-lg"
                  resizeMode="cover"
                />
                <Text
                  numberOfLines={2}
                  className="mt-2 text-center text-neutral-300 text-sm font-medium"
                >
                  {imageName(item)}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MovieList;
