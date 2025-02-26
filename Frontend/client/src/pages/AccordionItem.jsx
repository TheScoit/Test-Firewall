import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AccordionItem = ({ title, desc, open, toggle }) => {
  return (
    <div className="max-w-lg mx-auto p-3 lg:p-4 border border-gray-700 rounded-lg bg-gray-900 ">
      {/* Title Section */}
      <div 
        className="flex items-center justify-between text-white cursor-pointer" 
        onClick={toggle} // Clicking this will toggle open/close
      >
        <span className="lg:text-lg font-semibold">{title}</span>
        {open ? (
          <AiOutlineMinus className="text-gray-300 size-5 transition-all duration-200" />
        ) : (
          <AiOutlinePlus className="text-gray-100 size-5 transition-all duration-200" />
        )}
      </div>

      {/* Description Section - Expands when open */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300 text-sm p-3 bg-gray-800 rounded-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
