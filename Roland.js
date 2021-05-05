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

        var arr = ["have the last word","be silent","execute a pirouette"];

        function onedown(obj)
        {
            var str = $(obj).val();
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if(e.keyCode == 13)
            {
               for(var i=0;i<arr.length;i++)
               {
                    if(arr[i]== str)
                    {
                        $(obj).next().removeClass("close");
                        $(obj).next().attr("src","./asset/ok.png");
                        arr.splice($.inArray(str,arr),1);
                        $(obj).attr("readonly","readonly");
                        break;
                    }
                    else
                    {
                        $(obj).next().removeClass("close");
                        $(obj).next().attr("src","./asset/err.png");
                    }
               }
               
            }
        }
      