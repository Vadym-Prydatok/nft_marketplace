import gsap from "gsap";
import { categories } from "../data/categories";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

export const Categories = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".categories-list li",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".categories-list",
          start: "top 80%",
        },
      },
    );
  });

  return (
    <section className="py-10 md:py-20 castomShadow">
      <div className="container">
        <div>
          <div className="mb-10 xl:mb-[60px]">
            <h1 className="font-[WorkSansSemiBold] text-[28px] font-semibold xl:text-[38px] xl:leading-[120%]">
              Browse Categories
            </h1>
          </div>

          <ul className="grid grid-rows-4 grid-cols-2 gap-5 md:grid-rows-2 md:grid-cols-4 md:gap-[30px] categories-list">
            {categories.map((category) => (
              <li key={category.id} className="w-full grid place-items-center cursor-pointer">
                <a className="w-full max-w-[172px] h-[210px] rounded-[20px] relative group xl:h-[316px] xl:max-w-[242px] hover:shadow-md duration-300 transition-shadow">
                  <div
                    className={`h-[142px] w-full grid place-items-center rounded-t-[20px] xl:h-60 bg-cover ${category.bgImgUrl}`}
                  >
                    <div className="backdrop-blur-[9px] bg-whiteBlur w-[100%] h-[100%] rounded-t-[20px] duration-1000 group-hover:backdrop-blur-0"></div>
                    <img
                      className="w-20 h-20 xl:w-[100px] xl:h-[100px] absolute group-hover:hidden translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/3"
                      src={category.imgUrl}
                      alt="category"
                    />
                  </div>

                  <div className="bg-secondary p-5 rounded-b-[20px] xl:pb-[25px] xl:px-[30px]">
                    <h1 className="font-semibold font-[WorkSansSemiBold] xl:text-[22px]">
                      {category.title}
                    </h1>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
