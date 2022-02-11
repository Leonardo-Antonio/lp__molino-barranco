import Image from "next/image";
import { BtnSection } from "./Buttons/BtnSection";

export const SectionHome = () => {
  return (
    <div className="pt-6 pb-6">
      <section className="flex flex-row justify-between">
        <div className="w-1/2">
          <div className="h-full flex flex-col">
            <div>
              <h1 className="font-bold text-6xl pt-11 pb-11">
                El Molino de Barranco
              </h1>
            </div>
            <div>
              <p className="w-9/12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                praesentium magnam dolor assumenda neque ea, voluptatum ad amet
                omnis possimus dolore facere iste nesciunt. Impedit quo
                veritatis omnis ducimus maiores.
              </p>
            </div>
            <div className="pt-11">
              <BtnSection text="Contactanos" />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src="/images/banner_main.svg"
            width={670}
            height={400}
            alt="banner_home"
          />
        </div>
      </section>
    </div>
  );
};
