$(document).ready(function(){
    
    
    
    $("#zoekbalk").keyup(function(){
       

        var postdata = {
            zoekterm: $('#zoekbalk').val()
        }
        
        setTimeout(function(){  
        
                $.post("/form", postdata,function(postResponse){
                     $("p").empty();
            for (var i = 0; i < postResponse.name.length; i++)
            {
                $("#lijst").append("<p>" + postResponse.name[i] + "</p>")
            }
            

        })
        
        }, 300);
        
        

    })
})


