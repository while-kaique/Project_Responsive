let classItens = itens.classList

function clickMenu(){

    classItens.toggle('on')
}

function mudouTamanho(){
   if (window.innerWidth >= 768) {
    classItens.toggle("on", force=true)
   } else if (window.innerWidth < 768){
    classItens.toggle("on", force=false)
   }
}