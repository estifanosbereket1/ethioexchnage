import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import DropDownFull from "@/components/DropDownFull";
import Header from "@/components/Header";
import useExchangeRates from "@/hooks/useExchangeRates";

const conversionChoice = [
  { label: "Buying", value: "buying_rate" },
  { label: "Selling", value: "selling_rate" },
];

const imageMap: Record<string, any> = {
  Abay: require("@/assets/banks/Abay Bank.png"),
  Addis: require("@/assets/banks/Addis.png"),
  Awash: require("@/assets/banks/Awash Bank.png"),
  Ahadu: require("@/assets/banks/Ahadu Bank.png"),
  Amhara: require("@/assets/banks/Amhara Bank.png"),
  Birhan: require("@/assets/banks/Birhan Bank.png"),
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

const currencyType = [
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

interface DropDownBank {
  bank_name: string;
  choice: string;
  buying_rate?: number;
  selling_rate?: number;
}

interface Banks {
  allBanks: DropDownBank[];
}

const Page: React.FC<Banks> = () => {
  const [curr, setCurr] = useState("USD");
  const [choice, setChoice] = useState("buying_rate");
  const { exchangeRates } = useExchangeRates(curr);

  const [banks, setBanks] = useState<DropDownBank[]>([]);
  const [amount, setAmount] = useState("");
  const [bankCurr, setBankCurr] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [img, setImg] = useState("");
  const [formattedResult, setFormattedResult] = useState<string | null>(null);

  // Prepare bank data and set bankCurr to the highest rate when curr changes
  useEffect(() => {
    if (exchangeRates && exchangeRates.rates) {
      const restructuredData = exchangeRates.rates.map((rate) => ({
        bank_name: rate.bank_name,
        choice: choice === "buying_rate" ? "Buying" : "Selling",
        buying_rate: rate.buying_rate,
        selling_rate: rate.selling_rate,
      }));

      setBanks(restructuredData);

      // Automatically set bankCurr to the highest rate when curr changes
      const highestRateBank = restructuredData.reduce((prev, current) => {
        const currentRate =
          choice === "buying_rate"
            ? current.buying_rate || 0
            : current.selling_rate || 0;
        const prevRate =
          choice === "buying_rate"
            ? prev.buying_rate || 0
            : prev.selling_rate || 0;
        return currentRate > prevRate ? current : prev;
      });

      setBankCurr(highestRateBank.bank_name);
    }
  }, [exchangeRates, choice]);

  // Prepare bank options and sort by decreasing order of value
  const bankOptions = banks
    .map((bank) => {
      const rate =
        bank.choice === "Buying" ? bank.buying_rate : bank.selling_rate;
      return {
        label: `${bank.bank_name} (${rate || 0})`,
        value: bank.bank_name,
      };
    })
    .sort((a, b) => {
      const rateA = parseFloat(a.label.split("(")[1].replace(")", ""));
      const rateB = parseFloat(b.label.split("(")[1].replace(")", ""));
      return rateB - rateA; // Sort by decreasing order of value
    });

  // Update result when amount, bankCurr, or curr changes
  useEffect(() => {
    if (amount && bankCurr) {
      const selectedBank = banks.find((bank) => bank.bank_name === bankCurr);
      if (selectedBank) {
        const rate =
          choice === "buying_rate"
            ? selectedBank.buying_rate
            : selectedBank.selling_rate;
        const calcResult = parseFloat(amount) * (rate || 0);
        const formattedResult = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(calcResult);
        setFormattedResult(formattedResult);
        setResult(calcResult);
      }
    } else {
      setResult(null);
    }
  }, [amount, bankCurr, choice, banks, curr]);

  const handleCalculate = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 mt-10"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-10 mx-2 flex flex-col gap-2">
          <Header
            title="Calculate"
            subTitle="Calculate your total exchange amount by selecting your currency and rates across several banks of your choice"
          />
          <View className="flex flex-col justify-center gap-2">
            <DropDownFull
              data={currencyType}
              name="Select Currency"
              onCurrencyChange={setCurr}
              defaultVal="US Dollar"
            />
            <DropDownFull
              data={conversionChoice}
              name="Buying or Selling"
              onCurrencyChange={setChoice}
              defaultVal="Buying"
            />
            <DropDownFull
              data={bankOptions}
              name="Choose Rate"
              defaultVal={bankCurr}
              onCurrencyChange={setBankCurr}
            />
            <TextInput
              placeholder="Enter Amount"
              keyboardType="numeric"
              className="border-b border-black mb-9 h-10 px-2 w-[50%] text-center shadow-2xl self-center"
              value={amount}
              onChangeText={setAmount}
            />
            <View className="flex items-center flex-row justify-between mx-3 gap-3">
              <TouchableOpacity
                className="w-[80%] py-2 rounded-2xl bg-black"
                disabled={!amount}
                onPress={handleCalculate}
              >
                <Text className="text-white text-center text-2xl font-bold ">
                  Calculate
                </Text>
              </TouchableOpacity>
              <View>
                <Text className="text-xl font-medium bg-cyan-600 rounded-xl px-4 py-2 text-white">
                  Birr
                </Text>
              </View>
            </View>
            {result !== null && (
              <View className="flex flex-col rounded-2xl shadow-xl bg-white px-8 py-6 justify-center items-center gap-5">
                <View className="my-4 flex flex-row justify-center items-center gap-5  ">
                  <Image
                    source={imageMap[bankCurr?.split(" ")[0] || ""]}
                    className="h-12 w-12"
                  />

                  <Text className="text-neutral-500 text-xl leading-5 font-bold">
                    {bankCurr?.split("(")[0]}
                  </Text>
                </View>
                <View>
                  <Text className="text-black font-extrabold text-2xl">
                    {formattedResult} <Text className="text-xl">Birr</Text>
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Page;
