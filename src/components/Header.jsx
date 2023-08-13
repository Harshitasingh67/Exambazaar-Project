import React from "react";

const Header = () => {
  return (
    <>
      {/* navbar starts here-- */}
      <nav className="pl-6 pt-8 pb-5 border-2 border-b-2   lg:flex  justify-between items-center pr-6">
        <i className="fa-solid fa-bars text-[#4c4c4d] lg:hidden"></i>

        <ul className=" hidden lg:flex items-center gap-28 font-bold text-[#262626]">
          <li>Logo</li>
          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Offers</li>
          <li>About Us</li>
        </ul>

        <div className=" hidden lg:flex items-center gap-20 text-xl">
          <i className="fa-solid fa-magnifying-glass text-[#474748]"></i>
          <i className="fa-regular fa-bell text-[#4c4c4d]"></i>
          <i className="fa-regular fa-user text-[#515152]"></i>
        </div>
      </nav>
    </>
  );
};

export default Header;
