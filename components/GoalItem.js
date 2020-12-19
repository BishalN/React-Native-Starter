import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = ({ title, onDelete, id }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View key={Math.random()} style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
})

export default GoalItem
