import classNames from "classnames";
import { useEffect, useState } from "react";

export const MagicMashrooms = () => {
  const isIphone = (navigator.userAgent.match(/(iPad|iPhone|iPod|Silk)/gi));
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const timeRemaining = endOfDay.getTime() - now;

      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="py-10 md:py-20 xxxx">
      <div>
        <div className={classNames('w-full h-[600px] md:h-[640px] bg-[url(/img/bottomBG.png)] bg-cover bg-center bg-no-repeat', {'bg-fixed': !isIphone})}>
          <div className="violetGradient w-full h-full">
            <div className="container">
              <div
                className="grid grid-rows-[repeat(4,_minmax(auto,_auto))] w-full h-full 
            pt-[120px] pb-10 md:pt-[360px] md:pb-[60px]
            md:grid-rows-[repeat(3,_minmax(auto,_auto))] md:grid-cols-2 gap-y-[30px]"
              >
                <div className="bg-main row-start-1 px-5 py-[10px] w-[150px] h-[44px] rounded-[20px]">
                  <div className="flex gap-x-3">
                    <img src="img/avatars/shroomieAvatar.png" alt="shroomie" />
                    <h1>Shroomie</h1>
                  </div>
                </div>

                <div className="md:row-start-2 md:col-start-1">
                  <h1 className="font-[WorkSansSemiBold] font-semibold text-[32px] leading-[120%] md:text-[38px] xl:text-[51px] xl:leading-[110%]">
                    Magic Mashrooms
                  </h1>
                </div>

                <div className="md:row-start-3 md:col-start-1 rounded-[20px]">
                  <button className="bg-white border-[2px] border-white duration-300 transition-colors text-main flex items-center justify-center gap-x-3 rounded-[20px] h-[60px] w-full md:max-w-[198px] hover:bg-main hover:text-action">
                    <img src="img/svg/eyeAction.svg" alt="eye" />
                    <span className="font-[WorkSansSemiBold] font-semibold">
                      See NFT
                    </span>
                  </button>
                </div>

                <div className="bg-darkBlur row-start-3 md:row-start-2 md:col-start-2 md:row-end-4 p-[30px] rounded-[20px] flex flex-col gap-y-[10px] items-center md:max-w-[295px] md:justify-self-end">
                  <h1 className="font-[SpaceMonoRegular] text-[12px] leading-[110%] md:self-start">
                    Auction ends in:
                  </h1>
                  <div>
                    <ul className="flex gap-x-[10px] font-bold font-[SpaceMonoBold] text-[38px] leading-[120%]">
                      <li>
                        {timeLeft.hours}
                        <p className="font-[SpaceMonoRegular] font-normal text-[12px] leading-[110%] mt-[5px]">
                          Hours
                        </p>
                      </li>
                      <li>:</li>
                      <li>
                        {timeLeft.minutes}
                        <p className="font-[SpaceMonoRegular] font-normal text-[12px] leading-[110%] mt-[5px]">
                          Minutes
                        </p>
                      </li>
                      <li>:</li>
                      <li>
                        {timeLeft.seconds}
                        <p className="font-[SpaceMonoRegular] font-normal text-[12px] leading-[110%] mt-[5px]">
                          Seconds
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
