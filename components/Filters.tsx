import { View, Text } from "react-native";
import DropDownTemp from "./DropDownTemp";
import DropDownFull from "./DropDownFull";

const sortData = [
  { label: "High to low", value: "High to low" },
  { label: "Low to high", value: "Low to high" },
];

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

const Filters = () => {
  return (
    <View className="flex flex-col ">
      {/* <DropDownFull data={currencyType} name="Select Currency" /> */}
      {/* <DropDownFull data={sortData} name="Sort by" /> */}
    </View>
  );
};
export default Filters;
