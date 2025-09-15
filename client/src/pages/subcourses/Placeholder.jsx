import React from "react";
import { useParams } from "react-router-dom";

const Placeholder = () => {
  const { courseId, subcourseId } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Subcourse Placeholder
      </h1>
      <p className="text-gray-600">
        You opened subcourse <strong>{subcourseId}</strong> from course{" "}
        <strong>{courseId}</strong>. <br />
        This is a placeholder page. You can create a dedicated page for this
        subcourse later.
      </p>
    </div>
  );
};

export default Placeholder;
