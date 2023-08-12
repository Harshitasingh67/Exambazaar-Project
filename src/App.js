import "./App.css";

function App() {
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
      {/* main section starts from here */}

      <main className="flex justify-between items-center  gap-8 px-7 lg:px-0">
        {/* Dashboard */}
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
                <i class="fa-solid fa-link text-[#232424] mr-5 text-xl"></i>{" "}
                TOTM links
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

        {/* form-content */}
        <div className=" lg:mr-24 pb-7 lg:pb-10 ">
          <h1 className="text-4xl font-semibold pt-6 lg:pt-10 pb-5 text-[#262626]">
            Update Bank Details
          </h1>
          <p className=" pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <form className="lg:grid  lg:grid-cols-2 border-2 p-5 shadow-md">
            <label className="uppercase mb-5  " htmlFor="name">
              account holder name
            </label>
            <input
              className="border-2 mb-5 mt-3 lg:mt-0  py-1 px-3 w-full lg:w-auto"
              type="text"
              name="name"
              id="name"
              placeholder="Account Holder Name"
            />

            <label className="uppercase mb-5" htmlFor="account">
              account number
            </label>
            <input
              className="border-2  mb-5 mt-3 lg:mt-0 py-1 px-3 w-full lg:w-auto"
              type="text"
              name="name"
              id="account"
              placeholder="Account Number"
            />

            <label className="uppercase mb-5" htmlFor="ifsc">
              ifsc code
            </label>
            <input
              className="border-2  mb-5 mt-3 lg:mt-0 py-1 px-3 w-full lg:w-auto"
              type="text"
              name="name"
              id="ifsc"
              placeholder="Ifsc Code"
            />

            <label className="uppercase mb-5" htmlFor="bank">
              bank name
            </label>
            <input
              className="border-2  mb-5 mt-3 lg:mt-0 py-1 px-3 w-full lg:w-auto"
              type="text"
              name="name"
              id="bank"
              placeholder="Bank Name"
            />

            <label className="uppercase mb-5" htmlFor="city">
              bank city
            </label>
            <input
              className="border-2  mb-5 mt-3 lg:mt-0 py-1 px-3 w-full lg:w-auto"
              type="text"
              name="name"
              id="city"
              placeholder="Bank City"
            />

            <label className="uppercase mb-5" htmlFor="branch">
              branch name
            </label>
            <input
              className="border-2  mb-5 mt-3 lg:mt-0 py-1 px-3 w-full lg:w-auto"
              type="text"
              name="name"
              id="branch"
              placeholder="Branch Name"
            />

            <label className="uppercase mb-5" htmlFor="relation">
              relation with account holder
            </label>
            <input
              className="border-2  mb-5 mt-3 lg:mt-0 py-1 px-3 w-full lg:w-auto"
              type="text"
              name="name"
              id="relation"
              placeholder="Relation With Account Holder"
            />

            <label className="uppercase mb-5 " htmlFor="consent">
              consent
            </label>
            <div className="border-2  mb-5  mt-3 lg:mt-0 flex item-start pt-5 pb-10 px-5 ">
              <input
                className="self-start mb-5 mt-3 lg:mt-0"
                type="checkbox"
                id="consent"
              />
              <p className="self-start pl-2 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <button className="border-2 border-green-600 bg-green-600 col-span-2 w-fit justify-self-end px-6 py-2 text-white">
              Save
            </button>
          </form>

          <p className=" uppercase border-b-2 text-gray-500 py-5 text-sm text-center">
            the above details are final and will be used for payment. if any of
            these details are wrong ,please contact your manager
            immediately!also email the same to accounts@exambazaar.com!
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
