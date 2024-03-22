export async function ajax(props) {
  let { url, cbSuccess } = props;

  // const requestOptions = {
  //   method: "GET",
  //   mode: "no-cors", // Solicitar sin credenciales (no-cors)
  // };

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message =
        err.statusText || "An error occurred while accessing the API....";
      document.getElementById("main").innerHTML = `
        <div class="error">
            <p>Error ${err.status}: ${message}</p>
        </div>`;
        document.querySelector(".loader").style.display = "none";
      console.log(err);
    });
}
