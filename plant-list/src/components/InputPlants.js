import React,{Fragment,useState} from 'react'

export const InputPlants = () => {

    const [name,setName]=useState("")

    const onSubmitForm=async(e)=>{
        e.preventDefault()
        try {
            const body={name}
            const response=await fetch("http://localhost:5000/plants",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })

            window.location="/"
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <Fragment>
              

                <form
                className='d-flex mt-5'
                onSubmit={onSubmitForm}>
                    <input
                    type="text"
                    className='form-control'
                    value={name}
                    onChange={e=>setName(e.target.value)}>


                    </input>

                    <button
                    className='btn btn-light'>Add</button>
                </form>
            </Fragment>
        </div>
    )
}
