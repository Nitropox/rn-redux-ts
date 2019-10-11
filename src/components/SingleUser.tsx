import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { User } from "../actions";

interface SingleUserProps extends NavigationInjectedProps {
  id: number;
  name: String;
  age: number;
  deleteUser: Function;
  users: User[];
}

const SingleUser: React.FC<SingleUserProps> = ({
  id,
  name,
  age,
  deleteUser,
  users
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Name: {name} </Text>
      <Text style={styles.styledText}>Age: {age}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="edit" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => deleteUser(users, id)}
        >
          <MaterialIcons name="delete" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30
  },
  container: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#f4f4f4",
    justifyContent: "center"
  },
  styledText: {
    fontSize: 15,
    padding: 5,
    marginVertical: 5
  },
  buttonContainer: {
    position: "absolute",
    right: 10,
    flexDirection: "row"
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginHorizontal: 4
  }
});

export default withNavigation(SingleUser);
