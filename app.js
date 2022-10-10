$('#menu').click(function(){
		$(this).toggleClass('open');
		$('#navlinks').toggleClass('visible');
	});

$('#mob').click(function(){
	$('#menu').removeClass("open");
	$('#navlinks').removeClass("visible");
})

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
