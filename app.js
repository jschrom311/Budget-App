//Budget controller
var budgetController = (function() {
//some code

})();

//UI controller
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value, //either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }

    };

})();

//Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UIctrl.getDOMstrings();

    var ctrlAddItem = function() {
        //Get field input data
        var input = UICtrl.getInput();
        console.log(input);
        //Add item to budget controller
        //Add the item to the UI
        //Calculate the budget
        //Display budget on UI
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', function() {

    document.addEventListener('keypress', function(e) {
        //which for older browsers
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);