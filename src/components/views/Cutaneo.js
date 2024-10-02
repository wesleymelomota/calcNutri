import React, {useState} from "react";
import "./main.style.css"
import "../style.css"
import FormjacksonPollock from "../FormJacksonPollock";
import FormPerteson from "../FormPerteson";
import Apresentacao from "../Apresentacao";
import FormSlaughter from "../FormSlaughter";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Cutaneo(){
    const [formula, setFormula] = useState();
    let content;

   if(formula == "1"){
        content = <FormjacksonPollock />
   }else if(formula == "2"){
        content = <FormPerteson/>
   }else if(formula == "3"){
        content = <FormSlaughter/>
   }
   else{
        content = <Apresentacao/>
   }

    return(
        <main className="main  d-flex flex-column mt-2 mb-2">
            <h5 className="color-gray titles">Cálculo cutâneo</h5>
            <form class="row g-2 p-2 needs-validation " >               
                <div className='col-md-6'>
                    <Box sx={{ minWidth: 100 }} >
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="big">
                            <InputLabel id="demo-simple-select-label">Equações</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="equações"
                            onChange={(e) => {setFormula(e.target.value)}}
                            >
                            <MenuItem selected value={"0"}>Selecionar</MenuItem>
                            <MenuItem value={"1"}>Jackson e Pollock</MenuItem>
                            <MenuItem value={"2"}>Perteson</MenuItem>
                            <MenuItem value={"3"}>Slaughter</MenuItem>
                            
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </form>
            {content}
        </main>
    )
}
export default Cutaneo;