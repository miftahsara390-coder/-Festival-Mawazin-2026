export default function Programme() {
  const myEvents = [
    {
      id: 1,
      title: "Concert d'Ouverture",
      artist: "ElGrandeToto",
      time: "18:00",
      date: "12 Juillet 2026",
      artistImg:
        "https://th.bing.com/th/id/OIP.lXd7DWBfFQrtqeS-KGbaiQHaEV?w=305&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 2,
      title: "Soirée Fusion",
      artist: "Manal",
      time: "21:00",
      date: "13 Juillet 2026",
      artistImg:"https://th.bing.com/th/id/OIP.IyOdwuLgxigckAF9Ni0iWQHaHa?w=169&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        
    },
    {
      id: 3,
      title: "Clôture Festival",
      artist: "Saad Lamjarred",
      time: "23:30",
      date: "14 Juillet 2026",
      artistImg:
        "https://th.bing.com/th/id/OIP.orj_0T6HzK0VvcPyf6nYvgHaE8?w=304&h=203&c=7&r=0&o=7&pid=1.7&rm=3https://upload.wikimedia.org/wikipedia/commons/2/2b/Saad_Lamjarred_2019.jpg",
    },
    {
      id: 4,
      title: "Rap Night",
      artist: "Draganov",
      time: "20:00",
      date: "15 Juillet 2026",
      artistImg:
      "https://yt3.googleusercontent.com/dOHHysrULmbSW_MSb3n1nZJcyDHAAjeXZQcm6cqf0Viz23vgkOC2t7FiqDTozyX0YBgd9z6Pme0=s900-c-k-c0x00ffffff-no-rj"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
  <h1 className="text-5xl font-extrabold text-center mb-14 bg-linear-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
  🎵 Programme
   </h1>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {myEvents.map((event) => (
  <div
   key={event.id}
   className="bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-800"
      >
   <div className="flex justify-center -mt-12">
     <img
      src={event.artistImg}
        alt={event.artist}
      className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500 shadow-lg"
   />
     </div>
      <div className="text-center mt-4">
    <h2 className="text-2xl font-bold">
      {event.title}
      </h2>
 <p className="text-pink-400 text-lg font-semibold mt-2">
    🎤 {event.artist}
     </p>
    <p className="text-gray-400 mt-4">
     📅 {event.date}
        </p>
         <div className="mt-4 inline-block bg-cyan-500 px-4 py-2 rounded-full text-sm font-bold">
           ⏰ {event.time}
        </div>
    </div>
    </div>
      ))}
      </div>
    </div>
  );
}