import React, { useState } from 'react'
import './Modal.css'

import {RxCross1} from 'react-icons/rx'

function Modal({closemodal , onSubmit, deafaultvalue}) {
    const [formState, setFormState] = useState(deafaultvalue || {
        page:"",
        description:"",
        status:"Live"
    })
    const [error, setError] = useState("")

    const validateForm =() => {
        if(formState.page && formState.description && formState.status){
            setError("")
            return true
        }
        else{
            let errorFilds = []
            for(const [key, value] of Object.entries(formState)){
                if(!value){
                    errorFilds.push(key)
                }
            }
            setError(errorFilds.join(', '))
            return false
        }
    }

    // const handlePageChange = (e) => {
    //     setFormState({
    //         ...formState,
    //        page : e.target.value
    //     })
    // }
    // const handleDescriptionChange = (e) => {
    //     setFormState({
    //         ...formState,
    //        description : e.target.value
    //     })
    // }

    const handleChange = (e) => {
        setFormState({
            ...formState,
           [ e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()) return;
        onSubmit(formState)
        closemodal();
        
    }

  return (
    <div className='modal-container' onClick={(e) =>{if( e.target.className === 'modal-container') closemodal()}} >
       
        <div className="modal border rounded-lg p-[2rem] bg-white w-[25em]">
        <div className="p-5">
        <RxCross1 onClick={closemodal}  className='cursor-pointer text-[1rem] float-right '/>

        </div>
        <form action="">
            <div className="form-group">
                <label htmlFor="page">Page</label>
                <input name='page' value={formState.page} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name='description' value={formState.description} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select name="status" value={formState.status} onChange={handleChange}>
                        <option value="live">Live</option>
                        <option value="draft">draft</option>
                        <option value="error">Error</option>
                </select>
            </div>
            {error && <div className='p-5 bg-red-200 m-auto my-2 rounded-lg text-[#ca4747] font-bold'>{`incluse the field: ${error}`}</div> }
            <button type='submit' className='m-auto flex bg-blue-700 p-2 rounded-md cursor-pointer shadow-md' onClick={handleSubmit}>SUBMIT</button>
        </form>
        </div>
    </div>
  )
}

export default Modal