

const WineCard = ({type,origin,name}) => {
    return (
        <div className="h-[28rem] w-[20rem] hover:shadow-2xl hover:scale-105 shadow-md rounded-xl py-8 px-5 m-5 flex justify-between flex-col duration-300">
            <div className="flex flex-row justify-between items-center h-[70%]">
            <img src="//images.vivino.com/thumbs/lx0_JwH9RmGcmeTE0ro7cg_pb_x600.png" className="scale-[.45]" />
            <div className="flex flex-col items-center">
            <h1>rating</h1>
            <h1 className="text-xs text-neutral-400">4035 reviews</h1>
            </div>
            </div>
            <div>
                <h2 className="text-neutral-500">{type}</h2>
                <h1 className="font-bold text-xl my-2">{name}</h1>
                <h2>{origin}</h2>
            </div>
        </div>
    );
}

export default WineCard;