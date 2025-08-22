const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
let substitutionKey = {};
let reverseKey = {};

var what = prompt("Decrypt (d) or Encrypt (e)?");
console.log('Hello!');

if (what && (what.toLowerCase() === 'e' || what.toLowerCase() === 'd')) {
  alert("Now you'll define the substitution for each letter");
  
  let a = prompt('a=');
  let b = prompt('b=');
  let c = prompt('c=');
  let d = prompt('d=');
  let e = prompt('e=');
  let f = prompt('f=');
  let g = prompt('g=');
  let h = prompt('h=');
  let i = prompt('i=');
  let j = prompt('j=');
  let k = prompt('k=');
  let l = prompt('l=');
  let m = prompt('m=');
  let n = prompt('n=');
  let ñ = prompt('ñ=');
  let o = prompt('o=');
  let p = prompt('p=');
  let q = prompt('q=');
  let r = prompt('r=');
  let s = prompt('s=');
  let t = prompt('t=');
  let u = prompt('u=');
  let v = prompt('v=');
  let w = prompt('w=');
  let x = prompt('x=');
  let y = prompt('y=');
  let z = prompt('z=');
  
  substitutionKey = {
    'a': a, 'b': b, 'c': c, 'd': d, 'e': e, 'f': f, 'g': g, 'h': h,
    'i': i, 'j': j, 'k': k, 'l': l, 'm': m, 'n': n, 'ñ': ñ, 'o': o,
    'p': p, 'q': q, 'r': r, 's': s, 't': t, 'u': u, 'v': v, 'w': w,
    'x': x, 'y': y, 'z': z
  };
  
  for (let key in substitutionKey) {
    if (substitutionKey[key]) {
      reverseKey[substitutionKey[key]] = key;
    }
  }
  
  if (what.toLowerCase() === 'e') {
    encript();
  } else {
    decript();
  }
}

function encript() {
  let word = prompt("Enter word/text to encrypt:");
  if (!word) return;
  
  word = word.toLowerCase();
  let encrypted = '';
  
  for (let char of word) {
    if (substitutionKey[char]) {
      encrypted += substitutionKey[char];
    } else if (char === ' ') {
      encrypted += ' ';
    } else {
      encrypted += char;
    }
  }
  
  alert(`Encrypted: ${encrypted}`);
  console.log(`Original: ${word}`);
  console.log(`Encrypted: ${encrypted}`);
}

function decript() {
  let word = prompt("Enter word/text to decrypt:");
  if (!word) return;
  
  word = word.toLowerCase();
  let decrypted = '';
  
  for (let char of word) {
    if (reverseKey[char]) {
      decrypted += reverseKey[char];
    } else if (char === ' ') {
      decrypted += ' ';
    } else {
      decrypted += char;
    }
  }
  
  alert(`Decrypted: ${decrypted}`);
  console.log(`Encrypted: ${word}`);
  console.log(`Decrypted: ${decrypted}`);
}