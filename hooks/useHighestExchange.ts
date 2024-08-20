// import { useBankContext } from "@/context/BankContext";

import { useBankContext } from "@/context/BankContext";

// interface HighestRate {
//   bank_name: string;
//   buying_rate: number;
//   selling_rate: number;
// }

// interface UseHighestExchangeReturn {
//   highestRate: HighestRate | null;
//   error: any;
//   loading: boolean;
// }

// const useHighestExchange = (currCode: string): UseHighestExchangeReturn => {
//   const { bankData, error, loading } = useBankContext();

//   if (loading) return { highestRate: null, error, loading };
//   if (error) return { highestRate: null, error, loading };

//   let highestRate: HighestRate | null = null;

//   Object.keys(bankData).forEach((bankName) => {
//     const currencyData = bankData[bankName].find(
//       (currency: any) => currency.currency_code === currCode
//     );

//     if (currencyData) {
//       if (!highestRate || currencyData.buying_rate > highestRate.buying_rate) {
//         highestRate = {
//           bank_name: bankName,
//           buying_rate: currencyData.buying_rate,
//           selling_rate: currencyData.selling_rate,
//         };
//       }
//     }
//   });

//   return { highestRate, error: null, loading: false };
// };

// export default useHighestExchange;

interface HighestRate {
  bank_name: string;
  buying_rate: number;
  selling_rate: number;
}

interface UseHighestExchangeReturn {
  highestRate: HighestRate | null;
  error: any;
  loading: boolean;
}

const useHighestExchange = (currCode: string): UseHighestExchangeReturn => {
  const { bankData, error, loading } = useBankContext();

  if (loading) return { highestRate: null, error, loading };
  if (error) return { highestRate: null, error, loading };

  let highestRate: HighestRate | null = null;

  Object.keys(bankData).forEach((bankName) => {
    const currencyData = bankData[bankName].find(
      (currency: any) => currency.currency_code === currCode
    );

    if (currencyData) {
      if (!highestRate || currencyData.buying_rate > highestRate.buying_rate) {
        highestRate = {
          bank_name: bankName.trim(),
          buying_rate: currencyData.buying_rate,
          selling_rate: currencyData.selling_rate,
        };
      }
    }
  });

  return { highestRate, error: null, loading: false };
};

export default useHighestExchange;
