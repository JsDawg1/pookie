var yes = document.querySelector(".yesBtn");
var no = document.querySelector(".noBtn");
const main = document.querySelector(".container");
const video = document.querySelector(".videoContainer");
const closeImg = document.querySelector(".closeImg");
const increImg = document.querySelector(".increImg");
const img = document.querySelector(".ryt img");
const h2 = document.querySelector(".body h2");
const p = document.querySelector(".body p")


function pee(){
}

var check = false;
function one(){
                 yes.classList.add('active');
                no.classList.add('active');
                
                 
                no.addEventListener("mouseover", function1);
                no.addEventListener("mouseout", function2);
                
                yes.addEventListener('click', function(){
                    img.src = 'hpy5.jpg'
                 });
}


function two(){
         
         no.replaceWith(no.cloneNode(true));
         yes.replaceWith(yes.cloneNode(true));
         yes = document.querySelector(".yesBtn");
         no = document.querySelector(".noBtn");

         no.addEventListener("mouseover", function3);
         yes.addEventListener('click', function(){
            img.src= 'hpy6.jpg'
            setTimeout(playVideo2, 1000);
         })
    
}

function three(){
    no.replaceWith(no.cloneNode(true));
    yes.replaceWith(yes.cloneNode(true));

    yes = document.querySelector(".yesBtn");
    no = document.querySelector(".noBtn");
    no.style.display = "block"
   
   
    yes.addEventListener('click', function(){
        img.src='thumbs.jpg';
    })
    no.addEventListener('click', playVideo);
}


function four(){
    no.replaceWith(no.cloneNode(true));
    yes.replaceWith(yes.cloneNode(true));

    yes = document.querySelector(".yesBtn");
    no = document.querySelector(".noBtn");


    // yes.addEventListener('click');
    no.addEventListener('click', function5);
    yes.addEventListener('click', playVideo1)

    increImg.style.display = "none";
}
    
      
    

const data = [   
    {
        image:"",
        h2:"",
        p:"",
    },
    {
        image:"ques1.jpg",
        h2:"Wanna by my pookie?",
        p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, asperiores!  Laborum veniam maxime voluptate adverse in parforver<span class='pSpan'>TF you're searching a fcking reason to be my pookie?</span> est atque animi corrupti obcaecati,magnam molestias ea ipsam eaque quo eius perspiciatis enim excepturi velit."

    },
    {
        image:"hpy3.jpg",
        h2:"Mandaila kutty kutty flowers vachu play panuviya?",
        p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, asperiores! Laborum veniam maxime voluptate <span class='pSpan'>Even na bald ah ponalum when we meet </span>est atque animi corrupti obcaecati,magnam molestias ea ipsam eaque quo eius perspiciatis enim excepturi velit."
    },
    {
        image:"sideeye.jpg",
        h2:"Apo no more Moon and Water girl jokes!",
        p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, asperiores! Laborum veniam maxime voluptate est atque<span class='pSpan'>No more mama works for moon and un frnd(Hasna)</span> animi corrupti obcaecati,magnam molestias ea ipsam eaque quo eius perspiciatis enim excepturi velit."
    },
    {
        image:"hpy1.jpg",
        h2:"Hot wheels car vangi tharuviya?",
        p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, asperiores! Laborum veniam maxime voluptate est atque <span class='pSpan'>Red Ferrari only!</span>animi corrupti obcaecati,magnam molestias ea ipsam eaque quo eius perspiciatis enim excepturi velit."
    }
]


const functions = [
    pee,
    one,
    two,
    three,
    four
]

const mwdith = yes.offsetWidth;
const mheight = yes.offsetHeight;
const bkcolor = yes.style.backgroundColor;



var pageindex = 0;
var check = 'no'
increImg.addEventListener("click", incre);



function incre(){
    pageindex++;
    if(pageindex<functions.length){
        img.src = data[pageindex].image;
        h2.innerText = data[pageindex].h2;
        p.innerHTML =data[pageindex].p;
        functions[pageindex]();
    }
}

    

function function1(){
    no.innerText = "Yes";
        increase = setInterval(function(){
        let width = yes.offsetWidth;
        let height = yes.offsetHeight;


        yes.style.width = (width+10)+'px';
        yes.style.height = (height+10)+'px'
        yes.style.backgroundColor = "red"
        
}, 500);}


function function2(){
    console.log("function 2")
    clearInterval(increase);
    no.innerText = "No"
    yes.style.width = mwdith+'px';
    yes.style.height = mheight+'px';
    yes.style.backgroundColor = bkcolor;
}

function function3(){
    no.style.display = "none";
    setTimeout("window.alert('Adiye Loosu cutie - only YES OR YES !')", 1500);
}

function function4(){
    
}

function changeimg(pic){
    check = true;
    console.log(check)
    if(check){
        img.src = pic;
    }
    check = false;
    
}
 

function function5(){

        no.disabled = true;
        no.style.opacity = "0.4px";
        setTimeout("window.alert('Sorry romba late - my loosu cutie pookie unaku NO nra option ela pathuko')", 500);

}
 

function playVideo() {
    const videoElement = document.querySelector(".videoContainer video");
    main.classList.add('active'); // adds the display none
   
    increImg.classList.add('active'); // adds the display none
    video.classList.add('active'); // adds the display flex
    
    if (videoElement) {
        videoElement.src = 'yelli_paavam.mp4';
        videoElement.currentTime = 0;  // Reset video to start
        videoElement.play();           // Play the video
    }
    console.log(video.style.display)
    closeImg.addEventListener('click', function(){
         
            closeImg.addEventListener("click", function(){
                videoElement.pause();
                video.classList.remove('active');
                main.classList.remove('active');
                increImg.classList.remove('active')
            })
        
    })
    
} 


function playVideo1() {
    const videoElement = document.querySelector(".videoContainer video");
    main.classList.add('active'); // adds the display none
   
    increImg.classList.add('active'); // adds the display none
    video.classList.add('active'); // adds the display flex
    
    if (videoElement) {
        videoElement.src = 'ryan_sing.mp4';
        videoElement.currentTime = 0;  // Reset video to start
        videoElement.play();           // Play the video
    }
    console.log(video.style.display)
    closeImg.addEventListener('click', function(){
         
            closeImg.addEventListener("click", function(){
                videoElement.pause();
                video.classList.remove('active');
                main.classList.remove('active');
                increImg.classList.remove('active')
                window.close();
            })
        
    })
}



function playVideo2() {
    const videoElement = document.querySelector(".videoContainer video");
    main.classList.add('active'); // adds the display none
   
    increImg.classList.add('active'); // adds the display none
    video.classList.add('active'); // adds the display flex
    
    if (videoElement) {
        videoElement.src = 'happyvid.mp4';
        videoElement.currentTime = 0;  // Reset video to start
        videoElement.play();           // Play the video
    }
    console.log(video.style.display)
    closeImg.addEventListener('click', function(){
         
            closeImg.addEventListener("click", function(){
                videoElement.pause();
                video.classList.remove('active');
                main.classList.remove('active');
                increImg.classList.remove('active')
               
            })
        
    })
}
