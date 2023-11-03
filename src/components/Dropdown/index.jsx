import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { Collapse } from "react-collapse";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-white rounded-md shadow">
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
        <h5 className="text-sm font-medium leading-5 text-gray-900">
          {title}
        </h5>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center px-2 py-2 text-gray-500 hover:text-gray-700"
        >
          {!isOpen && <PlusIcon className="w-5 h-5" />}
          {isOpen && <MinusIcon className="w-5 h-5" />}
        </button>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="px-4 py-5 text-gray-700">{children}</div>
      </Collapse>
    </div>
  );
};

export default Dropdown;