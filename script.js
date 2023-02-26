const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      jokeContainer.textContent = `${data.joke}`;
      jokeContainer.classList.add("fade");
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

btn.addEventListener("click", getJoke);
getJoke();