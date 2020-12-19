import React, { useState } from 'react'
import { View, FlatList, Button } from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goal, setGoal] = useState('Add your goal')
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random(), value: goal },
    ])
    setGoal('')
    setIsAddMode(false)
  }

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  return (
    <View style={{ padding: 50 }}>
      <Button title='Add Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        cancelHandler={() => setIsAddMode(false)}
        visible={isAddMode}
        goal={goal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            key={itemData.item.id}
            id={itemData.item.id}
            onDelete={deleteGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  )
}
