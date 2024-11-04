
import { data } from "./data.js";

const array = document.querySelector("#array");

const list = () => {
  data.map(({ id, description, url, img }) => {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.style.backgroundImage = `url(${img})`;

    const link = document.createElement("a");
    link.classList.add("link-item");
    link.href = `${url}`;
    link.target = "_blank";
    link.textContent = "Live Demo";

    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = `${description}`;

    listItem.appendChild(link);
    listItem.appendChild(text);
    array.appendChild(listItem);
  });
};
list();
