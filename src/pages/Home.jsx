import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Learn Coding the Smart Way 🚀
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Platform belajar coding interaktif untuk berbagai bahasa pemrograman.
        </p>

        <Link
          to="/python"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-lg transition"
        >
          Start Learning
        </Link>
      </section>

      {/* Popular Languages */}
      <section className="px-8 pb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Popular Languages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <LanguageCard title="Python" link="/python" />
          <LanguageCard title="C++" link="/cpp" />
          <LanguageCard title="JavaScript" link="/javascript" />

        </div>
      </section>

    </div>
  );
}

function LanguageCard({ title, link }) {
  return (
    <Link to={link}>
      <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition shadow-lg hover:scale-105 transform duration-300">
        <h3 className="text-2xl font-bold text-green-400">{title}</h3>
        <p className="text-gray-400 mt-2">
          Learn {title} from beginner to advanced.
        </p>
      </div>
    </Link>
  );
}

export default Home;