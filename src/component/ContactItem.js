import React, { useState } from "react";
import { Col, Row, Button } from 'react-bootstrap'
export const ContactItem = ({ item }) => {
    const [visiable, setVisible] = useState(false);
    return (
        <div className='contact-list'>
            {visiable == false ?
                <Row>
                    <Col lg={2}> <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg' /></Col>
                    <Col lg={8}>
                        <div>{item.name}</div>
                        <div>{item.phoneNumber}</div>
                    </Col>
                    <Col lg={2}>
                        <Button id="delete-button"variant="secondary" onClick={() => { setVisible(!visiable) }}>Deletle</Button>
                    </Col>
                </Row>
                : " "}
        </div>
    )
}
