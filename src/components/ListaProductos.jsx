import ProductoCard from "./ProductoCard";

function ListaProductos({ productos, busqueda, onBusquedaChange, onAgregar }) {
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="lista-productos-wrapper">
      <input
        type="text"
        className="buscador"
        placeholder="Buscar producto por nombre..."
        value={busqueda}
        onChange={(e) => onBusquedaChange(e.target.value)}
      />
      <div className="lista-productos">
        {productosFiltrados.map((p) => (
          <ProductoCard key={p.id} producto={p} onAgregar={onAgregar} />
        ))}
        {productosFiltrados.length === 0 && (
          <p className="sin-resultados">No se encontraron productos.</p>
        )}
      </div>
    </section>
  );
}

export default ListaProductos;
