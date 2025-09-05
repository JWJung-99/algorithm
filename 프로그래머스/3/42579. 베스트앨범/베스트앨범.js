function solution(genres, plays) {
    var answer = [];
    
    let map = {};
    for (let i = 0; i < genres.length; i++) {
        if (map[genres[i]]) {
            map[genres[i]].plays += plays[i];
            map[genres[i]].songs.push([i, plays[i]])
        } else {
            map[genres[i]] = {
                plays: plays[i],
                songs: [[i, plays[i]]]
            }
        }
    }
    
    let arr = Object.values(map);
    arr.sort((a, b) => b.plays - a.plays);
    
    for (let genre of arr) {
        genre.songs.sort((a, b) => {
            if (a[1] === b[1]) return a[0] - b[0];
            else return b[1] - a[1];
        });
        
        answer.push(genre.songs[0][0]);
        
        if (genre.songs.length >= 2) answer.push(genre.songs[1][0]);
    }

    
    return answer;
}