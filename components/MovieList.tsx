import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { MovieListType } from "./Types";
import { imageName, imageSource } from "@/helperFunctions/global";

const MovieList = ({ navigation,data, title,customHeight,customWidth }: MovieListType) => {
  let { width, height } = Dimensions.get("window");
 

  const handleClick = (item: any) => {
    navigation.navigate("MovieDetails", item);
  };
  return (
    <View>
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-xl text-white mb-5">{title}</Text>
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
                    style={{ width: width * (customWidth ? customWidth : 0.25), height: height * (customHeight ? customHeight : 0.15) }}
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
