import { RiArrowDropDownFill } from "react-icons/ri";
import React, { useState } from "react";

function SelectLanguage() {
  const [isEsClicked,setIsEsClicked] = useState(false)
  const [isEngClicked,setisEngClicked] = useState<String>()
  const [isMandClicked,setisMandClicked] = useState<String>()
  const [isFranClicked,setisFranClicked] = useState<String>()
  const [isItalClicked,setisItalClicked] = useState<String>()
  const [langSelected,setLangSelected] = useState('')
  
  const [langDropdown, setLangDropdown] = useState(false);

  const selectLangToggle = () => {
    setLangDropdown(!langDropdown);
  };


  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  // setIsEsClicked(event.target.value);
  // alert(isEsClicked)
  };


  return (
    <div className="relative z-20">
    <p onClick={selectLangToggle} className="flex cursor-pointer w-12 hover:bg-[#1f1f1f] px-2 py-2 rounded-md">
      <p className="inline-block ">EN </p>
      <RiArrowDropDownFill className="text-2xl   " />
    </p>

    {/* selec language dropdown */}

    <div className={`absolute ${langDropdown ?"w-52 opacity-100":'opacity-0' } transition-all ease-in-out  right-0 top-8 bg-[#000000de]`}>
    {langDropdown &&
    <>
      <h2 className="text-center text-slate-500">Selected: {langSelected}</h2>
    <p className="  hover:bg-slate-600 px-4 py-2">Full Supported</p>
    <p className="langDropdown-text border-y border-[#6d6d6d]"> <input value='English' type="radio"  name="lang" onChange={e=>setLangSelected(e.target.value)}  /> English </p>
    <p className="border-b border-[#6d6d6d] hover:bg-slate-600 px-4 py-2">Partially Supported</p>
    <p className="langDropdown-text"> <input type="radio" value='espaniol' name='lang' onChange={e=>setLangSelected(e.target.value)}   className="w-4 h-4"/> Espaniol </p>
    <p className="langDropdown-text"> <input type="radio" value='mandarin' name='lang' onChange={e=>setLangSelected(e.target.value)}  className="w-4 h-4" /> Mandarin </p>
    <p className="langDropdown-text"> <input type="radio" value='Francias' name='lang' onChange={e=>setLangSelected(e.target.value)}  /> Francias </p>
    <p className="langDropdown-text"> <input type="radio" value='Italiano' name='lang' onChange={e=>setLangSelected(e.target.value)}  /> Italiano </p>
    </>
  }
    </div>
    </div>
  );
}

export default SelectLanguage;
