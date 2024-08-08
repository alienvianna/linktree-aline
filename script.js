function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    //tag img
    const img = document.querySelector("#profile img");

    //substituir a imagem
    if (html.classList.contains('light')) {
        //light mode
        img.setAttribute('src', './assets/avatar-light.png');
    }else{
        //sem light mode
        img.setAttribute('src', './assets/avatar.png');
    }
}