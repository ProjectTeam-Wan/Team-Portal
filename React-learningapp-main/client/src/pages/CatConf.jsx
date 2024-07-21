import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './catconf.css'
import CatV2 from '../components/CatV2';
import CatV3 from '../components/CatV3';



function CatConf() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        catName: '',
        catType: ''
    });

    // const [template1, setTemplate1] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        console.log(formData)
        if (formData.catType === 'catV2') {
            setContent(<CatV2 email={formData.email} password={formData.password} />)
        } else if (formData.catType === 'catV3') {
            setContent(<CatV3 email={formData.email} password={formData.password} />)
        } else {
            setContent('pick a cat')
        }
    }, [formData]);


    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // prevening from the submit button to refresh the page
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
    };






    return (
        <div className='cat-conf-div'>
            <div className='form'>
                <Form onSubmit={handleSubmit}>
                    <Form.Select className="my-3" aria-label="Default select example" name="catType" onChange={handleChange}>
                        <option>Open this select menu</option>
                        <option value="catV2">Cat V2</option>
                        <option value="catV3">Cat V3</option>
                        <option value="3">Three</option>
                    </Form.Select>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="eliran">
                <h1>my name is eliran</h1>
                <pre>{content}</pre>
                {/* <h2> {formData.email} </h2>
                <h2> {formData.password} </h2> */}
                <h2> {formData.catType} </h2>

            </div>


        </div>
    )
}

export default CatConf