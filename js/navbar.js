const navbar = document.querySelector('#navbar');
navbar.innerHTML = `
<div class="for-phone">
<div class="logo">
<a href="index.html"><img draggable='false' src="png/icon.jpg" alt="Speaking Books" /></a>
</div>
<div class="logo-font">
    <h1>Speaking <span>Books</span></h1>
</div>
</div>

<ul type="none" class="navitem primary manu-list">
<div class="icon cancel-btn">
    <i class="fas fa-times"></i>
</div>
<li class="item"><a href="index.html"><i class="fas fa-home"></i> Home</a></li>

<div class="drop-down">
    <li class="item">
        <a onclick="toggleHide()" href="#"><i class="far fa-folder-open"></i> Playlist <i id="remove-icon"
                class="fa fa-angle-down"></i></a>
    </li>
    <div id="para" class="drop-contant secondary">
        <a href="successful_youngs.html"> Successful Young's</a>
        <a href="motivational_stories.html"> Motivational Stories</a>
        <a href="Chapter_wise_book_summary.html"> Chapter wise summaries of books</a>
        <a href="Book_Summary.html"> Book Summary</a>
    </div>
</div>

<li class="item"><a href="index.html#team"><i class="fas fa-user-friends"></i></i> About</a></li>
<li class="item"><a href="shorts.html"><i class="fas fa-mobile-alt"></i> Shorts</a></li>
</ul>
<div class="icon manu-btn">
<i class="fas fa-bars"></i>
</div>
`

// drop down icon change
const dropButton = document.querySelector('#remove-icon');


dropButton.addEventListener('click', function() {
			
	if(dropButton.classList.contains("fa-angle-down")){
				
		dropButton.classList.remove("fa-angle-down");
		dropButton.classList.add("fa-angle-up");
    
	}else{		
		dropButton.classList.remove("fa-angle-up"); 
        dropButton.classList.add("fa-angle-down");
	}

})
