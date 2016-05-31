$(document).ready(function(){
    
    
    
    $("#zoekbalk").keydown(function(){
        $("p").empty();

        var postdata = {
            zoekterm: $('#zoekbalk').val()
        }
        
        setTimeout(function(){  
        
                $.post("/form", postdata,function(postResponse){
            for (var i = 0; i < postResponse.name.length; i++)
            {
                $("#lijst").append("<p>" + postResponse.name[i] + "</p>")
            }
            

        })
        
        }, 300);
        
        

    })
})


