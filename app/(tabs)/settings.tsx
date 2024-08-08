import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function TabFourScreen() {
  const { dark } = useTheme();
  const themeColors = dark ? Colors.dark : Colors.light;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: themeColors.background },
      ]}
      style={styles.scrollView}
    >
      <View
        style={[
          styles.headerContainer,
          {
            backgroundColor: themeColors.background,
            borderBottomWidth: 1,
            borderBottomColor: themeColors.text,
          },
        ]}
      >
        <View style={styles.Logo}>
          <Ionicons
            name="moon"
            size={24}
            color={themeColors.icon}
            style={styles.textLogo}
          />
          <ThemedText
            type="title"
            style={[styles.textLogo, { color: themeColors.text }]}
          >
            Future
          </ThemedText>
        </View>
      </View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: themeColors.text }}>
          Settings
        </ThemedText>
      </ThemedView>
      <ThemedText style={{ color: themeColors.text }}>
        This app includes example code to help you get started.
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  Logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 30,
    flexDirection: "row",
  },
  textLogo: {
    fontSize: 24,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
    alignItems: "center",
  },
});
