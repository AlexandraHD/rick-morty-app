
import { useCounter, useFetch } from './hooks';
import { Character, LoadingCharacter } from './';
import { InputNumber } from './InputNumber';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, setCustomValue } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);

  return (
    <>
        <h1>Rick & Morty characters</h1>
        <hr />

        {
            isLoading ? <LoadingCharacter /> : <Character data={ data } hasError={ hasError} />
        }

        <div className='text-center'>

            <button 
                onClick={ () => decrement(1) } 
                disabled={ isLoading }
                className="btn btn-primary mt-3 col"
            >Previous character</button>
            <button 
                onClick={ () => increment(1) } 
                disabled={ isLoading }
                className="btn btn-primary mt-3 ms-4"
            >Next character</button>

            <InputNumber setCustomValue={ setCustomValue } counter={ counter } />
        </div>
    </>

  )
}
