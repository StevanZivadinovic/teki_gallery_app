import { styles, theme } from '@/style';
import {  useRouter } from 'expo-router';
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export const Header = () => {
    const insets = useSafeAreaInsets();
    const [favorite, setFavorite] = useState(false);
    const router = useRouter()
  return (
    <View
    style={{ flex: 1, marginTop: insets.top + 15 }}
    className="z-20 w-full flex-row justify-between items-center px-4"
  >
    <TouchableOpacity
      style={styles.background}
      className="rounded-xl p-1"
      onPress={() => {
        router.back();
      }}
    >
      <ChevronLeftIcon
        size={28}
        strokeWidth={2.5}
        color="white"
      ></ChevronLeftIcon>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setFavorite(!favorite)}
      className="rounded-xl p-1"
    >
      <HeartIcon
        size={28}
        fill={!favorite ? "white" : theme.background}
      ></HeartIcon>
    </TouchableOpacity>
  </View>
  )
}
