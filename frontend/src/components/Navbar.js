import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-center px-5 py-2 mx-12 my-5 border-b-2 pb-8">
      <ul className="flex justify-evenly w-full text-xl">
        
        <li><Link href = "/">Wines</Link></li>
        

        <li><Link href = "/create">Add listing</Link></li>

        <li>See your listings</li>
      </ul>
    </nav>
  );
}

export default Navbar;
