const base = "grade";

const grades = {
  all_grades: {
    url: `${base}/get-grade/`,
    method: "GET",
  },
  add_grade: {
    url: `${base}/create-grade/`,
    method: "POST",
  },
  edit_grade: {
    url: `${base}/update-grade/`,
  },
  delete_grade: {
    url: `${base}/delete-grade/`,
    method: "DELETE",
  },
  get_streams: {
    url: `${base}/get-stream/`,
    method: "GET",
  },
  add_stream: {
    url: `${base}/create-stream/`,
    method: "POST",
  },
  edit_stream: {
    url: `${base}/update-stream/`,
  },
  delete_stream: {
    url: `${base}/delete-stream/`,
  },
};

export default grades;
