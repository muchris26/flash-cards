$(document).ready(function()
{
    var answer = 0;
    var bottomNum = 0;
    var topNum = 0;
    var input = '';
    var timing = 50;
    var qNumber = 0;
    var winNumber = 2;
    var TimeStart = 0;
    var TimeRound = 0;
    var mathType = "sub";

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

    function questionType() {
        if (mathType === "add") {
            $("#question-type").text("Addition");
        }
        else if (mathType === "sub") {
            $("#question-type").text("Subtraction");
        }

        else if (mathType === "mul") {
            $("#question-type").text("Multiplication");
        }

        else if (mathType === "div") {
            $("#question-type").text("Division");
        }
    }

    function subQuestion() {
        answer = Math.floor(Math.random() * 10);
        bottomNum = Math.floor(Math.random() * answer);
        topNum = answer + bottomNum;
        return [answer, bottomNum, topNum];
    }

    function addQuestion() {
        topNum = Math.floor(Math.random() * 10);
        bottomNum = Math.floor(Math.random() * 10);
        answer = topNum + bottomNum;
        return [answer, bottomNum, topNum];
    }

    function mulQuestion() {
        topNum = Math.floor(Math.random() * 10);
        bottomNum = Math.floor(Math.random() * 10);
        answer = topNum * bottomNum;
        return [answer, bottomNum, topNum];
    }

    function divQuestion() {
        bottomNum = Math.floor(Math.random() * 10);
        answer = Math.floor(Math.random() * 10);
        topNum = answer * bottomNum;
        return [answer, bottomNum, topNum];
    }

    function generateQuestion()
    {
        var sign = '';
        $('.card').hide(250);
        if (mathType === 'sub') {
            q = subQuestion();
            sign = "-   ";
        }
        else if (mathType === 'add') {
            q = addQuestion();
            sign = "+   ";
        }
        else if (mathType === 'mul') {
            q = mulQuestion();
            sign = "x   ";
        }
        else if (mathType === 'div') {
            q = divQuestion();
            sign = "/   ";
        }
        
        answer = q[0];
        bottomNum = q[1];
        topNum = q[2];
        $('#top-num').text(topNum);

        $('#bottom-num').text(sign + bottomNum);
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
                $('#splash').css("background-color", "rgb(41, 143, 204)");
                $('#splash').css("z-index", "1");
                $('#splash-message').html("<p>You Won!  Great Job!  Click the screen to continue.</p><p>Your time per question was " + secondsPerQuestion.toFixed(2) + " seconds.");
                restartGame();
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


    function restartGame() {
        $('#feedback').text('Press Enter to Play Again.');     
        qNumber = 0;
        $('#question-number').text("Question: " + qNumber + "/" + winNumber);   
        
        $('#top-num').empty();
        $('#bottom-num').empty();
    }

//Initialize game
    function initializeGame() {
        // $('#feedback').hide();
        // $('.debug-info').html("<p>Width: " + wide + ' Height: ' + high + "</p>");
        qNumber = 0;
        $('#feedback').text("Press Enter to Begin");
        questionType();
        $('#question-number').text("Question: " + qNumber + "/" + winNumber);
        $('#settings-tab').hide();
        $('#top-num').empty();
        $('#bottom-num').empty();
    }

    initializeGame();

// Controls for settings tab
    $("#addition").click(function() {
        mathType = 'add';
        initializeGame();
    });
    $("#subtraction").click(function() {
        mathType = 'sub';
        initializeGame();
    });
    $("#multiplication").click(function() {
        mathType = 'mul';
        initializeGame();
    });
    $("#division").click(function() {
        mathType = 'div';
        initializeGame();
    });

    $('#settings-btn').click(function() {
        $('#settings-tab').slideToggle(250);
    });

// Splash screen control
    $("#splash").click(function() {

        $('#splash').css("background-color", "rgb(20, 29, 36)");
        $('#splash').css("z-index", "-1");
        $('#splash-message').empty();
    });

// Controls for the number board
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
// Controls for controlling number board with keyboard
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
