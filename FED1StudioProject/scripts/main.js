const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLink 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        //Burger animation
        burger.classList.toggle('toggle');

    });

}

navSlide();

//Toggle Hamburger Menu Script

function toggleNav() {
    let navList = document.getElementById('nav-list');
    navList.classList.toggle('expanded');

    //Toggle Hamburger button/Close Button

    let btnMenu = document.getElementById('menu-btn');

    if (navList.classList.contains('expanded')) {
        btnMenu.innerHTML = "&times;";
    }
    else {
        btn.Menu.innerHTML = "&#9776;";

    }
}

function openClassesNav() {
    document.getElementById('classes-btn').style.display = "none";
    document.getElementById('classes-nav').style.width = "250px";
}

function closeClassesNav() {
    document.getElementById('classes-btn').style.display = "block";
    document.getElementById('classes-nav').style.width = "0";
}

$(".thumb").on("click", function () {

    //Find the src of the image that was clicked and store it as a variable
    var imgSrc = $(this).attr("src");

    //Plug in <img> tag into #lightbox-content - use imgSrc as the src
    $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" />');

    //Make the lightbox visible by fading in
    $("#lightbox-container").fadeIn(500);

    //When the user clicks anywhere in the #lightbox-container, fadeOut()
    $("#lightbox-container").on("click", function () {

        $(this).fadeOut(500);

    });//END of fadeOut

});//END .thumb click
