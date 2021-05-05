function clickimg()
        {
            var imgs=$("#imgs");
            if(imgs.attr("class") == "close")
            {
                   imgs.removeClass("close");
                   $("#pcontent").addClass("close");
            }
            else
            {
                $("#pcontent").removeClass("close");
                imgs.addClass("close");
            }
        }