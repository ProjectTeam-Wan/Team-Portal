// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, FloatingLabel, Button } from 'react-bootstrap'

function AddNewEdgeInput() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Form style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>

                <Form.Group controlId="formBasicEmail" style={{ margin: 0 }}>
                    <FloatingLabel label="Edge Name">
                        <Form.Control type="text" placeholder="Enter edge name" name='edgeName' style={{ flex: '1', height: '10px' }} />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{ margin: 0 }}>
                    <FloatingLabel label="Edge Name">
                        <Form.Control type="text" placeholder="text" style={{ flex: '1' }} />
                    </FloatingLabel>
                </Form.Group>

                {/* <Form.Group controlId="formBasicCheckbox" style={{ margin: 0 }}>
                    <Form.Check type="checkbox" label="Check me out" style={{ marginRight: '1rem' }} />
                </Form.Group> */}

                <Form.Select style={{ width: 'fit-content' }} aria-label="Default select example" name="catType">
                    <option>Open this select menu</option>
                    <option value="catV2">Cat V2</option>
                    <option value="catV3">Cat V3</option>
                    <option value="3">Cat L3</option>
                </Form.Select>

                <Button variant="primary">add</Button>
            </Form>
        </div>
    );
}

export default AddNewEdgeInput;
