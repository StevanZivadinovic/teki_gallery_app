  import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

  export interface TrendingMoviesProps {
    data: MovieType[];
  }

  export interface MovieType {
    id: string;
    title: string;
    url: string;
  }

  export interface PersonType{
    src: any,
    name: string,
    adress: string,
    gender: string,
    birthday: string,
    married: string,
    popularity: number,
    biography:string,
    filmography:MovieType[]
  }

  export interface MovieListType {
    data: MovieType[];
    title: string;
    showSeeAll:boolean
  }
  export type RootStackParamList = {
    MovieDetails: any; // Define the route and the parameters it expects
    Person:PersonType;
  };
  
  export type ScreenNavigationPropType = NativeStackNavigationProp<RootStackParamList>;