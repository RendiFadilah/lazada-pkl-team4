import React, { useState, useEffect } from "react";
import Button from "../../elements/Button/index";
import Rating from "../../assets/images/ic_star.png";
import IconLokasi from "../../assets/images/location.png";
import IconPengiriman from "../../assets/images/send.png";
import IconPembayaran from "../../assets/images/purchase.png";
import IconVerified from "../../assets/images/ic_verified.png";
import IconBlock from "../../assets/images/block.png";
import Barcode from "../../assets/images/barcode.png";
import LazadaLogo from "../../assets/images/lazada-logo.png";
import axios from "axios";


export default function Details(props) {

  const [itemDetails, setItemDetails] = useState([]);

  useEffect(()=>{
    let urlId = props.match.params.id;
    axios.get(`http://localhost:3001/v1/api/lazada/dp/${urlId}`).then((response)=>{
     setItemDetails(response.data)
    })
  })


  return (
    
    <>
      <div className="container">
        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
              <Button type="link" href="">
                <li
                  className="breadcrumb-item mx-2 align-self-center"
                  style={{ fontSize: 14 }}
                >
                  Audio
                </li>
              </Button>
              <span style={{ fontSize: 16 }}> > </span>
              <Button type="link" href="">
                <li
                  className="breadcrumb-item mx-2 align-self-center"
                  style={{ fontSize: 14 }}
                >
                  Aksesoris Home Audio
                </li>
              </Button>
              <span style={{ fontSize: 16 }}> > </span>
              <Button type="link" href="">
                <li
                  className="breadcrumb-item mx-2 align-self-center"
                  style={{ fontSize: 14 }}
                >
                  Kabel Home Audio
                </li>
              </Button>
              <span style={{ fontSize: 16 }}> > </span>
              <Button type="link" href="">
                <li
                  className="breadcrumb-item mx-2 align-self-center active"
                  style={{ fontSize: 14 }}
                >
                  {itemDetails.name}
            
                </li>
              </Button>
            </ol>
          </nav>
        </div>
      </div>

      <section className="container bg-white" style={{ minHeight: 820 }}>
        <div className="wrapper-details">
          <div className="row">
            <div className="col-4 p-3">
              <img src={itemDetails.image} style={{ width: 350 }} alt="" />
            </div>
            <div className="col-5 p-3">
              <span
                style={{ fontFamily: "", fontWeight: "bold", fontSize: 16 }}
              >
                   {itemDetails.name}
              </span>

              <div className="rating mt-3">
                <img src={Rating} style={{ width: 70 }} alt="" />
                <Button
                  type="link"
                  className="ml-2"
                  style={{ fontSize: 12, color: "#3595BE" }}
                >
                  {itemDetails.rating} Penilaian
                </Button>

                <span style={{ color: "#B4B4B4" }}> | </span>

                <Button
                  type="link"
                  className=""
                  style={{ fontSize: 12, color: "#3595BE" }}
                >
                  10 Pertanyaan yang dijawab
                </Button>
              </div>

              <div className="brand mt-1">
                <span
                  style={{
                    fontSize: 13,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "lighter",
                    color: "#C4C4C4",
                  }}
                >
                  Merek:{" "}
                  <Button type="link" style={{ color: "#3595BE" }}>
                    {itemDetails.brand}
                  </Button>
                </span>

                <span style={{ color: "#B4B4B4" }}> | </span>

                <Button type="link" style={{ fontSize: 13, color: "#3595BE" }}>
                  Lebih banyak Aksesoris Home Audio dari INBEX
                </Button>
              </div>

              <hr style={{ wdith: 500 }}></hr>

              <div className="price">
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: "medium",
                    color: "#F37323",
                  }}
                >
                  {itemDetails.price}
                </span>
                <div className="sale">
                  <span
                    style={{
                      fontSize: 14,
                      color: "#B6B6B6",
                      textDecoration: "line-through",
                    }}
                  >
                    {itemDetails.sale}
                  </span>
                  <span style={{ fontSize: 14 }} className="ml-1">
                    {itemDetails.discount}
                  </span>
                </div>
              </div>

              <div className="promotion mt-3">
                <span style={{ fontSize: 14, color: "#878787" }}>Promosi</span>
                <span
                  className="ml-5"
                  style={{
                    fontSize: 14,
                    width: 50,
                    color: "#ffffff",
                    padding: "3px",
                    margin: 5,
                    background: "#F57224",
                  }}
                >
                  Beli 3, Diskon 4% ; Beli 5, Diskon 6%
                </span>
              </div>

              <div className="quantity mt-4">
                <span
                  style={{ fontSize: 14, color: "#878787", marginTop: -50 }}
                >
                  Kuantitas
                </span>
                <span
                  className="ml-5"
                  style={{
                    paddingRight: 15,
                    paddingLeft: 15,
                    paddingBottom: 5,
                    alignItems: "center",
                    fontSize: 28,
                    background: "#FAFAFA",
                  }}
                >
                  -
                </span>

                <input
                  className="ml-2 border-0 align-self-center align-items-center"
                  type="number"
                  value="1"
                  style={{ width: 40, textAlign: "center" }}
                />
                <span
                  className="ml-2"
                  style={{
                    paddingRight: 15,
                    paddingLeft: 15,
                    paddingBottom: 5,
                    alignItems: "center",
                    fontSize: 28,
                    background: "#FAFAFA",
                  }}
                >
                  +
                </span>
              </div>

              <div className="btn-buynow mt-3 d-flex">
                <Button
                  className="btn btn-custom"
                  style={{
                    width: 280,
                    color: "#FFFFFF",
                    background: "#FFB916",
                    borderRadius: 2,
                    padding: 10,
                  }}
                >
                  Beli Sekarang
                </Button>
                <Button
                  className="btn btn-custom ml-3"
                  style={{
                    width: 280,
                    color: "#FFFFFF",
                    background: "#F57224",
                    borderRadius: 2,
                    padding: 10,
                  }}
                >
                  Tambah ke Troli
                </Button>
              </div>
            </div>
            <div className="col" style={{ background: "#FAFAFA", height: 800 }}>
              <div className="wrapper-top-right">
              <div className="wrapper-right mt-3">
                <span
                  style={{ fontSize: 12, color: "#878787", fontWeight: "bold" }}
                >
                  Pilihan Pengiriman
                </span>

                <div className="lokasi d-flex">
                  <div className="image mt-1">
                    <img src={IconLokasi} style={{ width: 20 }} alt="" />
                  </div>
                  <div
                    className="wrapper-right align-self-center"
                    style={{ lineHeight: 1 }}
                  >
                    <span
                      className="ml-2"
                      style={{
                        fontSize: 12,
                        fontWeight: "normal",
                        textAlign: "justify",
                      }}
                    >
                      DKI Jakarta, Kota Jakarta<br></br>
                      <div className="ml-2">Barat, Cengkareng</div>
                    </span>
                  </div>
                  <div className="change ml-auto mt-2">
                    <Button
                      type="link"
                      style={{
                        fontSize: 14,
                        color: "#3595BE",
                        textDecoration: "none",
                      }}
                    >
                      UBAH
                    </Button>
                  </div>
                </div>

                <hr></hr>

                <div className="delivery">
                  <img src={IconPengiriman} style={{ width: 20 }} alt="" />
                  <span className="ml-2" style={{ fontSize: 12 }}>
                    Standar
                  </span>
                  <div className="" style={{ lineHeight: 1 }}>
                    <span
                      style={{ fontSize: 12, marginLeft: 30, color: "#878787" }}
                    >
                      3 - 8 hari
                    </span>
                    <span
                      style={{
                        marginLeft: 110,
                        fontWeight: "normal",
                        fontSize: 14,
                      }}
                    >
                      Rp 6.100
                    </span>
                  </div>

                  <div
                    className="box shadow-sm p-2 mt-3 ml-4"
                    style={{
                      width: 230,
                      border: "none",
                      borderRadius: 3,
                      background: "#ffffff",
                      lineHeight: 1,
                    }}
                  >
                    <span style={{ fontSize: 12 }}>
                      Nikmati promosi gratis ongkir dengan<br></br>
                      minimal belanja 3 item
                    </span>
                  </div>
                </div>
                <div className="pay mt-4">
                  <img src={IconPembayaran} style={{ width: 25 }} alt="" />
                  <span style={{ fontSize: 14 }} className="ml-2">
                    Bayar ditempat berlaku
                  </span>
                </div>
                <hr />
                <div className="garansi mt-3">
                  <span
                    style={{
                      fontSize: 12,
                      color: "#878787",
                      fontWeight: "bold",
                    }}
                  >
                    Pengembalian & Garansi
                  </span>

                  <div className="content">
                    <div className="content-1">
                      <img src={IconVerified} style={{ width: 25 }} alt="" />
                      <span className="ml-2" style={{ fontSize: 14 }}>
                        100% Original
                      </span>
                    </div>
                    <div className="content-2 mt-3" style={{ lineHeight: 1 }}>
                      <img src={IconVerified} style={{ width: 25 }} alt="" />
                      <span className="ml-2" style={{ fontSize: 14 }}>
                        7 hari pengembalian barang
                      </span>
                      <div
                        className=""
                        style={{
                          fontSize: 12,
                          color: "#878787",
                          marginLeft: 33,
                        }}
                      >
                        Berubah pikiran tidak diperbolehkan
                      </div>
                    </div>
                    <div className="content-3 mt-3">
                      <img src={IconBlock} style={{ width: 25 }} alt="" />
                      <span className="ml-2" style={{ fontSize: 14 }}>
                        Tidak ada garansi
                      </span>
                    </div>

                    <hr />
                    <div className="content-4 mt-2">
                      <div className="img d-flex">
                        <img src={Barcode} alt="" />

                        <div
                          className="ml-2 shadow-lg p-2"
                          style={{
                            width: 130,
                            border: 1,
                            borderRadius: 5,
                            background: "#ffffff",
                          }}
                        >
                          <img
                            src={LazadaLogo}
                            style={{ width: 45 }}
                            className="p-1"
                            alt=""
                          />
                          <div
                            className="text"
                            style={{
                              fontSize: 10,
                              color: "#C4C4C4",
                              lineHeight: 1.3,
                            }}
                          >
                            Dapatkan voucher gratis<br></br>
                            ongkir Rp 20ribu khusus<br></br>
                            app
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>

                  <div className="shop">
                    <span style={{fontSize: 12, color: "#878787"}}>Dijual oleh</span>
                    <div style={{fontSize: 14}}>
                      INBEX
                    </div>

                    <div className="data-toko border-top border-right border-bottom mt-3 mb-3">
                      <div className="content-toko d-flex pb-2">
                        <div className="ml-2">
                        <div className="penilaian" style={{width: 60, lineHeight: 1}}>
                          <span style={{fontSize: 11, color: "#878787"}}>Penilaian Positif Seller</span>
                            <div style={{fontSize: 24, marginTop: 20}}>
                              94%
                            </div>
                            </div>
                        </div>
                        <div className="pengiriman ml-4 border-left" style={{width: 65, lineHeight: 1}}>
                          <div className="ml-1">

                          <span style={{fontSize: 11, color: "#878787"}}>Pengiriman tepat waktu</span>
                            <div style={{fontSize: 24, marginTop: 20}}>
                              94%
                            </div>
                          </div>
                        </div>
                        <div className="respon ml-4 border-left" style={{width: 65, lineHeight: 1}}>
                          <div className="ml-1">

                          <span style={{fontSize: 11, color: "#878787"}}>Tingkat respon chat</span>
                            <div style={{fontSize: 24, marginTop: 20}}>
                              94%
                            </div>
                          </div>
                      
                        </div>

                       
                      </div>
                    </div>
                      <Button type="link" className="p-4" style={{fontsize: 12, marginLeft: 50, color: "#3595BE"}} href="">
                            KUNJUNGI TOKO
                        </Button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
   
   
      <div className="container">
      <div className="text-titlle d-flex align-items-center mt-3 p-3" style={{background: "#FAFAFA"}}>
        <span style={{fontSize: 14, background:"#F57224", color: "#FFFFFF"}}>Flexi Combo</span>
        <Button type="link" className="ml-auto">
          <span className="" style={{color: "#3595BE", fontSize: 14}}>LIHAT SEMUA</span>
        </Button>
      </div>

      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-6 justify-content-center">

      </div>
      </div>
    </>
  );
}
