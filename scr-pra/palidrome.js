function test(s) {
    let sanitized = '';
    let i = 0;

    while(i< s.length -1){
        if(s[i] >= 'a' && s[i] <= 'z'){
            sanitized = sanitized + s[i];
        } else if(s[i] >= 'A' && s[i] <= 'Z') {
            sanitized = sanitized + String.fromCharCode(s.charCodeAt(i) + 32)
        }
        i++;
    }
    console.log(sanitized)
}

test('A man, a plan, a canal: Panama')