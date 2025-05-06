  import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

  export interface TrendingMoviesProps {
    navigation:any;
    data: any;
    fetchNextTrendingPage:(options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>> ;
    hasNextTrendingPage:any;
    // pageNumbersTrending:number;
    // setPageNumbersTrending:Dispatch<SetStateAction<number>>
  }

  export interface MovieType {
    id: string;
    title: string;
    url: string;
  }
  export interface MovieCardProps {
    item: any; 
    handleClick: (item: MovieType) => void;
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
    navigation:any;
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