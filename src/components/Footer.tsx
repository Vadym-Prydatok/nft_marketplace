import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "footer ul",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "footer",
          start: "top 80%",
        },
      },
    );

    gsap.to(".submit-button-footer", { opacity: 0, x: -200, display: "none" });
  }, []);

  const showButton = () => {
    gsap.to(".submit-button-footer", {
      opacity: 1,
      x: 0,
      duration: 1,
      display: "flex",
    });
  };

  const sendLetter = () => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.out",
      },
    });

    tl.fromTo(
      ".submit-button-footer img",
      { opacity: 1, rotate: 0, x: 0, y: 0 },
      { opacity: 0, rotate: 360, x: 20, y: -20, duration: 1 },
    )
      .to(".submit-button-footer img", { opacity: 0, rotate: 0, x: 0, y: 0 })
      .to(".submit-button-footer img", { opacity: 1 });
  };

  return (
    <footer className="py-10 overflow-x-hidden">
      <div className="container">
        <nav className="pb-[30px] border-b-caption border-b flex flex-col gap-[30px] xl:flex-row xl:justify-between">
          <ul className="flex flex-col gap-y-5 text-label leading-[140%] xl:max-w-[320px]">
            <li className="text-white ">
              <a
                href="#"
                className="flex items-center text-[22px] gap-3 font-[SpaceMonoBold] font-bold hover:text-action leading-[160%] duration-300 transition-colors"
              >
                <img src="img/svg/logo.svg" alt="logo" />
                <span>NFT Marketplace</span>
              </a>
            </li>

            <li>NFT marketplace UI created with Anima for Figma.</li>
            <li>
              <div className="flex flex-col gap-y-[15px]">
                <p>Join our community</p>
                <ul className="flex gap-x-3">
                  <li>
                    <a
                      className="duration-300 w-8 h-8 bg-[url(/img/svg/discord.svg)] bg-cover bg-no-repeat block hover:bg-[url(/img/svg/discordActive.svg)]"
                      href="#"
                    ></a>
                  </li>

                  <li>
                    <a
                      className="duration-300 w-8 h-8 bg-[url(/img/svg/youtube.svg)] bg-cover bg-no-repeat block hover:bg-[url(/img/svg/youtubeActive.svg)]"
                      href="#"
                    ></a>
                  </li>

                  <li>
                    <a
                      className="duration-300 w-8 h-8 bg-[url(/img/svg/twitter.svg)] bg-cover bg-no-repeat block hover:bg-[url(/img/svg/twitterActive.svg)]"
                      href="#"
                    ></a>
                  </li>

                  <li>
                    <a
                      className="duration-300 w-8 h-8 bg-[url(/img/svg/instagram.svg)] bg-cover bg-no-repeat block hover:bg-[url(/img/svg/instagramActive.svg)]"
                      href="#"
                    ></a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="flex flex-col gap-y-5 text-label leading-[140%]">
            <li className="text-white text-[22px] font-[SpaceMonoBold] font-bold leading-[160%]">
              Explore
            </li>
            <li>
              <a
                className="hover:text-action duration-300 transition-colors"
                href="#collection"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                className="hover:text-action duration-300 transition-colors"
                href="#rankings"
              >
                Rankings
              </a>
            </li>
            <li>
              <a
                className="hover:text-action duration-300 transition-colors"
                href="#wallet"
              >
                Connect a wallet
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-y-5 text-label leading-[140%]">
            <li className="text-white text-[22px] font-[SpaceMonoBold] font-bold leading-[160%]">
              Join our weekly digest
            </li>

            <li className="xl:max-w-[320px]">
              Get exclusive promotions & updates straight to your inbox.
            </li>

            <li className="md:w-[420px]">
              <div className="flex flex-col gap-y-4 md:flex-row md:relative">
                <input
                  onClick={showButton}
                  className="h-[46px] outline-none border-[2px] hover:shadow-md border-white focus:border-action duration-300 text-main bg-white rounded-[20px]
                   placeholder:text-main px-5 py-4 md:w-[260px]"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <button
                  onClick={sendLetter}
                  className="font-semibold fony-[WorkSansSemiBold] flex items-center justify-center bg-action 
              h-[46px] w-full rounded-[20px] gap-x-3 hover:bg-main duration-300 transition-shadow border-action border-2 md:absolute md:w-[200px] right-0 text-white submit-button-footer"
                >
                  <img
                    src="img/svg/mail.svg"
                    alt="mail"
                  />
                  <span>Subscribe</span>
                </button>
              </div>
            </li>
          </ul>
        </nav>

        <div className="pt-5 text-xs text-label">
          <p>Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </div>
    </footer>
  );
};
