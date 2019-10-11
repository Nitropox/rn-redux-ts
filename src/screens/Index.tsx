import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Text
} from "react-native";
import { User, getUsers, deleteUser, addUser } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import SingleUser from "../components/SingleUser";

interface IndexProps {
  users: User[];
  getUsers: Function;
  deleteUser: Function;
  addUser: Function;
}
class _Index extends Component<IndexProps> {
  componentDidMount() {
    this.props.getUsers();
  }

  state = {
    nameInput: "",
    ageInput: ""
  };

  validate = () => {
    if (this.state.nameInput.length > 0 && this.state.ageInput.length > 0) {
      this.props.addUser(
        this.props.users,
        this.state.nameInput,
        this.state.ageInput
      );
      this.setState({
        nameInput: "",
        ageInput: ""
      });
    } else {
      console.log("not ok");
      return null;
    }
  };
  render() {
    return (
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.nameInput}
          onChangeText={text => this.setState({ nameInput: text })}
        />
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.ageInput}
          onChangeText={text => this.setState({ ageInput: text })}
        />
        <View style={{ marginVertical: 10, backgroundColor: "#fff000" }}>
          <Button title="Add user" onPress={this.validate} />
        </View>
        <FlatList
          data={this.props.users}
          keyExtractor={(user: User) => user.id.toString()}
          renderItem={({ item }) => {
            return (
              <SingleUser
                id={item.id}
                name={item.name}
                age={item.age}
                users={this.props.users}
                deleteUser={this.props.deleteUser}
              />
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return { users: state.users };
};

const styles = StyleSheet.create({
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
  }
});

export const IndexScreen = connect(
  mapStateToProps,
  { getUsers, deleteUser, addUser }
)(_Index);
