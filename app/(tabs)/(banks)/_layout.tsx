import { BankProvider } from "@/context/BankContext";
import { Stack } from "expo-router";

const BankLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default BankLayout;
