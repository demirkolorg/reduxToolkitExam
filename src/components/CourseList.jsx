import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { sepetiTemizle } from "../store/cartSlice";

const CourseList = () => {
  const dispatch = useDispatch();
  const clearHandle = () => {
    dispatch(sepetiTemizle());
  };
  const { cartItems, sepetToplamTutar, sepetKursSayisi, sepetUrunSayisi } =
    useSelector((store) => store.cart);
  return (
    <>
      <div className=" w-screen">
        <div className=" bg-white px-10 p-10">
          <div className="flex justify-between items-center border-b pb-8">
            <h1 className="font-semibold text-2xl">
              Sepetinizde {sepetKursSayisi} kurs ({sepetUrunSayisi} ürün)
              bulunuyor.
            </h1>

            <h2>
              Toplam Tutar:{" "}
              <span className="text-emerald-800"> {sepetToplamTutar} ₺</span>
            </h2>
            <div>
              <button className="mr-5 bg-indigo-500 font-semibold hover:bg-indigo-600 p-3 text-sm text-white">
                Ödemeye Geç
              </button>
              <button
                disabled={sepetKursSayisi < 1}
                onClick={clearHandle}
                className="disabled:bg-gray-500 bg-red-500 font-semibold hover:bg-red-600 p-3 text-sm text-white"
              >
                Sepeti Temizle
              </button>
            </div>
          </div>
          <div className="flex mt-10 mb-5 px-4">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/6">
              Kurs Detayı
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">
              Adet
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
              Fiyat
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
              Toplam
            </h3>
          </div>

          {cartItems.map((item, key) => {
            return <CourseItem key={key} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};
export default CourseList;
