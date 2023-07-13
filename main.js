const textareaEl = document.querySelector("#test");
const listEl = document.querySelector("#items");

const aliases = [
  { title: "FLS", value: "Anashevich Victor Pavlovich" },
  { title: "Adress", value: "Pushkina 24" },
  { title: "Phone", value: "380980138244" },
  { title: "SMS", value: "We are glad that you're using our service. Thanks" },
  { title: "Email", value: "bubaboba@gmail.com" }
];

aliases.forEach((alias) => {
  const liEl = document.createElement("li");
  liEl.textContent = alias.title;

  liEl.addEventListener("click", () => {
    let caret = textareaEl.selectionStart;

    const textBefore = textareaEl.value.substring(0, caret);
    const textAfter = textareaEl.value.substring(caret);
    const newText = textBefore + " " + alias.value + " " + textAfter;

    textareaEl.value = newText;
  });

  listEl.appendChild(liEl);
});
