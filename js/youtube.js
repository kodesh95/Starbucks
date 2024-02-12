// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // <div id='player'>
  new YT.Player('player', {

    videoId: 'E8V02ArInjY',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'E8V02ArInjY'
    },
    events: {
      onReady: function(event) {
        event.target.mute() // 음소거
      }
    }
  });
}