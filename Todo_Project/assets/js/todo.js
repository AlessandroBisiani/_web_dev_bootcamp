// Test
// $("li").css("color", "purple");


$("ul").on("click", "li", function(){
    $(this).toggleClass("checkedOff")
});

$("ul").on("click", ".liDelete", function(e){
    // alert("clicked");
    // console.log($(this).text());
    $(this).parent().fadeOut(350, function(){
        $(this).remove();
    }); 
    e.stopPropagation();
});

$("#liInput").on("keypress", function(e){
    if(e.which === 13){
        // get the text from the input
        var newTodo = $(this).val();

        // create an li with the text content
        if($(this).val()){
            $("ul").append("<li><span class=\"liDelete\"><i class=\"fa fa-trash\"></i></span>" + newTodo + "</li>");
            $(this).val("");
        }
    }
});

$("#inputToggleIcon").click(function(){
    $("#liInput").fadeToggle();
});
