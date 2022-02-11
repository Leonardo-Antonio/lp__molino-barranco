import Image from "next/image";
import { v4 } from "uuid";

export const TopCategories = () => {
  const categories = [
    { name: "Fast food", redirect: "", icon: "/images/fast-food.png" },
    { name: "Sandwiches", redirect: "", icon: "/images/sandwich.png" },
    {
      name: "Hamburguesas",
      redirect: "",
      icon: "/images/hamburguesa-con-queso.png",
    },
    { name: "Almuerzos", redirect: "", icon: "/images/caja-de-almuerzo.png" },
    { name: "Sopas", redirect: "", icon: "/images/sopa.png" },
  ];
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl pt-6 pb-6">Top Categorias</h1>
      </div>

      <section>
        <div className="flex flex-row justify-between gap-8">
          {categories.map((category) => (
            <div
              key={v4().toString()}
              className="bg_second p-4 w-64 flex justify-center rounded-md btn font-semibold transition-all hover:delay-75 hover:shadow-2xl"
            >
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image
                    src={category.icon}
                    width={35}
                    height={35}
                    alt={category.name}
                  />
                </div>
                <div>{category.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
