import { useState } from 'react';
import Formulario from './Formulario';
import Tabla from './Tabla';

const App = () => {
  const [acarreos, setAcarreos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [acarreando, setAcarreando] = useState(null);

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

  const filtrados = acarreos.filter((a) =>
    a.cliente.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Acarreos JP</h1>
      <h1 className="text-3xl font-bold text-center mb-6">Gestión de Acarreos</h1>

      <Formulario agregarAcarreo={agregarAcarreo} acarreo={acarreando} />

      <input
        type="text"
        className="w-full border p-2 mt-4 mb-6 rounded"
        placeholder="Filtrar por cliente..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <Tabla datos={filtrados} onEditar={editarAcarreo} onEliminar={eliminarAcarreo} />
    </div>
  );
};

export default App;
