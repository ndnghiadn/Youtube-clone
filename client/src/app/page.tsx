import Header from "@/components/home/header";
import Sidebar from "@/components/home/sidebar";
import MainContainer from "@/components/home/main-container";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContainer />
      </div>
    </>
  );
}
