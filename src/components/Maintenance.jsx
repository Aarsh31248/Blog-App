import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Moon, Sun } from "lucide-react";

const Maintenance = () => {
  const [dark, setDark] = useState(true);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center px-4 transition-colors duration-300
        ${
          dark
            ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white"
            : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
        }`}
    >
      <div
        className={`relative w-full max-w-md p-8 rounded-2xl shadow-xl
          ${dark ? "bg-white/5 backdrop-blur-lg" : "bg-white"}`}
      >
        {/* Toggle Dark/Light */}
        <button
          onClick={() => setDark(!dark)}
          className="absolute top-4 right-4 p-2 rounded-full hover:scale-105 transition cursor-pointer"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Lottie Animation */}
        <Player
          autoplay
          loop
          src="https://lottie.host/6b1c0cf6-2f1c-4ceb-85c1-c5236084cc09/J35Uruy7qb.json"
          className="w-full max-w-s mx-auto"
        />

        {/* Text */}
        <h1 className="text-2xl font-bold text-center mt-6">
          Website is Under Maintenance
        </h1>

        <p
          className={`text-sm text-center mt-3 leading-relaxed
            ${dark ? "text-gray-300" : "text-gray-600"}`}
        >
          We’re improving the website to give you a better experience. Please
          check back soon.
        </p>

        <div className="text-center mt-5 text-indigo-500 font-medium">
          🚧 We’ll be back shortly
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
