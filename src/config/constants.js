import { Dimensions } from "react-native";

export const BANNER_URL =
  "https://www.doortodoorcars.com.au/wp-content/uploads/2018/08/tracktor-03.jpg";
export const BANNER_WIDTH = Dimensions.get("window").width;
export const BANNER_HEIGHT = (Dimensions.get("window").height / 5) * 3;
export const ANIMATION_CONFIG = {
  toValue: 1,
  duration: 500,
  useNativeDriver: true
};
