import { View, Text, Image, ActivityIndicator } from "react-native";
import TableType from "./TableType";

import DropDownTemp from "./DropDownTemp";
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
  Commercial: require("@/assets/banks/CBE.png"),
  Cooperative: require("@/assets/banks/COOP Bank.png"),
  Dashen: require("@/assets/banks/Dashen bank.png"),
  Enat: require("@/assets/banks/Enat Bank.png"),
  Gadda: require("@/assets/banks/Gadda Bank.png"),
  Global: require("@/assets/banks/newglobal.jpeg"),
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

interface HighestRateProps {
  bank_name: string;
  buyingRateChange: string;
  buying_rate: number;
  selling_rate: number;
  sellingRateChange: string;
}

const HighestRate = () => {
  const [curr, setCurr] = useState("USD");
  const { highestRate, error, loading } = useHighestExchange(curr);

  useEffect(() => {}, [curr]);

  return (
    <>
      {loading ? (
        <View className="my-2 mx-2 bg-white rounded-lg shadow-lg">
          <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
          <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
        </View>
      ) : highestRate ? (
        <View className="my-5 mx-2 bg-white rounded-lg shadow-lg">
          <View className="flex flex-row justify-center items-center gap-2">
            <Text className="font-semibold my-2 text-center text-xl">
              Highest Exchange rate
            </Text>
          </View>
          <View className="flex flex-row gap-1 justify-center items-center mx-2">
            <Text className="text-sm text-gray-600">Currency type</Text>
            <View className="flex-1">
              <DropDownTemp
                data={data}
                defaultVal="US Dollar"
                onCurrencyChange={setCurr}
              />
            </View>
          </View>

          <View className="flex flex-row gap-2 items-center">
            <View className="flex flex-col gap-2 justify-center items-center max-w-[40%]">
              <Image
                source={imageMap[highestRate.bank_name.split(" ")[0]]}
                className="h-10 w-10"
              />
              <Text className="text-sm text-center text-gray-600 max-w-[100%]">
                {highestRate?.bank_name}
              </Text>
            </View>
            <View>
              <TableType
                title="Cash"
                buying_rate={highestRate.buying_rate}
                selling_rate={highestRate.selling_rate}
              />
            </View>
            <View>
              <TableType
                title="Transaction"
                buying_rate={highestRate.buying_rate}
                selling_rate={highestRate.selling_rate}
              />
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
export default HighestRate;
