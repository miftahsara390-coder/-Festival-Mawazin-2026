export default function MonPassport() {
  const user = {
    name: "Sara",
    ticket: "VIP PASS",
    festival: "Festival mawazin 2026",
    qr: "FEST-92837",
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-linear-to-br from-pink-600 to-purple-700 
                      rounded-3xl p-8 w-full max-w-md text-white shadow-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Mon Passport
        </h1>

        <div className="space-y-4">
          <div>
            <p className="text-gray-200">Nom</p>
            <h2 className="text-2xl font-semibold">
              {user.name}
            </h2>
          </div>

          <div>
            <p className="text-gray-200">Festival</p>
            <h2 className="text-xl">
              {user.festival}
            </h2>
          </div>

          <div>
            <p className="text-gray-200">Type de ticket</p>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
              {user.ticket}
            </span>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl text-center mt-6">
            <p className="font-bold text-lg">
              QR CODE
            </p>

            <div className="mt-4 bg-black text-white p-4 rounded-xl">
              {user.qr}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}