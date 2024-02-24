import React from "react";
import Checkbox from "./Checkbox";

function CheckboxList({ NO_OF_CHECKBOXES = 4 }: { NO_OF_CHECKBOXES?: number }) {
  const [isChecked, setIsChecked] = React.useState<boolean[]>(
    new Array(NO_OF_CHECKBOXES).fill(false) // initial value
  );
  return (
    <>
      <div className="flex gap-4 flex-col border-2 border-sky-400 p-4 text-3xl">
        <Checkbox
          id={"ALL"}
          isChecked={isChecked.every((v) => v)}
          onChange={() => {
            setIsChecked(
              new Array(NO_OF_CHECKBOXES).fill(!isChecked.every((v) => v))
            );
          }}
        >
          Select All
        </Checkbox>
        <div className="">
          {new Array(NO_OF_CHECKBOXES).fill(0).map((_, id) => {
            return (
              <Checkbox
                key={id}
                id={id + 1}
                isChecked={isChecked[id]}
                onChange={() => {
                  const newIsChecked = [...isChecked];
                  newIsChecked[id] = !newIsChecked[id];
                  setIsChecked(newIsChecked);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CheckboxList;
