import React, { Component } from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import { User, getUsers, deleteUser, addUser } from "../actions";
import { NavigationInjectedProps } from "react-navigation";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import SingleUser from "../components/SingleUser";

interface IndexProps extends NavigationInjectedProps {
  users: User[];
  getUsers: Function;
  deleteUser: Function;
  addUser: Function;
}
class _Index extends Component<IndexProps> {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={styles.button}>
          <Button title="Add user" onPress={() => navigation.navigate("Add")} />
        </View>
        <FlatList
          style={styles.list}
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
const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    backgroundColor: "lightblue"
  },
  list: {
    marginBottom: 100
  }
});

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return { users: state.users };
};

export const IndexScreen = connect(
  mapStateToProps,
  { getUsers, deleteUser, addUser }
)(_Index);
