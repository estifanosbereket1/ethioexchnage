import { useEffect, useState } from "react";
import useBank from "./useBank";

interface BankData {
  currency_code: string;
  buying_rate: number;
  selling_rate: number;
}

interface SingleBankData {
  bank: BankData[];
}

const useBankName = (bank_name: string) => {
  const { bankData, error, loading } = useBank();
  const [singleBank, setSingleBank] = useState<SingleBankData | undefined>();

  useEffect(() => {
    if (bankData && bank_name) {
      setSingleBank({ bank: bankData[bank_name] });
    }
  }, [bankData, bank_name]);

  return { singleBank, error, loading };
};

export default useBankName;
