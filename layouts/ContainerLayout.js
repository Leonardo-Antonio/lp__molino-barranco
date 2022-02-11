import Head from "next/head";
import { ToolBar } from "../components/ToolBar";

export const ContainerLayout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title} | El molino de barranco</title>
      </Head>
      <ToolBar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};
