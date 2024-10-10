import React, { Component } from 'react';

class Contact extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div>
			<section className="contact-two">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<form action="https://formsubmit.co/vanrenconsultancy@gmail.com" method="POST" className="contact-two__form">
								<div className="contact-two__block">
									<h3>Contáctanos</h3>
									<p>Agenda cita con nosotros y nos pondremos en contacto pronto</p>
								</div>{/* /.contact-two__block */}

								<div className="row">

									<div className="col-md-6">
										<input name="Name" type="text" placeholder="Nombre completo / Full Name*" required />
									</div>{/* /.col-md-6 */}

									<div className="col-md-6">
										<input name="Email" type="email" placeholder="Correo Electronico / Email Address*" required />
									</div>{/* /.col-md-6 */}

									<div className="col-md-6">
										<input name="Telephone" type="number" placeholder="Teléfono / Telephone*" required />
									</div>{/* /.col-md-6 */}

									<div className="col-md-6">
										<input name="Company" type="text" placeholder="Empresa / Company Name" />
									</div>{/* /.col-md-6 */}

									<div className="col-md-12">
										<input name="JobTitle" type="text" placeholder="Cargo / Job Title" />
									</div>{/* /.col-md-12 */}

									<div className="col-md-12">
										<textarea name="Messaje" placeholder="Mensaje / Message" defaultValue={""} />
										<button type="submit" className="thm-btn contact-two__btn">Enviar / Send <i className="fa fa-angle-double-right" /></button>{/* /.thm-btn contact-two__btn */}
									</div>{/* /.col-md-12 */}

								</div>{/* /.row */}
							</form>{/* /.contact-two__form */}
						</div>{/* /.col-lg-7 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>{/* /.contact-two */}
		</div>

	}
}

export default Contact