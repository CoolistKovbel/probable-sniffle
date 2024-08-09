import MainFooter from "./componets/footer";
import HeaderMain from "./componets/header";

import SectionComp from "./componets/section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-[20px]">
      <HeaderMain />

      <SectionComp />

      <MainFooter />

    </main>
  );
}
