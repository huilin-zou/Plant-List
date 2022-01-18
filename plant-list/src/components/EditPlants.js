import React, { useState, Fragment } from "react";

export const EditPlants = ({ plant }) => {
  const [name, setName] = useState(plant.name);

  //edit
  const updateName=async(e)=>{
      e.preventDefault()
      try {
          const body={name}
          const response=await fetch (`http://localhost:5000/plants/${plant.pid}`,{
              method:"put",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(body)
          })

          window.location="/"
      } catch (error) {
        console.log(error.message)

      }
  }
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target={`#id${plant.pid}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${plant.pid}`}
       onClick={()=>setName(plant.name)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={()=>setName(plant.name)}
              ></button>
            </div>

            <div className="modal-body">
              <input type="text" className="form-control" value={name}
              onChange={e=>setName(e.target.value)}></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
                onClick={e=>{updateName(e)}}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={()=>setName(plant.name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
