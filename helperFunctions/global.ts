import { image500 } from "@/Api/moviesApi";
import { MovieType } from "@/components/Types";

export const imageName = (item: MovieType) =>
  item.title.length > 14 ? item.title.slice(0, 14) + ".." : item.title;

export const imageSource = (item: any) => {
    return item?.backdrop_path
      ? { uri: image500(item?.backdrop_path) }
      : require("./../assets/images/no_movie.png");
  };