import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { styles } from "@/style";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";

export default function MovieDetails() {
  const { params: item } = useRoute();
  const insets = useSafeAreaInsets();
  console.log(item);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
        <View
          style={{ flex: 1, marginTop: insets.top + 15 }}
          className="z-20 w-full flex-row justify-between items-center px-4"
        >
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
          >
            <ChevronLeftIcon
              size={28}
              strokeWidth={2.5}
              color="white"
            ></ChevronLeftIcon>
          </TouchableOpacity>
          <TouchableOpacity
            
            className="rounded-xl p-1"
          >
            <HeartIcon
              size={28}
              color={true ? 'white' :'transparent'}
              fill={false ? 'white' :'transparent'}
            ></HeartIcon>
          </TouchableOpacity>
        </View>
     
    </ScrollView>
  );
}
