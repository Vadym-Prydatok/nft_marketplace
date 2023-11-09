import { FC } from "react";

interface DiscoverCardProps {
  bg: string;
  avaUrl: string;
  title: string;
  userName: string;
  price: string;
  bid: string;
}

export const DiscoverCard:FC<DiscoverCardProps> = ({ bg, avaUrl, title, userName, price, bid }) => {
  return (
    <a href="https://www.thetadrop.com/drops" target="_blank">
      <div className={`min-h-[238px] md:min-h-[296px] ${bg} bg-cover bg-center bg-no-repeat rounded-t-[20px]`}></div>
      <div className="p-5 bg-secondary rounded-b-[20px]">
        <div className="flex flex-col gap-y-[25px]">
          <div className="flex flex-col gap-y-[5px]">
            <h1 className="font-semibold font-[WorkSansSemiBold] text-[22px] leading-[160%] md:text-[24px] md:font-bold md:font-[WorkSansBold]">
              {title}
            </h1>
            <div className="flex gap-x-3">
              <img src={avaUrl} alt="moon" />
              <span className="font-[SpaceMonoRegular] font-normal md:text-[18px]">
                {userName}
              </span>
            </div>
          </div>

          <div className="flex justify-between font-[SpaceMonoRegular] text-xs">
            <div className="flex flex-col gap-y-1">
              <h2 className=" text-caption">Price</h2>
              <h3>{price}</h3>
            </div>

            <div className="flex flex-col gap-y-1">
              <h2 className="text-right text-caption">Highest Bid</h2>
              <h3 className="text-right">{bid}</h3>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
