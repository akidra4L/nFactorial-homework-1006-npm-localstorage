$('document').ready(function() {
    $('#calculate-btn').on('click', function() {
        let w = $('#image-width').val();
        let h = $('#image-height').val();
        let clrs = $('#colors').val();

        let ans = $('#image-width').val() * $('#image-height').val() * $('#colors').val() / 8 / 1024;
        if(ans < 64){
            $('#output').html('File is ' + ans + 'KB which is ok');
        } else {
            $('#output').html('Please fill in the blanks at the top!!!');
        }
    })
})

function setTheme(){
    let theme = localStorage.getItem("theme");
    if(theme === 'light'){
        setDarkTheme();
    } else {
        setLightTheme();
    }
}

function setDarkTheme() {
    localStorage.setItem("theme", "dark");
    const root = document.getElementById("main-container");
    root.className = "dark w-100 d-flex flex-row";
  }

function setLightTheme() {
    localStorage.setItem("theme", "light");
    const root = document.getElementById("main-container");
    root.className = "light w-100 d-flex flex-row";
}

function addCookies() {
    document.cookie = "name=alikhan; expires=Mon, 20 Jun 2022 20:00:00 GMT";
}