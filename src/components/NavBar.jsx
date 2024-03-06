import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const NavBar = () => {
  return (
    <div className=" border flex flex-row justify-between p-5 shadow-md">
      <h1 className="font-semibold text-4xl">bboard</h1>
      <SearchRoundedIcon className="text-4xl mt-2" />
    </div>
  );
};

export default NavBar;
