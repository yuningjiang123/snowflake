(function(){
  var snowStage = document.getElementsByClassName("snow")[0]
  var initialCount = Math.floor(Math.random() * 5 + 5) // 初始雪花数量
  // console.log(initialCount)
  var snows = []
  var h = -200       // 初始y坐标
  var maxSize = 40   // 最大雪花尺寸
  var minSize = 30   // 最小雪花尺寸
  var maxTime = 7    // 雪花运动最大周期
  var minTime = 5    // 雪花运动最小周期
  var maxSpeed = 1   // 雪花运动最大速度
  var minSpeed = 0.5 // 雪花运动最小速度

  function createSnow(){
    let size = Math.random() * (maxSize - minSize) + minSize     // 雪花大小
    let left = Math.random() * document.body.clientWidth         // 雪花x方向位置
    let time = Math.random() * (maxTime - minTime) + minTime     // 雪花运动周期
    let speed = Math.random() * (maxSpeed - minSpeed) + minSpeed // 雪花运动速度
  
    let image = document.createElement("img")
    image.style.width = size + "px"          // 雪花大小
    image.style.position = "absolute"
    image.style.left = left + "px"
    image.h = h
    image.style.opacity = (size - minSize) / (maxSize - minSize) * 0.8 + 0.2
    // image.style.background = "radial-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.5))"
    // image.style.borderRadius = "50%"
    // image.style.boxShadow = "0 0 50px white"                                                   
    image.speed = speed                                           // 雪花移动速度
    image.style.top = image.h + "px"                              // 雪花y坐标
    image.style.animation = "spin " + time + "s infinite linear"  // 雪花一个运动周期
    image.src = "snow.png"
    return image
  }
  
  for(let i = 0; i < initialCount; i++){
    let snow = createSnow()
    snows.push(snow)
    snowStage.appendChild(snow)
  }
  
  function move(){
    requestAnimationFrame(move)
    if(Math.random() < 0.01){   // 雪花增加几率
      let snow = createSnow()
      snows.push(snow)
      snowStage.appendChild(snow)
    }
    for(let i = 0; i < snows.length; i++){
      snows[i].h = snows[i].h + snows[i].speed
      snows[i].style.top = snows[i].h + "px"
      if(snows[i].h > document.body.clientHeight){   // 80
        snowStage.removeChild(snows[i])
        snows.splice(i, 1)
        i = i - 1
      }
    }
    console.log(snows.length)
  }
  move()
}())