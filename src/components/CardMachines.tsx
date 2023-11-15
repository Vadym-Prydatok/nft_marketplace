import { useState } from "react";
import { imagesMachines } from "../data/imagesMachines";
import gsap from "gsap";

export const CardMachines = () => {
  const [slide, setSlide] = useState(0);

  const handleClick = (index: number) => {
    setSlide(index);
    gsap.fromTo(
      ".fade-box-machines",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1 },
    );
  };

  return (
    <div className="flex flex-col gap-y-4 items-center max-w-[330px]">
      <div className="w-[330px] h-[330px] rounded-[20px] overflow-hidden fade-box-machines">
        <img
          className="w-full object-cover hover:scale-105 rounded-[20px] duration-1000"
          src={imagesMachines[slide].url}
          alt="primary"
        />
      </div>

      <ul className="flex gap-x-[16px] mb-[15px]">
        {imagesMachines.map((image, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`h-[96px] w-[96px] rounded-[20px] cursor-pointer hover:shadow-md duration-300 transition-shadow md:h-[100px] md:w-[100px] ${
              slide === index ? "border-2" : "border-none"
            }`}
          >
            <img className="rounded-[20px]" src={image.url} alt="secondary" />
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-y-[10px] items-start justify-start w-full">
        <h1 className="font-[WorkSansSemiBold] font-semibold text-[22px]">
          Disco Machines
        </h1>
        <a className="flex gap-x-3 hover:text-action duration-300 transition-colors" href="#">
          <img src="img/avatars/robotAvatar.png" alt="robotAvatar" />
          BeKind2Robots
        </a>
      </div>
    </div>
  );
};
