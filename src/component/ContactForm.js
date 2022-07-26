import React from 'react'
import { Form,Button } from 'react-bootstrap'
export const ContactForm = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="number" placeholder="number" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form></div>
    )
}
