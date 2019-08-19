import reddit from './redditapi';

const searchForm = document.getElementById('search-form'); 
const searchInput = document.getElementById('search-input');


//FORM EVENT LISTENER 
searchForm.addEventListener('submit', e => {
	// Get search term 
	const searchTerm = searchInput.value; 
	
	
	//get sort 
	const sortBy = document.querySelector('input[name="sortby"]:checked').value;
	console.log(sortBy);
	
	

	//get limit
	const searchLimit = document.getElementById('limit').value; 
	console.log(searchLimit);
	
	
	
	
	//check input 
	if(searchTerm === '') {
	   //show a message 
		showMessage('Please add a search term', 'alert-danger'); 
	   }
	
	//clear input 
	
	searchInput.value = '';
	
	//search reddit 
	
	reddit.search(searchTerm, searchLimit, sortBy); 
	
				e.preventDefault(); 	
	
	
});


// SHOW MESSAGE 

function showMessage(message, className){
	//create a div 
	const div = document.createElement('div'); 
	//add classes 
	div.className = `alert ${className}`;
	//add text 
	div.appendChild(document.createTextNode(message));
	//get parent 
	
	const searchContainer = document.getElementById('search-container'); 
	
	//get search 
	const search = document.getElementById('search'); 
	
	//insert message 
	searchContainer.insertBefore(div, search); 
	
	//Timeout alert remove alert 
	setTimeout(() => document.querySelector('.alert').remove
			  (), 3000);
}