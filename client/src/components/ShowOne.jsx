import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ShowOne = () => {
  
    const [thisPirate, setThisPirate] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                setThisPirate(res.data)
                console.log(res.data)
            })
            .catch(err =>{ console.log(err)
            })
    }, [])
  
  
  
  
  
    return (
    <div>
        <h1>{thisPirate.name}</h1>
        <div style={{display: 'flex'}}>
            <div>
                <img src= {thisPirate.url} style={{height: '100px', width: '100px'}}></img>
                <h1>Shiver me timbers</h1>
            </div>
            <div>
                <h2>About</h2>
                <p>Position : {thisPirate.crewPosition}</p>
                <p>Treasure: {thisPirate.chests}</p>
                <p>Peg Leg: {thisPirate.pegLeg ? "Yes" : "No"}</p>
                <p>Eye Patch: {thisPirate.eyePatch ? "Yes" : "No"}</p>
                <p>Hook Hand: {thisPirate.hookHand ? "Yes" : "No"}</p>

            </div>
        
        
        
        </div>














    </div>
  )
}

export default ShowOne