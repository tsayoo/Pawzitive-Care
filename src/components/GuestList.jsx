import { useState } from "react";

function GuestList() {
  const [guest, setGuest] = useState("");
  const [list, setlist] = useState([]);

  function tambah() {
    if (guest.trim() === "") return;
    setlist([...list, guest]);
    setGuest("");
  }

  function hapus(indexYangDihapus) {
    setlist(list.filter((_, index) => index !== indexYangDihapus));
  }

  function tekanTombol(e) {
    if (e.key === "Enter") tambah();
  } //Biar kalo klik enter, langsung bikin input kosong baru

  return (
    <div className="max-w-md mx-auto my-6 p-5 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">Data Anggota Pawzy Baru</h2>

      <div className="flex gap-2">
        <input
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
          onKeyDown={tekanTombol}
          placeholder="Tulis nama anabul kesayanganmu!"
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button
          onClick={tambah}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg"
        >
          Daftarkan
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 rounded-lg px-3 py-2"
          >
            <span>{item}</span>
            <button
              onClick={() => hapus(index)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestList;
