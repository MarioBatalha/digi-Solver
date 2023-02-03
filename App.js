import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./src/routes/";
import Context from ".//src/context";

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Context.Provider>
        <Routes />
      </Context.Provider>
    </NavigationContainer>
  );
};

export default App;
