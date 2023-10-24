import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

// screen imports
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { GlobalStyles } from './constants/styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer
    >
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500
        },
        headerTintColor: "white",
        
      }}
      >
        <Tab.Screen 
          name="recentScreen"
          component={RecentExpenses}
          options={{
            title: "Recent Expenses",
            tabBarIcon:({color, size}) => {
              return <Ionicons name="hourglass" color={color} size={size} />
            }
          }}
        />
        <Tab.Screen 
          name="allScreen"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarIcon:({color, size}) => {
              return <Ionicons name="calendar" color={color} size={size} />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
