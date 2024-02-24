import React from "react";

function Checkbox({
  id,
  children,
  isChecked = false,
  onChange: onChange,
}: {
  id: number | string;
  children?: React.ReactNode;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name="checkbox"
        id={`check-${id}`}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={`check-${id}`}>
        {children ? children : `Checkbox ${id}`}
      </label>
    </div>
  );
}

export default Checkbox;
