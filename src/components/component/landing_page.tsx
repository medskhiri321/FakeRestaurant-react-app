import Image from "next/image";
export default function home() {
  return (
    <div>
      <section className="relative w-full min-h-screen md:h-screen">
        <Image
          priority
          fill
          src="/pizza.jpg"
          quality={100}
          alt="hero pizza image"
          className="pointer-events-none select-none"
        />
        <div className="absolute flex inset-0 bg-gray-900 bg-opacity-55 "></div>
        <div className="flex flex-wrap  w-full  absolute h-full  justify-center content-around ">
          <h1 className="text-white text-3xl font-bold tracking-tighter md:text-7xl/tight">
            Welcome to the best pizza shop of monastir
          </h1>
        </div>
      </section>
    </div>
  );
}
