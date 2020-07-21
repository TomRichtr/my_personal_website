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

$(".rating-container.jq").hover(
  function () {
    $(".rating-container.jq .checked").addClass("fa-lg");
  },
  function () {
    $(".rating-container.jq .checked").removeClass("fa-lg");
  }
);

$(".rating-container.redux").hover(
  function () {
    $(".rating-container.redux .checked").addClass("fa-lg");
  },
  function () {
    $(".rating-container.redux .checked").removeClass("fa-lg");
  }
);

$(".rating-container.react").hover(
  function () {
    $(".rating-container.react .checked").addClass("fa-lg");
  },
  function () {
    $(".rating-container.react .checked").removeClass("fa-lg");
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

//counter in form text field
$('#textfield').keyup(updateCount);
$('#textfield').keydown(updateCount);

function updateCount() {
    var cs = $(this).val().length;
    var leftChars = "(characters left: "
    var endBracklet = ")"
    var countOfCharacters = 1000
    $('#characters').text(leftChars + (countOfCharacters - cs) + endBracklet);
}
