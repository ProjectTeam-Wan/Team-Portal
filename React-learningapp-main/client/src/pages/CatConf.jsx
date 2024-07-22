import { useState, useEffect, useCallback } from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './catconf.css'
import GreekCatTemp from '../components/GreekCatTemp';
import GreekCatForm from '../components/GreekCatForm';



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
            setConf(<h2> pick a cat </h2>)
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
        const file = new Blob([document.getElementById('copy-area').innerText], {type: 'text/plain'});
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
                        <span><svg viewBox="0 0 467 512.22" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" fill="#0E418F" height="12" width="12"><path d="M131.07 372.11c.37 1 .57 2.08.57 3.2 0 1.13-.2 2.21-.57 3.21v75.91c0 10.74 4.41 20.53 11.5 27.62s16.87 11.49 27.62 11.49h239.02c10.75 0 20.53-4.4 27.62-11.49s11.49-16.88 11.49-27.62V152.42c0-10.55-4.21-20.15-11.02-27.18l-.47-.43c-7.09-7.09-16.87-11.5-27.62-11.5H170.19c-10.75 0-20.53 4.41-27.62 11.5s-11.5 16.87-11.5 27.61v219.69zm-18.67 12.54H57.23c-15.82 0-30.1-6.58-40.45-17.11C6.41 356.97 0 342.4 0 326.52V57.79c0-15.86 6.5-30.3 16.97-40.78l.04-.04C27.51 6.49 41.94 0 57.79 0h243.63c15.87 0 30.3 6.51 40.77 16.98l.03.03c10.48 10.48 16.99 24.93 16.99 40.78v36.85h50c15.9 0 30.36 6.5 40.82 16.96l.54.58c10.15 10.44 16.43 24.66 16.43 40.24v302.01c0 15.9-6.5 30.36-16.96 40.82-10.47 10.47-24.93 16.97-40.83 16.97H170.19c-15.9 0-30.35-6.5-40.82-16.97-10.47-10.46-16.97-24.92-16.97-40.82v-69.78zM340.54 94.64V57.79c0-10.74-4.41-20.53-11.5-27.63-7.09-7.08-16.86-11.48-27.62-11.48H57.79c-10.78 0-20.56 4.38-27.62 11.45l-.04.04c-7.06 7.06-11.45 16.84-11.45 27.62v268.73c0 10.86 4.34 20.79 11.38 27.97 6.95 7.07 16.54 11.49 27.17 11.49h55.17V152.42c0-15.9 6.5-30.35 16.97-40.82 10.47-10.47 24.92-16.96 40.82-16.96h170.35z" fill-rule="nonzero"></path></svg> Copy to Clipboard</span>
                    </button> : null}
                    {copyStatus && <p>Text copied to clipboard!</p>}
                    </div>
                    <div>
                    {buttonShow ? <button className='downloadButton' onClick={downloadTxtFile}>Download file</button> : null}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatConf