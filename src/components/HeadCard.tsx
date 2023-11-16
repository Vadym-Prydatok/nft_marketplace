import { FC } from "react";
import { HeadCardType } from "../types/HeadCardType";

interface HeadCardProps {
  card: HeadCardType;
}

export const HeadCard: FC<HeadCardProps> = ({ card }) => {
  return (
    <div
      className="group flex flex-col justify-end w-full h-full  rounded-[20px] hover:shadow-md
    min-h-[330px] max-w-[330px] md:max-w-[330px] md:max-h-[330px] xl:max-w-[510px] xl:max-h-[510px] cursor-pointer castomShadow"
    >
      <div className="w-full overflow-hidden rounded-t-[20px]">
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-1000"
          src={card.imgUrl}
          alt="hero"
        />
      </div>

      <div className="flex flex-col gap-y-[10px] px-5 py-[22px] bg-secondary rounded-b-[20px] head-card-title">
        <h1 className="font-[WorkSansBold] font-bold text-[22px] leading-[140%]">
          {card.title}
        </h1>
        <p className="flex gap-x-3">
          <img src={card.authorImg} alt="avatar" />
          {card.author}
        </p>
      </div>
    </div>
  );
};
