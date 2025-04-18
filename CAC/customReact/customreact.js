function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.children);

  container.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

// *custom render
customRender(reactElement, mainContainer);

//! evaluated expression - {} 

// {} React ke andar JS code likhne ka tarika hai.
// Jo bhi andar likhoge (jaise 2+2, user.name, condition ? A : B) — woh evaluate hoke page pe render hoga.
// Bas if, for jaise statements mat likhna — sirf expressions!