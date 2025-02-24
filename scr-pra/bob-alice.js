const edges = [[0,1], [1,2], [1,3], [3,4]];

const adjList = new Map();
for(let i = 0; i < edges.length; i++){
    let u = edges[i][0];
    let v = edges[i][1];
    if(!adjList.has(u)){
        adjList.set(u, [])
    }
    if(!adjList.has(v)){
        adjList.set(v, [])
    }
    adjList.get(u).push(v);
    adjList.get(v).push(u);
}
const bobVisited = new Map();
const bobTime = new Map();
function bobDFS(cur,time){
    bobVisited.set(cur, true);
    bobTime.set(cur, time);
    if(cur === 0){
        return true;
    }
    const nbrs = adjList.get(cur);
    for (const nbr of nbrs) {
        if(!bobVisited.has(nbr)){
            const isValid =  bobDFS(nbr, time+1)
            if(!isValid) {
                bobVisited.delete(nbr);
                bobTime.delete(nbr);
            }
            return isValid;
        }
    }
    return false;
}
bobDFS(3, 0)
const amount = [-2,4,2,-4,6]
const aliceVisited = new Map();
let maxAliceIncome = Number.MIN_SAFE_INTEGER;
function aliceDFS(cur, time, aliceIncome){
    aliceVisited.set(cur, true);
    if(bobVisited.has(cur)){
        if(time === bobTime.get(cur)){
            aliceIncome += amount[cur]/2
        } else if (time < bobTime.get(cur)){
            aliceIncome += amount[cur];
        }
    } else {
        aliceIncome += amount[cur];
    }
    const nbrs = adjList.get(cur);
    if(nbrs.length === 1 && aliceVisited.has(nbrs[0])){
        maxAliceIncome = Math.max(aliceIncome, maxAliceIncome);
    }
    for (const nbr of nbrs) {
        if(!aliceVisited.has(nbr)){
            aliceDFS(nbr,time+1, aliceIncome);
        }
    }

}

aliceDFS(0,0,0);
console.log(aliceVisited)
console.log(maxAliceIncome)