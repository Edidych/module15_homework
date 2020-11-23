const btn = document.querySelector('.j-btn-test');

function changeImg(){
    const btn = document.querySelector('.j-btn-test');
    const div = btn.querySelector('.btn_icon');
    const firstIcon = div.querySelector('.first');
    const twiceIcon = div.querySelector('.twice');


    if(firstIcon.style.display === "block"){
        firstIcon.style.display = "none";
        twiceIcon.style.display = "block";
    }else{
        firstIcon.style.display = "block";
        twiceIcon.style.display = "none";
    }


}

btn.addEventListener('click', changeImg);