import React, {useState} from "react";
import "./views/main.style.css"
import "./style.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FormjacksonPollock(){
    const [dobras, setDobras] = useState();
    const [sexo, setSexo] = useState("");
    const [dobraPeitoral, setDobraPeitoral] = useState();
    const [dobraCoxa, setDobraCoxa] = useState();
    const [dobraBiceps, setDobraBiceps] = useState()
    const [dobraTriceps, setDobraTriceps] = useState()
    const [dobraSubescapular, setSubescapular] = useState()
    const [dobraAbdominal, setDobraAbdominal] = useState();
    const [dobraSupraIliaca, setDobraSupra] = useState();
    const [resultadoDC, setResultadoDc] = useState(0.0);
    const [idade, setIdade] = useState();
    const [percentualGordura, setPercentualGordura] = useState(0.0);
    let content;
    
    const calcularDensidadeCorporal = (event) => {
        event.preventDefault();
        if(sexo === "homem"){
            if(dobras == "1"){
                limparCampoTresDobras()
                let resultadoSoma3Dobras = somarTresDobras(dobraCoxa, dobraPeitoral, dobraAbdominal);
                const densidadeCorporal = 1.10938 - (0.0008267 * resultadoSoma3Dobras) + (0.0000016 * Math.pow(resultadoSoma3Dobras, 2)) - (0.0002574 * idade);
                setResultadoDc(densidadeCorporal.toFixed(5));
                setPercentualGordura(calcularPercentualGordura(densidadeCorporal).toFixed(2))
                return 
            }else if(dobras == "2"){
                limparCampoQuatroDobras()
                let resultadoSoma4Dobras = somarQuatroDobras(dobraBiceps, dobraSupraIliaca, dobraSubescapular, dobraTriceps);
                const densidadeCorporal = 1.112 - (0.00043499 * resultadoSoma4Dobras) + (0.00000055 * Math.pow(resultadoSoma4Dobras, 2)) - (0.00028826 * idade);
                setResultadoDc(densidadeCorporal.toFixed(5))
                
                setPercentualGordura(calcularPercentualGordura(densidadeCorporal).toFixed(2))
                return  
            }
            
        }else if(sexo === "mulher"){
            let somaDobras = somarQuatroDobras(dobraBiceps, dobraSupraIliaca, dobraSubescapular, dobraTriceps);
            let dc = 1.097 - (0.00046971 * somaDobras) + (0.00000056 * Math.pow(somaDobras, 2)) - (0.00012828 * idade);
            setResultadoDc(dc.toFixed(5));
            setPercentualGordura(calcularPercentualGordura(dc).toFixed(2))
            return
        }
    };
    const limparCampoTresDobras = ()=> {
        setDobraCoxa("")
        setDobraPeitoral("")
        setDobraAbdominal("")
    }
    const limparCampoQuatroDobras = ()=> {
        setDobraBiceps("")
        setDobraSupra("")
        setDobraTriceps("")
        setSubescapular("")
    }
    const somarQuatroDobras = (bicpes, subescapular, supraIliaca, triceps)=> {
        let res = parseInt(bicpes) + parseInt(subescapular) + parseInt(supraIliaca) + parseInt(triceps)
        return res
    }
    const somarTresDobras = (dobraCoxa, dobraPeitoral, dobraAbdominal)=> {
        let res = parseInt(dobraCoxa) + parseInt(dobraPeitoral) + parseInt(dobraAbdominal)
        return res
    }
    
    const calcularPercentualGordura = (dc)=> {
        return ((4.95 / dc) - 4.5) * 100;
    };
    
    if(dobras == "1"){
        content = <>
            <div class="col-md-3 form-floating mb-3">
                <TextField
                    onChange={e => {setDobraPeitoral(e.target.value)}}
                    required
                    value={dobraPeitoral}
                    id="standard-required"
                    label="Peiroral"
                    type="number"
                    defaultValue=""
                    variant="standard"
                    color="success" focused
                    />
            </div>
            <div class="col-md-3 form-floating mb-3">
                <TextField
                    onChange={e => {setDobraAbdominal(e.target.value)}}
                    required
                    id="standard-required"
                    value={dobraAbdominal}
                    label="Abdominal"
                    type="number"
                    defaultValue=""
                    variant="standard"
                    color="success" focused
                    />
            </div>
            <div class="col-md-3 form-floating mb-3">
                <TextField
                    onChange={e => {setDobraCoxa(e.target.value)}}
                    required
                    id="standard-required"
                    label="Coxa"
                    value={dobraCoxa}
                    type="number"
                    defaultValue=""
                    variant="standard"
                    color="success" focused
                    />
            </div>
        </>
    }else if(dobras == "2"){
        content = <>
            <div class="col-md-3 form-floating mb-3">
                <TextField
                    onChange={e => {setSubescapular(e.target.value)}}
                    required
                    id="standard-required"
                    label="Subaescapular"
                    type="number"
                    value={dobraSubescapular}
                    defaultValue=""
                    variant="standard"
                    color="success" focused
                    />
            </div>
            <div class="col-md-3 form-floating mb-3">
                <TextField
                    onChange={e => {setDobraBiceps(e.target.value)}}
                    required
                    id="standard-required"
                    label="Bíceps"
                    type="number"
                    value={dobraBiceps}
                    defaultValue=""
                    variant="standard"
                    color="success" focused
                    />
            </div>
            <div class="col-md-3 form-floating mb-3">
                <TextField
                    onChange={e => {setDobraSupra(e.target.value)}}
                    required
                    id="standard-required"
                    label="Supra-ilíaca"
                    value={dobraSupraIliaca}
                    type="number"
                    defaultValue=""
                    variant="standard"
                    color="success" focused
                    />
            </div>
            <div class="col-md-3 form-floating mb-3">
                <TextField
                    onChange={e => {setDobraTriceps(e.target.value)}}
                    required
                    id="standard-required"
                    value={dobraTriceps}
                    label="Tríceps"
                    type="number"
                    defaultValue=""
                    variant="standard"
                    color="success" focused
                    />
            </div>
        </>
    }

    return(
        <main className="main container d-flex flex-column mt-3">    
            <span className="">
                <h5 className="color-gray titles">Obter percentual de gorduta</h5>
            </span>
            <form class="row g-3 p-2 needs-validation" onSubmit={calcularDensidadeCorporal} novalidate>
                <div class="col-md-3 form-floating mb-3">
                    <TextField
                    required
                    id="standard-required"
                    label="Idade paciente"
                    defaultValue=""
                    onChange={(e) => {setIdade(e.target.value)}}
                    variant="standard"
                    type="number"
                    value={idade}
                    color="success" focused
                    />
                </div>
                <div className='col-md-6'>
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
                            <MenuItem selected value={"0"}>Selecionar</MenuItem>
                            <MenuItem value={"homem"}>Homem</MenuItem>
                            <MenuItem value={"mulher"}>Mulher</MenuItem> 
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            
                {sexo == "homem" ? 
            
               <>
                <div className="card efeito-vidro p-2">
                    <div className="row">
                        <div className='col-md-4'>
                            <Box sx={{ minWidth: 100 }} >
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="big">
                                    <InputLabel id="demo-simple-select-label">Dobras</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Dobras"
                                    onChange={(e) => {setDobras(e.target.value)}}
                                    >
                                    <MenuItem selected value={"0"}>Selecionar</MenuItem>
                                    <MenuItem value={"1"}>Três</MenuItem>
                                    <MenuItem value={"2"}>Quadro</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        {content}
                    </div>
                </div>
                </> 
                :           
              <> 
              <div className="card d-flex efeito-vidro">
                <div className="row m-1">
                    <div class="col-md-3 form-floating mb-3">
                        <TextField
                            onChange={(e) => {setDobraTriceps(e.target.value)}}
                            required
                            id="standard-required"
                            label="Tríceps"
                            type="number"
                            defaultValue=""
                            variant="standard"
                            color="success" focused
                            />
                    </div>
                    <div class="col-md-3 form-floating mb-3">
                        <TextField
                            onChange={(e) => {setDobraSupra(e.target.value)}}
                            required
                            id="standard-required"
                            label="Supra-ilíaca"
                            type="number"
                            defaultValue=""
                            variant="standard"
                            color="success" focused
                            />
                    </div>
                    <div class="col-md-3 form-floating mb-3">
                        <TextField
                            onChange={(e) => {setDobraBiceps(e.target.value)}}
                            required
                            id="standard-required"
                            label="Bíceps"
                            type="number"
                            defaultValue=""
                            variant="standard"
                            color="success" focused
                            />
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
                </div>  
              </div>
                </> 
                    
                }
                <div className="card d-flex efeito-vidro">
                    <span className="card-title titles"><h5>Resultado</h5></span>
                    <span className="titles">Percentual de gordura: {percentualGordura} %</span>
                </div>
                <div class="m-2">        
                    <Button type="submit" variant="contained" color="success">
                        Calcular
                    </Button>
                </div>
            </form>
        </main>
    )
}
export default FormjacksonPollock;