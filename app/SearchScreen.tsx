import { useNavigation } from "expo-router";
import React from "react";
import {
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";

const SearchScreen = () => {
  const navigation = useNavigation();
  const os = Platform.OS;
  
  return (
    <SafeAreaView className={`bg-neutral-800 flex-1`}>
      <View
        className={`flex-row mb-3 justify-between items-center border border-neutral-400 w-[90%] mx-auto rounded-full ${
          os === "android" ? "mt-8" : ""
        }`}
      >
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"white"}
          className="text-white pl-6 tracking-wider text-left w-[80%] h-12" 
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="bg-neutral-700 p-4 rounded-full m-1"
        >
          <XMarkIcon size={25} color={"white"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
