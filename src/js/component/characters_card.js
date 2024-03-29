import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const CharacterCard = () => {
    const {store, actions} = useContext(Context);
    return (
        <>
        {store.characters.map((character, i)=>{
            return(
                <div className="card m-2 border-warning" style={{width: "18 rem"}} key={character.uid}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + character.uid + ".jpg"} className="card-img-top" alt="Character"/>
                <div className="card-body text-white bg-black">
                  <h5 className="card-title">{character.name}</h5>
                  <Link to={`/character_details/${character.uid}`}>
						<button href="#" className="btn btn-light">
							Details
						</button>
				   </Link>
                   <button href="#" className="btn btn-danger m-2" onClick={() => actions.addFavorites(character.name)}> 
                   <i className="fa-solid fa fa-heart"></i>
                    </button>
                </div>
              </div>
            )
        }
           
        )}
        </>
    )
};