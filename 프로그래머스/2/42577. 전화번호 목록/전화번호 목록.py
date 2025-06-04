def solution(phone_book):
    answer = True
    
    phone_book.sort()
    
    for num1, num2 in zip(phone_book[: -1], phone_book[1:]):
        if num2.startswith(num1):
            answer = False
    
    return answer