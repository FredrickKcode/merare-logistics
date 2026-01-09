document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.elegant-form');
  if (!form) return;

  form.addEventListener('submit', () => {
    const data = {
      name: form.querySelector('input[name="name"]')?.value || "",
      email: form.querySelector('input[type="email"]')?.value || "",
      message: form.querySelector('textarea')?.value || ""
    };

    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => console.log("Sent to Haskell:", res))
    .catch(() => console.log("Haskell backend not running"));
  });
});
