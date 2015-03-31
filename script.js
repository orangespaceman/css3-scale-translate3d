$(document).ready(function(){

    var $links = $('a'),
    current = null;

    $links.bind('click', function(e){
        e.preventDefault();
        this.blur();

        var href = this.href.split('#')[1];

        // condition : treat home links differently
        if (href == "home") {
            $('#container').attr('class', '').addClass(current+'-to-home');
            current = null;
        } else {
            current = href;
            $('#container').attr('class', '').addClass('home-to-'+href);
        }
    });
});
