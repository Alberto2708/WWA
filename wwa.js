let index = 0;
const colors = ['#17022e', '#2e022c', '#02292e', '#0e2e02', '#2e1502', '#312b03'];
let colorC = 0;

const s = ( k ) => {

  k.changeIndex = (u) =>{
    u = "http://localhost:3000/"+index.toString();
    if(index<4){
      index += 1;
    }
    else{
      index = 0;
    }

    return u;
  }

  k.changeBackgroundColor = () => {
    const newColor = colors[colorC];
    document.body.style.backgroundColor = newColor;
    if(colorC < colors.length){
      colorC += 1
    }
    else{
      colorC = 0
    }
}

};


let myp5 = new p5(s,document.getElementById('p5'));
