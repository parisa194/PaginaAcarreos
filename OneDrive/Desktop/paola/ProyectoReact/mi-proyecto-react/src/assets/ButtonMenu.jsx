import React from "react";
import "./ButtonMenu.css"; 

const ButtonMenu = () => {
    const handleClick = (buttonName) => {
        alert(`Has hecho clic en: ${buttonName}`);
    };

    return (
        <div className="menu-container">
            <button className="menu-button" onClick={() => handleClick("Inicio")}>
                Inicio
            </button>
            <button className="menu-button" onClick={() => handleClick("Servicios")}>
                Servicios
            </button>
            <button className="menu-button" onClick={() => handleClick("Contacto")}>
                Contacto
            </button>
        </div>
    );
};

export default ButtonMenu;