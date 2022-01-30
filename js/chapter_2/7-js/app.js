const getTodo = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText); //get jison
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("colud not fetch", undefined);
    }
  });
  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", resource);
  request.send();
};

getTodo("todo/todos.json", (err, data) => {
  console.log(data);
  getTodo("todo/shirin.json", (err, data) => {
    console.log(data);
    getTodo("todo/bahar.json", (err, data) => {
      console.log(data);
    });
  });
});
