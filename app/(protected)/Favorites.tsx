import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoriteActors from './FavoriteActors';
import FavoriteMovies from './FavoriteMovies';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Favorites() {
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#111' },
          tabBarActiveTintColor: '#f97316',
          tabBarInactiveTintColor: '#fff',
          tabBarIndicatorStyle: { backgroundColor: '#f97316' },
        }}
      >
        <Tab.Screen name="Glumci" component={FavoriteActors} />
        <Tab.Screen name="Filmovi" component={FavoriteMovies} />
      </Tab.Navigator>
    </View>
  );
}
