$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
 function chamar(){
    window.location.assign("music.html");
}
function animes(valor){
    var link;
    if(valor == 1){
        link = "https://www.youtube.com/watch?v=GwaRztMaoY0&ab_channel=CrunchyrollCollection"
    } else if(valor == 2){
        link = "https://www.youtube.com/watch?v=lTlzDfhPtFA"
    } else if(valor == 3){
        link = "https://www.youtube.com/watch?v=y7333GgriD8"
    } else if(valor == 4){
        link = "https://www.youtube.com/watch?v=pmanD_s7G3U"
    } else if(valor == 5){
        link = "https://www.youtube.com/watch?v=Ku5fgOHy1JY"
    } else if(valor == 6){
        link = "https://www.youtube.com/watch?v=VtfUrDwpo2E"
    } else if(valor == 7){
        link = "https://www.youtube.com/watch?v=Bw-5Lka7gPE"
    } else if(valor == 8){
        link = "https://www.youtube.com/watch?v=QuHdSHMS4bk&ab_channel=AnimeSekai"
    } else if(valor == 9){
        link = "https://www.youtube.com/watch?v=KOWcj7XKnfQ"
    } else if(valor == 10){
        link = "https://www.youtube.com/watch?v=By_JYrhx-WY"
    }
    window.open(link);
}
function musicas(valor){
    var link;
    if(valor == 1){
        link = "https://www.youtube.com/watch?v=zRToTk5b620&ab_channel=ZelpexKappa"
    }
    window.open(link);
}
