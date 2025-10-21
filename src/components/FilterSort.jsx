import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterSort } from "../slices/courseSlices";
import { ChevronDown } from "lucide-react";

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.courses.sort);

  const handleChange = (e) => {
    dispatch(setFilterSort(e.target.value));
  };

  return (
    <div className="relative inline-block my-4">
      <select
        value={sort}
        onChange={handleChange}
        className="appearance-none border rounded-lg px-3 py-2 pr-8 border-gray-300 text-gray-800 bg-white shadow-md cursor-pointer"
      >
        <option value="">Urutkan</option>
        <option value="harga_asc">Murah ke Mahal</option>
        <option value="harga_desc">Mahal ke Murah</option>
        <option value="nama_asc">A-Z</option>
        <option value="nama_desc">Z-A</option>
      </select>

      <ChevronDown
        size={16}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
      />
    </div>
  );
}
