import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchExchangeRates = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "exchangeRates"));
    const data: any = {};
    querySnapshot.forEach((doc) => {
      data[doc.id] = doc.data();
    });
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};
