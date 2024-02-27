// .on() method is being applied in entire unordered list.
// This method accepts this 3 methods, type of event, element where event is applicable and function which is called upon occuring the event.
// $('li').click() this method is not applicable in dynamic list addition we are doing in the code.
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});
// toggleClass method is accepting class as an argument which we created in css file.
// toggleClass method applies and removes the class
// fetching the value from input text and when enter is pressed the list getting appended dynamically.
// enter value is 13 in keypress.
$('#inp').keypress(function(e){
    const todoText = $(this).val();
    if (e.which === 13){
    $('#list').append(`<li><span>X</span> ${todoText}</li>`)
    $(this).val("")
    }
})

$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    })
    e.stopPropagation();
})

$('#plus').click(function(){
    $('#inp').fadeToggle();
})