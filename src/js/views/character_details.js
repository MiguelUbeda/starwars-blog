import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CharacterDetails = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();

    useEffect(() => {
        actions.loadCharacterDetail(id);
    },[]);

    return(
        <div className="container text-white">
        
            <h1 className="d-block text-center text-warning m-5">{store.characterDetails?.properties?.name}</h1>
            
            <div className="d-flex">
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} className="border-warning width: w-25 h-25" alt="Character"/>
            <div className="card ms-5 bg-black">
                <div className="card-header bg-warning">
                    Description
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-black text-white">{store.characterDetails?.description}</li>
                </ul>
            </div>
            
            <div className="card ms-5 bg-black">
                <div className="card-header bg-warning">
                    Birth date
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-black text-white">{store.characterDetails?.properties?.birth_year}</li>
                </ul>
            </div>
            <div className="card ms-5 bg-black">
                <div className="card-header bg-warning">
                    Height
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-black text-white">{store.characterDetails?.properties?.height}</li>
                </ul>
            </div>
            <div className="card ms-5 bg-black">
                <div className="card-header bg-warning">
                    Eye color
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-black text-white">{store.characterDetails?.properties?.eye_color}</li>
                </ul>
            </div>
            </div>
            
        
        </div>
    )
};