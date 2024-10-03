"use client";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [interest, setInterest] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputFocused2, setIsInputFocused2] = useState(false);
  const [isInputFocused3, setIsInputFocused3] = useState(false);
  const [errors, setErrors] = useState({
    amount: "",
    years: "",
    interest: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { amount: "", years: "", interest: "", type: "" };

    if (!amount) {
      newErrors.amount = "This field is required";
      valid = false;
    }
    if (!years) {
      newErrors.years = "This field is required";
      valid = false;
    }
    if (!interest) {
      newErrors.interest = "This field is required";
      valid = false;
    }

    if (!type) {
      newErrors.type = "This field is required";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    let res;
    const p = parseFloat(amount);
    const y = parseFloat(years);
    const i = parseFloat(interest);
    const r = i / 100 / 12;
    const n = y * 12;
    const n1 = Math.pow(1 + r, n);
    const n2 = (p * r * n1) / (n1 - 1);

    switch (type) {
      case "repay":
        res = n2;
        break;
      case "interest":
        res = p * r;
        break;
    }
    setResult(res);
    console.log(result);
  };

  const handleClear = () => {
    setAmount("");
    setYears("");
    setInterest("");
    setType("");
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" bg-white lg:flex lg:max-w-4xl lg:rounded-r-3xl lg:rounded-l-3xl">
        <div className="bg-white font-medium lg:w-1/2 md:py-8 lg:rounded-l-3xl">
          <form onSubmit={handleSubmit} className="w-5/6 m-auto">
            <div className="md:flex md:justify-between md:pb-8">
              <p className="font-bold pb-2 pt-4 md:pt-0 md:text-2xl">
                Mortgage Calculator
              </p>
              <button
                type="button"
                className="underline pb-4 text-[#768e91]"
                onClick={handleClear}
              >
                Clear All
              </button>
            </div>
            <div>
              <label htmlFor="amount" className="text-[#768e91]">
                Mortgage Amount
              </label>
              <div
                className={`flex border-2 rounded mt-2 hover:border-[#4c5d65] ${
                  isInputFocused
                    ? "border-[#d7da2f] hover:border-[#d7da2f]"
                    : ""
                } ${
                  errors.amount && "border-[#d73328] hover:border-[#d73328]"
                }`}
              >
                <p
                  className={`py-2 px-4 bg-[#E3F4FC] text-[#5c7582] font-bold ${
                    isInputFocused && "bg-[#d7da2f]  text-black"
                  } ${errors.amount && "bg-[#d73328] text-white"}`}
                >
                  £
                </p>
                <input
                  type="number"
                  value={amount}
                  name="amount"
                  id="amount"
                  onChange={(e) => setAmount(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  className="w-full font-bold pl-4 focus:outline-none"
                />
              </div>
              {errors.amount && (
                <p className="text-[#d73328]">{errors.amount}</p>
              )}
              <div className="pt-4 md:flex md:justify-between">
                <div>
                  <div>
                    <label htmlFor="years" className="text-[#768e91]">
                      Mortgage Term
                    </label>
                    <div
                      className={`flex border-2 rounded mt-2  hover:border-[#4c5d65] ${
                        isInputFocused2 &&
                        "border-[#d7da2f] hover:border-[#d7da2f]"
                      } ${
                        errors.years &&
                        "border-[#d73328] hover:border-[#d73328]"
                      }`}
                    >
                      <input
                        type="number"
                        value={years}
                        name="years"
                        id="years"
                        onChange={(e) => setYears(e.target.value)}
                        onFocus={() => setIsInputFocused2(true)}
                        onBlur={() => setIsInputFocused2(false)}
                        className="w-full font-bold pl-4 focus:outline-none"
                      />
                      <p
                        className={`py-2 px-4 bg-[#E3F4FC] text-[#5c7582] font-bold ${
                          isInputFocused2 && "bg-[#d7da2f]  text-black"
                        } ${errors.years && "bg-[#d73328] text-white"}`}
                      >
                        years
                      </p>
                    </div>
                  </div>
                  {errors.years && (
                    <p className="text-[#d73328]">{errors.years}</p>
                  )}
                </div>
                <div className="pt-4 md:pt-0 lg:pl-4">
                  <div>
                    <label htmlFor="i" className="text-[#768e91]">
                      Interest Rate
                    </label>
                    <div
                      className={`flex border-2 rounded mt-2  hover:border-[#4c5d65] ${
                        isInputFocused3 &&
                        "border-[#d7da2f] hover:border-[#d7da2f]"
                      } ${
                        errors.interest &&
                        "border-[#d73328] hover:border-[#d73328]"
                      } `}
                    >
                      <input
                        type="number"
                        value={interest}
                        step="0.01"
                        name="i"
                        id="i"
                        onChange={(e) => setInterest(e.target.value)}
                        onFocus={() => setIsInputFocused3(true)}
                        onBlur={() => setIsInputFocused3(false)}
                        className="w-full font-bold pl-4 focus:outline-none "
                      />
                      <p
                        className={`py-2 px-4 bg-[#E3F4FC] text-[#5c7582] font-bold ${
                          isInputFocused3 && "bg-[#d7da2f] text-black"
                        } ${errors.interest && "bg-[#d73328] text-white"}`}
                      >
                        %
                      </p>
                    </div>
                  </div>
                  {errors.interest && (
                    <p className="text-[#d73328]">{errors.interest}</p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <label className="text-[#768e91]">Mortgage type</label>
                <div
                  className={`mt-2 border-2 rounded px-4 py-2 mb-2 hover:border-[#eef0a9] ${
                    type === "repay" ? "border-[#eef0a9] bg-[#fafae0]" : ""
                  } `}
                >
                  <input
                    type="radio"
                    value="repay"
                    name="repay"
                    id="repay"
                    checked={type === "repay"}
                    onChange={(e) => setType(e.target.value)}
                    className="accent-[#d7da2f]"
                  />
                  <label htmlFor="repay" className="pl-4 font-bold">
                    Repayment
                  </label>
                </div>
                <div
                  className={`mt-2 border-2 rounded px-4 py-2 mb-2  hover:border-[#eef0a9] ${
                    type === "interest" ? "border-[#eef0a9] bg-[#fafae0]" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="interest"
                    name="interest"
                    id="interest"
                    checked={type === "interest"}
                    onChange={(e) => setType(e.target.value)}
                    className="accent-[#d7da2f]"
                  />
                  <label htmlFor="interest" className="pl-4 font-bold">
                    Interest Only
                  </label>
                </div>
              </div>
              {errors.type && <p className="text-[#d73328]">{errors.type}</p>}
              <div className="py-4 md:pb-0">
                <button
                  class="bg-[#D9DB30] rounded-full px-8 py-2 max-w-max font-bold hover:bg-[#eef0a9]"
                  type="submit"
                >
                  <img
                    src="/icon-calculator.svg"
                    alt="Calc"
                    className="inline h-50px w-50px pr-4"
                  />
                  Calculate Repayments
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-[#133040] text-white py-8 lg:w-1/2  lg:rounded-r-3xl lg:rounded-bl-[64px]">
          {result !== null ? (
            <div className="w-5/6 m-auto">
              <p className="font-bold text-2xl pb-4">Your results</p>
              <p className="text-slate-400 pb-4">
                Your results shown below are based on the information you
                provided. To adjust the results, edit the form and click
                "calculate repayments" again.{" "}
              </p>
              <div className="bg-[#d2d537] pt-1 rounded-lg">
                <div className="bg-[#0e2431] px-4 py-4 rounded-md">
                  <p className="pb-4 text-slate-400">Your monthly repayments</p>
                  <p className="font-bold text-[#d2d537] text-4xl pb-4">
                    £{result.toFixed(2)}
                  </p>
                  <hr className="border-slate-400" />
                  <p className="text-slate-400 py-4">
                    Total you'll repay over the term
                  </p>
                  <p className="text-2xl font-bold">
                    £{(result * years * 12).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-5/6 m-auto text-center lg:h-full lg:content-center">
              <div className="pb-4">
                <img
                  className="m-auto"
                  src="/illustration-empty.svg"
                  alt="empty"
                />
              </div>
              <p className="font-bold text-xl pb-2">Results shown here</p>
              <p className="text-slate-400">
                Complete the form and click "calculate repayments" to see what
                your monthly repayments would be.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
