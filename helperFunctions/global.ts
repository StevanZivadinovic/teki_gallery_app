import { image500 } from "@/Api/moviesApi";
import { MovieType } from "@/components/Types";
import { db } from "@/firebaseConfig";
import i18n from "@/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteDoc, doc } from "firebase/firestore";

export const imageName = (item: MovieType) =>
  item.title.length > 14 ? item.title.slice(0, 14) + ".." : item.title;

export const imageSource = (item: any) => {
    return item?.backdrop_path
      ? { uri: image500(item?.backdrop_path) }
      : require("./../assets/images/no_movie.png");
  };


  export const handleRemove = async (movieID: string, userID: string, type:string) => {
    
    if (!userID) return;

    const itemRef = doc(
      db,
      "users",
      userID,
      type,
      String(movieID)
    );

    try {
      await deleteDoc(itemRef);
      console.log("Deleted:", movieID);
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

   export const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };