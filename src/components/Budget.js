import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span>
            <input
            type='number'
            value={budget}
            step='10'
            onChange={(event)=>{ 
                if (event.target.value<=20000) {
                    dispatch({
                        type:'SET_BUDGET',
                        payload: event.target.value
                    })
                    
                }else{
                    alert("The budget cannot exceed £ 20.000")
                }
                if (event.target.value<totalExpenses) {
                    alert("You cannot reduce the budget lower than the spending")
                    
                } else {
                    dispatch({
                        type:'SET_BUDGET',
                        payload: event.target.value
                    })
                    
                }
            }}>

            </input>
        </div>
    );
};
export default Budget;
