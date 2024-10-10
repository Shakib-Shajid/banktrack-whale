import Banner from "@/components/Banner";
// import Client from "@/components/Client";
import ClientResponse from "@/components/ClientResponse";
import Collection from "@/components/Collection";
import Consultant from "@/components/Consultant";
import Data from "@/components/Data";
import Finance from "@/components/Finance";
import Forecast from "@/components/Forecast";
import Video from "@/components/Video";
import Who from "@/components/Who";

export default function Home() {
  return (
    <>
      <Banner />
      <Video />
      {/* <Client /> */}
      <Finance />
      <Collection />
      <Forecast />
      <Who />
      {/* <Consultant /> */}
      <ClientResponse />
      <Data />
    </>
  );
}
