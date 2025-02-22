$(document).on("click", ".open-dialog", function () {
  ids = ["0",$(this).data('id')];
});

$('#modal').on('show.bs.modal', function (e) {
  //alert ('ok');
    if (typeof (questions) == "undefined") {
        //load answers
        $.ajax({
          url: '../questions.json',
          success: function(data){
            if ((typeof data) == "string")
              var questions = $.parseJSON(data); //voksmonitor server does not return correct data
            else
              var questions = data;
            create_comparison(questions);
          }
        });
    } else {
      create_comparison(questions);
    }
});

function create_comparison(questions) {
  if (typeof (details) == "undefined") {
        //load answers
        $.ajax({
          url: '../details.json',
          success: function(data){
            if ((typeof data) == "string")
              data = $.parseJSON(data)
            make_comparison(questions,data);  //voksmonitor server does not return correct data
          }
        });
    } else {
      make_comparison(questions,data);
    }
}

function make_comparison(questions, details) {

  if (typeof(ids) == "undefined") ids = ["0","0"];
  
  html = '<table class="table table-striped comparison-table"><thead>';
  v1_id = ids[0];
  v2_id = ids[1];
  
  html += '<tr><th>'+ texts['question'] +'</th><th class="comp-center">' + answers[v1_id]['short_name'] + '</th><th></th><th class="comp-center">' + answers[v2_id]['short_name'] + '</th></tr>';
  html += '</thead><tbody>';
  for (key in questions) {
    q_id = questions[key]['id'];
    vote1 = answers[v1_id]['vote'][q_id];
    vote2 = answers[v2_id]['vote'][q_id];
    detail1 = get_detail(details,v1_id,q_id);
    detail2 = get_detail(details,v2_id,q_id);
    if (typeof(weights[q_id]) != "undefined")
      important = "<i class='fa fa-star'></i> </span>";
    else
      important = '';
    html += "<tr><td>" + important + questions[key]['name'] + tooltip(questions[key]['question'],'fa-info-circle');
    html += "</td><td class='comp-center'>" + val2word(vote1);
    if (detail1) html += tooltip(detail1, 'fa-info-circle');
    html += "</td><td class='comp-center'>";
    html += compare_answers(vote1,vote2);
    html += "</td><td class='comp-center'>" + val2word(vote2);
    if (detail2) html += tooltip(detail2, 'fa-info-circle');
    html += "</td></tr>";
  }
  html += "</tbody></table>"
  $("#comparison-dialog").html(html);
  $(".tooltip-top").tooltip({placement: 'top'});
}

function compare_answers(a1,a2) {
  if (a1*a2 == -1) return "<strong>✘</strong>";
  else return "";
}

function tooltip (text, icon) {
  return "<span data-toggle='tooltip' data-placement='top' title='" + text + "' class='tooltip-top'> <i class='fa " + icon + "'></i> </span>";
}

function get_detail(details,vid,qid) {
  if (typeof (details[vid]) == "undefined") return false;
  if (typeof (details[vid][qid]) == "undefined") return false;
  else return details[vid][qid];
}

function val2word(val) {
  if (typeof(val) == "undefined") return '=';
  if (val == 1) return texts['yes'];
  if (val == -1) return texts['no'];
  return "-";
}
