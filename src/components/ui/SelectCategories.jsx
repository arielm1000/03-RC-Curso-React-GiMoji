import React from 'react';

function SelectCategories( { dataItem, onChanCategories} ) {

    return (
    <select 
        className="form-select" 
        aria-label="Default select example"
        onChange={(event) => onChanCategories(event) }
        >
        <option defaultValue={true}>Selecciona una Categoria</option>
        { dataItem.map( (categ) => (
        <option key={categ.name} value={categ.name}>{ categ.name }</option>
        ))}
    </select>
    );
}

export default SelectCategories;