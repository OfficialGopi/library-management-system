export default function SearchBar({ placeholder, onSearch }) {
  return (
    <input
      type="text"
      className="p-2 border rounded-sm mb-2"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
