import { image500 } from "@/Api/moviesApi";
import { Dimensions, Image, TouchableWithoutFeedback } from "react-native";
interface MovieCardProps {
  item: any; 
  handleClick: (item: MovieType) => void;
}
interface MovieType {
  id: string;
  title: string;
}


export const MovieCard: React.FC<MovieCardProps>  = ({item, handleClick}) => {
  let { width, height } = Dimensions.get("window");
  const imageSource = {uri:image500(item.backdrop_path) || require('./../assets/images/no_movie.png')};
    return (
      <TouchableWithoutFeedback onPress={()=>{handleClick(item)}}>
        <Image
          source={imageSource} 
          style={{
            width: width * 0.6,
            height: height * 0.4,
          }}
          className="rounded-3xl"
        />
      </TouchableWithoutFeedback>
    );
  };