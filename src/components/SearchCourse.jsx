import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../slices/courseSlices";

export default function SearchCourse() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.courses.search);

  return (
    <div className="flex items-center gap-2 my-6">
      <label className="font-semibold text-lg">Cari:</label>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Cari nama kursus..."
        className="border border-gray-300 p-2 rounded-md w-full max-w-xs focus:outline-none focus:ring focus:ring-orange-300"
      />
    </div>
  );
}
