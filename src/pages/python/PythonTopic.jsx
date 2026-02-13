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
    </div>
  );
}