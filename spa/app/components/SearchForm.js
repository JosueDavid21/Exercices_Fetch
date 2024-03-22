export function SearchForm() {
  const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Search...";

  $form.appendChild($input);

  d.addEventListener("submit", e =>{
    if(!e.target(".search-form")) return false;
    e.preventDefault();
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`
  });

  return $form;
}
