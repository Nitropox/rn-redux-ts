import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

interface FormProps {
  nameInput: string;
  setNameInput: any;
  ageInput: string;
  setAgeInput: any;
  error: string;
}

export const Form: React.FC<FormProps> = ({
  nameInput,
  setNameInput,
  ageInput,
  setAgeInput,
  error
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={nameInput}
        onChangeText={setNameInput}
        maxLength={100}
      />
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={ageInput}
        keyboardType="numeric"
        onChangeText={setAgeInput}
      />
      <View>
        <Text style={styles.error}>{error}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  input: {
    height: 50,
    width: "80%",
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "grey",
    marginVertical: 10,
    paddingLeft: 10
  },
  label: {
    alignSelf: "center",
    marginTop: 10
  },
  button: {
    marginVertical: 10,
    backgroundColor: "lightblue",
    width: "100%"
  },
  error: {
    color: "red"
  }
});
