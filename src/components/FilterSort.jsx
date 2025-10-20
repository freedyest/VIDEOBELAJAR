import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterSort } from "../slices/courseSlices";

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.courses.sort);

  const handleChange = (e) => {
    dispatch(setFilterSort(e.target.value));
  };

  return (
    <div className="flex items-center gap-2 my-4 ">
      <select
        value={sort}
        onChange={handleChange}
        className="border rounded-lg px-3 py-2 border-gray-300 text-gray-800 bg-white shadow-md"
      >
        <option value="">Urutkan</option>
        <option value="harga_asc">Murah ke Mahal</option>
        <option value="harga_desc">Mahal ke Murah</option>
        <option value="nama_asc">A-Z</option>
        <option value="nama_desc">Z-A</option>
      </select>
    </div>
  );
}
