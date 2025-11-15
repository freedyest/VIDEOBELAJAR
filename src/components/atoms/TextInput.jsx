export default function TextInput({
  label,
  type = "text",
  value,
  onChange,
  required,
}) {
  return (
    <div className="mb-5 text-start">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
}
