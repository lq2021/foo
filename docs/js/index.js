$(function () {
  let flog = 0;
  let name;
  let oldName = localStorage.getItem('name');
  let lock = 1;
  const container = $(".container");
  const letter = [
    {
      name: '朱翡珊',
      text: `  我能感觉到你的一言一行、一举一动都在告诉我 你的想法。但是，但是，我克制不住我自己，我忍不住找你打游戏、发个消息之类的。我想了想，一个人如果不追求自己喜欢的事物或人，那活着的意义是什么了？ 我不知道怎么追女孩子，现在也并没有追你的计划。但是，毕业之后，如果你没有男朋友，我可能会抓住每一个机会，详细规划，当然不会打扰你的生活。愿你的未来纯净明朗，像你此刻的可爱目光，在世间美好的命运中，愿你的命运美好欢畅。`
    },
    {
      name: '王雨欣',
      text: '不知道写什么啊，字数都不知道怎么凑，不是我的问题，你要好好反思。听说你最近在减肥，别呀！50万身价的你，按斤算 0.5万一斤。 所以，你应该多吃点，以后能‘卖’更多钱。 把自己活成一束光，自信坦荡，光芒万丈！！！'
    },
    {
      name: '陈丹',
      text: `丹姐你：天生丽质、慧质兰心、秀外慧中、暗香盈袖、闭月羞花、沉鱼落雁、倾国倾城、温婉娴淑、千娇百媚、仪态万千 和谭鑫男才女貌，才子佳人。（不会写开头，先夸一顿再说）。说说老李吧，我也写了些东西给老李，他的想法是有些奇怪，我反正猜不透，但大致能感觉他是那种比较保守、不喜欢溜达的人。他的想法我也改变不了，唉！  最后，我啥时候能吃喜糖啊！！`
    },
    {
      name: '李振东',
      text: `不知道那天你怎么惹到陈丹了，我也不知道说什么，但我能明显感觉到她有男盆友后，你就对这个群以及这个群的人疏远了。虽然，她是有男盆友了，但是我们之间的友谊不可能因为这而破裂吧，就不能一起玩了吗？耗子尾汁，耗耗反思。 愿君勿忘少年志，踏破凌云勿忘友，兄弟，早日脱单啦.`
    }
  
  ]
  let skip = {
    left: 0,
    top: 0,
    about() {
      container.animate({
        "left": '0%',
        "top": '0%'
      }, 1000);
    },
    foo() {
      container.animate({
        "left": '-105%',
        "top": '0%'
      }, 1000);
    },
    work() {
      container.animate({
        "left": '0%',
        "top": '-105%'
      }, 1000);
    },
    egg() {
      container.animate({
        "left": '-105%',
        "top": '-105%'
      }, 1000);
    }
  }


  let page2 = {
    init() {
      $('.left_top').css({
        'top': "200px",
        "left": '200px'
      });
      $('.info_top').css({
        'top': "200px",
        "left": '200px'
      });
      $('.info_bottom').css({
        "left": '200px',
        'bottom': '200px'
      });
      $('.info_right').css({
        'top': "200px",
        "right": '200px'
      });
      $('.info_text').css({
        "opacity": '0'
      }).removeClass('info_text_active');
    },
    active() {
      $('.left_top').animate({
        "top": '-80px',
        'left': '-80px'
      }, 1500);
      $('.info_top').animate({
        "top": '0',
        'left': '80px'
      }, 1500);
      $('.info_bottom').animate({
        "bottom": '0',
        'left': '0'
      }, 1500);
      $('.info_right').animate({
        "top": '0',
        'right': '0',
        "transform": 'rotate(180deg)'
      }, 1500);
      $(".info_text").addClass('info_text_active');
      $('.info_text').animate({
        "opacity": '1'
      }, 1500);
    }
  }

  let page3 = {
    init() {
      $('.img-item').removeClass('img_active');
    },
    active() {
      $('.img-item').addClass('img_active')
    }
  }

  let page4 = {
    time: null,
    init() {
      $('.side').fadeIn('2000');
      $('.letter_wrap').css({
        "backgroundColor": '#336666'
      });
      $('.letter').css({
        "top": "0px"
      });
      flog = 0;
      $('.input').val("");
      $('.letter-text').text("");
      if(this.time){
        clearInterval(this.time);
      }
    },
    active() {
      this.disappear();
      this.text();

    },
    disappear() {
      $('.side').fadeOut('2000');
      $('.letter_wrap').css({
        "backgroundColor": 'transparent'
      });
      $('.letter').css({
        "top": "-20px"
      });
    },
    text() {
      let text = '抱歉！ 由于时间问题，暂时没有写。不过先祝你万事如意，心想事成';
      let i = 0;
      if(name === '朱翡珊'){
        $('.letter-text').css({"color": '#E71B64'});
      }else{
        $('.letter-text').css({"color": '#000'});
      }
      for (let i = 0; i < letter.length; i++) {
        if (name === letter[i].name) {
          text = letter[i].text;
          break;
        }
      }
      this.time = setInterval(() => {
        $('.letter-text').text(function (index, content) {
          while(text[i] == ' '){
            content += '\xa0';
            i++;
          }
          content += text[i++];
          return content;
        });
        if (i >= text.length) {
          clearInterval(this.time);
          $('.init').fadeIn('2000');
        }
      }, 300);
    }
  }
  $('.btn1').click(function () {
    if(lock === 1){
      return;
    }
    lock = 1;
    skip.about();
    setTimeout(function () {
      page2.init();
      page3.init();
      page4.init();
    }, 800);
  })
  $('.btn2').click(function () {
    if(lock === 2){
      return;
    }
    lock = 2;
    skip.foo();
    page2.active();
    setTimeout(function () {
      page3.init();
      page4.init();
    }, 800);
  })
  $('.btn3').click(function () {
    if(lock === 3){
      return;
    }
    lock = 3;
    skip.work();
    page3.active();
    setTimeout(function () {
      page2.init();
      page4.init();
    }, 800);
  })
  $('.btn4').click(function () {
    if(lock === 4){
      return;
    }
    lock = 4;
    skip.egg();
    setTimeout(function () {
      page2.init();
      page3.init();
      page4.init();
    }, 800);
  })






  $('.submit').click(function () {
    name = $('input').val();
    if (flog == 1) {
      return;
    }
     flog = 1;
    if (!name.trim()) {
      return;
    }
    $('.name').text(name);
    if (!oldName) {
      $('.confirm-box').css({
        "display": "flex"
      });
    } else {
      if (name === oldName) {
        page4.active();
      } else if (oldName === '朱翡珊') {
        $('.warning').text('满足你的好奇心!').addClass('show').css({
          "color": 'pink'
        });
        setTimeout(function () {
          $('.warning').removeClass('show').text("");
          page4.active();
        }, 2000);
      } else if (oldName !== '朱翡珊') {
        $('.warning').text('干嘛想看别人的!').addClass('show');
      
        setTimeout(function () {
          $('.warning').removeClass('show').text(""); 
           flog = 0;
        },2000);
      }
    }




   
  })

  $('.comfirm_btn').click(function () {

    localStorage.setItem('name', name);
    oldName = localStorage.getItem('name');
    $('.confirm-box').css({
      "display": "none"
    });
    page4.active();
  })

  $('.init').click(function(){
    page4.init();
    $('.init').fadeOut('2000');
  })



})