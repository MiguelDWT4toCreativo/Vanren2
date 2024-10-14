import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Contact extends Component {

	render() {
		const { t } = this.props; // Obtener la función de traducción de las props
		let publicUrl = process.env.PUBLIC_URL + '/';

		return (
			<div>
				<section className="contact-two">
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<form action="https://formsubmit.co/vanrenconsultancy@gmail.com" method="POST" className="contact-two__form">
									<div className="contact-two__block">
										<h3>Contáctanos</h3>
										<p>Agenda cita con nosotros y nos pondremos en contacto pronto.</p>
									</div>{/* /.contact-two__block */}

									<div className="row">
										<div className="col-md-6">
											<input name="Name" type="text" placeholder={t('fullNamePlaceholder')} required />
										</div>{/* /.col-md-6 */}

										<div className="col-md-6">
											<input name="Email" type="email" placeholder={t('emailPlaceholder')} required />
										</div>{/* /.col-md-6 */}

										<div className="col-md-6">
											<input name="Telephone" type="number" placeholder={t('telephonePlaceholder')} required />
										</div>{/* /.col-md-6 */}

										<div className="col-md-6">
											<input name="Company" type="text" placeholder={t('companyPlaceholder')} />
										</div>{/* /.col-md-6 */}

										<div className="col-md-12">
											<input name="JobTitle" type="text" placeholder={t('jobTitlePlaceholder')} />
										</div>{/* /.col-md-12 */}

										<div className="col-md-12">
											<textarea name="Messaje" placeholder={t('messagePlaceholder')} defaultValue={""} />
											<button type="submit" className="thm-btn contact-two__btn">
												{t('send')} <i className="fa fa-angle-double-right" />
											</button>{/* /.thm-btn contact-two__btn */}
										</div>{/* /.col-md-12 */}
									</div>{/* /.row */}
								</form>{/* /.contact-two__form */}
							</div>{/* /.col-lg-7 */}
						</div>{/* /.row */}
					</div>{/* /.container */}
				</section>{/* /.contact-two */}
			</div>
		);
	}
}

export default withTranslation()(Contact);
