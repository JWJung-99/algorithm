function solution(record) {
    let result = [];
    let user = {};
    
    for (let event of record) {
        let [mode, id, nickname] = event.split(' ');
        
        if (mode === 'Enter') {
            // 채팅방 입장
            // user 정보 업데이트
            user[id] = nickname;
            
            result.push([id, '님이 들어왔습니다.']);
        } else if (mode === 'Leave') {
            // 채팅방 퇴장
            result.push([id, '님이 나갔습니다.'])
        } else {
            // 닉네임 변경
            user[id] = nickname;
        }
    }
    
    return result.map(([id, message]) => user[id] + message);
}