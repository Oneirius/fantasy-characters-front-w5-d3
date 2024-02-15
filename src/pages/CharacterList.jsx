import axios from "axios";
import { useEffect, useState } from "react";

import "./CharacterList.css";

function CharacterList() {
    const API_URL = "http://localhost:5000/characters";
    const [characters, setCharacters]=useState(null);

    const getAllCharacters = ()=>{
        axios
            .get(API_URL)
            .then((results) => setCharacters(results.data))
            .catch((error) => console.error(error))
    }

    const handleDelete = (id)=>{
        axios
        .delete(`${API_URL}/${id}`)
        .then((response)=>{
            console.log(response)
            getAllCharacters();
        })
        .catch((error)=>console.error(error));
    }

    useEffect(()=>{
        getAllCharacters();
    }, [])


    return(
        <div>
            <h1>Character List</h1>
            {
                characters?
                <ul id="character-page">
                    {characters.map((character)=>{
                        return(
                        <li key={character.id} id="character-card">
                            <h2 id="character-name">{character.name}</h2>
                            <img id="character-portrait" src={character.image_url} alt={character.name} />
                            <div id="character-data">
                                <p id="character-description">{character.description}</p>
                                <p id="character-power">⚔️{character.power}</p>
                                <p>{character.equipment}</p>
                            </div>
                            <button onClick={()=>{handleDelete(character.id)}}>Delete</button>
                        </li>
                        )
                    })}
                </ul>
                :
                <p>Loading characters...</p>
            }
            
        </div>
    )
}
export default CharacterList;