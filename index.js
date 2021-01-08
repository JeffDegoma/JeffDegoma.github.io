const handle = () => {
    alert('hi')
}
// setTimeout(handle,2000)
$( window ).on('load',() => {
    $('#cover').fadeOut(2000);

    (function(){

        $('.contact-container').hide()
        $('.about-container').hide()
        $('.project-container').hide()
    })()

    const date = new Date()
    const year = date.getFullYear();
    const $mainContent = $('.main-content')



    const showIntro = () => {
        $mainContent.children().hide()
        $('#hero').parent().siblings().removeAttr('style')
        $('.hero-container').fadeIn()
    }

    const showProjects = () => {
        $mainContent.children().hide()
        $('.project-container').fadeIn()
    }

   

    const showAbout = () => {
        $mainContent.children().hide()
        $('.about-container').fadeIn()
    }

    const showContact = () => {
        $mainContent.children().hide()
        $('.contact-container').fadeIn()
    }

    $('.footer-text').html(`&copy; ${year} Jeffrey Degoma`)

/*******************************************/
            /*Handlers*/
/*******************************************/

    $('.nav-list').on('click', 'li', function(){
        $(this).css('color', 'red')
        $(this).siblings().removeAttr('style')
    })

    $('#hero').click(() => {
        showIntro()
    })

     $('#about-link').click(() => {
        showAbout();
    })

    $('#projects-link').click(() => {
        showProjects()
    })

    $('#contact-link').click(() => {
        showContact()
    })

})


