import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Network from "expo-network";

import Filters from "@/components/Filters";
import FilterWithView from "@/components/FilterWithView";
import Header from "@/components/Header";
import HighestRate from "@/components/HighestRate";
import TableView from "@/components/TableView";
import CustomToast from "@/components/CustomToast";
import useBank from "@/hooks/useBank";
import { useBankContext } from "@/context/BankContext";
import NewHeader from "@/components/newcomponents/NewHeader";
import HighestWrapper from "@/components/newcomponents/HighestWrapper";
import SecondHeader from "@/components/newcomponents/SecondHeader";
import PrivacyPolicy from "@/components/newcomponents/PrivacyPolicy";

const Page = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [connection, setConnection] = useState<boolean | undefined>(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [key, setKey] = useState(0); // State to hold a key for forcing re-render
  const { bankData, error, loading } = useBankContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(bankData, "llllllllllllllllll");

  // Function to check network connection
  const checkNetworkConnection = async () => {
    const networkState = await Network.getNetworkStateAsync();
    setConnection(networkState.isConnected);
    if (!networkState.isConnected) {
      setToastVisible(true);
    }
  };

  useEffect(() => {
    checkNetworkConnection();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await checkNetworkConnection();

    // Force a re-render by updating the key
    setKey((prevKey) => prevKey + 1);

    // Simulate a network request for refreshing data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setRefreshing(false);
  };

  // return (
  //   <>
  //     <ScrollView
  //       contentContainerStyle={{ flexGrow: 1 }}
  //       style={{ flex: 1 }}
  //       refreshControl={
  //         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  //       }
  //     >
  //       <View className="flex flex-col gap-4 mx-2 my-6">
  //         {/* <Header
  //           key={`header-${key}`}
  //           main
  //           title="Welcome to EthioExchnage"
  //           subTitle="An app to show you the current and latest exchange rates across Ethiopian Banks Daily!!!"
  //         /> */}
  //         <NewHeader key={`header-${key}`} />

  //         {!connection ? (
  //           <View className="flex flex-col gap-4 items-center justify-center mt-20">
  //             <Text className="text-red-600 text-center">
  //               No Internet Connection. Please check your network and refresh
  //               the page.
  //             </Text>
  //           </View>
  //         ) : (
  //           <>
  //             {/* <HighestRate key={`highest-rate-${key}`} /> */}
  //             <HighestWrapper />
  //             <View key={`filter-view-${key}`} className="flex flex-col gap-1">
  //               {/* <Header
  //                 title="Current Exchange Rates"
  //                 subTitle="Today's currency exchange across several local banks and exchange companies listed, feel free to compare, sort, and click each card to get full details "
  //               /> */}

  //               <SecondHeader />
  //               <FilterWithView key={`filter-${key}`} />
  //             </View>
  //           </>
  //         )}
  //       </View>
  //     </ScrollView>
  //     <CustomToast
  //       visible={toastVisible}
  //       message="No internet connection!"
  //       type="error"
  //     />
  //   </>
  // );

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className="flex flex-col gap-4 mx-2 my-6">
          <NewHeader key={`header-${key}`} />

          {!connection ? (
            <View className="flex flex-col gap-4 items-center justify-center mt-20">
              <Text className="text-red-600 text-center">
                No Internet Connection. Please check your network and refresh
                the page.
              </Text>
            </View>
          ) : (
            <>
              <HighestWrapper />
              <View key={`filter-view-${key}`} className="flex flex-col gap-1">
                <SecondHeader />
                <FilterWithView key={`filter-${key}`} />
              </View>
            </>
          )}

          {/* Privacy Policy Link */}
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            className="mt-4"
          >
            <Text className="text-blue-500 text-center">Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <CustomToast
        visible={toastVisible}
        message="No internet connection!"
        type="error"
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicy
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default Page;
