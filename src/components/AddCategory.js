import React,{useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('');// ()vacio undefined - ('')string vacio
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //Quita los valores por defecto
        if(inputValue.trim().length>2){//Quita espacios, y da el largo de la palabra
            setCategory(cats => [inputValue,...cats]);
            setInputValue('');//Vuelve a poner vacio el submit
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,
}