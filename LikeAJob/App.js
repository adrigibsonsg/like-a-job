import {TailwindProvider} from 'tailwind-rn';
import Main from './src/Main';
import utilities from './tailwind.json';
import { LogBox} from "react-native";
LogBox.ignoreAllLogs();
import StackNavigator from "./StackNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {AuthProvider} from "./hooks/useAuth";

export default function App() {
  return (
      <TailwindProvider utilities={utilities}>
          <NavigationContainer>
            <AuthProvider>
                <StackNavigator />
            </AuthProvider>
          </NavigationContainer>
      </TailwindProvider>
  );
}