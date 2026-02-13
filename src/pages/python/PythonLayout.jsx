import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProgress, resetProgress } from "../../utils/progress";
import { pythonOrder } from "../../data/pythonTopics";

function PythonLayout() {
  const [progress, setProgress] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setProgress(getProgress());
  }, [location]);

  const percentage = Math.round(
    (progress.length / pythonOrder.length) * 100
  );

  const handleResetProgress = () => {
    resetProgress();
    setProgress([]);
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6 text-green-400">
          Python Tutorial
        </h2>

        {/* Progress Bar */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">
            Progress: {percentage}%
          </p>
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        <ul className="space-y-3">
          {pythonOrder.map((topic) => (
            <li key={topic}>
              <NavLink
                to={`/python/${topic}`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg transition flex justify-between ${
                    isActive
                      ? "bg-green-500 text-black font-semibold"
                      : "hover:bg-gray-800"
                  }`
                }
              >
                <span className="capitalize">{topic}</span>
                {progress.includes(topic) && <span>✅</span>}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Reset Progress Button */}
        <button
          onClick={handleResetProgress}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
        >
          Reset Progress
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default PythonLayout;
