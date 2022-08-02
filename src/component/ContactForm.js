import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
export const ContactForm = () => {
    const [name,setName]=useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const dispatch =useDispatch()
    const addContact=(e)=>{
        e.preventDefault(); //리프레쉬 막기
        dispatch({type:"ADD",payload:{name:name,phoneNumber}}) //보내는게 같다면 phoneNumber처럼 가능.
    }
    return (
        <div className='add-number'>
            <h1>Add number</h1>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="number" placeholder="number" onChange={(e)=>setPhoneNumber(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form></div>
    )
}
