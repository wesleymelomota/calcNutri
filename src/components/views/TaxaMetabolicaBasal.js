import { useState } from 'react';
import './main.style.css'
import FormHarris from '../FormHarrisBenedict';
import FormMifflinStJeor from '../FormMifflinStJeor';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function TaxaMetabolicaBasal() {
    const [idade, setIdade] = useState(undefined);
    const [altura, setAltura] = useState(undefined);
    const [peso, setPeso] = useState(undefined);
    const [sexo, setSexo] = useState(undefined);
    const [formula, setFormula] = useState()
    const [imc, setImc] = useState()
    const [open, setOpen] = useState(true);
    
    let content;
    const escolherFormula = (event)=> {
        setFormula(event.target.value)
        
    }
    
    const escolherSexo = (event)=> {
        setSexo(event.target.value)
    }
    if(formula === '1'){
        
        if(peso != undefined  && altura != undefined && idade != undefined && sexo != undefined){
            content = <FormHarris peso={peso} altura={altura} idade={idade} sexo={sexo}/>
        }else{
            content =  <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
            <Alert variant="filled" severity="warning"
                action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                    setOpen(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
                }
                sx={{ mb: 2 }}
            >
                Por favor! preencha os campos
            </Alert>
            </Collapse></Box>
        }
        
    }else if(formula === '2'){
        if(peso != undefined  && altura != undefined && idade != undefined && sexo != undefined){
            content = <FormMifflinStJeor peso={peso} altura={altura} idade={idade} sexo={sexo}/>
        }else{
            content =  <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                <Alert variant="filled" severity="warning"
                    action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                        setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Por favor! preencha os campos
                </Alert>
                </Collapse>
                </Box>
        }
    }
    else if(formula === '0'){
        content = <></>
    }
    
    return (
        <main className="main-harris d-flex flex-column mt-2 mb-2 align-items-center">
            <div class="m-2">
                <h5 className='color-gray titles'>cálculo Taxa Metabólica Basal (TMB)</h5>
                
            </div>
            <form class="row g-3 p-5">
                
                <div class="col-md-3 form-floating mb-3">
                    
                    <TextField
                    onChange={(e) => setIdade(e.target.value)}
                    required
                    id="standard-required"
                    label="Idade"
                    type="number"
                    defaultValue=""
                    variant="standard"
                    color="success" focused
                    />
                </div>
                <div class="col-md-3 form-floating mb-3">
                    <TextField
                    onChange={(e) => setAltura(e.target.value)}
                    required
                    id="standard-required"
                    label="Altura"
                    placeholder='Ex... 175 cm'
                    defaultValue=""
                    type="number"
                    variant="standard"
                    color="success" focused
                    />
                </div>
                <div class="col-md-3 form-floating mb-3">
                <TextField
                    onChange={(e) => setPeso(e.target.value)}
                    required
                    id="standard-required"
                    label="Peso"
                    defaultValue=""
                    type="number"
                    variant="standard"
                    color="success" focused
                    />
                </div>
                <div className='col-md-3'>
                    {imc != null ? imc : <></>
                    
                    }
                </div>
                <div className='col-md-6'>
                    <Box sx={{ minWidth: 100 }} >
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="big">
                            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Sexo"
                            onChange={escolherSexo}
                            >
                            <MenuItem selected value={"0"}>Selecionar</MenuItem>
                            <MenuItem value={"homem"}>Homem</MenuItem>
                            <MenuItem value={"mulher"}>Mulher</MenuItem>
                            
                            </Select>
                        </FormControl>
                    </Box>
                    
                </div>
                
                <div className='col-md-6'>
                    <Box sx={{ minWidth: 100 }} >
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="big" fullWidth>
                            <InputLabel id="demo-simple-select-label">Fórmula  para cálculo</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Fórmula  para cálculo"
                            onChange={escolherFormula}
                            >
                            <MenuItem selected value={"0"}>Selecionar</MenuItem>
                            <MenuItem value={"1"}>Harris-Benedict</MenuItem>
                            <MenuItem value={"2"}>Miffins Jeor</MenuItem>
                            
                            </Select>
                        </FormControl>
                    </Box>
                    
                </div>
            </form>
            
            <span className='d-flex m-2 h-100'>
                {
                    content
                }
            </span>
        </main>
    )
}
export default TaxaMetabolicaBasal;