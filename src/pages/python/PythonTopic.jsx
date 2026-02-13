import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { pythonOrder, pythonTopics } from "../../data/pythonTopics";
import { saveProgress, getProgress } from "../../utils/progress";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function PythonTopic() {
  const { topic } = useParams();
  const lesson = pythonTopics[topic];
  const navigate = useNavigate();

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const progress = getProgress();
    setCompleted(progress.includes(topic));
  }, [topic]);

  const currentIndex = pythonOrder.indexOf(topic);
  const prevTopic = pythonOrder[currentIndex - 1];
  const nextTopic = pythonOrder[currentIndex + 1];

  const handleMarkComplete = () => {
    saveProgress(topic);
    setCompleted(true);
  };

  if (!lesson) {
    return <h1 className="text-2xl">Topic not found</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        {lesson.title}
      </h1>

      <p className="text-gray-400 mb-6 whitespace-pre-line">
        {lesson.content}
      </p>

      <SyntaxHighlighter
        language="python"
        style={oneDark}
        customStyle={{
          borderRadius: "12px",
          padding: "20px",
          fontSize: "14px"
        }}
      >
        {lesson.code}
      </SyntaxHighlighter>

      <button
        onClick={handleMarkComplete}
        disabled={completed}
        className={`mt-6 px-6 py-2 rounded-lg transition ${
          completed
            ? "bg-green-700 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 text-black"
        }`}
      >
        {completed ? "Completed ✅" : "Mark as Completed"}
      </button>

      <div className="flex justify-between mt-10">
        {prevTopic ? (
          <button
            onClick={() => navigate(`/python/${prevTopic}`)}
            className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-lg transition"
          >
            ⬅ Previous
          </button>
        ) : <div />}

        {nextTopic ? (
          <button
            onClick={() => navigate(`/python/${nextTopic}`)}
            className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-lg transition"
          >
            Next ➡
          </button>
        ) : <div />}
      </div>
    </div>
  );
}

export default PythonTopic;
