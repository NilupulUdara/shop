
export const CartCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="flex items-center justify-between p-2 max-w-sm m-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img src={image} alt={name} className="w-1/4" />
  <div className="flex flex-col w-3/4">
    <p className="font-bold">{name}</p>
    <p className="font-bold">${price}</p>
  </div>
  <button className="text-white ml-4 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Remove</button>
</div>
  )
}
