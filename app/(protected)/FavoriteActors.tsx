import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { db } from './../../firebaseConfig';
import { useAuth } from './../../context/AuthContext';
import { Actor } from '@/types/actors';
import { collection, onSnapshot} from 'firebase/firestore';
import { handleRemove } from '@/helperFunctions/global';
import { useNavigation } from 'expo-router';

export default function FavoriteActors() {
  const { user } = useAuth();
  const [actors, setActors] = useState<Actor[]>([]);
// If you have a typed stack, import and use it here instead of 'any'
const navigation = useNavigation<any>();
 useEffect(() => {
   if (!user) return;
 
   const unsubscribe = onSnapshot(
     collection(db, "users", user.uid, "favoriteActors"),
     (querySnapshot) => {
       const fetchedMovies: any[] = querySnapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
 
       setActors(fetchedMovies);
     },
     (error) => {
       console.error("Greška u onSnapshot:", error);
     }
   );
 
   return () => unsubscribe();
 }, [user]);
 const navigateToActor = (item: Actor) => {
    navigation.navigate('Person',  item);
  };
  return (
    <View className='flex-1'>
    <FlatList
      data={actors}
      keyExtractor={(item) => item?.id}
      className='bg-black pb-[20px] min-h-screen pt-[20px]'
      renderItem={({ item }) => (
        <View className="bg-neutral-900 rounded-2xl px-4 py-3 mx-4 my-2 border border-neutral-700 flex-row justify-between items-center">
         <Pressable onPress={() => navigateToActor(item)} className="flex-1">
            <Text className="text-white text-base font-semibold">{item?.name}</Text>
          </Pressable>
          <Pressable
                        disabled={!item?.id || !user?.uid}
                        onPress={() => {
                          if (item?.id && user?.uid) {
                            handleRemove(item.id, user.uid,"favoriteActors");
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
