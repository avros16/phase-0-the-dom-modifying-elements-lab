const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");
for (let i=0; i<3;i++) {
    const li = document.createElement("li");
    li.textContent = (i+1).toString();
    ul.append(li);
}
element.append(ul);

const elemen = documeent.getElementByID("main");
element.style.height ="300px";
element.style.backgroundColor = "#27647B";
