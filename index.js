let circle = document.querySelector(".circle");
    btn.addEventListener('click', () => {
        btn1.style.display = "block";
        btn.style.display = "none";
        document.querySelector('.change-color1').style.display = "flex";
    })

    btn1.addEventListener('click', function () {
        btn1.style.display = "none";
        btn2.style.display = "block";
        document.querySelector('.change-color2').style.display = "flex";
    })
    btn2.addEventListener('click', function () {
        btn2.style.display = "none";
        btn3.style.display = "block";
        document.querySelector('.change-color3').style.display = "flex";
    })

    let colored = document.querySelectorAll('.colored');
    let percentege = document.querySelectorAll('.percentege');
    let c=Array.from(colored);
    let p=Array.from(percentege);
    
    
    p[0].addEventListener('change',function(){
        document.querySelector('.left').style.background=`linear-gradient(${c[0].value} ${p[0].value} ,transparent ${p[0].value})`;
    })
   p[1].addEventListener('change',function(){
    document.querySelector('.right').style.background=`linear-gradient(${c[1].value} ${p[1].value} ,transparent ${p[1].value})`;
   })
   p[2].addEventListener('change',function(){
    document.querySelector('.top').style.background=`linear-gradient(${c[2].value} ${p[2].value} ,transparent ${p[2].value})`;
   })
   p[3].addEventListener('change',function(){
    document.querySelector('.bottom').style.background=`linear-gradient(${c[3].value} ${p[3].value} ,transparent ${p[3].value})`;
   })
