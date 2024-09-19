import { Header } from "@/components/Header";
import React from "react";
import { Dimensions, Image, ScrollView, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/components/Types";

const Person = () => {
  const { width, height } = Dimensions.get("window");
  const route = useRoute<RouteProp<RootStackParamList, "Person">>();
  const person = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <Header />
      <View
        className="flex-row justify-center mt-8 rounded-full"
        style={{
          shadowColor: 'white', // Make it red for visibility
          // shadowOffset: { width: 0, height: 10 },
          // shadowOpacity: 1, // Full opacity for clear visibility
          // shadowRadius: 40, // Increase radius for softer shadow
          elevation: 1, // Elevation for Android 
          
        }}
        
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: 'white',
          }}
          className="overflow-hidden rounded-full"
        >
          <Image
            source={person?.src}
            style={{
              width: width * 0.8,
              height: height * 0.4,             
            }}
            className="rounded-full"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Person;
