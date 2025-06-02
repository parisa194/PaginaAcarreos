import React from "react";
import "./ButtonMenu.css";

const ButtonMenu = () => {
    return (
        <div className="menu-container">
            <button className="menu-button" onClick={() => window.open("/", "_blank")}>
                Inicio
            </button>
            <button
                className="menu-button"
                onClick={() => window.open("/clientes-favoritos", "_blank")}
            >
                Clientes favoritos
            </button>
            <button className="menu-button" onClick={() => window.open("/conductores", "_blank")}>
                Conductores
            </button>
        </div>
    );
};

export default ButtonMenu;
