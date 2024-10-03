export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4">
      <nav className="flex-grow">
        {["Inicio", "Carrito", "Categorias", "Ayuda al cliente"].map((item, index) => (
          <div key={index} className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
            {item}
          </div>
        ))}
      </nav>
    </aside>
  )
}