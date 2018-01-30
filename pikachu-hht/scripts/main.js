!function(){
    var duration = 50;
    $(".actions").on("click","button",function(e){
      let $button = $(e.currentTarget);
      let speed = $button.attr("data-speed");
      console.log(speed);
      $button.addClass("active")
      .siblings(".active").removeClass("active");
      switch (speed) {
        case "slow":
        duration = 100;
          break;
        case "normal":
        duration = 50;
          break;
        default:duration = 10;
          break;
      }
   });
    function writeCode(prefix , code, fn){
      let container = document.querySelector('#code');
      let styleTag = document.querySelector('#styleTag');
      let n = 0;
      let id;
      id = setTimeout(function run(){
        n += 1;
        container.innerHTML = code.substring(0,n);
        styleTag.innerHTML = code.substring(0,n);
        container.scrollTop = container.scrollHeight;
        if(n >= code.length){
          fn && fn.call();
        }else {
          id = setTimeout(run , duration);
        }
      },duration);
    } 
   let codes = `
 /*
  * 首先，需要准备皮卡丘的皮
  */
 .preview{
   height: 100%;
   border:1px solid green;
   display:flex;
   justify-content:center;
   align-items:center;
   background-color: #fee433;
 }
 .wraper{
   width:100%;
   height: 165px;
   position: relative;
 }    
 /* .wraper > :not(:last-child){
 z-index:1;
 } */
 /*
  * 接下来，画皮卡丘的鼻子
  */
 .nose{
   width:0px;
   height: 0px;
   border:12px solid; 
   border-color:black transparent transparent;
   border-radius:12px;
   //margin:28px auto;
   position: absolute;
   left:50%;
   top:28px;
   margin-left:-12px;
 }
 /*
  * 接下来，画皮卡丘的两只眼睛
  */
 .eye {
   width:49px;
   height:49px;
   background-color: #2e2e2e;
   position: absolute;
   border-radius:50%;
   border:2px solid #000;
 }
 /*
  * 眼睛需要有眼珠
  */
 .eye::before{
   content:'';
   display:block;
   width:24px;
   height:24px;
   background: #fff;
   position: absolute;
   border-radius:50%;
   left:6px;
   top:-1px;
   border: 2px solid #000;
 }
 /*
  * 左眼
  */
 .eye.left{
   right:50%;
   margin-right:90px;
 }
 /*
  * 右眼
  */
 .eye.right{
   left:50%;
   margin-left:90px;
 }
 /*
  * 然后，画皮卡丘的脸
  */
 .face {
   width:68px;
   height:68px;
   background-color: #fc0d1c;
   position: absolute;
   border-radius:50%;
   border:2px solid black;
   top:85px;
 }
 /*
  * 左边的红晕
  */
 .face.left{
   right:50%;
   margin-right:116px;
 }
 /*
  * 右边的红晕
  */
 .face.right{
   left:50%;
   margin-left:116px;
 }
 /*
  * 上嘴唇
  */
 .upper_lip{
   position: absolute;
   height:25px;
   width:65px;
   border:2px solid black;
   border-top:none;
   top:46px;
   background-color: #fee433;
 }
 .upper_lip.left{
   border-right:none;
   border-bottom-left-radius:40px 25px;
   transform:rotate(-20deg);
   right:50%;
 }
 .upper_lip.right{
   border-left:none;
   border-bottom-right-radius:40px 25px;
   transform:rotate(20deg);
   left:50%; 
 }
 /*
  * 下嘴唇
  */
 .lower_lip_wraper{
   position: absolute;
   left:50%;
   margin-left:-150px;
   bottom:0;
   height:110px;
   width:300px;
   overflow: hidden;
 }
 .lower_lip{
   width:300px;
   height:3500px;
   background-color: #990513;
   border:2px solid black;
   border-radius:200px/2000px;
   position: absolute;
   bottom:0;
   overflow: hidden;
 }
 /*
  * 小舌头
  */
 .lower_lip::after{
   content:"";
   position: absolute;
   bottom:-20px;
   width:100px;
   height:100px;
   background-color: #FC4A62;
   left:50%;
   margin-left:-50px;
   border-radius:50px;
 }
 /*
  * 好了，皮卡丘画完了
  */
 `
   writeCode('',codes);
 }.call();