import Data from '@/components/Data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa6";



const page = () => {
    return (
        <div>
            <div className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto pt-40'>
                <p className='text-xl text-[#4021C8] uppercase'>Banktrack</p>
                <h2 className='text-4xl lg:text-5xl font-bold'>Cómo tener control de costes <br className='hidden lg:grid' /> y gastos en tu restaurante</h2>
                <div className='flex gap-2 items-center my-2'>
                    <Image src="/author.png" width="50" height="50" alt="" className='rounded-full' />
                    <p><span className='font-bold mr-2'>Carlos P. </span><span className='text-[#b4b3b3]'> 25 sept 2024</span></p>
                </div>
            </div>
            <div className='w-[90%] lg:w-[70%] mx-auto'>
                <Image src="/blog_detail.png" width="500" height="500" alt="" className='w-full rounded-2xl' />
            </div>

            <div className='w-[90%] lg:w-[60%] mx-auto my-10'>
                <div className="collapse collapse-arrow bg-white shadow-xl text-[#888585]">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-black">Tabla de contenidos</div>
                    <div className="collapse-content text-base">
                        <p>5 Estrategias para Controlar los Costes en un Restaurante</p>
                        <ol className='list-decimal ml-8'>
                            <li>Realizar Auditorías de Costes Regulares</li>
                            <li>Optimizar el Menú</li>
                            <li>Implementar Sistemas de Control de Inventario</li>
                            <li>Negociar con Proveedores</li>
                            <li>Usar Herramientas Tecnológicas para el Control de Costes</li>
                        </ol>
                        <p>Cómo Banktrack Puede Ayudarte a Controlar los Costes en tu Restaurante</p>
                        <ul>
                            <li>¿Cómo Puede Ayudarte Banktrack?</li>
                        </ul>
                        <p>La Importancia del Control de Costes y Gastos en un Restaurante</p>
                        <ol className='list-decimal ml-8'>
                            <li>Margen de Ganancia Reducido</li>
                            <li>Fluctuación de Precios de Suministros</li>
                            <li>Control del Flujo de Caja</li>
                        </ol>
                        <p>4 Principales Áreas de Costes en un Restaurante</p>
                        <ol className='list-decimal ml-8'>
                            <li>Coste de Alimentos y Bebidas (Coste de Mercancías Vendidas, CMV)</li>
                            <li>Costes de Personal</li>
                            <li>Costes Operativos</li>
                            <li>Costes de Marketing y Publicidad</li>
                        </ol>
                        El Control de Costes y Gastos es Clave para el Éxito
                    </div>
                </div>

                <p className='mt-5'>Te explicamos cómo puedes tener el control de costes y gastos en tu restaurante con 5 estrategias</p>
                <br />
                <ol className='list-decimal ml-8'>
                    <li>Realizar auditorías de costes regulares</li>
                    <li>Optimizar el menú</li>
                    <li>Implementar sistemas de control de inventario</li>
                    <li>Negociar con proveedores</li>
                    <li>Usar herramientas tecnológicas para el control de costes</li>
                </ol>
                <br />
                <p>Mantener un restaurante rentable no es tarea fácil. </p>
                <br />
                <p>Con márgenes de ganancia ajustados, la competencia en aumento y lovervs precios de los suministros en constante cambio, controlar los costes y gastos se convierte en una prioridad absoluta. Pero, ¿cómo hacerlo de manera efectiva? </p>
                <br />
                <p>En este artículo, te contamos todo lo que necesitas saber para mantener tus finanzas en orden y mejorar la rentabilidad de tu restaurante en 2024. </p>
                <br />
                <h2 className='text-xl font-bold'>5 Estrategias para Controlar los Costes en un Restaurante</h2>
                <br />
                <p>Ahora que ya conoces las principales áreas de coste en un restaurante, veamos algunas estrategias prácticas para mantener estos costes bajo control.</p>
                <br />
                <br />
                <h3 className='text-[#4021C8] font-bold'>1. Realizar Auditorías de Costes Regulares</h3>
                <br />
                <p>Realizar auditorías de costes regulares es fundamental para identificar áreas donde se pueden hacer mejoras.</p>
                <br />
                <p>Estas <span className='font-bold'>auditorías te permiten ver exactamente dónde se está gastando el dinero y qué áreas necesitan ser ajustadas.</span></p>
                <br />
                <p>Analiza el coste de los alimentos, el personal, los servicios públicos, el alquiler y otros gastos para identificar patrones de gasto innecesario o excesivo.</p>
                <br /><br />
                <h3 className='text-[#4021C8] font-bold'>2. Optimizar el Menú</h3>
                <br />
                <p>Revisar y optimizar tu menú puede tener un impacto significativo en los costes. Analiza cuáles son los platos más rentables y aquellos que generan mayores pérdidas.</p>
                <br />
                <p>Considera ajustar el menú <span className='font-bold'>eliminando los platos menos populares o aquellos con un alto coste de ingredientes y tiempo de preparación.</span></p>
                <br /><br />
                <h3 className='text-[#4021C8] font-bold'>3. Implementar Sistemas de Control de Inventario</h3>
                <br />
                <p>Un <span className='text-blue-500 underline'>sistema de control de inventario</span> te ayudará a <span className='font-bold'>saber exactamente qué tienes en stock, cuándo necesitas hacer pedidos</span> y evitará el desperdicio por exceso o falta de productos. </p>
                <br />
                <p>Mantén un inventario actualizado y realiza revisiones periódicas para ajustar las cantidades de compra según la demanda.</p>
                <br /><br />
                <h3 className='text-[#4021C8] font-bold'>4. Negociar con Proveedores</h3>
                <br />
                <p>No dudes en <span className='font-bold'>negociar términos más favorables con tus proveedores</span>. Establece relaciones sólidas y busca descuentos por volumen o acuerdos a largo plazo.</p>
                <br />
                <p>También puedes considerar la posibilidad de <span className='font-bold'>utilizar múltiples proveedores para diversificar las opciones</span> y evitar la dependencia de un solo proveedor.</p>
                <br /><br />
                <h3 className='text-[#4021C8] font-bold'>5. Usar Herramientas Tecnológicas para el Control de Costes</h3>
                <br />
                <p>La tecnología puede ser tu mejor aliada para controlar los costes en un restaurante. </p>
                <br />
                <p>Aquí es donde entra Banktrack, un <span className='uppercase text-blue-500'>software de gestión de tesorería que puede</span> facilitar la gestión financiera de tu negocio.</p>
                <br />
                <br />
                <h2 className='text-xl font-bold'>Cómo Banktrack Puede Ayudarte a Controlar los Costes en tu Restaurante</h2>
                <br />
                <p>Banktrack es una herramienta de control de gastos diseñada para ofrecerte una visión clara y detallada de tus finanzas en tiempo real.</p>
                <br />
                <p>Para un restaurante, esto significa <span className='font-bold'>tener el control total de todos los gastos, desde la compra de alimentos hasta los pagos a proveedores y los costes operativos diarios.</span></p>
                <br /><br />
                <h3 className='text-[#4021C8] font-bold'>¿Cómo Puede Ayudarte Banktrack?</h3>
                <br />
                <ol className='list-decimal ml-8'>
                    <li><span className='font-bold'>Tableros Personalizados para Visibilidad Total:</span> Banktrack te permite crear tableros personalizados que integran todas tus cuentas bancarias y productos financieros en un solo lugar. Esto es perfecto para los restaurantes que necesitan tener una visión clara de todos sus flujos de caja, ingresos y gastos.</li>
                    <Image src="/blog_1.1.png" width="500" height="500" alt="" className='w-full my-5' />
                </ol>
                <ol className='list-decimal ml-8'>
                    <li><span className='font-bold'>Categorización Avanzada de Gastos: </span> Puedes crear y personalizar categorías ilimitadas para organizar cada gasto de manera detallada. Por ejemplo, puedes tener categorías específicas para alimentos, bebidas, personal, marketing, mantenimiento y otros costes operativos. Esta categorización avanzada te permite saber exactamente en qué estás gastando más y tomar decisiones informadas para ajustar tus estrategias.</li>
                    <Image src="/blog_1.2.png" width="1000" height="1000" alt="" className='w-full my-5' />

                </ol>

                <ol className='list-decimal ml-8'>
                    <li><span className='font-bold'>Conexión de Múltiples Cuentas Bancarias: </span> anktrack es una app para gestionar todos los bancos. Puedes conectar hasta 10 cuentas bancarias con Banktrack, lo que facilita la consolidación de todas las transacciones financieras en un solo tablero. </li>
                    <br />
                    <li><span className='font-bold'>Asequible y Fácil de Probar:</span> ¿Te da miedo invertir sin saber si funcionará? Banktrack ofrece una prueba gratuita y planes desde 16,58 € al mes. Puedes empezar a usarlo sin comprometer tu presupuesto. </li>
                    <Image src="/blog_1.3.png" width="1000" height="1000" alt="" className='w-full my-5' />

                </ol>



                <div className='bg-[#4021C8] rounded-xl flex flex-col lg:flex-row lg:gap-20 p-10 lg:p-16 lg:items-center md:w-[94%] lg:w-full mx-auto'>
                    <div className='lg:w-[80%]'>
                        <h2 className='text-4xl font-bold text-white'>Prueba Banktrack GRATIS</h2>
                        <p className='text-xl text-[#b5b0b0] my-5'>Conecta todos tus bancos y recibe informes configurables y alertas inteligentes en tu canal favorito</p>
                    </div>
                    <div className='lg:w-[40%]'>
                        <Link href="/registrarse" ><button className='btn btn-lg w-full bg-white rounded-full text-[#4021C8] shadow-xl'>Crear cuenta AHORA</button></Link>
                    </div> 
                </div>



                <div className='text-xl my-10 relative'>
                    <Image src="/arrow_1.png" width="50" height="50" alt="" className='absolute -left-14 top-5 hidden lg:grid' />

                    <h3 className='text-[#4021C8] font-bold mb-5'>Compartir este artículo</h3>
                    <div className='flex gap-2 my-3'>
                        <Link href="https://x.com/"> <FaXTwitter className='bg-violet-600 text-white p-1 rounded-md text-2xl' /></Link>
                        <Link href="https://www.facebook.com/"> <LiaFacebookF className='bg-violet-600 text-white p-1 rounded-md text-2xl' /></Link>
                        <Link href="https://www.linkedin.com/"> <FaLinkedinIn className='bg-violet-600 text-white p-1 rounded-md text-2xl' /></Link>
                    </div>

                </div>

            </div>
            <div className='bg-[#FDFAF5] py-20'>
                <div className='w-[80%] mx-auto'>
                    <h3 className='text-4xl font-bold'>Artículos relacionados</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-20 ">
                        {/* 1st Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                <Link href="/blog/title"><Image src="/blog_2.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Gastos</p>
                                <Link href="/blog/title"><h2 className="card-title min-h-[64px]">Mejor aplicación de gestión de suscripciones</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Gestionar tantas suscripciones puede ser un caos. Con una buena app de gestión de suscripciones, podrás controlar tus pagos, evitar renovaciones inesperadas y ahorrar dinero.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                <Link href="/blog/title"><Image src="/blog_3.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Empresa</p>
                                <Link href="/blog/title"><h2 className="card-title min-h-[64px]">5 gastos que tiene una empresa con un trabajador de baja</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Cuando un trabajador está de baja, los costes para la empresa van más allá de su salario. Te contamos cuáles son los principales gastos.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* 3rd Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                <Link href="/blog/title"><Image src="/blog_4.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Banktrack</p>
                                <Link href="/blog/title"><h2 className="card-title min-h-[64px]">Cómo tener control de costes y gastos en tu restaurante</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Optimiza inventarios y usa herramientas financieras para controlar los costes y mantener tu restaurante rentable.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Data />
        </div>
    );
};

export default page;