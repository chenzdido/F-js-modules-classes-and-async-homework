const getPoetry = () => {
  const result = [];
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
      result.push(data.origin);
      result.push(data.author);
      result.push(data.content);
      return result;
    })
    .catch((error) => console.error("Error:", error));
};

export default getPoetry;
