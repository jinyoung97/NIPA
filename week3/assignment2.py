# 중복되는 element를 저장한 배열 생성
arr = [1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 5, 9, 10, 8, 11,  2]

# 중복된 값을 제거할 새로운 배열 생성
unique_arr = []

# for-in 문으로 중복된 값을 없애는 코드
for element in arr:
    if element not in unique_arr:
        unique_arr.append(element)

print("중복 제거 전 배열:", arr)
print("중복 제거 후 배열:", unique_arr)