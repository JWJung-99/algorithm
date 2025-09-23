function solution(fees, records) {
    let answer = [];
    
    // 시간 차이 계산
    function getMinutesDiff(time1, time2) {
      const [h1, m1] = time1.split(':').map(Number);
      const [h2, m2] = time2.split(':').map(Number);

      const totalMinutes1 = h1 * 60 + m1;
      const totalMinutes2 = h2 * 60 + m2;

      return totalMinutes2 - totalMinutes1;
    }
    
    const cars = {};
    
    for (let record of records) {
        let [time, car, option] = record.split(" ");
        
        if (option === "IN") {
            if (cars[car]) cars[car].in = time;
            else cars[car] = {
                in: time,
                total: 0,
            }
        } else {
            cars[car].total += getMinutesDiff(cars[car].in, time);
            delete cars[car].in;
        }
    }
    
    function getPrice(time) {        
        if (time <= fees[0]) return fees[1];
        // 기본 요금 + ((전체 시간 - 기본 시간) / 단위 시간) * 단위 요금
        else return fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    }
    
    for (let car in cars) {
        if (cars[car].in) {
            cars[car].total += getMinutesDiff(cars[car].in, '23:59');
        }
        
        cars[car] = getPrice(cars[car].total);
    }

    
    return Object.keys(cars).sort().map(item => cars[item]);
}