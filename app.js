//Budget controller
var budgetController = (function() {
//some code

})();

//UI controller
var UIController = (function() {
    //Some code
})();

//Global app controller
var controller = (function(budgetCtrl, UIctrl) {

    var ctrlAddItem = function() {
        //Get field input data
        //Add item to budget controller
        //Add the item to the UI
        //Calculate the budget
        //Display budget on UI
    }

    document.querySelector('.add__btn').addEventListener('click', function() {

    document.addEventListener('keypress', function(e) {
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);