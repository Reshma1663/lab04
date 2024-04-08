import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailsScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text style={styles.text}>{transaction.name}</Text>
        <Text style={styles.text}>{transaction.loc}</Text>
      </View>

      <View style={styles.dateSection}>
        <Text style={styles.label}>Transaction Date:</Text>
        <Text style={styles.text}>{transaction.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  section: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default TransactionDetailsScreen;
