import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  Stacos = d.getElementById("tacos"),
  $template = d.getElementById("taco-template").content,
  $fragment = d.createDocumentFragment();
fetchOptions = {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
};

let prices, products;
const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
  fetch("https://api.stripe.com/vl/products", fetchOptions),
  fetch("https://api.stripe.com/vl/prices", fetchOptions),
])
  .then((responses) => Promise.all(response.map((res) => res.json())))
  .then((json) => {
    // console.log(json);
    products = json[0].data;
    prices = json[1].data;

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);
      console.log(productData);

      $template.querySelector(".taco").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}
        < br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}`;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let message =
      err.statusText || "An error occurred when connecting to the Stripe API.";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });

d.addEventListener("click", (e) => {
  if (e.target.matches(".taco *")) {
    let price = e.target.parentElement.getAttribute("data-price");
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [{ price, quantity: 1 }],
        mode: "subscription",
        successUrl:
          "http://127.0.0.1 500/ajax-ejercicios/assets/stripe-success.html",
        cancelUrl:
          "http://127.0.0.1 :5 500/ajax-ejercicios/assets/stripe-cancel.html",
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          $tacos.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});
