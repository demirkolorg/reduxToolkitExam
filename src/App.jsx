import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { toplamTutar } from "./store/cartSlice.jsx";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toplamTutar());
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <CourseList />
    </>
  );
}

export default App;
