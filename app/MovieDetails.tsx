import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { styles, theme } from "@/style";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { useEffect, useState } from "react";
import { RootStackParamList } from "@/components/Types";
import { LinearGradient } from "expo-linear-gradient";

export default function MovieDetails() {
  const { width, height } = Dimensions.get("window");
  const route = useRoute<RouteProp<RootStackParamList, "MovieDetails">>();
  const item = route.params;
  const insets = useSafeAreaInsets();
  const [favorite, setFavorite] = useState(false);
  console.log(item && item.id);
  const imageMap: { [key: string]: any } = {
    "1": require("./../assets/images/sv_jovan.jpg"),
    "2": require("./../assets/images/sv_andjeo_cuvar.png"),
    "3": require("./../assets/images/sv_velikomucenik_georgije.jpg"),
  };
  const imageSource =
    imageMap[item.id] || require("./../assets/images/sv_jovan.jpg");
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View
        style={{ flex: 1, marginTop: insets.top + 15 }}
        className="z-20 w-full flex-row justify-between items-center px-4 absolute"
      >
        <TouchableOpacity style={styles.background} className="rounded-xl p-1">
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

      <View className="">
        <Image
          source={imageSource}
          style={{
            width: width,
            height: height * 0.55,
            resizeMode: "cover",
            top: 0,
            left: 0,
          }}
        />
        <LinearGradient
        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,0.8)']}
        style={{width, height:height*0.4}}
        className="absolute bottom-0">
      </LinearGradient>
      </View>
    </ScrollView>
  );
}
