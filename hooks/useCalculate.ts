// import { useEffect, useState } from "react";
// import { View, Text } from "react-native";
// import useExchangeRates from "./useExchangeRates";
// const useCalculate = () => {
//   const [curr, setCurr] = useState("USD");
//   const { error, exchangeRates, loading } = useExchangeRates(curr);
//   const [banks, setBanks] = useState("");
//   const [choice, setChoice] = useState("buying_rate");
//   useEffect(() => {
//     if (exchangeRates && useExchangeRates.rates) {
//       const restructuredData = exchangeRates.rates.map((rate) => ({
//         bank_name: rate.bank_name,
//         choice: choice === "buying_rate" ? "Buying" : "Selling",
//         buying_rate: rate.buying_rate,
//         selling_rate: rate.selling_rate,
//       }));
//       setBanks(restructuredData);
//     }
//   }, [exchangeRates, choice]);
// };
// export default useCalculate;
