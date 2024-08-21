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
      <View className="bg-white p-6 rounded-t-2xl shadow-lg">
        <View className="mb-4">
          <Text className="text-2xl font-bold text-gray-800 text-center">
            Privacy Policy
          </Text>
          <View className="h-1 w-16 bg-blue-500 mx-auto mt-2"></View>
        </View>

        <ScrollView className="mb-4" style={{ maxHeight: "70%" }}>
          <Text className="text-gray-600 leading-6">
            Welcome to our privacy policy. We are committed to protecting your
            personal information and your right to privacy. The purpose of this
            app is to allow users to know the current exchange rates of banks.
            This app provides up-to-date currency exchange rates but does not
            require or collect any personal data from users. Users have the
            right to access the latest currency rates provided by the app. The
            information presented in the app may be subject to changes, and the
            app developer is not liable for any inconsistencies. Since this app
            does not collect or store any personal data, there are no security
            concerns regarding user information.
          </Text>
          <Text className="text-gray-600 leading-6 mt-4">
            If you have any questions or concerns regarding this privacy policy,
            please contact us at:{" "}
            <Text className="text-blue-500">youremail@example.com</Text>.
          </Text>
        </ScrollView>

        <TouchableOpacity
          onPress={onClose}
          className="bg-blue-500 py-3 rounded-lg"
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
