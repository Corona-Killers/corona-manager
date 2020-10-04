import React, {useEffect , useState} from 'react';
import { read, remove } from '../services/network';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './CovidTestsPage.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function CovidTestsPage() {
    const [positiveResults, setPositiveResults] = useState('');
    const [negativeResults, setNegativeResults] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [deleteInput, setDeleteInput] = useState('');
    const [resultsBypatientId, setResultsBypatientId] = useState('')

const getPositiveTests = async () => {
    await read('covidTests/test-results/1')
    .then(results => {
        console.log(results);
        setPositiveResults(results.count);
        
    });
};
const getNegativeTests = async () => {
    await read('covidTests/test-results/0')
    .then(results =>{
        setNegativeResults(results.count);
       
    } );
};

const searchTestByPatientId = async () => {
    await read(`covidTests/${searchInput}`)
    .then( results => setResultsBypatientId(results.isSick))
    setSearchInput('')
}

const deleteTestByTestId = async (deleteInput) => {
    await remove(`covidTests/${deleteInput}`)
    .then( results =>{
         setResultsBypatientId(results.isSick);
         alert(`TestId ${deleteInput} Was deleted from the data`)
    }) 
    setDeleteInput('')
}

const classes = useStyles();
    return (
        <div className="container">
            <div className="mainHeader">Covid-Tests</div>
            <div className="button">
            <Button variant="contained" color="primary" onClick={getPositiveTests}>
                Count positive test results:
                </Button>
                <h3>{positiveResults}</h3>
                </div>
                <div className="button">
                <Button variant="contained" color="secondary" onClick={getNegativeTests}>
                Count negative test results:
                </Button>
                <h3>{negativeResults}</h3>
                </div>      
                <div className="searchPatientResults">
                <TextField value={searchInput} id="filled-basic" label="Enter Id to search result" variant="filled" onChange={(event) => setSearchInput(event.target.value)} />
                <Button variant="contained" onClick={searchTestByPatientId}>Search</Button>
                <h3>{resultsBypatientId === '' ? '' : resultsBypatientId ?  "Sick" : "Healthy"}</h3>
                </div>
                <div className="searchPatientResults">
                <TextField value={deleteInput} id="filled-basic" label="Enter Id to delete" variant="filled" onChange={(event) => setDeleteInput(event.target.value)} />
                <Button variant="contained" onClick={deleteTestByTestId}>Delete</Button>
                </div>
              </div>
    )
}

export default CovidTestsPage
