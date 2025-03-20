$(document).ready(function () {
    function extractVideoData(url) {
        if (!url) return { type: null, embedUrl: null };

        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            let videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
            return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1` };
        }

        if (url.includes("tiktok.com")) {
            return { type: "tiktok", embedUrl: `https://www.tiktok.com/embed/${url.split('/').filter(s => s.match(/\d+/)).pop()}` };
        }

        if (url.includes("instagram.com/reel/") || url.includes("instagram.com/p/")) {
            return { type: "instagram", embedUrl: `https://www.instagram.com/p/${url.split('/').filter(s => s.length > 5).pop()}/embed/` };
        }

        if (url.includes("facebook.com") || url.includes("fb.watch")) {
            return { type: "facebook", embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}` };
        }

        return { type: null, embedUrl: null };
    }

    $(".set-profile").click(function () {
        var videoUrl = $(".urluto").val();
        var videoData = extractVideoData(videoUrl);

        if (videoData.type) {
            localStorage.setItem("uprofile_video", videoData.embedUrl);
            localStorage.setItem("uprofile_video_type", videoData.type);
            alert("تم حفظ الفيديو في ملفك الشخصي!");
        } else {
            alert("الرجاء التحقق من رابط الفيديو.");
        }
    });

    $(".isyoutube").click(function () {
        $(".pstorycdesclass").remove();
        var videoEmbed = localStorage.getItem("uprofile_video");

        if (!videoEmbed) {
            alert("لا يوجد فيديو متاح للعرض!");
            return;
        }

        $("#upro").before(`
            <div class="pstorycdesclass">
                <div class="pstorycdesclass" style="display:block" onclick="$(this).parent().remove()"></div>
                <div class="pstycdesclass">
                    <button class="btn btn-info" onclick="$(this).parent().parent().hide()" style="width: 28px; margin: 5px; float: right;">-</button>
                    <div class="islinkcdesclass">
                        <iframe src="${videoEmbed}" allow="autoplay; encrypted-media" allowfullscreen style="width:330px;height:490px" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        `);
    });
});
