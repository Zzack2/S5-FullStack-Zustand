import { useCarritoStore } from "../store/useCarritoStore";

function Navbar() {
  // ---------------------------------------------------------------
  // EJERCICIO 4 (Zustand): usa un selector de useCarritoStore para
  // leer 'items' desde el store y mostrar la cantidad real en el
  // badge. Este componente NO recibe 'items' como prop: debe leerlo
  // directamente del store, igual que el ícono de campana del
  // ejemplo de notificaciones visto en la teoría.
  //
  // Pista: const items = useCarritoStore((state) => state.items);
  // ---------------------------------------------------------------
  const items = [];

  return (
    <header className="app-header">
      <h1>Mini Tienda Reactiva</h1>
      <span className="carrito-badge">🛒 {items.length}</span>
    </header>
  );
}

export default Navbar;
