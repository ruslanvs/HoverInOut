$(document).ready( function () {
    var temp;
    $( "img" ).hover( function () {
        temp = $(this).attr( 'src' );
        $( this ).attr('src', 'turned/' + $( this ).attr( 'src' ) );
    }, function () { 
        $( this ).attr('src', temp );
    })
})


