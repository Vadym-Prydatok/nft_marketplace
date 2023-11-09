export const SectionHero = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div
          className="grid gap-y-10 justify-items-center grid-rows-[repeat(3,_minmax(auto,_auto))] 
         md:grid-cols-[repeat(2,_minmax(auto,_1fr))] md:grid-rows-[repeat(2,_minmax(auto,_auto))] md:gap-y-0 md:gap-x-[30px]"
        >
          <div className="row-start-1 row-end-1 md:mb-5">
            <h1 className="mb-[10px] text-[28px] leading-10 font-semibold md:mb-5 md:text-[38px] md:leading-[120%] xl:text-[67px] xl:leading-[110%]">
              Discover digital art & Collect NFTs
            </h1>
            <p className="font-normal xl:text-[22px] xl:leading-[160%]">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>

          <div className="row-start-3 w-full row-end-3 md:max-w-[330px] md:justify-self-start md:col-start-1 md:col-end-2 md:row-span-1 xl:max-w-[510px]">
            <button
              className="font-[WorkSansSemiBold] mb-10 gap-x-3 w-full h-[60px] rounded-[20px] border-action border-2 hover:bg-main
          flex items-center justify-center bg-action font-semibold md:mb-5 md:w-56"
            >
              <img src="img/svg/rocket.svg" alt="rocket" />
              Get Started
            </button>

            <ul className="flex justify-between gap-x-4">
              <li className="font-[SpaceMonoBold] font-bold text-[22px] leading-[160%] xl:text-[28px]">
                240k+
                <p className="font-[WorkSansRegular] font-normal text-base xl:text-[24px]">
                  Total Sale
                </p>
              </li>
              <li className="font-[SpaceMonoBold] font-bold text-[22px] leading-[160%] xl:text-[28px]">
                100k+
                <p className="font-[WorkSansRegular] font-normal text-base xl:text-[24px]">
                  Auctions
                </p>
              </li>
              <li className="font-[SpaceMonoBold] font-bold text-[22px] leading-[160%] xl:text-[28px]">
                240k+
                <p className="font-[WorkSansRegular] font-normal text-base xl:text-[24px]">
                  Artists
                </p>
              </li>
            </ul>
          </div>

          <div
            className="flex flex-col justify-end w-full min-h-[330px] max-w-[330px] md:row-start-1 md:row-end-3 md:max-w-[330px] md:max-h-[330px]
          bg-[url('/img/hero1.png')] bg-[center_bottom_50px] bg-cover bg-no-repeat rounded-[20px] xl:max-w-[510px] xl:max-h-[510px]"
          >
            <div className="flex flex-col gap-y-[10px] px-5 py-[22px] bg-secondary rounded-b-[20px]">
              <h1 className="font-[WorkSansBold] font-bold text-[22px] leading-[140%]">
                Space Walking
              </h1>
              <div className="flex gap-x-3">
                <img src="img/avatars/heroAvatar.png" alt="heroAvatar" />{" "}
                Animakid
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
