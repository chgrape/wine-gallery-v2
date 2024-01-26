import Layout from "@/components/Layout";
import WineCard from "@/components/WineCard";
import axios from "axios";

export async function getServerSideProps(){
  const res = await axios.get("http://localhost:3000/api/wines");

  return {
    props:{
      data:res.data
    }
  }
}

export default function Home({data}) {
  return (
    <Layout>
      <div className="flex w-full justify-center">
      <div className="pt-32 flex-row flex justify-center flex-wrap w-[80%]">
        {data.map((wine) => <WineCard origin={wine.origin} type={wine.type} name={wine.name} key={wine.id} id={wine.id} />)}
      </div>
      </div>
    </Layout>
  );
}
