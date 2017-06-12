function matchInit(){

  function match(sede){
    var array=sede;
    var studentsLima=[{src:"Fiorella",alt:"Fiorella"},{src:"Lourdes",alt:"Lourdes"},{src:"Rossmery",alt:"Rossmery"},{src:"Miriam",alt:"Miriam"},{src:"Elizabeth",alt:"Elizabeth"},{src:"Arantza",alt:"Arantza"},{src:"Grecia",alt:"Grecia"}
    ,{src:"Rosario",alt:"Rosario"},{src:"Jenny",alt:"Jenny"},{src:"Nadia",alt:"Nadia"},{src:"Michell",alt:"Michell"},{src:"Marilu",alt:"Marilu"},{src:"Mariel",alt:"Mariel"},{src:"Fiorellac",alt:"Fiorella"}
    ,{src:"Geraldine",alt:"Geraldine"},{src:"Yelitza",alt:"Yelitza"},{src:"Stephanie",alt:"Stephanie"},{src:"Emma",alt:"Emma"},{src:"Danna",alt:"Danna"},{src:"Erika",alt:"Erika"},{src:"Katherine",alt:"Katherine"}
    ,{src:"Flor",alt:"Flor"},{src:"Leslie",alt:"Leslie"},{src:"Cindy",alt:"Cindy"},{src:"Annia",alt:"Annia"},{src:"Betsi",alt:"Betsi"},{src:"Aida",alt:"Aida"},{src:"Milagros",alt:"Milagros"}
    ,{src:"Nakarid",alt:"Nakarid"},{src:"Angie",alt:"Angie"},{src:"Maricarmen",alt:"Maricarmen"},{src:"Ariana",alt:"Ariana"},{src:"Florc",alt:"Flor"},{src:"Mitch",alt:"Mitch"},{src:"Naomi",alt:"Naomi"}
    ,{src:"Miriamp",alt:"Miriam"},{src:"Karin",alt:"Karin"},{src:"Liliana",alt:"Liliana"},{src:"Ruth",alt:"Ruth"},{src:"Wendy",alt:"Wendy"},{src:"Maria Grecia",alt:"Maria Grecia"},{src:"Ana",alt:"Ana"}
    ,{src:"Glisse",alt:"Glisse"},{src:"Neiza",alt:"Neiza"},{src:"Sandra",alt:"Sandra"}];
    var studentsChile=["c","h"];

    var studentsMexico=["m","x"];

    if(array=="studentsLima"){
      var c=studentsLima;
      console.log(c[0].src);
    }else if (array=="studentsChile") {
      var c=studentsChile;
      console.log(c);
    }else if (array=="studentsMexico") {
      var c=studentsMexico;
      console.log(c);
    }
    matchCoder(c);
}
var randomImg=[];
function arrayR(imgR){
if(randomImg.length>0){
  if(randomImg.indexOf(imgR.src)!==1){
    randomImg.push(imgR.src);
    console.log(imgR.src);
    $('img').attr("src","images/"+imgR.src+".png").attr("alt","'"+imgR.alt+"'");

}else{
  randomImg.push(imgR.src);
  console.log(imgR.src);
  $('img').attr("src","images/"+imgR.src+".png").attr("alt","'"+imgR.alt+"'");
  }
}
}

var item;
var i;

function matchCoder(item){

  function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  i= randomIntFromInterval(0,item.length);
  $('img').attr("src","images/"+item[i].src+".png").attr("alt","'"+item[i].alt+"'");
  var imgR=item[i].src;
  arrayR(imgR);





  function comprueba(){
    alert("presione boton" + cuenta);

      console.log(item[i])
      if($('input').val()==item[i].alt){
        alert("Excelente acertaste!!!");
        randomIntFromInterval(0,item.length);
        i= randomIntFromInterval(0,item.length);
        console.log(i);
        // $('img').attr("src","images/"+item[i].src+".png").attr("alt","'"+item[i].alt+"'");
        ganador();
        console.log(item[i]);
        arrayR(item[i]);
      }else{
        alert('Fallaste, intentalo otra vez');
        clickError();
        clear();
        // randomIntFromInterval(0,item.length);
        // i= randomIntFromInterval(0,item.length);
        // console.log(i);
        // arrayR(i);

        if(cuenta>4){
            alert("perdiste");
            perdedor();
            randomIntFromInterval(0,item.length);
            i= randomIntFromInterval(0,item.length);
            console.log(i);
            // $('img').attr("src","images/"+item[i].src+".png").attr("alt","'"+item[i].alt+"'");
            cuenta=0;
            arrayR(item[i]);
          }
        }
    }
  $('button').on('click',comprueba);
}



var puntos=0;
function ganador(){
  puntos=puntos +5;
  console.log(puntos);
  clear();
}

function perdedor(){
  puntos=puntos-1;
  console.log(puntos);
  clear();
}

function clear(){
  $('input').val('');
}

$('select').change(function(){
  var sede=$(this).val();
  match(sede);
})

var cuenta=0;
function clickError(){
  cuenta++;
  console.log(cuenta);
  event.stopPropagation();
}

}



$(document).on('ready',matchInit)
