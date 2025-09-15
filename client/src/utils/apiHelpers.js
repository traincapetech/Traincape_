export const API_BASE_URL = "http://localhost:8080"; // change for production

export const fetchCourses = async () => {
  const res = await fetch(`${API_BASE_URL}/courses`);
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
};
