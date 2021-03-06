
var Todo = function(task) {
  this.task = task;
  this.status = (task.status !== undefined ? task.status : 'undone');
};

var bin = {
  "data": ""
};

var storage = [];
var $todoForm = $('#todo-form');

bin.data = storage;

$todoForm.on('submit', function(item) {

  item.preventDefault();

  var listItem = $('#todo-input').val();
  var startTask = new Todo(listItem);

  storage.push(startTask);

  this.reset();

  $('section').html(template.todolist(bin));

  declarePrototype();

});


$('section').on('click','li', function(){

  $(this).css('background-color', '#520603');
  $(this).css('opacity', '0.7');
  $(this).parent().css('text-decoration', 'line-through');
  $(this).status = 'done';

});


//prototype functions

function declarePrototype() {
  if (storage.length > 8) {
    Todo.prototype.isEmergent = true;
    console.log("MAN that's a lot of stuff");
  }
}

$.fn.fadeOut = function(){

  $(this).css('background-color', '#520603');

  $(this).css('opacity', '0.7');

  $(this).parent().css('text-decoration', 'line-through');

  $(this).status = 'done';
};

$('section').on('click','li', function(){
  $(this).fadeOut();
});
