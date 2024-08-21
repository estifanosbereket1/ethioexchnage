import { View, Text } from "react-native";
const SecondHeader = () => {
  return (
    <View className="flex flex-col gap-1 mx-2 my-2">
      <Text className="text-black text-2xl font-extrabold">
        Current Exchange Rates
      </Text>
      <Text className="text-neutral-600 text-sm">
        Today's currency exchange across several local banks and exchange
        companies listed, feel free to compare, sort, and click each card to get
        full details{" "}
      </Text>
    </View>
  );
};
export default SecondHeader;
