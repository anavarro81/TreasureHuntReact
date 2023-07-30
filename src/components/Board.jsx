import React, { useState } from 'react'; 

export default function Board (props) {

    
    let board = []    

    const [Attempt, setAttempt] = useState(0);

    const clicked = (event) => {
        if (event.target.id == props.TreasureNumber) {
            event.currentTarget.src= "./chest.png"
            alert ('¡Enhorabuena: Has ganado!') 
        } else {
            event.currentTarget.src= "./skull.png"
            setAttempt(Attempt+1)
        }
        }

    for (let index = 0; index < props.elements; index++) {
        board.push(
        <img src="/x.png" 
        alt="image" 
        id={index+1} 
        onClick={(event) => clicked(event)}
        />)
        
    }
    
    return <
        div> 
        <h1> Intentos: {Attempt} </h1> 
        {board}  
        </div>
    
    
}


