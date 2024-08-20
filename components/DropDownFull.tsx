import { FC } from "react";
import { View, Text } from "react-native";
import DropDownTemp from "./DropDownTemp";

interface ArrProps {
  label: string;
  value: string;
}

interface DropDownFullProps {
  name: string;
  data: ArrProps[];
  onCurrencyChange: (currency: string) => void;
  defaultVal: string;
}

const DropDownFull: FC<DropDownFullProps> = ({
  data,
  name,
  onCurrencyChange,
  defaultVal,
}) => {
  return (
    <View className="flex flex-col">
      <View className="flex flex-row gap-3 items-center mx-2">
        <Text className="text-sm text-gray-600">{name}:</Text>
        <View className="flex-1">
          <DropDownTemp
            data={data}
            defaultVal={defaultVal}
            onCurrencyChange={onCurrencyChange}
          />
        </View>
      </View>
    </View>
  );
};
export default DropDownFull;
