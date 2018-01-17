function getIthFib(i) {
  var sequence = [1, 1];
  var count = 2;
  while (count <= i) {
    sequence[count] = sequence[count-1] + sequence[count-2];
    count ++;
  }
  $("#fib-result").val(sequence[i-1]);
}

function nFactorial(i) {
  var arr = [];
  var count = 1;
  var total = 1;
  for (var j = i; j > 0; j--) {
    arr[count] = j;
    count++;
  }
  for (var num in arr) {
    total *= arr[num];
  }
  $("#nFactorial-result").val(total);
}

function sumIntsBetween(i, j) {
    var arr = [i, j].sort();
    var total = 0;
    for (var k = parseInt(arr[0]); k <= arr[1]; k++) {
        total += k;
        if (arr[0] === arr[1]) {
            total += k;
        }
    }
    $("#sumInts-result").val(total);
    console.log(total);
}

function calcCoins(a) {
    var i = a;
    var coins = [0, 0, 0, 0];
    while (i > 0) {
        while (i >= 25) {
            i -= 25;
            coins[0]++;
        }
        while (i >= 10) {
            i -= 10;
            coins[1]++;
        }
        while (i >= 5) {
            i -= 5;
            coins[2]++;
        }
        while (i >= 1) {
            i -= 1;
            coins[3]++;
        }
    }
    
    var output = "";
    if (coins[0] > 1) {
        output += coins[0] + " quarters";
    } else if (coins[0] === 1) {
        output += "1 quarter";
    }
    if (a%25 != 0 && coins[0] != 0) {
        output += ", ";
    }
    
    if(coins[1] > 1) {
        output += coins[1] + " dimes";
    } else if (coins[1] === 1) {
        output += "1 dime";
    }
    if (coins[1] != 0 && (coins[2] > 0 || coins[3] > 0)) {
        output += ", ";
    }
    
    if(coins[2] > 1) {
        output += coins[2] + " nickels";
    } else if (coins[2] === 1) {
        output += "1 nickel";
    }
    if (coins[2] != 0 && coins[3] > 0) {
        output += ", ";
    }
    
    if(coins[3] > 1) {
        output += coins[3] + " pennies";
    } else if (coins[3] === 1) {
        output += "1 penny";
    }
    $("#calcCoins-result").val(output);
}