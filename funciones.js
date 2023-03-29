
$('.checkbox').click(function(){
    if($('input.checkbox').is(':checked'))
    {
        $('.tema').attr('href', 'css/noche.css');
    }
    else
    {
        $('.tema').attr('href', 'css/dia.css');
    }
});