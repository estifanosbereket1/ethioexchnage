// import { View, Text, Image } from "react-native";
// const NewHeader = () => {
//   const image = require("@/assets/banks/star.png");
//   return (
//     <View className="flex flex-col gap-1 items-start justify-center">
//       <Text className="text-sm text-neutral-400 font-medium mx-2">Hello,</Text>
//       <View className="flex justify-start mx-0 items-center flex-row gap-2">
//         <Text className="text-black text-lg font-extrabold">
//           Welcome to EthioExchnage
//         </Text>
//         <Image source={image} className="h-8 w-8" />
//       </View>
//     </View>
//   );
// };
// export default NewHeader;

import { View, Text, Image } from "react-native";

const NewHeader = () => {
  const image = require("@/assets/banks/star.png");
  return (
    <View className="flex flex-col gap-1 items-start justify-center py-3">
      <Text className="text-sm text-gray-500 font-medium px-2">Hello,</Text>
      <View className="flex flex-row items-center gap-2 px-0 mx-0">
        <Text className="text-black text-2xl font-extrabold">
          Welcome to EthioExchange
        </Text>
        <Image source={image} className="h-8 w-8" />
      </View>
    </View>
  );
};

export default NewHeader;
