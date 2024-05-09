import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col md:flex-row py-4 md:py-0">
      <div className="w-full h-52 xl:h-[500px] md:w-1/2 relative">
        <Image src="/hero.png" alt="My Hero Photo" fill objectFit="contain" />
      </div>
      <div className="w-full min-h-48 md:w-1/2 flex flex-col justify-center gap-y-4 mt-10 md:mt-0">
        <h1 className="text-2xl md:text:6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
        <p>Welcome to my digital canvas, where innovation and creativity converage, with a keen eye for aesthetics and mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.</p>
        <div className="flex flex-col md:flex-row gap-2">
          <button className="p-2 md:p-4 bg-black text-white rounded-md font-bold">View My Work</button>
          <button className="p-2 md:p-4 bg-transparent text-black ring-1 ring-black rounded-md font-bold">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
