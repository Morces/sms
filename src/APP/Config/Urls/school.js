const base = "school";

const school = {
  create_school: {
    url: `${base}/create-school-details`,
    method: "POST",
  },
  get_details: {
    url: `${base}/get-school-details`,
    method: "GET",
  },
  update_details: {
    url: `${base}/update-school-details/`,
    method: "PUT",
  },
  delete_details: {
    url: `${base}/delete-school-details/`,
    method: "DELETE",
  },
};

export default school;
