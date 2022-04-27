type Props = {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
};

function FilterItemRow({ label, isSelected, onSelect }: Props) {
  return (
    <div className="flex items-center" onClick={onSelect}>
      <label className="h-full w-full cursor-pointer">{label}</label>
      <input
        type="radio"
        checked={isSelected}
        value={label}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
    </div>
  );
}
export default FilterItemRow;
