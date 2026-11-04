const button = document.getElementById("search-button");

button.addEventListener("click", function() {
const query = document.getElementById("search-input").value;

fetch("superheroes.php?query=" + encodeURIComponent(query)).then(response => response.text()).then(data=> { document.getElementById("result").innerHTML = data; 


});
});