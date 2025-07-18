let data = document.querySelector(`#in`);
let btn = document.querySelector(`.btn`);
let tasks = document.querySelector(`.list`);

btn.addEventListener("click" , (e)=>{
    e.preventDefault();
    tasks.innerHTML += `
                        <!-- deleting .value doesnt effect? -->
                        <li class="li"> <span> ${data.value} </span>
                        <div class="icon_style">
                            <i  class="fa-solid fa-x"></i>
                            <i  class="fa-regular fa-square-check"></i>
                        </div>  
                        </li>
        
                        `
        data.value = "";
})

tasks.addEventListener("click" ,(e)=>{
    if( e.target.classList.contains("fa-x") ) {
        e.target.closest("li").remove();
    }
})

tasks.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("fa-regular")){
        e.target.closest("li").querySelector(`span`).classList.toggle("done");
    }
})

let btn_reset = document.querySelector(`#reset`)
btn_reset.addEventListener("click" , (e)=>{
    e.preventDefault();
    tasks.innerHTML = "";
})

