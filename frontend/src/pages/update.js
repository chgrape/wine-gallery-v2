import Dropdown from "@/components/Dropdown";
import DropdownChoice from "@/components/DropdownChoice";
import Layout from "@/components/Layout";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

const update = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [type, setType] = useState("Choose Type");
  const [origin, setOrigin] = useState("Choose Origin");

  const handleTypeChange = (e) => {
    setType(e.target.textContent);
  }

  const handleOriginChange = (e) => {
    setOrigin(e.target.textContent);
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(name === "" || type === "Choose Type" || origin === "Choose Origin"){
        console.log("failed")
        return;
    }

    const res = await axios.put(`http://localhost:3000/api/wines?wineId=${searchParams.get('wineId')}`, {
        name,
        type,
        origin
    })
    router.push('/');
  }

  return (
    <Layout>
      <div className="pt-32 flex justify-center">
        <div className="w-[52rem] shadow-2xl rounded-xl h-[32rem] px-10 py-5">
          <form className="flex justify-between h-full flex-col" onSubmit={handleSubmit}>
            <div>
            <input
              className="w-full border-2 rounded-lg p-2 my-5 text-gray-400"
              type="text"
              placeholder="Wine Name"
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
            />
            <Dropdown name={type}>
              <DropdownChoice name="Red" handleChange={handleTypeChange} />
              <DropdownChoice name="White" handleChange={handleTypeChange} />
              <DropdownChoice name="Rose" handleChange={handleTypeChange} />
            </Dropdown>
            <Dropdown name={origin}>
                <DropdownChoice name="United States" handleChange={handleOriginChange} />
                <DropdownChoice name="Italy" handleChange={handleOriginChange} />
                <DropdownChoice name="Bulgaria" handleChange={handleOriginChange} />
            </Dropdown>
          </div>
          <div className="flex justify-end">
          <button type="submit" className="w-32 py-2 px-4 rounded-lg border-2 text-gray-400" >Edit</button>
          </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default update;
