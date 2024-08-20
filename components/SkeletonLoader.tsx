import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

interface SkeletonLoaderProps {
  width: number;
  height: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ width, height }) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();
  }, [width]);

  return (
    <View style={[styles.skeletonContainer, { width, height }]}>
      <Animated.View
        style={[
          styles.skeletonAnimation,
          {
            transform: [{ translateX }],
            width: width * 2, // Ensure the animation is smooth
          },
        ]}
      >
        <View style={styles.skeletonGradient} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    backgroundColor: "#E0E0E0",
    overflow: "hidden",
    borderRadius: 4,
  },
  skeletonAnimation: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
  skeletonGradient: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
  },
});

export default SkeletonLoader;
