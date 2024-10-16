function prec(exp) {
    if (exp === '^') {
        return 3;
    } else if (exp === '/' || exp === '*') {
        return 2;
    } else if (exp === '+' || exp === '-') {
        return 1;
    } else {
        return -1;
    }
}

function convert(s) {
    let stack = [];
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let exp = s[i];

        
        if ((exp >= 'a' && exp <= 'z') || (exp >= 'A' && exp <= 'Z') || (exp >= '0' && exp <= '9')) {
            result += exp;
        }
        
        else if (exp === '(') {
            stack.push(exp);
        }
        
        else if (exp === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop(); // Remove '(' from the stack
        }
        
        else {
            while (stack.length && prec(exp) <= prec(stack[stack.length - 1])) {
                result += stack.pop();
            }
            stack.push(exp);
        }
    }

    
    while (stack.length) {
        result += stack.pop();
    }

    console.log(result);
}


let exp = "a+b*(c^d-e)^(f+g*h)-i";
convert(exp); // Expected output: "abcd^e-fgh*+^*+i-"
