import type { ReactElement } from "react";

import { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";
import KontaktaOss from "@/components/KontaktaOss";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <KontaktaOss />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
