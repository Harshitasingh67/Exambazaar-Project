import React from "react";

const BankDetails = () => {
  return (
    <>
      <div className=" lg:mr-24 pb-7 lg:pb-10 ">
        <h1 className="text-4xl font-semibold pt-6 lg:pt-10 pb-5 text-[#262626]">
          Update Bank Details
        </h1>
        <p className=" pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
          these details are wrong ,please contact your manager immediately!also
          email the same to accounts@exambazaar.com!
        </p>
      </div>
    </>
  );
};

export default BankDetails;
