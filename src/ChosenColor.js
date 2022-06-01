import React, { useState } from 'react';
import DefaultColors from './DefaultColors'
import { useRef } from "react"

import { useLocation } from 'react-router-dom'


import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function ChosenColor(props) {
  
  const childCompRef = useRef()  

  const [chosenColor, setChosenColors] = useState('')

  const location = useLocation()

  console.log(location.state)

  const handleOnCLick = () => {
    childCompRef.current.updateColor(chosenColor)
  }
  const handleOnChange = (event) => {
    setChosenColors(event.target.value)
  }

    return ( 
    <div>
      <h2>The current colors are <DefaultColors ref={childCompRef}></DefaultColors></h2>
      <input onChange={handleOnChange}></input>
      <button onClick={handleOnCLick}>Clik to add another</button>
      <link label='aa'></link>
      <Router>
      <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/about">Ir para o carro</Link>
          </li>
        </ul>
      </Router>
    </div>
    )
    ;
  }

export default ChosenColor;
