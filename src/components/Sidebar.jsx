import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className=" hidden lg:block w-[550px] border-r-2 px-8 self-stretch ">
        <button>
          <i className="fa-solid fa-arrow-left text-[#232424] pt-5"></i>
        </button>

        <ul>
          <li className="w-full flex item-center justify-between my-5 hover:bg-gray-200">
            <p>
              {" "}
              <i className="fa-solid fa-border-all text-[#232424] mr-5 text-xl"></i>{" "}
              My Dashboard
            </p>

            <p>
              {" "}
              <i className="fa-solid fa-greater-than text-[#474848] text-sm"></i>
            </p>
          </li>

          <li className="flex item-center justify-between my-5 hover:bg-gray-200">
            <p>
              {" "}
              <i class="fa-solid fa-link text-[#232424] mr-5 text-xl"></i> TOTM
              links
            </p>

            <p>
              {" "}
              <i className="fa-solid fa-greater-than text-[#474848] text-sm"></i>
            </p>
          </li>

          <li className="flex item-center justify-between my-5 hover:bg-gray-200">
            <p>
              {" "}
              <i class="fa-regular fa-file-lines text-[#232424] mr-5 text-xl"></i>{" "}
              Daily Summary
            </p>

            <p>
              {" "}
              <i className="fa-solid fa-greater-than text-[#474848] text-sm"></i>
            </p>
          </li>

          <li className="flex item-center justify-between my-5 hover:bg-gray-200">
            <p>
              <i class="fa-solid fa-building-columns text-[#232424] mr-5 text-xl"></i>{" "}
              Bank Details
            </p>

            <p>
              {" "}
              <i className="fa-solid fa-greater-than text-[#474848] text-sm"></i>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
