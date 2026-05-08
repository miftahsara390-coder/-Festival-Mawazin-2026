export default function MonPlanning() {
  const myEvents = [
    {
      id: 1,
      title: "Concert Opening",
      time: "18:00",
      date: "12 July 2026",
    },
    {
      id: 2,
      title: "Dance Show",
      time: "21:00",
      date: "13 July 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-black to-gray-900 text-white px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12">
       Mon Planning
      </h1>

      {myEvents.length === 0 ? (
        <p className="text-center text-gray-400">
          No events added yet
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {myEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-6
                         hover:border-cyan-500 hover:scale-[1.02] transition duration-300 shadow-lg"
            >
        
              <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                {event.title}
              </h2>

         
              <p className="text-gray-400 mt-3">
              <span className="text-gray-200">{event.date}</span>
              </p>

            
              <div className="mt-3 inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">
                ⏰ {event.time}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}