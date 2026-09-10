function ProductoCard({ producto, onAgregar }) {
  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <p className="categoria">{producto.categoria}</p>
      <p className="precio">S/ {producto.precio.toFixed(2)}</p>
      <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductoCard;
