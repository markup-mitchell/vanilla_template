// alert("js is working");
//

const position = [0, 90];
const imageStyle = document.querySelector('#image').style;

function frame1() {
  imageStyle.right = `${position[0]}`;
}

function frame2() {
  imageStyle.right = `${position[1]}%`;
}
