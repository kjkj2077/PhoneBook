import { Form, Col, Row } from 'react-bootstrap'
export const SearchBox = () => {
    return (
        <div className='Search-box' >
            <Form  className="search-form">
                <Row>
                    <Col lg={12}>
                        <h1>List</h1>
                    </Col> 
                </Row>
            </Form>
        </div>
    )
}
