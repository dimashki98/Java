$(document).ready(function() {
    function extractVideoData(url) {
        if (!url) return { type: null, embedUrl: null };

        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            let videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
            return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1` };
        }

        if (url.includes("tiktok.com")) {
            return { type: "tiktok", embedUrl: `https://www.tiktok.com/embed/${url.split('/').pop()}` };
        }

        if (url.includes("instagram.com/reel/") || url.includes("instagram.com/p/")) {
            return { type: "instagram", embedUrl: `https://www.instagram.com/reel/${url.split('/').pop()}/embed/` };
        }

        if (url.includes("facebook.com") || url.includes("fb.watch")) {
            return { type: "facebook", embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}` };
        }

        return { type: null, embedUrl: null };
    }

    $(".set-profile").click(function() {
        var d = {};
        d.topic = $(".stopic").val();
        d.msg = $(".smsg").val();
        d.videoUrl = $(".urluto").val();
        d.ucol = $(".scolor").val() === '#ff00' ? 'transparent' : "#" + $(".scolor").val().replace("#", "");
        d.mcol = $(".mcolor").val() === '#ff00' ? 'transparent' : "#" + $(".mcolor").val().replace("#", "");
        d.mscol = $(".mscolor").val() === '#ff00' ? 'transparent' : "#" + $(".mscolor").val().replace("#", "");
        d.bg = $(".sbg").val() === '#ff00' ? 'transparent' : "#" + $(".sbg").val().replace("#", "");
        d.copic = $(".scopic").val() === '#ff00' ? 'transparent' : "#" + $(".scopic").val().replace("#", "");

        var videoData = extractVideoData(d.videoUrl);
        d.videoType = videoData.type;
        d.videoEmbed = videoData.embedUrl;

        if (d.videoEmbed) {
            localStorage.setItem("uprofile", JSON.stringify(d));
            alert("تم حفظ الملف الشخصي بنجاح!");
        } else {
            alert("الرجاء التحقق من رابط الفيديو.");
        }
    });

    $(".isyoutube").click(function() {
        $(".pstorycdesclass").remove();
        var profileData = JSON.parse(localStorage.getItem("uprofile"));

        if (!profileData || !profileData.videoEmbed) {
            alert("لا يوجد فيديو متاح للعرض!");
            return;
        }

        $("#upro").before(`
            <div class="pstorycdesclass">
                <div class="pstorycdesclass" style="display:block" onclick="$(this).parent().remove()"></div>
                <div class="pstycdesclass">
                    <button class="btn btn-info" onclick="$(this).parent().parent().hide()" style="width: 28px; margin: 5px; float: right;">-</button>
                    <div class="islinkcdesclass">
                        <iframe src="${profileData.videoEmbed}" allow="autoplay; encrypted-media" allowfullscreen style="width:330px;height:490px" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        `);
    });
});
