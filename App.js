import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from "@expo/vector-icons";

// screen imports
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ExpensePrompt from "./screens/ExpensePrompt";

// component imports
import IconBtn from './components/IconBtn';

// context imports
import ExpenseContext from './store/context/ExpenseContext';

import { GlobalStyles } from './constants/styles';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => {
        return {
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: "white",
          headerRight: ({tintColor}) =>  {
            return <IconBtn 
              name="add"
              color={tintColor}
              size={32}
              pressHandler={() => {
                navigation.navigate('expensePrompt', {});
              }}
              incomingStyles={[]}
            />
          }
        }
      }}
      >
        <Tab.Screen 
          name="recentScreen"
          component={RecentExpenses}
          options={{
            title: "Recent Expenses",
            tabBarIcon:({color}) => {
              return <Ionicons name="hourglass" color={color} size={24} />
            }
          }}
        />
        <Tab.Screen 
          name="allScreen"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarIcon:({color}) => {
              return <Ionicons name="calendar" color={color} size={24} />
            }
          }}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <ExpenseContext>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        } 
      }}
      >
        <Stack.Screen 
         name="initialScreen" 
         component={BottomTab} 
         options={{
          headerShown: false
         }}
         />

        <Stack.Screen
         name="expensePrompt" 
         component={ExpensePrompt} 
         options={{
          // headerLeft: () => null,
          presentation: 'modal'
         }}
         />

      </Stack.Navigator>
    </NavigationContainer>
    </ExpenseContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
