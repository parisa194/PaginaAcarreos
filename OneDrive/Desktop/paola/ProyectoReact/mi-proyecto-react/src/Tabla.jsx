const Tabla = ({ datos, onEditar, onEliminar }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-xl">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="py-2 px-4">Cliente</th>
                        <th className="py-2 px-4">Origen</th>
                        <th className="py-2 px-4">Destino</th>
                        <th className="py-2 px-4">Fecha</th>
                        <th className="py-2 px-4">Vehículo</th>
                        <th className="py-2 px-4">Costo</th>
                        <th className="py-2 px-4">Acciones</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {datos.map((a) => (
                        <tr key={a.id} className="border-b hover:bg-gray-100">
                            <td className="py-2 px-4">{a.cliente}</td>
                            <td className="py-2 px-4">{a.origen}</td>
                            <td className="py-2 px-4">{a.destino}</td>
                            <td className="py-2 px-4">{a.fecha}</td>
                            <td className="py-2 px-4">{a.vehiculo}</td>
                            <td className="py-2 px-4">${a.costo.toFixed(2)}</td>
                            <td className="py-2 px-4 flex gap-2">
                                <button
                                    onClick={() => onEditar(a)}
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => onEliminar(a.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    {datos.length === 0 && (
                        <tr>
                            <td colSpan="7" className="text-center py-4 text-gray-500">
                                No hay acarreos registrados
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Tabla;

