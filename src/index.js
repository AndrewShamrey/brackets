module.exports = function check(str, bracketsConfig) {
  // your solution

  let one = [0];
  let two = [0];
  let three = [0];
  let four = [0];
  let five = [0];
  let opnBr = [];

  for (let i = 0; i < str.length; i += 1) {
      for (let j = 0; j < bracketsConfig.length; j += 1) {
        if (str[i] === bracketsConfig[j][0]) {
        
            switch(j) {
                case 0:
                    one[one.length-1] += 1; 
                    one.push(0);
                    opnBr.push(str[i]);
                    break;
                case 1:
                    two[two.length-1] += 1;
                    two.push(0);
                    opnBr.push(str[i]);
                    break;
                case 2:
                    three[three.length-1] += 1;
                    three.push(0);
                    opnBr.push(str[i]);
                    break;     
                case 3:
                    four[four.length-1] += 1;
                    four.push(0);
                    opnBr.push(str[i]);
                    break;
                case 4:
                    five[five.length-1] += 1;
                    five.push(0);
                    opnBr.push(str[i]);
                    break;
            }   
        }

        if (str[i] === bracketsConfig[j][1]) {
            switch(j) {
                case 0: 
                    if (one.length !== 1 && opnBr[opnBr.length - 1] === bracketsConfig[j][0]) {
                        one.pop();
                        opnBr.pop();
                        one[one.length-1] -= 1;  
                    } else {
                        return false;
                    }
                    break;
                case 1:
                    if (two.length !== 1 && opnBr[opnBr.length - 1] === bracketsConfig[j][0]) {
                        two.pop();
                        opnBr.pop();
                        two[two.length-1] -= 1;
                    } else {
                        return false;
                    }
                    break;
                case 2:
                    if (three.length !== 1 && opnBr[opnBr.length - 1] === bracketsConfig[j][0]) {
                        three.pop();
                        opnBr.pop();
                        three[three.length-1] -= 1;                 
                    } else {
                        return false;
                    }
                    break;     
                case 3:
                    if (four.length !== 1 && opnBr[opnBr.length - 1] === bracketsConfig[j][0]) {
                        four.pop();
                        opnBr.pop();
                        four[four.length-1] -= 1;                 
                    } else {
                        return false;
                    }
                    break;
                case 4:
                    if (five.length !== 1 && opnBr[opnBr.length - 1] === bracketsConfig[j][0]) {
                        five.pop();
                        opnBr.pop();
                        five[five.length-1] -= 1;  
                    } else {
                        return false;
                    }
                    break;
            }
        }
      }
  }

  if (one.length === 1 && two.length === 1 && three.length === 1 && four.length === 1 && five.length === 1) {
      return true;
  } else {
      return false;
  }
}
