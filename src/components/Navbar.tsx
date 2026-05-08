export default function Navbar() {
  const links = ["Accueil", "Programme", "Mon Planning", "Mon Passeport"];

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold">MAWAZIN</h2>

      <div className="flex gap-6 text-sm">
        {links.map((link) => (
          <a key={link} href="#" className="hover:text-yellow-400">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
