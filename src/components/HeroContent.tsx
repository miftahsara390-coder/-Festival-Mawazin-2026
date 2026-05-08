export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2')",
      }}
    >
  
      <div className="absolute inset-0 bg-black/60"></div>

   
      <div className="relative z-10 flex justify-end items-start h-full pr-16 pt-20">
        <div className="text-right max-w-md text-white">
          <h1 className="text-5xl font-bold">
            MAWAZIN 2026
          </h1>

          <p className="text-yellow-400 font-semibold mt-2">
            RYTHMES DU MONDE
          </p>

          <p className="mt-4">📅 19-27 Juin 2026</p>
          <p>📍 Rabat, Maroc</p>

          <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
            Découvrir le festival
          </button>
        </div>
      </div>
    </div>
  );
}