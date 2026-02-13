import { NavLink, Outlet } from "react-router-dom";

function PythonLayout() {
  const topics = [
    "introduction",
    "variables",
    "operators",
    "if-else",
    "loops"
  ];

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6 text-green-400">
          Python Tutorial
        </h2>

        <ul className="space-y-3">
          {topics.map((topic) => (
            <li key={topic}>
              <NavLink
                to={`/python/${topic}`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-green-500 text-black font-semibold"
                      : "hover:bg-gray-800"
                  }`
                }
              >
                {topic}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default PythonLayout;
