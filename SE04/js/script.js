let voroodi = document.getElementById('name');
let khorooji = document.querySelector('.screen');

function showMyname(name, title) {
  document.getElementById("para1").innerHTML =
    "<h1>" + name + " | " + title + "</h1>";
}
function sum(a, b, c, d) {
    console.log(a + b + c + d);
}
function showName () {
    khorooji.innerHTML = "<h1>" + voroodi.value + "</h1>";
}
