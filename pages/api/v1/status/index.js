function status(request, response) {
  response.status(200).json("API is running");
}

export default status;
