with open("numbers.txt", "r") as numbers:
    input = []
    for i in numbers:
        input.append(int(i))

    max_length = 0
    for i in input:
        max_length = max(max_length, len(bin(i)[2:]))

    for i in input:
        print(bin(i)[2:].zfill(max_length))
    
    
    
