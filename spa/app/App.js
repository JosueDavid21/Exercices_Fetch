import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("root");
  
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  
  Router();
  
  // ajax({
  //   url: "no-valida",
  //   cbSuccess: () => {},
  // });
}

/*
consumir api de WordPress mediante ajax

export function App() {
  document.getElementById("root").innerHTML = `<h1>SPA con Vanilla JS</h1>`;
}

ajax({
  url: api.POSTS,
  cbSuccess: (posts) => {
    console.log(posts);
  },
});

ajax({
  url: api.CATEGORIES,
  cbSuccess: (categories) => console.log(categories),
});
*/
