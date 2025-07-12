window.onload = function() {
    var input = document.getElementById("inputBox");
    var buttons = document.querySelectorAll(".buttons input[type='button']");

    // Store current input string
    var currentInput = "";

    buttons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var val = btn.value;
            switch(val) {
                case "C":
                    currentInput = "";
                    input.value = "";
                    break;
                case "=":
                    if(currentInput === "" || currentInput === ".") {
                        alert("Please Enter a Mathematical Expression");
                        return;
                    }
                    try {
                        // Replace x with * for multiplication
                        var expr = currentInput.replace(/x/g, "*");
                        input.value = eval(expr);
                        currentInput = input.value;
                    } catch {
                        input.value = "Error";
                        currentInput = "";
                    }
                    break;
                case "←":
                    // Backspace button functionality
                    currentInput = currentInput.slice(0, -1);
                    input.value = currentInput;
                    break;
                default:
                    // Only allow valid characters
                    if(["+", "-", "*", "/", ".", "(", ")", "x"].includes(val) || /[0-9]/.test(val)) {
                        currentInput += val;
                        input.value = currentInput;
                    }
                    break;
            }
        });
    });
};