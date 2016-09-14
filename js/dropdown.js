function dropdown()
{
	document.getElementById("dropdown-list").classList.toggle("show");
}

window.onclick = function(e)
{
	if(!e.target.matches('.dropbtn')){
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for(var i=0;i<dropdowns.length;i++)
		{
			var openDrop = dropdowns[i];
			if(openDrop.classList.contains("show")){
				openDrop.classList.remove("show");
			}
		}
	}
}