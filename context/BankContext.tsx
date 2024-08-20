import React, { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config"; // Adjust this import based on your project setup

// Define your context value type
interface BankData {
  currency_code: string;
  buying_rate: number;
  selling_rate: number;
}

interface BankContextType {
  bankData: Record<string, BankData[]>;
  loading: boolean;
  error: string | null;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

const BankProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [bankData, setBankData] = useState<Record<string, BankData[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllRates = async () => {
      setLoading(true);
      setError(null);

      try {
        const allBankData: Record<string, BankData[]> = {};
        const currencyCodes = [
          "AED",
          "AUD",
          "CAD",
          "CHF",
          "CNY",
          "DJF",
          "DKK",
          "EUR",
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

        for (const currency_code of currencyCodes) {
          const docRef = doc(collection(db, "exchangeRates"), currency_code);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data() as {
              currency_code: string;
              rates: any;
            };
            data.rates.forEach((rate: any) => {
              const bankName = rate.bank_name;

              if (!allBankData[bankName]) {
                allBankData[bankName] = [];
              }

              allBankData[bankName].push({
                currency_code: data.currency_code,
                buying_rate: rate.buying_rate,
                selling_rate: rate.selling_rate,
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

  return (
    <BankContext.Provider value={{ bankData, loading, error }}>
      {children}
    </BankContext.Provider>
  );
};

// Custom hook to use the BankContext
const useBankContext = () => {
  const context = useContext(BankContext);
  if (context === undefined) {
    throw new Error("useBankContext must be used within a BankProvider");
  }
  return context;
};

export { BankProvider, useBankContext };
