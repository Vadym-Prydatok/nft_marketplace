import { useState } from "react";
import { imagesAnimals } from "../data/imagesAnimals";

export const CardAnimals = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="flex flex-col gap-y-4 items-center max-w-[330px]">
      <div className="w-[330px] h-[330px] rounded-[20px] overflow-hidden">
        <img
          className="w-full object-cover hover:scale-105 rounded-[20px]"
          src={imagesAnimals[slide].url}
          alt="primary"
        />
      </div>

      <ul className="flex gap-x-[16px] mb-[15px]">
        {imagesAnimals.map((image, index) => (
          <li
            key={index}
            onClick={() => setSlide(index)}
            className={`h-[96px] w-[96px] rounded-[20px] cursor-pointer hover:shadow-md md:h-[100px] md:w-[100px] ${
              slide === index ? "border-2" : "border-none"
            }`}
          >
            <img className="rounded-[20px]" src={image.url} alt="secondary" />
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-y-[10px] items-start justify-start w-full">
        <h1 className="font-[WorkSansSemiBold] font-semibold text-[22px]">
          DSGN Animals
        </h1>
        <a className="flex gap-x-3 hover:text-action" href="/">
          <img src="img/avatars/foxAvatar.png" alt="foxAvatar" />
          MrFox
        </a>
      </div>
    </div>
  );
};
