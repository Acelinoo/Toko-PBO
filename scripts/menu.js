// menu adalah variable yang berjeniskan objek yang berisikan properti yang berisi value

var menu = [
  //variable berjenis objek array
  {
    id: 1, // id itu properti dan 1 itu nilai atau value dari properti
    name: "Paket 1", //kalau belum ngerti jadi nama itu adalah properti sedangkan paket 1 itu nilai atau value
    desc: "Nasi Uduk + Sambel ijo + Ayam Penyet",
    price: 36000,
  },
  {
    id: 2,
    name: "Paket 1",
    desc: "Nasi Uduk + Sambel ijo + Ayam Penyet",
    price: 36000,
  },
  {
    id: 3,
    name: "Paket 1",
    desc: "Nasi Uduk + Sambel ijo + Ayam Penyet",
    price: 36000,
  },
  {
    id: 4,
    name: "Paket 1",
    desc: "Nasi Uduk + Sambel ijo + Ayam Penyet",
    price: 36000,
  },
];
const menuSection = document.querySelector(".menu-section"); //kita deklarasikan variable dengan nama menuSection lalu kita gunakan document.querySelector dengan isi (".menu-section") agar terhubung dengan class tersebut yang ada di HTML

let card = ``; //lalu kita deklarasikan lagi dengan nama card lalu kita kosongkan, karena akan diisi oleh function innerCardMenu

// map, maping, atau foreach untuk mengulangi data, map sama forEach sama aja
// perbedaan for sama map kalau for itu terbatas pengulanganya kalau map itu tidak terbatas

menu.map((data) => {
  card += innerCardMenu(data.name, data.id, data.desc, data.price);
  menuSection.innerHTML = card;
}); //jadi variable menu yang di atas, di maping/dilakukan pengulangan melalui setiap elemen dalam array dengan nama property data terus di setiap pengulangan variable card ini di perbarui nilai nya dengan hasil pemanggilan function innerCardMenu pada setiap pengulangan lalu jika pengulanganya selesai maka akan di jadikan HTML ke dalam deklarasi variable menuSection atau ke HTML yang class nya "menu-section" dan akan mengisi variable card juga

function innerCardMenu(name, id, desc, price) {
  return `<!-- card -->
	<div class="card">
		<button class="kategori" aria-readonly="true">Paket</button>
		<div class="container-content">
			<div>
				<img
					src="../assets/img/nasiuduk.png"
					alt=""
					class="produk-img"
				/>  
			</div>
			<div class="content">
				<p>${name}</p>
				<p>${desc}</p>
				<p>Rp.${price}</p>
				<div class="content2">
		<button class="pesan" id="pesan${id}">Pesan</button>
				
          
				</div>
			</div>
		</div>
	</div>`;
}

menu.map((data) => {
  const pesan = document.getElementById(`pesan${data.id}`);
  pesan.addEventListener("click", function () {
    const jumlah = prompt("Masukan jumlah pesanan");
    const total = data.price * jumlah; //hitung total cuma untuk item saat ini
    console.log(`total for ${data.name} : ${total}`);
    localStorage.setItem("total", total);
    window.location.href = "order.html";
  });
});
