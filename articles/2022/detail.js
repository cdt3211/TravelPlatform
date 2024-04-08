$(function(){
    $('#header_pu').find('a').each(function(){
       var urls=$(this).attr('href').split('../..')[1];
        $(this).attr('href',urls);
   })
})