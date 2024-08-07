//?HARCAMA FORMU
const tarihInput = document.querySelector("#date");
const miktarInput = document.querySelector("#price");
const harcamaAlani = document.querySelector("#priceArea");
const harcamaFormu = document.querySelector("#harcamaFormu");

//?GELİR FORMU
const gelirInput = document.querySelector("#gelir");
const gelirBtn = document.querySelector(".btn-primary");

//? TABLO ALANI
const infoTable = document.querySelector(".infoTable");

//? BUTONLAR
const tumunuTemizle = document.querySelector(".btn-dark");

//İLK OLARAK BOŞ LİSTE AÇILACAK VE GELİR İÇİN BİR TOPLAMA İNTEGERI OLUŞTURULACAK

let harcamaListesi = [];
let tumGelirler = 0;

//? Locale storage kullanılacağı için butonlar submit edicek

harcamaFormu.addEventListener("submit", harcamalar);

function harcamalar(e) {
  e.preventDefault();

  const harcamalarim = {
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    alan: harcamaAlani.value,
    id: new Date().getTime(),
  };
  harcamaListesi.push(harcamalarim);
  harcamaEkrani(harcamalarim);
}

function harcamaEkrani({ id, miktar, alan, tarih }) {
  infoTable.innerHTML += `
<tr>
<td>${tarih} </td>
<td>${alan}</td>
<td>${miktar} </td>
<td> <i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i>  </td>
</tr>
`;
}
