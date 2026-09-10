function CarritoResumen({ carrito }) {
  // ---------------------------------------------------------------
  // EJERCICIO 2 (useMemo): esta función recalcula el total en texto
  // plano. Primero comprueba (con el console.log) cuántas veces se
  // ejecuta mientras escribes en el buscador. Luego envuélvela en
  // useMemo para que solo se recalcule cuando 'carrito' cambie.
  // ---------------------------------------------------------------
  console.log("Calculando total del carrito...");
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  // ---------------------------------------------------------------
  // EJERCICIO 4 (Zustand): cuando migres el carrito al store en
  // App.jsx, actualiza también este componente:
  //   1. Cambia la firma a function CarritoResumen() {} (sin props).
  //   2. Importa useCarritoStore desde "../store/useCarritoStore".
  //   3. Obtén 'carrito' con:
  //        const carrito = useCarritoStore((state) => state.items);
  //      en vez de recibirlo por props.
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // RETO INTEGRADOR (opcional): si 'total' supera S/ 300, aplica un
  // descuento del 10% y muestra un mensaje. Usa el mismo useMemo o
  // una variable derivada de él.
  // ---------------------------------------------------------------
  const totalFinal = total;

  return (
    <aside className="carrito-resumen">
      <h2>Tu carrito</h2>
      {carrito.length === 0 ? (
        <p>Aún no has agregado productos.</p>
      ) : (
        <ul>
          {carrito.map((item, i) => (
            <li key={i}>
              {item.nombre} — S/ {item.precio.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <p className="total">Total: S/ {totalFinal.toFixed(2)}</p>
    </aside>
  );
}

export default CarritoResumen;
