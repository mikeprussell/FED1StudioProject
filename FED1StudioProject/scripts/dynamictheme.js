//DYNAMIC THEME FUNCTIONALITY

//NOTE: Ensure compatibility with your version of Bootstrap &
//the theme's target version.

function toggleTheme() {

    //Find the bootstrap link tag
    let currentTheme = document.getElementById("theme");
    console.log(currentTheme.getAttribute('href'));

    //Check if flatly is being used currently (currentTheme)
    if (currentTheme.getAttribute("href").includes("flatly")) {

        //If so, replace the href with the theme of our choice (darkly)
        currentTheme.setAttribute("href", "css/bootstrap-darkly-theme.css");
    }
    else {
        currentTheme.setAttribute("href", "css/bootstrap-flatly-theme.css")
    }

}

//Check to see if the browser's theme has been set previously using localstorage

if (localStorage.getItem("jspgtheme") != null) {

    setTheme(localStorage.getItem("jsptheme"));
}

function setTheme(themeName) {

    let currentTheme = document.getElementById("theme");

    switch (themeName) {

        case "flatly":
            currentTheme.setAttribute("href", "css/bootstrap-flatly-theme.css");
            break;

        case "darkly":
            currentTheme.setAttribute("href", "css/bootstrap-darkly-theme.css");
            break;

        case "superhero":
            currentTheme.setAttribute("href", "css/bootstrap-superhero-theme.css");
            break;

        default:
            break;

    }

    localStorage.setItem("jspgtheme", themeName);

}