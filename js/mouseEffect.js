// Mouse Hover Effect
var elBody = document.querySelector("body");
document.addEventListener("mousemove", (e) => {
  var element = document.createElement("div");
  element.setAttribute("class", "mouse-effect");
  element.setAttribute(
    "style",
    `left:${e.clientX - 10}px; top:${e.clientY - 10}px`
  );

  element.onanimationend = () => {
    element.remove();
  };

  elBody.insertAdjacentElement("beforeend", element);
});
