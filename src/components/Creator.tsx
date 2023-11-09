import { FC } from "react";
import { CreatorType } from "../types/CreatorType";

interface props {
  creator: CreatorType;
}

export const Creator:FC<props> = ({ creator }) => {
  return (
    <div className="relative flex items-center p-5 w-full gap-x-5 bg-secondary rounded-[20px] xl:flex-col xl:gap-y-[20px]">
      <span className="font-[SpaceMonoRegular] font-normal absolute left-3 top-[12px] p-[3px] text-center bg-main text-caption h-[30px] w-[30px] rounded-[50%]">
        {creator.rate}
      </span>
      <div className="w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]">
        <img src={creator.imgUrl} alt="artistAvatar" />
      </div>

      <div>
        <h1 className="font-[WorkSansSemiBold] font-semibold text-[22px] mb-[5px] xl:text-center">
          {creator.name}
        </h1>
        <div className="flex gap-x-[8px]">
          <p className="text-caption">Total Sales:</p>
          <span className="font-[SpaceMonoRegular] font-normal">
            {creator.total}
          </span>
        </div>
      </div>
    </div>
  );
};