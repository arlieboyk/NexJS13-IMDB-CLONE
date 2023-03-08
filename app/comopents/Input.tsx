import { handleClientScriptLoad } from "next/script";
import React, { useState } from "react";

type InputProp = {
  handleSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProp) {
  return (
    <div className="space-x-3">
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        className="text-black px-4 py-1 border "
      />
      <button
        onClick={props.handleSubmit}
        className="bg-indigo-400 text-white font-seimbold px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
