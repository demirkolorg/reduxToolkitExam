import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { removeItem, eksiItem, artiItem, inputItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CourseItem = ({ id, title, instructor, level, price, img, quantity }) => {
  const dispatch = useDispatch();

  const removeHandle = () => {
    dispatch(removeItem(id));
  };

  const inputHandle = (e) => {
    dispatch(inputItem({ id, value: e.target.value }));
  };
  const eksiHandle = () => {
    dispatch(eksiItem(id));
  };
  const artiHandle = () => {
    dispatch(artiItem(id));
  };
  return (
    <>
      <div className="flex items-center hover:bg-gray-100 p-4">
        <div className="flex w-3/6">
          <div className="w-48">
            <img className="" src={img} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-xl">{title}</span>
            <span className="text-gray-500 text-xs">{level}</span>
            <span className="text-gray-500 text-xs">{instructor}</span>
            <a
              onClick={removeHandle}
              className="cursor-pointer font-semibold hover:text-red-700 text-red-500 text-xs"
            >
              Sepetten Çıkar
            </a>
          </div>
        </div>

        <div className="flex justify-center w-1/6 items-center">
          <button
            className="border m-0 p-2 hover:bg-red-200"
            onClick={eksiHandle}
          >
            <AiOutlineMinus />
          </button>

          <input
            className="mx-2 border text-center w-10 p-1 m-0"
            type="text"
            value={quantity}
            onChange={inputHandle}
          />

          <button
            className="p-2 border m-0 hover:bg-green-200"
            onClick={artiHandle}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <span className="text-center w-1/6 font-semibold text-sm">
          {price} ₺
        </span>
        <span className="text-center w-1/6 font-semibold text-sm">
          {quantity * price} ₺
        </span>
      </div>
    </>
  );
};
export default CourseItem;
