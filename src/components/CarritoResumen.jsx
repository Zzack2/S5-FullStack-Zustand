//AGREGADO:
import { useMemo } from "react";
import { useCarritoStore } from "../store/useCarritoStore";
//AGREGADO--

// CAMBIADO: function CarritoResumen({ carrito }) {
//AGREGADO:
function CarritoResumen() {
//AGREGADO--
  // ---------------------------------------------------------------
  // EJERCICIO 2 (useMemo): esta función recalcula el total en texto
  // plano. Primero comprueba (con el console.log) cuántas veces se
  // ejecuta mientras escribes en el buscador. Luego envuélvela en
  // useMemo para que solo se recalcule cuando 'carrito' cambie.
  // ---------------------------------------------------------------
  // CAMBIADO: console.log("Calculando total del carrito...");
  // CAMBIADO: const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  // ---------------------------------------------------------------
  // EJERCICIO 4 (Zustand): cuando migres el carrito al store en
  // App.jsx, actualiza también este componente:
  //   1. Cambia la firma a function CarritoResumen() {} (sin props).
  //   2. Importa useCarritoStore desde "../store/useCarritoStore".
  //   3. Obtén 'carrito' con:
  //        const carrito = useCarritoStore((state) => state.items);
  //      en vez de recibirlo por props.
  // ---------------------------------------------------------------
//AGREGADO:
  const carrito = useCarritoStore((state) => state.items);

  const total = useMemo(() => {
    console.log("Calculando total del carrito");
    return carrito.reduce((acc, p) => acc + p.precio, 0);
  }, [carrito]);
//AGREGADO--

  // ---------------------------------------------------------------
  // RETO INTEGRADOR (opcional): si 'total' supera S/ 300, aplica un
  // descuento del 10% y muestra un mensaje. Usa el mismo useMemo o
  // una variable derivada de él.
  // ---------------------------------------------------------------
  // CAMBIADO: const totalFinal = total;
//AGREGADO:
  const tieneDescuento = total > 300;
  const totalFinal = tieneDescuento ? total * 0.9 : total;
//AGREGADO--

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
{/*AGREGADO:*/}
      {tieneDescuento && (
        <p className="descuento">Descuento: 10%</p>
      )}
{/*AGREGADO--*/}
      <p className="total">Total: S/ {totalFinal.toFixed(2)}</p>
    </aside>
  );
}

export default CarritoResumen;