// import { useState, useEffect } from "react";
// import { collection, doc, getDoc } from "firebase/firestore";
// import { db } from "@/firebase/config";

// interface Rate {
//   bank_name: string;
//   buying_rate: number;
//   selling_rate: number;
//   timestamp: string;
//   incrementPercentage: string;
//   buyingRateChange: string;
//   sellingRateChange: string;
// }

// interface ExchangeRate {
//   currencyCode: string;
//   rates: Rate[];
// }

// const useExchangeRates = (currencyCode: string) => {
//   const [exchangeRates, setExchangeRates] = useState<ExchangeRate | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const docRef = doc(collection(db, "exchangeRates"), currencyCode);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           const data = docSnap.data() as ExchangeRate;
//           setExchangeRates(data);
//         } else {
//           setError("No such document!");
//         }
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (currencyCode) {
//       fetchExchangeRates();
//     }
//   }, [currencyCode]);

//   return { exchangeRates, loading, error };
// };

// export default useExchangeRates;

import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import * as Network from "expo-network";

interface Rate {
  bank_name: string;
  buying_rate: number;
  selling_rate: number;
}

interface ExchangeRate {
  currencyCode: string;
  rates: Rate[];
}

const useExchangeRates = (currencyCode: string) => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [connection, setConnection] = useState<boolean | undefined>(true); // Add connection state

  useEffect(() => {
    const checkNetworkConnection = async () => {
      const networkState = await Network.getNetworkStateAsync();
      setConnection(networkState.isConnected);
    };

    checkNetworkConnection();
  }, []);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setError(null);
      try {
        const docRef = doc(collection(db, "exchangeRates"), currencyCode);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as ExchangeRate;
          setExchangeRates(data);
        } else {
          setError("No such document!");
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false); // Don't set loading to false if you want to keep the skeleton loader
      }
    };

    if (currencyCode && connection) {
      fetchExchangeRates();
    } else if (!connection) {
      setError("No network connection");
    }
  }, [currencyCode, connection]);

  return { exchangeRates, loading, error, connection };
};

export default useExchangeRates;
