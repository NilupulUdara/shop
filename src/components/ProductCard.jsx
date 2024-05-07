
export const ProductCard = ({product}) => {
  const {name,price,image} = product;

  return (
    <div className="w-full flex-col p-2 max-w-sm m-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img src={image} alt={name} />
      <p className="font-bold">{name}</p>
      <div className="flex items-center justify-between pt-3">
        <p className="font-bold ">${price}</p>
        <button className="text-white ml-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add To Cart</button>
      </div>
    </div>
  )
}
