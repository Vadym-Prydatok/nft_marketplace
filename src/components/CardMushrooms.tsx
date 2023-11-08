import { useState } from "react";

export const CardMushrooms = () => {
  const [slide, setSlide] = useState(0);

  const images = [
    { url: "img/mushrooms/primary.png" },
    { url: "img/mushrooms/secondary.png" },
    { url: "img/mushrooms/third.png" },
  ];

  return (
    <div className="flex flex-col gap-y-4 items-center max-w-[330px]">
      <div className="w-[330px] h-[330px] rounded-[20px] md:hover:scale-[1.02]">
        <img
          className="w-full object-cover rounded-[20px]"
          src={images[slide].url}
          alt="primary"
        />
      </div>

      <ul className="flex gap-x-[16px] mb-[15px]">
        {images.map((image, index) => (
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
        Magic Mushrooms
        </h1>
        <a className="flex gap-x-3 hover:text-action" href="/">
          <img src="img/avatars/shroomieAvatar.png" alt="shroomieAvatar" />
          Shroomie
        </a>
      </div>
    </div>
  );
};