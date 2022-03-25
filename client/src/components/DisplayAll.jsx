
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DisplayAll = () => {
  
    const [allPirates, setAllPirates] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
          .then(res => {
            console.log(res.data);
            setAllPirates(res.data)
    
          })
          .catch(err => {
            console.log(err)
    
          })
      }, [])

      const deletePirate = (Id) => {
        axios.delete('http://localhost:8000/api/pirates/'+ Id)
                .then(res => {
                    removeFromDom(Id)
                })
                .catch(err => console.error(err));
        }

        const removeFromDom = pirateId => {
            setAllPirates(allPirates.filter(pirate => pirate._id != pirateId));
        }
      
  
  
  
    return (
    <div>
        <h1>
            Pirate Crew
            <button style={{margin: '15px'}}>
                <Link to={'/pirate/new'}>Add Pirate</Link>
            </button>
        </h1>
        {
        allPirates.map((pirate, indx) => {
            return (
                <div style={{display: 'flex', margin: "10px"}} key= {pirate._id}>
                    <img src= {pirate.url} style={{height: '100px', width: '100px'}}></img>
                    
                    {pirate.name}
                    <button style={{height: '30px', backgroundColor: 'purple'}}><Link to={'/pirate/' + pirate._id}>View Pirate</Link></button>
                    <button onClick={e => {deletePirate(pirate._id)}} style={{height: '30px', backgroundColor: 'red'}}>Walk the Plank</button>
                    




                </div>
            )


        })
    }









    </div>
  )
}

export default DisplayAll