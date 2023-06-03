// Callback :
let posts = ["About weather", "About weekend"];

const getPosts = () => {
  console.log(posts);
};

const createPost = (post, callBack) => {
  setTimeout(() => {
    posts.push(post);
    callBack();
  }, 3000);
};
createPost("About work", getPosts);
createPost("About hooka", getPosts);

// Promise :
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 2000);
  });
}

// Using the fetchData function with promises
fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetchData();
