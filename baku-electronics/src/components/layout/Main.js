import React from 'react'
import images from '../../assets/img/28may-news.jpg';


function Main() {
    return (
        <div>
            <section id="main-header">
                <div className="row">
                    <div className="col-6">
                        <img src={images} alt="" />

                    </div>
                    <div className="col-6 mt-4">
                        <a className='butun' href="">Butun kampaniyalar</a><br /><br />
                        <br /><br />

                        <div>
                            <h4>Müstəqillik Günü münasibətilə sənə xüsusi təkliflərimiz var!</h4>

                            <p>
                                15-31 may tarixləri arasında alış-verişlərdə müstəqilsən! <br />
                                Nağd alışda 50 %-dək endirim! <br />
                                Məişət texnikası, TV və kondisioner 0 0 0 18 AY <br />
                                Smart-saat və aksesuarlar 0 0 18 AY
                            </p>

                            <a href="">Ətraflı</a>
                            <br /> <br />
                            <p>Kampaniyanın sonuna qalıb</p>
                            <p>08gun : 02saat : 40deq</p>




                        </div>



                    </div>
                </div>

            </section>
            <section id="product">
                <div className='row'>
                    <div className="col-3 mt-5">
                        <div className="prod-desc">
                            <p>Kampaniyada iştirak edən məhsullar</p>
                            <ul>
                                <li><span>kondisonerler (32)</span></li>
                                <li><span>kombi (19)</span></li>
                                <li><span>soyducular (71)</span></li>
                                <li><span>paltaryuyan masinlar (61)</span></li>
                                <li><span>qabyuyan masinlar (28)</span></li>
                                <li><span>tozsoran (46)</span></li>
                                <li><span>bisirme panelleri (31)</span></li>
                                <li><span>qurasdirilan sobalar (29)</span></li>
                                <li><span>aspiratorlar (35)</span></li>
                                <li><span>metbex pilteleri (3)</span></li>
                                <li><span>tosterler (44)</span></li>
                                <li><span>blendrlar (95)</span></li>
                                <li><span>mikserler (30)</span></li>
                                <li><span>elektrik caydanlar  (64)</span></li>
                            







                            </ul>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
