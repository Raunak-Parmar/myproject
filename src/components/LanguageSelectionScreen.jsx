import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const LanguageSelectionScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../components/images/Ellipse6.png")}
          style={[styles.image, styles.imageOne]}
        />
        <Image
          source={require("../components/images/Simplification.png")}
          style={[styles.image, styles.imageTwo]}
        />
      </View>

      <Text style={styles.title}>Select Language</Text>
      <Text style={styles.subtitle}>You can update this anytime</Text>

      {/* Tamil Button */}
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === "Tamil" && styles.languageButtonSelected,
        ]}
        onPress={() => handleLanguageSelect("Tamil")}
      >
        <Text
          style={[
            styles.languageText,
            selectedLanguage === "Tamil" && styles.languageTextSelected,
          ]}
        >
          தமிழ்
        </Text>
      </TouchableOpacity>

      {/* English Button */}
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === "English" && styles.languageButtonSelected,
        ]}
        onPress={() => handleLanguageSelect("English")}
      >
        <Text
          style={[
            styles.languageText,
            selectedLanguage === "English" && styles.languageTextSelected,
          ]}
        >
          English
        </Text>
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextButton,
          !selectedLanguage && styles.nextButtonDisabled,
        ]}
        disabled={!selectedLanguage}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "400",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#282828",
    marginBottom: 20,
  },
  languageButton: {
    width: "90%",
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#28A745",
    backgroundColor: "#4CAF50",
    marginBottom: 10,
    alignItems: "center",
  },
  languageButtonSelected: {
    backgroundColor: "#4CAH3",
  },
  languageText: {
    fontSize: 18,
    color: "#FFF",
  },
  languageTextSelected: {
    color: "#FFF",
  },
  nextButton: {
    marginTop: "auto",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "50%",
  },
  nextButtonDisabled: {
    backgroundColor: "#A5D6A7", // Light green to indicate disabled
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
  imageContainer: {
    width: 97,
    height: 97,
    position: "relative",
    marginBottom: 20,
  },
  image: {
    width: 97,
    height: 97,
  },
  imageOne: {
    position: "absolute",
  },
  imageTwo: {
    position: "absolute",
    zIndex: 1,
    width: 53,
    height: 53,
    left: 20,
    top: 19,
  },
});

export default LanguageSelectionScreen;