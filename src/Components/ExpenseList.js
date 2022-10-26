import React from 'react'
import ExpenseItem from './ExpenseItem'
import {MdDelete} from 'react-icons/md'
export const ExpenseList = ({exp}) => {
  return (
    <>
    <ul className="list">
        {exp.map((expense)=> {
            return<ExpenseItem key={expense.id} expense={expense}/>
        })} 
        </ul>
        {exp.length>0&&<button className="btn">Clear Expenses
        <MdDelete className="btn-icon"/> </button>}
    </>
  )
}

export default ExpenseList