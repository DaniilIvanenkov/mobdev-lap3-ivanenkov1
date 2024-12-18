import React from "react";
interface IInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ value, setValue }: IInput) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return <input type={value} onChange={handleChange} />;
};

export default Input;
