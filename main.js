import "./style.scss";
import { isNumber } from "./src/utils/common";
import { getSortNumber } from "./src/components/sort";

const input = document.querySelector("input");
const app = document.querySelector("#app");

console.log(input);
console.log(app);

const newDiv = document.createElement("div");

newDiv.classList.add("newDiv");

//innerHTML is not recommended
newDiv.textContent = "hello world";

// app.append(newDiv);

input.addEventListener("keyup", (e) => {
  // console.log(e);
  // console.log(e.target.value);
});

const button = document.querySelector("#add");
const list = [];

button.addEventListener("click", () => {
  //input.value is a string
  console.log(input.value);
  //+input.value is a number
  const getNumber = +input.value;
  if (!isNumber(getNumber)) {
    //!好处是少了一个包裹层，在这里尽量写主流的
    console.log("is not a number");
    return; //代表整体性质的退出
  }
  console.log("is number");

  list.push(getNumber);

  const sortList = getSortNumber(list);
  // clear list
  list.length = 0;
  list.push(...sortList);

  input.value = "";

  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  sortList.forEach((item, index) => {
    const tr = document.createElement("tr"); //row
    const th = document.createElement("th"); //head
    const td = document.createElement("td"); //detail
    th.textContent = index + 1;
    td.textContent = item;

    tr.append(th, td);
    tbody.append(tr);
  });
});
