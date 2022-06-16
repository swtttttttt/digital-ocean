import React from "react"
import countryData from "../countryData.js"

export default function Country() {

    const [c, setCountry] = React.useState({
        country: ""

    })

    const [allCountries] = React.useState(countryData)
   
    function getCountry() {
        const twinArray = allCountries.countryArray.country
        const randomNumber = Math.floor(Math.random() * twinArray.length)
        const rand = (twinArray[randomNumber].country)
        
        setCountry(prevCountry => ({
            ...prevCountry,
            country: rand
        }))
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getCountry}
                >
                Get a new meme image 🖼 
                </button>
            </div>
            <p>{c.country}</p>
        </main>
    )
}