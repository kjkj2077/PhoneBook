import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
export const SearchBox = () => {
    return (
        <div>
            <Row>
                <Col lg={10}><Form.Control type="text" placeholder="Enter name" /></Col>
                <Col lg={2}><Button>Search</Button></Col>
            </Row>
        </div>
    )
}
