import Image from "next/image";
import Topbar from "./components/Topbar";
import SimpleSlider from "./components/SimpleSlider";
export default function Home() {
  return (
    <>
      <Topbar></Topbar>
      <SimpleSlider />
    </>
  );
}
