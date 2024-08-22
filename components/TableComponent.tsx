// import useExchangeRates from "@/hooks/useExchangeRates";

// import React, { FC } from "react";
// import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
// import CustomToast from "./CustomToast";

// interface TableComponentProps {
//   selectedCurrency: string;
// }

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

// const TableComponent: FC<TableComponentProps> = ({ selectedCurrency }) => {
//   const { exchangeRates, error, loading, connection } =
//     useExchangeRates(selectedCurrency);
//   if (loading) {
//     <View className="my-2 mx-2  rounded-lg shadow-lg">
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>

//       <View className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"></View>
//     </View>;
//   }

//   // if (error) {
//   //   return <Text>Error: {error || "Something went wrong"}</Text>;
//   // }

//   if (connection == true) {
//     <CustomToast
//       message="Please check your Internet connection and try again"
//       type="error"
//       visible
//     />;
//   }

//   // Handle the case where exchangeRates is null or does not have a rate property
//   if (
//     !exchangeRates ||
//     !exchangeRates.rates ||
//     exchangeRates.rates.length === 0
//   ) {
//     // console.log(exchangeRates);
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

//   return (
//     <ScrollView className="py-2">
//       {exchangeRates.rates.map((item, index) => (
//         <View
//           key={index}
//           className="flex-row bg-white my-1 items-center p-4 border-b border-t border-l border-r rounded-lg border-gray-200"
//         >
//           <Image
//             source={imageMap[item.bank_name.split(" ")[0]]}
//             className="h-12 w-12 mr-4"
//           />

//           <View className="flex-1">
//             <View className="flex flex-row justify-between items-center">
//               <Text className="font-semibold text-lg mb-2">
//                 {item.bank_name}
//               </Text>
//               <Text className="text-white text-[12px] bg-slate-700 py-2 rounded-lg px-3">
//                 {selectedCurrency}
//               </Text>
//             </View>
//             <View className="flex-row justify-between mb-2">
//               {/* Will be fixed when api is fixed*/}

//               {/* <View className="flex-col">
//                 <Text className="font-semibold text-red-600">Transaction</Text>
//                 <Text className="text-xs text-gray-600">
//                   Buy: {item.buying_rate}
//                 </Text>
//                 <Text className="text-xs text-gray-600">
//                   Sell: {item.selling_rate}
//                 </Text>
//               </View> */}
//               <View className="flex-col">
//                 <Text className="font-semibold text-green-500">Cash</Text>
//                 <Text className="text-xs text-gray-600">
//                   Buy: {item.buying_rate}
//                   <Text className="text-green-400">
//                     {" "}
//                     (+{item.buyingRateChange})
//                   </Text>
//                 </Text>
//                 <Text className="text-xs text-gray-600">
//                   Sell: {item.selling_rate}
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default TableComponent;

import useExchangeRates from "@/hooks/useExchangeRates";
import React, { FC, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import CustomToast from "./CustomToast";

interface TableComponentProps {
  selectedCurrency: string;
}

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
  National: require("@/assets/banks/national.png"),
  Development: require("@/assets/banks/development.jpeg"),
  Oromia: require("@/assets/banks/Oromia Bank.png"),
  Siinqee: require("@/assets/banks/Sinqe Bank.png"),
  Tsedey: require("@/assets/banks/Tsedey Bank.png"),
  Tsehay: require("@/assets/banks/Tsehay Bank.png"),
  Wegagen: require("@/assets/banks/Wegagen Bank.png"),
  Zemen: require("@/assets/banks/Zemen Bank.png"),
  Zamzam: require("@/assets/banks/zamzam bank.png"),
};

const TableComponent: FC<TableComponentProps> = ({ selectedCurrency }) => {
  const { exchangeRates, error, loading, connection } =
    useExchangeRates(selectedCurrency);

  useEffect(() => {
    // console.log(exchangeRates, "kkkkkkkkkkkkkkkkkkkkkkkkkkkk");
  }, [selectedCurrency]);

  if (loading) {
    return (
      <View className="my-2 mx-2  rounded-lg shadow-lg">
        {/* Loading Skeleton */}
        {[...Array(10)].map((_, index) => (
          <View
            key={index}
            className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"
          ></View>
        ))}
      </View>
    );
  }

  if (!connection) {
    return (
      <CustomToast
        message="Please check your Internet connection and try again"
        type="error"
        visible
      />
    );
  }

  if (
    !exchangeRates ||
    !exchangeRates.rates ||
    exchangeRates.rates.length === 0
  ) {
    return (
      <View className="my-2 mx-2  rounded-lg shadow-lg">
        {[...Array(10)].map((_, index) => (
          <View
            key={index}
            className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"
          ></View>
        ))}
      </View>
    );
  }

  // Remove duplicates based on bank_name
  const uniqueRates = exchangeRates.rates.filter(
    (rate, index, self) =>
      index === self.findIndex((r) => r.bank_name === rate.bank_name)
  );

  // Sort the uniqueRates by highest buying_rate
  const sortedRates = uniqueRates.sort((a, b) => b.buying_rate - a.buying_rate);

  return (
    <ScrollView className="py-2">
      {sortedRates.map((item, index) => (
        <View
          key={index}
          className="flex-row bg-white my-1 items-center p-4 border-b border-t border-l border-r rounded-lg border-gray-200"
        >
          <Image
            source={imageMap[item.bank_name.split(" ")[0]]}
            className="h-12 w-12 mr-4 "
          />

          <View className="flex-1">
            <View className="flex flex-row justify-between items-center">
              <Text className="font-semibold text-lg mb-2 max-w-[60%]">
                {item.bank_name}
              </Text>
              <Text className="text-white text-[12px] bg-slate-700 py-2 rounded-lg px-3">
                {selectedCurrency}
              </Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <View className="flex flex-row gap-4 items-center">
                <Text className="font-semibold text-lg text-green-500">
                  Cash
                </Text>
                <View className="flex flex-row gap-1 items-center">
                  <Text className="text-sm text-neutral-600">Buy:</Text>
                  <Text className="text-lg text-neutral-700 font-bold">
                    {item.buying_rate}
                  </Text>
                </View>
                <View className="flex flex-row gap-1 items-center">
                  <Text className="text-sm text-neutral-600">Sell:</Text>
                  <Text className="text-lg text-neutral-700 font-bold">
                    {item.selling_rate}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default TableComponent;
