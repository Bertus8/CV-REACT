import React from "react";
import "./More.css";

const More = ({ languages, habilities }) => {
    return (
<div className="more">
    <h2 className="title">Idiomas</h2>
    <p className="text">{languages.language}</p>
    <p className="text">{languages.wrlevel}</p>
    <p className="text">{languages.splevel}</p>
    <h2 className="title1">Habilidades</h2>
    <p className="text">{habilities}</p>

</div>
    )
}
export { More };