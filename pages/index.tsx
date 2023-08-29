import type { ReactElement } from "react";
import Hem from "@/components/Hem";
import { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Hem />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
