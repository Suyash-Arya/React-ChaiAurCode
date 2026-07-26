function Customrender(reactElement, container) {
  /*const DomElement = document.createElement(reactElement.type);
  DomElement.innerHTML = reactElement.Children;
  DomElement.setAttribute("href", reactElement.props.href);
  DomElement.setAttribute("target", reactElement.props.target);
  container.appendChild(DomElement);*/

  const DomElement = document.createElement(reactElement.type);
  DomElement.innerHTML = reactElement.Children;

  for (prop in reactElement.props) {
    if (prop == "Children") continue;

    DomElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(DomElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "Click here to visit Google",
};

const mainContainer = document.querySelector("#root");

Customrender(reactElement, mainContainer);
