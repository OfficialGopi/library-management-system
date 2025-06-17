const tabOptions = {
  BOOKS: "BOOKS",
  BORROW: "BORROW",
  MEMBERS: "MEMBERS",
};

const tabOptionsEnum = Object.values(tabOptions);

export { tabOptions, tabOptionsEnum };

const api = "http://127.0.0.1:9000/api";
const fetchRequestType = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const fetchHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export { api, fetchRequestType, fetchHeaders };
