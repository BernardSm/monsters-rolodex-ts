import React, { ChangeEvent } from 'react';


import './search-box.styles.css';

/* Interfaces are extendable and can be overloaded. --------- */
interface ISearchBoxProps {
  className: string,
  placeholder?: string,
}

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void
}


/* Types can be combined as in the address example below --------- */

type CanadianAddress = {
  street: string;
  province: string;
}

type USAddress = {
  street: string;
  state: string;
}

type ItalianAddress = {
  street: string;
  region: string
}

type Address = CanadianAddress | USAddress | ItalianAddress;

/* The general rule of thumb is if you a writing functional style of code then 
   use types however, if writing OOP code then use interfaces
   -------------------------------------------------------------------------------- */

type SearchBoxProps = {
  className: string,
  placeholder?: string,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
