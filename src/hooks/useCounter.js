import { useState } from "react"

export const useCounter = ( initialValue=10 ) => {

    const [counter, setCounter] = useState( initialValue );
    const [incrementValue] = useState(1)
    const [decrementValue] = useState(2)

    const increment = ( incrementDecrementValue ) => {
        setCounter( counter + incrementDecrementValue );
    };
    const decrement = ( incrementDecrementValue ) => {
        if(counter === 0) return;

        setCounter( counter - incrementDecrementValue );
    };
    const reset = () => {
        setCounter( initialValue );
    };

    const setCustomValue = ( customValue ) => {
        setCounter( customValue )
    }

    return {
        counter,
        increment,
        decrement,
        reset,
        incrementValue,
        decrementValue,
        setCustomValue,
    }
}