import { useEffect, useState } from "react";

function FilterSidebar({ onFilterChange }) {
  const [isOpenBidang, setIsOpenBidang] = useState(false);
  const [isOpenHarga, setIsOpenHarga] = useState(false);
  const [IsOpenDurasi, setIsOpenDurasi] = useState(false);
  const [selectBidang, setSelectBidang] = useState([]);
  const [selectHarga, setSelectHarga] = useState([]);
  const [selectDurasi, setSelectDurasi] = useState([]);

  useEffect(() => {
    const data = {
      bidang: selectBidang,
      harga: selectHarga,
      durasi: selectDurasi,
    };
    onFilterChange(data);
  }, [selectBidang, selectHarga, selectDurasi]);

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
      const exist = prev.some(
        (item) => item.min === value.min && item.max === value.max
      );
      if (exist) {
        return prev.filter(
          (item) => !(item.min === value.min && item.max === value.max)
        );
      } else {
        return [...prev, value];
      }
    });
  };

  const handleCheckboxChange3 = (value) => {
    setSelectDurasi((prev) => {
      const exist = prev.some(
        (item) => item.min === value.min && item.max === value.max
      );
      if (exist) {
        return prev.filter(
          (item) => !(item.min === value.min && item.max === value.max)
        );
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
  const hargaList = [
    { label: "0-200k", value: { min: 0, max: 200000 } },
    { label: "200k-400k", value: { min: 200000, max: 400000 } },
    { label: "400k-600k", value: { min: 400000, max: 600000 } },
    { label: "600k-800k", value: { min: 600000, max: 800000 } },
  ];

  const durasiList = [
    { label: "kurang dari 4 jam", value: { min: 0, max: 4 } },
    { label: "4-8 jam", value: { min: 4, max: 8 } },
    { label: "lebih dari 8 jam", value: { min: 8 } },
  ];
  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button className="text-[#FF5C2B] font-semibold" onClick={handleReset}>
          Reset
        </button>
      </div>
      {/* part bidang studi */}
      <div className="border-2 border-slate-200 rounded-lg">
        <button
          onClick={() => setIsOpenBidang((prev) => !prev)}
          className="w-full flex justify-between items-center py-2 px-3 bg-white text-green-600  font-semibold rounded-lg mb-2"
        >
          <span>Bidang Studi</span>
          <span>{isOpenBidang ? "▲" : "▼"}</span>
        </button>
        {isOpenBidang && (
          <div className="space-y-2 px-3 pb-4">
            {bidangList.map((bidang) => (
              <label
                key={bidang}
                className="flex items-center space-x-2 cursor-pointer "
              >
                <input
                  type="checkbox"
                  checked={selectBidang.includes(bidang)}
                  onChange={() => handleCheckboxChange(bidang)}
                  className="accent-green-500 outline-green-600"
                />
                <span>{bidang}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* part harga */}
      <div className="mt-4 border-2 border-slate-200 rounded-lg">
        <button
          onClick={() => setIsOpenHarga((prev) => !prev)}
          className="flex w-full text-green-600 bg-white justify-between items-center py-2 px-3 font-semibold rounded-lg"
        >
          <span>Harga</span>
          <span>{isOpenHarga ? "▲" : "▼"}</span>
        </button>
        {isOpenHarga && (
          <div className="space-y-2 px-3">
            {hargaList.map((harga) => (
              <label
                key={harga.label}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectHarga.some(
                    (h) =>
                      h.min === harga.value.min && h.max === harga.value.max
                  )}
                  onChange={() => handleCheckboxChange2(harga.value)}
                  className="accent-green-500"
                />
                <span>{harga.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* part durasi */}
      <div className="mt-4 border-2 border-slate-200 rounded-lg">
        <button
          onClick={() => setIsOpenDurasi((prev) => !prev)}
          className="w-full items-center justify-between flex text-green-600 bg-white py-2 px-3 font-semibold rounded-lg"
        >
          <span>Durasi</span>
          <span>{IsOpenDurasi ? "▲" : "▼"}</span>
        </button>
        {IsOpenDurasi && (
          <div className="space-y-2 px-3">
            {durasiList.map((durasi) => (
              <label
                key={durasi.label}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectDurasi.some(
                    (h) =>
                      h.min === durasi.value.min && h.max === durasi.value.max
                  )}
                  onChange={() => handleCheckboxChange3(durasi.value)}
                  className="accent-green-500"
                />
                <span>{durasi.label}</span>
              </label>
            ))}
          </div>
        )}
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
