$( document ).ready(() => {

    (function(){
        $('.contact-container').hide()
        $('.project-container').hide()
    })()



    const showProjects = () => {
        $('.main-content').children().hide()
        $('.project-container').fadeIn()
    }

    const showAbout = () => {
        $('.main-content').children().hide()
        $('.about-container').fadeIn()
    }

    const showContact = () => {
        $('.main-content').children().hide()
        $('.contact-container').fadeIn()
    }

    $('#about').click(() => {
        showAbout()
    })

    $('#projects-link').click(() => {
        showProjects()
    })

    $('#contact-link').click(() => {
        showContact()
    })


})