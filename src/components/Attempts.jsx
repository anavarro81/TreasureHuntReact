import React, { useState } from 'react';
import Board from './Board';

export default function Attempts() {

const [Attempt, addAttempt] = useState(0);

// Defino la función
    function clicked () {
        // Establezco el nuevo valor del contador, le sumo 1. 
        
        addAttempt(Attempt+1)        
        console.log('Contador = ' + Attempt);
    }

    return <>
        <h1> Intentos: {Attempt} </h1> 
        <button onClick={clicked}> Click Me </button>
        <Board elements={5}></Board>
    </>

}