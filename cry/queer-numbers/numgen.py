with open("qr.txt", "r") as binQR:
    for line in binQR:
        print(int(str(line), 2))
    

