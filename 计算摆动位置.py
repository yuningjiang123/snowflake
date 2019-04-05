import math
for i in range(0,21):
    s = math.sin(2*math.pi*i/20)
    print("%.0f秒后，位移为%.1f°"%(i,s*30))

theta = 60   #摆动角度
frame = 20   #帧数

for i in range(0,frame+1):
    f = i * 5    #关键帧位置0%~100%
    s = math.sin(2 * math.pi * i / frame) * theta   #每步摆动的角度(公转角度)
    r = 360 * i / frame  #每步自传的角度
    print("%.0f%%{\n  -webkit-transform: rotate(%.1fdeg) translateY(100px) rotate(%.1fdeg);\n  -ms-transform: rotate(%.1fdeg) translateY(100px) rotate(%.1fdeg);\n}"%(f, s, r, s, r))
