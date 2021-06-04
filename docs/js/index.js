$(function () {
  let pc = true;
  if (!(window.screen.availWidth * 1 >= 420)) {
    pc = false;
  }
  let flog = 0;
  let name;
  let oldName = localStorage.getItem('name');
  let lock = 1;
  const container = $(".container");
  const letter = [{
      name: '朱翡珊',
      text: `愿你的未来纯净明朗，像你此刻的可爱目光，在世间美好的命运中，愿你的命运美好欢畅。`
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
    },
    {
      name: '肖腊',
      text: `在我印象中你是一个非常‘暴力 凶残’的女汉子，特别是有一次打我后脑勺，痛的我要命。在未来的生活里，也要有这种大姐大的气质，活出自己的人生。`
    },
    {
      name: '彭强',
      text: `你是一个‘前辈’式的朋友，佩服你的潇洒气质。祝你在金融行业打出一片天下，到时候，我好找你借钱。`
    },
    {
      name: '王鹏',
      text: `好好学习，说不定以后我的孩子在你手里读书呢，你可以别误人子弟！ 望未来情场职场场场得意`
    },
    {
      name: '熊仕林',
      text: `你确实很聪明，但是你不得不承认自己的缺点。改变自己，你将散发更多的人格气质`
    },
    {
      name: '凌文婧',
      text: `靖哥哥呀，你是一个很坚强，勇敢且倾国倾城、温婉娴淑、闭月羞花、沉鱼落雁的女孩。我也知道，你经历了一段痛苦的时光，承受了这个年龄段本不该承受的压力。 但正因如此，你更应该自强、自立，不要想着退学，好好学习，成为一个好医生。 相信光，让自己成为太阳。`
    },
    {
      name: '唐勇',
      text: `寝室长，好久不见，啥时候寝室的人一起聚聚！`
    },
    {
      name: '梁俊',
      text: `兵哥哥，国庆来长沙玩，不醉不归。`
    },
    {
      name: '王琦 ',
      text: '托福过了吗? 祝你早日实现梦想，前程似锦。'
    },
    {
      name: '何定洋',
      text: '你个老se批，寝室没有你和老李，都没有笑点了，暑假一起玩玩。'
    },
    {
      name: '谭嘉乐',
      text: '眼睛睁大点！！ 就不罗里吧嗦了，懂得都懂。暑假可以出去玩玩！ '
    },
    {
      name: '刘文灿',
      text: '要记住，你永远都是我的妹妹！在我眼里，你永远都是长不大的蠢孩子。'
    },

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
      if (pc) {
        $('.left_top').animate({
          "top": '-80px',
          'left': '-80px'
        }, 1500);
        $('.info_top').animate({
          "top": '0',
          'left': '80px'
        }, 1500);
      }else{
        $('.left_top').animate({
          "top": '-30px',
          'left': '-24px'
        }, 1500);
        $('.info_top').animate({
          "top": '0',
          'left': '40px'
        }, 1500);
      }
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
      if (this.time) {
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
      if (name === '朱翡珊') {
        $('.letter-text').css({
          "color": '#E71B64'
        });
      } else {
        $('.letter-text').css({
          "color": '#000'
        });
      }
      for (let i = 0; i < letter.length; i++) {
        if (name === letter[i].name) {
          text = letter[i].text;
          break;
        }
      }
      this.time = setInterval(() => {
        $('.letter-text').text(function (index, content) {
          while (text[i] == ' ') {
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
    if (lock === 1) {
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
    if (lock === 2) {
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
    if (lock === 3) {
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
    if (lock === 4) {
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
        }, 2000);
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

  $('.init').click(function () {
    page4.init();
    $('.init').fadeOut('2000');
  })



})