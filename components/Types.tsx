import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export interface TrendingMoviesProps {
  data: MovieType[];
}

export interface MovieType {
  id: string;
  title: string;
  url: string;
}

export interface MovieListType {
  data: MovieType[];
  title: string;
  showSeeAll:boolean
}
export type RootStackParamList = {
  MovieDetails: MovieType; // Define the route and the parameters it expects
};
export type ScreenNavigationPropType = NativeStackNavigationProp<RootStackParamList>;