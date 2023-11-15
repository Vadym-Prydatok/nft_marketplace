import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const HowItWorks = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#wallet div div",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#wallet",
          start: "top 80%",
        },
      },
    );
  });

  return (
    <section className="py-10 md:py-20" id="wallet">
      <div className="container">
        <div>
          <div className="row-start-1 justify-self-start mb-10 xl:mb-12">
            <h1 className="font-[WorkSansSemiBold] text-[28px] font-semibold xl:text-[38px] xl:leading-[120%] mb-[10px]">
              How it works
            </h1>
            <p className="xl:text-[22px] xl:leading-[160%]">
              Find out how to get started
            </p>
          </div>

          <div className="flex gap-y-5 flex-col md:flex-row md:gap-x-[30px]">
            <div
              className="p-5 xl:p-[30px] md:pb-[30px] md:pt-[10px] xl:pt-[10px] rounded-[20px] gap-5 w-full h-full bg-secondary 
            flex group hover:shadow-md duration-300 transition-shadow md:flex-col items-center md:min-h-[388px] xl:min-h-[432px]"
            >
              <div className="min-w-[100px] min-h-[100px] max-w-[250px] bg-[url(/img/wallet.png)] bg-center bg-cover">
                <div className="w-full h-full group-hover:bg-[url(/img/walletBG.png)] bg-center bg-cover">
                  <img
                    className="scale-[0.8] group-hover:scale-[1.2] duration-500"
                    src="img/walletDetails.png"
                    alt="details"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-[10px]">
                <h1 className="font-semibold font-[WorkSansSemiBold] xl:text-[24px] md:text-center">
                  Setup Your wallet
                </h1>
                <p className="text-[12px] xl:text-[18px] md:text-center">
                  Set up your wallet of choice. Connect it to the NFT market by
                  clicking the wallet icon in the top right corner.
                </p>
              </div>
            </div>

            <div className="p-5 xl:p-[30px] md:pb-[30px] md:pt-[10px] xl:pt-[10px] rounded-[20px] duration-300 transition-shadow gap-5 w-full h-full bg-secondary flex group hover:shadow-md md:flex-col items-center md:min-h-[388px] xl:min-h-[432px]">
              <div className="min-w-[100px] min-h-[100px] max-w-[250px] bg-[url(/img/collection.png)] bg-center bg-cover">
                <div className="w-full h-full group-hover:bg-[url(/img/collectionBG.png)] bg-center bg-cover">
                  <img
                    className="scale-[0.8] group-hover:scale-[1.2] duration-500"
                    src="img/collectionDetails.png"
                    alt="details"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-[10px]">
                <h1 className="font-semibold font-[WorkSansSemiBold] xl:text-[24px] md:text-center">
                  Create Collection
                </h1>
                <p className="text-[12px] xl:text-[18px] md:text-center h-full">
                  Upload your work and setup your collection. Add a description,
                  social links and floor price.
                </p>
              </div>
            </div>

            <div className="p-5 xl:p-[30px] md:pb-[30px] md:pt-[10px] xl:pt-[10px] rounded-[20px] duration-300 transition-shadow gap-5 w-full h-full bg-secondary flex group hover:shadow-md md:flex-col items-center md:min-h-[388px] xl:min-h-[432px]">
              <div className="min-w-[100px] min-h-[100px] max-w-[250px] bg-[url(/img/earn.png)] bg-center bg-cover">
                <div className="w-full h-full group-hover:bg-[url(/img/walletBG.png)] bg-center bg-cover">
                  <img
                    className="scale-[0.8] group-hover:scale-[1.2] duration-500"
                    src="img/earnDetails.png"
                    alt="details"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-[10px]">
                <h1 className="font-semibold font-[WorkSansSemiBold] xl:text-[24px] md:text-center">
                  Start Earning
                </h1>
                <p className="text-[12px] xl:text-[18px] md:text-center">
                  Choose between auctions and fixed-price listings. Start
                  earning by selling your NFTs or trading others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
