
    $(document).ready(function() {

        var wins = 0;
        var losses = 0;
        //player score
        var total = 0;
        //selects a random number
        var randomNum = Math.floor((Math.random() * 100) + 19);
        //assigns random value to crystals
        var ranJird = Math.floor((Math.random() * 12) + 1);
        var ranJimg = Math.floor((Math.random() * 12) + 1);
        var ranJiwd = Math.floor((Math.random() * 12) + 1);
        var ranJigd = Math.floor((Math.random() * 12) + 1);


        //score update function
        var updateScore = function() {
            //adds point to total
            $("#total").append(total);
            //updates wins on page
            $("#wins").append(wins);
            //updates losses on page
            $("#losses").append(losses);
        }

        //restart function
        var restart = function() {
            total = 0;
            randomNum = Math.floor((Math.random() * 100) + 19);


            $("#randomNum").html("Random Number: " + randomNum);

            ranJird = Math.floor((Math.random() * 12) + 1);
            ranJimg = Math.floor((Math.random() * 12) + 1);
            ranJiwd = Math.floor((Math.random() * 12) + 1);
            ranJigd = Math.floor((Math.random() * 12) + 1);
            updateScore();
        }

        var logic = function() {
            if (total == randomNum) {
                wins++;
                restart();
            } else if (total > randomNum) {
                losses++;
                restart();
            } else {
                updateScore();
            }
        }


        $("#jird").click(function() {
            total = total + ranJird;
            logic();
            console.log("red diamond clicked");
        })

        $("#jimg").click(function() {
            total = total + ranJimg;
            logic();
            console.log("purple musgravite clicked");
        })

        $("#jiwd").click(function() {
            score = score + ranJiwd;
            logic();
            console.log("white diamond clicked");
        })

        $("#jigd").click(function() {
            score = score + ranJigd;
            logic();
            console.log("green grandidierite clicked");
        })

        $("#randomNum").append(randomNum);

        $("#total").append(total);

    }); 