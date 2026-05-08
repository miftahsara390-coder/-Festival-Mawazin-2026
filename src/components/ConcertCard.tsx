export default function ConcertCard() {
  return (
     <div className="absolute top-10 left-10 z-20">
    <div className="bg-yellow-300 text-black p-5 rounded-xl w-260px shadow-lg">
      <p className="text-sm font-semibold">concert du soir</p>

      <div className="flex gap-4 items-center mt-3">
        <img
          src="\src\assets\R.jpg"
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