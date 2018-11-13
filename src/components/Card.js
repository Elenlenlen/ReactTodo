import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ value, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CardOverview', { value })}
      style={styles.container}
    >
      <View>
        <Text>{value.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da'
  }
});
