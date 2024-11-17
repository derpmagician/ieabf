const url =
  "https://script.google.com/macros/s/AKfycbxloqNrjPcYkMpjVSovtp00ZdTt4_ZSd4u8zxVfuXEhiENeu9FM2cp7mWdfBJhWMkQMIw/exec";

document
  .getElementById("contact-form")
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
