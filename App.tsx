import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { IndexScreen } from "./src/screens/IndexScreen";
import { AddScreen } from "./src/screens/AddScreen";
import { EditScreen } from "./src/screens/EditScreen";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./src/reducers";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Add: AddScreen,
  Edit: EditScreen
});

const store = createStore(reducers, applyMiddleware(thunk));

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
