import React, { useEffect, useRef } from 'react';

function Search({onChangeSearch} ) {

    const searchinput = useRef(null);

    useEffect(() => {
        searchinput.current.focus();
    },[])

    return (
     <input
        ref={searchinput}
        type="search" 
        className=" form-control form-control-dark text-dark" 
        placeholder="Search..." 
        aria-label="Search"
        onChange={(event) => onChangeSearch(event) }
        />

    );
}

export default Search;