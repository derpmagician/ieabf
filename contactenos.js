const url =
  "https://script.google.com/macros/s/AKfycbxt_pCBjyfySzPl-B3liafnf0oSDPq7-OC5De-gc6Wk1wFff5FWws69ohyc7FyoxssYkA/exec";

document
  .getElementById("contact-form2")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Successful", data);
        this.reset();
        window.location.href = "formulario-enviado.html"; // Redirigir a la página de agradecimiento
      })
      .catch((err) => console.log("err", err));
  });
