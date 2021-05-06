import React,{useEffect, useState} from "react";
import './App.css';

/* using EDAMAM food search recipe api */ 
const App = () => {
    /* search-api authentication */
    const APP_ID = "86a58ca7"
    const APP_KEY = "be4bc039ed840c4906dbf236f9f0ba80";

useEffect(() =>{
    getRecipes();
}, []);

/* create promise from external api */
const getRecipes = async () => {
    const response = await fetch(
        `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`   
    );
    const data =await response.json
    console.log(data)
}





return ( 
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" placeholder="type here"/>
                <button className="btn" type="submit">
                    Search                 

                </button>
            </form>

        </div>
            );
        };

        export default App;