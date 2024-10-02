import React, { useState } from "react";
import "./views/main.style.css"
import "./style.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FormPerteson({sexo}){
    const [peso, setPeso] = useState(null);
    const [resultado, setResultado] = useState(0);
    const [gorduraCorporal, setGorduraCorporal] = useState(0);
    const [percentualGordura, setPercentualGordura] = useState(null);
    
    const limparForm = () => {
        setPeso('')
        setPercentualGordura('')
    };
    const obterMassaMagra = (event)=> {
        let massaMagra = (peso * (100 - percentualGordura)) / 100;
        setResultado(massaMagra)
        setGorduraCorporal(peso - massaMagra )
        limparForm()
        event.preventDefault();
    };

    return(
        <main className=" main container">
            <span className="card-title">
                <h5 className="color-gray titles">Obter massa magra</h5>
            </span>
            <div className="card m-2 efeito-vidro">
                <form class="row g-3 p-2 needs-validation" onSubmit={obterMassaMagra} novalidate>                   
                    <div class="col-md-3 mb-3">
                        <TextField
                            onChange={(e) => {setPeso(e.target.value)}}
                            required
                            id="standard-required"
                            label="Peso"
                            type="number"
                            defaultValue=""
                            variant="standard"
                            color="success" focused
                            />
                    </div>
                    <div class="col-md-3 mb-3">
                       
                        <TextField
                            onChange={(e) => {setPercentualGordura(e.target.value)}}
                            required
                            id="standard-required"
                            label="Percentual de gordura"
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
            <div className="card d-flex m-2 efeito-vidro">
                    <span className="card-title"><h5>Resultado</h5></span>                   
                    <span className="titles"><strong>Gordura corporal:</strong> {gorduraCorporal} Kg</span>
                    <span className="titles"><strong>Massa magra:</strong> {resultado} Kg</span>
            </div>
        </main>
    )
};

export default FormPerteson;