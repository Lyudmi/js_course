    const n = 18;
    let time = 0;
    let array_timer;
    let counter = 0;
    let speed_timer = 1000;
    let array = document.getElementById('array');
     for (i = 1; i <= n; i ++) {
          let li = document.createElement('li');
          li.setAttribute('id', 'count_' + i);
          li.appendChild(document.createTextNode(i));
          array.insertBefore(li, array.children[i]);
           if(i < n) {
          array.insertBefore(document.createTextNode(' , '), array.children[i +1])
           }
    }              
    function start(){
        document.getElementById("startButton").disabled = true;

        // let startBtn = document.getElementById("startButton");

        // startBtn.style.cssText = "cursor:default;";
                
        timer();
    }
    function pause(){
        if (array_timer) clearInterval(array_timer);  
        document.getElementById("startButton").disabled = false;

    }
    function stop(){
        if (array_timer) clearInterval(array_timer); 
         time = 0; 
         counter = 0; 
        for (let i = 1; i < array.children.length - 1; i++ ) {
          array.children[i].style.backgroundColor = 'white';
          array.children[i].style.color = 'black';
        }
        document.getElementById('timerLabel').innerHTML = 0;
        document.getElementById("startButton").disabled = false;
    }
    var flag = true;
    function timer(){
    array_timer = setInterval(
      function () {
        time++;
        let sec= time; 
        
        document.getElementById('timerLabel').innerHTML = sec;
          if (flag == true) {
            counter ++;
            document.getElementById('count_' + counter).style.backgroundColor = 'orange';
            document.getElementById('count_' + counter).style.color = 'black';
                if(counter == n){
                  flag = false;
                }
          }
          else {
              document.getElementById('count_' + (counter)).style.backgroundColor = 'black';
              document.getElementById('count_' + (counter)).style.color = 'white'; 
              counter --; 
              if(counter == 0){
                flag = true;
              }
          }         
     },
     speed_timer
     ); 
    }
    function speedX1()
    {
      speed_timer = 1000;
      clearInterval(array_timer);
      document.getElementById("speedX1").disabled = true;
      document.getElementById("speedX3").disabled = false;
      document.getElementById("speedX2").disabled = false;
      document.getElementById("startButton").disabled = false;
    }
    function speedX2()
    {
      speed_timer = 1000 / 2;
      clearInterval(array_timer);
      document.getElementById("speedX2").disabled = true;
      document.getElementById("speedX1").disabled = false;
      document.getElementById("speedX3").disabled = false;
      document.getElementById("startButton").disabled = false;
    }
    function speedX3()
    {
      speed_timer = 1000 / 3;
      clearInterval(array_timer);
      document.getElementById("speedX3").disabled = true;
      document.getElementById("speedX1").disabled = false;
      document.getElementById("speedX2").disabled = false;
      document.getElementById("startButton").disabled = false;
    }

  
