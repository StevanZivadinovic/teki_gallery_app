import styles  from "@/style";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { MovieListType } from "./Types";
import { imageName, imageSource } from "@/helperFunctions/global";

const MovieList = ({ navigation,data, title, showSeeAll }: MovieListType) => {
  let { width, height } = Dimensions.get("window");
 

  const handleClick = (item: any) => {
    navigation.navigate("MovieDetails", item);
  };
  return (
    <View>
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-xl text-white mb-5">{title}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Shows it all!");
          }}
        >
          {showSeeAll && (
            <Text className="text-lg" style={styles?.text}>
              See all
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <View className="flex-row mx-6">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "space-between" }}
        >
          {data?.map((item: any, index: number) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  handleClick(item);
                }}
              >
                <View>
                  <Image
                    source={imageSource(item)}
                    style={{ width: width * 0.25, height: height * 0.15 }}
                    className="rounded-xl mr-2"
                  ></Image>
                  <Text className="text-center text-neutral-300">
                    {imageName(item)}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default MovieList;
