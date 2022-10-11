//PARTES
  //base
  const btnbase = document.getElementById('base');
  btnbase.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "visible";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
//base branca
  const bntcorbasebranco = document.getElementById('whitebase');
  bntcorbasebranco.addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fff");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#fff");
    document.getElementById('CB').style.backgroundColor = "#fff";
  });

  //base preta
  const btncorbasepreto = document.getElementById('blackbase');
  btncorbasepreto.addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#013831");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#013831");
    document.getElementById('CB').style.backgroundColor = "#013831";
  });
  //base azul
  const btncorbaseazul = document.getElementById('bluebase');
  btncorbaseazul.addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#65161a");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#65161a");
    document.getElementById('CB').style.backgroundColor = "#65161a";
  });    
  //base vermelha
  const btncorbasevermelha = document.getElementById('redbase');
  btncorbasevermelha.addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#b62536");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#b62536");
    document.getElementById('CB').style.backgroundColor = "#b62536";
  });  
  //base amarela
  const btncorbaseamarela = document.getElementById('yellowbase');
  btncorbaseamarela.addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ed6840");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#ed6840");
    document.getElementById('CB').style.backgroundColor = "#ed6840";
  });  
  //base verde
  const btncorbaseverde = document.getElementById('greenbase');
  btncorbaseverde.addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#e64e27");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#e64e27");
    document.getElementById('CB').style.backgroundColor = "#e64e27";
  });  


  document.getElementById('cor7').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f8ab14");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#f8ab14");
    document.getElementById('CB').style.backgroundColor = "#f8ab14";
  });  

  document.getElementById('cor8').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ffdc1e");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#ffdc1e");
    document.getElementById('CB').style.backgroundColor = "#ffdc1e";
  });  

  document.getElementById('cor9').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#008865");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#008865");
    document.getElementById('CB').style.backgroundColor = "#008865";
  });  

  document.getElementById('cor10').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#649388");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#649388");
    document.getElementById('CB').style.backgroundColor = "#649388";
  });  

  document.getElementById('cor11').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#009e5d");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#009e5d");
    document.getElementById('CB').style.backgroundColor = "#009e5d";
  });  

  document.getElementById('cor12').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#028958");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#028958");
    document.getElementById('CB').style.backgroundColor = "#028958";
  });  

  document.getElementById('cor13').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#314f41");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#314f41");
    document.getElementById('CB').style.backgroundColor = "#314f41";
  });  

  document.getElementById('cor14').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#47b6ab");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#47b6ab");
    document.getElementById('CB').style.backgroundColor = "#47b6ab";
  });  

  document.getElementById('cor15').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#829186");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#829186");
    document.getElementById('CB').style.backgroundColor = "#829186";
  });  

  document.getElementById('cor16').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#007c68");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#007c68");
    document.getElementById('CB').style.backgroundColor = "#007c68";
  });  

  document.getElementById('cor17').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#283055");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#283055");
    document.getElementById('CB').style.backgroundColor = "#283055";
  });  

  document.getElementById('cor18').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#223b7b");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#223b7b");
    document.getElementById('CB').style.backgroundColor = "#223b7b";
  });  

  document.getElementById('cor19').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#587dbc");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#587dbc");
    document.getElementById('CB').style.backgroundColor = "#587dbc";
  });  

  document.getElementById('cor20').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2a3c74");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#2a3c74");
    document.getElementById('CB').style.backgroundColor = "#2a3c74";
  });  

  document.getElementById('cor21').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2c313c");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#2c313c");
    document.getElementById('CB').style.backgroundColor = "#2c313c";
  });  

  document.getElementById('cor22').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#353c7e");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#353c7e");
    document.getElementById('CB').style.backgroundColor = "#353c7e";
  });  

  document.getElementById('cor23').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#232851");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#232851");
    document.getElementById('CB').style.backgroundColor = "#232851";
  });  

  document.getElementById('cor24').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#5b473d");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#5b473d");
    document.getElementById('CB').style.backgroundColor = "#5b473d";
  });  

  document.getElementById('cor25').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8f7d6f");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#8f7d6f");
    document.getElementById('CB').style.backgroundColor = "#8f7d6f";
  });  

  document.getElementById('cor26').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#957152");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#957152");
    document.getElementById('CB').style.backgroundColor = "#957152";
  });  

  document.getElementById('cor27').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#888485");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#888485");
    document.getElementById('CB').style.backgroundColor = "#888485";
  });  

  document.getElementById('cor28').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8b807a");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#8b807a");
    document.getElementById('CB').style.backgroundColor = "#8b807a";
  });  

  document.getElementById('cor29').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#455158");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#455158");
    document.getElementById('CB').style.backgroundColor = "#455158";
  });  

  document.getElementById('cor30').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#bca68e");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#bca68e");
    document.getElementById('CB').style.backgroundColor = "#bca68e";
  });
  
  document.getElementById('cor31').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#86817b");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#86817b");
    document.getElementById('CB').style.backgroundColor = "#86817b";
  });
    
  document.getElementById('cor32').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
    document.querySelectorAll(".corbasecostas").forEach(v => v.style.fill = "#000");
    document.getElementById('CB').style.backgroundColor = "#000";
  });
      
  const btnbotoes = document.getElementById('botoes');
  btnbotoes.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel1').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "visible";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "visible";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "visible";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //botoes branco
  const bntcorbotoesbranco = document.getElementById('whitebase1');
  bntcorbotoesbranco.addEventListener('click', function(e){
    document.getElementById('frente4').style.display = "none";
    document.getElementById('frente5').style.display = "none";
    document.getElementById('frente7').style.display = "none";
  });

  //botoes preta
  const btncorbotoespreto = document.getElementById('blackbase1');
  btncorbotoespreto.addEventListener('click', function(e){
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "none";
    document.getElementById('frente7').style.display = "none";
  });
  //botoes azul
  const btncorbotoesazul = document.getElementById('bluebase1');
  btncorbotoesazul.addEventListener('click', function(e){
    document.getElementById('frente4').style.display = "none";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente7').style.display = "none";
  });    
  //botoes vermelha
  const btncorbotoesvermelha = document.getElementById('redbase1');
  btncorbotoesvermelha.addEventListener('click', function(e){
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "block";
    document.getElementById('frente7').style.display = "none";
  });  
  //botoes amarela
  const btncorbotoesamarela = document.getElementById('yellowbase1');
  btncorbotoesamarela.addEventListener('click', function(e){
    document.getElementById('frente4').style.display = "block";
    document.getElementById('frente5').style.display = "none";
    document.getElementById('frente7').style.display = "block";
  });  
  //botoes verde
  const btncorbotoesverde = document.getElementById('greenbase1');
  btncorbotoesverde.addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "green");
    document.getElementById('BT').style.backgroundColor = "green";
  });  


  document.getElementById("switch-shadow").addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById("frente6").style.display = "block";
    }else{
      document.getElementById("frente6").style.display = "none";
    }
  });

  document.getElementById("switch-shadow3").addEventListener('click', function(e){
    if(document.getElementById('switch-shadow3').checked){
      document.getElementById("costas7").style.visibility = "visible";
    }else{
      document.getElementById("costas7").style.visibility = "hidden";
    }
  });
  document.getElementById("switch-shadow4").addEventListener('click', function(e){
    if(document.getElementById('switch-shadow4').checked){
      document.getElementById("frente8").style.visibility = "visible";
      document.getElementById("frente3").style.visibility = "hidden";
      document.getElementById("costas0").style.visibility = "hidden";
      document.getElementById("costas4").style.visibility = "visible";
      document.getElementById("frente1").style.visibility = "hidden";
      document.getElementById("costas2").style.visibility = "hidden";
      document.getElementById("frente2").style.visibility = "visible";
      document.getElementById("costas5").style.visibility = "visible";
    }else{
      document.getElementById("frente8").style.visibility = "hidden";
      document.getElementById("frente3").style.visibility = "visible";
      document.getElementById("costas0").style.visibility = "visible";
      document.getElementById("costas4").style.visibility = "hidden";
      document.getElementById("frente1").style.visibility = "visible";
      document.getElementById("costas2").style.visibility = "visible";
      document.getElementById("frente2").style.visibility = "hidden";
      document.getElementById("costas5").style.visibility = "hidden";
    }
  });
 

  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Jaleco.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.display = "block";
      document.getElementById('switch-shadow').disabled = true;
    }else {
      document.getElementById('switch-shadow').disabled = false;
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.display = "none" ;
  }
});


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
        document.getElementById('coresb').style.visibility = "hidden";
        document.getElementById('coresGE').style.visibility = "hidden";
        document.getElementById('coresGI').style.visibility = "hidden";
        document.getElementById('coresP').style.visibility = "hidden";
        document.getElementById('coresVE').style.visibility = "hidden";
        document.getElementById('coresVD').style.visibility = "hidden";
        document.getElementById('coresBF').style.visibility = "hidden";
        document.getElementById('coresBB').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "visible";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "visible";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "visible";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "visible";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "visible";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

