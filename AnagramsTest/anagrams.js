let anagrams = (string, target)=>{
    string = string.toLowerCase().split('').sort().join('');
    target = target.toLowerCase().split('').sort().join('');
    if(string === target) {
        console.log("This two strings are anagram");
    } else {
        console.log("They are not anagram");
    }
}


