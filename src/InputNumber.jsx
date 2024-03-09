import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export const InputNumber = ({ setCustomValue, counter }) => {
    const [inputValue, setInputValue] = useState();

    useEffect(() => {
        setInputValue(counter);
    }, [counter]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCustomValue(parseInt(inputValue));
        
    }

    return (
        <form onSubmit={handleSubmit} className='mt-4'>
            <input
                className='form-control-sm'
                type="number"
                placeholder="1-826"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
              className='btn btn-primary ms-2'
              type="submit"
            >Find
            </button>
        </form>
    )
}
