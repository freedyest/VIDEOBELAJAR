import { useState } from "react";

function FilterSidebar() {
  const [selectBidang, setSelectBidang] = useState([]);
  const [selectHarga, setSelectHarga] = useState([]);
  const [selectDurasi, setSelectDurasi] = useState([]);
  //klo di click checkbox, ganti state
  const handleCheckboxChange = (value) => {
    setSelectBidang((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const handleCheckboxChange2 = (value) => {
    setSelectHarga((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleCheckboxChange3 = (value) => {
    setSelectDurasi((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const handleReset = () => {
    setSelectBidang([]);
    setSelectHarga([]);
    setSelectDurasi([]);
  };
  const bidangList = ["pemasaran", "desain", "pengembangan", "bisnis"];
  const hargaList = ["0-200k", "200k-400k", "400k-600k", "600k-800k"];
  const durasiList = ["kurang dari 4 jam", "4-8 jam", "lebih dari 8 jam"];
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button className="text-[#FF5C2B] font-semibold" onClick={handleReset}>
          Reset
        </button>
      </div>
      {/* part bidang studi */}
      <div>
        <p className="font-semibold mb-2 text-green-600">Bidang Studi</p>

        <div className="space-y-2">
          {bidangList.map((bidang) => (
            <label
              key={bidang}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectBidang.includes(bidang)}
                onChange={() => handleCheckboxChange(bidang)}
                className="accent-green-500"
              />
              <span>{bidang}</span>
            </label>
          ))}
        </div>
      </div>

      {/* part harga */}
      <div className="mt-4">
        <p className="font-semibold mb-2 text-green-600">Harga</p>
        <div className="space-y-2">
          {hargaList.map((harga) => (
            <label
              key={harga}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectHarga.includes(harga)}
                onChange={() => handleCheckboxChange2(harga)}
                className="accent-green-500"
              />
              <span>{harga}</span>
            </label>
          ))}
        </div>
      </div>

      {/* part durasi */}
      <div className="mt-4">
        <p className="font-semibold mb-2 text-green-600">Durasi</p>
        <div className="space-y-2">
          {durasiList.map((durasi) => (
            <label
              key={durasi}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectDurasi.includes(durasi)}
                onChange={() => handleCheckboxChange3(durasi)}
                className="accent-green-500"
              />
              <span>{durasi}</span>
            </label>
          ))}
        </div>
      </div>
      {/* debug */}

      <pre className="text-xs text-gray-500 mt-4">
        {JSON.stringify(
          { harga: selectHarga, bidang: selectBidang, durasi: selectDurasi },
          null,
          2
        )}
      </pre>
    </div>
  );
}

export default FilterSidebar;
