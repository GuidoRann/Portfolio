import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Perfil from "../../public/Imagen/perfil.png";
import Diseño from "../../public/Imagen/design.png";
import Consulta from "../../public/Imagen/consulting.png";
import Codigo from "../../public/Imagen/code.png";
import Web1 from "../../public/Imagen/web3.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-[#fafafa] px-8 md:px-20 lg:px-40 font-Poppins dark:bg-gray-800">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-lg font-Burtons">GuidoCode</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className="bg-cyan-500 text-white px-2 py-2 rounded-md ml-4"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center p-5">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl lg:text-8xl">
              Guido López
            </h2>
            <h3 className="text-2xl py-3">Web Developer</h3>
            <p className="text-base pt-5 pb-4 leading-8 text-gray-800 max-w-xl">
              Freelancer Junior ofreciendo servicios para programación y diseño
              de contenido. ¡Puedes ver mas sobre mi en los siguientes links!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 pb-6">
            <AiFillLinkedin className="hover:scale-125 hover:text-blue-400 transition-all" />
            <AiFillGithub className="hover:scale-125 hover:text-gray-800 transition-all" />
          </div>
          <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 rounded-full mx-auto w-[210px]">
            <Image src={Perfil} alt="Avatar de Guido López" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center pt-7 ">
            <h3 className="text-2xl py-3">Servicio que ofrezco</h3>
            <p className="text-base pt-5 leading-8 text-gray-800 max-w-xl">
              Soy un apasionado del desarrollador web especializado en
              tecnologías como React, TypeScript y JavaScript, comprometido en
              crear experiencias digitales dinámicas y atractivas para los
              usuarios.
              <br /> Estoy emocionado por seguir aprendiendo y creciendo en el
              campo del desarrollo web, y estoy buscando oportunidades para
              contribuir en equipos dinámicos y colaborativos.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center shadow-lg p-8 rounded-xl my-10">
              <div>
                <Image src={Diseño} alt="Icono diseño" width={120} />
              </div>
              <h3 className="text-2xl pt-6 pb-3">Diseño grafico</h3>
              <p className="text-base pt-5 pb-4 leading-8 text-gray-800 max-w-xl">
                Creando diseños elegantes adaptados a tus necesidades siguiendo
                la teoría fundamental del diseño.
              </p>
              <h4 className="py-4 text-teal-600 font-medium">
                Herramientas que uso
              </h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="flex flex-col items-center shadow-lg p-8 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={Codigo} alt="Icono diseño" width={120} />
              </div>
              <h3 className="text-2xl pt-6 pb-3">Codigo</h3>
              <p className="text-base pt-5 pb-4 leading-8 text-gray-800 max-w-xl">
                ¿Tienes una idea para tu próximo gran sitio web? Hagámoslo
                realidad.
              </p>
              <h4 className="pt-3 pb-2 text-teal-600 font-medium">
                Herramientas que uso
              </h4>
              <h3 className="py-2 text-teal-600 font-medium">Frontend</h3>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <h3 className="py-2 text-teal-600 font-medium">Backend</h3>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Spring Boot</p>
              <p className="text-gray-800 py-1">MySQL</p>
            </div>
          </div>
          <div className="flex flex-col items-center shadow-lg p-8 rounded-xl my-10">
            <div className="flex justify-center">
              <Image src={Consulta} alt="Icono diseño" width={120} />
            </div>
            <h3 className="text-2xl pt-6 pb-3">Consultas</h3>
            <p className="text-base pt-5 pb-4 leading-8 text-gray-800 max-w-xl">
              ¿Estás interesado en recibir comentarios sobre tu proyecto actual?
              Puedo darte consejos e ideas para mejorarlo.
            </p>
            <h4 className="py-4 text-teal-600 font-medium">
              Herramientas que uso
            </h4>
            <p className="text-gray-800 py-1">Meet</p>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl pt-6 pb-3">Portfolio</h3>
            <p className="text-base pt-5 pb-4 leading-8 text-gray-800 max-w-xl">
              Desde el inicio de mi trayectoria como diseñador y desarrollador
              freelance, he realizado trabajos remotos y colaborado con personas
              talentosas para crear productos digitales tanto para uso
              empresarial como para consumidores.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                src={Web1}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={Web1}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={Web1}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={Web1}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={Web1}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={Web1}
                alt="Imagen de la web de muestra"
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
