import React , {useState , useEffect} from 'react';
import axios from 'axios';
import './Icon.css';
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

function Icon(params)
{
    const [modal , setModal] = useState(false);

    const [info, setInfo] = useState([]);

    const getInfo = async () => {
        params.type == 'patient' && await axios.get(`http://localhost:8080/api/v1/patients`).then(r => setInfo(r.data));
        params.type == 'city' && await axios.get(`http://localhost:8080/api/v1/cities`).then(r => setInfo(r.data));
        params.type == 'hospital' && await axios.get(`http://localhost:8080/api/v1/hospitals`).then(r => setInfo(r.data));
        params.type == 'test' && await axios.get(`http://localhost:8080/api/v1/covidTests`).then(r => setInfo(r.data));
    };

    return (<div className={`icon-${params.type}`} onClick={() => {getInfo(); setModal(!modal)}}>{params.type}
    <Modal
        aria-labelledby="hi"
        aria-describedby="description" 
        open={modal}
        className={"modal"}
        onClose={() => {setModal(false)}}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={modal}>
          <div className={"paper"}>
        {info.map((e) => <div>{e.name}</div>)}
          </div>
        </Fade>
      </Modal>
        </div>);
}

export default Icon;