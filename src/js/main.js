(() => {
  $('.slick-box').slick({
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
        dots: true,
        arrows: false,
        touchMove: true,
        variableWidth: false,
      },
    }],
  });

  $('#js-speech-btn').on('click', () => {
    if (!'SpeechSynthesisUtterance' in window) {
        alert('Speech synthesis(音声合成) APIには未対応です.');
        return;
    }
    let msg = new SpeechSynthesisUtterance();
    msg.text = $('#js-speech-txt').val();
    msg.lang = 'ja-JP';
    speechSynthesis.speak(msg);
  });

  $('.speech-area__txt-change-btn').on('click', (e)=> {
    e.preventDefault();
    let id = Number($(e.currentTarget).attr('id').substr(-1, 1));
    let diaryTxt;
    let diaryDate;
    switch (id) {
      case 1:
        diaryTxt = 'ふだん勉強しないのがいけないんだ';
        diaryDate = '『テストにアンキパン』より';
        break;
      case 2:
        diaryTxt = 'まずい、雲行きがあやしい';
        diaryDate = '『町内突破大作戦』より';
        break;
      case 3:
        diaryTxt = 'いくらなんでも先生に迷惑だ';
        diaryDate = '『本人ビデオ』より';
        break;
      case 4:
        diaryTxt = 'けちくさいこというな';
        diaryDate = '『メカ・メーカー』より';
        break;
      case 5:
        diaryTxt = '二階でやったから怒られたんだ。三階でやろう';
        diaryDate = '『四次元たてましブロック』より';
        break;
      case 6:
        diaryTxt = '風が爽やかだよ。窓を開けようよ';
        diaryDate = '『音のない世界』より';
        break;
    }
    $('#js-speech-number').val(diaryDate);
    $('#js-speech-txt').val(diaryTxt);
  });
})();
