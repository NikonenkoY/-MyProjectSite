$(document).ready(function(){

    $('#star').raty({ 
         click: function(score, text) {
         $('button[name="send"]').one('click', function(){
             //$('#pre2').text(score);
             $( "<p>Оценка: "  + score + "</p><hr>" ).appendTo( ".text-com" );
         });  
  }     
    });
    $('.form-comment').on('mouseover', function(){
        $('#mes').css('display','block');
    });
 
    $("#btn").on('click',function(){ 
        $(".login").fadeOut(2000, function(){
           $(".register").fadeIn(2000)});
         
        });
    
    $(document).one('click','button[name="send"]',function(event){
        var comment = $("textarea[name='comment']").val();
        var commen = $("input[name='commen']").val();
        event.preventDefault();
        $('<strong>'+ commen + '</strong><hr>').appendTo('.text-com');
        $('<p>'+ comment + '</p><hr>').appendTo('.text-com');
        $("#com")[0].reset();
        
    });
 $(function(){
        var field = new Array("username", "password");   
        $("form.login").submit(function() {    
            var error=0; 
            $(".login").find(":input").each(function() {
                for(var i=0;i<field.length;i++){ 
                    if($(this).attr("name")==field[i]){ 
                        if(!$(this).val()){
                            $(this).css('border', 'red 1px solid');
                            error=1;                                   
                        }
                        else{
                            $(this).css('border', 'gray 1px solid');
                        }  
                    }               
                }
           })
           
            if(error==0){ 
                return true;
            }
            else{
            if(error==1) var err_text = "Не все обязательные поля заполнены!";
            $("#messenger").html(err_text).css('color','red').css('margin-left','10px'); 
            $("#messenger").fadeIn("slow"); 
            return false; 
            }      
        })
    });
$(function(){
        var fiel = new Array("login1", "password1");   
        $(".register").submit(function() {    
            var erro=0; 
            $(".register").find(":input").each(function() {
                for(var i=0;i<fiel.length;i++){ 
                    if($(this).attr("name")==fiel[i]){ 
                        if(!$(this).val()){
                            $(this).css('border', 'red 1px solid');
                            erro=1;                                   
                        }
                        else{
                            $(this).css('border', 'gray 1px solid');
                        }  
                    }               
                }
           })
           
            if(erro==0){ 
                return true;
            }
            else{
            if(erro==1) var err_text = "Не все обязательные поля заполнены!";
            $("#messenge").html(err_text).css('color','red').css('margin-left','10px'); 
            $("#messenge").fadeIn("slow"); 
            return false; 
            }
        })
                    
    });
 });   

$(document).ready(function(){
  $("#login_active").submit(function() { 
    var username = $('#username').val(); 
    var password = $('#password').val(); 
    var yes = true;
    var output = [];
     console.log(username);
     console.log(password);
    if (username && password) { 
           $.ajax({
        type: "POST",
        url: "http://smktesting.herokuapp.com/api/login/", 
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({username: username, password: password}),
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          $('#messenger').text("responseText: " + XMLHttpRequest.responseText 
            + ", textStatus: " + textStatus 
            + ", errorThrown: " + errorThrown);
          $('#messenger').addClass("error");
        }, 
        success: function(data){
         if (data.error) { 
           $('#messenger').text('');
          $('#messenger').addClass("error");         
          }
          else { 
              if(data.success == yes){
               $('input').removeAttr("disabled");
               $('textarea').removeAttr("disabled");
               $('#mes').css('display','none');
               $('.form-comment').on('mouseover', function(){
               $('#mes').css('display','none');
               });
                  alert('Успех!'); 
              }else{
                  alert('Неверный логин или пароль!');
              }
            $('#messenger').hide();
            $('#messenger').text("data.success: " + data.success 
              + ", data.userid: " + data.userid);
            $('#messenger').addClass("success");
          } 
        } 
      }); 
        
    } 
    else {
      $('#messenger').text("enter username and password");
      $('#messenger').addClass("error");
    } 
    $('#messenger').fadeIn();
    return false;
  });
});
$(document).ready(function(){
  $("#register").submit(function() { 
    var username = $('#username1').val();
    var password = $('#password1').val(); 
    var yes = true;  
     console.log(username);
     console.log(password);
    if (username && password) { 
           $.ajax({
        type: "POST",
        url: "http://smktesting.herokuapp.com/api/register/", 
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({username: username, password: password}),
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          $('#messenger').text("responseText: " + XMLHttpRequest.responseText 
            + ", textStatus: " + textStatus 
            + ", errorThrown: " + errorThrown);
          $('#messenger').addClass("error");
        }, 
        success: function(data){
            console.log(data);
          if (data.error) { 
            $('#messenger').text("data.error: " + data.error);
            $('#messenger').addClass("error");
          } 
          else { 
              if(data.success == yes){
               $('input').removeAttr("disabled");
               $('textarea').removeAttr("disabled");
               $('.form-comment').on('mouseover', function(){
               $('#mes').css('display','none');
               });
                  alert('Успех'); 
              }
            $('#messenger').hide();  
            $('#messenger').text("data.success: " + data.success 
              + ", data.userid: " + data.userid);    
            $('#messenger').addClass("success");
          } 
        } 
      });   
    } 
    else {
      $('#messenger').text("enter username and password");
      $('#messenger').addClass("error");
    } // иначе
    $('#messenger').fadeIn();
    return false;
  });
});
$(document).ready(function(){
    
   $('.product').append('<div class="card-produkt"></div>');
    $.getJSON( "http://smktesting.herokuapp.com/api/products/", function( data ) {
            var output = [];
			 $.each(data, function(key, val){
				 output += '<div class="card-produkt">';
				 output += '<a href="#"><img src="http://smktesting.herokuapp.com/static/' + val.img + '"></a>';
                 output += '<h4>' + val.title + '</h4>';				 
				 output += '<p>' + val.text + '</p>';
				 output += '</div>';
			 });
			  $('.product').html(output); 
 });
});
