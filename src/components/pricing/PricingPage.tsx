import React from "react";
import Header from "../header/Header";
import Button from "../ui/Button";
import type { buttonProps } from "../ui/Button";
import Card from "../ui/Card";
import { cards, type card } from "../ui/index";
const btns: buttonProps[] = [
  {
    text: "Monthly",
    onClick: () => console.log("Get Started clicked"),
    isMonthly: true,
  },
  {
    text: "Yearly",
    onClick: () => console.log("Yearly clicked"),
    isMonthly: false,
  },
];

function PricingPage() {
  return (
    <div>
      <Header />
      <div className="mt-8 bg-linear-60 text-shadow-black bg-clip-text">
        <h1 className="text-xl font-bold text-center md:text-3xl">
          we have got a plan that is perfect for you
        </h1>
      </div>
      <div className="flex justify-around mt-4 border w-max border-gray-400 rounded-full bg-gray-300 mx-auto">
        {btns.map((btn: buttonProps) => (
          <Button
            key={btn.text}
            text={btn.text}
            onClick={btn.onClick}
            isMonthly={btn.isMonthly}
          />
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-9">
        {cards.map((card: card) => (
          <Card key={card.id} carInfo={card} />
        ))}
      </div>
    </div>
  );
}

export default PricingPage;
