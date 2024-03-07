import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Perfil from "../../public/Imagen/perfil.png";
import Diseño from "../../public/Imagen/design.png";
import Consulta from "../../public/Imagen/consulting.png";
import Codigo from "../../public/Imagen/code.png";
import Web1 from "../../public/Imagen/web3.png";

export default function Home() {
  return (
    <>
      <main className="bg-[#fafafa] px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-lg font-Burtons">Portfolio Guido López</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-3xl py-2 text-teal-600 font-medium md:text-6xl lg:text-8xl">
              Guido López
            </h2>
            <h3 className="text-2xl py-2">Web Developer</h3>
            <p className="text-lg py-5 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro,
              earum quis fugit neque illum corporis iure ducimus laudantium,
              nisi asperiores id cupiditate laboriosam tenetur optio suscipit
              sunt impedit ipsa.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin className="hover:scale-125 hover:text-blue-400 transition-all" />
            <AiFillGithub className="hover:scale-125 hover:text-gray-800 transition-all" />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full mx-auto h-40 w-40">
            <Image
              src={Perfil}
              alt="Imagen de perfil Guido López"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-center">Servicio que ofrezco</h3>
            <p className="text-lg py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur quo quaerat minus magnam ratione velit porro, explicabo
              iure harum optio, nisi deleniti est tenetur quos iste dolores
              eaque beatae? Amet?
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image
                  src={Diseño}
                  alt="Icono diseño"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Diseño grafico</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi ratione neque inventore est omnis nihil et! Odio, ab,
                et dolores modi nulla eum adipisci mollitia alias natus voluptas
                quaerat beatae.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de diseño</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image
                  src={Consulta}
                  alt="Icono diseño"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Diseño grafico</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi ratione neque inventore est omnis nihil et! Odio, ab,
                et dolores modi nulla eum adipisci mollitia alias natus voluptas
                quaerat beatae.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de diseño</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image
                  src={Codigo}
                  alt="Icono diseño"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Diseño grafico</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi ratione neque inventore est omnis nihil et! Odio, ab,
                et dolores modi nulla eum adipisci mollitia alias natus voluptas
                quaerat beatae.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de diseño</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-center">Porfolio</h3>
            <p className="text-lg py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur quo quaerat minus magnam ratione velit porro, explicabo
              iure harum optio, nisi deleniti est tenetur quos iste dolores
              eaque beatae? Amet?
            </p>
          </div>
          <div>
            <div>
              <Image src={Web1} alt="Imagen de la web de muestra" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
