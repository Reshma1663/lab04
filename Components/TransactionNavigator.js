import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './TransactionListScreen';
import TransactionDetailsScreen from './TransactionDetailsScreen';

const Stack = createStackNavigator();

const TransactionNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="TransactionsList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0077B6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="TransactionsList" component={TransactionListScreen} />
      <Stack.Screen name="TransactionDetailsScreen" component={TransactionDetailsScreen} />
    </Stack.Navigator>
  );
};

export default TransactionNavigator;
