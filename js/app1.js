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
    var studentsMexico=[{src:"Alma",alt:"Alma"},{src:"Ana",alt:"Ana"},{src:"Analy",alt:"Analy"},{src:"Areli",alt:"Areli"},{src:"Beatriz",alt:"Beatriz"},{src:"Cecilia",alt:"Cecilia"},{src:"Claudia",alt:"Claudia"}
    ,{src:"Daniela",alt:"Daniela"},{src:"Elisa",alt:"Elisa"},{src:"Evelyn",alt:"Evelyn"},{src:"Gabrielap",alt:"Gabriela"},{src:"Gabrielat",alt:"Gabriela"},{src:"Grissel",alt:"Grissel"},{src:"Guadalupe",alt:"Guadalupe"}
    ,{src:"Johana",alt:"Johana"},{src:"Joyce",alt:"Joyce"},{src:"Juana",alt:"Juana"},{src:"Karena",alt:"Karen"},{src:"Karenc",alt:"Karen"},{src:"Karenq",alt:"Karen"},{src:"Karlam",alt:"Karla"}
    ,{src:"Karlav",alt:"Karla"},{src:"Leslie",alt:"Leslie"},{src:"Lilian",alt:"Lilian"},{src:"Milca",alt:"Milca"},{src:"Naibit",alt:"Naibit"},{src:"Nayeli",alt:"Nayeli"},{src:"Nelly",alt:"Nelly"}
    ,{src:"Reyna",alt:"Reyna"},{src:"Rubí",alt:"Rubí"},{src:"Ruthl",alt:"Ruth"},{src:"Ruthz",alt:"Ruth"},{src:"Sandrab",alt:"Sandra"},{src:"Sandrad",alt:"Sandra"},{src:"Vianey",alt:"Vianey"}
    ,{src:"Zazil",alt:"Zazil"}];

    var studentsChile=["m","x"];

    if(array=="studentsLima"){
      var c=studentsLima;
      var d='.png'
      console.log(c);
    }else if (array=="studentsChile") {
      var c=studentsChile;
      console.log(c);
    }else if (array=="studentsMexico") {
      var c=studentsMexico;
      var d='.jpg'
      console.log(c);
    }

    matchCoder(c,d);

}
var item;
var i;
var fotoMostrada=[];

function compruebaFoto(t,item,ext){
  console.log(t);
  if(fotoMostrada.length<t){
    function randomIntFromInterval(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }
    i= randomIntFromInterval(0,t);
    console.log(fotoMostrada);
    console.log(item);
    console.log(item[i].src);
    // $('img').attr("src","images/"+item[i].src+ ext).attr("alt","'"+item[i].alt+"'");
    // console.log(fotoMostrada.indexOf(item[i].alt));
    if(fotoMostrada.indexOf((item[i].src))!=-1){
      console.log('repetida');
      console.log(t);
      console.log(item);
      console.log(ext);
      compruebaFoto(t,item,ext);
    }else{
      console.log(item[i].src);
      $('img').attr("src","images/"+item[i].src+ ext).attr("alt","'"+item[i].alt+"'");
      fotoMostrada.push(item[i].src);
    }
  }else{
    alert('juego terminado');
  }

}

function matchCoder(item,ext){
  var tamano=item.length;
  function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  i= randomIntFromInterval(0,tamano);

  $('img').attr("src","images/"+item[i].src+ ext).attr("alt","'"+item[i].alt+"'");
  fotoMostrada.push(item[i].src);


  function comprueba(){
    // alert("presione boton" + cuenta);

      console.log(item[i])
      if($('input').val().toLowerCase()==item[i].alt.toLowerCase()){
        console.log("Excelente acertaste!!!");
        $('#mensaje').text("Excelente acertaste!!!");
        ganador();
        compruebaFoto(tamano,item,ext);
        // randomIntFromInterval(0,item.length);
        // i= randomIntFromInterval(0,item.length);
        // $('img').attr("src","images/"+item[i].src+ ext).attr("alt","'"+item[i].alt+"'");

      }else{
        console.log('Fallaste, intentalo otra vez');
          $('#mensaje').text('Fallaste, intentalo otra vez');
        clickError();
        clear();

        if(cuenta>4){
            console.log("perdiste");
            $('#mensaje').text("perdiste 1 punto, su nombre es: "+ item[i].alt + " ");
            perdedor();
            compruebaFoto(tamano,item,ext);
            // randomIntFromInterval(0,item.length);
            // i= randomIntFromInterval(0,item.length);
            // $('img').attr("src","images/"+item[i].src + ext).attr("alt","'"+item[i].alt+"'");
          }
        }
      }

      $('button').on('click',comprueba);
    }



    var puntos=0;
    function ganador(){
      puntos=puntos +5;
      console.log(puntos);
      $('#puntos>span').text(puntos);
      clear();
    }

    function perdedor(){
      puntos=puntos-1;
      console.log(puntos);
      clear();
      $('#puntos>span').text(puntos);
      cuenta=0;
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
