import useBankName from "@/hooks/useBankName";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useRouter } from "expo-router";
import Header from "@/components/Header";
import { useBankContext } from "@/context/BankContext";
import { useEffect } from "react";
import useBank from "@/hooks/useBank";

const bankNames = [
  "Abay Bank ",
  "Addis International Bank S.C ",
  "Awash Bank ",
  "Ahadu Bank ",
  "Amhara Bank ",
  // "Berhan Bank ",
  "Bank Of Abyssinia ",
  "Commercial Bank Of Ethiopia (CBE) ",
  "Cooperative Bank Of Oromia ",
  "Dashen Bank ",
  "Enat Bank ",
  "Gadaa Bank ",
  "Global Bank ",
  "Hibret Bank ",
  "Gohbetoch Bank ",
  "Lion International Bank ",
  "Development Bank Of Ethiopia ",
  "Hijra Bank ",
  "Nib International Bank",
  "Oromia International Bank ",
  "Siinqee Bank ",
  "Tsedey Bank ",
  "Tsehay Bank ",
  "Wegagen Bank ",
  "Zemen Bank ",
  "Zamzam Bank ",
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

const Page = () => {
  const { bankData, loading, error } = useBankContext();

  useEffect(() => {
    console.log(bankNames, "kkkkkkkkkkkkkk");
  }, []);

  return (
    <View className="flex flex-col gap-2 my-5">
      <Header
        title="List of all Banks"
        subTitle="Click any of the listed banks to see their most recent exchange rates "
      />
      <ScrollView className="mb-36">
        {loading || error ? (
          <>
            <View className="my-2 mx-2 rounded-lg shadow-lg">
              {[...Array(10)].map((_, index) => (
                <View
                  key={index}
                  className="bg-gray-200 rounded-lg animate-pulse h-20 w-[95%] mx-auto my-2"
                ></View>
              ))}
            </View>
          </>
        ) : (
          <>
            {bankNames.map((item, index) => (
              <Link
                href={{
                  pathname: "/[bankname]",
                  params: { bankname: item as string },
                }}
                key={index}
                asChild
                className="border-b border-gray-600"
              >
                <TouchableOpacity className="w-full">
                  <View className="w-full bg-white rounded-lg p-4 flex-row justify-between items-center">
                    <View className="flex flex-row gap-4 items-center max-w-[80%]">
                      <Image
                        source={imageMap[item.split(" ")[0]]}
                        className="h-12 w-12"
                      />
                      <Text className="text-lg">{item}</Text>
                    </View>
                    <AntDesign name="right" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Page;
