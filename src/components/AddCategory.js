import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setartists}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e )=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = ( e )=>{
        e.preventDefault();
        if( inputValue.trim().length >2){
            setartists(artists => [inputValue, ...artists]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit ={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}
AddCategory.propTypes = {
    setartists: PropTypes.func.isRequired,
}
