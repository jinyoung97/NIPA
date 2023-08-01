import time

# 숫자끼리 비교하는 연산
start_time = time.time()
for i in range(1000000):
    if i < 100000:
        pass
end_time = time.time()
print("숫자끼리 비교하는 연산 시간:", end_time - start_time)

# 문자끼리 비교하는 연산
start_time = time.time()
for i in range(1000000):
    if str(i) < "100000":
        pass
end_time = time.time()
print("문자끼리 비교하는 연산 시간:", end_time - start_time)