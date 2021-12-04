def compressLZW(input):
    d = init_D()
    compressed = ""
    w = input[0]
    strlen = len(input)
    i = 1
    while (i < strlen):
        a = input[i]
        if (w + a) in d:
            w = w + a
        else:
            compressed += str(d.index(w) + 1)+ " "
            d.append(w + a)
            w = a 
            if w == input[-1]:
                compressed += str(d.index(w) + 1) + " "
        i =i+ 1
    return compressed

def init_D():
    return [chr(i) for i in range(128)]
print("the String to be compressed is : XYZZX,XYZZX,XYZZX,XYZZX")
print(compressLZW("XYZZX,XYZZX,XYZZX,XYZZX"))