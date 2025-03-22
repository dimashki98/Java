(function () {
  this.DOMAIN = "story.aayemen.net";
  this.URL = "https://" + this.DOMAIN;
  this.WS = URL + ":8443";
  this.initStoryInterval = null;
  this.stories = [];
  this.socket = io(this.WS, {
    "transports": ["websocket", "polling"],
    "secure": true,
    "reconnection": true,
    "rejectUnauthorized": false,
    "query": "te3bstory=te3bstory"
  });
  this.socket.on("connect", () => {
    this.initStoryInterval = setInterval(() => {
      if (!myid || !users) {
        return;
      }
      if (!$(users).find(".uzr.uhtml.uid" + myid).length) {
        return;
      }
      clearInterval(this.initStoryInterval);
      this.init(this);
    }, 0x7d0);
  });
  this.socket.on("str:new", _0x22cfbd => {
    if (!this.mUser) {
      return;
    }
    this.onNewStory(this, _0x22cfbd, false);
  });
  this.socket.on("str:view", _0x58b949 => {
    if (!this.mUser) {
      return;
    }
    this.onViewStory(this, _0x58b949);
  });
  this.socket.on("str:del", _0x208522 => {
    if (!this.mUser) {
      return;
    }
    this.onRemoveStory(this, _0x208522.id, _0x208522.by);
  });
  this.socket.on("str:like", _0x5918c6 => {
    if (!this.mUser) {
      return;
    }
    this.onLikeStory(this, _0x5918c6);
  });
  this.socket.on("str:comment", _0x9e7c9f => {
    if (!this.mUser) {
      return;
    }
    this.onCommentStory(this, _0x9e7c9f);
  });
  this.socket.on("str:comment:like", _0x2eadae => {
    if (!this.mUser) {
      return;
    }
    this.onLikeCommentStory(this, _0x2eadae);
  });
  this.socket.on("str:comment:del", _0x464851 => {
    if (!this.mUser) {
      return;
    }
    this.onRemoveCommentStory(this, _0x464851);
  });
  this.init = function (_0x59b4f5) {
    if (window.storyBoard) {
      return;
    }
    this.setCurrentUser(this);
    this.renderStoryBoard(this);
    this.registerEvents(this);
    this.socket.emit("req", {
      "a": "check",
      "d": {
        "u": this.getHashedUser(this)
      }
    }, _0x1c8e7b => {
      if (!_0x1c8e7b || typeof _0x1c8e7b != "object") {
        return;
      }
      if (_0x1c8e7b.r) {
        this.mUser.rm = true;
      }
      if (typeof _0x1c8e7b.t == "string" && _0x1c8e7b.t.length == 0x24) {
        _0x59b4f5.mUser.token = _0x1c8e7b.t;
      }
      if (_0x1c8e7b.s) {
        this.setStories(this, _0x1c8e7b.s);
      }
      if (_0x1c8e7b.l) {
        window.rscl = _0x1c8e7b.l;
      }
    });
  };
  this.registerEvents = function (_0x5df400) {
    _0x5df400.addStory(_0x5df400);
    _0x5df400.onAddStory(_0x5df400);
  };
  this.getHashedUser = function (_0x3d8d44) {
    return {
      "hash": _0x3d8d44.mUser.hash,
      "dec": _0x3d8d44.mUser.dec
    };
  };
  this.addStory = function (_0x29d48c) {
    window.storyBoard.find(".story-board--item.add").unbind("click").on("click", _0x5ef973 => {
      _0x5ef973.stopPropagation();
      if (!_0x29d48c.mUser.token) {
        return alert(" لاتوجد لديك الصلاحيات لرفع الستوري / للاشتراك بخاصية الستوري يرجى مراسلة الادارة او شبل اليمن");
      }
      if (window.isStoryUploading) {
        return;
      }
      window.storyBoard.find("#story-board--item--input").trigger("click");
    });
  };
  this.makeRequest = function (_0x2a1baa, _0x4d5105, _0x22f2f3, _0x293e68, _0xb6f92, _0x558748) {
    var _0x3efcd9 = new XMLHttpRequest();
    _0x3efcd9.open(_0x4d5105, _0x22f2f3);
    _0x3efcd9.onload = function () {
      _0xb6f92.value = null;
      _0x558748(_0x2a1baa, null, _0x3efcd9.response);
    };
    _0x3efcd9.onerror = function () {
      _0xb6f92.value = null;
      alert("حدث خطأ أثناء رفع الملف");
    };
    _0x3efcd9.send(_0x293e68);
  };
  this.onAddStoryCallback = function (_0x3d3392, _0x16c56c, _0x1bd102) {
    if (_0x16c56c) {
      return;
    }
    _0x1bd102 = JSON.parse(_0x1bd102);
    window.storyBoard.find("#story-board--item--input")[0x0].value = '';
    delete window.isStoryUploading;
    if (_0x1bd102.error === false) {
      const _0x1a4cdf = {
        "id": _0x1bd102.id,
        "user_id": _0x1bd102.user_id,
        "type": _0x1bd102.type,
        "file": _0x1bd102.file,
        "likes": 0x0,
        "created_at": _0x1bd102.created_at
      };
      _0x3d3392.onNewStory(_0x3d3392, _0x1a4cdf, true);
      _0x3d3392.socket.emit("req", {
        "a": "str:add",
        "d": {
          "id": _0x1bd102.id,
          "t": _0x3d3392.mUser.token,
          "u": {
            "pic": _0x3d3392.mUser.pic,
            "icon": _0x3d3392.mUser.icon
          }
        }
      }, _0x260a45 => {});
    } else {
      return alert(_0x1bd102.message);
    }
  };
  this.onNewStory = function (_0x2d311a, _0x2b9ba2, _0x26125b) {
    const _0x429bfa = this.stories.find(_0x2dde0c => _0x2dde0c.user.dec == mUser.dec && _0x2dde0c.user.hash == mUser.hash);
    _0x2b9ba2.user = _0x26125b ? _0x2d311a.mUser : _0x2d311a.findUser(_0x2d311a, _0x2b9ba2.user.dec, _0x2b9ba2.user.hash);
    if (_0x26125b || !_0x429bfa) {
      window.storyBoard.find(".story-board--item.add").after(_0x2d311a.renderStoryItem(_0x2d311a, _0x2b9ba2));
    } else {
      window.storyBoard.find(".story-board--item").eq(0x1).after(_0x2d311a.renderStoryItem(_0x2d311a, _0x2b9ba2));
    }
    _0x2d311a.stories.push(_0x2b9ba2);
    _0x2d311a.registerStoryItemEvents(_0x2d311a);
  };
  this.onAddStory = function (_0x4f3a96) {
    window.storyBoard.find("#story-board--item--input").unbind("change").on("change", _0x469e55 => {
      const _0x912e8d = new FormData();
      _0x912e8d.append("token", _0x4f3a96.mUser.token);
      _0x912e8d.append("file", _0x469e55.target.files[0x0]);
      let _0x3021d9 = null;
      var _0x8fd500 = _0x469e55.target.files[0x0].type.split("/")[0x0];
      if (_0x8fd500 == "image") {
        _0x3021d9 = "/story_upload_photo";
      }
      if (_0x8fd500 == "audio") {
        _0x3021d9 = "/story_upload_audio";
      }
      if (_0x8fd500 == "video") {
        _0x3021d9 = "/story_upload_video";
      }
      if (!_0x3021d9) {
        return;
      }
      window.isStoryUploading = true;
      _0x4f3a96.makeRequest(_0x4f3a96, "POST", _0x4f3a96.URL + _0x3021d9, _0x912e8d, _0x469e55.target, _0x4f3a96.onAddStoryCallback);
    });
  };
  this.setStories = function (_0x30da10, _0x55e83e) {
    if (!_0x55e83e || !_0x55e83e.length) {
      return;
    }
    _0x30da10.stories = _0x55e83e;
    const _0x1f00c2 = [];
    _0x30da10.stories.forEach(_0x3df184 => {
      if (!_0x3df184.user || _0x1f00c2.indexOf(_0x3df184.user_id) >= 0x0) {
        return;
      }
      if (_0x3df184.user.dec == _0x30da10.mUser.dec && _0x3df184.user.hash == _0x30da10.mUser.hash) {
        window.storyBoard.find(".story-board--item.add").after(_0x30da10.renderStoryItem(_0x30da10, _0x3df184));
      } else {
        window.storyBoard.append(_0x30da10.renderStoryItem(_0x30da10, _0x3df184));
      }
      _0x1f00c2.push(_0x3df184.user_id);
    });
    _0x30da10.registerStoryItemEvents(_0x30da10);
  };
  this.getCurrentUserPic = function () {
    const _0x2c6360 = $(users).find(".uzr.uhtml.uid" + myid).find(".fitimg.u-pic").css("background-image");
    if (!_0x2c6360) {
      return "pic.png";
    }
    const _0x3ab820 = _0x2c6360.split("\"");
    if (!_0x3ab820 || _0x3ab820.length < 0x3) {
      return "pic.png";
    }
    return _0x3ab820[0x1];
  };
  this.getUserPic = function (_0x10a79a) {
    const _0x3a31e9 = _0x10a79a.find(".fitimg.u-pic").css("background-image");
    if (!_0x3a31e9) {
      return "pic.png";
    }
    const _0x1bf4b2 = _0x3a31e9.split("\"");
    if (!_0x1bf4b2 || _0x1bf4b2.length < 0x3) {
      return "pic.png";
    }
    return _0x1bf4b2[0x1];
  };
  this.getCurrentUserDec = function () {
    const _0x150a87 = $(users).find(".uzr.uhtml.uid" + myid).find(".u-topic");
    if (!_0x150a87 || !_0x150a87.length) {
      return '';
    }
    return _0x150a87.text().trim().trim();
    ;
  };
  this.getCurrentUserHash = function () {
    const _0x191745 = $(users).find(".uzr.uhtml.uid" + myid).find(".uhash");
    if (!_0x191745 || !_0x191745.length) {
      return '';
    }
    return _0x191745.text().replace("#", '').trim();
  };
  this.getCurrentUserIcon = function () {
    const _0x4f8d08 = $(users).find(".uzr.uhtml.uid" + myid).find(".u-ico");
    if (!_0x4f8d08 || !_0x4f8d08.length) {
      return '';
    }
    return _0x4f8d08.attr("src");
  };
  this.getCurrentUserLikes = function () {
    $(users).find(".uzr.uhtml.uid" + myid).click();
    const _0x17a884 = $(upro).find(".ulike").text().trim().replace(",", '');
    $("#upro").find(".modal-header .fa-times").click();
    if (!_0x17a884) {
      return 0x0;
    }
    const _0x36cde1 = {
      "K": 0x3e8,
      "M": 0xf4240,
      "B": 0x3b9aca00
    };
    const _0x1e7fcc = _0x17a884.slice(-0x1);
    if (!isNaN(parseInt(_0x1e7fcc))) {
      return parseInt(_0x17a884);
    }
    const _0x21ef11 = parseFloat(_0x17a884);
    return _0x36cde1.hasOwnProperty(_0x1e7fcc) ? _0x21ef11 * _0x36cde1[_0x1e7fcc] : isNaN(parseInt(_0x17a884)) ? 0x0 : parseInt(_0x17a884);
  };
  this.setCurrentUser = function (_0x51365c) {
    _0x51365c.mUser = {
      "pic": _0x51365c.getCurrentUserPic(),
      "dec": _0x51365c.getCurrentUserDec(),
      "hash": _0x51365c.getCurrentUserHash(),
      "icon": _0x51365c.getCurrentUserIcon()
    };
  };
  this.findUser = function (_0x2e86bd, _0xe16515, _0x2625a7) {
    if (!_0xe16515 || !_0x2625a7) {
      return null;
    }
    if (_0x2e86bd.mUser.dec == _0xe16515 && _0x2e86bd.mUser.hash == _0x2625a7) {
      return _0x2e86bd.mUser;
    }
    const _0x254996 = $(users).find(".uzr:contains('" + _0xe16515 + "') .uhash:contains('#" + _0x2625a7 + "')").closest(".uzr");
    if (!_0x254996 || !_0x254996.length) {
      return null;
    }
    const _0x1b6f02 = _0x254996.find(".u-ico").attr("src");
    const _0x315844 = _0x2e86bd.getUserPic(_0x254996);
    return {
      "dec": _0xe16515,
      "hash": _0x2625a7,
      "pic": _0x315844,
      "icon": _0x1b6f02
    };
  };
  this.findUserById = function (_0x2d2915, _0x9fc4af) {
    if (!_0x9fc4af) {
      return null;
    }
    if (_0x9fc4af == myid) {
      return _0x2d2915.mUser;
    }
    const _0x20fd6a = $(users).find(".uzr.uhtml.uid" + _0x9fc4af);
    if (!_0x20fd6a || !_0x20fd6a.length) {
      return null;
    }
    const _0x1a099b = _0x20fd6a.find(".u-topic").text().trim();
    const _0x51293e = _0x20fd6a.find(".uhash").text().replace("#", '').trim();
    const _0x3a5caa = _0x2d2915.getUserPic(_0x20fd6a);
    const _0x3ab0d6 = _0x20fd6a.find(".u-ico").text().trim();
    return {
      "dec": _0x1a099b,
      "hash": _0x51293e,
      "pic": _0x3a5caa,
      "icon": _0x3ab0d6
    };
  };
  this.renderStoryItem = function (_0x206fb4, _0x17dddd) {
    if (window.storyBoard.find(".story-board--item[data-user=\"" + _0x17dddd.user_id + "\"]").length) {
      return '';
    }
    if (!_0x17dddd || !_0x17dddd.user) {
      return '';
    }
    let _0xbf2d9 = _0x17dddd.user.pic;
    if (_0x17dddd.type == "photo") {
      _0xbf2d9 = _0x206fb4.URL + "/uploads/story/photos/" + _0x17dddd.file;
    } else {
      if (_0x17dddd.type == "video") {
        _0xbf2d9 = _0x206fb4.URL + "/uploads/story/videos/" + _0x17dddd.file;
        document.createElement("video").src = _0xbf2d9;
      } else if (_0x17dddd.type == "audio") {
        document.createElement("audio").src = _0xbf2d9;
      }
    }
    let _0x495b06 = "<div class=\"story-board--item\" data-user=\"" + _0x17dddd.user_id + "\">";
    if (_0x17dddd.type == "video") {
      _0x495b06 += "<video class=\"img_bg\" preload=\"auto\" src=\"" + _0xbf2d9 + "\" ></video>";
    } else {
      if (_0x17dddd.type == "audio") {
        _0x495b06 += "<audio style=\"display: none;\" preload=\"auto\" src=\"" + _0xbf2d9 + "\" ></audio>";
      }
      _0x495b06 += "<img class=\"img_bg\" src=\"" + _0xbf2d9 + "\" >";
    }
    _0x495b06 += "<img class=\"img_user\" src=\"" + _0x17dddd.user.pic + "\" >";
    _0x495b06 += "<div class=\"u\" style=\"bottom: 0; position: absolute; width: 100%; background: rgba(222, 222, 222, 0.5); margin-top: 26px;\">";
    if (_0x17dddd.user.icon) {
      _0x495b06 += "<img class=\"object-fit\" src=\"" + _0x17dddd.user.icon + "\" style=\"min-height:14px;max-height:20px;max-width:64px;\">";
    } else {
      _0x495b06 += "<span>" + _0x17dddd.user.dec + "</span>";
    }
    _0x495b06 += "</div>";
    _0x495b06 += "</div>";
    return _0x495b06;
  };
  this.updateStoryItem = function (_0x4dc76f, _0x54b7bf) {
    const _0x536a76 = window.storyBoard.find(".story-board--item[data-user=\"" + _0x54b7bf + "\"]");
    if (!_0x536a76 || !_0x536a76.length) {
      return;
    }
    const _0x428d5c = _0x4dc76f.stories.find(_0x2748c8 => _0x2748c8.user_id == _0x54b7bf);
    if (!_0x428d5c) {
      return;
    }
    _0x428d5c.user = _0x4dc76f.findUser(_0x4dc76f, _0x428d5c.user.dec, _0x428d5c.user.hash);
    if (!_0x428d5c.user) {
      return;
    }
    let _0x1c80ae = _0x428d5c.user.pic;
    if (_0x428d5c.type == "photo") {
      _0x1c80ae = _0x4dc76f.URL + "/uploads/story/photos/" + _0x428d5c.file;
    } else if (_0x428d5c.type == "video") {
      _0x1c80ae = _0x4dc76f.URL + "/uploads/story/videos/" + _0x428d5c.file;
    }
    let _0x1f1819 = '';
    if (_0x428d5c.type == "video") {
      _0x1f1819 += "<video class=\"img_bg\" src=\"" + _0x1c80ae + "\" ></video>";
    } else {
      _0x1f1819 += "<img class=\"img_bg\" src=\"" + _0x1c80ae + "\" >";
    }
    _0x1f1819 += "<img class=\"img_user\" src=\"" + _0x428d5c.user.pic + "\" >";
    _0x1f1819 += "<span class=\"user_name ellipsis\" >" + _0x428d5c.user.dec + "</span>";
    _0x536a76.html(_0x1f1819);
  };
  this.registerStoryItemEvents = function (_0xeb905a) {
    _0xeb905a.openStory(_0xeb905a);
  };
  this.openStory = function (_0x28a0b5) {
    window.storyBoard.find(".story-board--item:not(.add)").unbind("click").on("click", _0x5247c9 => {
      _0x28a0b5.renderStoryModal(_0x28a0b5, _0x5247c9.target.parentElement.dataset.user);
    });
  };
  this.getMediaDuration = function (_0x1c2d56) {
    return _0x1c2d56 == "photo" ? 0x7 : 0x14;
  };
  this.renderStoryReactions = function (_0x322291, _0x52242c) {
    if (!_0x322291.mUser.likedStories) {
      _0x322291.mUser.likedStories = [];
    }
    let _0x3d38d4 = "<div class=\"story-reactions\" data-id=\"" + _0x52242c.id + "\">";
    const _0xdaca0 = _0x322291.mUser.likedStories.indexOf(_0x52242c.id) >= 0x0 ? "liked" : '';
    _0x52242c.likes = _0x52242c.likes ? _0x52242c.likes : 0x0;
    _0x52242c.commentsCount = _0x52242c.commentsCount ? _0x52242c.commentsCount : 0x0;
    _0x52242c.viewsCount = _0x52242c.viewsCount ? _0x52242c.viewsCount : 0x0;
    _0x3d38d4 += "<div class=\"likes_wrapper\">";
    _0x3d38d4 += "<span class=\"fa fa-heart " + _0xdaca0 + "\"></span>";
    _0x3d38d4 += "<span class=\"likes\">" + _0x52242c.likes + "</span>";
    _0x3d38d4 += "</div>";
    _0x3d38d4 += "<div class=\"comments_wrapper\">";
    _0x3d38d4 += "<span class=\"fa fa-commenting\"></span>";
    _0x3d38d4 += "<span class=\"comments\">" + _0x52242c.commentsCount + "</span>";
    _0x3d38d4 += "</div>";
    if (_0x52242c.user.dec == _0x322291.mUser.dec && _0x52242c.user.hash == _0x322291.mUser.hash) {
      _0x3d38d4 += "<div class=\"views_wrapper\">";
      _0x3d38d4 += "<span class=\"fa fa-eye\"></span>";
      _0x3d38d4 += "<span class=\"views\">" + _0x52242c.viewsCount + "</span>";
      _0x3d38d4 += "</div>";
    }
    _0x3d38d4 += "</div>";
    return _0x3d38d4;
  };
  this.unpauseStoryModal = function () {
    window.storyModal.find(".story-viewer").removeClass("paused");
    let _0x1715e3 = null;
    _0x1715e3 = window.storyModal.find(".slides .item.active video");
    if (_0x1715e3[0x0]) {
      return _0x1715e3[0x0].play();
    }
    _0x1715e3 = window.storyModal.find(".slides .item.active audio");
    if (_0x1715e3[0x0]) {
      return _0x1715e3[0x0].play();
    }
  };
  this.pauseStoryModal = function () {
    window.storyModal.find(".story-viewer").addClass("paused");
    let _0x27afa5 = null;
    _0x27afa5 = window.storyModal.find(".slides .item.active video");
    if (_0x27afa5[0x0]) {
      return _0x27afa5[0x0].pause();
    }
    _0x27afa5 = window.storyModal.find(".slides .item.active audio");
    if (_0x27afa5[0x0]) {
      return _0x27afa5[0x0].pause();
    }
  };
  this.onLeftClick = function (_0x4e1ed9) {
    window.storyModal.find(".story-viewer").toggleClass("paused", false);
    const _0x4e4910 = window.storyModal.find(".slides-pointers span.active");
    if (!_0x4e4910 || !_0x4e4910.length) {
      return;
    }
    const _0x326ee0 = parseInt(_0x4e4910[0x0].dataset.index);
    const _0x1e869d = _0x4e4910.find("b")[0x0].getAnimations()[0x0];
    if (!_0x1e869d) {
      return;
    }
    _0x4e4910.removeClass("seen");
    if (_0x1e869d.currentTime < 0x3e8 && _0x326ee0 > 0x0) {
      _0x1e869d.cancel();
      return this.goToPreviousSlide(_0x326ee0);
    }
    _0x1e869d.cancel();
    this.restartCurrentSlide(_0x1e869d, _0x326ee0);
  };
  this.onRightClick = function (_0x5a30ba) {
    window.storyModal.find(".story-viewer").toggleClass("paused", false);
    const _0x598616 = window.storyModal.find(".slides-pointers span.active");
    if (!_0x598616 || !_0x598616.length) {
      return;
    }
    const _0x40789e = parseInt(_0x598616[0x0].dataset.index);
    const _0x64c2f3 = _0x598616.find("b")[0x0].getAnimations()[0x0];
    if (!_0x64c2f3) {
      return;
    }
    _0x64c2f3.cancel();
    return this.goToNextSlide(_0x40789e);
  };
  this.restartCurrentSlide = function (_0x1dc25b, _0x3ddc15) {
    _0x1dc25b.play();
    const _0x522a5c = window.storyModal.find(".slides .item[data-index='" + _0x3ddc15 + "']");
    if (_0x522a5c && _0x522a5c.length) {
      if (_0x522a5c[0x0].dataset.type == "audio" || _0x522a5c[0x0].dataset.type == "video") {
        _0x522a5c.find(_0x522a5c[0x0].dataset.type)[0x0].currentTime = 0x0;
      }
    }
  };
  this.goToNextSlide = function (_0x152fb8) {
    this.stopSlide(_0x152fb8, true);
    this.playSlide(this, _0x152fb8 + 0x1);
  };
  this.goToPreviousSlide = function (_0x539882) {
    this.stopSlide(_0x539882, false);
    this.playSlide(this, _0x539882 - 0x1);
  };
  this.stopSlide = function (_0x58e278, _0x4e9aa0) {
    if (_0x58e278 < 0x0) {
      return;
    }
    const _0xcdbf9c = window.storyModal.find(".slides-pointers span[data-index='" + _0x58e278 + "']");
    if (!_0xcdbf9c || !_0xcdbf9c.length) {
      return;
    }
    _0xcdbf9c.removeClass("active");
    if (!_0x4e9aa0) {
      _0xcdbf9c.removeClass("seen");
    } else {
      _0xcdbf9c.addClass("seen");
    }
    const _0x274913 = window.storyModal.find(".slides .item[data-index='" + _0x58e278 + "']");
    _0x274913.addClass("seen").removeClass("active");
    if (_0x274913[0x0].dataset.type == "audio" || _0x274913[0x0].dataset.type == "video") {
      _0x274913.find(_0x274913[0x0].dataset.type)[0x0].pause();
      _0x274913.find(_0x274913[0x0].dataset.type)[0x0].currentTime = 0x0;
    }
  };
  this.playSlide = function (_0x450c10, _0x5a9cf2) {
    if (_0x5a9cf2 < 0x0) {
      return;
    }
    if (!_0x450c10.mUser.likedStories) {
      _0x450c10.mUser.likedStories = [];
    }
    const _0x3259f6 = window.storyModal.find(".slides-pointers span[data-index='" + _0x5a9cf2 + "']");
    if (!_0x3259f6 || !_0x3259f6.length) {
      return this.closeStoryModal();
    }
    _0x3259f6.addClass("active").removeClass("seen");
    const _0x5729ce = window.storyModal.find(".slides .item[data-index='" + _0x5a9cf2 + "']");
    if (_0x5729ce && _0x5729ce.length) {
      _0x5729ce.addClass("active").removeClass("seen");
      const _0x56aa7f = _0x5729ce.find(".story-reactions");
      _0x56aa7f.find(".likes_wrapper .fa").toggleClass("liked", _0x450c10.mUser.likedStories.indexOf(_0x56aa7f.data("id")) >= 0x0);
      _0x450c10.viewStory(_0x450c10, _0x56aa7f.data("id"));
      if (_0x5729ce[0x0].dataset.type == "audio" || _0x5729ce[0x0].dataset.type == "video") {
        _0x5729ce.find(_0x5729ce[0x0].dataset.type)[0x0].muted = false;
        _0x5729ce.find(_0x5729ce[0x0].dataset.type)[0x0].play();
      }
    }
    window.storyModal.find(".time").text(this.timeAgo(new Date(_0x5729ce[0x0].dataset.created).getTime()));
  };
  this.viewStory = function (_0x4fcea0, _0x185042) {
    if (!_0x4fcea0.mUser.viewedStories) {
      _0x4fcea0.mUser.viewedStories = [];
    }
    if (_0x4fcea0.mUser.viewedStories && _0x4fcea0.mUser.viewedStories.indexOf(_0x185042) >= 0x0) {
      return;
    }
    const _0x33d77f = _0x4fcea0.stories.find(_0x5d58b1 => _0x5d58b1.id == _0x185042);
    if (!_0x33d77f || _0x33d77f.user.dec == _0x4fcea0.mUser.dec && _0x33d77f.user.hash == _0x4fcea0.mUser.hash) {
      return;
    }
    _0x4fcea0.socket.emit("req", {
      "a": "str:view",
      "d": {
        "id": _0x185042,
        "uid": myid,
        "user": _0x4fcea0.mUser,
        "t": _0x4fcea0.mUser.token
      }
    }, _0x48c65c => {
      _0x4fcea0.mUser.viewedStories.push(_0x185042);
    });
  };
  this.timeAgo = function (_0x157cb2) {
    const _0x58e187 = Math.round(Math.abs(Date.now() - _0x157cb2) / 0x3e8);
    if (_0x58e187 < 0x3b) {
      return "الآن";
    } else {
      if (_0x58e187 / 0x3c < 0x3c) {
        return parseInt(_0x58e187 / 0x3c) + "د";
      } else {
        if (_0x58e187 / 0xe10 < 0x18) {
          return parseInt(_0x58e187 / 0xe10) + "س";
        } else {
          if (_0x58e187 / 86400 < 0x1e) {
            return parseInt(_0x58e187 / 86400) + "ي";
          } else {
            return _0x58e187 / 2592000 < 0xc ? parseInt(_0x58e187 / 2592000) + "ش" : parseInt(_0x58e187 / 31104000) + "ع";
          }
        }
      }
    }
  };
  this.closeStoryModal = function () {
    window.storyModal.addClass("closed");
    setTimeout(() => {
      window.storyModal.remove();
    }, 0x1f4);
  };
  this.registerStoryModalEvents = function (_0x54bdf4) {
    _0x54bdf4.onStoryModalClick(_0x54bdf4);
    _0x54bdf4.onStoryModalClose(_0x54bdf4);
    _0x54bdf4.onStoryModalRemove(_0x54bdf4);
    _0x54bdf4.onStoryModalAnimationEnded(_0x54bdf4);
    _0x54bdf4.onStoryModalMediaMetaDataLoaded(_0x54bdf4);
  };
  this.onStoryModalClick = function (_0xb8b9cc) {
    window.storyModal.unbind("click").on("click", function (_0x21245e) {
      if ($(this).closest("#story-comments").length) {
        return;
      }
      const _0xb2ea5f = window.storyModal.width() / 0x3;
      if (_0x21245e.clientX <= _0xb2ea5f) {
        _0xb8b9cc.onLeftClick(_0xb8b9cc);
      } else {
        if (_0x21245e.clientX >= _0xb2ea5f * 0x2) {
          _0xb8b9cc.onRightClick(_0xb8b9cc);
        } else {
          const _0x4ea51b = window.storyModal.find(".story-viewer").hasClass("paused");
          if (_0x4ea51b) {
            _0xb8b9cc.unpauseStoryModal();
          } else {
            _0xb8b9cc.pauseStoryModal();
          }
        }
      }
    });
  };
  this.onStoryModalClose = function (_0x472130) {
    window.storyModal.find(".back, .close").unbind("click").on("click", _0x3ae33d => {
      _0x3ae33d.stopPropagation();
      this.closeStoryModal();
    });
  };
  this.onStoryModalRemove = function (_0x57e5b7) {
    window.storyModal.find(".remove").unbind("click").on("click", _0x4eb4fe => {
      _0x4eb4fe.stopPropagation();
      if (!confirm("هل أنت متأكد من حذف الستوري؟")) {
        return;
      }
      const _0x26250f = window.storyModal.find(".slides-pointers span.active");
      if (!_0x26250f || !_0x26250f.length) {
        return;
      }
      _0x57e5b7.socket.emit("req", {
        "a": "str:del",
        "d": {
          "uid": myid,
          "t": _0x57e5b7.mUser.token,
          "id": _0x26250f[0x0].dataset.id
        }
      }, _0x32c190 => {
        if (typeof _0x32c190 == "string") {
          return alert(_0x32c190);
        }
        if (_0x32c190.error == false) {
          _0x57e5b7.onRemoveStory(_0x57e5b7, _0x32c190.id);
        }
      });
    });
  };
  this.onStoryModalAnimationEnded = function (_0x238352) {
    window.storyModal.find(".slides-pointers b").unbind("animationend").on("animationend", _0x3f146e => {
      if (!_0x3f146e.target || !_0x3f146e.target.parentElement) {
        return;
      }
      const _0x2dde23 = parseInt(_0x3f146e.target.parentElement.dataset.index);
      if (isNaN(_0x2dde23)) {
        return _0x238352.closeStoryModal();
      }
      _0x238352.stopSlide(_0x2dde23, true);
      _0x238352.playSlide(_0x238352, _0x2dde23 + 0x1);
    });
  };
  this.onStoryModalMediaMetaDataLoaded = function (_0x257823) {
    window.storyModal.find(".slides audio, .slides video").unbind("loadedmetadata").on("loadedmetadata", _0x1374c6 => {
      _0x1374c6.target.dataset.duration = _0x1374c6.target.duration;
      if (_0x1374c6.target.duration > 0xb4) {
        window.storyModal.find(".slides-pointers span[data-id='" + _0x1374c6.target.dataset.id + "'] b").css("animation-duration", "180s");
      } else {
        window.storyModal.find(".slides-pointers span[data-id='" + _0x1374c6.target.dataset.id + "'] b").css("animation-duration", _0x1374c6.target.duration + "s");
      }
    });
  };
  this.registerStoryReactionsEvents = function (_0x374ffc) {
    _0x374ffc.onStoryReactionLike(_0x374ffc);
    _0x374ffc.onStoryReactionComment(_0x374ffc);
    _0x374ffc.onStoryReactionView(_0x374ffc);
  };
  this.onStoryReactionLike = function (_0x279814) {
    if (!window.storyModal) {
      return;
    }
    window.storyModal.find(".likes_wrapper .fa").unbind("click").on("click", function (_0x15327b) {
      _0x15327b.stopPropagation();
      const _0x1c08f3 = $(this).closest(".item");
      if (!_0x1c08f3 || !_0x1c08f3.length) {
        return;
      }
      _0x279814.likeStory(_0x279814, _0x1c08f3.data("id"));
    });
  };
  this.onStoryReactionComment = function (_0x23493f) {
    if (!window.storyModal) {
      return;
    }
    window.storyModal.find(".comments_wrapper .fa").unbind("click").on("click", function (_0x2a1a93) {
      _0x2a1a93.stopPropagation();
      const _0xeccdd9 = $(this).closest(".item");
      if (!_0xeccdd9 || !_0xeccdd9.length) {
        return;
      }
      _0x23493f.commentStory(_0x23493f, _0xeccdd9.data("id"));
    });
  };
  this.onStoryReactionView = function (_0xb7eb67) {
    if (!window.storyModal) {
      return;
    }
    window.storyModal.find(".views_wrapper .fa").unbind("click").on("click", function (_0x4132c3) {
      _0x4132c3.stopPropagation();
      const _0x1f46d7 = $(this).closest(".item");
      if (!_0x1f46d7 || !_0x1f46d7.length) {
        return;
      }
      _0xb7eb67.pauseStoryModal();
      _0xb7eb67.renderStoryViews(_0xb7eb67, _0x1f46d7.data("id"));
    });
  };
  this.likeStory = function (_0x2f1a0b, _0x55881e) {
    if (!window.storyModal) {
      return;
    }
    _0x2f1a0b.socket.emit("req", {
      "a": "str:like",
      "d": {
        "id": _0x55881e,
        "uid": myid
      }
    }, _0x3c0f64 => {
      if (typeof _0x3c0f64 == "string") {
        return alert(_0x3c0f64);
      }
      if (_0x3c0f64.error && _0x3c0f64.data && _0x3c0f64.data.notFound) {
        _0x2f1a0b.onRemoveStory(_0x2f1a0b, _0x3c0f64.data.id, _0x3c0f64.data.by);
      } else {
        _0x2f1a0b.onLikeStory(_0x2f1a0b, _0x3c0f64.data);
      }
    });
  };
  this.commentStory = function (_0x204c8b, _0x2c1351) {
    if (!window.storyModal) {
      return;
    }
    _0x204c8b.pauseStoryModal();
    _0x204c8b.renderStoryComments(_0x204c8b, _0x2c1351);
  };
  this.onRemoveStory = function (_0x53bae7, _0x2d6063, _0x59feaf) {
    const _0x301d45 = _0x53bae7.stories.find(_0x2c9d0 => _0x2c9d0.id == _0x2d6063);
    if (!_0x301d45) {
      return;
    }
    const _0x2a03a0 = _0x53bae7.findUserById(_0x53bae7, _0x59feaf);
    if (_0x2a03a0 && _0x59feaf != myid && _0x301d45.user.dec == _0x53bae7.mUser.dec && _0x301d45.user.hash == _0x53bae7.mUser.hash) {
      renderNotification(_0x2a03a0, "قام بحذف الستوري الخاص بك", null, "remove");
    }
    _0x53bae7.onStoryModalRemoveStory(_0x53bae7, _0x2d6063);
    _0x53bae7.stories = _0x53bae7.stories.filter(_0x445cab => _0x445cab.id != _0x301d45.id);
    if (_0x53bae7.mUserlikedStories) {
      _0x53bae7.mUser.likedStories = _0x53bae7.mUser.likedStories.filter(_0x203eb5 => _0x203eb5 != _0x2d6063);
    }
    if (!_0x53bae7.stories.find(_0x5bd20a => _0x5bd20a.user_id == _0x301d45.user_id)) {
      window.storyBoard.find(".story-board--item[data-user=\"" + _0x301d45.user_id + "\"]").remove();
    } else {
      _0x53bae7.updateStoryItem(_0x53bae7, _0x301d45.user_id);
    }
  };
  this.setStoryLikes = function (_0x320331, _0x596ecd) {
    if (!window.storyModal) {
      return;
    }
    const _0x3769d4 = _0x320331.stories.find(_0x591d0a => _0x591d0a.id == _0x596ecd);
    if (!_0x3769d4) {
      return;
    }
    const _0x3bdb71 = _0x3769d4.likes ? _0x3769d4.likes : 0x0;
    const _0x536ba8 = window.storyModal.find(".story-reactions[data-id='" + _0x596ecd + "']");
    if (!_0x536ba8 || !_0x536ba8.length) {
      return;
    }
    _0x536ba8.find(".likes").text(_0x3bdb71);
    return _0x536ba8;
  };
  this.onLikeStory = function (_0x504809, _0x49f754) {
    _0x504809.stories = _0x504809.stories.map(_0x3e0396 => {
      if (_0x3e0396.id == _0x49f754.id) {
        _0x3e0396.likes = _0x49f754.liked ? _0x3e0396.likes + 0x1 : _0x3e0396.likes - 0x1;
        if (!_0x3e0396.likes) {
          _0x3e0396.likes = 0x0;
        }
      }
      return _0x3e0396;
    });
    const _0x1d2e78 = _0x504809.setStoryLikes(_0x504809, _0x49f754.id);
    if (_0x49f754.by == myid) {
      if (!_0x504809.mUser.likedStories) {
        _0x504809.mUser.likedStories = [];
      }
      if (_0x49f754.liked) {
        _0x504809.mUser.likedStories.push(_0x49f754.id);
      } else {
        _0x504809.mUser.likedStories = _0x504809.mUser.likedStories.filter(_0x54d77d => _0x54d77d != _0x49f754.id);
      }
      if (_0x1d2e78) {
        _0x1d2e78.find(".fa").toggleClass("liked", _0x49f754.liked);
      }
    }
    const _0x57de73 = _0x504809.findUserById(_0x504809, _0x49f754.by);
    if (_0x57de73 && _0x49f754.by != myid && _0x49f754.story_user && _0x49f754.story_user.dec == _0x504809.mUser.dec && _0x49f754.story_user.hash == _0x504809.mUser.hash && _0x49f754.liked) {
      renderNotification(_0x57de73, "قام بالإعجاب بالستوري الخاص بك", null, "like");
    }
  };
  this.onCommentStory = function (_0x5ec3d5, _0x347999) {
    const _0x3d6c93 = _0x5ec3d5.stories.find(_0x304f7a => _0x304f7a.id == _0x347999.story_id);
    if (!_0x3d6c93) {
      return;
    }
    _0x347999.comment.user = this.findUserById(_0x5ec3d5, _0x347999.by);
    _0x5ec3d5.addStoryComment(_0x5ec3d5, _0x347999.comment);
    this.renderComment(this, _0x347999.comment);
    this.incStoryCommentsCount(_0x5ec3d5, _0x347999.story_id);
    if (_0x347999.comment.user && _0x347999.comment.storyOwner.hash == _0x5ec3d5.mUser.hash && _0x347999.comment.storyOwner.dec == _0x5ec3d5.mUser.dec) {
      renderNotification(_0x347999.comment.user, "قام بالتعليق على الستوري الخاص بك", _0x347999.comment.comment, "comment");
    }
  };
  this.onLikeCommentStory = function (_0xd13316, _0x2a495d) {
    const _0xdf54ae = _0xd13316.stories.find(_0x2aa824 => _0x2aa824.id == _0x2a495d.comment.story_id);
    if (!_0xdf54ae) {
      return;
    }
    _0xd13316.incStoryCommentLikes(_0x2a495d.comment.id);
    if (_0xdf54ae.comments) {
      const _0x50025e = _0xdf54ae.comments.find(_0x48337c => _0x48337c.id == _0x2a495d.comment.id);
      _0x50025e.likes += 0x1;
    }
    const _0x3d5e0c = _0xd13316.findUserById(_0xd13316, _0x2a495d.by);
    if (_0x3d5e0c && _0x2a495d.comment.user.dec == _0xd13316.mUser.dec && _0x2a495d.comment.user.hash == _0xd13316.mUser.hash) {
      _0xd13316.renderNotification(_0x3d5e0c, "قام بالإعجاب بتعليقك على الستوري", null, "like");
    }
  };
  this.onRemoveCommentStory = function (_0x511130, _0x14b7ea) {
    const _0x295ec5 = _0x511130.stories.find(_0x2f24a8 => _0x2f24a8.id == _0x14b7ea.story_id);
    if (!_0x295ec5) {
      return;
    }
    _0x511130.removeComment(_0x511130, _0x14b7ea.story_id, _0x14b7ea.id);
    _0x511130.decStoryCommentsCount(_0x511130, _0x14b7ea.story_id);
  };
  this.incStoryCommentLikes = function (_0x319166) {
    if (!window.storyModal) {
      return;
    }
    const _0x290118 = window.storyModal.find("#story-comments .story-comments--comment[data-id='" + _0x319166 + "'] .story-comments--comment--like");
    if (_0x290118) {
      const _0xbaa10c = parseInt(_0x290118.text()) + 0x1;
      _0x290118.text(_0xbaa10c);
    }
  };
  this.incStoryCommentsCount = function (_0x5a41a2, _0x2cff06) {
    const _0x29c0de = _0x5a41a2.stories.find(_0x500ec1 => _0x500ec1.id == _0x2cff06);
    if (_0x29c0de) {
      if (!_0x29c0de.commentsCount) {
        _0x29c0de.commentsCount = 0x0;
      }
      _0x29c0de.commentsCount = _0x29c0de.commentsCount + 0x1;
    }
    if (!window.storyModal) {
      return;
    }
    const _0x796b25 = window.storyModal.find(".story-reactions[data-id='" + _0x2cff06 + "'] .comments_wrapper .comments");
    if (_0x796b25 && _0x796b25.length) {
      const _0x37a428 = +_0x796b25.text() + 0x1;
      if (!_0x37a428) {
        _0x37a428 = 0x0;
      }
      _0x796b25.text(_0x37a428);
      $("#story-comments[data-id='" + _0x2cff06 + "'] #comments-count-wrapper .comments-count").text(_0x37a428);
    }
  };
  this.removeComment = function (_0x12c3e8, _0x210633, _0x31bc46) {
    const _0x503225 = _0x12c3e8.stories.find(_0x55832c => _0x55832c.id == _0x210633);
    if (_0x503225 && _0x503225.comments) {
      _0x503225.comments = _0x503225.comments.filter(_0x5ae8d9 => _0x5ae8d9.id != _0x31bc46);
    }
    if (!window.storyModal) {
      return;
    }
    window.storyModal.find("#story-comments .story-comments--comment[data-id='" + _0x31bc46 + "']").remove();
  };
  this.decStoryCommentsCount = function (_0x2db304, _0xcb0b82) {
    const _0x248242 = _0x2db304.stories.find(_0x18e462 => _0x18e462.id == _0xcb0b82);
    if (_0x248242) {
      if (!_0x248242.commentsCount) {
        _0x248242.commentsCount = 0x0;
      }
      _0x248242.commentsCount = _0x248242.commentsCount - 0x1;
    }
    if (!window.storyModal) {
      return;
    }
    const _0x4038d5 = window.storyModal.find(".story-reactions[data-id='" + _0xcb0b82 + "'] .comments_wrapper .comments");
    if (_0x4038d5 && _0x4038d5.length) {
      let _0xc43fc1 = +_0x4038d5.text() - 0x1;
      if (!_0xc43fc1) {
        _0xc43fc1 = 0x0;
      }
      _0x4038d5.text(_0xc43fc1);
      $("#story-comments[data-id='" + _0xcb0b82 + "'] #comments-count-wrapper .comments-count").text(_0xc43fc1);
    }
  };
  this.incStoryViewsCount = function (_0x8552c2, _0x2c1a5d) {
    const _0x1bccd8 = _0x8552c2.stories.find(_0x209ab0 => _0x209ab0.id == _0x2c1a5d);
    if (_0x1bccd8) {
      if (!_0x1bccd8.viewsCount) {
        _0x1bccd8.viewsCount = 0x0;
      }
      _0x1bccd8.viewsCount = _0x1bccd8.viewsCount + 0x1;
    }
    if (!window.storyModal) {
      return;
    }
    const _0x1479ef = window.storyModal.find(".story-reactions[data-id='" + _0x2c1a5d + "'] .views_wrapper .views");
    if (_0x1479ef && _0x1479ef.length) {
      const _0x424314 = +_0x1479ef.text() + 0x1;
      if (!_0x424314) {
        _0x424314 = 0x0;
      }
      _0x1479ef.text(_0x424314);
      $("#story-views[data-id='" + _0x2c1a5d + "'] #views-count-wrapper .views-count").text(_0x424314);
    }
  };
  this.onViewStory = function (_0x5a2dcb, _0x1f38a8) {
    const _0xa058a4 = _0x5a2dcb.stories.find(_0x1024bd => _0x1024bd.id == _0x1f38a8.story_id);
    if (!_0xa058a4) {
      return;
    }
    const _0x3ee52a = {
      "id": _0x1f38a8.id,
      "story_id": _0x1f38a8.story_id,
      "time": Date.now(),
      "user": this.findUserById(_0x5a2dcb, _0x1f38a8.by)
    };
    _0x5a2dcb.addStoryView(_0x5a2dcb, _0x3ee52a);
    _0x5a2dcb.renderView(_0x5a2dcb, _0x3ee52a);
    _0x5a2dcb.incStoryViewsCount(_0x5a2dcb, _0x1f38a8.story_id);
    if (_0x3ee52a.user && _0x1f38a8.storyOwner.dec == _0x5a2dcb.mUser.dec && _0x1f38a8.storyOwner.hash == _0x5a2dcb.mUser.hash) {
      _0x5a2dcb.renderNotification(_0x3ee52a.user, "قام بمشاهدة الستوري الخاص بك", null, "view");
    }
  };
  this.onStoryModalRemoveStory = function (_0x4f2160, _0x3ee6bb) {
    const _0x262c2b = _0x4f2160.stories.find(_0x19f825 => _0x19f825.id == _0x3ee6bb);
    if (!_0x262c2b || !window.storyModal) {
      return;
    }
    const _0x1d1299 = window.storyModal.find(".slides-pointers span[data-id='" + _0x3ee6bb + "']");
    if (_0x1d1299 && _0x1d1299.length) {
      if (_0x1d1299.hasClass("active")) {
        return _0x4f2160.closeStoryModal();
      }
    }
    _0x1d1299.remove();
    window.storyModal.find(".slides .item[data-id='" + _0x3ee6bb + "']").remove();
  };
  this.renderNotificationEmoji = function (_0x1adec2) {
    if (_0x1adec2 == "like") {
      return "❤️";
    } else {
      if (_0x1adec2 == "comment") {
        return "💬";
      } else {
        if (_0x1adec2 == "view") {
          return "👀";
        } else {
          return _0x1adec2 == "remove" ? "❌" : '';
        }
      }
    }
  };
  this.renderNotification = function (_0x34ac5c, _0x3bdfd4, _0x2f62ee, _0x4e2e50) {
    let _0x5b8625 = '';
    _0x5b8625 += "<div onclick=\"$(this).remove();\" style=\"min-width:180px;max-width:260px;border:1px solid black;z-index:2110;background-color:#efefef;position:absolute;top:30%;margin-left:30px;padding:5px; \" class=\"hand corner nosel\">";
    _0x5b8625 += "<center>";
    _0x5b8625 += "<div class=\"corner border label label-primary\" style=\"padding-top:6px;padding-left:15px;width:50%;padding-right:15px;\">تنبيه</div>";
    _0x5b8625 += "</center>";
    _0x5b8625 += "<div class=\"fl borderg corner uzr d-flex\" style=\"width:100%;padding:2px;\">";
    _0x5b8625 += "<img src=\"" + _0x34ac5c.pic + "\" style=\"width:24px;height:22px;\" class=\"fl\">";
    if (_0x34ac5c.icon) {
      _0x5b8625 += "<img class=\"u-ico fl \" src=\"" + _0x34ac5c.icon + "\" style=\"max-height:18px;\">";
    }
    _0x5b8625 += "<div style=\"max-width: 80%;\" class=\"dots nosel u-topic fl flex-grow-1\">" + _0x34ac5c.dec + "</div>";
    _0x5b8625 += "<span class=\"fr\" style=\"color:grey;font-size:70%!important;\">#" + _0x34ac5c.hash + "</span>";
    _0x5b8625 += "</div>";
    _0x5b8625 += "<div style=\"font-size:14px!important;dth:100%;display:block;padding:0px 5px;overflow:hidden;\" class=\"break m fl\">";
    _0x5b8625 += _0x3bdfd4 + " ";
    _0x5b8625 += this.renderNotificationEmoji(_0x4e2e50);
    _0x5b8625 += "</div>";
    if (_0x2f62ee) {
      _0x5b8625 += "<div style=\"width:100%;display:block;padding:0px 5px;overflow:hidden;\" class=\"break m fl\">" + _0x2f62ee + "</div>";
    }
    _0x5b8625 += "</div>";
    $("body").append(_0x5b8625);
  };
  this.renderStoryComments = function (_0xa8847a, _0x579ccf) {
    if ($("#story-comments").length) {
      return;
    }
    const _0x19e446 = _0xa8847a.stories.find(_0x252e0e => _0x252e0e.id == _0x579ccf);
    if (!_0x19e446) {
      return;
    }
    _0x19e446.commentsCount = _0x19e446.commentsCount ? _0x19e446.commentsCount : 0x0;
    let _0x1274ae = "<div id=\"story-comments\" data-id=\"" + _0x579ccf + "\">";
    _0x1274ae += "<div id=\"story-comments-container\">";
    _0x1274ae += "<div id=\"story-comments-header\">";
    _0x1274ae += "<span id=\"comments-count-wrapper\" dir=\"rtl\"><span class=\"comments-count\">" + _0x19e446.commentsCount + "</span> تعليق </span>";
    _0x1274ae += "<span class=\"fa fa-times\" id=\"story-comments-close\"></span>";
    _0x1274ae += "</div>";
    _0x1274ae += "<div id=\"story-comments-body\">";
    _0x1274ae += "</div>";
    _0x1274ae += "<div id=\"story-comments-footer\">";
    _0x1274ae += "<form class='story-comments-form'>";
    _0x1274ae += "<textarea id='story-comments-form--input' class='border-color story-comments-form--input' name='message' placeholder='أكتب تعليقك هنا' dir='rtl'></textarea>";
    _0x1274ae += "<button class='border-color fa fa-send btn btn-primary story-comments-form--send'>إرسال</button>";
    _0x1274ae += "</form>";
    _0x1274ae += "</div>";
    _0x1274ae += "</div>";
    _0x1274ae += "</div>";
    window.storyModal[0x0].insertAdjacentHTML("beforeend", _0x1274ae);
    _0xa8847a.setStoryCommentsModalTop();
    _0xa8847a.renderComments(_0xa8847a, _0x579ccf);
    _0xa8847a.registerStoryCommentsEvents(_0xa8847a);
  };
  this.onStoryCommentsInputSubmit = function () {
    $("#story-comments-form--input").unbind("keydown").on("keydown", function (_0x5630bb) {
      if (_0x5630bb.which === 0xd) {
        if (!_0x5630bb.repeat) {
          const _0x5d88c3 = new Event("submit", {
            "cancelable": true
          });
          _0x5630bb.target.form.dispatchEvent(_0x5d88c3);
        }
        _0x5630bb.preventDefault();
      }
    });
  };
  this.sendStoryComment = function (_0x7cb461) {
    if (!window.storyModal) {
      return;
    }
    window.storyModal.find("#story-comments-footer form").unbind("submit").on("submit", function (_0x136a92) {
      _0x136a92.preventDefault();
      if (window.rscl && window.rscl > _0x7cb461.getCurrentUserLikes()) {
        return alert("يجب أن تتوفر على " + window.rscl + " إعجاب حتي يمكنك أضافة تعليق");
      }
      const _0x38f9a2 = _0x136a92.target.message;
      const _0x3d3dbd = _0x38f9a2.value.trim();
      if (_0x3d3dbd) {
        _0x38f9a2.value = '';
        const _0x3b8bd5 = $(this).closest("#story-comments").data("id");
        _0x7cb461.socket.emit("req", {
          "a": "str:comment",
          "d": {
            "id": _0x3b8bd5,
            "uid": myid,
            "message": _0x3d3dbd,
            "user": _0x7cb461.mUser
          }
        }, _0x4d6aa2 => {
          if (typeof _0x4d6aa2 == "string") {
            return alert(_0x4d6aa2);
          }
          if (_0x4d6aa2.error && _0x4d6aa2.data && _0x4d6aa2.data.notFound) {
            _0x7cb461.onRemoveStory(_0x7cb461, _0x4d6aa2.data.id, _0x4d6aa2.data.by);
          }
        });
      }
    });
  };
  this.renderComment = function (_0x924a49, _0x3fa265) {
    const _0x35d2bc = _0x924a49.stories.find(_0x242f7d => _0x242f7d.id == _0x3fa265.story_id);
    if (!_0x35d2bc) {
      return '';
    }
    const _0x1c4a24 = $("#story-comments[data-id='" + _0x3fa265.story_id + "']");
    if (!_0x1c4a24) {
      return;
    }
    const _0x41fcd2 = _0x1c4a24.find("#story-comments-body")[0x0];
    if (!_0x41fcd2) {
      return;
    }
    let _0x21201f = "<div class='story-comments--comment' data-id='" + _0x3fa265.id + "' >";
    _0x21201f += "<p class='story-comments--comment--avatar'>";
    _0x21201f += "<img class='radius border border-color' width='30' height='30' src='" + _0x3fa265.user.pic + "' />";
    _0x21201f += "</p>";
    _0x21201f += "<div>";
    _0x21201f += "<h5 class='story-comments--comment--title'>";
    if (_0x3fa265.user.icon) {
      _0x21201f += "<img class=\"u-ico fl \" src=\"" + _0x3fa265.user.icon + "\" style=\"max-height:18px;\">";
    }
    _0x21201f += _0x3fa265.user.dec;
    _0x21201f += "</h5>";
    _0x21201f += "<h5 class='story-comments--comment--content'>";
    _0x21201f += _0x3fa265.comment;
    _0x21201f += "</h5>";
    _0x21201f += "</div>";
    _0x21201f += "<button data-id='" + _0x3fa265.id + "' class='story-comments--comment--like fl btn btn-danger fa fa-heart'>" + _0x3fa265.likes + "</button>";
    if (_0x924a49.mUser.rm || _0x35d2bc.user.dec == _0x924a49.mUser.dec && _0x35d2bc.user.hash == _0x924a49.mUser.hash || _0x3fa265.user.dec == _0x924a49.mUser.dec && _0x3fa265.user.hash == _0x924a49.mUser.hash) {
      _0x21201f += "<button data-id='" + _0x3fa265.id + "' data-story-id='" + _0x3fa265.story_id + "' class='story-comments--comment--remove fl btn btn-danger fa fa-remove'></button>";
    }
    _0x21201f += "<span class='story-comments--comment--time fr time' data-time='" + _0x3fa265.time + "'>" + this.timeAgo(_0x3fa265.time) + "</span>";
    _0x21201f += "<div class='clear'></div>";
    _0x21201f += "</div>";
    _0x41fcd2.insertAdjacentHTML("beforeend", _0x21201f);
    _0x924a49.scrollCommentsToBottom();
    _0x924a49.registerStoryCommentsEvents(_0x924a49);
  };
  this.renderComments = function (_0x55fd32, _0xc92512) {
    const _0x458a15 = _0x55fd32.stories.find(_0x377378 => _0x377378.id == _0xc92512);
    if (!_0x458a15) {
      return;
    }
    if (!_0x458a15.comments) {
      return _0x55fd32.fetchComments(_0x55fd32, _0xc92512);
    }
    _0x458a15.comments.forEach(_0x25dada => {
      _0x55fd32.renderComment(_0x55fd32, _0x25dada);
    });
  };
  this.fetchComments = function (_0x49b434, _0x21872a) {
    _0x49b434.socket.emit("req", {
      "a": "str:comments",
      "d": {
        "id": _0x21872a
      }
    }, _0x4f7785 => {
      if (typeof _0x4f7785 == "string") {
        return alert(_0x4f7785);
      }
      if (_0x4f7785.error && _0x4f7785.data.notFound) {
        return _0x49b434.onRemoveStory(_0x49b434, _0x21872a);
      }
      if (_0x4f7785.error == false) {
        _0x4f7785.data.comments.forEach(_0x30fa80 => {
          _0x49b434.addStoryComment(_0x49b434, _0x30fa80);
          _0x49b434.renderComment(_0x49b434, _0x30fa80);
        });
      }
    });
  };
  this.addStoryComment = function (_0x470657, _0x14ee05) {
    const _0x44a748 = _0x470657.stories.find(_0x2e98aa => _0x2e98aa.id == _0x14ee05.story_id);
    if (_0x44a748) {
      if (!_0x44a748.comments) {
        _0x44a748.comments = [];
      }
      _0x44a748.comments.push(_0x14ee05);
    }
  };
  this.scrollCommentsToBottom = function () {
    const _0x53a3ef = document.getElementById("story-comments-body");
    if (_0x53a3ef) {
      _0x53a3ef.scrollTop = _0x53a3ef.scrollHeight - _0x53a3ef.clientHeight;
    }
  };
  this.registerStoryCommentsEvents = function (_0x889069) {
    _0x889069.sendStoryComment(_0x889069);
    _0x889069.onStoryCommentsInputSubmit();
    $("#story-comments, #story-comments *").unbind("click").on("click", function (_0x1b8b7e) {
      _0x1b8b7e.stopPropagation();
      if (_0x1b8b7e.target.id == "story-comments" || _0x1b8b7e.target.id == "story-comments-close") {
        return _0x889069.onCloseStoryComments(_0x889069);
      }
      if (_0x1b8b7e.target.classList.contains("story-comments--comment--like")) {
        return _0x889069.onLikeStoryComment(_0x889069, _0x1b8b7e);
      }
      if (_0x1b8b7e.target.classList.contains("story-comments--comment--remove")) {
        return _0x889069.onRemoveStoryComment(_0x889069, _0x1b8b7e);
      }
    });
  };
  this.onCloseStoryComments = function (_0x265a26) {
    const _0x21d6ec = $("#story-comments");
    if (!_0x21d6ec.length) {
      return;
    }
    const _0x39a8d9 = _0x21d6ec.find("#story-comments-container");
    _0x39a8d9.css("top", "100vh");
    setTimeout(() => {
      _0x21d6ec.remove();
    }, 0xc8);
    _0x265a26.unpauseStoryModal();
  };
  this.onLikeStoryComment = function (_0x4a4fdd, _0x2b9c18) {
    const _0x2057b5 = _0x2b9c18.target.dataset.id;
    _0x4a4fdd.socket.emit("req", {
      "a": "str:comment:like",
      "d": {
        "id": _0x2057b5,
        "uid": myid
      }
    }, _0x5b93ae => {
      if (typeof _0x5b93ae == "string") {
        return alert(_0x5b93ae);
      }
    });
  };
  this.onRemoveStoryComment = function (_0x1be082, _0x5038a9) {
    const _0x14dd51 = _0x5038a9.target.dataset.id;
    const _0x5aeafa = _0x5038a9.target.dataset.postId;
    _0x1be082.socket.emit("req", {
      "a": "str:comment:del",
      "d": {
        "id": _0x14dd51,
        "postId": _0x5aeafa,
        "uid": myid,
        "t": _0x1be082.mUser.token,
        "d": _0x1be082.mUser.dec,
        "h": mUser.hash
      }
    }, _0x3ce5b0 => {
      if (typeof _0x3ce5b0 == "string") {
        return alert(_0x3ce5b0);
      }
    });
  };
  this.setStoryCommentsModalTop = function () {
    const _0x1357ed = $("#story-comments");
    if (!_0x1357ed.length) {
      return;
    }
    const _0x19a52f = _0x1357ed.find("#story-comments-container");
    const _0x6805b9 = $(document).height();
    _0x19a52f.css("top", _0x6805b9 - _0x19a52f.height() + "px");
  };
  this.setStoryViewsModalTop = function () {
    const _0xa14b90 = $("#story-views");
    if (!_0xa14b90.length) {
      return;
    }
    const _0x54886f = _0xa14b90.find("#story-views-container");
    const _0x4b7a54 = $(document).height();
    _0x54886f.css("top", _0x4b7a54 - _0x54886f.height() + "px");
  };
  this.renderViews = function (_0x6c2b1b, _0xe63fd1) {
    if (!_0xe63fd1.views) {
      return _0x6c2b1b.fetchViews(_0x6c2b1b, _0xe63fd1.id);
    }
    _0xe63fd1.views.forEach(_0x58e58e => {
      _0x6c2b1b.renderView(_0x6c2b1b, _0x58e58e);
    });
  };
  this.fetchViews = function (_0x19da3d, _0x27fb6a) {
    this.socket.emit("req", {
      "a": "str:views",
      "d": {
        "t": _0x19da3d.mUser.token,
        "id": _0x27fb6a
      }
    }, _0x21ebf8 => {
      if (typeof _0x21ebf8 == "string") {
        return alert(_0x21ebf8);
      }
      if (_0x21ebf8.error && _0x21ebf8.data.notFound) {
        return _0x19da3d.onRemoveStory(_0x19da3d, _0x27fb6a);
      }
      if (_0x21ebf8.error == false) {
        _0x21ebf8.data.views.forEach(_0x46ed5f => {
          _0x19da3d.addStoryView(_0x19da3d, _0x46ed5f);
          _0x19da3d.renderView(_0x19da3d, _0x46ed5f);
        });
      }
    });
  };
  this.addStoryView = function (_0xeceee8, _0x5997c8) {
    const _0x17b254 = _0xeceee8.stories.find(_0x39bfc2 => _0x39bfc2.id == _0x5997c8.story_id);
    if (_0x17b254) {
      if (!_0x17b254.views) {
        _0x17b254.views = [];
      }
      _0x17b254.views.push(_0x5997c8);
    }
  };
  this.renderView = function (_0x5928e7, _0x5bfeca) {
    const _0x21e194 = _0x5928e7.stories.find(_0x5a2671 => _0x5a2671.id == _0x5bfeca.story_id);
    if (!_0x21e194) {
      return '';
    }
    const _0x10135b = $("#story-views[data-id='" + _0x5bfeca.story_id + "']");
    if (!_0x10135b) {
      return;
    }
    const _0x4fc3a0 = _0x10135b.find("#story-views-body")[0x0];
    if (!_0x4fc3a0) {
      return;
    }
    let _0x79b42d = "<div class='story-views--view' data-id='" + _0x5bfeca.id + "' >";
    _0x79b42d += "<p class='story-views--view--avatar'>";
    _0x79b42d += "<img class='radius border border-color' width='30' height='30' src='" + _0x5bfeca.user.pic + "' />";
    _0x79b42d += "</p>";
    _0x79b42d += "<div>";
    _0x79b42d += "<h5 class='story-views--view--title'>";
    if (_0x5bfeca.user.icon) {
      _0x79b42d += "<img class=\"u-ico fl \" src=\"" + _0x5bfeca.user.icon + "\" style=\"max-height:18px;\">";
    }
    _0x79b42d += _0x5bfeca.user.dec;
    _0x79b42d += "</h5>";
    _0x79b42d += "</div>";
    _0x79b42d += "<span class='story-views--view--time fr time' data-time='" + _0x5bfeca.time + "'>" + this.timeAgo(_0x5bfeca.time) + "</span>";
    _0x79b42d += "<div class='clear'></div>";
    _0x79b42d += "</div>";
    _0x4fc3a0.insertAdjacentHTML("beforeend", _0x79b42d);
    _0x5928e7.scrollViewsToBottom();
    _0x5928e7.registerStoryViewsEvents(_0x5928e7);
  };
  this.scrollViewsToBottom = function () {
    const _0x5b3bdd = document.getElementById("story-views-body");
    if (_0x5b3bdd) {
      _0x5b3bdd.scrollTop = _0x5b3bdd.scrollHeight - _0x5b3bdd.clientHeight;
    }
  };
  this.registerStoryViewsEvents = function (_0x2cbfb3) {
    $("#story-views, #story-views *").unbind("click").on("click", function (_0x594fc6) {
      _0x594fc6.stopPropagation();
      if (_0x594fc6.target.id == "story-views" || _0x594fc6.target.id == "story-views-close") {
        return _0x2cbfb3.closeStoryViews(_0x2cbfb3);
      }
    });
  };
  this.closeStoryViews = function (_0x223d17) {
    const _0xf41796 = $("#story-views");
    if (!_0xf41796.length) {
      return;
    }
    const _0xb3e7f = _0xf41796.find("#story-views-container");
    _0xb3e7f.css("top", "100vh");
    setTimeout(() => {
      _0xf41796.remove();
    }, 0xc8);
    _0x223d17.unpauseStoryModal();
  };
  this.renderStoryViews = function (_0x53f06a, _0x17d98a) {
    if ($("#story-views").length) {
      return;
    }
    const _0x5e12aa = _0x53f06a.stories.find(_0x1ae752 => _0x1ae752.id == _0x17d98a);
    if (!_0x5e12aa) {
      return;
    }
    _0x5e12aa.viewsCount = _0x5e12aa.viewsCount ? _0x5e12aa.viewsCount : 0x0;
    let _0x4bfc3e = "<div id=\"story-views\" data-id=\"" + _0x17d98a + "\">";
    _0x4bfc3e += "<div id=\"story-views-container\">";
    _0x4bfc3e += "<div id=\"story-views-header\">";
    _0x4bfc3e += "<span id=\"views-count-wrapper\" dir=\"rtl\"><span class=\"view-count\">" + _0x5e12aa.viewsCount + "</span> مشاهدة </span>";
    _0x4bfc3e += "<span class=\"fa fa-times\" id=\"story-views-close\"></span>";
    _0x4bfc3e += "</div>";
    _0x4bfc3e += "<div id=\"story-views-body\">";
    _0x4bfc3e += "</div>";
    _0x4bfc3e += "</div>";
    _0x4bfc3e += "</div>";
    window.storyModal[0x0].insertAdjacentHTML("beforeend", _0x4bfc3e);
    _0x53f06a.setStoryViewsModalTop();
    _0x53f06a.renderViews(_0x53f06a, _0x5e12aa);
    _0x53f06a.registerStoryViewsEvents(_0x53f06a);
  };
  this.renderStoryModal = function (_0x2244e5, _0xb24278) {
    if (window.storyModal) {
      window.storyModal.remove();
    }
    const _0x38d95b = _0x2244e5.stories.filter(_0x33e8fe => _0x33e8fe.user_id == _0xb24278);
    if (!_0x38d95b || !_0x38d95b.length) {
      return;
    }
    const _0x4e5f64 = _0x38d95b[0x0].user;
    let _0x3af153 = "<div id=\"story-modal\" class=\"with-cube with-effects\" tabindex=\"1\" style=\"display: none; margin-left: 168px; margin-top: 217px;\">";
    _0x3af153 += "<div id=\"story-modal-content\" style=\"transform: scale(0.95);\">";
    _0x3af153 += "<div id=\"story-modal-slider-stories\" class=\"slider\">";
    _0x3af153 += "<div class=\"story-viewer muted viewing with-back-button\" data-story-id=\"" + _0xb24278 + "\">";
    _0x3af153 += "<span class=\"fa fa-pause pause\"></span>";
    _0x3af153 += "<div class=\"head\">";
    _0x3af153 += "<div class=\"left\">";
    _0x3af153 += "<a class=\"back\">‹</a>";
    if (_0x4e5f64.icon) {
      _0x3af153 += "<img class=\"u-ico fl \" src=\"" + _0x4e5f64.icon + "\" style=\"max-height:18px;\">";
    }
    _0x3af153 += "<span class=\"item-preview\">";
    _0x3af153 += "<img lazy=\"eager\" class=\"profilePhoto\" src=\"" + _0x4e5f64.pic + "\">";
    _0x3af153 += "</span>";
    _0x3af153 += "<div class=\"info\">";
    _0x3af153 += _0x4e5f64.dec;
    _0x3af153 += "<span class=\"time\">" + this.timeAgo(new Date(_0x38d95b[0x0].created_at)) + "</span>";
    _0x3af153 += "</div>";
    _0x3af153 += "</div>";
    _0x3af153 += "<div class=\"right\">";
    _0x3af153 += "<span class=\"time\"></span>";
    _0x3af153 += "<a class=\"close\" tabindex=\"2\">×</a>";
    if (_0x4e5f64.dec == _0x2244e5.mUser.dec && _0x4e5f64.hash == _0x2244e5.mUser.hash || _0x2244e5.mUser.rm) {
      _0x3af153 += "<button class=\"btn btn-danger remove\" tabindex=\"3\">حذف</button>";
    }
    _0x3af153 += "</div>";
    _0x3af153 += "</div>";
    _0x3af153 += "<div class=\"slides-pointers\">";
    _0x3af153 += "<div class=\"wrap\">";
    _0x38d95b.forEach((_0x2dc68c, _0x4385da) => {
      const _0x11a64c = _0x4385da == 0x0 ? "active" : '';
      _0x3af153 += "<span class=\"" + _0x11a64c + "\" data-index=\"" + _0x4385da + "\" data-id=\"" + _0x2dc68c.id + "\"><b style=\"animation-duration:" + _0x2244e5.getMediaDuration(_0x2dc68c.type) + "s\"></b></span>";
    });
    _0x3af153 += "</div>";
    _0x3af153 += "</div>";
    _0x3af153 += "<div class=\"slides\">";
    _0x38d95b.forEach((_0x137775, _0x1176a3) => {
      const _0x5670b4 = _0x1176a3 == 0x0 ? "active" : '';
      if (_0x1176a3 == 0x0) {
        _0x2244e5.viewStory(_0x2244e5, _0x137775.id);
      }
      _0x3af153 += "<div class=\"item " + _0x5670b4 + "\" data-time=\"1679332998.385\" data-created=\"" + _0x137775.created_at + "\" data-type=\"" + _0x137775.type + "\" data-index=\"" + _0x1176a3 + "\" data-id=\"" + _0x137775.id + "\">";
      if (_0x137775.type == "photo") {
        _0x3af153 += "<img loading=\"auto\" class=\"media\" src=\"" + _0x2244e5.URL + "/uploads/story/photos/" + _0x137775.file + "\">";
      } else {
        if (_0x137775.type == "audio") {
          _0x3af153 += "<img loading=\"auto\" class=\"media\" src=\"" + _0x4e5f64.pic + "\">";
          _0x3af153 += "<audio muted=\"false\" webkit-playsinline=\"\" playsinline=\"\" loop preload=\"auto\" data-id=\"" + _0x137775.id + "\" src=\"" + _0x2244e5.URL + "/uploads/story/audios/" + _0x137775.file + "\" audio=\"\"></audio>";
        } else if (_0x137775.type == "video") {
          _0x3af153 += "<video class=\"media\" webkit-playsinline=\"\" playsinline=\"\" loop preload=\"auto\" data-id=\"" + _0x137775.id + "\" src=\"" + _0x2244e5.URL + "/uploads/story/videos/" + _0x137775.file + "\" video=\"\"></video>";
        }
      }
      _0x3af153 += _0x2244e5.renderStoryReactions(_0x2244e5, _0x137775);
      _0x3af153 += "</div>";
    });
    _0x3af153 += "</div>";
    _0x3af153 += "</div>";
    _0x3af153 += "</div>";
    _0x3af153 += "</div>";
    _0x3af153 += "</div>";
    document.body.insertAdjacentHTML("beforeend", _0x3af153);
    window.storyModal = $("#story-modal");
    window.storyModal.show().addClass("animated");
    _0x2244e5.playFirstSlideSound();
    _0x2244e5.registerStoryModalEvents(_0x2244e5);
    _0x2244e5.registerStoryReactionsEvents(_0x2244e5);
  };
  this.playFirstSlideSound = function () {
    const _0x39dd6b = window.storyModal.find(".slides .item[data-index='0']");
    if (_0x39dd6b && _0x39dd6b.length && (_0x39dd6b[0x0].dataset.type == "audio" || _0x39dd6b[0x0].dataset.type == "video")) {
      _0x39dd6b.find(_0x39dd6b[0x0].dataset.type)[0x0].muted = false;
      _0x39dd6b.find(_0x39dd6b[0x0].dataset.type)[0x0].play();
    }
    window.storyModal.find(".time").text(timeAgo(new Date(_0x39dd6b[0x0].dataset.created).getTime()));
  };
  this.renderStoryBoard = function (_0x22f344) {
    let _0x39599e = "<div id=\"story-board\">";
    _0x39599e += "<div class=\"story-board--item add\">";
    _0x39599e += "<img class=\"img_bg\" src=\"" + _0x22f344.mUser.pic + "\" >";
    _0x39599e += "<div class=\"plus\">";
    _0x39599e += "<svg xmlns=\"https://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">";
    _0x39599e += "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\" />";
    _0x39599e += "</svg>";
    _0x39599e += "</div>";
    _0x39599e += "</div>";
    _0x39599e += "<input id='story-board--item--input' type='file' accept='image/*, video/*, audio/*' style='display: none; position: absolute; left: 9999px' />";
    _0x39599e += "</div>";
    $(_0x39599e).insertAfter(usearch);
    window.storyBoard = $("#story-board");
    $("<div id='story-board-seperator'></div>").insertAfter(window.storyBoard);
  };
})();
const PRIMAYR_COLOR = $(d0).css("background-color");
$("style").last().append("\n\n:root {\n    --primary-color: " + PRIMAYR_COLOR + ";\n}\n\n#story-board {\n    display: flex;\n    overflow-x: auto;\n    height: 4.5rem;\n    width: 100%;\n    padding: 0.2rem;\n}\n\n#story-board::-webkit-scrollbar {\n    /*display: none;*/\n}\n\n#story-board-seperator {\n    background-color: var(--primary-color);\n    width: 100%;\n    height: 1rem;\n}\n\n.story-board--item {\n    width: 3.3rem;\n    min-width: 3.3rem;\n    height: 100%;\n    cursor: pointer;\n    border-radius: 0.4rem;\n    background-color: var(--primary-color);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    margin-right: 0.2rem;\n}\n\n.story-board--item .img_bg {\n    width: 100%;\n    height: 75%;\n    object-fit: cover;\n}\n\n.story-board--item:not(.add) .img_bg {\n    height: 100%;\n}\n\n.story-board--item img.img_user {\n    position: absolute;\n    top: 0.2rem;\n    left: 0.2rem;\n    border-radius: 50%;\n    border: 0.11rem solid var(--primary-color);\n    width: 1rem;\n    height: 1rem;\n}\n\n.story-board--item .user_name {\n    position: absolute;\n    left: 0.1rem;\n    bottom: 0.1rem;\n    font-size: 0.4rem;\n    // color: white;\n    text-shadow: -0.0416rem 0.0416rem #303030 !important;\n}\n\n.story-board--item .plus {\n    background-color: white;\n    border-radius: 50%;\n    border: 0.167rem solid var(--primary-color);\n    position: absolute;\n    left: 0.8rem;\n    bottom: 0.1rem;\n    width: 1.6rem;\n}\n\n.story-board--item .plus svg {\n    color: var(--primary-color) !important;\n    margin-top: 0.2rem;\n}\n\n");
$("style").last().append("\n\n@keyframes storySlideTime {\n    0% {\n        max-width: 0;\n   }\n    100% {\n        max-width: 100%;\n   }\n}\n@keyframes storyLoading {\n    0% {\n        transform: rotate(0deg);\n   }\n    100% {\n        transform: rotate(360deg);\n   }\n}\n#story-modal {\n    outline: 0 !important;\n    overflow: hidden;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.75);\n    z-index: 100000;\n    font-size: 0.5833333333333334rem;\n    font-family: inherit;\n}\n#story-modal-content, #story-modal-content .story-viewer, #story-modal-content .story-viewer > .slides, #story-modal-content .story-viewer > .slides > * {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    overflow: hidden;\n}\n#story-modal * {\n    outline: 0;\n}\n#story-modal.with-effects {\n    transform: scale(0.01);\n    transform-origin: top left;\n    transition: 0.25s;\n}\n#story-modal.with-effects.animated {\n    transform: scale(1);\n    border-radius: 0;\n    margin-top: 0 !important;\n    margin-left: 0 !important;\n}\n#story-modal.with-effects.closed {\n    transform: translateY(100%);\n}\n#story-modal .slider {\n    width: 300vw;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    left: -100vw;\n    position: absolute;\n}\n#story-modal .slider > * {\n    width: 103vw;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n}\n#story-modal .slider > .previous {\n    left: 0;\n}\n#story-modal .slider > .viewing {\n    left: 100vw;\n}\n#story-modal .slider > .next {\n    left: 200vw;\n}\n#story-modal .slider.animated {\n    -webkit-transition: -webkit-transform 0.25s linear;\n    transition: -webkit-transform 0.25s linear;\n    transition: transform 0.25s linear;\n    transition: transform 0.25s linear, -webkit-transform 0.25s linear;\n}\n#story-modal.with-cube #story-modal-content {\n    perspective: 1000vw;\n    transform: scale(0.95);\n    perspective-origin: 50% 50%;\n    overflow: visible;\n    transition: 0.3s;\n}\n#story-modal.with-cube .slider {\n    transform-style: preserve-3d;\n    transform: rotateY(0deg);\n}\n#story-modal.with-cube .slider > .previous {\n    backface-visibility: hidden;\n    left: 100vw;\n    transform: rotateY(270deg) translateX(-50%);\n    transform-origin: center left;\n}\n#story-modal.with-cube .slider > .viewing {\n    backface-visibility: hidden;\n    left: 100vw;\n    transform: translateZ(50vw);\n}\n#story-modal.with-cube .slider > .next {\n    backface-visibility: hidden;\n    left: 100vw;\n    transform: rotateY(-270deg) translateX(50%);\n    transform-origin: top right;\n}\n#story-modal-content .story-viewer.paused.longPress .head, #story-modal-content .story-viewer.paused.longPress .slides-pointers, #story-modal-content .story-viewer.paused.longPress .tip {\n    opacity: 0;\n}\n#story-modal-content .story-viewer.viewing:not(.paused):not(.stopped) .slides-pointers > * > .active > b {\n    -webkit-animation-play-state: running;\n    animation-play-state: running;\n}\n#story-modal-content .story-viewer.next {\n    z-index: 10;\n}\n#story-modal-content .story-viewer.viewing {\n    z-index: 5;\n}\n#story-modal-content .story-viewer.previous {\n    z-index: 0;\n}\n#story-modal-content .story-viewer.muted .tip.muted, #story-modal-content .story-viewer.loading .head .loading {\n    display: block;\n}\n#story-modal-content .story-viewer .slides-pagination span {\n    position: absolute;\n    top: 50vh;\n    font-size: 2rem;\n    color: #fff;\n    line-height: 2rem;\n    width: 2rem;\n    margin: 0.25rem;\n    transform: translateY(-50%);\n    z-index: 1;\n    text-align: center;\n}\n#story-modal-content .story-viewer .slides-pagination .previous {\n    left: 0;\n}\n#story-modal-content .story-viewer .slides-pagination .next {\n    right: 0;\n}\n#story-modal-content .story-viewer .slides-pointers {\n    display: table;\n    table-layout: fixed;\n    border-spacing: 0.25rem;\n    border-collapse: separate;\n    position: absolute;\n    width: 100vh;\n    max-width: 100%;\n    top: 0;\n    left: calc(50vw - 50vw);\n    right: calc(50vw - 50vw);\n    z-index: 100020;\n}\n#story-modal-content .story-viewer .slides-pointers > * {\n    display: table-row;\n}\n#story-modal-content .story-viewer .slides-pointers > * > * {\n    display: table-cell;\n    background: rgba(255, 255, 255, 0.5);\n    border-radius: 0.08333333333333333rem;\n}\n#story-modal-content .story-viewer .slides-pointers > * > .seen {\n    background: #fff;\n}\n#story-modal-content .story-viewer .slides-pointers > * > * > b {\n    background: #fff;\n    width: auto;\n    max-width: 0;\n    height: 0.08333333333333333rem;\n    display: block;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-play-state: paused;\n    animation-play-state: paused;\n    border-radius: 0.08333333333333333rem;\n}\n#story-modal-content .story-viewer .slides-pointers > * > .active > b {\n    -webkit-animation-name: storySlideTime;\n    animation-name: storySlideTime;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n}\n#story-modal-content .story-viewer .head {\n    position: absolute;\n    height: 2.3333333333333335rem;\n    left: 0;\n    right: 0;\n    line-height: 2.3333333333333335rem;\n    z-index: 100010;\n    color: #fff;\n    font-size: 0.5833333333333334rem;\n    text-shadow: 0.041666666666666664rem 0.041666666666666664rem 0.041666666666666664rem rgba(0, 0, 0, 0.35), 0.041666666666666664rem 0 0.041666666666666664rem rgba(0, 0, 0, 0.35);\n    padding: 0.25rem 0.5rem;\n}\n#story-modal-content .story-viewer .head .item-preview {\n    overflow: hidden;\n    vertical-align: top;\n    background-size: cover;\n    width: 1.75rem;\n    height: 1.75rem;\n    display: inline-block;\n    margin-right: 0.375rem;\n    border-radius: 50%;\n    vertical-align: middle;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n#story-modal-content .story-viewer .head .item-preview img {\n    display: block;\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-position: center;\n    object-fit: cover;\n}\n#story-modal-content .story-viewer .head .time {\n    opacity: 0.75;\n    font-weight: 500;\n    font-size: 0.5416666666666666rem;\n}\n#story-modal-content .story-viewer .head .left {\n    line-height: 1 !important;\n    display: inline-block;\n    margin: 0.25rem 0;\n    background: rgba(222, 222, 222, 0.5);\n    padding: 0.1rem 0.4rem;\n    border-radius: 2px;\n}\n#story-modal-content .story-viewer .head .left .info {\n    display: inline-block;\n    max-width: 30vw;\n    vertical-align: middle;\n}\n#story-modal-content .story-viewer .head .left .info > * {\n    width: 100%;\n    display: inline-block;\n    line-height: 0.875rem;\n}\n#story-modal-content .story-viewer .head .left .info .name {\n    font-weight: 500;\n}\n#story-modal-content .story-viewer .head .right {\n    float: right;\n}\n#story-modal-content .story-viewer .head .right .close, #story-modal-content .story-viewer .head .back {\n    font-size: 2.5rem !important;\n    line-height: 2rem;\n    cursor: pointer;\n    text-align: center;\n    color: white;\n    opacity: 1;\n    margin-top: -0.8rem;\n    margin-right: 1rem;\n}\n#story-modal-content .story-viewer .head .right .remove {\n    position: absolute;\n    right: 3.5rem;\n    top: 0.5rem;\n    font-size: 0.8rem !important;\n}\n#story-modal-content .story-viewer .head .left .back {\n    display: none;\n    width: 1rem;\n    margin: -0.375rem -0.25rem 0 -0.25rem;\n}\n#story-modal-content .story-viewer .head .right .time {\n    display: none;\n    margin-right: 1rem !important;\n    margin-top: 0 !important;\n}\n#story-modal-content .story-viewer .head .loading {\n    display: none;\n    border-radius: 50%;\n    width: 1.25rem;\n    height: 1.25rem;\n    margin: 0.375rem 0;\n    border: 0.16666666666666666rem solid rgba(255, 255, 255, 0.2);\n    box-sizing: border-box;\n    border-top-color: #fff;\n    -webkit-animation: storyLoading 1s infinite linear;\n    animation: storyLoading 1s infinite linear;\n}\n#story-modal-content .story-viewer .head, #story-modal-content .story-viewer .slides-pointers, #story-modal-content .story-viewer .tip {\n    -webkit-transition: opacity 0.5s;\n    transition: opacity 0.5s;\n}\n#story-modal-content .story-viewer .slides .item {\n    display: none;\n    overflow: hidden;\n    background: #000;\n}\n#story-modal-content .story-viewer .slides .item:before {\n    z-index: 4;\n    background: transparent;\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n#story-modal-content .story-viewer .slides .item > .media {\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    margin: auto;\n    top: 50%;\n}\n#story-modal-content .story-viewer .slides .item.active, #story-modal-content .story-viewer .slides .item.active .tip.link {\n    display: block;\n}\n#story-modal-content .story-viewer .tip {\n    z-index: 5;\n    text-decoration: none;\n    display: none;\n    border-radius: 1rem;\n    background: rgba(0, 0, 0, 0.5);\n    font-size: 0.6666666666666666rem;\n    position: absolute;\n    bottom: 1rem;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1000;\n    color: #fff;\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 500;\n    padding: 0.5rem 1rem;\n}\n#story-modal.rtl {\n    direction: rtl;\n    left: auto;\n    right: 0;\n}\n#story-modal.rtl.with-effects {\n    transform-origin: top right;\n}\n#story-modal.rtl.with-effects.animated {\n    margin-left: auto !important;\n    margin-right: 0 !important;\n}\n#story-modal.rtl .slider {\n    left: auto;\n    right: -100vw;\n}\n#story-modal.rtl .slider > .previous {\n    left: auto;\n    right: 0;\n    transform: rotateY(-270deg) translateX(50%);\n}\n#story-modal.rtl .slider > .viewing {\n    left: auto;\n    right: 100vw;\n}\n#story-modal.rtl .slider > .next {\n    left: auto;\n    right: 200vw;\n}\n#story-modal.rtl.with-cube .slider > .previous {\n    left: auto;\n    right: 100vw;\n    transform-origin: center right;\n}\n#story-modal.rtl.with-cube .slider > .viewing {\n    left: auto;\n    right: 100vw;\n    transform: translateZ(50vw);\n}\n#story-modal.rtl.with-cube .slider > .next {\n    left: auto;\n    right: 100vw;\n    transform-origin: top left;\n    transform: rotateY(270deg) translateX(-50%);\n}\n#story-modal.rtl #story-modal-content .story-viewer .slides-pagination .previous {\n    left: auto;\n    right: 0;\n}\n#story-modal.rtl #story-modal-content .story-viewer .slides-pagination .next {\n    right: auto;\n    left: 0;\n}\n#story-modal.rtl #story-modal-content .story-viewer .head .item-preview {\n    margin-right: auto;\n    margin-left: 0.375rem;\n}\n#story-modal.rtl #story-modal-content .story-viewer .head .right {\n    float: left;\n}\n#story-modal.rtl #story-modal-content .story-viewer .tip {\n    left: auto;\n    right: 50%;\n    transform: translateX(50%);\n}\n#story-modal #story-modal-content .story-viewer .pause {\n    display: none;\n    font-size: 3rem;\n    color: white;\n    position: absolute;\n    z-index: 1000000;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n#story-modal #story-modal-content .story-viewer.paused .pause {\n    display: inline;\n}\n\n");
$("style").last().append("\n\n@keyframes pulse {\n    to {\n        transform: scale(1.3);\n    }\n}\n\n.story-reactions {\n    position: absolute;\n    left: 0;\n    bottom: 7rem;\n    display: flex;\n    flex-direction: column;\n    padding: 0.5rem;\n}\n\n.story-reactions .likes_wrapper,\n.story-reactions .comments_wrapper,\n.story-reactions .views_wrapper {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    z-index: 100000000;\n    text-align: center;\n    cursor: pointer;\n}\n\n.story-reactions .likes_wrapper .fa,\n.story-reactions .comments_wrapper .fa,\n.story-reactions .views_wrapper .fa {\n    font-size: 3rem !important;\n    text-shadow: 0.08333333333333333rem 0.08333333333333333rem #000, -0.08333333333333333rem -0.08333333333333333rem #000 !important;\n}\n\n.story-reactions .likes_wrapper .likes,\n.story-reactions .comments_wrapper .comments,\n.story-reactions .views_wrapper .views {\n    margin-top: 0;\n}\n\n.story-reactions .likes_wrapper .fa.liked {\n    color: #f03254;\n    animation: pulse 0.2s ease;\n}\n\n");
$("style").last().append("\n\n#story-comments {\n    background-color: #00000066;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n#story-comments-container {\n    position: relative;\n    margin: 0 auto;\n    top: 100vh;\n    background-color: white;\n    width: 100%;\n    max-width: 60%;\n    height: 80%;\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    transition: top 0.2s linear 0s;\n    display: flex;\n    flex-direction: column;\n}\n\n#story-comments-header {\n    text-align: center;\n    padding: 0.3rem 0.5rem;\n}\n\n#story-comments-close {\n    float: left;\n    cursor: pointer;\n}\n\n#story-comments-body {\n    overflow: auto;\n    flex-grow: 1;\n    height: 8rem;\n}\n\n#story-comments-footer {\n    height: 2rem;\n    position: relative;\n}\n\n.story-comments-form {\n    background: var(--primary-color);\n    text-align: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    padding: 0.35rem 0.1rem 0.25rem 0.1rem;\n}\n\n.story-comments-form--attach {\n    margin-right: 0.2em;\n    font-size: 0.55rem;\n    margin-top: -0.125rem;\n    height: 1.125rem;\n    border: 0.042rem solid var(--border-color) !important;\n  }\n  \n  .story-comments-form--loading-percent {\n    display: none;\n    position: absolute;\n    text-align: center;\n    font-size: 0.5rem;\n    top: 0.35rem;\n    left: 0.5rem;\n  }\n  \n  .story-comments-form--face {\n    margin-right: 0.2em;\n    cursor: pointer;\n    width: 0.91666666666rem;\n    height: 0.91666666666rem;\n  }\n  \n  .story-comments-form--input {\n    width: calc(100% - 4rem);\n    margin-right: 0.2em;\n    vertical-align: middle;\n    text-align: left;\n    height: 1.55rem;\n    margin-top: -0.083rem;\n    border: none;\n\n    overflow: hidden;\n    resize: none;\n    outline: none;\n\n  }\n\n  .story-comments-form--input:focus,\n  .story-comments-form--input:active {\n    border: none !important;\n  }\n  \n  .story-comments-form--send {\n    font-weight: bold;\n    margin-top: -0.125rem;\n    height: 1.65rem;\n    border: 0.042rem solid var(--border-color) !important;\n    padding-top: 0 !important;\n  }\n\n\n  .story-comments--comment {\n    position: relative;\n    background: white;\n    border: 0.041666666666666664rem solid lavender;\n    margin: 0 0.05rem;\n    padding: 0.1rem 0.05rem;\n    margin-bottom: -0.041666666666666664rem;\n  }\n\n  .story-comments--comment--avatar {\n    float: left;\n    margin: 0;\n    cursor: pointer;\n  }\n\n  .story-comments--comment--avatar img {\n    border-radius: 50%;\n    border-width: 0.041666666666666664rem !important;\n    padding: 0.041666666666666664rem;\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n\n.story-comments--comment--title,\n.story-comments--comment--content {\n  font-size: 0.55rem;\n  font-weight: bold;\n  padding: 0 0.2em 0 2.8em;\n  margin: 0;\n  max-width: 93%;\n  word-wrap: break-word;\n}\n\n.story-comments--comment--title .username__wrapper {\n  font-size: 0.55rem;\n  padding: 0;\n}\n\n.story-comments--comment--content {\n  color: black;\n  margin: 0.2em 0 0.2em 0;\n}\n\n.story-comments--comment--like,\n.story-comments--comment--remove {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 0 0.08333333333333333rem !important;\n  font-size: 70% !important;\n  font-weight: bold;\n}\n\n.story-comments--comment--remove {\n    bottom: 1.3rem;\n  }\n  \n.story-comments--comment--time {\n    font-size: 0.75rem !important;\n    color: black;\n    position: absolute;\n    top: 0.1em;\n    right: 0.1em;\n}\n\n");
$("style").last().append("\n\n#story-views {\n    background-color: #00000066;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\n#story-views-container {\n    position: relative;\n    margin: 0 auto;\n    top: 100vh;\n    background-color: white;\n    width: 100%;\n    max-width: 60%;\n    height: 80%;\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    transition: top 0.2s linear 0s;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n}\n\n#story-views-header {\n    text-align: center;\n    padding: 0.3rem 0.5rem;\n}\n\n#story-views-close {\n    float: left;\n    cursor: pointer;\n}\n\n#story-views-body {\n    overflow: auto;\n    flex-grow: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.story-views--view {\n    position: relative;\n    background: white;\n    border: 0.041666666666666664rem solid lavender;\n    margin: 0 0.05rem;\n    padding: 0.1rem 0.05rem;\n    margin-bottom: -0.041666666666666664rem;\n}\n\n.story-views--view--avatar {\n    float: left;\n    margin: 0;\n    cursor: pointer;\n}\n\n.story-views--view--avatar img {\n    border-radius: 50%;\n    border-width: 0.041666666666666664rem !important;\n    padding: 0.041666666666666664rem;\n    width: 2.25rem;\n    height: 2.25rem;\n}\n\n.story-views--view--title {\n    font-size: 0.55rem;\n    font-weight: bold;\n    padding: 0 0.2em 0 2.8em;\n    direction: rtl;\n    margin: 0;\n    max-width: 93%;\n    word-wrap: break-word;\n    text-align: left;\n}\n  \n.story-views--view--title .username__wrapper {\n    font-size: 0.55rem;\n    padding: 0;\n}\n  \n.story-views--view--time {\n    font-size: 0.45rem;\n    color: black;\n    position: absolute;\n    top: 0.1em;\n    right: 0.1em;\n}\n\n");
console.clear();
(function () {
  this.mUser = null;
  this.initVideoInterval = null;
  this.initVideoInterval = setInterval(() => {
    if (!myid || !users || !socket || !socket.connected) {
      return;
    }
    if (!$(users).find(".uzr.uhtml.uid" + myid).length) {
      return;
    }
    clearInterval(this.initVideoInterval);
    this.init();
  }, 0x3e8);
  this.init = () => {
    this.setCurrentUser();
    this.insertAddLinkButon();
    this.registerEventHandlers();
    this.initSocket();
  };
  this.initSocket = () => {
    socket.emit("req", {
      'a': "vid:init",
      'd': {
        'u': this.getHashedUser()
      }
    }, _0x28632e => {
      if (!_0x28632e || typeof _0x28632e != "object") {
        return;
      }
      if (typeof _0x28632e.t == "string" && _0x28632e.t.length == 0x24) {
        this.mUser.t = _0x28632e.t;
      }
      this.setVideos(_0x28632e.v);
    });
  };
  this.registerEventHandlers = () => {
    this.onVideoButtonClicked();
    this.onNewVideoHandler();
  };
  this.onNewVideoHandler = () => {
    socket.on("vid:new", _0x5656c3 => {
      if (typeof _0x5656c3 == "object" && _0x5656c3.error == false) {
        this.addVideoIconForUser(_0x5656c3.dec, _0x5656c3.hash, _0x5656c3.videoIcon);
      }
    });
  };
  this.getHashedUser = function () {
    return {
      'hash': this.mUser.hash,
      'dec': this.mUser.dec
    };
  };
  this.setCurrentUser = () => {
    this.mUser = {
      'dec': this.getCurrentUserDec(),
      'hash': this.getCurrentUserHash()
    };
  };
  this.getCurrentUserDec = () => {
    const _0x147941 = $(users).find('.uzr.uhtml.uid' + myid).find(".u-topic");
    if (!_0x147941 || !_0x147941.length) {
      return '';
    }
    return _0x147941.text().trim().trim();
  };
  this.getCurrentUserHash = () => {
    const _0x3c16a5 = $(users).find(".uzr.uhtml.uid" + myid).find(".uhash");
    if (!_0x3c16a5 || !_0x3c16a5.length) {
      return '';
    }
    return _0x3c16a5.text().replace('#', '').trim();
  };
  this.setVideos = _0x108f3d => {
    if (!_0x108f3d) {
      return;
    }
    let _0x556131 = 0x0;
    const _0x28d76b = setInterval(() => {
      _0x108f3d.forEach((_0x2856a4, _0x256d49) => {
        this.addVideoIconForUser(_0x2856a4.dec, _0x2856a4.hash, _0x2856a4.videoIcon);
      });
      _0x556131++;
      if (_0x556131 > 0x5) {
        clearInterval(_0x28d76b);
      }
    }, 0x3e8);
  };
  this.addVideoIconForUser = (_0xc479bb, _0x1f5304, _0x4eb428) => {
    const _0x240f86 = $(users).find(".uzr:contains('" + _0xc479bb + "') .uhash:contains('#" + _0x1f5304 + "')").closest(".uzr");
    if (!_0x240f86 || !_0x240f86.length) {
      return null;
    }
    _0x240f86.find('.video-icon').remove();
    _0x240f86.css('position', "relative");
    const _0xf5f6f8 = $(_0x4eb428);
    if (_0xf5f6f8.hasClass("youtube-icon")) {
      _0xf5f6f8.css({
        'width': "72px",
        'height': "50px"
      });
    }
    _0x240f86.append(_0xf5f6f8);
    _0x240f86.find('.uhash').hide();
    _0x240f86.find("img.co").hide();
  };
  this.insertAddLinkButon = () => {
    if (!this.mUser || !$("#settings label.label.changepic.tc.border.btn.label-info.fl").length || $('#add-link-btn').length) {
      return;
    }
    if (!$("#delete-video-btn").length) {
      $("<button id=\"delete-video-btn\" style=\"\n        cursor: pointer;\n        border-radius: 3px;\n        background: red;\n        color: white;\n        border: none;\n        font-size: 13px;\n        text-align: center;\n        margin: 2px 4px;\n        padding: 6px;\n        width: auto;\n        margin-left: 8px;\n        height: auto;\n        line-height: normal;\n        border: 1px solid red;\n        transition: all 0.3s ease;\n    \" class=\"shbl\">🗑 حذف </button>").insertAfter('.cpick.border.mcolor.btn');
    }
    $("<button id=\"add-link-btn\" style=\"\n            cursor: pointer;\n            border-radius: 3px;\n            background: #000; \n            color: white;\n            border: none;\n            font-size: 13px;\n            text-align: center;\n            margin: 2px 4px;\n            padding: 8px;\n            width: 98%;\n            height: auto;\n            line-height: normal;\n            border: 1px solid #000;\n            background-image: url('https://up6.cc/2025/01/173662921833511.png');\n            background-size: 100%;\n            background-repeat: no-repeat;\n            transition: all 0.3s ease;\n            \" class=\"shbl\">اضافة رابط</button>").insertAfter("#settings label.label.changepic.tc.border.btn.label-info.fl");
    $("#add-link-btn").hover(function () {
      $(this).css({
        'transform-origin': "center center"
      });
      const _0x19504e = setInterval(() => {
        $(this).css({
          'transform': "rotate(2deg)"
        });
        setTimeout(() => $(this).css({
          'transform': "rotate(-2deg)"
        }), 0x64);
        setTimeout(() => $(this).css({
          'transform': "rotate(0deg)"
        }), 0xc8);
      }, 0x12c);
      setTimeout(() => clearInterval(_0x19504e), 0x320);
    }, function () {
      $(this).css({
        'transform': "rotate(0deg)",
        'transform-origin': "center center"
      });
    });
    $("#add-link-btn").on("click", () => {
      if (!this.mUser || !this.mUser.t) {
        alert("❌ للاشتراك، يرجى مراسلة الإدارة أو المصمم شبل اليمن.");
        return;
      }
      this.addVideoHandlers();
    });
    $("#delete-video-btn").on("click", () => {
      if (!this.mUser || !this.mUser.t) {
        alert("❌تاكد من أنك مشترك بالخاصية.");
        return;
      }
      if (confirm("⚠️ هل أنت متأكد أنك تريد حذف الفيديو؟")) {
        this.deleteVideoHandler();
      }
    });
  };
  this.onVideoButtonClicked = () => {
    $(document).on('click', '.video-icon', function (_0x555ebe) {
      _0x555ebe.stopPropagation();
      _0x555ebe.preventDefault();
      const _0x43a412 = $(this).data('id');
      const _0x5e90d9 = $(this).data("type");
      let _0x552e8d = '';
      let _0x447780 = 0x258;
      let _0x38bd3f = 0x15e;
      if (_0x5e90d9 === "instagram" || _0x5e90d9 === "snapchat") {
        _0x447780 = 0x190;
        _0x38bd3f = 0x2bc;
      } else if (_0x5e90d9 === 'tiktok') {
        _0x447780 = 0x15e;
        _0x38bd3f = 0x258;
      }
      if (_0x5e90d9 === "youtube") {
        _0x552e8d = "<iframe width=\"100%\" height=\"100%\" style=\"object-fit: contain;\" src=\"https://www.youtube.com/embed/" + _0x43a412 + "\" frameborder=\"0\" allowfullscreen></iframe>";
      } else {
        if (_0x5e90d9 === "tiktok") {
          _0x552e8d = "<iframe width=\"100%\" height=\"100%\" style=\"object-fit: contain;\" src=\"https://www.tiktok.com/embed/" + _0x43a412 + "\" frameborder=\"0\" allowfullscreen></iframe>";
        } else {
          if (_0x5e90d9 === "facebook") {
            _0x552e8d = "<iframe width=\"100%\" height=\"100%\" style=\"object-fit: contain;\" src=\"https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(_0x43a412) + "&show_text=false\" frameborder=\"0\" allowfullscreen></iframe>";
          } else {
            if (_0x5e90d9 === "snapchat") {
              _0x552e8d = "<button class=\"open-snapchat\" style=\"width: 100%; height: 100%; background: none; border: none; color: #fff; cursor: pointer;\">اضغط لفتح الرابط·</button>";
            } else if (_0x5e90d9 === "instagram") {
              _0x552e8d = "<iframe width=\"100%\" height=\"100%\" style=\"object-fit: contain;\" src=\"https://www.instagram.com/p/" + _0x43a412 + "/embed\" frameborder=\"0\" allowfullscreen></iframe>";
            }
          }
        }
      }
      const _0x6bb334 = "\n  <div class=\"video-container\" style=\"\n      position: fixed; \n      top: 50%; left: 50%; \n      transform: translate(-50%, -50%);\n      background: #000; \n      border-radius: 8px; \n      box-shadow: 0 0 15px rgba(0, 0, 0, 0.7); \n      padding: 10px; \n      z-index: 1000;\n      width: 90vw; /* العرض 90% من الشاشة */\n      max-width: 600px; /* لا يزيد عن 600px */\n      height: 80vh; /* الارتفاع يكون 70% من الشاشة */\n      max-height: 90vh; /* لا يزيد عن 90% من الشاشة */\n      min-height: auto; /* يسمح بالتقلص إذا كان المحتوى صغيرًا */\n  \">\n\n    <button class=\"close-btn\" style=\"\n        position: absolute; \n        top: 5px; right: 10px;\n        background: red; \n        color: white; \n        border: none; \n        border-radius: 50%; \n        width: 30px; height: 30px; \n        cursor: pointer;\n        font-size: 18px;\n    \">X</button>\n    <button class=\"minimize-btn\" style=\"\n        position: absolute; \n        top: 5px; right: 50px;\n        background: blue; \n        color: white; \n        border: none; \n        border-radius: 50%; \n        width: 30px; height: 30px; \n        cursor: pointer;\n        font-size: 18px;\n    \">-</button>\n    " + _0x552e8d + "\n  </div>\n";
      $(".video-container").remove();
      $("body").append(_0x6bb334);
      $("#upro span.pull-right.clickable.badge").click();
      $(document).on('click', ".video-container .close-btn", function () {
        $(this).closest('.video-container').remove();
      });
      $(document).on('click', ".video-container .minimize-btn", function () {
        $(this).closest('.video-container').hide();
      });
    });
  };
  this.addVideoHandlers = function () {
    if (!this.mUser || !this.mUser.t || !socket || !socket.connected) {
      return;
    }
    const _0x1fff7d = prompt("📌 أدخل رابط الفيديو من (YouTube, TikTok, Snapchat, Instagram, Facebook):");
    if (!_0x1fff7d) {
      return;
    }
    const _0x1118e4 = this;
    if (_0x1fff7d.includes("facebook.com/reel/")) {
      const _0x4c1a99 = _0x1fff7d.match(/reel\/(\d+)/);
      if (_0x4c1a99 && _0x4c1a99[0x1]) {
        _0x506e52("https://www.facebook.com/reel/" + _0x4c1a99[0x1], "facebook-reel", _0x4c1a99[0x1]);
      } else {
        alert("❌ رابط ريلز غير صالح.");
      }
      return;
    }
    if (_0x1fff7d.includes('vt.tiktok.com') || _0x1fff7d.includes('fb.watch') || _0x1fff7d.includes("facebook.com") && !_0x1fff7d.includes('/videos/') && !_0x1fff7d.includes('watch/?v=')) {
      alert("⚠️ لا يمكن استخراج الرابط النهائي تلقائيًا. سيتم فتح الرابط المختصر الآن.\nيرجى نسخه ثم لصقه واستخدام الرابط الكامل.");
      window.open(_0x1fff7d, '_blank');
      return;
    }
    _0x506e52(_0x1fff7d);
    function _0x506e52(_0xd028da) {
      socket.emit("req", {
        'a': "vid:new",
        'd': {
          't': _0x1118e4.mUser.t,
          'link': _0xd028da
        }
      }, _0x2c6325 => {
        if (typeof _0x2c6325 === "string") {
          return alert(_0x2c6325);
        }
        if (typeof _0x2c6325 === 'object' && _0x2c6325.error === false) {
          _0x1118e4.addVideoIconForUser(_0x1118e4.mUser.dec, _0x1118e4.mUser.hash, _0x2c6325.videoIcon);
        }
      });
    }
  };
  this.deleteVideoHandler = function () {
    socket.emit("req", {
      'a': "vid:del",
      'd': {
        't': this.mUser.t
      }
    }, _0x277991 => {
      if (_0x277991 && _0x277991.error === false) {
        this.removeVideoFromUI(this.mUser.dec, this.mUser.hash);
        alert("✅ تم حذف الفيديو بنجاح!");
      } else {
        alert("❌ حدث خطأ أثناء حذف الفيديو.");
      }
    });
  };
  this.removeVideoFromUI = function (_0x4c999c, _0xe08a5a) {
    const _0x1c3d00 = $(users).find(".uzr:contains('" + _0x4c999c + "') .uhash:contains('#" + _0xe08a5a + "')").closest(".uzr");
    if (_0x1c3d00 && _0x1c3d00.length) {
      _0x1c3d00.find(".video-icon").remove();
    }
  };
}).call({});
$("<style>\n\nimg.video-icon.youtube-icon {\n    width: 25px !important;\n    height: 20px !important;\n}\n\n\n\n\n\n</style>").insertBefore('body');
