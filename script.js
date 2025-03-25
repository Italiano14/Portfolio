document.addEventListener("DOMContentLoaded", function () {
    let boton1 = document.getElementById('btn1');
    let boton2 = document.getElementById('btn2');
    let main = document.getElementById('contenido-proyects');
    let main2 = document.getElementById('main-skills');
    let btn_Ver = document.getElementById('ver-mas');
    let btn_ver_proyectos = document.getElementById('ver-proyectos');

    let modo_claro = document.getElementById('modo-claro');
    let modo_oscuro = document.getElementById('modo-oscuro');

    let titulo = document.getElementById('title');
    let titulo_footer = document.getElementById('title_footer')
    let info = document.getElementById('info');

    let lista = document.getElementById('lista');
    let color_btn1 = document.getElementById('color_btn1')
    let color_btn2 = document.getElementById('color_btn2')

    let color_para_warap = document.getElementById('color_warap')

    let color_btn_es = document.getElementById('color_btn_es')
    let color_btn_en = document.getElementById('color_btn_en')

    let espanol = document.getElementById('modo-espanol');
    let english = document.getElementById('modo-ingles');


    espanol.addEventListener("click", function () {
        espanol.style.display = "none"
        english.style.display = "flex"
    })

    english.addEventListener("click", function () {
        english.style.display = "none"
        espanol.style.display = "flex"
    })


    boton1.addEventListener("click", function () {
        boton2.style.background = "#e9ebec";
        boton1.style.background = "white";
        main.style.display = "grid";
        main2.style.display = "none";
        btn_Ver.style.display = "flex"
        btn_ver_proyectos.style.display = "none"
    });

    boton2.addEventListener("click", function () {
        boton1.style.background = "#e9ebec";
        boton2.style.background = "white";
        main.style.display = "none";
        main2.style.display = "flex";
        btn_Ver.style.display = "none"
        btn_ver_proyectos.style.display = "flex"
    });

    modo_oscuro.addEventListener("click", function () {
        body.style.background = "#0c171d"
        modo_oscuro.style.display = "none"
        modo_claro.style.display = "flex"
        titulo.style.color = "white"
        titulo_footer.style.color = "white"
        info.style.color = "white"
        lista.style.background = "#172126"
        boton1.style.background = "#0c171d"
        boton2.style.background = "#172126"
        color_btn1.style.color = "white"
        color_btn2.style.color = "white"
        color_para_warap.style.background = "#172126"
        color_para_warap.style.color = "white"
        main2.style.color = "white"
        color_btn_es.style.background = "#0c171d"
        color_btn_es.style.color = "white"
        color_btn_en.style.background = "#0c171d"
        color_btn_en.style.color = "white"


        boton2.addEventListener('click', function () {
            boton1.style.background = "#172126"
            boton2.style.background = "#0c171d"

        })

        boton1.addEventListener('click', function () {
            boton2.style.background = "#172126"
            boton1.style.background = "#0c171d"
        })
    });

    modo_claro.addEventListener("click", function () {
        body.style.background = "#fafcfd"
        modo_claro.style.display = "none"
        modo_oscuro.style.display = "flex"
        titulo.style.color = "black"
        titulo_footer.style.color = "black"
        info.style.color = "#657881"
        lista.style.background = "#e9ebec"
        boton2.style.background = "#e9ebec";
        boton1.style.background = "white";
        color_btn1.style.color = "black"
        color_btn2.style.color = "black"
        color_para_warap.style.background = "#e9ebec"
        color_para_warap.style.color = "black"
        main2.style.color = "black"
        color_btn_es.style.background = "white"
        color_btn_es.style.color = "black"
        color_btn_en.style.background = "white"
        color_btn_en.style.color = "black"

        boton1.addEventListener("click", function () {
            boton2.style.background = "#e9ebec";
            boton1.style.background = "white";

        });

        boton2.addEventListener("click", function () {
            boton1.style.background = " #e9ebec";
            boton2.style.background = "white";

        });
    });




});


document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el contenedor con la clase 'contenido'
    const contenido = document.querySelector('.contenido');

    // Agrega la clase 'activo' al contenedor una vez que el contenido haya cargado
    setTimeout(() => {
        contenido.classList.add('activo');
    }, 150); // Retardo de 100ms para la animación
});
