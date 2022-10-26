import React from 'react'
import {MdSend} from "react-icons/md"
export const Expense = ({charge,amount}) => {
  return (
    <form> 
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
          type="text"
          className="form-control" 
          id="charge"
          name="charge"
          placeholder="Eg. Rent">
          </input>
        </div>
      <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
          type="text"
          className="form-control" 
          id="amount"
          name="amount"
          placeholder="Eg. 1000">
          </input>
        </div>
      </div>
      <button type="submit" className="btn">submit
      <MdSend className="btn-icon"/>
      </button>
    </form>
  )
}

export default Expense