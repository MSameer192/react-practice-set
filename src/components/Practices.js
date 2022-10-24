import React from 'react';
// import { add, multiply, subtract, divide } from './Calculation'
import * as Calculation from './Calculation'

export default function Practice() {
    return (
        <div className='container'>
            <ul>
                <li>{Calculation.add(1, 2)}</li>
                <li>{Calculation.multiply(2, 3)}</li>
                <li>{Calculation.subtract(7, 2)}</li>
                <li>{Calculation.divide(5, 2)}</li>
            </ul>,
        </div>
    );
}
