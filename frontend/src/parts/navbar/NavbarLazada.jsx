import React from 'react'
import LogoLazada from "../../assets/images/logo-lazada.png";
import IconCart from "../../assets/images/icon_cart.svg"
import LazadaCredit from "../../assets/images/lazada-credit.png";

export default function Navbar() {
    return (
        <header className="spacing-sm header-nav-logo">
            <img className="logo" alt="Logo" src={LogoLazada}  style={{ width: 200}} />

            <div className="wrapper">
            <div className="wrap">
                <div className="search">
                    <input type="text" className="search-bar" placeholder="Cari di Lazada" />
                    <button type="submit" className="search-button">
                        <i className="fa fa-search text-white font-weight-light"></i>
                    </button>
                </div>
            </div>
            </div>

            <img src={IconCart} alt="IconCart" className="icon-cart"style={{width: 30}} />
            <img src={LazadaCredit} alt="Lazada Credit" className="icon-cart"style={{width: 200, height: 55}} />



        </header>
    
    )
}
