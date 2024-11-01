"use client";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiBrave, SiTailwindcss, SiReact, SiTypescript, SiSpringboot } from "react-icons/si";
import Image from "next/image";
import Perfil from "../../public/Imagen/perfil.png";
import Diseño from "../../public/Imagen/design.png";
import Consulta from "../../public/Imagen/consulting.png";
import Codigo from "../../public/Imagen/code.png";
import { useState } from "react";
import { FaJava } from 'react-icons/fa';

import Web1 from "../../public/Imagen/web memo.png";
import Web2 from "../../public/Imagen/web vof.png";
import Web3 from "../../public/Imagen/web qr.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-[#fafafa] dark:text-slate-200 px-8 md:px-20 lg:px-40 font-Poppins dark:bg-gray-800">
        <section>
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="flex items-center text-lg font-Burtons">
              GuidoCode
            </h1>
            <ul className="flex items-center">
              <li>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" value="" type="checkbox" />
                  <div
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-8 lg:before:h-10 before:w-8 lg:before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-8 lg:after:w-10 after:h-8 lg:after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                    onClick={() => setDarkMode(!darkMode)}
                  ></div>
                </label>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center p-5">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-500 font-medium md:text-6xl lg:text-8xl">
              Guido López
            </h2>
            <h3 className="text-2xl py-3">Web Developer</h3>
            <p className="text-base pt-5 pb-4 leading-8 text-gray-800 dark:text-slate-200 max-w-xl">
              Freelancer Junior ofreciendo servicios para programación y diseño
              de contenido. ¡Puedes ver mas sobre mi en los siguientes links!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-slate-500 pb-6">
            <a
              href="https://www.linkedin.com/in/guido-rann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="hover:scale-125 hover:text-blue-400 transition-all" />
            </a>
            <a
              href="https://github.com/GuidoRann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="hover:scale-125 hover:text-gray-800 dark:hover:text-gray-600 transition-all" />
            </a>
          </div>
          <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 rounded-full mx-auto w-[210px]">
            <Image src={Perfil} alt="Avatar de Guido López" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center pt-7 ">
            <h3 className="text-2xl py-3">Servicio que ofrezco</h3>
            <p className="text-base pt-5 leading-8 text-gray-800 dark:text-slate-200">
              Soy un apasionado del desarrollador web especializado en
              tecnologías como React, TypeScript y JavaScript, comprometido en
              crear experiencias digitales dinámicas y atractivas para los
              usuarios. Estoy emocionado por seguir aprendiendo y creciendo en el
              campo del desarrollo web, y estoy buscando oportunidades para
              contribuir en equipos dinámicos y colaborativos.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex flex-col items-center shadow-lg p-8 rounded-xl my-10">
              <div>
                <Image src={Diseño} alt="Icono diseño" width={120} />
              </div>
              <h3 className="text-2xl pt-6 pb-3">Diseño gráfico</h3>
              <p className="text-base pt-5 pb-4 leading-8 text-gray-800 dark:text-slate-200 max-w-xl">
                Creando diseños elegantes adaptados a tus necesidades siguiendo
                la teoría fundamental del diseño.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-500 font-medium">
                Herramientas que uso
              </h4>
              <p className="text-gray-800 dark:text-slate-200 py-1">
                Photoshop
              </p>
              <p className="text-gray-800 dark:text-slate-200 py-1">
                Illustrator
              </p>
              <p className="text-gray-800 dark:text-slate-200 py-1">Figma</p>
            </div>
            <div className="flex flex-col items-center shadow-lg p-8 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={Codigo} alt="Icono diseño" width={120} />
              </div>
              <h3 className="text-2xl pt-6 pb-3">Código</h3>
              <p className="text-base pt-5 pb-4 leading-8 text-gray-800 dark:text-slate-200 max-w-xl">
                ¿Tienes una idea para tu próximo gran sitio web? Hagámoslo
                realidad.
              </p>
              <h4 className="pt-3 pb-2 text-teal-600 dark:text-teal-500 font-medium">
                Herramientas que uso
              </h4>
              <div className="flex flex-row gap-10 lg:gap-12">
                <div>
                  <h3 className="py-2 text-teal-600 dark:text-teal-500 font-medium">
                    Frontend
                  </h3>
                  <p className="text-gray-800 dark:text-slate-200 py-1">
                    React
                  </p>
                  <p className="text-gray-800 dark:text-slate-200 py-1">
                    JavaScript
                  </p>
                  <p className="text-gray-800 dark:text-slate-200 py-1">
                    Typescript
                  </p>
                  <p className="text-gray-800 dark:text-slate-200 py-1">
                    Tailwind
                  </p>
                </div>
                <div>
                  <h3 className="py-2 text-teal-600 dark:text-teal-500 font-medium">
                    Backend
                  </h3>
                  <p className="text-gray-800 dark:text-slate-200 py-1">Java</p>
                  <p className="text-gray-800 dark:text-slate-200 py-1">
                    Spring Boot
                  </p>
                  <p className="text-gray-800 dark:text-slate-200 py-1">
                    MySQL
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-lg p-8 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={Consulta} alt="Icono diseño" width={120} />
              </div>
              <h3 className="text-2xl pt-6 pb-3">Consultas</h3>
              <p className="text-base pt-5 pb-4 leading-8 text-gray-800 dark:text-slate-200 max-w-xl">
                ¿Estás interesado en recibir comentarios sobre tu proyecto
                actual? Puedo darte consejos e ideas para mejorarlo.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-tel-500 font-medium">
                Herramientas que uso
              </h4>
              <p className="text-gray-800 dark:text-slate-200 py-1">Meet</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl pt-6 pb-3">Portfolio</h3>
            <p className="text-base pt-5 pb-4 leading-8 text-gray-800 dark:text-slate-200">
              Desde el inicio de mi trayectoria como diseñador y desarrollador
              freelance, he realizado trabajos remotos y colaborado con personas
              talentosas para crear productos digitales tanto para uso
              empresarial como para consumidores.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 py-10 lg:flex-row lg:flex-wrap">

          {/* comienzo de la tarjeta proyecto web */}
          {/* Web MemoMagic */}
            <div className="basis-1/2 lg:basis-1/3 shadow-lg p-8 rounded-xl my-10 px-2">
              <h3 className="text-3xl font-medium py-1 text-teal-600 dark:text-tel-500 text-center">MemoMagic</h3>
              <p className="py-3">App de memotest hecho desde cero, con el tipico juego de encontra las parejas, pero con un estilo propio, tiempo de juego e intentos</p>
              <p className="font-medium">Tecnologias Frontend</p>
              <div className="flex justify-center p-2 flex-wrap gap-2 text-[11px]">
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiReact className="text-[#61DBFB]" />
                  <p>React</p>
                </div>
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiTypescript className="text-[#0177C1]" />
                  <p>Typescript</p>
                </div>
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiTailwindcss className="text-[#39BCF8]" />
                  <p>Tailwind</p>
                </div>
              </div>
              <Image
                src={Web1}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
              <div className="flex justify-center items-center pt-4 gap-2 text-[12px]">
                  <a
                  href="https://memotest-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <div className="flex items-center justify-center rounded-md border-[1px] bg-gradient-to-b from-slate-300 dark:bg-gradient-to-b dark:from-teal-500 border-slate-300 dark:border-teal-600 p-2 px-2 gap-1 hover:scale-105 transition-all">
                      <SiBrave className="text-[#F63315] dark:text-slate-100 w-[23px] h-[23px] " />
                      <p>Pagina web</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/GuidoRann/Memotest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center rounded-md border-[1px] bg-gradient-to-b from-slate-300 dark:bg-gradient-to-b dark:from-teal-500 border-slate-300 dark:border-teal-600 p-2 px-2 gap-1 hover:scale-105 transition-all">
                        <AiFillGithub className="w-[23px] h-[23px]" />
                        <p>Repositorio</p>
                      </div>
                  </a>
              </div>
            </div>
            {/* final de la tarjeta proyecto web */}

            {/* comienzo de la tarjeta proyecto web */}
            {/* Web Verdadero o Falso */}
            <div className="basis-1/2 lg:basis-1/3 shadow-lg p-8 rounded-xl my-10 px-2">
              <h3 className="text-3xl font-medium py-1 text-teal-600 dark:text-tel-500 text-center">Verdadero o Falso</h3>
              <p className="py-3">App de Verdadero o Falso hecha con React en el frontend y consumiendo un API de Java con Springboot con backend propio, del juego de adivinar si la afirmacion es verdadera o falsa</p>
                <p className="font-medium">Tecnologias Frontend</p>
              <div className="flex p-2 flex-wrap gap-2 text-[11px]">
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiReact className="text-[#61DBFB]" />
                  <p>React</p>
                </div>
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiTypescript className="text-[#0177C1]" />
                  <p>Typescript</p>
                </div>
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiTailwindcss className="text-[#39BCF8]" />
                  <p>Tailwind</p>
                </div>
              </div>
                <p className="font-medium">Tecnologias Backend</p>
              <div className="flex p-2 flex-wrap gap-2 text-[11px]">
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <FaJava  className="text-[#ffffff]" />
                  <p>Java</p>
                </div>
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiSpringboot className="text-[#43ea51]" />
                  <p>Springboot</p>
                </div>
              </div>
              <Image
                src={Web2}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
              <div className="flex justify-center items-center pt-4 gap-2 text-[12px]">
                  <a
                  href="https://verdadero-falso.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <div className="flex items-center justify-center rounded-md border-[1px] bg-gradient-to-b from-slate-300 dark:bg-gradient-to-b dark:from-teal-500 border-slate-300 dark:border-teal-600 p-2 px-2 gap-1 hover:scale-105 transition-all">
                      <SiBrave className="text-[#F63315] dark:text-slate-100 w-[23px] h-[23px] " />
                      <p>Pagina web</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/GuidoRann/verdadero-falso-front"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center rounded-md border-[1px] bg-gradient-to-b from-slate-300 dark:bg-gradient-to-b dark:from-teal-500 border-slate-300 dark:border-teal-600 p-2 px-2 gap-1 hover:scale-105 transition-all">
                        <AiFillGithub className="w-[23px] h-[23px]" />
                        <p>Repositorio</p>
                      </div>
                  </a>
              </div>
            </div>
            {/* final de la tarjeta proyecto web */}

            {/* comienzo de la tarjeta proyecto web */}
            {/* Web Lector de codigos qr */}
            <div className="basis-1/2 lg:basis-1/3 shadow-lg p-8 rounded-xl my-10 px-2">
              <h3 className="text-3xl font-medium py-1 text-teal-600 dark:text-tel-500 text-center">Conectando QR</h3>
              <p className="py-3">App de Lector de códigos QR hecha con React y Typescript en el frontend, es una app tanto para la creacion como lectura de un codigo QR desde una imagen ya que muchas veces nos envian una imagen y necesitamos otro dispositivo para leerlo.</p>
                <p className="font-medium">Tecnologias Frontend</p>
              <div className="flex p-2 flex-wrap gap-2 text-[11px]">
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiReact className="text-[#61DBFB]" />
                  <p>React</p>
                </div>
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiTypescript className="text-[#0177C1]" />
                  <p>Typescript</p>
                </div>
                <div className="flex items-center justify-center rounded-full border-2 border-teal-600 px-2 gap-1">
                  <SiTailwindcss className="text-[#39BCF8]" />
                  <p>Tailwind</p>
                </div>
              </div>
              <Image
                src={Web3}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
              <div className="flex justify-center items-center pt-4 gap-2 text-[12px]">
                  <a
                  href="https://conectandoqr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <div className="flex items-center justify-center rounded-md border-[1px] bg-gradient-to-b from-slate-300 dark:bg-gradient-to-b dark:from-teal-500 border-slate-300 dark:border-teal-600 p-2 px-2 gap-1 hover:scale-105 transition-all">
                      <SiBrave className="text-[#F63315] dark:text-slate-100 w-[23px] h-[23px] " />
                      <p>Pagina web</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/GuidoRann/QrGenerator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center rounded-md border-[1px] bg-gradient-to-b from-slate-300 dark:bg-gradient-to-b dark:from-teal-500 border-slate-300 dark:border-teal-600 p-2 px-2 gap-1 hover:scale-105 transition-all">
                        <AiFillGithub className="w-[23px] h-[23px]" />
                        <p>Repositorio</p>
                      </div>
                  </a>
              </div>
            </div>
            {/* final de la tarjeta proyecto web */}
          </div>
        </section>
      </main>
    </div>
  );
}