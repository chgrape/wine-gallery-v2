import React, { useState } from "react";

const Dropdown = ({name, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button
              className="w-72 flex p-2 border-2 rounded-lg text-gray-400 my-2"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            >{name}</button>
            <div
              className={
                !isOpen
                  ? "hidden"
                  : "bg-white z-10 absolute rounded-lg w-72 border-2 ring-2 ring-white ring-opacity-10 text-gray-400"
              }
            >
              {children.map((child) => React.cloneElement(child, {key:child.props.name,setIsOpen, ...child.props}))}
            </div>
        </>
    );
}

export default Dropdown;