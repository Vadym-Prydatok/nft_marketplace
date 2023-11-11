export const JoinUs = () => {
  return (
    <section className="py-10 md:py-20 md:pt-10">
      <div className="container">
        <div className="flex flex-col gap-[30px] md:flex-row md:rounded-[20px] md:py-10 md:px-[30px] md:bg-secondary md:justify-between xl:p-[60px]">

          <div className="image-container h-[255px] w-[315px] rounded-[20px] self-center md:min-h-[280px] md:min-w-[300px] xl:min-h-[310px] xl:min-w-[425px] overflow-hidden">
            <img className="object-cover h-full w-full rounded-[20px] hover:scale-105" src="img/astronaut.png" alt="astronaut" />
          </div>

          <div className="flex flex-col gap-y-10 max-w-[430px] xl:justify-center">

            <div>
              <h1 className="font-[WorkSansSemiBold] text-[28px] font-semibold xl:text-[38px] xl:leading-[120%] mb-[10px] leading-[140%]">
                Join our weekly <br /> digest
              </h1>
              <p className="leading-[140%] xl:text-[22px] xl:leading-[160%]">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>

            <div className="flex flex-col gap-y-4 xl:flex-row xl:relative">
              <input
                className="h-[46px] outline-none focus:shadow-md text-main bg-white rounded-[20px] placeholder:text-main px-5 py-4 xl:rounded-r-none"
                type="email"
                placeholder="Enter Your Email Here"
              />
              <button className="font-semibold fony-[WorkSansSemiBold] flex items-center justify-center bg-action 
              h-[46px] w-full rounded-[20px] gap-x-3 hover:bg-main border-action border-2 xl:absolute xl:w-[211px] right-0">
                <img src="img/svg/mail.svg" alt="mail" />
                <span>Subscribe</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
