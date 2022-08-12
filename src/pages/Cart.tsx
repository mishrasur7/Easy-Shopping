import { useAppDispatch, useAppSelector } from "../redux/hooks/appHooks"
import store from "../redux/store"


function Cart() {
  const cart = useAppSelector((state) => state.cartReducer);
  return (
    <div className='cart'>

    </div>
  )
}

export default Cart