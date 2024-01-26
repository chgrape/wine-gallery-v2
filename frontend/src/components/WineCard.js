import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";


const WineCard = ({type,origin,name,id}) => {

    const router = useRouter();

    const handleDelete = (e) =>{
        e.preventDefault();
        const res = axios.delete(`http://localhost:3000/api/wines?wineId=${id}`);

        router.push('/')
    }

    return (
        <div className="h-[28rem] w-[20rem] hover:shadow-2xl hover:scale-105 shadow-md rounded-xl py-8 px-5 m-5 flex justify-between flex-col duration-300">
            <div className="flex flex-row justify-between items-center h-[70%]">
            <Image priority="true" loading="eager" src="https://assets-global.website-files.com/642d682a6e4ca0d303c81fdf/6514570a63abffdbbd1cb788_ezgif.com-webp-maker%20-%202023-09-27T192331.781.webp" width={150} height={150} alt="Wine Image" />
            <div className="flex flex-col items-center">
            <h1>rating</h1>
            <h1 className="text-xs text-neutral-400">4035 reviews</h1>
            </div>
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <h2 className="text-neutral-500">{type}</h2>
                    <h1 className="font-bold text-xl my-2">{name}</h1>
                    <h2>{origin}</h2>
                </div>
                <button onClick={handleDelete} className="px-4 py-2 border-2 rounded-lg">Delete</button>
            </div>
        </div>
    );
}

export default WineCard;