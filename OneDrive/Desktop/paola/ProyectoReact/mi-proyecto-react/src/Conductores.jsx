import React, { useEffect, useState } from 'react';

const Conductores = () => {
    const [conductores, setConductores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favoritos, setFavoritos] = useState(() => {
        const guardados = localStorage.getItem('conductoresFavoritos');
        return guardados ? JSON.parse(guardados) : [];
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (!res.ok) throw new Error('Error al obtener los datos');
                return res.json();
            })
            .then(data => setConductores(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const agregarAFavoritos = (conductor) => {
        const yaExiste = favoritos.some(f => f.id === conductor.id);
        if (!yaExiste) {
            const nuevos = [...favoritos, conductor];
            setFavoritos(nuevos);
            localStorage.setItem('conductoresFavoritos', JSON.stringify(nuevos));
            alert(`Conductor ${conductor.name} agregado a favoritos`);
        }
    };

    const eliminarFavorito = (id) => {
        const confirmacion = confirm('¿Eliminar este conductor de favoritos?');
        if (confirmacion) {
            const nuevos = favoritos.filter(f => f.id !== id);
            setFavoritos(nuevos);
            localStorage.setItem('conductoresFavoritos', JSON.stringify(nuevos));
        }
    };

    if (loading) return <p className="text-center">Cargando conductores...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Conductores</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {conductores.map((c) => (
                    <div key={c.id} className="border p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">{c.name}</h3>
                        <p><strong>Email:</strong> {c.email}</p>
                        <p><strong>Teléfono:</strong> {c.phone}</p>
                        <p><strong>Empresa:</strong> {c.company.name}</p>
                        <button
                            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            onClick={() => agregarAFavoritos(c)}
                        >
                            Agregar a favoritos
                        </button>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-semibold mb-2">Conductores Favoritos</h3>
            {favoritos.length === 0 ? (
                <p className="text-gray-500">No hay conductores favoritos aún.</p>
            ) : (
                <table className="w-full border text-left">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Teléfono</th>
                            <th className="p-2">Empresa</th>
                            <th className="p-2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favoritos.map((f) => (
                            <tr key={f.id} className="border-t">
                                <td className="p-2">{f.name}</td>
                                <td className="p-2">{f.email}</td>
                                <td className="p-2">{f.phone}</td>
                                <td className="p-2">{f.company.name}</td>
                                <td className="p-2">
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                        onClick={() => eliminarFavorito(f.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Conductores;

