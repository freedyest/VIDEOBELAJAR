import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../slices/courseSlices";

export default function SearchCourse() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.courses.search);

  return (
    <div className="flex items-center gap-2 my-6 ">
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Cari Kelas"
        className="border w-4/5 border-gray-300 bg-white shadow-lg p-2 rounded-md  max-w-xs focus:outline-none focus:ring focus:ring-orange-300"
      />
    </div>
  );
}
