const getTodo = (callback) => {
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
  request.open("GET", "todos.json");
  request.send();
};

getTodo((err, data) => {
  console.log("callback fired");
  console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
