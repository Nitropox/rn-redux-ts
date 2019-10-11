import React, { Component } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { User, getUsers } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";
import SingleUser from "../components/SingleUser";

interface IndexProps {
  users: User[];
  getUsers: Function;
}
class _Index extends Component<IndexProps> {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <View>
        <View style={{ marginVertical: 10, backgroundColor: "#fff000" }}>
          <Button title="Add user" onPress={() => console.log("press")} />
        </View>
        <FlatList
          data={this.props.users}
          keyExtractor={(user: User) => user.id.toString()}
          renderItem={({ item }) => {
            return <SingleUser id={item.id} name={item.name} age={item.age} />;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return { users: state.users };
};
export const IndexScreen = connect(
  mapStateToProps,
  { getUsers }
)(_Index);
