import React, { useState, useEffect } from "react";
import "./Modal.css";
import axios from "axios";
import FormValidation from "./FormValidaiton";

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [details, setDetails] = useState({
    Referrer_Name: "",
    Referrer_Email: "",
    Referrer_Phone: "",
    Referre_Name: "",
    Referre_Email: "",
    Referre_Phone: "",
  });
  function handleSubmit(e) {
    // console.log(details);
    e.preventDefault();
    setError(FormValidation(details));
    setIsSubmit(true);
  }

  async function runit() {
    try {
      await axios.post("http://localhost:3001/", { details });
    } catch {
      console.log(details);
    }
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      runit();
    }
  }, [error]);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <button
        className="rightSide botton"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Refer Now
      </button>

      {showModal ? (
        <>
          <div
            className=" items-center flex overflow-x-hidden rounded-lg overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-8"
            style={{
              maxHeight: "585px",
            }}
          >
            <div
              className="relative rounded-lg mb-3 mx-auto"
              style={{
                minWidth: "550px",
                width: "auto",
                height: "auto",
              }}
            >
              {/*content*/}
              <div
                className="border w-auto border-blue-500 rounded-lg relative  bg-white h-auto focus:outline-none"
                style={{
                  maxHeight: "585px",
                }}
              >
                {/*header*/}
                <h3
                  className=" font-semibold rounded-lg"
                  style={{
                    borderBottom: "5px solid grey",
                    fontSize: "45px",
                    textAlign: "left",
                    color: "rgb(26, 115, 232)",
                  }}
                >
                  Referral Form
                </h3>
                {/*body*/}
                <div>
                  <form
                    action="POST"
                    style={{
                      maxHeight: "calc(100vh-550px)",
                      height: "auto",
                    }}
                    className=" h-auto shadow-md rounded-lg w-full  overflow-y-auto max-h-[80vh]"
                    onSubmit={handleSubmit}
                  >
                    <p
                      style={{
                        color: "rgb(59 130 246)",
                        fontSize: "35px",
                        marginBottom: "10px",
                      }}
                    >
                      Referrer Details
                    </p>
                    {/* Referrer Name */}
                    <div className="flex mb-1 ">
                      <label
                        className="mt-2 w-40 block text-blue-500 text-lg font-bold mx-2"
                        htmlFor="Referrer_Name"
                      >
                        Your Name
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        minLength={3}
                        maxLength={32}
                        name="Referrer_Name"
                        autoComplete="off"
                        placeholder="Enter Name"
                        className="pl-4  text-lg h-10 shadow appearance-none  rounded w-full text-black leading-tight  hover:border-2 hover:border-blue-500 "
                        id="Referrer_Name"
                        type="text"
                      />
                    </div>
                    <div className="err">{error.Referrer_Name}</div>
                    {/* Referrer Email */}
                    <div className="flex mb-1 ">
                      <label
                        className="mt-2 w-40 block text-blue-500 text-lg font-bold mx-2"
                        htmlFor="Referrer_Email"
                      >
                        Your Email
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        name="Referrer_Email"
                        minLength={5}
                        maxLength={40}
                        autoComplete="off"
                        className="pl-4  text-lg h-10 shadow appearance-none  rounded w-full text-black leading-tight focus:outline-none focus:shadow-outline hover:border-2 hover:border-blue-500 "
                        id="Referrer_Email"
                        placeholder="Enter Email Address"
                        type="email"
                      />
                    </div>
                    <div className="err">{error.Referrer_Email}</div>{" "}
                    {/* Referrer Phone number */}
                    <div className="flex mb-1 ">
                      <label
                        className="mt-2 w-40 block text-blue-500 text-lg font-bold mx-2"
                        htmlFor="Referrer_Phone"
                      >
                        Your Phone no
                      </label>
                      <input
                        name="Referrer_Phone"
                        autoComplete="off"
                        placeholder="Enter Phone number "
                        minLength={10}
                        maxLength={10}
                        pattern="[0-9]{10}"
                        className="pl-4  text-lg h-10 shadow appearance-none  rounded w-full text-black leading-tight focus:outline-none focus:shadow-outline hover:border-2 hover:border-blue-500 "
                        id="Referrer_Phone"
                        type="tel"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="err">{error.Referrer_Phone}</div>
                    <p
                      style={{
                        color: "rgb(59 130 246)",
                        fontSize: "35px",
                        marginBottom: "10px",
                      }}
                    >
                      Referre Details
                    </p>
                    {/* Referre Name */}
                    <div className="flex mb-1 ">
                      <label
                        className="mt-2 w-40 block text-blue-500 text-lg font-bold mx-2"
                        htmlFor="Referre_Name"
                      >
                        Friend Name
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        name="Referre_Name"
                        minLength={3}
                        maxLength={40}
                        autoComplete="off"
                        placeholder="Enter Name"
                        className="pl-4  text-lg h-10 shadow appearance-none  rounded w-full text-black leading-tight focus:outline-none focus:shadow-outline hover:border-2 hover:border-blue-500 "
                        id="Referre_Name"
                        type="text"
                      />
                    </div>
                    <div className="err">{error.Referre_Name}</div>
                    {/* Referre Email */}
                    <div className="flex mb-1  ">
                      <label
                        className="mt-2 w-40 block text-blue-500 text-lg font-bold mx-2"
                        htmlFor="Referre_Email"
                      >
                        Friend Email
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        name="Referre_Email"
                        minLength={5}
                        maxLength={40}
                        autoComplete="off"
                        className="pl-4  text-lg h-10 shadow appearance-none  rounded w-full text-black leading-tight focus:outline-none focus:shadow-outline hover:border-2 hover:border-blue-500 "
                        id="Referre_Email"
                        placeholder="Enter Email Address"
                        type="email"
                      />
                    </div>
                    <div className="err">{error.Referre_Email}</div>
                    {/* Referre Phone number */}
                    <div className="flex ">
                      <label
                        className="mt-2 w-40 block text-blue-500 text-lg font-bold mx-2"
                        htmlFor="Referre_Phone"
                      >
                        Friend Phone no
                      </label>
                      <input
                        type="tels"
                        autoComplete="off"
                        name="Referre_Phone"
                        minLength={10}
                        maxLength={10}
                        pattern="[\d]{10}"
                        placeholder="Enter Phone number "
                        className="pl-4  text-lg h-10 shadow appearance-none  rounded w-full text-black leading-tight focus:outline-none focus:shadow-outline hover:border-2 hover:border-blue-500 "
                        id="Referre_Phone"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="err">{error.Referrer_Phone}</div>
                    <button
                      className="botton1 mb-4 mt-2 mx-10"
                      type="button"
                      onClick={() => setShowModal(false)}
                      style={{
                        height: "45px",
                        width: "180px",
                      }}
                    >
                      Close
                    </button>
                    <button
                      className="botton1 mb-4 mt-2 mx-10"
                      type="submit"
                      // onClick={handleSubmit}
                      style={{
                        height: "45px",
                        width: "180px",
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
