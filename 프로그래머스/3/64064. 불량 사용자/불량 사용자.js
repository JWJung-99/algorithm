function isSameId(user_id, banned_id) {
    if (user_id.length !== banned_id.length) return false;
    else {
        for (let i = 0; i < user_id.length; i++) {
            if (banned_id[i] === '*') continue;
            else if (user_id[i] !== banned_id[i]) return false;
        }
    }
    
    return true;
}

function solution(user_id, banned_id) {
    let visited = Array(user_id.length).fill(false);
    let set = new Set();
        
    function DFS(index, arr) {
        if (index === banned_id.length) {
            set.add(arr.sort().join(','));
        } else {
            for (let i = 0; i < user_id.length; i++) {
                if (visited[i]) continue;
                                
                if (isSameId(user_id[i], banned_id[index])) {
                    visited[i] = true;
                    DFS(index + 1, [...arr, user_id[i]]);
                    visited[i] = false;
                }
            }
        }
    }
    
    DFS(0, []);
    
    return set.size;
}