import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from '@/components/MovieList';
import { useNavigation, useRouter } from 'expo-router';
import Loading from '@/components/Loading';
import useMovies from '@/hooks/useMovies';
import { ScreenNavigationPropType } from '@/components/Types';
import './../tailwind.css'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './../firebaseConfig';
export default function App() {
  const ios = Platform.OS === 'ios';
  const navigate = useRouter();
  const { topRatedData, upcomingData,trandingData,loading } = useMovies();

  const navigation = useNavigation<ScreenNavigationPropType>();
 
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user, 'OVDE')
      if (user) {
        console.log('ovde')
        // navigate.replace('/'); // User is logged in
      } else {
        navigate.replace('/LoginScreen'); // Not logged in
      }
      // setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <Loading />;
  }

  const handleNavList = ()=>{
    console.log('ovdeka sam')
  }
 
  return (
    <View className='flex-1 bg-neutral-800'>
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style='light' />
        <View className='flex-row justify-between items-center mx-4'>
          <Bars3CenterLeftIcon color='white' size={30} strokeWidth={2} onPress={()=>{handleNavList()}}/>
          <Text className='text-3xl text-white text-center font-bold' style={{ flex: 1, backgroundColor: 'transparent'}}>
            <Text style={{ flex: 1, backgroundColor: 'transparent', color:'orange' }} >M</Text>ovbeby
          </Text>
          <Pressable onPress={() => { navigate.navigate('/SearchScreen'); }}>
            <MagnifyingGlassIcon color='white' size={30} strokeWidth={2} />
          </Pressable>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>

      <MovieList navigation={navigation} data={trandingData} title='Tranding Movies' showSeeAll={true} />
        <MovieList navigation={navigation} data={upcomingData} title='Upcoming Movies' showSeeAll={true} />
        <MovieList navigation={navigation} data={topRatedData} title='Top rated movies' showSeeAll={true} />
      </ScrollView>
    </View>
  );
}
