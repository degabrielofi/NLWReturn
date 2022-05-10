import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';
import { useState } from 'react';
import { Menu, Container } from './Style'

export function Widget() {

    const [classOn, setClassOn] = useState(false);


    return (

        <>

            <Menu>
                <header>
                    <div className="container" id="home">
                        <div className="logo">
                            <h2><a href="#"><span></span>DeGabriel</a></h2>
                        </div>
                        <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                            <div className="menu-toggle">
                                <div className="one"></div>
                                <div className="two"></div>
                                <div className="three"></div>
                            </div>
                            <nav>
                                <ul>
                                    <li><a className='home' href="">Home</a></li>
                                    <li><a href="">Produtos</a></li>
                                    <li><a href="">Recursos</a></li>
                                    <li><a href="">Sobre nós</a></li>
                                    <li><a href="">Contato</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </Menu>


            <Container>
                <section className="banner">
                    <div className="container">
                        <div className="details">
                            <h1>Nos ajude a crescer!</h1>
                            <p>A DeGabriel é uma nova empresa do ramo da tecnologia que é focada no desenvolvimento de sites e sistemas que podem te ajudar na sua empresa.</p>
                        </div>
                        <div className="cta">
                            <a href="#">Nosso trabalho</a>
                            <a href="#">Saber mais</a>
                        </div>
                    </div>

                </section>
            </Container>

            <Popover className="absolute bottom-4 left-4 md:bottom-8 md:left-5 flex flex-col items-center">
                <Popover.Button className="px-3 h-12 flex items-center group">
                    <div className="connect">
                        <div className="container ">
                            <a href="https://github.com/degabrielofi"><i className="fab fa-github p-0 hover:text-brand-github transition-colors"></i></a>
                            <a href="https://www.instagram.com/degabrielofi_"><i className="fab fa-instagram p-2 hover:text-brand-instagram transition-colors"></i></a>
                            <a href="https://www.twitter.com/DeGabrielOFI_"><i className="fab fa-twitter p-1 hover:text-brand-twitter transition-colors"></i></a>
                            <a href="https://www.linkedin.com/in/degabrielofi"><i className="fab fa-linkedin p-1 hover:text-brand-linkedin transition-colors"></i></a>
                        </div>
                    </div>
                </Popover.Button>
            </Popover>



            <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
                <Popover.Panel><WidgetForm /></Popover.Panel>
                <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group '>
                    <ChatTeardropDots className='w-6 h-6' />
                    <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>Feedback
                        <span className='pl-2'></span></span>
                </Popover.Button>
            </Popover>
        </>
    )
}