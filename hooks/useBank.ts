import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const currencyCodes = [
  "AED",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "DJF",
  "DKK",
  "EUR",
  "EUR.",
  "EURO",
  "Eur",
  "GBP",
  "INR",
  "JPY",
  "KES",
  "KWD",
  "NOK",
  "SAR",
  "SEK",
  "USD",
  "YUA",
  "ZAR",
];

interface Rate {
  bank_name: string;
  buying_rate: number;
  selling_rate: number;
  timestamp: string;
  incrementPercentage: string;
  buyingRateChange: string;
  sellingRateChange: string;
}

interface ExchangeRate {
  currency_code: string; // Updated to `currency_code`
  rates: Rate[];
}

interface BankData {
  [bankName: string]: {
    currency_code: string;
    buying_rate: number;
    selling_rate: number;
    timestamp: string;
    incrementPercentage: string;
    buyingRateChange: string;
    sellingRateChange: string;
  }[];
}

const useBank = () => {
  const [bankData, setBankData] = useState<BankData>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllRates = async () => {
      setLoading(true);
      setError(null);

      try {
        const allBankData: BankData = {};

        for (const currency_code of currencyCodes) {
          const docRef = doc(collection(db, "exchangeRates"), currency_code);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data() as ExchangeRate;

            data.rates.forEach((rate) => {
              const bankName = rate.bank_name;

              if (!allBankData[bankName]) {
                allBankData[bankName] = [];
              }

              allBankData[bankName].push({
                currency_code, // Updated to `currency_code`
                buying_rate: rate.buying_rate,
                selling_rate: rate.selling_rate,
                timestamp: rate.timestamp,
                incrementPercentage: rate.incrementPercentage,
                buyingRateChange: rate.buyingRateChange,
                sellingRateChange: rate.sellingRateChange,
              });
            });
          }
        }

        setBankData(allBankData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRates();
  }, []);

  return { bankData, loading, error };
};

export default useBank;
