document.addEventListener("DOMContentLoaded", function() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("es")) {
        window.location.href = "index.es.html";
    } else {
        window.location.href = "index.en.html";
    }
});
