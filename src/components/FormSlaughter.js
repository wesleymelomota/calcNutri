import React, { useState } from "react";
import "./style.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FormSlaughter(){
    const [sexo, setSexo] = useState()
    const [subescapular, setSubescapular] = useState()
    const [triceps, setTriceps] = useState();
    const [resultado, setResultado] = useState(0)

    const obterPorcentagem = (event)=> {
        event.preventDefault();
        if(sexo == "menino"){
            setResultado(calcularPorcentagemMenino().toFixed(2))
            limparCampos()
            
        }else if(sexo == "menina"){
            setResultado(calcularPorcentagemMenina().toFixed(2))
            limparCampos()
        }
    }
    const somarDobras = ()=> {
        return parseInt(subescapular) + parseInt(triceps);
    }
    const calcularPorcentagemMenino = ()=>{
        let dobrasTotal = somarDobras();
        let percentualGordura;
        if(dobrasTotal < 35){
            percentualGordura = 1.21 * dobrasTotal - 0.008 * (Math.pow(dobrasTotal, 2)) - 1.7;

        }else{
            percentualGordura = 0.738 * dobrasTotal + 1.6;
        }
        return percentualGordura;
    }
    const calcularPorcentagemMenina = ()=>{
        let dobrasTotal = somarDobras()
        let porcentualGordura;
        if(dobrasTotal < 35){
            porcentualGordura = 1.33 * dobrasTotal - 0.013 * (Math.pow(dobrasTotal, 2)) - 2.5;
        }else{
            porcentualGordura = 0.546 * dobrasTotal + 9.7
        }
        return porcentualGordura;
    }
    const limparCampos = ()=> {
        setTriceps('')
        setSubescapular('')
    }

    return(
        <main className=" main container">
            <span className="card-title">
                <h5 className="color-gray titles">Obter gordura corporal</h5>
            </span>
            <div className="card efeito-vidro">
                <form class="row g-3 p-5 needs-validation" onSubmit={obterPorcentagem} novalidate>
                    <div className='col-md-3'>
                        <Box sx={{ minWidth: 100 }} >
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="big">
                                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Sexo"
                                required
                                onChange={(e) => {setSexo(e.target.value)}}
                                >
                                <MenuItem selected value={"selecionar"}>Selecionar</MenuItem>
                                <MenuItem value={"menino"}>Menino</MenuItem>
                                <MenuItem value={"menina"}>Menina</MenuItem> 
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div class="col-md-3 form-floating mb-3">
                        <TextField
                            onChange={(e) => {setSubescapular(e.target.value)}}
                            required
                            id="standard-required"
                            label="Subeescapular"
                            type="number"
                            defaultValue=""
                            variant="standard"
                            color="success" focused
                            />
                    </div>
                    <div class="col-md-3 form-floating mb-3">
                        <TextField
                            onChange={(e)=>{setTriceps(e.target.value)}}
                            required
                            id="standard-required"
                            label="Tríceps"
                            type="number"
                            defaultValue=""
                            variant="standard"
                            color="success" focused
                            />
                    </div>
                    <div class="">
                        <Button type="submit" variant="contained" color="success">
                            Calcular
                        </Button>
                    </div>
                </form>
            </div>
            <div className="card d-flex mt-1 efeito-vidro">
                    <span className="card-title titles"><h5>Resultado</h5></span>
                    <span className="mb-1 titles"><strong>Porcentagem de gordura:</strong> {resultado} %</span>
            </div>
        </main>
    )
}
export default FormSlaughter;