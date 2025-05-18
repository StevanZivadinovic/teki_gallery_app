import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoriteActors from './FavoriteActors';
import FavoriteMovies from './FavoriteMovies';
import { View, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';


const Tab = createMaterialTopTabNavigator();

export default function Favorites() {
  const {t}=useTranslation()
  return (
    <View className='min-h-screen'  style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 40 : 0, backgroundColor: '#0f0f0f' }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#0f0f0f',
            borderBottomWidth: 1,
            borderBottomColor: '#222',
            elevation: 0,
            
          },
          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: '600',
            textTransform: 'none',
          },
          tabBarActiveTintColor: '#f97316', // narandžasta
          tabBarInactiveTintColor: '#aaa',   // svetlo siva
          tabBarIndicatorStyle: {
            backgroundColor: '#f97316',
            height: 3,
            borderRadius: 2,
          },
        }}
      >
        <Tab.Screen name={t("Actors")} component={FavoriteActors} />
        <Tab.Screen name={t("Movies")} component={FavoriteMovies} />
      </Tab.Navigator>
    </View>
  );
}
