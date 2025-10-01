function isPrime(num) {
	if (num === 0 || num === 1) return false; 
 	
 	for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
  		if(num % i === 0) return false;
	}
    
    return true; 
}

function solution(numbers) {
    let answer = 0;
    numbers = numbers.split('').map(Number);
    let arr = new Set();
    
    let visited = Array(numbers.length).fill(false);
    let selected = [];
    function DFS(n) {
        if (n === numbers.length) {
            arr.add(Number(selected.join('')));
            return;
        }
        
        for (let i = 0; i < numbers.length; i++) {
            if (visited[i]) continue;
            
            visited[i] = true;
            selected.push(numbers[i]);
            DFS(n + 1);
            selected.pop();
                        
            DFS(n + 1);
            visited[i] = false;
        }
    }
    
    DFS(0);
    
    arr = [...arr];
    
    for (let num of arr) {
        if (isPrime(num)) answer++;
    }
    
    return answer;
}