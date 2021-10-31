window.onload = function()
{
    let button =  document.getElementById("hero-btn");
    /*listens for a click event*/
    button.addEventListener("click", clickListner);

    function clickListner(e){
        e.preventDefault();
        /*make the ajx request*/
        fetch('http://localhost/info2180-lab4/superheroes.php')
        .then(response => response.text())
        .then(data => {
            alert(data)
        })
        .catch(error => {
        console.log(error);
        });
    }
}
