export function PostCard(props){
    let {date, id, link, slug, title, _embedded} = props;
    let dateFormat = new Date(date).toLocaleString();
    let urlPoster = _embedded["wp:featuredmedia"] 
        ? _embedded["wp:featuredmedia"][0].source_url
        : "app/assets/favicon.png",
        imageURL = "https://loremflickr.com/200/200/any";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id);   
  });

    return `
    <article class= "post-card">
        <img src="${urlPoster}" alt="${title.rendered}" width="200" height="200">
        <h2>${title.rendered}</h2>
        <p>
            <time datetime="${date}">${dateFormat}</time> 
            <a href="#/${slug}" data-id="${id}">View Publication</a> 
        </p>
    </article>
    `;
}