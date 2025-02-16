$(document).ready(function(){
  $('.full-screen').slick({
    arrows: false, // 矢印を非表示
    dots: true, // ドットナビゲーションを表示
    autoplay: true, // 自動さ性を有効
    centerMode: true, // センターモードを有効
    centerPadding: '20%', // センター画像の左右の余白を指定
    slidesToShow: 2, //表示するスライドの枚数
    responsive: [ //レスポンシブ対応を画面サイズでパターン分けしてる
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, //表示するスライドの枚数
          centerPadding: '10%' // センター画像の左右の余白を指定
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1, //表示するスライドの枚数
          centerPadding: '0' // センター画像の左右の余白を指定
        }
      }]
  });
});

//スライドショー以下コピペ　よく使うslickのオプション設定をコピペ　https://ryob.net/slick-responsive/
//CSSの.sliderの値も上記に沿って一部編集
//slidesToShowは以下の4番目を参照　https://qiita.com/ymeeto/items/7fc56eea4bd44487cdb7

//変更前：スライドショー以下コピペ　https://125naroom.com/web/3198　10番目
