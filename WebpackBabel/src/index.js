import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
  element.innerHTML = _.join(["안녕하세요", "웹팩 공부중"], " ");

  return element;
}

document.body.appendChild(component());
