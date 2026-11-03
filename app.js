const button = document.getElementById("search-button")

button.addEventListener("click", function() {
fetch("superheroes.php").then(response => response.text()).then(data=> { alert(data);
});
});