document.querySelector('#email-navbar').addEventListener('click', () => {
  navigator.clipboard.writeText('t.richtr@email.cz');
});

document.querySelector('#phone-navbar').addEventListener('click', () => {
  navigator.clipboard.writeText('+420778540970')
});

$( "#email-navbar" ).click(function() {
  $( ".alert" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
});

$( "#phone-navbar" ).click(function() {
  $( ".alert" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


$(".rating-container.html").hover(
  function() {
    $(".rating-container.html .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.html .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.css").hover(
  function() {
    $(".rating-container.css .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.css .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.js").hover(
  function() {
    $(".rating-container.js .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.js .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.jq").hover(
  function() {
    $(".rating-container.jq .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.jq .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.python").hover(
  function() {
    $(".rating-container.python .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.python .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.postgresql").hover(
  function() {
    $(".rating-container.postgresql .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.postgresql .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.django").hover(
  function() {
    $(".rating-container.django .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.django .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.git").hover(
  function() {
    $(".rating-container.git .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.git .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.bootstrap").hover(
  function() {
    $(".rating-container.bootstrap .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.bootstrap .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.atom").hover(
  function() {
    $(".rating-container.atom .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.atom .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.vs").hover(
  function() {
    $(".rating-container.vs .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.vs .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.sublime").hover(
  function() {
    $(".rating-container.sublime .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.sublime .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.jupyter").hover(
  function() {
    $(".rating-container.jupyter .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.jupyter .checked").removeClass( "fa-lg" );
  }
);


$(".rating-container.pga").hover(
  function() {
    $(".rating-container.pga .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.pga .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.gitbash").hover(
  function() {
    $(".rating-container.gitbash .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.gitbash .checked").removeClass( "fa-lg" );
  }
);


$(".rating-container.msoffice").hover(
  function() {
    $(".rating-container.msoffice .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.msoffice .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.msexcel").hover(
  function() {
    $(".rating-container.msexcel .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.msexcel .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.firefox").hover(
  function() {
    $(".rating-container.firefox .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.firefox .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.github").hover(
  function() {
    $(".rating-container.github .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.github .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.czech").hover(
  function() {
    $(".rating-container.czech .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.czech .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.english").hover(
  function() {
    $(".rating-container.english .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.english .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.german").hover(
  function() {
    $(".rating-container.german .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.german .checked").removeClass( "fa-lg" );
  }
);

$(".rating-container.githubapp").hover(
  function() {
    $(".rating-container.githubapp .checked").addClass( "fa-lg" );
  }, function() {
    $(".rating-container.githubapp .checked").removeClass( "fa-lg" );
  }
);



var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var resolution = window.devicePixelRatio || 1;

var waves = [];
var resized = false;

var vw, vh;
resizeCanvas();

var wave1 = createWave(context, {
  amplitude: 50,
  duration: 4,
  fillStyle: "rgba(163, 144, 36, 1)",
  frequency: 2.5,
  width: vw,
  height: vh,
  segments: 100,
  waveHeight: vh * 0.25
});

var wave2 = createWave(context, {
  amplitude: 100,
  duration: 2,
  fillStyle: "rgba(0, 0, 0, 0.1)",
  frequency: 1.5,
  width: vw,
  height: vh,
  segments: 100,
  waveHeight: vh * 0.25
});

waves.push(wave1, wave2);



window.addEventListener("resize", function() {
  resized = true;
});

TweenLite.ticker.addEventListener("tick", update);

function update() {

  var len = waves.length;

  if (resized) {

    resizeCanvas();

    for (var i = 0; i < len; i++) {
      waves[i].resize(vw, vh);
    }

    resized = false;
  }

  context.clearRect(0, 0, vw, vh);
  context.globalCompositeOperation = "soft-light";

  for (var i = 0; i < len; i++) {
    waves[i].draw();
  }
}

function createWave(context, options) {

  options = options || {};

  // API
  var wave = {

    // Properties
    amplitude: options.amplitude || 200,
    context: context,
    curviness: options.curviness || 0.75,
    duration: options.duration || 2,
    fillStyle: options.fillStyle || "rgba(163,144,36,0.53)",
    frequency: options.frequency || 4,
    height: options.height || 600,
    points: [],
    segments: options.segments || 100,
    tweens: [],
    waveHeight: options.waveHeight || 300,
    width: options.width || 800,
    x: options.x || 0,
    y: options.y || 0,

    // Methods
    init: init,
    resize: resize,
    draw: draw,
    kill: kill
  };

  init();

  function kill() {

    var tweens = wave.tweens;
    var len = tweens.length;

    for (var i = 0; i < len; i++) {
      tweens[i].kill();
    }

    tweens.length = 0;
    wave.points.length = 0;
  }

  function init() {

    kill();

    var segments = wave.segments;
    var interval = wave.width / segments;

    for (var i = 0; i <= segments; i++) {

      var norm = i / segments;
      var point = {
        x: wave.x + i * interval,
        y: 1
      };

      var tween = TweenMax.to(point, wave.duration, {
        y: -1,
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      }).progress(norm * wave.frequency)

      wave.tweens.push(tween);
      wave.points.push(point);
    }
  }

  function draw() {

    var points = wave.points;
    var len = points.length;

    var startY = wave.waveHeight;
    var height = wave.amplitude / 2;

    context.beginPath();
    context.moveTo(points[0].x, startY + points[0].y * height);

    for (var i = 1; i < len; i++) {

      var point = points[i];
      context.lineTo(point.x, startY + point.y * height);
    }

    context.lineTo(wave.x + wave.width, wave.y + wave.height);
    context.lineTo(wave.x, wave.y + wave.height);
    context.closePath();
    context.fillStyle = wave.fillStyle;
    context.fill();
  }

  function resize(width, height) {

    wave.width = width;
    wave.height = height;

    var points = wave.points;
    var len = points.length;
    var interval = wave.width / wave.segments;

    for (var i = 0; i < len; i++) {

      var point = points[i];
      point.x = wave.x + i * interval;
    }
  }

  return wave;
}

function resizeCanvas() {

  vw = window.innerWidth;
  vh = window.innerHeight;

  canvas.width  = vw * resolution;
  canvas.height = vh * resolution;

  canvas.style.width  = vw + "px";
  canvas.style.height = vh + "px";

  context.scale(resolution, resolution);
}
