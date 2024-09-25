import { styles, theme } from "@/style";
import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

const Loading = () => {
  return (
    <View className="flex-1 items-center justify-center mt-[50%]">
      <Progress.Circle
        size={60}
        indeterminate={true}
        color={theme.text}
        thickness={1}
        borderWidth={5}
        indeterminateAnimationDuration={1000}
      />
    </View>
  );
};

export default Loading;
