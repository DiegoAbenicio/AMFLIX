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
    switch(valor){
        case 1:
            link = "https://www.youtube.com/watch?v=zRToTk5b620&ab_channel=ZelpexKappa"
        break;
        case 2:
            link = "https://www.youtube.com/watch?v=tIhL2KHVdgE&ab_channel=KADOKAWAanime"
        break;
        case 3:
            link = "https://www.youtube.com/watch?v=S_BWr4mUwy4&ab_channel=Tsubomi"
        break;
        case 4:
            link = "https://www.youtube.com/watch?v=CXcEbr1ixEc&ab_channel=AniMelody–AnimeMusic"
        break;
        case 5:
            link = "https://www.youtube.com/watch?v=wp7l9oolXS0&ab_channel=AniMelody–AnimeMusic"
        break;
        case 6:
            link = "https://www.youtube.com/watch?v=AwHapidVQlI&ab_channel=AniMelody–AnimeMusic"
        break;
        case 7:
            link = "https://www.youtube.com/watch?v=SQulCltPdRY&ab_channel=yuuChannネル"
        break;
        case 8:
            link = "https://www.youtube.com/watch?v=fV3Fu5csdcA&ab_channel=HDMelody"
        break;
        case 9:
            link = "https://www.youtube.com/watch?v=5c_jTxvutlw&ab_channel=MelodicStar"
        break;
        case 10:
            link = "https://www.youtube.com/watch?v=Yc8pu8TC7IM&ab_channel=KADOKAWAanime"
        break;
        case 11:
            link = "https://www.youtube.com/watch?v=MnytTcodsPk&ab_channel=MelodicStar"
        break;
        default:
            link = "https://www.youtube.com/watch?v=AYjLTtsl-hY&ab_channel=InfinityTone"
        break;
                   
    }
    window.open(link);
}
