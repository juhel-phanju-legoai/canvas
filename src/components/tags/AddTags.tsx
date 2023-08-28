import React from "react";

interface IProps {
  addTags: (tag: string) => void;
}

export default function AddTags(props: IProps) {
  const [value, setValue] = React.useState("");
  const [inputVisibility, setInputVisibility] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAddButtonClick = () => {
    setInputVisibility(true);
    // inputRef.current?.focus(); // not working don't know why figure out later
  };

  React.useEffect(()=> {
    if (inputVisibility) {
    inputRef.current?.focus();
    }
  }, [inputVisibility])

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const tag = e.target.value;
    if (tag) {
      props.addTags(tag);
    }
    setInputVisibility(false);
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (inputRef.current) {
      inputRef.current.style.width = `${value.length * 4 + 30}px`;
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={value}
        className={`p-2 m-1 text-xs transition duration-500 ease-in-out rounded w-30 bg-skin-dark focus:ring-transparent text-skin-base placeholder-skin-secondary focus:outline-none focus:border-skin-primary form-input ${
          inputVisibility || "hidden"
        }`}
        style={{ width: "30px" }}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="button" className="px-2" onClick={handleAddButtonClick}>
        <p>+</p>
      </button>
    </>
  );
}
