const getPoetry = () => {
  const result = [];
  // TODO feedback：fetch第二个参数可以不用传，使用默认的就可以了
  return fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
    headers: {
      accept: "text/html",
    },
    credentials: "same-origin",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // TODO feedback：可以使用ES6特性解构result
      result.push(data.origin);
      result.push(data.author);
      result.push(data.content);
      return result;
    })
    .catch((error) => console.error("Error:", error));
};

export default getPoetry;
