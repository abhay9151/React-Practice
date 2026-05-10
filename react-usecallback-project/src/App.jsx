import React, { useState, useCallback, useEffect, useRef } from 'react';

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);
    const previousFunction = useRef(null);

    const expensiveCalculation = useCallback(() => {
        console.log("Running expensive calculation...");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return result;
    }, [count]);

    useEffect(() => {
        if (previousFunction.current) {
            if (previousFunction.current === expensiveCalculation) {
                console.log("Function not re-created");
            } else {
                console.log("Function got re-created");
                previousFunction.current = expensiveCalculation;
            }
        } else {
            previousFunction.current = expensiveCalculation;
        }
    }, [expensiveCalculation]);

    return (
        <div>
            <h1>Expensive Component</h1>
            <p>Count (Dependencies): {count}</p>
            <p>Other State: {otherState}</p>
            
            <button onClick={() => setCount(prev => prev + 1)}>
                Change Count (Re-creates function)
            </button>
            
            <button onClick={() => setOtherState(prev => prev + 1)}>
                Change Other State (Memoizes function)
            </button>
        </div>
    );
};

export default ExpensiveComponent;