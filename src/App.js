import "./App.css";

function App() {
  return (
    <>
      {/* navbar starts here-- */}
      <nav className="pl-6 pt-8 pb-5 border-2 border-b-2   lg:flex  justify-between items-center pr-6">
        <i className="fa-solid fa-bars text-[#4c4c4d] lg:hidden"></i>

        <ul className=" hidden lg:flex items-center gap-28 font-bold">
          <li>Logo</li>
          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Offers</li>
          <li>About Us</li>
        </ul>

        <div className="  lg:flex items-center gap-20 text-xl">
          <i className="fa-solid fa-magnifying-glass text-[#474748]"></i>
          <i className="fa-regular fa-bell text-[#4c4c4d]"></i>
          <i className="fa-regular fa-user text-[#515152]"></i>
        </div>
      </nav>
      {/* main section starts from here */}

      <main className="flex justify-between items-center  gap-8">
        {/* Dashboard */}
        <div className="w-[450px] border-r-2 px-8 self-start">
          <button>
            <i className="fa-solid fa-arrow-left text-[#232424]"></i>
          </button>

          <ul>
            <li className="flex item-center justify-between py-5">
              <p>
                {" "}
                <i className="fa-solid fa-border-all text-[#232424] mr-5 text-xl"></i>{" "}
                My Dashboard
              </p>

              <i className="fa-solid fa-greater-than text-[#232424]"></i>
            </li>

            <li className="flex item-center justify-between py-5">
              <p>
                {" "}
                <i class="fa-solid fa-link text-[#232424] mr-5 text-xl"></i>{" "}
                TOTM links
              </p>

              <i className="fa-solid fa-greater-than text-[#232424]"></i>
            </li>

            <li className="flex item-center justify-between py-5">
              <p>
                {" "}
                <i class="fa-regular fa-file-lines text-[#232424] mr-5 text-xl"></i>{" "}
                Daily Summary
              </p>

              <i className="fa-solid fa-greater-than text-[#232424]"></i>
            </li>

            <li className="flex item-center justify-between py-5">
              <p>
                <i class="fa-solid fa-building-columns text-[#232424] mr-5 text-xl"></i>{" "}
                Bank Details
              </p>

              <i className="fa-solid fa-greater-than text-[#232424]"></i>
            </li>
          </ul>
        </div>

        {/* form-content */}
        <div>
          <h1 className="text-4xl font-semibold pt-10 pb-5">
            Update Bank Details
          </h1>
          <p className=" pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <form className="grid grid-cols-2 border-2 p-5">
            <label className="uppercase" htmlFor="name">
              account holder name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Account Holder Name"
            />

            <label className="uppercase" htmlFor="account">
              account number
            </label>
            <input
              type="text"
              name="name"
              id="account"
              placeholder="Account Number"
            />

            <label className="uppercase" htmlFor="ifsc">
              ifsc code
            </label>
            <input type="text" name="name" id="ifsc" placeholder="Ifsc Code" />

            <label className="uppercase" htmlFor="bank">
              bank name
            </label>
            <input type="text" name="name" id="bank" placeholder="Bank Name" />

            <label className="uppercase" htmlFor="city">
              bank city
            </label>
            <input type="text" name="name" id="city" placeholder="Bank City" />

            <label className="uppercase" htmlFor="branch">
              branch name
            </label>
            <input
              type="text"
              name="name"
              id="branch"
              placeholder="Branch Name"
            />

            <label className="uppercase" htmlFor="relation">
              relation with account holder
            </label>
            <input
              type="text"
              name="name"
              id="relation"
              placeholder="Relation With Account Holder"
            />

            <label className="uppercase" htmlFor="consent">
              consent
            </label>
            <div>
              <input type="checkbox" id="consent" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
