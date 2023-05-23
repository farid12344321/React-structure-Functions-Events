
import logo from '../../assets/img/logo.svg';

import React from 'react'




function Navbar() {
    return (
        <div>
            <div className="color">
                <p className="online" >İndi al, 3 ay sonra ödə! Yalnız onlayn!</p>
            </div>


            <div className="navigation">
                <div className="row">
                    <div className="col-3 mt-3">
                        <img src={logo} alt="" />

                        <p></p>
                    </div>


                    <div className="col-6 mt-4 d-flex">
                        <input className="search" type="text" />
                        <div className="desc d-flex">
                        <p className="campaigns">Kampaniyalar</p>
                        <p className="shops">Magazlar</p>
                        <p className="other">Diger</p>

                        <h3 className="phone">:143</h3>



                        </div>
                       
                    </div>

                    <div className="col-3">


                    </div>


                </div>



            </div>


        </div>
    )
}

export default Navbar
