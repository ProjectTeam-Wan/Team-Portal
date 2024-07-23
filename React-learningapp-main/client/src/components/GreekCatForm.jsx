import React from 'react'
import { Form, FloatingLabel, Row, Col } from 'react-bootstrap'


function GreekCatForm({ handleChange, formData }) {
    return (

            <Form>

                <Form.Group className="mb-4">
                    <FloatingLabel label="Cat Name">
                        <Form.Control type="text" name="catName" value={formData.catName} placeholder="Cat Name" onChange={handleChange} />
                    </FloatingLabel>
                </Form.Group>
                <Row className="g-2 mb-4">
                    <Col md>
                        <FloatingLabel label="Black Cat">
                            <Form.Control type="text" name="blackCat" value={formData.blackCat} placeholder="black Cat" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label="Red Cat">
                            <Form.Control type="text" name="redCat" value={formData.redCat} placeholder="red Cat" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Form.Group className="mb-4">
                    <FloatingLabel label="Default Gateway">
                        <Form.Control type="text" name="dgCat" value={formData.dgCat} placeholder="Default Gateway" onChange={handleChange} />
                    </FloatingLabel>
                </Form.Group>
                <Row className="g-2 mb-4">
                    <Col md>
                        <FloatingLabel label="Control Station">
                            <Form.Control type="text" name="controlStation" value={formData.controlStation} placeholder="Control Station" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label="Control Cat">
                            <Form.Control type="text" name="controlCat" value={formData.controlCat} placeholder="Control Cat" onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>


    )
}

export default GreekCatForm
