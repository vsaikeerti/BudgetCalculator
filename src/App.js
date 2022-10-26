import './App.css';
import React,{useState} from 'react'
import ExpenseList from './Components/ExpenseList'
import Expense from './Components/Expense'
import Alert from './Components/Alert'
import { v4 as uuidv4 } from 'uuid';

//import useState()
//function returns [] with 2 values
//actual value of the state
//functon for update/control
//default value

const initExp=[
  { id:uuidv4(),charge:"Rent",amount:16000},
  { id:uuidv4(),charge:"Car Loan",amount:10000},
  { id:uuidv4(),charge:"Electricity bill",amount:1500}
  
]

function App() {
  const[exp,setExp]=useState(initExp);
  const[charge,setCharge]=useState('');
  const[amount,setAmount]=useState('');

  const handleCharge=e=>{
    setCharge(e.target.value);
  };
  const handleAmount=e=>{
    setAmount(e.target.value);
  };
  const handleSubmit=e=>{
    e.preventDefault();
  };




  return (
    <>
      <Alert/>
      <h1> BUDGET CALCULATOR </h1>
      <main className="App">
        <Expense/>
        <ExpenseList exp={exp}/>
        </main>
        <h1>TOTAL :{" "}<span className="total"> Rs.
        {exp.reduce((acc,curr)=>{
          return(acc+=curr.amount);
        },0)}</span>
        </h1>
    </>
  );
}

export default App;
