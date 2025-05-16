import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, ScrollView, Pressable, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from '@/components/MovieList';
import { useNavigation, useRouter } from 'expo-router';
import Loading from '@/components/Loading';
import useMovies from '@/hooks/useMovies';
import { ScreenNavigationPropType } from '@/components/Types';
import './../../tailwind.css';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useState } from 'react';

export default function App() {
  const ios = Platform.OS === 'ios';
  const navigate = useRouter();
  const { topRatedData, upcomingData, trandingData, loading } = useMovies();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<ScreenNavigationPropType>();

  if (loading) {
    return <Loading />;
  }

  const handleLogout = async () => {
    await signOut(auth);
    setModalVisible(false);
  };

  return (
    <View className="flex-1 bg-neutral-900">
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-5 py-3 border-b border-neutral-700">
          <Bars3CenterLeftIcon
            color="white"
            size={30}
            strokeWidth={2}
            onPress={() => setModalVisible(!modalVisible)}
          />

          <Modal
            visible={modalVisible}
            animationType="fade"
            transparent
            onRequestClose={() => setModalVisible(false)}
          >
            <View className="flex-1 justify-end bg-black/70">
              <View className="bg-neutral-800 p-6 rounded-t-3xl space-y-6 shadow-lg">
                <Pressable
                  onPress={() => {
                    setModalVisible(false);
                    navigate.push('/(protected)/Settings');
                  }}
                >
                  <Text className="text-white text-lg font-semibold">⚙️ Podešavanja</Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    setModalVisible(false);
                    navigate.push('/(protected)/Favorites');
                  }}
                >
                  <Text className="text-white text-lg font-semibold">⭐ Omiljeni filmovi i glumci</Text>
                </Pressable>

                <Pressable onPress={handleLogout}>
                  <Text className="text-red-500 text-lg font-bold">🚪 Odjavi se</Text>
                </Pressable>

                <Pressable onPress={() => setModalVisible(false)} className="pt-4">
                  <Text className="text-center text-white text-base opacity-70">Zatvori</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Text
            className="text-3xl font-extrabold text-white flex-1 text-center select-none"
            style={{ backgroundColor: 'transparent' }}
          >
            <Text className="text-orange-500">M</Text>ovbeby
          </Text>

          <Pressable onPress={() => navigate.navigate('/SearchScreen')}>
            <MagnifyingGlassIcon color="white" size={30} strokeWidth={2} />
          </Pressable>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        className="px-1"
      >
        <MovieList
  carousel3d
  navigation={navigation}
  data={trandingData}
  title="Trending Movies"
/>

<MovieList
  navigation={navigation}
  data={upcomingData}
  title="Upcoming Movies"
/>

<MovieList
  navigation={navigation}
  data={topRatedData}
  title="Top Rated Movies"
/>
      </ScrollView>
    </View>
  );
}
