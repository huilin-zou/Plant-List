import React,{Fragment,useState,useEffect} from 'react'
import { EditPlants } from './EditPlants'
import { Navigate } from "react-router-dom";


export const ListPlants = () => {

    const [plants,setPlants]=useState([])

    //delete
    const deletePlant=async(id)=>{
        try {
            const deletePlant=await fetch(`http://localhost:5000/plants/${id}`,{
                method:'delete'
            })

           setPlants(plants.filter(plant=>plant.pid !==id))
        } catch (error) {
            console.log(error.message)

        }
    }

    const getPlants=async()=>{
            try {
                const response=await fetch ("http://localhost:5000/plants")
                const jsonData=await response.json()

                setPlants(jsonData)
            } catch (error) {
                console.log(error.message)

            }
    }

    useEffect(() => {
        getPlants()
    },[])
    return (
        <Fragment>

            <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {plants.map(plant=>(
          <tr key={plant.pid}>
        <td>
            {plant.name}
        </td>
        <td><EditPlants plant={plant}></EditPlants></td>
        <td><button className='btn btn-dark' onClick={()=>deletePlant(plant.pid)}>Delete</button></td>
          </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
}
