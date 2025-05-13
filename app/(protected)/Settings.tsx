import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';

export default function Settings() {
  const { user } = useAuth();
    const router = useRouter();
  return (
    <View className="flex-1 bg-neutral-900 justify-center items-center px-4">
      <Text className="text-white text-2xl font-bold mb-4">Your data:</Text>
      <Text className="text-white text-lg">Email: {user?.email}</Text>
      <Text className="text-white text-lg mt-2">ID: {user?.uid}</Text>


 <Pressable
      onPress={() => router.push('/(protected)/Home')}
      className="mt-8 bg-orange-500 px-6 py-3 rounded-full shadow-lg"
    >
      <Text className="text-white text-lg font-semibold">Početna stranica</Text>
    </Pressable>
      {/* Ovde možeš dodati više podešavanja kasnije */}
    </View>
  );
}
