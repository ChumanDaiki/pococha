$(function(){
  var arrangeTime = 0;
  var selectedText = 0;
  var calcResult = 0;
  var inputTime = 0;
  var overTime = 0;
  var rankSelect = document.getElementById("rank-select");
  var selectedNumber = 0;
  var resultSelected = 0;

  rankSelect.addEventListener("change", changeNumber);

  function changeNumber() {
    $("#rankNumber").children().remove();
    if(rankSelect.value != ""){
      if(rankSelect.value != "S"){
        if(rankSelect.value != "E"){
          set3Number();
        }else{
          setNumber();
        }
      }else{
        set6Number();
      }
    }
  }

  function setNumber() {
    var Number = [
      {cd:"", label:"選択してください"},
      {cd:"3", label:"3"}
    ];
    Number.forEach(function(value){
      var number = document.createElement("option");
      number.value = value.cd;
      number.text = value.label;
      rankNumber.appendChild(number);
    });
  }

  function set3Number() {
    var Number3 = [
      {cd:"", label:"選択してください"},
      {cd:"1", label:"1"},
      {cd:"2", label:"2"},
      {cd:"3", label:"3"}
    ];
    Number3.forEach(function(value){
      var number2 = document.createElement("option");
      number2.value = value.cd;
      number2.text = value.label;
      rankNumber.appendChild(number2);
    });
  }

  function set6Number() {
    var Number6 = [
      {cd:"", label:"選択してください"},
      {cd:"1", label:"1"},
      {cd:"2", label:"2"},
      {cd:"3", label:"3"},
      {cd:"4", label:"4"},
      {cd:"5", label:"5"},
      {cd:"6", label:"6"}
    ];
    Number6.forEach(function(value){
      var number3 = document.createElement("option");
      number3.value = value.cd;
      number3.text = value.label;
      rankNumber.appendChild(number3);
    });
  }

  $(document).on("click", "#calc", function(){
    selectedText = document.getElementById("rank-select").value;
    selectedNumber = document.getElementById("rankNumber").value;
    resultSelected = selectedText + selectedNumber;
    inputTime = document.getElementById("time-input");
    $("#popup-modal").addClass("active"); 
  });
  $(document).on("click", "#time-button", function(){
    overTime = document.getElementById("over-time");
    arrangeTime = inputTime.value - overTime.value;
    $("#popup-modal").removeClass("active");
    //ランク毎計算
    if(resultSelected == "E3"){
      calcResult = arrangeTime * 30;
    }
    if(resultSelected == "D1"){
      calcResult = arrangeTime * 50;
    }
    if(resultSelected == "D2"){
      calcResult = arrangeTime * 100;
    }
    if(resultSelected == "D3"){
      calcResult = arrangeTime * 150;
    }
    if(resultSelected == "C1"){
      calcResult = arrangeTime * 400;
    }
    if(resultSelected == "C2"){
      calcResult = arrangeTime * 600;
    }
    if(resultSelected == "C3"){
      calcResult = arrangeTime * 800;
    }
    if(resultSelected == "B1"){
      calcResult = arrangeTime * 1200;
    }
    if(resultSelected == "B2"){
      calcResult = arrangeTime * 1400;
    }
    if(resultSelected == "B3"){
      calcResult = arrangeTime * 1600;
    }
    if(resultSelected == "A1"){
      calcResult = arrangeTime * 1900;
    }
    if(resultSelected == "A2"){
      calcResult = arrangeTime * 2200;
    }
    if(resultSelected == "A3"){
      calcResult = arrangeTime * 2500;
    }
    if(resultSelected == "S1"){
      calcResult = arrangeTime * 3000;
    }
    if(resultSelected == "S2"){
      calcResult = arrangeTime * 3500;
    }
    if(resultSelected == "S3"){
      calcResult = arrangeTime * 4000;
    }
    if(resultSelected == "S4"){
      calcResult = arrangeTime * 4500;
    }
    if(resultSelected == "S5"){
      calcResult = arrangeTime * 5000;
    }
    if(resultSelected == "S6"){
      calcResult = arrangeTime * 5500;
    }
    $("#result").val("¥" + calcResult);
  });


  $("#close-modal").click(function(){
    $("#popup-modal").removeClass("active");
  });
});