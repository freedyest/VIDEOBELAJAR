import { useState } from "react";

const FilterSidebar = () => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button className="text-green-500 text-sm">Reset</button>
      </div>

      <FilterSection title="Bidang Studi">
        <Checkbox label="Pemasaran" />
        <Checkbox label="Digital & Teknologi" />
        <Checkbox label="Pengembangan Diri" />
        <Checkbox label="Bisnis Manajemen" />
      </FilterSection>

      <FilterSection title="Harga">
        <Checkbox label="Gratis" />
        <Checkbox label="Berbayar" />
      </FilterSection>

      <FilterSection title="Durasi">
        <Radio label="Kurang dari 4 Jam" />
        <Radio label="4 – 8 Jam" />
        <Radio label="Lebih dari 8 Jam" />
      </FilterSection>
    </div>
  );
};
