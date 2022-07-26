import React from 'react'
import { Form,Button,Col,Row } from 'react-bootstrap'
export const ContactItem = () => {
    return (
        <div>
            <Row>
                <Col lg={2}> <img width={50}src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'/></Col>
                <Col lg={10}>
                    <div>이름</div>
                    <div>휴대폰번호</div>
                    <div></div>
                </Col>
            </Row>
        </div>
    )
}
