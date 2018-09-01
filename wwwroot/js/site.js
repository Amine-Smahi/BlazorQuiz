window.Animator = {
    Animate: function() {
        console.log("clicked");
     fadeSwitchElements('a', 'a');    
    }
    };


    function fadeSwitchElements(id1, id2)
    {
        var element1 = $('#' + id1);
        var element2 = $('#' + id2);
        
        if(element1.is(':visible'))
        {
            element1.fadeToggle(300);
            element2.fadeToggle(300);
        }
        else
        {
             element2.fadeToggle(500, function() {
                element1.fadeToggle(500);
            });   
        }    
    }

