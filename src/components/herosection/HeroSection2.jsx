import allInstantelogo from "../../assets/img/allInstantelogo.png";

export default function HeroSection2() {
  return (
    <main>
      <div className="px-6 lg:px-8 flex justify-center">
        <div className="max-w-3xl pt-20 pb-32 justify-end ">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-red-700">
              Estampados en Serigrafía
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              Desarrolla tus proyectos junto a unos profesionales en la
              impresión de poleras, Allinstante cuenta con mas de 8 años de
              experiencia en el rubro de los estampados.
            </p>
          </div>
        </div>
        <div className="my-auto px-14">
          <img className="h-60" src={allInstantelogo} alt="" />
        </div>
      </div>
    </main>
  );
}
