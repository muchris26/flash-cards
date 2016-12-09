$(document).ready(function()
{
    var answer = 0;
    var bottomNum = 0;
    var topNum = 0;
    var input = '';
    var timing = 50;
    var qNumber = 0;
    var winNumber = 20;
    var TimeStart = 0;
    var TimeRound = 0;

    var high = window.outerHeight;
    var wide = window.outerWidth;


    function animateButton(x)
    {
        x.animate(
        {
            opacity: 'toggle'
        }, timing);
        x.animate(
        {
            opacity: 'toggle'
        }, timing);
    }

    function generateQuestion()
    {
        $('.card').hide(250);
        answer = Math.floor(Math.random() * 10);
        bottomNum = Math.floor(Math.random() * answer);
        topNum = answer + bottomNum;
        $('#top-num').text(topNum);
        $('#bottom-num').text("-   " + bottomNum);
        $('.card').show(250);
    }

    function checkAnswer()
    {

        $('#feedback').fadeIn(500);
        if (parseInt(input) === answer)
        {
            if (qNumber >= winNumber)
            {
                secondsPerQuestion = ((Date.now() - timeStart) / (qNumber)) / 1000;
                $('#question-number').text("Question: " + qNumber + "/" + winNumber);

                $('#time-per-question').text("Time/Q: " + secondsPerQuestion.toFixed(2) + " seconds");
                $('#feedback').text('Press Enter to Play Again.');
                $('#splash').css("background-color", "rgb(41, 143, 204)");
                $('#splash').css("z-index", "1");
                $('#splash-message').html("<p>You Won!  Great Job!  Click the screen to continue.</p><p>Your time per question was " + secondsPerQuestion.toFixed(2) + " seconds.");

                qNumber = 0;
            }
            else {

                $('#feedback').text('You got it right!');
                secondsPerQuestion = ((Date.now() - timeStart) / (qNumber)) / 1000;

                qNumber++;
                $('#question-number').text("Question: " + qNumber + "/" + winNumber);
                $('#time-per-question').text("Time/Q: " + secondsPerQuestion.toFixed(2) + " seconds");

                $('#feedback').fadeOut(2000);
                generateQuestion();
            }

            input = '';
            $('#output').text(input);
        }
        else
        {
            $('#feedback').text('You got it wrong. Try again');
            input = '';

            $('#output').text(input);
        }
    }

    function updateInput(x)
    {
        input = input + x;
        $('#output').text(input);
    }

    function startGame()
    {

        generateQuestion();
        timeStart = Date.now();
        qNumber = 1;
        $('#question-number').text("Question: " + qNumber + "/" + winNumber);
        $('#feedback').empty();

    }

    // Initialize game
    // $('#feedback').hide();
    // $('.debug-info').html("<p>Width: " + wide + ' Height: ' + high + "</p>");
    $('#feedback').text("Press Enter to Begin");
    $('#question-number').text("Question: " + qNumber + "/" + winNumber);

    // Update CSS to display size
    // $('#top-frame').height(high * 0.5);
    // $('#card-holder').height(high * 0.5);
    // $('#feedback').height(high * 0.5);
    // $('#feedback-holder').height(high * 0.5);
    // $('.card').css("font-size", (high * 0.0075) + 'rem');
    // $('#feedback-card').css("font-size", (high * 0.0075) + 'rem');
    // $('.card').css("padding-top", '200px');
    // $('.card').css("padding-bottom", (high * 0.0075) + 'rem');
    // $('.card').height('100%');


    $("#splash").click(function() {

        $('#splash').css("background-color", "rgb(20, 29, 36)");
        $('#splash').css("z-index", "-1");
        $('#splash-message').empty();
    });

    $('#clear').click(function()
    {

        input = '';
        $('#output').text(input);

        animateButton($("#clear"));
    });
    $('#enter').click(function()
    {

        if (qNumber === 0)
        {
            startGame();
        }
        else
        {
            checkAnswer();
        }
        animateButton($("#enter"));
    });
    $('#addi').click(function()
    {
        updateOper('addi');
        animateButton($("#addi"));
    });
    $('#diff').click(function()
    {
        updateOper('diff');
        animateButton($("#diff"));
    });
    $('#prod').click(function()
    {
        updateOper('prod');
        animateButton($("#prod"));
    });
    $('#divi').click(function()
    {
        updateOper('divi');
        animateButton($("#divi"));
    });
    $('#1').click(function()
    {
        updateInput('1');
        animateButton($("#1"));
    });
    $('#2').click(function()
    {
        updateInput('2');
        animateButton($("#2"));
    });
    $('#3').click(function()
    {
        updateInput('3');
        animateButton($("#3"));
    });
    $('#4').click(function()
    {
        updateInput('4');
        animateButton($("#4"));
    });
    $('#5').click(function()
    {
        updateInput('5');
        animateButton($("#5"));
    });
    $('#6').click(function()
    {
        updateInput('6');
        animateButton($("#6"));
    });
    $('#7').click(function()
    {
        updateInput('7');
        animateButton($("#7"));
    });
    $('#8').click(function()
    {
        updateInput('8');
        animateButton($("#8"));
    });
    $('#9').click(function()
    {
        updateInput('9');
        animateButton($("#9"));
    });
    $('#0').click(function()
    {
        updateInput('0');
        animateButton($("#0"));
    });
    $('body').keyup(function(event)
    {

        $('#keypressOutput').attr("value", event.which);
        if (event.which === 8 || event.which === 46)
        {

            input = '';
            $('#output').text(input);

            animateButton($("#clear"));
        }
    });
    $('body').keypress(function(event)
    {

        $('#keypressOutput').attr("value", event.which);
        if (event.which === 49)
        {
            updateInput('1');
            animateButton($("#1"));
        }
        else if (event.which === 50)
        {
            updateInput('2');
            animateButton($("#2"));
        }
        else if (event.which === 51)
        {
            updateInput('3');
            animateButton($("#3"));
        }
        else if (event.which === 52)
        {
            updateInput('4');
            animateButton($("#4"));
        }
        else if (event.which === 53)
        {
            updateInput('5');
            animateButton($("#5"));
        }
        else if (event.which === 54)
        {
            updateInput('6');
            animateButton($("#6"));
        }
        else if (event.which === 55)
        {
            updateInput('7');
            animateButton($("#7"));
        }
        else if (event.which === 56)
        {
            updateInput('8');
            animateButton($("#8"));
        }
        else if (event.which === 57)
        {
            updateInput('9');
            animateButton($("#9"));
        }
        else if (event.which === 48)
        {
            updateInput('0');
            animateButton($("#0"));
        }
        else if (event.which === 43)
        {
            updateOper('addi');
            animateButton($("#addi"));
        }
        else if (event.which === 45)
        {
            updateOper('diff');
            animateButton($("#diff"));
        }
        else if (event.which === 42)
        {
            updateOper('prod');
            animateButton($("#prod"));
        }
        else if (event.which === 47)
        {
            updateOper('divi');
            animateButton($("#divi"));
        }
        else if (event.which === 13)
        {
            if (qNumber === 0)
            {
                startGame();
            }
            else
            {
                checkAnswer();
            }
            animateButton($("#enter"));
        }
    });
});

// var sum = null;
// var mem = null;
// var oper = null;
// var enterPress = false;
//

//
// function presentOutput(x) {
//     if (x === null) {
//         $('#output').attr("value", 0);
//     }
//     else {
//         $('#output').attr("value", x);
//     }
//     $('#sumOutput').attr("value", sum);
//     $('#memOutput').attr("value", mem);
//     $('#operOutput').attr("value", oper);
//     $('#enterOutput').attr("value", enterPress);
// };
// presentOutput(sum);
//
// function updateOper(val) {
//     if (enterPress === true) {
//         mem = null;
//         enterPress = false;
//         presentOutput(sum)
//     }
//     else {
//         updateSum();
//         mem = null;
//         presentOutput(sum);
//     }
//
//     oper = val;
// };
// function updateInput(val) {
//     if (mem === null) {
//         mem = val;
//
//     }
//     else {
//         mem = mem + val;
//
//     }
//     presentOutput(mem);
// };
// function clearSum() {
//     sum = null;
//     mem = null;
//     oper = null;
//     presentOutput(sum);
// };
// function updateSum() {
//     if (mem === null) {
//         sum = sum;
//     }
//     else if (sum === null) {
//         sum = parseInt(mem);
//     }
//     else {
//         if (oper === 'addi') {
//             sum = sum + parseInt(mem);
//         }
//         else if (oper === 'diff') {
//             sum = sum - parseInt(mem);
//         }
//         else if (oper === 'prod') {
//             sum = sum * parseInt(mem);
//         }
//         else if (oper === 'divi') {
//             sum = sum / parseInt(mem);
//         }
//     }
//     presentOutput(sum);
// }
