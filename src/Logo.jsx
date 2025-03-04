import { FaCode } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center space-x-2 text-white text-3xl font-bold">
      <FaCode className="text-blue-400" />
      <span>EH</span>
    </div>
  );
}

export default Logo;