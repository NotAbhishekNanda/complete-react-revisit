import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  // Use state registers state for a specific component instance!State is separated as per component instance basis.
  const clickHandler = () => {
    setTitle('Updated');
    console.log('Clicked');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
