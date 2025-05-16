import { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { db } from "./../../firebaseConfig";
import { useAuth } from "./../../context/AuthContext";
import { collection, onSnapshot } from "firebase/firestore";
import { handleRemove } from "@/helperFunctions/global";

export default function FavoriteMovies() {
  const { user } = useAuth();
  const [movies, setMovies] = useState<any[]>([]);

 useEffect(() => {
  if (!user) return;

  const unsubscribe = onSnapshot(
    collection(db, "users", user.uid, "favoriteMovies"),
    (querySnapshot) => {
      const fetchedMovies: any[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMovies(fetchedMovies);
    },
    (error) => {
      console.error("Greška u onSnapshot:", error);
    }
  );

  return () => unsubscribe();
}, [user]);

  return (
    <View className="flex-1">
      <FlatList
        data={movies}
        keyExtractor={(item) => item?.id}
        className="bg-black pb-[20px] min-h-screen pt-[20px]"
        renderItem={({ item }) => (
          <View className="bg-neutral-900 rounded-2xl px-4 py-3 mx-4 my-2 border border-neutral-700 flex-row justify-between items-center">
            <Text className="text-white text-base font-semibold">
              {item?.original_title}
            </Text>
            <Pressable
              disabled={!item?.id || !user?.uid}
              onPress={() => {
                if (item?.id && user?.uid) {
                  handleRemove(item.id, user.uid,"favoriteMovies");
                }
              }}
            >
              <Text className="text-orange-500 text-sm font-bold ml-4">
                Ukloni
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
