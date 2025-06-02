import { useEffect, useState } from 'react';

const Formulario = ({ agregarAcarreo, acarreo, agregarFavorito }) => {
    const [cliente, setCliente] = useState('');
    const [telefono, setTelefono] = useState('');
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fecha, setFecha] = useState('');
    const [vehiculo, setVehiculo] = useState('');
    const [costo, setCosto] = useState('');

    useEffect(() => {
        if (acarreo) {
            setCliente(acarreo.cliente);
            setTelefono(acarreo.telefono);
            setOrigen(acarreo.origen);
            setDestino(acarreo.destino);
            setFecha(acarreo.fecha);
            setVehiculo(acarreo.vehiculo);
            setCosto(acarreo.costo);
        } else {
            setCliente('');
            setTelefono('');
            setOrigen('');
            setDestino('');
            setFecha('');
            setVehiculo('');
            setCosto('');
        }
    }, [acarreo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cliente || !telefono || !origen || !destino || !fecha || !vehiculo || !costo) {
            return alert('Todos los campos son obligatorios');
        }

        agregarAcarreo({
            id: acarreo?.id || null,
            cliente,
            telefono,
            origen,
            destino,
            fecha,
            vehiculo,
            costo: parseFloat(costo),
        });
    };

    const manejarFavorito = () => {
        if (!cliente || !telefono) {
            return alert('Nombre y teléfono son requeridos para agregar a favoritos.');
        }

        if (agregarFavorito) {
            agregarFavorito({ cliente, telefono });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-semibold mb-4">{acarreo ? 'Editar' : 'Nuevo'} Acarreo</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Nombre del cliente"
                    className="border p-2 rounded"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Teléfono del cliente"
                    className="border p-2 rounded"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Origen"
                    className="border p-2 rounded"
                    value={origen}
                    onChange={(e) => setOrigen(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Destino"
                    className="border p-2 rounded"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                />
                <input
                    type="date"
                    className="border p-2 rounded"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
                <select
                    className="border p-2 rounded"
                    value={vehiculo}
                    onChange={(e) => setVehiculo(e.target.value)}
                >
                    <option value="">Seleccione vehículo</option>
                    <option value="Pequeño">Camión Pequeño</option>
                    <option value="Mediano">Camión Mediano</option>
                    <option value="Grande">Camión Grande</option>
                </select>
                <input
                    type="number"
                    placeholder="Costo del acarreo"
                    className="border p-2 rounded"
                    value={costo}
                    onChange={(e) => setCosto(e.target.value)}
                />
            </div>

            <div className="mt-4 flex gap-2">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    {acarreo ? 'Actualizar' : 'Registrar'}
                </button>

                {agregarFavorito && (
                    <button
                        type="button"
                        onClick={manejarFavorito}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Favoritos
                    </button>
                )}
            </div>
        </form>
    );
};

export default Formulario;
