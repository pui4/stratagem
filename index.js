var width = 100;
var code = [];
var index = 0;
var amo = 92;
var rd = Math.floor(Math.random() * (amo + 1));
var score = 0;
var inc = 15;
var playing = false;
var w_inc = 30;
var id;
var left = "a";
var right = "d";
var up = "w";
var down = "s";
var size = 100;

// 0: default 1:left 2:right 3:up 4:down
var change = 0;

// https://www.youtube.com/watch?v=ijBvQACTlvs
var button = new Audio("sfx/click.mp3");

// https://www.youtube.com/watch?v=sHZUfSMLjFs
var l_fx = new Audio("sfx/lose.mp3");
var s_fx = new Audio("sfx/score.mp3");
var w_fx = new Audio("sfx/wrong.mp3");

//up -90 down 90 left 180 right 0
//https://www.ign.com/wikis/helldivers-2/Stratagems_Codes_List

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  } 

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("size_slider");
  var size_txt = document.getElementById("size_txt");
  slider.oninput = () => {
    size = slider.value
    let arrows = document.getElementsByClassName('btn')
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].style.width = `${(20 / 100) * size}vh`
    }
    size_txt.innerHTML = `ARROW SIZE: ${size}%`
  }

  var l_e = document.getElementById("left-tx");
  var r_e = document.getElementById("right-tx");
  var u_e = document.getElementById("up-tx");
  var d_e = document.getElementById("down-tx");

  if (!document.cookie.includes("controls")) {
    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
  } else {
    var c = getCookie("controls").split(",");
    left = c[0];
    right = c[1];
    up = c[2];
    down = c[3];
  }

  if (!document.cookie.includes("size")) {
    document.cookie = "size=" + size + "; SameSite=Lax;"
  } else {
    var c = getCookie("size");
    size = c;
    slider.value = size;
  }

  createbtns(rd);

  l_e.innerHTML = "LEFT: " + left;
  r_e.innerHTML = "RIGHT: " + right;
  u_e.innerHTML = "UP: " + up;
  d_e.innerHTML = "DOWN: " + down;

  size_txt.innerHTML = `ARROW SIZE: ${size}%`
});

function changeL() {
    if (change == 0) {
        change = 1;
        var l_e = document.getElementById("left-tx");
        l_e.innerHTML = "LEFT: PRESS A KEY";
    }
}

function changeR() {
    if (change == 0) {
        change = 2;
        var l_e = document.getElementById("right-tx");
        l_e.innerHTML = "RIGHT: PRESS A KEY";
    }
}

function changeU() {
    if (change == 0) {
        change = 3;
        var l_e = document.getElementById("up-tx");
        l_e.innerHTML = "UP: PRESS A KEY";
    }
}

function changeD() {
    if (change == 0) {
        change = 4;
        var l_e = document.getElementById("down-tx");
        l_e.innerHTML = "DOWN: PRESS A KEY";
    }
}

function update(timestamp) {
    if (width > 0 && playing) {
        width -= 0.01 + (score * 0.005);
        bar.style.width = width + "%";
        requestAnimationFrame(update)
    } else if (width <= 0) {
        lose()
    }
}

function start() {
    var elem = document.getElementById("start");
    elem.style.display = "none";
    playing = true;

    var bar = document.getElementById("bar");
    requestAnimationFrame(update);
}

function closeSet() {
    var elem = document.getElementById("settings");
    elem.style.display = "none";
    playing = true;
    document.cookie = "size=" + size + "; SameSite=Lax;"
    requestAnimationFrame(update)
}

function settings() {
    var elem = document.getElementById("settings");
    elem.style.display = "block";
    playing = false;
}

function lose() {
    playing = false;
    l_fx.play();
    var elem = document.getElementById("lose");
    var tw = document.getElementById("twitter");
    var sc = document.getElementById("score-tx");

    tw.href = "https://twitter.com/intent/tweet?text=SCORE: " + score + "&url=https://pui4.github.io/stratagem";
    sc.innerHTML = "SCORE: " + score;
    elem.style.display = "block";
}

function retry() {
    var elem = document.getElementById("lose");
    var s = document.getElementById("score");

    width = 100;
    score = 0;
    s.innerHTML = "SCORE: " + score;
    createbtns(rd);
    start();
    elem.style.display = "none"
}

document.onkeydown = function(evt) {
    var elem = document.getElementsByClassName("btn");
    var s_elem = document.getElementById("score");

    evt = evt || document.event;
    if (playing) {
        switch (evt.key) {
            case up:
                if (index == code.length - 1 && code[index] == -90) {
                    rd = Math.floor(Math.random() * (amo + 1));
                    button.pause();
                    button.currentTime = 0;
                    button.play();
                    score++;
                    s_elem.innerHTML = "SCORE: " + score;
                    s_fx.pause();
                    s_fx.currentTime = 0;
                    s_fx.play();
                    createbtns(rd);
                    index = 0;
                    if (width + w_inc >= 100) {
                        width = 100;
                    } else {
                        width += w_inc;
                    }
                    break;
                }
                if (code[index] == -90) {
                    elem[index].style.filter = "invert(78%) sepia(87%) saturate(5065%) hue-rotate(358deg) brightness(96%) contrast(105%)";
                    button.pause();
                    button.currentTime = 0;
                    button.play();
                    index++;
                }else {
                    for (let i = 0; i < index; i++) {
                        elem[i].style.filter = "invert(48%) sepia(0%) saturate(3121%) hue-rotate(234deg) brightness(104%) contrast(81%)";
                    }
                    index = 0;
                    w_fx.pause();
                    w_fx.currentTime = 0;
                    w_fx.play();
                }
                break;
            case left:
                if (index == code.length - 1 && code[index] == 180) {
                    rd = Math.floor(Math.random() * (amo + 1));
                    button.pause();
                    button.currentTime = 0;
                    button.play();
                    score++;
                    s_elem.innerHTML = "SCORE: " + score;
                    s_fx.pause();
                    s_fx.currentTime = 0;
                    s_fx.play();
                    createbtns(rd);
                    index = 0;
                    if (width + w_inc >= 100) {
                        width = 100;
                    } else {
                        width += w_inc + (score * 0.05);
                    }
                    interval -= inc;
                    break;
                }
                if (code[index] == 180) {
                    elem[index].style.filter = "invert(78%) sepia(87%) saturate(5065%) hue-rotate(358deg) brightness(96%) contrast(105%)";
                    button.pause();
                    button.currentTime = 0;
                    button.play();
                    index++;
                }else {
                    for (let i = 0; i < index; i++) {
                        elem[i].style.filter = "invert(48%) sepia(0%) saturate(3121%) hue-rotate(234deg) brightness(104%) contrast(81%)";
                    }
                    index = 0;
                    w_fx.pause();
                    w_fx.currentTime = 0;
                    w_fx.play();
                }
                break;
            case down:
                if (index == code.length - 1 && code[index] == 90) {
                    rd = Math.floor(Math.random() * (amo + 1));
                    button.pause();
                    button.currentTime = 0;
                    button.play();
                    score++;
                    s_elem.innerHTML = "SCORE: " + score;
                    s_fx.pause();
                    s_fx.currentTime = 0;
                    s_fx.play();
                    createbtns(rd);
                    index = 0;
                    if (width + w_inc >= 100) {
                        width = 100;
                    } else {
                        width += w_inc;
                    }
                    interval -= inc;
                    break;
                }
                if (code[index] == 90) {
                    elem[index].style.filter = "invert(78%) sepia(87%) saturate(5065%) hue-rotate(358deg) brightness(96%) contrast(105%)";
                    button.pause();
                    button.currentTime = 0;
                    button.play();
                    index++;
                }else {
                    for (let i = 0; i < index; i++) {
                        elem[i].style.filter = "invert(48%) sepia(0%) saturate(3121%) hue-rotate(234deg) brightness(104%) contrast(81%)";
                    }
                    index = 0;
                    w_fx.pause();
                    w_fx.currentTime = 0;
                    w_fx.play();
                }
                break;
            case right:
                if (index == code.length - 1 && code[index] == 0) {
                    rd = Math.floor(Math.random() * (amo + 1));
                    button.pause();
                    button.currentTime = 0;
                    button.play();
                    score++;
                    s_elem.innerHTML = "SCORE: " + score;
                    s_fx.pause();
                    s_fx.currentTime = 0;
                    s_fx.play();
                    createbtns(rd);
                    index = 0;
                    console.log(width);
                    if (width + w_inc >= 100) {
                        width = 100;
                    } else {
                        width += w_inc;
                    }
                    interval -= inc;
                    break;
                }
                if (code[index] == 0) {
                    elem[index].style.filter = "invert(78%) sepia(87%) saturate(5065%) hue-rotate(358deg) brightness(96%) contrast(105%)";
                    button.pause();
                    button.currentTime = 0;
                    button.play();
                    index++;
                }else {
                    for (let i = 0; i < index; i++) {
                        elem[i].style.filter = "invert(48%) sepia(0%) saturate(3121%) hue-rotate(234deg) brightness(104%) contrast(81%)";
                    }
                    index = 0;
                    w_fx.pause();
                    w_fx.currentTime = 0;
                    w_fx.play();
                }
                break;
        }
    } else {
        switch (change) {
            case 1:
                if (evt.key != down && evt.key != right && evt.key != up) {
                    left = evt.key;
                    var l_e = document.getElementById("left-tx");
                    l_e.innerHTML = "LEFT: " + left;
                    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
                    change = 0;
                }
                break;
            case 2:
                if (evt.key != down && evt.key != left && evt.key != up) {
                    right = evt.key;
                    var l_e = document.getElementById("right-tx");
                    l_e.innerHTML = "RIGHT: " + right;
                    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
                    change = 0;
                }
                break;
            case 3:
                if (evt.key != down && evt.key != right && evt.key != left) {
                    up = evt.key;
                    var l_e = document.getElementById("up-tx");
                    l_e.innerHTML = "UP: " + up;
                    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
                    change = 0;
                }
                break;
            case 4:
                if (evt.key != up && evt.key != left && evt.key != right) {
                    down = evt.key;
                    var l_e = document.getElementById("down-tx");
                    l_e.innerHTML = "DOWN: " + down;
                    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
                    change = 0;
                }
                break;
        }
    }
};