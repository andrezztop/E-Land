import Button from "../Button"

export default function Card() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-xs border border-black">

      <div className="p-3">
        <div className="bg-gray-200 h-24 mb-2 flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-8 h-8 bg-gray-300" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
            <div className="w-8 h-8 bg-gray-300" />
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </div>
        <h3 className="text-sm font-semibold mb-1">Title</h3>
        <p className="text-xs text-gray-500 mb-2">Subtitle</p>
        <p className="text-xs text-gray-600 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
      <div className="p-3 border-t flex justify-end space-x-2">
        <Button text={"Comprar"}></Button>
        <Button text={"Agregar al carrito"}></Button>
      </div>
    </div>
  )
}