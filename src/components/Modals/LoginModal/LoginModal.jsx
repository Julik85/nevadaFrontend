"use client";
import React from "react";

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    businessDirection: document.getElementById("Select Your Business").value,
    fullName: document.getElementById("fullName").value,
    companyName: document.getElementById("companyName").value,
    email: document.getElementById("email").value,
    website: document.getElementById("website").value,
    comments: document.getElementById("comments").value,
  };

  try {
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default function LoginModal() {
  return (
    <div>
      <h2 className="text-center text-[24px] font-semibold mt-6 text-white">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label
            htmlFor="Business direction"
            className="block mt-6 font-medium ml-2  text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-4 border rounded"
            required
            placeholder="Enter your e-mail"
          />
           <label
            htmlFor="Business direction"
            className="block mt-6 font-medium ml-2  text-white"
          >
            Password
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-4 border rounded"
            required
            placeholder="Enter your password"
          />
          <div></div>
          <div>
            <input type="checkbox" name="checkbox" value="remember-me"/>
            <label 
            // for="checkbox"
            ><span></span>Remember Me</label>
          </div>
          <div className="flex-col justify-center">
          <button
            type="submit"
            className="bg-captionBlue text-white px-4 py-2 rounded hover:bg-captionBlueHover ml-[auto] mr-[auto] font-bold text-[16px] w-[179px] h-[48px]"
          >
            Login
          </button>
          <p className="text-white">Don’t have account? <span className="text-captionBlue">Create new account</span></p>
        </div>
        </div>
      </form>
    </div>
  );
}
