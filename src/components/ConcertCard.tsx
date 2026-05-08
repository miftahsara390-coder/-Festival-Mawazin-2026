import rImage from "../assets/R.jpg";

export default function ConcertCard() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
      <div className="bg-white/10 backdrop-blur-md text-white p-5 rounded-2xl w-260px shadow-lg">
        
        <p className="text-sm font-semibold text-yellow-300">
          Concert du soir
        </p>

        <div className="flex gap-4 items-center mt-3">
          <img
            src={rImage}
            className="w-16 h-16 rounded-md object-cover"
          />

          <div>
            <h3 className="font-bold">Maluma</h3>
            <p className="text-sm">OLM Souissi</p>
            <p className="text-sm">22:00</p>
            <p className="text-xs">RAP</p>
          </div>
        </div>

      </div>
    </div>
  );
}