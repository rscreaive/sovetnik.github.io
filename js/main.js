
var checker = document.querySelector('#check_all');
var legal = document.querySelector('#legal');
var individual = document.querySelector('#individual');


    checker.addEventListener('click', function () {
        legal.classList.add('active');
        individual.classList.add('active');

    });

var checker = document.querySelector('#check__legal');

    checker.addEventListener('click', function () {
        legal.classList.add('active');
        individual.classList.remove('active');

});

var checker = document.querySelector('#check__individ');

checker.addEventListener('click', function () {
    individual.classList.add('active');
    legal.classList.remove('active');

});