import { useState } from "react";
import "./style.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FormMifflinStJeor({sexo, peso, altura, idade}){
    const [isResult, setIsResult] = useState(false)
    const [resultado, setResultado] = useState()
    const [imc, setImc] = useState()
    
    const calcularImc = ()=>{
        let alturaFormatada = `${altura[0]}.${altura[1]}${altura[2]}`
        let imc = (parseInt(peso) / (parseFloat(alturaFormatada)*parseFloat(alturaFormatada)))
        setImc(imc.toFixed(2))
    }

    const calcularFormMifflin = ()=> {
        if(sexo == "homem"){
            let tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5
            setResultado(tmb)
            setIsResult(true)
            calcularImc()
            return
        }else if(sexo == "mulher"){
            let tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161
            setResultado(tmb)
            setIsResult(true)
            calcularImc()
            return
        }
        setIsResult(false)
    }
    return(
        <div className="card efeito-vidro mb-2">
            <span className="card-title"> <h5 className="color-gray titles">Fórmula Mifflin-St Jeor</h5></span>
            <form className="row g-3 card-body">
                <div class="col-md-6 form-floating mb-3">
                   
                    <TextField
                    required
                    id="standard-required"
                    label="Peso"
                    defaultValue=""
                    value={peso}
                    variant="standard"
                    type="number"
                    color="success" focused
                    />
                </div>
                <div class="col-md-6 form-floating mb-3">
                    <TextField
                    required
                    id="standard-required"
                    label="Altura"
                    defaultValue=""
                    value={altura}
                    variant="standard"
                    type="number"
                    color="success" focused
                    />
                </div>
                <div class="col-md-6 form-floating mb-3">
                    <TextField
                    required
                    id="standard-required"
                    label="Idade"
                    defaultValue=""
                    value={idade}
                    variant="standard"
                    type="number"
                    color="success" focused
                    />
                </div>
                <div class="col-md-6 form-floating mb-3">
                    {isResult ? 
                        <span className="d-flex flex-column">
                            <label className="fs-5">Resultado TMB: </label> {resultado}
                            <label className="fs-5">Resultado IMC: </label> {imc}
                        </span>
                        :
                        <></>
                    }
                </div>
                <div class="col-md-12 m-2">
                    <Button variant="contained" color="success" onClick={calcularFormMifflin}>
                        Calcular
                    </Button>
                </div>
            </form>
            
        </div>
    )
}
export default FormMifflinStJeor;