// alert("js is working");
//

const position = [0, 90, 185];
const imageStyle = document.querySelector('#image').style;

function frame1() {
  imageStyle.right = `${position[0]}`;
}

function frame2() {
  imageStyle.right = `${position[1]}%`;
}

function frame3() {
  imageStyle.right = `${position[2]}%`;
}


