import React from "react";
import { SliderComponent } from "./";

const SliderSelect = ({ data, setData }) => {
  const bankLimit = 10000;

  const handleOnChangeHomValue = (e, value) => {
    setData({
      ...data,
      homeValue: value.toFixed(0),
      downPayment: (0.2 * value).toFixed(0),
      loanAmount: (0.8 * value).toFixed(0),
    });
  };

  const handleOnChangeDownPayment = (e, value) => {
    setData({
      ...data,
      downPayment: value.toFixed(0),
      loanAmount: (data.homeValue - value).toFixed(0),
    });
  };

  const handleOnChangeLoanAmount = (e, value) => {
    setData({
      ...data,
      loanAmount: value.toFixed(0),
      downPayment: (data.homeValue - value).toFixed(),
    });
  };

  const handleOnChangeInterestRate = (e, value) => {
    setData({
      ...data,
      interestRate: value,
    });
  };
  return (
    <div>
      <SliderComponent
        onChange={handleOnChangeHomValue}
        defaultValue={data.homeValue}
        min={1000}
        max={bankLimit}
        steps={100}
        unit={"₹"}
        amount={data.homeValue}
        label={"Home Value"}
        value={data.homeValue}
      />

      <SliderComponent
        onChange={handleOnChangeDownPayment}
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={100}
        unit={"₹"}
        amount={data.downPayment}
        label={"Down Payment"}
        value={data.downPayment}
      />

      <SliderComponent
        onChange={handleOnChangeLoanAmount}
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={100}
        unit={"₹"}
        amount={data.loanAmount}
        label={"Loan Amount"}
        value={data.loanAmount}
      />

      <SliderComponent
        onChange={handleOnChangeInterestRate}
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit={"%"}
        amount={data.interestRate}
        label={"Interest Rate"}
        value={data.interestRate}
      />
    </div>
  );
};

export default SliderSelect;
