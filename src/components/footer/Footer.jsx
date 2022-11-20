import React from "react";

export const Footer = () => {
  return (
    <>
      <section className="bg-zinc-900">
        <div className="max-w-lg  px-4 py-16 mx-auto text-left md:max-w-none md:text-center">
          <h1 className=" font-extrabold leading-10 tracking-tight  text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl">
            <span className=" py-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              Elige AllInstante
            </span>
          </h1>
        </div>
      </section>

      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <p className="mt-4 text-sm text-center text-gray-400 lg:mt-0">
            T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
          </p>
        </div>
      </footer>
    </>
  );
};
