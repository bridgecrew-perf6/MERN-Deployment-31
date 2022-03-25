import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'


const Create = () => {

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [chests, setChests] = useState(0)
    const [phrase, setPhrase] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)
    const [crewPosition, setCrewPosition] = useState('Captain')
    const history = useHistory();
    const [errors, setErrors] = useState();

    const submitForm = (e) => {
        e.preventDefault();

        const newPirate = {
            name,
            url,
            chests,
            phrase,
            pegLeg,
            eyePatch,
            hookHand,
            crewPosition
        }

        axios.post("http://localhost:8000/api/pirates", newPirate)
            .then(res => {
                console.log("Success", res.data)
                history.push('/')
            })

            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log(errorArr)
                
            })   

    }
    
    const nameValidation = (e) => {
        if (name.length < 3) {
            return "Name must be 3 characters"
        }
        else {
            return ""
        }
    }
    const imageValidation = (e) => {
        if (url.length < 1) {
            return "URL is required"
        }
        else {
            return ""
        }
    }
    const chestValidation = (e) => {
        if (chests  < 0) {
            return "Chests cannot be a negative number"
        }
        else {
            return ""
        }
    }
    const phraseValidation = (e) => {
        if (phrase.length < 1) {
            return "Phrase is required"
        }
        else {
            return ""
        }
    }







    return (
        <div>
            <h1>
                Add Pirate
                <button style={{ margin: '15px' }}>
                    <Link to={'/'}>Crew Board</Link>
                </button>
            </h1>

            <form onSubmit={submitForm}>

            {errors ? errors.map((err, index) => <p key={index}>{err}</p>) : null}

                <div>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                <span>{nameValidation()}</span>
                </div>

                <div>
                <label>Image URL:</label>
                <input type="text" onChange={(e) => setUrl(e.target.value)} value={url}></input>
                <span>{imageValidation()}</span>
                </div>

                <div>
                <label>Chests:</label>
                <input type="number" onChange={(e) => setChests(e.target.value)} value={chests}></input>
                <span>{chestValidation()}</span>
                </div>

                <div>
                <label>Catch Phrase:</label>
                <input type="text" onChange={(e) => setPhrase(e.target.value)} value={phrase}></input>
                <span>{phraseValidation()}</span>
                </div>
                
                <div>
                    <label>Peg Leg:</label>
                    <input type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg}></input>
                    {/* <input type="checkbox" onChange={(e) => PegLegCheck(e.target.value)} checked={pegLeg}></input> */}

                    <label>Eye Patch:</label>
                    <input type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch}></input>

                    <label>Hook Hand</label>
                    <input type="checkbox" onChange={(e) => setHookHand(e.target.checked)} checked={hookHand}></input>

                    <label>Crew Position</label>
                    <select onChange={(e) => setCrewPosition(e.target.value)}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>



                {/* <input type="submit" /> */}
                <button>Add Pirate</button>
            </form>








        </div>
    )
}

export default Create