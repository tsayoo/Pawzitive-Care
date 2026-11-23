import { useState } from "react";

function AddToCart() {
  const [tambah, setTambah] = useState(0);

  return (
    <div>
      <h2>Daftar Anggota Pawzy Baru</h2>
      <p>Jumlah: {tambah}</p>
      <button onClick={() => setTambah(tambah + 1)}>+</button>
      <button onClick={() => setTambah(tambah - 1)}>-</button>
    </div>
  );
}

export default AddToCart;
