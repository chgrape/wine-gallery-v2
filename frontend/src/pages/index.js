import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import WineCard from "@/components/WineCard";
import axios from "axios";

export async function getServerSideProps(){
  const res = await axios.get("http://localhost:3000/api/wines");

  console.log(res.data)
  return {
    props:{
      data:res.data
    }
  }
}

export default function Home({data}) {
  return (
    <Layout>
      <div className="pt-32 flex-row flex w-full justify-center">
        {data.map((wine) => <WineCard origin={wine.country} type={wine.type} name={wine.name} key={wine.id} />)}
      </div>
    </Layout>
  );
}
