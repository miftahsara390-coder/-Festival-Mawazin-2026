export default function Programme() {
  const events = [
    {
      id: 1,
      title: "Opening Ceremony",
      artist: "DJ Hamza",
      time: "18:00",
      place: "Main Stage",
    },
    {
      id: 2,
      title: "Live Concert",
      artist: "Sara Music",
      time: "20:00",
      place: "Stage B",
    },
    {
      id: 3,
      title: "Closing Show",
      artist: "Fire Team",
      time: "23:00",
      place: "Outdoor Arena",
    },
  ];

  return (
 <div className="min-h-screen bg-linear-to-b from-black to-gray-900 text-white px-6 py-12">
 <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wide">
 🎶 Festival Programme
</h1>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
 {events.map((event) => (
  <div
  key={event.id}
  className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-6 shadow-lg 
   hover:scale-105 hover:border-pink-500 transition duration-300"
>
<h2 className="text-xl font-bold group-hover:text-pink-400 transition">
  {event.title}
    </h2>

          
 <p className="text-gray-300 mt-3">
  🎤 <span className="font-medium">{event.artist}</span>
 </p>
 <div className="mt-3 inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
 ⏰ {event.time}
 </div>
 <p className="text-gray-400 mt-3">  📍 {event.place}
</p>
   </div>
 ))}
      </div>
    </div>
  );
}