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
    id:number,
    name:string,
    gender:number,
    profile_path:string,
    place_of_birth:string,
    birthday:string,
    known_for_department:string,
    popularity:number,
    biography:string
  }

  export interface MovieListType {
    data: MovieType[];
    title: string;
    showSeeAll:boolean
  }
  export interface PersonMovieListType{
    cast:MovieType[];
  }
  export type RootStackParamList = {
    goBack(): unknown;
    navigate(arg0: string,MovieDetails: any): unknown;
    MovieDetails: any; 
    Person:PersonType;
  };
  
  export type ScreenNavigationPropType = NativeStackNavigationProp<RootStackParamList>;