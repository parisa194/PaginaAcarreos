import React, { useState, useEffect } from 'react'; // Agregado useEffect
import { Routes, Route } from 'react-router-dom';
import Formulario from './Formulario';
import Tabla from './Tabla';
import Conductores from './Conductores'; // Asegúrate que el archivo existe
import AppClientes from './AppClientes';
import ButtonMenu from './assets/ButtonMenu';

const App = () => {
  const [acarreos, setAcarreos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [acarreando, setAcarreando] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      setFavoritos(JSON.parse(favoritosGuardados));
    }
  }, []);

  const agregarAcarreo = (nuevo) => {
    if (nuevo.id) {
      setAcarreos(acarreos.map((a) => (a.id === nuevo.id ? nuevo : a)));
    } else {
      nuevo.id = Date.now();
      setAcarreos([...acarreos, nuevo]);
    }
    setAcarreando(null);
  };

  const eliminarAcarreo = (id) => {
    if (confirm('¿Eliminar este acarreo?')) {
      setAcarreos(acarreos.filter((a) => a.id !== id));
    }
  };

  const editarAcarreo = (ac) => setAcarreando(ac);

  const agregarFavorito = (cliente) => {
    const yaExiste = favoritos.some(
      (f) => f.cliente === cliente.cliente && f.telefono === cliente.telefono && f.email === cliente.email && f.origen === cliente.origen && f.destino === cliente.destino && f.fecha === cliente.fecha && f.vehiculo === cliente.vehiculo && f.costo === cliente.costo
    );
    if (!yaExiste) {
      const nuevosFavoritos = [...favoritos, cliente];
      setFavoritos(nuevosFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos)); 
      alert(`Cliente agregado a favoritos: ${cliente.cliente}`);
    }
  };

  const filtrados = acarreos.filter((a) =>
    a.cliente.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <ButtonMenu /> {/* Menú visible en todas las páginas */}

      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-5xl mx-auto p-4">
              <h1 className="text-3xl font-bold text-center mb-6">Acarreos JP</h1>

              <Formulario agregarAcarreo={agregarAcarreo} acarreo={acarreando} />

              <input
                type="text"
                className="w-full border p-2 mt-4 mb-6 rounded"
                placeholder="Filtrar por cliente..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              />

              <Tabla
                datos={filtrados}
                onEditar={editarAcarreo}
                onEliminar={eliminarAcarreo}
                onFavoritos={agregarFavorito}
              />
            </div>
          }
        />

        <Route
          path="/clientes-favoritos"
          element={<AppClientes favoritos={favoritos} />}
        />

        <Route path="/conductores" element={<Conductores />} />

      </Routes>
    </>
  );
};

export default App;
