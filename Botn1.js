$(function () {
  let BotNum = {
    isbot: false,
    nb: 5,
    start: false,
    players: [],
    correct: '',
  };

  function generateChallenge() {
    const baseDigit = Math.floor(Math.random() * 9);
    const wrongDigit = (baseDigit + 1) % 10;
    let arr = new Array(15).fill(baseDigit);
    const randIndex = Math.floor(Math.random() * arr.length);
    arr[randIndex] = wrongDigit;
    BotNum.correct = wrongDigit.toString();
    return arr.join('');
  }

  function sendBotMessage(text) {
    $('.tboxbc').val(text);
    SEND_BC_UP();
  }

  function sendChallenge() {
    const challenge = generateChallenge();
    BotNum.start = true;
    sendBotMessage(`بوت الأرقام: أي رقم مختلف؟\n${challenge}`);
  }

  function StopBot() {
    sendBotMessage("🛑 تم إيقاف بوت الأرقام");
    BotNum = {
      isbot: false,
      nb: 5,
      start: false,
      players: [],
      correct: '',
    };
  }

  function awardPoint(username) {
    let player = BotNum.players.find(p => p.name === username);
    if (player) {
      player.points++;
    } else {
      BotNum.players.push({ name: username, points: 1 });
      player = BotNum.players.find(p => p.name === username);
    }

    sendBotMessage(`بوت الأرقام: ${username} حصل على نقطة! (النقطة رقم ${player.points})`);

    if (player.points >= BotNum.nb) {
      sendBotMessage(`🏆 بوت الأرقام: ألف مبروك ${username} لقد فزت في لعبة الرقم المختلف! 🎉`);
      setTimeout(() => {
        StopBot();
      }, 2000);
    } else {
      setTimeout(() => {
        BotNum.start = false;
        sendChallenge();
      }, 2000);
    }
  }

  const startBtn = $('<label/>', {
    text: 'تشغيل بوت الأرقام',
    class: 'label tc border btn label-info fl games-btn',
    css: {
      backgroundColor: 'gold',
      color: 'black',
      margin: '1px 4px',
      padding: '6px',
      width: '98%',
      cursor: 'pointer',
      display: 'block',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      userSelect: 'none',
    },
    click: function () {
      if (BotNum.isbot) {
        alert("⚠️ البوت يعمل بالفعل!");
        return;
      }

      let userInput = prompt("🎯 كم نقطة مطلوبة للفوز؟", "5");
      if (userInput === null) return;
      let num = parseInt(userInput);
      if (isNaN(num) || num <= 0) {
        alert("❌ الرجاء إدخال رقم صحيح أكبر من 0");
        return;
      }

      BotNum.nb = num;
      BotNum.isbot = true;
      BotNum.players = [];
      sendBotMessage(`✅ تم تشغيل بوت الأرقام - الفوز عند الوصول إلى ${BotNum.nb} نقاط`);
      setTimeout(() => {
        sendChallenge();
      }, 1000);
    }
  });

  const stopBtn = $('<label/>', {
    text: 'إيقاف البوت',
    class: 'label tc border btn label-danger fl games-btn',
    css: {
      backgroundColor: '#ff4d4d',
      color: 'white',
      margin: '1px 4px',
      padding: '6px',
      width: '98%',
      cursor: 'pointer',
      display: 'block',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      userSelect: 'none',
    },
    click: function () {
      if (!BotNum.isbot) {
        alert("⚠️ البوت غير مفعل!");
        return;
      }
      StopBot();
    }
  });

  // شرط ظهور زر الألعاب عند توفر jstp.cp
  socket.on("msg", function(jstp) {
    if (jstp.cp) {
      const container = $('#newoption p.not_geri');
      if (container.length) {
        container.append(startBtn);
        container.append(stopBtn);
      } else {
        $('body').append(startBtn);
        $('body').append(stopBtn);
      }
    } else {
      $('.games-btn').remove(); // إخفاء الزر عند غياب cp
    }
  });

  const observer = new MutationObserver(function (mutationsList) {
    mutationsList.forEach(function (mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        $(mutation.addedNodes).each(function () {
          const msg = $(this).find('.u-msg').text().trim();
          const username = $(this).find('.u-topic').text().trim();

          if (!msg || !username || !BotNum.start || !BotNum.isbot) return;

          if (msg === BotNum.correct) {
            BotNum.start = false;
            awardPoint(username);
          }
        });
      }
    });
  });

  const wall = document.getElementById('d2bc');
  if (wall) {
    observer.observe(wall, { childList: true, subtree: true });
  } else {
    console.warn("❌ لم يتم العثور على عنصر d2bc");
  }
});
