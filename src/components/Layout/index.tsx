import { ReactNode } from "react";
import Footer from "../Footer";
import SimpleSlider from "../SimpleSlider";
import Topbar from "../Topbar";

export interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Topbar />
      <SimpleSlider />
      <main>{children}</main>
      <Footer />
    </>
  );
}
