import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold tracking-tight">Home Screen</Text>
      <Link href="/movie/avenger">Avenger</Link>
    </View>
  );
}
