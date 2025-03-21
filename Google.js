<br><br>

<div style="display:inline-block;text-align:center;margin-right:5px">
  <label class="label label-primary fa fa-image">ايقونه الموقع</label>
  <br>
  <img class="p-logo" onclick="if (!window.__cfRLUnblockHandlers) return false; sendfilea(this,'logo');" 
       style="width: 50px;height:50px;border: 2px solid darkgray;margin-top: 3px;" 
       src="/site/<%= host %>logo.png">
</div>
<script>
  $(".p-logo").attr("src","/site/"+location.host+"logo.png")
</script>

<div style="display:inline-block;text-align:center;margin-right:5px">
  <label class="label label-primary fa fa-image">ايقونه الرسائل</label>
  <br>
  <img class="p-msgpic" onclick="if (!window.__cfRLUnblockHandlers) return false; sendfilea(this,'msgpic');" 
       style="width: 50px;height:50px;border: 2px solid darkgray;margin-top: 3px;" 
       src="/site/msgpic.png">
</div>

<div style="display:inline-block;text-align:center;margin-right:5px">
  <label class="label label-primary fa fa-image">ايقونه الغرف</label>
  <br>
  <img class="p-room" onclick="if (!window.__cfRLUnblockHandlers) return false; sendfilea(this,'room');" 
       style="width: 50px;height:50px;border: 2px solid darkgray;margin-top: 3px;" 
       src="/site/<%= host %>room.png">
</div>
<script>
  $(".p-room").attr("src","/site/"+location.host+"room.png")
</script>

<div style="display:inline-block;text-align:center;margin-right:5px">
  <label class="label label-primary fa fa-image">ايقونه الاعضاء</label>
  <br>
  <img class="p-user" onclick="if (!window.__cfRLUnblockHandlers) return false; sendfilea(this,'user');" 
       style="width: 50px;height:50px;border: 2px solid darkgray;margin-top: 3px;" 
       src="/site/<%= host %>pic.png">
</div>
<script>
  $(".p-user").attr("src","/site/"+location.host+"pic.png")
</script>

<div style="display:inline-block;text-align:center;margin-right:5px">
  <label class="label label-primary fa fa-image">ايقونه المايك</label>
  <br>
  <img class="p-mic" onclick="if (!window.__cfRLUnblockHandlers) return false; sendfilea(this,'mic');" 
       style="width: 50px;height:50px;border: 2px solid darkgray;margin-top: 3px;" 
       src="/site/<%= host %>mic.gif">
</div>
<script>
  $(".p-mic").attr("src","/site/"+location.host+"mic.gif")
</script>

<br><br>
