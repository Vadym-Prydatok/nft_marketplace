export const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container">
        <nav className="pb-[30px] border-b-caption border-b flex flex-col gap-[30px] xl:flex-row xl:justify-between">
          <ul className="flex flex-col gap-y-5 text-label leading-[140%] xl:max-w-[320px]">
            <li className="text-white ">
              <a
                href="#"
                className="flex items-center text-[22px] gap-3 font-[SpaceMonoBold] font-bold hover:text-action leading-[160%]"
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
                      className=" w-8 h-8 bg-[url(/img/svg/discord.svg)] bg-cover bg-no-repeat block hover:bg-[url(/img/svg/discordActive.svg)]"
                      href="#"
                    ></a>
                  </li>

                  <li>
                    <a
                      className=" w-8 h-8 bg-[url(/img/svg/youtube.svg)] bg-cover bg-no-repeat block hover:bg-[url(/img/svg/youtubeActive.svg)]"
                      href="#"
                    ></a>
                  </li>

                  <li>
                    <a
                      className=" w-8 h-8 bg-[url(/img/svg/twitter.svg)] bg-cover bg-no-repeat block hover:bg-[url(/img/svg/twitterActive.svg)]"
                      href="#"
                    ></a>
                  </li>

                  <li>
                    <a
                      className=" w-8 h-8 bg-[url(/img/svg/instagram.svg)] bg-cover bg-no-repeat block hover:bg-[url(/img/svg/instagramActive.svg)]"
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
              <a className="hover:text-action" href="#collection">Marketplace</a>
            </li>
            <li>
              <a className="hover:text-action" href="#rankings">Rankings</a>
            </li>
            <li>
              <a className="hover:text-action" href="#wallet">Connect a wallet</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-y-5 text-label leading-[140%]">
            <li className="text-white text-[22px] font-[SpaceMonoBold] font-bold leading-[160%]">
              Join our weekly digest
            </li>

            <li className="xl:max-w-[320px]">Get exclusive promotions & updates straight to your inbox.</li>

            <li className="md:w-[420px]">
              <div className="flex flex-col gap-y-4 md:flex-row md:relative">
                <input
                  className="h-[46px] outline-none focus:shadow-md text-main bg-white rounded-[20px] placeholder:text-main px-5 py-4 md:rounded-r-none md:w-[260px]"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <button
                  className="font-semibold fony-[WorkSansSemiBold] flex items-center justify-center bg-action 
              h-[46px] w-full rounded-[20px] gap-x-3 hover:bg-main border-action border-2 md:absolute md:w-[180px] right-0 text-white"
                >
                  <img className="md:hidden" src="img/svg/mail.svg" alt="mail" />
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
