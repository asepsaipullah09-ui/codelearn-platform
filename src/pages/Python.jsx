import { useState } from "react";

function Python() {
  const topics = [
    "Introduction",
    "Variables",
    "Operators",
    "If Else",
    "Loops"
  ];

  const [activeTopic, setActiveTopic] = useState("Introduction");

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6 text-green-400">
          Python Tutorial
        </h2>

        <ul className="space-y-3">
          {topics.map((topic) => (
            <li
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`cursor-pointer px-3 py-2 rounded-lg transition 
                ${activeTopic === topic 
                  ? "bg-green-500 text-black font-semibold" 
                  : "hover:bg-gray-800"}`}
            >
              {topic}
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">{activeTopic}</h1>

        <p className="text-gray-400 mb-6">
          This section explains about {activeTopic} in Python programming.
        </p>

        <div className="bg-gray-900 p-6 rounded-lg">
          <code className="text-green-400">
            print("Hello World")
          </code>
        </div>
      </main>
    </div>
  );
}

export default Python;