import React, { useEffect, useState } from 'react';

const AppClientes = () => {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favs = localStorage.getItem('favoritos');
        if (favs) {
            setFavoritos(JSON.parse(favs));
        }
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Clientes Favoritos</h1>
            {favoritos.length === 0 ? (
                <p className="text-center text-gray-500">No hay clientes favoritos aún.</p>
            ) : (
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Cliente</th>
                            <th className="p-2">Teléfono</th>
                            <th className="p-2">Origen</th>
                            <th className="p-2">Destino</th>
                            <th className="p-2">Fecha</th>
                            <th className="p-2">Vehículo</th>
                            <th className="p-2">Costo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favoritos.map((f, index) => (
                            <tr key={index} className="text-center border-t">
                                <td className="p-2">{f.cliente}</td>
                                <td className="p-2">{f.telefono}</td>
                                <td className="p-2">{f.origen}</td>
                                <td className="p-2">{f.destino}</td>
                                <td className="p-2">{f.fecha}</td>
                                <td className="p-2">{f.vehiculo}</td>
                                <td className="p-2">${f.costo.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AppClientes;

