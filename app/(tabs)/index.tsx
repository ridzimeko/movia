import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="z-10 px-5"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-auto mx-auto mt-20 mb-5" />

        <View>
          <SearchBar
            placeholder="Search for a movie"
            onPress={() => router.push("/search")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
