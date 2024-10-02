import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(){
    return(
        <div className="">
            <h1 className="display-1 color-white">Oooops!</h1>
            <h5 className="color-white">Pagina não encontrada 😅</h5>
            <p className="color-white">Redefina sua preferência</p>
            <Link class=" fs-5 link-offset-2 link-underline link-underline-opacity-0" to="/"> Voltar ao inicio</Link>
        </div>
    )
}
export default PageNotFound;