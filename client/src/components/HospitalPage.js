import React, {useEffect , useState} from 'react';
import { read } from '../services/network';
import './HospitalPage.css';

function HospitalPage() {
    const [data, setData] = useState([]);

    const [display, setDisplay] = useState(0);

    useEffect(() => {getInfo();} , []);
    
    const getInfo = async () => {
       await read(`hospitals`).then(r => {setData(r)});
    };

    return(<div id='hospital'>
        this is the hospital page
        <select onChange={async (e) => {
            let newData = await read(`hospitals/byId/${e.target.value}`).then(r => {setDisplay(r)});
            }}>
            {data.map((e) => <option value={e.id}>{e.name}</option>)}
        </select>
        {display !== 0 && <div>
            <div>Hospital Name: {display.name}</div>
            <div>Respirator Amount: {display.respiratorAmount}</div>
            <div>Maximum Patient Capacity: {display.maxCapacity}</div>
            <div>Registered Patients:</div>
            <ul>
            {display.Patients.map((e) => <li>{e.name}</li>)}
            </ul>
            </div>}
    </div>);
}

export default HospitalPage;