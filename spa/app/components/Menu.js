export function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">Search</a>
    <span>-</span>
    <a href="#/contact">Contact</a>
    <span>-</span>
    <a href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprende JS</a>`;
  return $menu;
}
