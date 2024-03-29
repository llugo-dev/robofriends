import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input type="search" 
            placeholder="Search Robots" 
            className='pa3 ba b--green bg-light-blue br3'
            onChange={e => searchChange(e)}></input>
        </div>
    );
}

export default SearchBox;