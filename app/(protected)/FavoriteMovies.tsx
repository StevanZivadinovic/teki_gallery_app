import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { onValue, ref, remove } from 'firebase/database';
import { db } from './../../firebaseConfig';
import { useAuth } from './../../context/AuthContext';
import { Actor } from '@/types/actors';

export default function FavoriteMovies() {
  const { user } = useAuth();
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    if (!user) return;

    const favRef = ref(db, `users/${user.uid}/favorites/actors`);
    const unsubscribe = onValue(favRef, (snapshot) => {
      const data = snapshot.val() || [];
      //@ts-ignore
      setActors(Object.entries(data).map(([id, val]) => ({ id, ...val })));
    });

    return () => unsubscribe();
  }, [user]);

  const handleRemove = (id: string) => {
    remove(ref(db, `users/${user && user?.uid}/favorites/actors/${id}`));
  };

  return (
    <FlatList
      data={actors}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => (
        <View className="p-4 border-b border-neutral-700">
          <Text className="text-white">{item?.name}</Text>
          <Pressable onPress={() => handleRemove(item?.id)}>
            <Text className="text-red-400 mt-1">Ukloni</Text>
          </Pressable>
        </View>
      )}
    />
  );
}
