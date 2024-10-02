import React from "react";
import "./style.css"

function Apresentacao(){
    return(
        <main className="boas-vindas">
            <div className="card m-2 efeito-vidro">
                <span className="d-flex flex justify-content-center alight-items-center ">
                    <h3>Olá! Escolha uma equação para seu cálculo</h3>
                </span>

            </div>
        </main>
    )
}
export default Apresentacao;