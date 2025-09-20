function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let skill_tree of skill_trees) {
        let queue = skill.split('');
        let isAble = true;
        
        for (let item of skill_tree) {
            if (skill.includes(item)) {
                if (item === queue[0]) queue.shift();
                else {
                    isAble = false;
                    break;
                }
            }
        }
        
        if (isAble) answer++;
    }
    
    return answer;
}