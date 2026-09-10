import { useState, useEffect } from "react";
import ListaProductos from "./components/ListaProductos";
import CarritoResumen from "./components/CarritoResumen";
import Navbar from "./components/Navbar";
import { productos } from "./data/productos";
import { useCarritoStore } from "./store/useCarritoStore";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const items = useCarritoStore((state) => state.items);
  const agregarItem = useCarritoStore((state) => state.agregarItem);

  function handleAgregarAlCarrito(producto) {
    agregarItem(producto);
  }

  useEffect(() => {
    document.title =
      items.length > 0
        ? `(${items.length}) Mini Tienda Reactiva`
        : "Mini Tienda Reactiva";
  }, [items]);

  return (
    <div className="app">
      <Navbar />
      <main>
        <ListaProductos
          productos={productos}
          busqueda={busqueda}
          onBusquedaChange={setBusqueda}
          onAgregar={handleAgregarAlCarrito}
        />
        <CarritoResumen />
      </main>
    </div>
  );
}

export default App;