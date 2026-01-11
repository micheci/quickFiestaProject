import { FiArrowRight } from "react-icons/fi";
import birthdayPartyHero from '../assets/BirthdayPartyHero.jpg';

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-[#FFF9F0]"
    >
      {/* Background image overlay */}
      <img
        src={birthdayPartyHero}
        alt="Birthday background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Centered content */}
      <div className="relative bg-white bg-opacity-95 p-12 rounded-2xl text-center max-w-lg shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF6600] leading-tight">
          Stress-Free Birthday Parties, Done for You!
        </h1>

        <p className="text-lg md:text-xl mb-6 text-gray-800">
          We handle the decor, setup, and cleanup so you can enjoy your child’s
          big day.
        </p>

        {/* CTA → scrolls to form */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6600] text-white font-semibold rounded-xl shadow hover:bg-[#e65c00] hover:shadow-lg transition-all duration-200"
        >
          Get a Quick Quote <FiArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
