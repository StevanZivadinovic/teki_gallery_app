import  image500  from "@/Api/moviesApi";
import useMoviesDetails from "@/hooks/useMoviesDetails";
import { Dimensions, Image, TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { MovieCardProps } from "./Types";



export const MovieCard: React.FC<MovieCardProps> = ({ item, handleClick }) => {
  let { width, height } = Dimensions.get("window");
  const imageSource = { uri: image500(item?.backdrop_path) || require('./../assets/images/no_movie.png') };
  const {moviesDetailsByID}:any=useMoviesDetails(item?.id)

  return (
    <TouchableWithoutFeedback onPress={() => { handleClick(item) }} key={item?.id}>
      <View className="relative"> 
        <Image
          source={imageSource}
          style={{
            width: width * 0.6,
            height: height * 0.4,
            borderRadius: 24,
          }}
        />
        <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center rounded-[24px]" style={styles.overlay}>
          <Text className="color-white text-[18px] font-bold text-center">{item.title}</Text>
          <Text className="color-white text-[16px] text-center">{moviesDetailsByID?.runtime} min</Text>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});
