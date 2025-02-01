const baseUrl = "http://localhost:3000/";

function register(email, password) {
  return this._makeRequest("/signup", "POST", { email, password });
};

function login(email, password) {
  return this._makeRequest("/signin", "POST", { email, password });
};
