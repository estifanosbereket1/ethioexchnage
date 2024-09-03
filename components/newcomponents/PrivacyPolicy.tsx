import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";

const PrivacyPolicy = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View className="bg-white p-3 rounded-t-2xl shadow-lg">
        <View className="mb-4">
          <Text className="text-xl font-bold text-gray-800 text-center">
            Privacy Policy
          </Text>
          <View className="h-1 w-16 bg-blue-500 mx-auto mt-2"></View>
        </View>

        <ScrollView className="mb-4" style={{ maxHeight: "70%" }}>
          <Text className="text-gray-600 leading-6">
            Welcome to our privacy policy.The purpose of this app is to allow
            users to know the current exchange rates of banks. This app provides
            up-to-date currency exchange rates but does not require or collect
            any personal data from users. Users have the right to access the
            latest currency rates provided by the app.While every effort is made
            to ensure the accuracy of the exchange rates provided by the app,
            the information is subject to change without notice. The app
            developer cannot be held liable for any financial losses or damages
            arising from the use of the app. Users are encouraged to verify
            exchange rates with their banks before proceeding with any
            transactions.
          </Text>
          <Text className="text-gray-600 leading-6 mt-4 mb-5 ">
            If you have any questions regarding this privacy policy, please
            contact us at:
            <Text className="text-blue-500">estifb045@gmail.com</Text>.
          </Text>
        </ScrollView>

        <TouchableOpacity
          onPress={onClose}
          className="bg-blue-500 py-3 rounded-lg mt-5"
        >
          <Text className="text-white text-center font-semibold text-lg">
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default PrivacyPolicy;
