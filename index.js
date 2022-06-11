$('document').ready(function() {
    $('#story-btn').on('click', function() {
        let name = $('#person-name').val();
        let adjective = $('#adjective').val();
        let verb = $('#verb').val();
        let adverb = $('#adverb').val();
        if(!!name && !!adjective && !!verb && !!adverb){
            $('#output').html('Once ' + name + ' came to nFactorial Incubator, and noticed that Murat was ' + adjective + '. This very minute, ' + name + ' started to ' + verb + ' because Dalida learned HTML/CSS very ' + adverb + '.');
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