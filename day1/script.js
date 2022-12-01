const fs = require('fs')
const groups = fs.readFileSync('./input.txt').toString().split(`\n\n`);

const total = [];
for(let i=0;i<groups.length;i++) {
    const sum = groups[i].split(`\n`).reduce((a,b) => (+a)+(+b));
    total.push({val: +sum, idx: i});
}

total.sort((a,b)=>b.val-a.val)
console.log( total.filter((_,i) => i<3).map(v=>v.val).reduce((a,b)=>a+b) )
