import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black text-white p-4">
      <h2 className="text-xl font-bold">
        MAWAZIN
      </h2>

      <div className="flex gap-6 text-sm">
        <Link to="/" className="hover:text-yellow-400">
          Accueil
        </Link>

        <Link to="/programme" className="hover:text-yellow-400">
          Programme
        </Link>

        <Link to="/planning" className="hover:text-yellow-400">
          Mon Planning
        </Link>

        <Link to="/passport" className="hover:text-yellow-400">
          Mon Passeport
        </Link>
      </div>
    </div>
  );
}
