import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span>
            <input
            type='number'
            value={budget}
            step='10'
            onChange={()=>{
                dispatch({
                    type:'SET_BUDGET',
                    payload: budget+10
                })
            }}>

            </input>
        </div>
    );
};
export default Budget;
