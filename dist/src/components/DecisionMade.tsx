export default function DecisionWinner(setsquare: any){

    const line = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    for (let i = 0; i < line.length; i++){
        const [a , b , c] = line[i]
        if(
            setsquare[a] && setsquare[a] === 
            setsquare[b] && setsquare[a] ===
            setsquare[c]){
            return setsquare[a]
        } 
    }
    return null;
}