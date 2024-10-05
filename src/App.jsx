import { act, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singer from './singer'
import Counter from './counter'
import Team from './team'
import Users from './users'

function App() {
  const actors = ['Shoron', 'Shammi', 'Mili', 'Mim']
  const singers = [
    { name: 'Sayma', age: 24 },
    { name: 'Shammi', age: 25 },
    { name: 'Shoron', age: 26 }
  ]
  const handleclick = () => {
    alert('button clicked')
  }
  const addFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h2>Hello world</h2>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>

      <button className='Btn' onClick={handleclick}>Click Me</button>
      <button className='Btn' onClick={() => { alert('Why again!') }}>Click Me</button>
      <button className='Btn' onClick={() => addFive(6)}>Check it</button>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn More" isDone={false}></Todo>
      <Todo task="Learn NodeJs" isDone={true}></Todo>
      {
        actors.map(act => <Actor name={act}></Actor>)
      }
      {
        singers.map(sing => <Singer singer={sing}></Singer>)
      }
      <Person></Person>
      <Design></Design>
      <Device name='Laptop' price='80000'></Device>
      <Device name='Mobile' price='20000'></Device>
      <Student grade='7' score='40'></Student>
      <Student grade={12} score='80'></Student>
      <Student></Student>
    </>
  )

}

function Student({ grade = 5, score = 99 }) {
  return (
    <div>
      <p>Student data:</p>
      <p>Grade : {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Person() {
  const data = { name: 'Sayma', age: 24 }
  return (
    <div className='person'>
      <p>My name is {data.name}</p>
      <p>I am {data.age} years old</p>
    </div>
  )
}
function Device(props) {
  return (
    <p>This device name is: <b>{props.name}</b> and price is: <b>{props.price}</b></p>
  )
}

function Design() {
  const styling = {
    border: '2px solid black',
    padding: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={styling}>
      <p>This is done by CSS, look at this!</p>
    </div>
  )
}
export default App
