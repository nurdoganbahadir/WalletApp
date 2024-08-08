//?HARCAMA FORMU
const tarihInput = document.querySelector("#date");
const miktarInput = document.querySelector("#price");
const harcamaAlani = document.querySelector("#priceArea");
const harcamaFormu = document.querySelector("#harcamaFormu");

//?GELİR FORMU
const gelirInput = document.querySelector("#gelir");
const gelirFormu = document.querySelector("#gelirFormu");

//? TABLO ALANI
const infoTable = document.querySelector(".infoTable");

//? BUTONLAR
const tumunuTemizle = document.querySelector(".btn-dark");

//?SONUÇ TABLOSU
const geliriniz = document.querySelector("#geliriniz");
const gideriniz = document.querySelector("#gideriniz");
const kalan = document.querySelector("#kalan");

//İLK OLARAK BOŞ LİSTE AÇILACAK VE GELİR İÇİN BİR TOPLAMA İNTEGERI OLUŞTURULACAK

let harcamaListesi = [];
let tumGelirler = 0;

//? Locale storage kullanılacağı için butonlar submit edicek
//*HARCAMALAR KISMI
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
  harcamaFormu.reset();
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

  //*SİLME KISMI
  document.querySelectorAll(".fa-trash-can").forEach((sil) => {
    sil.onclick = () => {
      sil.parentElement.parentElement.remove();
    };
  });

  resultTable();
}

//? GELİR KISMI
gelirFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  tumGelirler += Number(gelirInput.value);
  geliriniz.textContent = tumGelirler;
  gelirFormu.reset();
  resultTable();
});

//?SONUÇ TABLOSU KISMI

const resultTable = () => {
  const tumGiderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );
  gideriniz.textContent = tumGiderler;
  kalan.textContent = tumGelirler - tumGiderler;
};

//?TUMUNU TEMİZLE BUTONU

tumunuTemizle.addEventListener("click", allReset);

function allReset(e) {
  harcamaListesi = [];
  tumGelirler = 0;
  resultTable();
  infoTable.innerHTML = "";
}
