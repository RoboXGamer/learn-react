import CheckboxList from "../components/CheckboxList";

function MultiCheckbox() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-3xl text-teal-400 font-bold">Multi Checkbox</h1>
        <CheckboxList NO_OF_CHECKBOXES={4} />
      </div>
    </>
  );
}

export default MultiCheckbox;
