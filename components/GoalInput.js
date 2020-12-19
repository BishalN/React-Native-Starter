import React from 'react'
import { View, TextInput, Button, Modal } from 'react-native'

const GoalInput = ({
  goal,
  goalInputHandler,
  addGoalHandler,
  visible,
  cancelHandler,
}) => {
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <TextInput
          placeholder='Your Goal'
          value={goal}
          onChangeText={goalInputHandler}
          style={{ borderColor: 'black', borderWidth: 2, marginBottom: 10 }}
        />
        <Button title='add' onPress={addGoalHandler} />
        <Button title='cancel' color='red' />
      </View>
    </Modal>
  )
}

export default GoalInput
