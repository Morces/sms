const base = "students";

const students = {
  all_students: {
    url: `${base}/students/`,
    method: "GET",
  },
  single_student: {
    url: `${base}/students`,
    method: "GET",
  },
  update_student: {
    url: `${base}/update-student/`,
    method: "PUT",
  },
};

export default students;
