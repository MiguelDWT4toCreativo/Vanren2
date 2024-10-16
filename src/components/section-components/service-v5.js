import React, { Component } from 'react';

class ServiceV5 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <section className="service-two service-two__service-page go-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="service-two__block">
                                <div className="block-title-two text-left">
                                    <p>NUESTROS SERVICIOS</p>
                                    <h3>Ofrecemos un servicio <br />exclusivo para ti.</h3>
                                </div>{/* /.block-title-two */}
                                <p>En VanRen, nos dedicamos a proporcionar soluciones personalizadas que impulsan el rendimiento comercial de pequeñas y medianas empresas. Combinamos estrategias de cierre de ventas con inteligencia emocional para ayudar a nuestros clientes a alcanzar sus objetivos y construir relaciones duraderas y efectivas.</p>
                                <ul className="list-unstyled video-one__list">
                                    <li><i className="far fa-check" />Entrenamiento con Inteligencia Emocional</li>
                                    <li><i className="far fa-check" />Estrategias de Cierre de Ventas</li>
                                    <li><i className="far fa-check" />Consultoría en Estrategias Comerciales</li>
                                    <li><i className="far fa-check" />Análisis de Datos y Negocios</li>
                                </ul>{/* /.list-unstyled video-one__list */}
                            </div>{/* /.service-two__block */}
                        </div>{/* /.col-lg-5 */}
                        <div className="col-lg-7">
                            <div className="service-two__box-wrap">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="service-two__single js-tilt">
                                            <div className="service-two__single-image" />
                                            <div className="service-two__single-inner">
                                                <i className="fal fa-hand-holding-usd" />
                                                <h3>Entrenamiento con Inteligencia Emocional</h3>
                                                <p>Nuestros programas de entrenamiento están diseñados para mejorar el liderazgo, la empatía, la resiliencia y la gestión del estrés dentro de su equipo. Con VanRen, su empresa desarrollará habilidades emocionales esenciales para establecer relaciones sólidas con los clientes y gestionar equipos de manera efectiva.</p>
                                            </div>{/* /.service-two__single-inner */}
                                        </div>{/* /.service-two__single */}
                                    </div>{/* /.col-md-6 */}
                                    <div className="col-md-6">
                                        <div className="service-two__single js-tilt">
                                            <div className="service-two__single-image" />
                                            <div className="service-two__single-inner">
                                                <i className="fal fa-umbrella-beach" />
                                                <h3>Estrategias de Cierre de Ventas</h3>
                                                <p>Desarrollamos estrategias personalizadas para mejorar la eficiencia y efectividad en el cierre de negocios. Analizamos detalladamente los procesos de ventas existentes y proporcionamos técnicas avanzadas de negociación y manejo de objeciones, asegurando que cada paso del proceso de venta esté optimizado para maximizar las conversiones.</p>
                                            </div>{/* /.service-two__single-inner */}
                                        </div>{/* /.service-two__single */}
                                    </div>{/* /.col-md-6 */}
                                    <div className="col-md-6">
                                        <div className="service-two__single js-tilt">
                                            <div className="service-two__single-image" />
                                            <div className="service-two__single-inner">
                                                <i className="fal fa-paper-plane" />
                                                <h3>Consultoría en Estrategias Comerciales</h3>
                                                <p>Proporcionamos un enfoque integral que combina técnicas de ventas probadas con inteligencia emocional para transformar sus resultados comerciales. Nuestro equipo trabaja con usted para comprender y satisfacer las necesidades específicas de su negocio, creando estrategias que impulsen el éxito a largo plazo.</p>
                                            </div>{/* /.service-two__single-inner */}
                                        </div>{/* /.service-two__single */}
                                    </div>{/* /.col-md-6 */}
                                    <div className="col-md-6">
                                        <div className="service-two__single js-tilt">
                                            <div className="service-two__single-image" />
                                            <div className="service-two__single-inner">
                                                <i className="fal fa-chart-network" />
                                                <h3>Análisis de Datos y Negocios</h3>
                                                <p>Realizamos un análisis detallado de los procesos y datos de su negocio para identificar oportunidades de mejora y desarrollar estrategias que optimicen la eficiencia y efectividad de sus operaciones comerciales. Con VanRen, obtendrá una visión clara y precisa que le permitirá tomar decisiones informadas y estratégicas para el crecimiento de su empresa.</p>
                                            </div>{/* /.service-two__single-inner */}
                                        </div>{/* /.service-two__single */}
                                    </div>{/* /.col-md-6 */}
                                </div>{/* /.row */}
                            </div>{/* /.service-two__box-wrap */}
                        </div>{/* /.col-lg-7 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
        );
    }
}

export default (ServiceV5);
