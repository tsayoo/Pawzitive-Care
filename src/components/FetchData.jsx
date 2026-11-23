import { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]); // ngambil data dri dummy data di public/pawzy.json
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // pesan kalau gagal
  const [tampil, setTampil] = useState(false); // false buat nyembunyiin data

  useEffect(() => {
    fetch("/Pawzy.json")
      .then((res) => res.json()) // ubah respons mentah jadi data JavaScript
      .then((hasil) => {
        setData(hasil);
        setLoading(false); //matiin loading, kalo ga diberhenttin bakal berhenti di "mencari data"
      })
      .catch(() => {
        setError("Gagal mengambil data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-md mx-auto my-6 p-5 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">Teman-teman Pawzy</h2>

      <button
        onClick={() => setTampil(!tampil)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        {tampil ? "Sembunyikan" : "Tampilkan teman teman Pawzy"}
      </button>

      {tampil && loading && <p className="mt-4">Memuat data...</p>}
      {tampil && error && <p className="mt-4 text-red-500">{error}</p>}

      {tampil && !loading && !error && (
        <ul className="mt-4 space-y-2">
          {data.map((item) => (
            <li key={item.id} className="bg-gray-100 rounded-lg px-3 py-2">
              <p className="font-semibold">
                {item.anabul} <span className="text-sm">({item.jenis})</span>
              </p>
              <p className="text-sm text-gray-600">Pawrent: {item.pawrent}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchData;
