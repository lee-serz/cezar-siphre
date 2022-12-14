let input = document.getElementById('input');
let output = document.getElementById('output');

let siphre_btn = document.getElementById('siphre-btn');
let desiphre_btn = document.getElementById('desiphre-btn');

let low_alpha = 'abcdefghijklmnopqrstuvwxyz';
let up_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let low_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let up_arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbols = '!@#$%^&*():";/.,1234567890';

siphre_btn.onclick = function() {
    let step = document.getElementById('step').value;
    let string = input.value
    let siphre_string = ''
    let result = '';

    for (i = 0; i < string.length; i++) { 
        if (string[i] == ' ') { result += string[i]; }
        if (symbols.includes(string[i])) { result += string[i]; }
        if (low_alpha.includes(string[i])) { result += low_arr[(low_arr.indexOf(string[i]) + Number(step))]; }
        if (up_alpha.includes(string[i])) { result += up_arr[(up_arr.indexOf(string[i]) + Number(step))];} 
    }

    output.innerHTML = result;
}