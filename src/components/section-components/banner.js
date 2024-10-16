import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="banner-one go-top" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/banner-bg-1-1.png)'}}>
				  <img src={publicUrl+"assets/images/resources/p1.jpg"} alt={ imagealt } className="banner-one__moc" />
				  <div className="container-fluid">
				    <div className="row">
				      <div className="col-lg-8">
				        <div className="banner-one__content">
				          <h3><span>Estrategias con </span> <br />inteligencia emocional para elevar <br /> tu <em>negocio.</em></h3>
				          <p>En VanRen, combinamos la experiencia en ventas con la inteligencia emocional para transformar los resultados de tu negocio.</p>
				          <Link to="/service" className="thm-btn banner-one__btn">Descúbrelo Ahora<i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn */}
				        </div>
				      </div>
				    </div>
				  </div>
				</section>
        }
}

export default Banner