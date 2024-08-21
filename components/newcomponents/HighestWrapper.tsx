import useHighestExchange from "@/hooks/useHighestExchange";
import { useEffect, useState } from "react";

const data = [
  { label: "United Arab Emirates Dirham", value: "AED" },
  { label: "Australian Dollar", value: "AUD" },
  { label: "Canadian Dollar", value: "CAD" },
  { label: "Swiss Franc", value: "CHF" },
  { label: "Chinese Yuan", value: "CNY" },
  { label: "Djiboutian Franc", value: "DJF" },
  { label: "Danish Krone", value: "DKK" },
  { label: "Euro", value: "EUR" },
  { label: "British Pound Sterling", value: "GBP" },
  { label: "Indian Rupee", value: "INR" },
  { label: "Japanese Yen", value: "JPY" },
  { label: "Kenyan Shilling", value: "KES" },
  { label: "Kuwaiti Dinar", value: "KWD" },
  { label: "Norwegian Krone", value: "NOK" },
  { label: "Saudi Riyal", value: "SAR" },
  { label: "Swedish Krona", value: "SEK" },
  { label: "US Dollar", value: "USD" },
  { label: "South African Rand", value: "ZAR" },
];

const imageMap: Record<string, any> = {
  Abay: require("@/assets/banks/Abay Bank.png"),
  Addis: require("@/assets/banks/Addis.png"),
  Awash: require("@/assets/banks/Awash Bank.png"),
  Ahadu: require("@/assets/banks/Ahadu Bank.png"),
  Amhara: require("@/assets/banks/Amhara Bank.png"),
  Berhan: require("@/assets/banks/Birhan Bank.png"),
  Bank: require("@/assets/banks/BOA.png"),
  BOA: require("@/assets/banks/BOA.png"),
  Commercial: require("@/assets/banks/CBE.png"),
  Cooperative: require("@/assets/banks/COOP Bank.png"),
  Dashen: require("@/assets/banks/Dashen bank.png"),
  Enat: require("@/assets/banks/Enat Bank.png"),
  Gadaa: require("@/assets/banks/Gadda Bank.png"),
  Global: require("@/assets/banks/Global Bank.png"),
  Gohbetoch: require("@/assets/banks/goh.png"),
  Hibret: require("@/assets/banks/Hibret Bank.png"),
  Hijra: require("@/assets/banks/Hijra Bank.png"),
  Nib: require("@/assets/banks/NIB Bank.png"),
  Lion: require("@/assets/banks/lion.jpeg"),
  Development: require("@/assets/banks/development.jpeg"),
  Oromia: require("@/assets/banks/Oromia Bank.png"),
  Siinqee: require("@/assets/banks/Sinqe Bank.png"),
  Tsedey: require("@/assets/banks/Tsedey Bank.png"),
  Tsehay: require("@/assets/banks/Tsehay Bank.png"),
  Wegagen: require("@/assets/banks/Wegagen Bank.png"),
  Zemen: require("@/assets/banks/Zemen Bank.png"),
  Zamzam: require("@/assets/banks/zamzam bank.png"),
};

import { View, Text, Image } from "react-native";
import DropDownTemp from "../DropDownTemp";
const HighestWrapper = () => {
  const [curr, setCurr] = useState("USD");
  const { highestRate, error, loading } = useHighestExchange(curr);
  return (
    <>
      {loading ? (
        <View className="my-2 mx-2 bg-[#03001C] rounded-lg shadow-lg">
          <View className="bg-[#021526] rounded-lg animate-pulse h-24 w-[95%] mx-auto my-2"></View>
          <View className="bg-[#021526] rounded-lg animate-pulse h-24 w-[95%] mx-auto my-2"></View>
        </View>
      ) : highestRate ? (
        <View className="bg-[#03001C] rounded-xl py-6 px-3">
          <Text className="text-white text-sm font-normal mb-2">
            Highest Rates
          </Text>
          <View className="flex flex-row justify-between items-center mb-2">
            <View className="flex flex-row items-center gap-3 max-w-[65%]">
              <Image
                source={imageMap[highestRate.bank_name.split(" ")[0]]}
                className="h-12 w-12 rounded-full"
              />
              <Text className="text-white text-sm font-medium max-w-[50%]">
                {highestRate?.bank_name}
              </Text>
            </View>
            <View className="flex-1">
              <DropDownTemp
                data={data}
                defaultVal="US Dollar"
                onCurrencyChange={setCurr}
              />
            </View>
          </View>

          <View className="bg-[#021526] rounded-[40px] flex flex-row justify-around p-4">
            <View className="flex flex-col items-center border-r-2 border-gray-400 pr-8">
              <Image
                source={require("@/assets/banks/money.png")}
                className="w-7 h-7 "
              />
              <Text className="text-gray-200 text-lg font-bold">Cash</Text>
            </View>

            <View className="flex flex-col items-center">
              <Text className="text-white text-xl font-extrabold">
                {highestRate.buying_rate}
              </Text>
              <Text className="text-gray-200 text-lg font-semibold">Buy</Text>
            </View>

            <View className="flex flex-col items-center border-l-2 border-gray-400 pl-8">
              <Text className="text-white text-xl font-extrabold">
                {highestRate.selling_rate}
              </Text>
              <Text className="text-gray-200 text-lg font-semibold">Sell</Text>
            </View>
          </View>
        </View>
      ) : (
        <Text className="text-center mt-10 text-red-500">
          Error: {error ? error : "No data available"}
        </Text>
      )}
    </>
  );
};
export default HighestWrapper;
