$(document).ready(function() {
  let isPongoPaused = false;

  const pongButton = $('<label></label>')
    .text('تفعيل وضع مشاهدة السوشيال ميديا')
    .addClass('label tc border btn label-info fl') // نفس التنسيق
    .css({
      'background-color': 'ghostwhite',
      'color': 'black',
      'margin': '1px 4px',
      'padding': '6px',
      'width': '98%',
      'cursor': 'pointer',
      'user-select': 'none'
    })
    .prepend('<span class="fl fa fa-ban" style="font-family: FontAwesome, sans-serif; margin-right:4px;"></span> ')
    .click(function() {
      if (!isPongoPaused) {
        // إيقاف pongo لمدة 5 دقائق
        isPongoPaused = true;
        pausePongo();

        $(this).html('<span class="fl fa fa-check" style="font-family: FontAwesome, sans-serif; margin-right:4px;"></span> إلغاء تفعيل وضع مشاهدة السوشيال ميديا');
        alert('تم تفعيل وضع مشاهدة السوشيال ميديا لمدة 5 دقائق');

        setTimeout(() => {
          isPongoPaused = false;
          $(pongButton).html('<span class="fl fa fa-ban" style="font-family: FontAwesome, sans-serif; margin-right:4px;"></span> تفعيل وضع مشاهدة السوشيال ميديا');
          alert('انتهى وقت وضع مشاهدة السوشيال ميديا');
          resumePongo();
        }, 5 * 60 * 1000); // 5 دقائق
      } else {
        // إلغاء التفعيل يدويًا
        isPongoPaused = false;
        $(this).html('<span class="fl fa fa-ban" style="font-family: FontAwesome, sans-serif; margin-right:4px;"></span> تفعيل وضع مشاهدة السوشيال ميديا');
        alert('تم إلغاء تفعيل وضع مشاهدة السوشيال ميديا');
        resumePongo();
      }
    });

  $('#newoption .not_geri').append(pongButton);

  // دوال لإيقاف وتشغيل event "pongo"
  function pausePongo() {
    socket.off("pongo");
  }

  function resumePongo() {
    socket.on("pongo", () => {
      if (isPageHidden && silentAudio.paused) {
        silentAudio.play().catch(err => {
          console.warn("Autoplay blocked:", err);
        });
      }
    });
  }
});
