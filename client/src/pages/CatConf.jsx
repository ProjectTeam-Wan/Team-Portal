import { useState, useEffect, useCallback } from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './catconf.css'
import GreekCatTemp from '../components/GreekCatTemp';
import GreekCatForm from '../components/GreekCatForm';
import { FaDownload } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";





function CatConf() {

    const [formData, setFormData] = useState({
        catType: '',
        catName: '',
        blackCat: '',
        redCat: '',
        dgCat: '',
        controlStation: '',
        controlCat: ''
    });

    const [form, setForm] = useState('')
    const [conf, setConf] = useState('');
    const [buttonShow, setButtonShow] = useState(false)
    const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied


    // Handle input change
    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }, [])

    useEffect(() => {
        if (formData.catType === 'catV2') {
            setForm(<GreekCatForm handleChange={handleChange} formData={formData} />)
            setConf(<GreekCatTemp catName={formData.catName} blackCat={formData.blackCat} redCat={formData.redCat} dgCat={formData.dgCat} controlStation={formData.controlStation} controlCat={formData.controlCat} />)
            setButtonShow(true)
        } else if (formData.catType === 'catV3') {
            setForm(<GreekCatForm handleChange={handleChange} formData={formData} />)
            setConf(<GreekCatTemp catName={formData.catName} blackCat={formData.blackCat} redCat={formData.redCat} dgCat={formData.dgCat} controlStation={formData.controlStation} controlCat={formData.controlCat} v3={true} />)
            setButtonShow(true)
        } else {
            setButtonShow(false)
            setForm('')
            setConf(<h2> Choose a cat </h2>)
        }
    }, [formData, handleChange]);

    function copyElementText() {
        var text = document.getElementById("copy-area").innerText;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);

        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
    }


    function downloadTxtFile() {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('copy-area').innerText], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${formData.catName}.txt`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (

        <div className='container'>
            <div className='header'>
                <h1>Welcome to cat configuration generator</h1>
            </div>
            <div className='formAndConf'>
                <div className='form'>
                    <Form>
                        <Form.Select className="my-4" aria-label="Default select example" name="catType" onChange={handleChange}>
                            <option>Open this select menu</option>
                            <option value="catV2">Cat V2</option>
                            <option value="catV3">Cat V3</option>
                            <option value="3">Cat L3</option>
                        </Form.Select>
                    </Form>

                    {form}
                </div>

                <div className="conf">
                    {conf}
                    <div className='buttonsDiv'>
                        <div>
                            {buttonShow ? <button className='copyButton' onClick={copyElementText}>
                                <FaRegCopy /> Copy to Clipboard</button> : null}
                            {copyStatus && <p>Text copied to clipboard!</p>}
                        </div>
                        <div>
                            {buttonShow ? <button className='downloadButton' onClick={downloadTxtFile}><FaDownload /> Download file</button> : null}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CatConf