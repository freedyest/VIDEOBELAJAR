import { useState } from "react";
import eyesOff from "../../assets/eyesoff.png";
import eyesOn from "../../assets/eyeson.png";

export default function PasswordInput({ label, value, onChange, required }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-5 text-start">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      <div className="flex border border-gray-300 rounded-md shadow-sm">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          required={required}
          className="flex-1 px-3 py-2 focus:outline-none rounded-l-md"
        />

        <button type="button" onClick={() => setShow(!show)} className="px-3">
          <img src={show ? eyesOn : eyesOff} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
