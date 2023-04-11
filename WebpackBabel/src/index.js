import _ from "lodash";
import "./index.css";
import music from "./music.png";

function component() {
  const element = document.createElement("div");
  const img = document.createElement("img");

  // 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
  element.innerHTML = _.join(["안녕하세요", "웹팩 공부중"], " ");

  img.src = music;

  element.appendChild(img);

  console.log(img.src);

  return element;
}

document.body.appendChild(component());
