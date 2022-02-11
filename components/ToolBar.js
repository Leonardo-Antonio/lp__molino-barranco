import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import styles from "../styles/ToolBar.module.css";

export const ToolBar = () => {
  const itemsMenu = [
    { name: "Inicio", redirect: "" },
    { name: "Menú", redirect: "" },
    { name: "Sandwiches", redirect: "" },
    { name: "Hamburguesas", redirect: "" },
    { name: "A la carta", redirect: "" },
  ];
  return (
    <div className="container mx-auto pt-4 pb-4">
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <div>
            <Image
              src="/images/icon.png"
              width={50}
              height={50}
              alt="logo"
              className="rounded-xl"
              loading="eager"
            />
          </div>
          <div>
            <span className="font-bold text-xl">El Molino de Barranco</span>
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-4">
            {itemsMenu.map((item) => (
              <Link href={item.redirect} key={v4().toString()}>
                <a
                  className={`${styles.itemMenu} font-semibold hover:transition-all hover:delay-75`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
