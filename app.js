$('#menu').click(function(){
		$(this).toggleClass('open');
		$('#navlinks').toggleClass('visible');
	});

$('#mob').click(function(){
	$('#menu').removeClass("open");
	$('#navlinks').removeClass("visible");
})

var text = ["Get set Go..", "This Shouldn't take much time", "Hang on few sec.."];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 3000);

/*Loading animation*/
function loader(){
	var y=document.querySelector('.box');
	var x= document.getElementById('preload');
	document.body.style.overflow="unset"
	y.style.display="none";
  
   setTimeout(()=>{
	x.style.opacity="0";
	x.style.transition="1s"
   },200) 
  
	  setTimeout(()=>{
	  x.style.display="none";
	},1000)
  }

  

const body=document.body;
let lastscroll=0;

window.addEventListener('scroll',()=>{
	const currentscroll=window.pageYOffset;

	if(currentscroll<=0){
		body.classList.remove('scrollup')
	}

	if(currentscroll>lastscroll && !body.classList.contains("scrolldown")){
		body.classList.remove("scrollup");
		body.classList.add("scrolldown")
	}


	if(currentscroll<lastscroll && body.classList.contains("scrolldown")){
		body.classList.remove("scrolldown");
		body.classList.add("scrollup")
	}

	lastscroll=currentscroll;
})
