import { FC } from "react";
import { View, Text } from "react-native";

interface TableProps {
  title: string;
  buying_rate: number;
  selling_rate: number;
  buyingRateChange?: string;
  sellingRateChange?: string;
}

const TableType: FC<TableProps> = ({
  title,
  buyingRateChange,
  buying_rate,
  sellingRateChange,
  selling_rate,
}) => {
  return (
    <View className="mb-4">
      <Text className="text-[16px] text-gray-500 font-bold mb-2">{title}</Text>
      <View className="flex flex-col gap-2">
        <View className="flex flex-row gap-4">
          <View className="relative">
            <Text className="font-semibold flex-grow text-[12px] text-red-600">
              BUY
            </Text>
            {/* <Text className="text-xs text-gray-500 top-0">
              ({buyingRateChange})
            </Text> */}
          </View>
          <View>
            <Text className="font-semibold flex-grow text-green-500 text-[12px]">
              SELL
            </Text>
            {/* <Text className="text-xs text-gray-500 top-0">
              (+{sellingRateChange})
            </Text> */}
          </View>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="flex-grow text-xs">{buying_rate}</Text>
          <Text className="flex-grow  text-xs">{selling_rate}</Text>
        </View>
      </View>
    </View>
  );
};
export default TableType;
