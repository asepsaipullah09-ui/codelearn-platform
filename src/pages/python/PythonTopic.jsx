import { useParams } from "react-router-dom";
import pythonTopics from "../../data/pythonTopics";

function PythonTopic() {
  const { topic } = useParams();

  const lesson = pythonTopics[topic];

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

      <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
        <pre className="text-green-400">
          <code>{lesson.code}</code>
        </pre>
      </div>
    </div>
  );
}

export default PythonTopic;