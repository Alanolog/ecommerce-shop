import React from "react";
import { MdDeleteOutline, MdRemoveCircleOutline } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";
import { useContext } from "../components";
import { useRouter } from "next/router";

type singleProduct = {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  amount: number;
};
interface CartProps {
  singleProduct: singleProduct;
}

const CartProduct: React.FC<CartProps> = ({ singleProduct }) => {
  const { setCartItemsCount } = useContext();
  const [currProduct, setCurrProduct] = React.useState(singleProduct);
  const deleteProduct = (product: singleProduct) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const clearedCart = storedCart.filter(
      (e: singleProduct) => e.item.id !== product.item.id
    );
    localStorage.setItem("cart", JSON.stringify(clearedCart));
    setCartItemsCount(clearedCart.length);
  };
  const changeAmount = (productId: number, modifier: string) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemIndex = storedCart.findIndex(
      (singleItem: singleProduct) => singleItem.item.id === productId
    );
    const amount = storedCart[itemIndex].amount;
    const changeAmount = modifier === "add" ? 1 : -1;
    if (amount + changeAmount >= 1) {
      storedCart[itemIndex] = { ...currProduct, amount: amount + changeAmount };
      localStorage.setItem("cart", JSON.stringify([...storedCart]));
      setCurrProduct(storedCart[itemIndex]);
    }
  };
  return (
    <div className=" flex justify-between my-2 border-b pb-2 sm:flex-col sm:items-center sm:gap-2">
      <div className="flex-2 flex sm:flex-col">
        <img
          src={currProduct.item.image}
          alt={currProduct.item.title}
          className=" w-[200px] sm:w-full sm:max-h-[50vh] sm:object-scale-down lg:max-w-[33vw]"
        />
        <div className=" p-5 flex flex-col items-center content-around">
          <p className="">
            <strong>Product:</strong>
            {currProduct.item.title}
          </p>
          <p className="">
            <strong>ID:</strong>
            {currProduct.item.id}
          </p>
        </div>
      </div>
      <div className=" flex-1 flex items-end flex-col pr-2">
        <div className=" text-xl flex gap-1 justify-center items-center mb-5">
          <div className=" flex items-center font-bold">
            <MdRemoveCircleOutline
              className=" cursor-pointer"
              onClick={() => changeAmount(currProduct.item.id, "subtract")}
            />
            <span className=" w-8 h-8 rounded-xl border border-teal-600 flex items-center justify-center mx-1">
              {currProduct.amount}
            </span>
            <RiAddCircleLine
              className="cursor-pointer"
              onClick={() => changeAmount(currProduct.item.id, "add")}
            />
          </div>
          <div className=" w-5 h-5 bg-red-900 rounded-full text-white mx-2 flex ">
            <MdDeleteOutline
              className="cursor-pointer "
              onClick={() => deleteProduct(currProduct)}
            />
          </div>
        </div>
        <div className=" text-2xl flex justify-center items-center ">
          {(currProduct.item.price * currProduct.amount).toFixed(2)}USD
        </div>
      </div>
    </div>
  );
};

const Cart: React.FC = () => {
  const router = useRouter();

  const [storedCart, setStoredCart] = React.useState([]);
  const [isCheckedOut, setIsCheckedOut] = React.useState(false);
  const [subtotal, setSubtotal] = React.useState(
    storedCart.reduce((acc, val: singleProduct) => {
      return acc + val.item.price * val.amount;
    }, 0)
  );
  const [isShippingDiscount, setIsShippingDiscount] = React.useState(false);
  const [shippingPrice, setShippingPrice] = React.useState(
    isShippingDiscount ? 0 : 5.99
  );
  const { cartItemsCount, setCartItemsCount } = useContext();
  React.useEffect(() => {
    setStoredCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, [cartItemsCount]);
  React.useEffect(() => {
    setSubtotal(
      storedCart.reduce((acc, val: singleProduct) => {
        return acc + val.item.price * val.amount;
      }, 0)
    );
    setIsShippingDiscount(storedCart.length >= 2);
    setShippingPrice(isShippingDiscount ? 0 : 5.99);
  }, [storedCart]);
  const summaryItemClasses = " my-3 flex justify-between ";
  const summaryItemTextClasses = " font-semibold ";
  const summaryItemPriceClasses = " font-semibold";

  const checkout = () => {
    setIsCheckedOut(true);
    localStorage.removeItem("cart");
    setStoredCart([]);
    setCartItemsCount(0);
  };
  return (
    <main className="flex justify-center py-5 flex-col items-center">
      <h1 className="text-5xl uppercase font-light sm:text-3xl">Your cart</h1>
      {isCheckedOut ? (
        <div className="text-3xl uppercase font-extralight h-[60vh] flex justify-center items-center sm:text-xl sm:text-center sm:p-1">
          Thanks for selecting our shop!
        </div>
      ) : (
        <>
          <div className=" flex items-center justify-between w-4/5 my-5 sm:w-full sm:px-1 sm:text-sm">
            <button
              className=" p-2 cursor-pointer font-semibold uppercase border border-gray-900 text-gray-900 rounded sm:p-1 "
              onClick={() => router.push("/")}
            >
              Continue shopping
            </button>
            <div className="">
              <span className=" underline cursor-pointer my-2 sm:hidden">
                Shopping Bag({cartItemsCount})
              </span>
            </div>
            <button
              className=" p-2 cursor-pointer font-semibold uppercase  bg-gray-900 text-gray-200 rounded sm:p-1"
              onClick={checkout}
            >
              Checkout now
            </button>
          </div>
          <div className=" flex w-4/5 justify-between sm:w-full sm:px-1 lg:flex-col">
            <div className=" flex-[3]">
              {storedCart.map((item, id) => (
                <CartProduct singleProduct={item} key={id} />
              ))}
            </div>
            <div className=" flex-1 bg-gray-50 rounded-lg p-5 min-h-[50vh] border border-gray-300">
              <h2 className="text-2xl font-light">Order Summary</h2>
              <div className={summaryItemClasses}>
                <p className={summaryItemTextClasses}>Subtotal:</p>
                <p className={summaryItemPriceClasses}>
                  {subtotal.toFixed(2)}
                  USD
                </p>
              </div>
              <div className={summaryItemClasses}>
                <p className={summaryItemTextClasses}>Shipping Price:</p>
                <p className={summaryItemPriceClasses}>5.99USD</p>
              </div>{" "}
              {isShippingDiscount && (
                <div className={summaryItemClasses}>
                  <p className={summaryItemTextClasses}>Shipping Discount:</p>
                  <p className={summaryItemPriceClasses}>5.99USD</p>
                </div>
              )}
              <div className={summaryItemClasses}>
                <p className=" font-bold">Total:</p>
                <p className=" font-bold">
                  {(subtotal + shippingPrice).toFixed(2)}USD
                </p>
              </div>
              <button
                className=" p-1 w-full cursor-pointer font-semibold uppercase text-lg bg-gray-900 text-gray-200 rounded my-4"
                onClick={checkout}
              >
                Checkout now
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
export default Cart;
