import React from 'react';

function SelectCategories( { dataItem } ) {
    return (
    <select className="form-select" aria-label="Default select example">
        <option defaultValue={true}>Selecciona una Categoria</option>
        { dataItem.map( (categ) => (
        <option key={categ.name} value={categ.gif.id}>{ categ.name }</option>
        ))}
    </select>
    );
}

export default SelectCategories;