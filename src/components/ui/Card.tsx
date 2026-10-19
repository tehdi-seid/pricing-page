import { type card } from "../ui/index";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { cn } from "../../lb/cn";
import type { JSX } from "react";

function Card({ carInfo }: { carInfo: card }) {
  return (
    <div
      className={cn(
        `drop-shadow-lg border border-gray-400 ${carInfo.title === "Professional" ? "bg-gray-500" : "bg-gray-300"} rounded-3xl px-4 py-5 pt-8 hover:scale-105 transition-transform duration-400 ease-out`,
      )}
    >
      <div className={cn(`${carInfo.badge && "flex justify-between"}`)}>
        <h2 className="text-xl md:text-2xl font-bold mx-5 capitalize">
          {carInfo.title}
        </h2>

        {carInfo.badge && (
          <div className="border text-gray-300 border-[hsl(35,43%,10%)] bg-[hsl(187,32%,10%)] rounded-full px-3 py-2 text-sm">
            <p>{carInfo.badge}</p>
          </div>
        )}
      </div>
      <p className=" mx-5 text-gray-700">{carInfo.subtitle}</p>
      <div
        className={cn(
          `bg-gray-300 mt-9  p-4 rounded-xl ${carInfo.title !== "Professional" && "bg-gray-200"}`,
        )}
      >
        <h1>
          <span className="text-2xl md:text-4xl font-bold">
            {carInfo.price}
          </span>
          {carInfo.period}
        </h1>

        <p className="capitalize text-gray-700">{carInfo.description}</p>

        <ul className="mt-7 flex flex-col gap-1">
          {carInfo.features.map(
            (feature: string): JSX.Element => (
              <li key={crypto.randomUUID()} className="flex items-center gap-3">
                <MdOutlineRadioButtonChecked className="text-[hsl(187,32%,21%)]" />
                {feature}
              </li>
            ),
          )}
        </ul>
        <button
          className={cn(
            `capitalize border border-gray-600 w-full py-2 rounded-2xl mt-5 cursor-pointer hover:bg-gray-300 transition-colors duration-300 ease-out ${carInfo.buttonText === "Choose Plan" ? "text-gray-300 bg-gray-600 hover:bg-gray-500 hover:text-gray-200" : ""}`,
          )}
        >
          {carInfo.buttonText}
        </button>
      </div>
      {/* <Badges /> */}
    </div>
  );
}

export default Card;
