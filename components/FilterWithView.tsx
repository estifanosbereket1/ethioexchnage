import { View, Text } from "react-native";
import DropDownFull from "./DropDownFull";
import TableComponent from "./TableComponent";
import { useState } from "react";

const sortData = [
  { label: "High to low", value: "hl" },
  { label: "Low to high", value: "lh" },
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

const FilterWithView = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [sort, setSort] = useState("");
  return (
    <View>
      <View className="flex flex-col ">
        <DropDownFull
          data={currencyType}
          name="Select Currency"
          onCurrencyChange={setSelectedCurrency}
          defaultVal="US Dollars"
        />
        {/* <DropDownFull
          data={sortData}
          name="Sort by"
          onCurrencyChange={setSort}
        /> */}
      </View>
      <TableComponent selectedCurrency={selectedCurrency} />
    </View>
  );
};
export default FilterWithView;
