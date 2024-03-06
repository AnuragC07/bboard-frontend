import React from "react";
import { Link } from "react-router-dom";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex bg-white">
      <Link
        to={destination}
        className=" border border-slate-100 text-black px-2 py-1 rounded-full shadow-md w-10 h-10"
      >
        <NavigateBeforeRoundedIcon />
      </Link>
    </div>
  );
};

export default BackButton;
