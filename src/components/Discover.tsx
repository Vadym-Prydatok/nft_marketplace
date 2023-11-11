import { DiscoverCard } from "./DiscoverCard";

export const Discover = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="grid grid-rows-[repeat(3,_minmax(auto,_auto))] gap-y-10 justify-items-center md:grid-rows-[repeat(2,_minmax(auto,_auto))] md:grid-cols-[repeat(2,_minmax(auto,_auto))]">
          <div className="row-start-1 justify-self-start">
            <h1 className="font-[WorkSansSemiBold] text-[28px] font-semibold xl:text-[38px] xl:leading-[120%] mb-[10px]">
              Discover More NFTs
            </h1>
            <p className="xl:text-[22px] xl:leading-[160%]">
              Explore new trending NFTs
            </p>
          </div>

          <div className="row-start-3 md:row-start-1 w-full grid md:place-items-end">
            <a
              href="#"
              className="font-[WorkSansSemiBold] gap-x-3 w-full h-[60px] rounded-[20px] border-action border-2 hover:bg-main
              flex items-center justify-center bg-action font-semibold md:w-[187px]"
            >
              <img src="img/svg/eye.svg" alt="rocket" />
              See All
            </a>
          </div>

          <div className="w-full row-start-2 md:col-start-1 md:col-end-3 rounded-[20px]">
            <ul className="w-full grid justify-items-center gap-y-5 md:grid-cols-2 xl:grid-cols-3">
              <li className="h-100% min-w-[330px] hover:shadow-md rounded-[20px] xl:justify-self-start">
                <DiscoverCard
                  imgUrl="img/discover/galaxy.png"
                  avaUrl="img/discover/moonAvatar.png"
                  title="Distant Galaxy"
                  userName="MoonDancer"
                  price="1.63 ETH"
                  bid="0.33 wETH"
                />
              </li>

              <li className="h-100% min-w-[330px] hover:shadow-md rounded-[20px]">
                <DiscoverCard
                  imgUrl="img/discover/edena.png"
                  avaUrl="img/discover/nebulaAvatar.png"
                  title="Life On Edena"
                  userName="NebulaKid"
                  price="1.63 ETH"
                  bid="0.33 wETH"
                />
              </li>

              <li className="h-100% min-w-[330px] hover:shadow-md rounded-[20px] md:hidden xl:block xl:justify-self-end">
                <DiscoverCard
                  imgUrl="img/discover/astro.png"
                  avaUrl="img/discover/spaceAvatar.png"
                  title="AstroFiction"
                  userName="Spaceone"
                  price="1.63 ETH"
                  bid="0.33 wETH"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
