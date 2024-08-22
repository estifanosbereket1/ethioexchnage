// import Header from "@/components/Header";
// import { useBankContext } from "@/context/BankContext";
// import useBankName from "@/hooks/useBankName";
// import { Stack, useLocalSearchParams } from "expo-router";
// import { useEffect, useState } from "react";
// import { View, Text, Image, ScrollView } from "react-native";

// const imageMap: Record<string, any> = {
//   Abay: require("@/assets/banks/Abay Bank.png"),
//   Awash: require("@/assets/banks/Awash Bank.png"),
//   Ahadu: require("@/assets/banks/Ahadu Bank.png"),
//   Amhara: require("@/assets/banks/Amhara Bank.png"),
//   Birhan: require("@/assets/banks/Birhan Bank.png"),
//   BOA: require("@/assets/banks/BOA.png"),
//   CBE: require("@/assets/banks/CBE.png"),
//   COOP: require("@/assets/banks/COOP Bank.png"),
//   Dashen: require("@/assets/banks/Dashen bank.png"),
//   Enat: require("@/assets/banks/Enat Bank.png"),
//   Gadda: require("@/assets/banks/Gadda Bank.png"),
//   Global: require("@/assets/banks/Global Bank.png"),
//   Hibret: require("@/assets/banks/Hibret Bank.png"),
//   Hijra: require("@/assets/banks/Hijra Bank.png"),
//   NIB: require("@/assets/banks/NIB Bank.png"),
//   Oromia: require("@/assets/banks/Oromia Bank.png"),
//   Sinqe: require("@/assets/banks/Sinqe Bank.png"),
//   Tsedey: require("@/assets/banks/Tsedey Bank.png"),
//   Tsehay: require("@/assets/banks/Tsehay Bank.png"),
//   Wegagen: require("@/assets/banks/Wegagen Bank.png"),
//   Zemen: require("@/assets/banks/Zemen Bank.png"),
// };

// const currencyType = [
//   { label: "UAE Dirham", value: "AED" },
//   { label: "Australian Dollar", value: "AUD" },
//   { label: "Canadian Dollar", value: "CAD" },
//   { label: "Swiss Franc", value: "CHF" },
//   { label: "Chinese Yuan", value: "CNY" },
//   { label: "Djiboutian Franc", value: "DJF" },
//   { label: "Danish Krone", value: "DKK" },
//   { label: "Euro", value: "EUR" },
//   { label: "British Pound Sterling", value: "GBP" },
//   { label: "Indian Rupee", value: "INR" },
//   { label: "Japanese Yen", value: "JPY" },
//   { label: "Kenyan Shilling", value: "KES" },
//   { label: "Kuwaiti Dinar", value: "KWD" },
//   { label: "Norwegian Krone", value: "NOK" },
//   { label: "Saudi Riyal", value: "SAR" },
//   { label: "Swedish Krona", value: "SEK" },
//   { label: "US Dollar", value: "USD" },
//   { label: "South African Rand", value: "ZAR" },
// ];

// const getCurrencyLabel = (currencyCode: string) => {
//   const currency = currencyType.find((item) => item.value === currencyCode);
//   return currency ? currency.label : currencyCode;
// };

// interface BankData {
//   currency_code: string;
//   buying_rate: number;
//   selling_rate: number;
//   timestamp: string;
//   incrementPercentage: string;
//   buyingRateChange: string;
//   sellingRateChange: string;
// }

// interface BankArr {
//   bankArr: BankData[];
// }

// const BankName = () => {
//   const { bankData } = useBankContext();
//   const { bankname } = useLocalSearchParams();
//   // console.log(typeof bank);
//   // const { error, singleBank } = useBankName(bankname.toString());

//   // console.log(singleBank);
//   const [bankName, setBankName] = useState<string>("");
//   const [bank, setBank] = useState<BankArr>();

//   const [loading, setLoading] = useState<boolean>(true);
//   useEffect(() => {
//     if (bankname) {
//       setBankName(bankname.toString());
//     }
//   }, [bankname]);

//   useEffect(() => {
//     if (bankName && bankData) {
//       const hb = bankData.bankName;
//       setBank(hb);
//       setLoading(false);
//     }
//   }, [bankName]);

//   if (loading) {
//     return (
//       <View className="my-2 mx-2  rounded-lg shadow-lg">
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//         <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View>
//         <Text>Error loading data.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView>
//       <View>
//         {bankName && <Stack.Screen options={{ headerTitle: bankName }} />}
//         <View className="flex flex-col gap-2">
//           <View className="my-1 flex flex-row justify-start items-center gap-5 mx-2">
//             <Image
//               source={imageMap[bankName.split(" ")[0]]}
//               className="h-12 w-12"
//             />
//             <Text className="text-neutral-500 text-xl leading-5 font-bold">
//               {bankName}
//             </Text>
//           </View>
//           <View className="mx-2">
//             <Header
//               title={bankName}
//               subTitle={`Current exchange rates for currencies across the world for ${bankname} are listed in the following table`}
//             />
//           </View>
//           <View>
//             {bank?.map((item, index) => (
//               <View key={index}>
//                 <View
//                   key={index}
//                   className="flex-row bg-white my-1 items-center p-4 border-b border-t border-l border-r rounded-lg border-gray-200"
//                 >
//                   <Image
//                     source={imageMap[bankName.split(" ")[0]]}
//                     className="h-12 w-12 mr-4"
//                   />

//                   <View className="flex-1">
//                     <View className="flex flex-row justify-between items-center">
//                       <Text className="font-semibold text-lg mb-2">
//                         {bankname}
//                       </Text>
//                       <Text className="text-white text-[12px] bg-slate-700 py-2 rounded-lg px-3">
//                         {getCurrencyLabel(item.currency_code)}
//                       </Text>
//                     </View>
//                     <View className="flex-row justify-between mb-2">
//                       <View className="flex-col">
//                         <Text className="font-semibold text-green-500">
//                           Cash
//                         </Text>
//                         <Text className="text-xs text-gray-600">
//                           Buy: {item.buying_rate}
//                           <Text className="text-green-400">
//                             {" "}
//                             (+{item.buyingRateChange})
//                           </Text>
//                         </Text>
//                         <Text className="text-xs text-gray-600">
//                           Sell: {item.selling_rate}
//                         </Text>
//                       </View>
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };
// export default BankName;

import Header from "@/components/Header";
import { useBankContext } from "@/context/BankContext";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

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

const currencyType = [
  { label: "UAE Dirham", value: "AED" },
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

const getCurrencyLabel = (currencyCode: string) => {
  const currency = currencyType.find((item) => item.value === currencyCode);
  return currency ? currency.label : currencyCode;
};

interface BankData {
  currency_code: string;
  buying_rate: number;
  selling_rate: number;
}

const BankName = () => {
  const { bankData } = useBankContext();
  const { bankname } = useLocalSearchParams();
  const [bankName, setBankName] = useState<string>("");
  const [bank, setBank] = useState<BankData[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (bankname) {
      setBankName(bankname.toString());
      console.log(bankData[bankname.toString()]);
      console.log(bankname);
    }
  }, [bankname]);

  useEffect(() => {
    if (bankName && bankData) {
      // Assuming bankData is a dictionary with bank names as keys
      const bankDataForName = bankData[bankName];
      setBank(bankDataForName);
      setLoading(false);
    }
  }, [bankName, bankData]);

  if (loading) {
    return (
      <View className="my-2 mx-2 rounded-lg shadow-lg">
        {[...Array(10)].map((_, index) => (
          <View
            key={index}
            className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"
          ></View>
        ))}
      </View>
    );
  }

  if (!bank) {
    return (
      <View className="flex flex-col gap-3">
        <Text className="text-xl text-red-600">Please Refresh yor Network</Text>
        <View className="my-2 mx-2 rounded-lg shadow-lg">
          {[...Array(10)].map((_, index) => (
            <View
              key={index}
              className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"
            ></View>
          ))}
        </View>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        {bankName && <Stack.Screen options={{ headerTitle: bankName }} />}
        <View className="flex flex-col gap-2">
          <View className="my-1 flex flex-row justify-start items-center gap-5 mx-2">
            <Image
              source={imageMap[bankName.split(" ")[0]]}
              className="h-12 w-12"
            />
            <Text className="text-neutral-500 text-xl leading-5 font-bold max-w-[80%] ">
              {bankName}
            </Text>
          </View>
          <View className="mx-2">
            <Header
              title={bankName}
              subTitle={`Current exchange rates for currencies across the world for ${bankname} are listed in the following table`}
            />
          </View>
          <View>
            {bank.map((item, index) => (
              <View
                key={index}
                className="flex-row bg-white my-1 items-center p-4 border-b border-t border-l border-r rounded-lg border-gray-200"
              >
                <Image
                  source={imageMap[bankName.split(" ")[0]]}
                  className="h-12 w-12 mr-4"
                />
                <View className="flex-1">
                  <View className="flex flex-row justify-between items-center">
                    <Text className="font-semibold text-lg mb-2 max-w-[50%]">
                      {bankName}
                    </Text>
                    <Text className="text-white text-[12px] bg-slate-700 py-2 rounded-lg px-3">
                      {getCurrencyLabel(item.currency_code)}
                    </Text>
                  </View>
                  <View className="flex-row justify-between mb-2">
                    <View className="flex-col">
                      <Text className="font-semibold text-green-500">Cash</Text>
                      <Text className="text-xs text-gray-600">
                        Buy: {item.buying_rate}
                      </Text>
                      <Text className="text-xs text-gray-600">
                        Sell: {item.selling_rate}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BankName;
