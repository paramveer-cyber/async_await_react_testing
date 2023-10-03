import React from 'react'
import { useState } from 'react'
import Spinner from './Spinner'
import '../App.css'

export default function Pokemon() {
    const [processing, setprocessing] = useState(false);
    const [moves, setmoves] = useState([])
    const [heading, setheading] = useState('')

    async function pokemoves(){
        setprocessing(true)
        setmoves([])
        setheading('')
        try{
            const pokemon = document.getElementById('pokemon_name').value.toLowerCase()
            const fetched_data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const parsed_data = await fetched_data.json()
            const moveNames = parsed_data.moves.map((move) => move.move.name);
            setmoves(moveNames);
            const headingText = `${pokemon[0].toUpperCase()}${pokemon.slice(1)} Moves(${moveNames.length}) :-`;
            setheading(headingText);
        }
        catch{
            setheading('An Error Occured!\nPlease ensure you have entered the name correctly')
        }
        setprocessing(false)
        return moves
    }

    return (
        <>
            <div className="container my-3 input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Pokemon Name" id='pokemon_name' />
                <button className="btn btn-outline-secondary text-white" type="button" id="button-addon1" onClick={()=>{pokemoves()}}>Enter</button>
            </div>
            <h2 className='container move_heading' id='heading'>{heading}</h2>
            {processing?<Spinner />:<></>}
            <div className="container moves">
                {moves.map((move, index) => {    
                return <div className="move" key={index}>
                    {move}
                </div>
                })}
            </div>
        </>
    )
}
