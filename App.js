
import { SafeAreaView } from "react-native";
import TodoHeader from "./src/components/TodoHeader";
//import TodoList
import TodoList from "./src/components/TodoList";
//import store
import store from "./src/redux/store";
//import Provider
import { Provider } from "react-redux";

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    );
  };

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}