

export default function Cart() {
  return (
    <div className="relative cursor-pointer">
      <img src="./images/shopping-cart" alt="" />
    
      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
        0
      </span>
    </div>
  );
}
