$(function () {
  let BotNum = {
    isbot: false,
    nb: 5,
    start: false,
    timestart: 0,
    timestop: 3,
    player: [],
    correct: '',
  };
  let bottime;

  function ShowBotMessage(msg, color = "#9c7fcf") {
    // هذا ينفذ نفس فكرة bc للعرض في الدردشة
    $("#messages").append(`
      <div class="bc-msg" style="border:1px solid #ccc;padding:10px;margin:5px 0;background:#fff">
        <div style="color:${color};font-weight:bold;">بوت الأرقام</div>
        <img src="imgs/bootbrb.png" style="width:50px;height:50px;margin:5px 0;">
        <div style="color:${color};">${msg}</div>
      </div>
    `);
  }

  function startCountdown() {
    bottime = setInterval(() => {
      if (BotNum.timestart === BotNum.timestop && !BotNum.start) {
        BotNum.start = true;
        clearInterval(bottime);
        sendNumberChallenge();
      } else {
        if (BotNum.timestart < 3) {
          BotNum.timestart++;
          ShowBotMessage(`<b>استعداد لبدء بوت الأرقام<br><span style='color:red'>${BotNum.timestart}</span></b>`);
        }
      }
    }, 1000);
  }

  function sendNumberChallenge() {
    const base = Math.floor(Math.random() * 9);
    const wrong = (base + 1) % 10;
    const arr = new Array(15).fill(base);
    const idx = Math.floor(Math.random() * arr.length);
    arr[idx] = wrong;
    BotNum.correct = wrong.toString();

    ShowBotMessage(`<b>أي رقم مختلف؟<br>${arr.join('')}</b>`);
  }

  function StopBotNum() {
    BotNum = {
      isbot: false,
      nb: 5,
      start: false,
      timestart: 0,
      timestop: 3,
      player: [],
      correct: '',
    };
    clearInterval(bottime);
    ShowBotMessage("🚫 تم إيقاف بوت الأرقام", "#000");
  }

  // زر التشغيل
  const btn = $('<label/>', {
    text: 'بوت الأرقام',
    class: 'label tc border btn label-info fl',
    css: {
      backgroundColor: 'gold',
      color: 'black',
      margin: '1px 4px',
      padding: '6px',
      width: '98%',
      cursor: 'pointer'
    },
    click: function () {
      if (BotNum.isbot) {
        alert("✅ البوت يعمل بالفعل!");
        return;
      }
      BotNum.isbot = true;
      BotNum.player = [];
      ShowBotMessage("✅ تم تشغيل بوت الأرقام");
      startCountdown();
    }
  });

  // إضافة الزر
  $('#newoption p.not_geri').append(btn);

  // التقاط إدخال المستخدم
  $(document).on("keydown", function (e) {
    if (e.key === "Enter") {
      let input = $("#msg").val().trim(); // تأكد أن ID حقل الكتابة هو msg
      if (!input || !BotNum.start || !BotNum.isbot) return;

      const username = "أنت"; // عدل إلى اسم المستخدم الفعلي لو عندك
      if (input === BotNum.correct) {
        const index = BotNum.player.findIndex(p => p.topic === username);
        if (index !== -1) {
          BotNum.player[index].point += 1;
        } else {
          BotNum.player.push({ topic: username, point: 1 });
        }

        const userPoint = BotNum.player.find(p => p.topic === username).point;

        ShowBotMessage(`<b>${username}<br><span style='color:red'>عدد النقاط: ${userPoint}</span></b>`);

        if (userPoint === BotNum.nb) {
          ShowBotMessage(`<b>${username}<br><span style='color:red'>🎉 فزت في لعبة الأرقام</span></b>`, "#000");
          StopBotNum();
        } else {
          BotNum.start = false;
          setTimeout(() => {
            BotNum.timestart = 0;
            startCountdown();
          }, 1000);
        }
      }
    }
  });
});
