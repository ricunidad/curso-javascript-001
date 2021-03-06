$(document).ready(function(){
    // Post
    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus leo sed nisl efficitur, id vulputate nulla luctus. Etiam quis lorem et justo tincidunt efficitur. Sed eu finibus eros. Ut rhoncus semper tincidunt. Donec consequat suscipit neque convallis tempus. Mauris aliquet orci et cursus euismod. Ut vestibulum, mauris vel pharetra consectetur, mauris arcu lacinia ipsum, in vehicula elit magna id ipsum. In porttitor sed felis rhoncus aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam congue eu velit quis suscipit. Cras laoreet velit et risus rutrum, in vehicula est imperdiet. Suspendisse ultrices malesuada ante, non porta quam suscipit quis.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus leo sed nisl efficitur, id vulputate nulla luctus. Etiam quis lorem et justo tincidunt efficitur. Sed eu finibus eros. Ut rhoncus semper tincidunt. Donec consequat suscipit neque convallis tempus. Mauris aliquet orci et cursus euismod. Ut vestibulum, mauris vel pharetra consectetur, mauris arcu lacinia ipsum, in vehicula elit magna id ipsum. In porttitor sed felis rhoncus aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam congue eu velit quis suscipit. Cras laoreet velit et risus rutrum, in vehicula est imperdiet. Suspendisse ultrices malesuada ante, non porta quam suscipit quis.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus leo sed nisl efficitur, id vulputate nulla luctus. Etiam quis lorem et justo tincidunt efficitur. Sed eu finibus eros. Ut rhoncus semper tincidunt. Donec consequat suscipit neque convallis tempus. Mauris aliquet orci et cursus euismod. Ut vestibulum, mauris vel pharetra consectetur, mauris arcu lacinia ipsum, in vehicula elit magna id ipsum. In porttitor sed felis rhoncus aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam congue eu velit quis suscipit. Cras laoreet velit et risus rutrum, in vehicula est imperdiet. Suspendisse ultrices malesuada ante, non porta quam suscipit quis.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus leo sed nisl efficitur, id vulputate nulla luctus. Etiam quis lorem et justo tincidunt efficitur. Sed eu finibus eros. Ut rhoncus semper tincidunt. Donec consequat suscipit neque convallis tempus. Mauris aliquet orci et cursus euismod. Ut vestibulum, mauris vel pharetra consectetur, mauris arcu lacinia ipsum, in vehicula elit magna id ipsum. In porttitor sed felis rhoncus aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam congue eu velit quis suscipit. Cras laoreet velit et risus rutrum, in vehicula est imperdiet. Suspendisse ultrices malesuada ante, non porta quam suscipit quis.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus leo sed nisl efficitur, id vulputate nulla luctus. Etiam quis lorem et justo tincidunt efficitur. Sed eu finibus eros. Ut rhoncus semper tincidunt. Donec consequat suscipit neque convallis tempus. Mauris aliquet orci et cursus euismod. Ut vestibulum, mauris vel pharetra consectetur, mauris arcu lacinia ipsum, in vehicula elit magna id ipsum. In porttitor sed felis rhoncus aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam congue eu velit quis suscipit. Cras laoreet velit et risus rutrum, in vehicula est imperdiet. Suspendisse ultrices malesuada ante, non porta quam suscipit quis.'
        }
    ];

    //console.log(posts);

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">Leer más...</a>
        </article>
        `;

        $('#post').append(post);
    })
    }
    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
          });
    }
        


        //selector de temas
        var theme = $('#theme');

        $('#to-green').click(function(){
            theme.attr('href', 'css/green.css')
        })

        $('#to-red').click(function(){
            theme.attr('href', 'css/red.css')
        })

        $('#to-blue').click(function(){
            theme.attr('href', 'css/blue.css')
        })

        // Scroll arriba
        $('.subir').click(function(e){
            e.preventDefault();

            $('html, body').animate({
                scrollTop:0
            }, 500);
        });

        //login falso

        

        $('#login form').submit(function(){
            var form_name = $('#form_name').val();

            localStorage.setItem('form_name', form_name);
        });

        var form_name = localStorage.getItem('form_name');
        if(form_name != null && form_name != undefined){
            var about_parrafo = $('#about p');

            about_parrafo.html("<br/><hr/><strong>Bienvenido, "+form_name+'</strong>');
            about_parrafo.append("<br/><a href='#' id='logout'>Cerrar sesión</a>");
            $('#login').hide();
        }

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
            console.log('borrado');
        });

        // Acordeon
        if(window.location.href.indexOf('about') > -1){
            $('#acordeon').accordion();
        }

        // Reloj
        if(window.location.href.indexOf('reloj') > -1){

            setInterval(function(){
                var reloj = moment().format('h:mm:ss a');
                $('#reloj').html(reloj);
            }, 1000)

        }

        // Validacion

        if(window.location.href.indexOf('contact') > -1){

            //$("#calendario").datepicker();
                
            $.validate({
                lang: 'es'
            });
        }
})