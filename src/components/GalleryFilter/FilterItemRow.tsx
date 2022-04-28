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
        type="checkbox"
        checked={isSelected}
        onChange={() => {}} // noop
        value={label}
        className="h-4 w-4 accent-black"
      />
    </div>
  );
}
export default FilterItemRow;
