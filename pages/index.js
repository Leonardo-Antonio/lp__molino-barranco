import { useState } from "react";
import { SectionHome } from "../components/SectionHome";
import { TopCategories } from "../components/TopCategories";
import { ContainerLayout } from "../layouts/ContainerLayout";

export default function HomePage() {
  const [title, setTitle] = useState("Home");

  return (
    <ContainerLayout title={title}>
      <div>
        <SectionHome />
        <TopCategories />
      </div>
    </ContainerLayout>
  );
}
