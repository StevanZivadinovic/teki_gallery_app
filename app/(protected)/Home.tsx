import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, ScrollView, Pressable, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from '@/components/MovieList';
import { useNavigation, useRouter } from 'expo-router';
import Loading from '@/components/Loading';
import useMovies from '@/hooks/useMovies';
import { ScreenNavigationPropType } from '@/components/Types';
import './../../tailwind.css'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useState } from 'react';
export default function App() {
  const ios = Platform.OS === 'ios';
  const navigate = useRouter();
  const { topRatedData, upcomingData,trandingData,loading } = useMovies();
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
    <View className='flex-1 bg-neutral-800'>
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style='light' />
        <View className='flex-row justify-between items-center mx-4'>
        
          <Bars3CenterLeftIcon color='white' size={30} strokeWidth={2} onPress={() => setModalVisible(!modalVisible)}/>
            <Modal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/60">
          <View className="bg-neutral-800 p-6 rounded-t-3xl space-y-4">
            <Pressable onPress={() => {
              setModalVisible(false);
              navigate.push('/(protected)/Settings');
            }}>
              <Text className="text-white text-lg">⚙️ Podešavanja</Text>
            </Pressable>

            <Pressable onPress={() => {
              setModalVisible(false);
              navigate.push('/(protected)/Favorites');
            }}>
              <Text className="text-white text-lg">⭐ Omiljeni filmovi i glumci</Text>
            </Pressable>

            <Pressable onPress={handleLogout}>
              <Text className="text-red-400 text-lg">🚪 Odjavi se</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible(false)}>
              <Text className="text-white text-center mt-4">Zatvori</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
          
          <Text className='text-3xl text-white text-center font-bold' style={{ flex: 1, backgroundColor: 'transparent'}}>
            <Text style={{ flex: 1, backgroundColor: 'transparent', color:'orange' }} >M</Text>ovbeby
          </Text>
          <Pressable onPress={() => { navigate.navigate('/SearchScreen'); }}>
            <MagnifyingGlassIcon color='white' size={30} strokeWidth={2} />
          </Pressable>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>

      <MovieList customHeight={0.25} customWidth={0.35} navigation={navigation} data={trandingData} title='Tranding Movies'  />
        <MovieList navigation={navigation} data={upcomingData} title='Upcoming Movies'  />
        <MovieList navigation={navigation} data={topRatedData} title='Top rated movies' />
      </ScrollView>
    </View>
  );
}
