import logo from './logo.svg';
import './App.css';
import React from 'react';
/*
function App() { 

let firstVariable = 5
  console.log("firstVariable:",+firstVariable)
  firstVariable = 6
  console.log("firstVariable:",+firstVariable)
  const secondVariable = "abc"
  console.log("secondVariable:"+secondVariable)
  const myFunction =()=>
  {
    console.log("this is my first function")
    return true
  }
  myFunction()
  function myFunction1(variable)
  {
    console.log("this is my first function 2")
    if (variable())
    {
      console.log("this is  check")
    }
    else
    {
      console.log("false")
    }
  }

  class Student
  {
    id
    name
    rollNumber
    address
    emailId
  }
  const Student1 = new Student()
  Student1.id =123
  Student1.name ="Aditya"
  Student1.rollNumber=456
  Student1.emailId="faadu@"
  Student1.address="rewa"
  Student1.print() 
  return (
          <div>
          Hello this is Aadi  {firstVariable}
        </div>
  );
}


// this is class component here
/*
class App extends React.Component
{
  render()
  {
    return React.createElement("div",null,"hello i am aditya")
  }
}

const App=(props)=>
{
  console.log("props:",props)
  console.log("props color:",props.color)//color
  console.log("props size:",props.size)//size
  console.log("clickevent:",props.clickevent)
  return <div style={{backgroundColor:props.color}}>
    <button onClick={props.clickevent}>click me</button>
  </div>
}
export default App;
*/
// class components
//and
//state in react




//class practice
/*
}
class Student
{
  id
  name
  rollnumber
  address
  emailID

  constructor(tempID,tempName,tempRoll,tempAddress,tempEmail)
  {
    this.id = tempID
    this.name = tempName
    this.rollnumber = tempRoll
    this.address = tempAddress
    this.emailID = tempEmail
  }

  print()
  {
    console.log("id:",this.id)
    console.log("name:",this.name)
    console.log("rollnumber:",this.rollnumber)
    console.log("address:",this.address)
    console.log("emailId:",this.emailID)
  }
}
const Student1 = new Student(123, "Aditya",111, "rewa riyasat", "dvnos112@gmail.com")
//Student1.print()
//Student1.id = 123
//Student1.name = "Aditya"
//Student1.rollnumber = 111
//Student1.address = "rewa riyasat"
//Student1.emailID = "dvnos112@gmail.com"
//Student1.print()
*/
class App extends React.Component
{ 
  state = {
    counter:0,
    component:<childComponent/>
   // name:"aditya",
   // array1:[
    //  {},
    //  {},
    //  {}
   // ]
    }

  constructor(props)
  {
    super(props)
    console.log("constructor of app component")
  }

  static getDerivedStateFromProps()
  {
    console.log(" getDerivedStatesFromProps")
  }

  incrementCounter=()=>
  {
    this.setState({counter:this.state .counter + 1})
  }

  componentDidMount()
  {
    console.log("componentDidMount")
    return true
  }
  
  shouldComponentUpdate()
  {
    console.log("shouldComponentUpdate")
    // return false
    return true
  }
  getSnapshotBeforeUpdate()
  {
    console.log("getSnapshotBeforeUpdate")
    return true
  }
  componentDidUpdate()
  {
    console.log("componentDidUpdate")
  }
  unmountChild=()=>
  {
    this.setState({
      counter:this.state.counter,
      component:"this child component is gone/unmontude"
    })
  }

  render()
  {
    console.log(this.props.color)
    console.log("render method")
    return <div style={{backgroundColor:this.props.color}}>
    hello
    <button onClick={this.props.clickevent}>click me</button>
    ---------------<br/>
    counter:{this.state.counter}
    <button onClick={this.incrementCounter}>increment Counter</button>
    {/* <childComponent/><br/> */}
     <br/>
    {this.state.component}
    <button onClick={this.unmountChild}>unmountChild component</button>
    </div>
  }
}
class childComponent extends React.Component
{
  componentWillUnmount()
  {
    console.log("unmounting child component")
  }
  render()
  {
    return <div>this is my child component</div>
  }
}
export default App;