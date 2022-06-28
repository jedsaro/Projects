import { useEffect, useRef, useState} from "react";
import {Input} from 'semantic-ui-react'

export const Search = () => {

  const inputReference = useRef(null);
  
  useEffect(() => {
    inputReference.current.focus();
  });

  return(
    <Input  placeholder='Buscar...' ref={inputReference} onChange={handleChange}/>
  )
}


