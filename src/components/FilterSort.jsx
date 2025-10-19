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
    <div className="flex items-center gap-2 my-4">
      <label className="font-medium text-gray-700">Urutkan:</label>
      <select
        value={sort}
        onChange={handleChange}
        className="border rounded-lg px-3 py-2 text-gray-800"
      >
        <option value="">Default</option>
        <option value="harga_asc">Harga: Murah ke Mahal</option>
        <option value="harga_desc">Harga: Mahal ke Murah</option>
        <option value="nama_asc">Nama: A-Z</option>
        <option value="nama_desc">Nama: Z-A</option>
      </select>
    </div>
  );
}
