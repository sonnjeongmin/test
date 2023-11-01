var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        // 재생할 유튜브 영상 ID
        videoId: '5WZxdyMDFAg',
        playerVars : {
            autoplay: true, //자동재생유무
            loop: true,  //반복재생유무
            playlist: '5WZxdyMDFAg'  //반복재생할 영상 ID
        },
        events: {
            // 영상이 준비되었을 때
            onReady: function(event){
                event.target.mute()  //음소거
            }
        }
    });
}