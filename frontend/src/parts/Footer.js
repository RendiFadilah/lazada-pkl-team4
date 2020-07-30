import React from "react";
import Gambar1 from "../assets/images/gambar1.jpg";
import Gambar2 from "../assets/images/gambar2.png";
import Gambar3 from "../assets/images/gambar3.png";
import Gambar4 from "../assets/images/icon-app-store.png";
import Gambar5 from "../assets/images/icon-app-on.png";
import Gambar6 from "../assets/images/App-icon.png";
import Gambar7 from "../assets/images/logovisa.jpg";
import Gambar8 from "../assets/images/logocash.jpg";
import Gambar9 from "../assets/images/logolelex.png";
import Gambar10 from "../assets/images/logojnee.jpeg";
import Gambar11 from "../assets/images/logoninja.jpeg";
import Gambar12 from "../assets/images/logogosend.png";
import Gambar13 from "../assets/images/logosicpt.png";
import Gambar14 from "../assets/images/logograb.jpg";
import Gambar15 from "../assets/images/logomaster.png";
import Gambar16 from "../assets/images/logobsi.png";

export default function Footer() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-4">
            <img src={Gambar1} style={{ width: 370 }} alt="" />
          </div>
          <div class="col-4">
            <img src={Gambar2} style={{ width: 370 }} alt="" />
          </div>
          <div class="col-4">
            <img src={Gambar3} style={{ width: 370 }} alt="" />
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row row-cols-4">
          <div class="col">
            <h5
              class=" mt-3 mb-4 font-weight-normal"
              style={{ fontSize: 16, color: "#0f136d" }}
            >
              Layanan Pelanggan
            </h5>
            <ul class="list-unstyled">
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Cara Pembelian
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Pengiriman
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Kebijakan Produk Internasional
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Cara Pengembalian
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                    background: "#f57224",
                  }}
                >
                  Ada Pertanyaan? Hubungi kami di live chat (24 jam)
                </a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h5
              class=" mt-3 mb-4 font-weight-normal "
              style={{ fontSize: 16, color: "#0f136d" }}
            >
              Jelajahi Lazada
            </h5>
            <ul class="list-unstyled">
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Tentang Lazada
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Affililate Program
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Karir
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Syarat & Kentetuan
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Press & Media
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Jual Di Lazada
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Lazada Security
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    fontSize: 11,
                    color: "#152c58",
                    fontWeight: "lighter",
                  }}
                >
                  Intellectual Property Protection
                </a>
              </li>
            </ul>
          </div>
          <div class="col">
            <div className="wrapper-footer d-flex align-self-center mt-5">
              <div className="wrapper-image">
                <img src={Gambar6} style={{ width: 50 }} alt="" />
              </div>
              <div className="wrapper-tulisan ml-3">
                <span style={{ color: "#f57224" }}>
                  Go where your heart beats
                </span>
                <br></br>
                <span>Downlaod the App</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div className=" d-flex mt-5   ">
              <img src={Gambar4} style={{ width: 150 }} alt="" />
              <img src={Gambar5} style={{ width: 150 }} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container ">
          <div className="row">
            <div class="col mt-4">
              Metode Pembayaran
              <div className="image mt-4">
                <img
                  className="mr-3"
                  src={Gambar7}
                  style={{ width: 80 }}
                  alt=""
                />
                <img
                  className="mr-3"
                  src={Gambar15}
                  style={{ width: 80 }}
                  alt=""
                />
                <img
                  className="mr-3"
                  src={Gambar8}
                  style={{ width: 80 }}
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-auto mt-4">
              Jasa Pengiriman
              <div className="image mt-4">
                <img
                  className="mr-3"
                  src={Gambar9}
                  style={{ width: 80 }}
                  alt=""
                />
                <img
                  className="mr-3"
                  src={Gambar10}
                  style={{ width: 80 }}
                  alt=""
                />
                <img
                  className="mr-3"
                  src={Gambar11}
                  style={{ width: 80 }}
                  alt=""
                />
                <br />
                <img
                  className="mr-3"
                  src={Gambar12}
                  style={{ width: 80 }}
                  alt=""
                />
                <img
                  className="mr-3"
                  src={Gambar13}
                  style={{ width: 80 }}
                  alt=""
                />
                <img
                  className="mr-3"
                  src={Gambar14}
                  style={{ width: 80 }}
                  alt=""
                />
              </div>
            </div>
            <div class="col col-lg-2 mt-4">
              Verified by
              <div className="image mt-4">
                <img
                  className="mr-3"
                  src={Gambar16}
                  style={{ width: 120 }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-4">
          <div class="col" style={{ fontSize: 12, color: "#888" }}>
            <h5
              class=" mt-3 mb-4 font-weight-normal"
              style={{ fontSize: 18, color: "#888" }}
            >
              Online Shopping Mall Terkemuka di Indonesia
            </h5>
            Lazada adalah perintis e-commerce (online shopping) di beberapa
            negara dengan pertumbuhan tercepat di dunia yang menawarkan
            pengalaman belanja online cepat, aman dan nyaman dengan
            produk-produk dalam kategori mulai dari fashion, peralatan
            elektronik, peralatan rumah tangga, mainan anak-anak dan peralatan
            olahraga. Lazada selalu berjuang untuk memberikan pelanggan yang
            terbaik termasuk dengan menawarkan beberapa metode pembayaran,
            pengembalian gratis, layanan konsumen yang baik dan garansi
            komitmen. Sebagai situs belanja online terbaik di Indonesia,
            Lazada.co.id selalu menyediakan deretan produk tak terhitung
            jumlahnya yang selalu di update tiap hari. Kami selalu memastikan
            bahwa anda mendapatkan penawaran terbaru dan terbaik lewat
            promo-promo kami.
            <div className="mt=3">
              Situs Jual Beli Online Terbaik dan Terpercaya Kami terus
              memperluas jangkauan produk kami seperti kategori Fashion dan Jam
              Tangan. Kami menawarkan pilihan kualitas produk terbaik yang akan
              Anda temukan semua pada ujung jari Anda. Belanja online di
              Indonesia tidak pernah semudah ini! Tetap terhubung dan dapatkan
              penawaran terbaru dan transaksi setiap harinya. Ingat, setiap hari
              adalah hari belanja di Lazada. Lebih dari sekedar salah satu toko
              online e-commerce di Indonesia, Lazada.co.id adalah prioritas
              tertinggi kami untuk menciptakan pengalaman belanja online terbaik
              untuk setiap pelanggan di Indonesia. Jadi mulai belanja online dan
              jika Anda punya pertanyaan silakan telepon atau email kami. Selain
              menyediakan pengalaman beli online yang lengkap dan mudah bagi
            </div>
          </div>
          <div class="col mt-3" style={{ fontSize: 12, color: "#888" }}>
            konsumen, lazada.co.id juga memastikan kepuasan seller untuk jual
            online produk mereka dengan berbagai dukungan yang maksimal.
            Sehingga sinergi antara pelanggan dan seller menciptakan budaya jual
            beli online terbaik di Indonesia!menciptakan pengalaman belanja
            online terbaik untuk setiap pelanggan di Indonesia. Jadi mulai
            belanja online dan jika Anda punya pertanyaan silakan telepon atau
            email kami. Selain menyediakan pengalaman beli online yang lengkap
            dan mudah bagi konsumen, lazada.co.id juga memastikan kepuasan
            seller untuk jual online produk mereka dengan berbagai dukungan yang
            maksimal. Sehingga sinergi antara pelanggan dan seller menciptakan
            budaya jual beli online terbaik di Indonesia! Belanja Online Lebih
            Mudah, Murah, Gak Pake Ribet Sesuai dengan tagline kami "Effortless
            Shopping" / "Belanja gak pake ribet" Lazada Indonesia (lazada.co.id)
            menawarkan solusi untuk masyarakat Indonesia dapat menikmati
            berbagai kemudahan dalam berbelanja online dengan menyediakan
            website yang mudah digunakan dan sistem pembayaran online yang
            lengkap. Kami menjamin kenyamanan anda ketika anda browsing produk
            yang sedang dicari dan juga menjamin opsi pembayaran yang aman.
            Pilihan pembayaran kami termasuk kartu kredit, cash on delivery,
            Bank transfer, Mobile banking dan bahkan melalui berbagai layanan
            pembayaran online. Dan jika Anda ingin membawa keranjang belanja
            Anda di manapun Anda pergi, Lazada App ada untuk membantu Anda
            menelusuri Lazada, membeli barang-barang dan tetap update dengan
            promo terbaru kami. Bahkan, pada aplikasi Lazada,kami memiliki promo
            sendiri yang berbeda dari lazada versi desktop.
          </div>
          <div class="col" style={{ fontSize: 12, color: "#888" }}>
            <h5
              class=" mt-3 mb-4 font-weight-normal"
              style={{ fontSize: 18, color: "#888" }}
            >
              {" "}
              TOP CATEGORIES & BRANDS
            </h5>
            <div className="mb-3">
              <h5 style={{ fontSize: 13, color: "#888" }}>
                AUTOMOTIVE & GADGETS
              </h5>
              Yamaha , OEM , Honda , Vespa , Axio , Kyoto , Pioneer , Kawasaki ,
              Toyota , more...
            </div>
            <div>
              BABY & TODDLER MamyPoko , Merries , PAMPERS , Wyeth S26 , Bebelac
              , Popok , Susu Formula , Enfagrow , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 13, color: "#888" }}>CAMERAS</h5>
              Xiaomi , Kogan , Nikon , Canon , Samsung , Fujifilm , Olympus ,
              GoPro , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 13, color: "#888" }}>
                COMPUTERS & LAPTOPS
              </h5>
              ASUS , Lenovo , HP , WD , Acer , Apple , Logitech , Intel , Gaming
              PC , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 13, color: "#888" }}>FASHION</h5>
              OEM , levi's , Macbeth , Zada , Alibi Paris , Converse , Puma ,
              Fossil , New Balance , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 13, color: "#888" }}>GROCERIES</h5>
              Zippo , Ovomaltine , Jelly Belly , Ohome , Naraya , Snack Import ,
              Indomie , Samyang , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 13, color: "#888" }}>HEALTH & BEAUTY</h5>
              SK-II , Moment , Herbalife , Dermawand , Philips , L'Oreal , NYX ,
              Maybelline , Nivea , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 13, color: "#888" }}>HOME & LIVING</h5>
              Vicenza , OEM , Oxone , Calista , AIUEO , BOSCH , Terry Palmer ,
              Maxim , more...
            </div>
          </div>
          <div class="col mt-3" style={{ fontSize: 12, color: "#888" }}>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>
                MEDIA, MUSIC & BOOKS
              </h5>
              Yamaha , OEM , Digital Al-Quran , Nektar , Casio , Sony Music ,
              Universal Music , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>MOBILES & TABLETS</h5>
              Samsung , Xiaomi , Infinix , Lenovo , ASUS , Apple , HTC ,
              Blackberry , Sony , Oppo , Apple iPhone 7 , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>SPORTS & OUTDOORS</h5>
              OEM , Nike , Adidas , BFIT , Reebok , Coleman , Puma , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>TOYS & GAMES</h5>
              LEGO , OEM , Syma , Tomindo , Bandai , Hot Wheels , Tomica ,
              Pokemon , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>TRAVEL & LUGGAGE</h5>
              Polo Team , Navy Club , Onlan , OEM , BGC , Herschel , American
              Tourister , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>
                TV, AUDIO / VIDEO, GAMING, GADGETS
              </h5>
              Samsung , Sony , LG , Xiaomi , I-one , Panduan Membeli TV ,
              more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>
                VOUCHERS AND SERVICES
              </h5>
              Isi Ulang Pulsa , Indosat , PLN , Telkomsel , Apple , XL , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>
                WATCHES SUNGLASSES JEWELLERY
              </h5>
              Swiss Army , Casio , OEM , Blue lans , Alexandre Christie ,
              more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>HOME APPLIANCES</h5>
              Philips , Sharp , Panasonic , Miyako , Samsung , LG , Nescafe ,
              Cosmos , more...
            </div>
            <div className="mb-3">
              <h5 style={{ fontSize: 12, color: "#888" }}>PROMO SPESIAL</h5>
              Koleksi TaoBao , #BelanjaDariRumah Kebutuhan Kesehatan & Harian ,
              Lazada Ramadan Sale #BerkahAdaDirumah , Mid Year Super Sale 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
