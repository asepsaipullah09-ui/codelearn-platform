import { useParams } from "react-router-dom";

function PythonTopic() {
  const { topic } = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {topic.replace("-", " ")}
      </h1>

      <p className="text-gray-400 mb-6">
        This is the {topic} lesson in Python.
      </p>

      <div className="bg-gray-900 p-6 rounded-lg">
        <code className="text-green-400">
          print("Learning {topic}")
        </code>
      </div>
    </div>
  );
}

export default PythonTopic;
