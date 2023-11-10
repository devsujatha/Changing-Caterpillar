$(function() {  
    $('#restore').hide();
         $("#transform").on('click', function() {
                $('h1').text('The Butterfly');

        $('#p1').html('This is a <strong>butterfly</strong> in its natural habitat:');
        
   
        $('img').attr('src', 'https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png');
        
        $('h1').css('color', 'orange');
        
        var newParagraph = $('<p id="added-paragraph">').text('Facts on Butterflies.');
        newParagraph.addClass("result");
        $('body').append(newParagraph);
        $('#added-paragraph').append('<ul>') ;
        $('ul').append('<li>There are more than 20,000 species of butterflies.</li>');
        $('ul').append('<li>Butterflies have up to 12000 eyes.</li>');
        $('ul').append('<li>Butterflies live only a few weeks.</li>');
        $('ul').append('<li>Butterflies use their feet to taste.</li>');

        $('a').attr('href', 'https://en.wikipedia.org/wiki/Butterfly').text('Butterfly');
        $('#transform').hide();
        $('#restore').show();
    });

    $("#restore").on('click', function() {
        location.reload(true); 
    });
});
