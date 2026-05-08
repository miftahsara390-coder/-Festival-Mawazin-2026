export default function Herocentent() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2')",
      }}
    >

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 px-10 py-8 rounded-2xl shadow-2xl">
          
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide">
            MAWAZIN 2026
          </h1>

          <p className="text-yellow-300 font-semibold mt-3 text-xl tracking-widest">
            RYTHMES DU MONDE
          </p>

          <div className="mt-6 space-y-1 text-lg">
            <p>📅 19-27 Juin 2026</p>
            <p>📍 Rabat, Maroc</p>
          </div>

          <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition transform">
            Découvrir le festival
          </button>
        </div>
      </div>
    </div>
  );
}