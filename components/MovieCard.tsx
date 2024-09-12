import { Dimensions, Image, TouchableWithoutFeedback } from "react-native";
interface MovieCardProps {
  item: any; // Replace `any` with a more specific type if possible
  handleClick: (item: MovieType) => void;
}
interface MovieType {
  id: string;
  title: string;
}


export const MovieCard: React.FC<MovieCardProps>  = ({item, handleClick}) => {
  let { width, height } = Dimensions.get("window");
  const imageMap: { [key: string]: any } = {
    '1': require('./../assets/images/sv_jovan.jpg'),
    '2': require('./../assets/images/sv_andjeo_cuvar.png'),
    '3': require('./../assets/images/sv_velikomucenik_georgije.jpg'),
    // Add other mappings here
  };
  const imageSource = imageMap[item.id] || require('./../assets/images/sv_jovan.jpg');
    return (
      <TouchableWithoutFeedback>
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