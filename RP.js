$(() => {

    console.log('JS 正常執行')

    $("#startGame").click(function() {
        $(this).hide();
        $("#nothing1").hide();
        $("#table1").show();
        $("#table3").show();
        $("#turns").show();
    });

    var row1_1 = [0, 0, 0, 0, 0, 0, 0],
        row1_2 = [0, 0, 0, 0, 0, 0, 0],
        row1_3 = [0, 0, 0, 0, 0, 0, 0],
        row1_4 = [0, 0, 0, 0, 0, 0, 0],
        row1_5 = [0, 0, 0, 0, 0, 0, 0],
        row1_6 = [0, 0, 0, 0, 0, 0, 0],
        row1_7 = [0, 0, 0, 0, 0, 0, 0],
        column1 = [row1_1, row1_2, row1_3, row1_4, row1_5, row1_6, row1_7],
        row2_1 = [0, 0, 0, 0, 0, 0, 0],
        row2_2 = [0, 0, 0, 0, 0, 0, 0],
        row2_3 = [0, 0, 0, 0, 0, 0, 0],
        row2_4 = [0, 0, 0, 0, 0, 0, 0],
        row2_5 = [0, 0, 0, 0, 0, 0, 0],
        row2_6 = [0, 0, 0, 0, 0, 0, 0],
        row2_7 = [0, 0, 0, 0, 0, 0, 0],
        column2 = [row2_1, row2_2, row2_3, row2_4, row2_5, row2_6, row2_7]

    $("#confirm1-1").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = 1 + " " + x + " " + y;
            var kind = 1;
            switch (coordinate) {
                case "1 1 1":
                    $("#CV-1-1-1").show();
                    row1_1[0] = kind;
                    break;
                case "1 1 2":
                    $("#CV-1-1-2").show();
                    row1_1[1] = kind;
                    break;
                case "1 1 3":
                    $("#CV-1-1-3").show();
                    row1_1[2] = kind;
                    break;
                case "1 1 4":
                    $("#CV-1-1-4").show();
                    row1_1[3] = kind;
                    break;
                case "1 1 5":
                    $("#CV-1-1-5").show();
                    row1_1[4] = kind;
                    break;
                case "1 1 6":
                    $("#CV-1-1-6").show();
                    row1_1[5] = kind;
                    break;
                case "1 1 7":
                    $("#CV-1-1-7").show();
                    row1_1[6] = kind;
                    break;
                case "1 2 1":
                    $("#CV-1-2-1").show();
                    row1_2[0] = kind;
                    break;
                case "1 2 2":
                    $("#CV-1-2-2").show();
                    row1_2[1] = kind;
                    break;
                case "1 2 3":
                    $("#CV-1-2-3").show();
                    row1_2[2] = kind;
                    break;
                case "1 2 4":
                    $("#CV-1-2-4").show();
                    row1_1[3] = kind;
                    break;
                case "1 2 5":
                    $("#CV-1-2-5").show();
                    row1_2[4] = kind;
                    break;
                case "1 2 6":
                    $("#CV-1-2-6").show();
                    row1_2[5] = kind;
                    break;
                case "1 2 7":
                    $("#CV-1-2-7").show();
                    row1_2[6] = kind;
                    break;
                case "1 3 1":
                    $("#CV-1-3-1").show();
                    row1_3[0] = kind;
                    break;
                case "1 3 2":
                    $("#CV-1-3-2").show();
                    row1_3[1] = kind;
                    break;
                case "1 3 3":
                    $("#CV-1-3-3").show();
                    row1_3[2] = kind;
                    break;
                case "1 3 4":
                    $("#CV-1-3-4").show();
                    row1_3[3] = kind;
                    break;
                case "1 3 5":
                    $("#CV-1-3-5").show();
                    row1_3[4] = kind;
                    break;
                case "1 3 6":
                    $("#CV-1-3-6").show();
                    row1_3[5] = kind;
                    break;
                case "1 3 7":
                    $("#CV-1-3-7").show();
                    row1_3[6] = kind;
                    break;
                case "1 4 1":
                    $("#CV-1-4-1").show();
                    row1_4[0] = kind;
                    break;
                case "1 4 2":
                    $("#CV-1-4-2").show();
                    row1_4[1] = kind;
                    break;
                case "1 4 3":
                    $("#CV-1-4-3").show();
                    row1_4[2] = kind;
                    break;
                case "1 4 4":
                    $("#CV-1-4-4").show();
                    row1_4[3] = kind;
                    break;
                case "1 4 5":
                    $("#CV-1-4-5").show();
                    row1_4[4] = kind;
                    break;
                case "1 4 6":
                    $("#CV-1-4-6").show();
                    row1_4[5] = kind;
                    break;
                case "1 4 7":
                    $("#CV-1-4-7").show();
                    row1_4[6] = kind;
                    break;
                case "1 5 1":
                    $("#CV-1-5-1").show();
                    row1_5[0] = kind;
                    break;
                case "1 5 2":
                    $("#CV-1-5-2").show();
                    row1_5[1] = kind;
                    break;
                case "1 5 3":
                    $("#CV-1-5-3").show();
                    row1_5[2] = kind;
                    break;
                case "1 5 4":
                    $("#CV-1-5-4").show();
                    row1_5[3] = kind;
                    break;
                case "1 5 5":
                    $("#CV-1-5-5").show();
                    row1_5[4] = kind;
                    break;
                case "1 5 6":
                    $("#CV-1-5-6").show();
                    row1_5[5] = kind;
                    break;
                case "1 5 7":
                    $("#CV-1-5-7").show();
                    row1_5[6] = kind;
                    break;
                case "1 6 1":
                    $("#CV-1-6-1").show();
                    row1_6[0] = kind;
                    break;
                case "1 6 2":
                    $("#CV-1-6-2").show();
                    row1_6[1] = kind;
                    break;
                case "1 6 3":
                    $("#CV-1-6-3").show();
                    row1_6[2] = kind;
                    break;
                case "1 6 4":
                    $("#CV-1-6-4").show();
                    row1_6[3] = kind;
                    break;
                case "1 6 5":
                    $("#CV-1-6-5").show();
                    row1_6[4] = kind;
                    break;
                case "1 6 6":
                    $("#CV-1-6-6").show();
                    row1_6[5] = kind;
                    break;
                case "1 6 7":
                    $("#CV-1-6-7").show();
                    row1_6[6] = kind;
                    break;
                case "1 7 1":
                    $("#CV-1-7-1").show();
                    row1_7[0] = kind;
                    break;
                case "1 7 2":
                    $("#CV-1-7-2").show();
                    row1_7[1] = kind;
                    break;
                case "1 7 3":
                    $("#CV-1-7-3").show();
                    row1_7[2] = kind;
                    break;
                case "1 7 4":
                    $("#CV-1-7-4").show();
                    row1_7[3] = kind;
                    break;
                case "1 7 5":
                    $("#CV-1-7-5").show();
                    row1_7[4] = kind;
                    break;
                case "1 7 6":
                    $("#CV-1-7-6").show();
                    row1_7[5] = kind;
                    break;
                case "1 7 7":
                    $("#CV-1-7-7").show();
                    row1_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#shokaku").hide();
            $("#confirm1-2").show();
            $("#yamato").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm1-2").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column1[x - 1][y - 1] == 0) {
            var coordinate = 1 + " " + x + " " + y;
            var kind = 2;
            switch (coordinate) {
                case "1 1 1":
                    $("#BB-1-1-1").show();
                    row1_1[0] = kind;
                    break;
                case "1 1 2":
                    $("#BB-1-1-2").show();
                    row1_1[1] = kind;
                    break;
                case "1 1 3":
                    $("#BB-1-1-3").show();
                    row1_1[2] = kind;
                    break;
                case "1 1 4":
                    $("#BB-1-1-4").show();
                    row1_1[3] = kind;
                    break;
                case "1 1 5":
                    $("#BB-1-1-5").show();
                    row1_1[4] = kind;
                    break;
                case "1 1 6":
                    $("#BB-1-1-6").show();
                    row1_1[5] = kind;
                    break;
                case "1 1 7":
                    $("#BB-1-1-7").show();
                    row1_1[6] = kind;
                    break;
                case "1 2 1":
                    $("#BB-1-2-1").show();
                    row1_2[0] = kind;
                    break;
                case "1 2 2":
                    $("#BB-1-2-2").show();
                    row1_2[1] = kind;
                    break;
                case "1 2 3":
                    $("#BB-1-2-3").show();
                    row1_2[2] = kind;
                    break;
                case "1 2 4":
                    $("#BB-1-2-4").show();
                    row1_2[3] = kind;
                    break;
                case "1 2 5":
                    $("#BB-1-2-5").show();
                    row1_2[4] = kind;
                    break;
                case "1 2 6":
                    $("#BB-1-2-6").show();
                    row1_2[5] = kind;
                    break;
                case "1 2 7":
                    $("#BB-1-2-7").show();
                    row1_2[6] = kind;
                    break;
                case "1 3 1":
                    $("#BB-1-3-1").show();
                    row1_3[0] = kind;
                    break;
                case "1 3 2":
                    $("#BB-1-3-2").show();
                    row1_3[1] = kind;
                    break;
                case "1 3 3":
                    $("#BB-1-3-3").show();
                    row1_3[2] = kind;
                    break;
                case "1 3 4":
                    $("#BB-1-3-4").show();
                    row1_3[3] = kind;
                    break;
                case "1 3 5":
                    $("#BB-1-3-5").show();
                    row1_3[4] = kind;
                    break;
                case "1 3 6":
                    $("#BB-1-3-6").show();
                    row1_3[5] = kind;
                    break;
                case "1 3 7":
                    $("#BB-1-3-7").show();
                    row1_3[6] = kind;
                    break;
                case "1 4 1":
                    $("#BB-1-4-1").show();
                    row1_4[0] = kind;
                    break;
                case "1 4 2":
                    $("#BB-1-4-2").show();
                    row1_4[1] = kind;
                    break;
                case "1 4 3":
                    $("#BB-1-4-3").show();
                    row1_4[2] = kind;
                    break;
                case "1 4 4":
                    $("#BB-1-4-4").show();
                    row1_4[3] = kind;
                    break;
                case "1 4 5":
                    $("#BB-1-4-5").show();
                    row1_4[4] = kind;
                    break;
                case "1 4 6":
                    $("#BB-1-4-6").show();
                    row1_4[5] = kind;
                    break;
                case "1 4 7":
                    $("#BB-1-4-7").show();
                    row1_4[6] = kind;
                    break;
                case "1 5 1":
                    $("#BB-1-5-1").show();
                    row1_5[0] = kind;
                    break;
                case "1 5 2":
                    $("#BB-1-5-2").show();
                    row1_5[1] = kind;
                    break;
                case "1 5 3":
                    $("#BB-1-5-3").show();
                    row1_5[2] = kind;
                    break;
                case "1 5 4":
                    $("#BB-1-5-4").show();
                    row1_5[3] = kind;
                    break;
                case "1 5 5":
                    $("#BB-1-5-5").show();
                    row1_5[4] = kind;
                    break;
                case "1 5 6":
                    $("#BB-1-5-6").show();
                    row1_5[5] = kind;
                    break;
                case "1 5 7":
                    $("#BB-1-5-7").show();
                    row1_5[6] = kind;
                    break;
                case "1 6 1":
                    $("#BB-1-6-1").show();
                    row1_6[0] = kind;
                    break;
                case "1 6 2":
                    $("#BB-1-6-2").show();
                    row1_6[1] = kind;
                    break;
                case "1 6 3":
                    $("#BB-1-6-3").show();
                    row1_6[2] = kind;
                    break;
                case "1 6 4":
                    $("#BB-1-6-4").show();
                    row1_6[3] = kind;
                    break;
                case "1 6 5":
                    $("#BB-1-6-5").show();
                    row1_6[4] = kind;
                    break;
                case "1 6 6":
                    $("#BB-1-6-6").show();
                    row1_6[5] = kind;
                    break;
                case "1 6 7":
                    $("#BB-1-6-7").show();
                    row1_6[6] = kind;
                    break;
                case "1 7 1":
                    $("#BB-1-7-1").show();
                    row1_7[0] = kind;
                    break;
                case "1 7 2":
                    $("#BB-1-7-2").show();
                    row1_7[1] = kind;
                    break;
                case "1 7 3":
                    $("#BB-1-7-3").show();
                    row1_7[2] = kind;
                    break;
                case "1 7 4":
                    $("#BB-1-7-4").show();
                    row1_7[3] = kind;
                    break;
                case "1 7 5":
                    $("#BB-1-7-5").show();
                    row1_7[4] = kind;
                    break;
                case "1 7 6":
                    $("#BB-1-7-6").show();
                    row1_7[5] = kind;
                    break;
                case "1 7 7":
                    $("#BB-1-7-7").show();
                    row1_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#yamato").hide();
            $("#confirm1-3").show();
            $("#ibuki").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm1-3").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column1[x - 1][y - 1] == 0) {
            var coordinate = 1 + " " + x + " " + y;
            var kind = 3;
            switch (coordinate) {
                case "1 1 1":
                    $("#CA-1-1-1").show();
                    row1_1[0] = kind;
                    break;
                case "1 1 2":
                    $("#CA-1-1-2").show();
                    row1_1[1] = kind;
                    break;
                case "1 1 3":
                    $("#CA-1-1-3").show();
                    row1_1[2] = kind;
                    break;
                case "1 1 4":
                    $("#CA-1-1-4").show();
                    row1_1[3] = kind;
                    break;
                case "1 1 5":
                    $("#CA-1-1-5").show();
                    row1_1[4] = kind;
                    break;
                case "1 1 6":
                    $("#CA-1-1-6").show();
                    row1_1[5] = kind;
                    break;
                case "1 1 7":
                    $("#CA-1-1-7").show();
                    row1_1[6] = kind;
                    break;
                case "1 2 1":
                    $("#CA-1-2-1").show();
                    row1_2[0] = kind;
                    break;
                case "1 2 2":
                    $("#CA-1-2-2").show();
                    row1_2[1] = kind;
                    break;
                case "1 2 3":
                    $("#CA-1-2-3").show();
                    row1_2[2] = kind;
                    break;
                case "1 2 4":
                    $("#CA-1-2-4").show();
                    row1_2[3] = kind;
                    break;
                case "1 2 5":
                    $("#CA-1-2-5").show();
                    row1_2[4] = kind;
                    break;
                case "1 2 6":
                    $("#CA-1-2-6").show();
                    row1_2[5] = kind;
                    break;
                case "1 2 7":
                    $("#CA-1-2-7").show();
                    row1_2[6] = kind;
                    break;
                case "1 3 1":
                    $("#CA-1-3-1").show();
                    row1_3[0] = kind;
                    break;
                case "1 3 2":
                    $("#CA-1-3-2").show();
                    row1_3[1] = kind;
                    break;
                case "1 3 3":
                    $("#CA-1-3-3").show();
                    row1_3[2] = kind;
                    break;
                case "1 3 4":
                    $("#CA-1-3-4").show();
                    row1_3[3] = kind;
                    break;
                case "1 3 5":
                    $("#CA-1-3-5").show();
                    row1_3[4] = kind;
                    break;
                case "1 3 6":
                    $("#CA-1-3-6").show();
                    row1_3[5] = kind;
                    break;
                case "1 3 7":
                    $("#CA-1-3-7").show();
                    row1_3[6] = kind;
                    break;
                case "1 4 1":
                    $("#CA-1-4-1").show();
                    row1_4[0] = kind;
                    break;
                case "1 4 2":
                    $("#CA-1-4-2").show();
                    row1_4[1] = kind;
                    break;
                case "1 4 3":
                    $("#CA-1-4-3").show();
                    row1_4[2] = kind;
                    break;
                case "1 4 4":
                    $("#CA-1-4-4").show();
                    row1_4[3] = kind;
                    break;
                case "1 4 5":
                    $("#CA-1-4-5").show();
                    row1_4[4] = kind;
                    break;
                case "1 4 6":
                    $("#CA-1-4-6").show();
                    row1_4[5] = kind;
                    break;
                case "1 4 7":
                    $("#CA-1-4-7").show();
                    row1_4[6] = kind;
                    break;
                case "1 5 1":
                    $("#CA-1-5-1").show();
                    row1_5[0] = kind;
                    break;
                case "1 5 2":
                    $("#CA-1-5-2").show();
                    row1_5[1] = kind;
                    break;
                case "1 5 3":
                    $("#CA-1-5-3").show();
                    row1_5[2] = kind;
                    break;
                case "1 5 4":
                    $("#CA-1-5-4").show();
                    row1_5[3] = kind;
                    break;
                case "1 5 5":
                    $("#CA-1-5-5").show();
                    row1_5[4] = kind;
                    break;
                case "1 5 6":
                    $("#CA-1-5-6").show();
                    row1_5[5] = kind;
                    break;
                case "1 5 7":
                    $("#CA-1-5-7").show();
                    row1_5[6] = kind;
                    break;
                case "1 6 1":
                    $("#CA-1-6-1").show();
                    row1_6[0] = kind;
                    break;
                case "1 6 2":
                    $("#CA-1-6-2").show();
                    row1_6[1] = kind;
                    break;
                case "1 6 3":
                    $("#CA-1-6-3").show();
                    row1_6[2] = kind;
                    break;
                case "1 6 4":
                    $("#CA-1-6-4").show();
                    row1_6[3] = kind;
                    break;
                case "1 6 5":
                    $("#CA-1-6-5").show();
                    row1_6[4] = kind;
                    break;
                case "1 6 6":
                    $("#CA-1-6-6").show();
                    row1_6[5] = kind;
                    break;
                case "1 6 7":
                    $("#CA-1-6-7").show();
                    row1_6[6] = kind;
                    break;
                case "1 7 1":
                    $("#CA-1-7-1").show();
                    row1_7[0] = kind;
                    break;
                case "1 7 2":
                    $("#CA-1-7-2").show();
                    row1_7[1] = kind;
                    break;
                case "1 7 3":
                    $("#CA-1-7-3").show();
                    row1_7[2] = kind;
                    break;
                case "1 7 4":
                    $("#CA-1-7-4").show();
                    row1_7[3] = kind;
                    break;
                case "1 7 5":
                    $("#CA-1-7-5").show();
                    row1_7[4] = kind;
                    break;
                case "1 7 6":
                    $("#CA-1-7-6").show();
                    row1_7[5] = kind;
                    break;
                case "1 7 7":
                    $("#CA-1-7-7").show();
                    row1_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#ibuki").hide();
            $("#confirm1-4").show();
            $("#yahagi").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm1-4").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column1[x - 1][y - 1] == 0) {
            var coordinate = 1 + " " + x + " " + y;
            var kind = 4;
            switch (coordinate) {
                case "1 1 1":
                    $("#CL-1-1-1").show();
                    row1_1[0] = kind;
                    break;
                case "1 1 2":
                    $("#CL-1-1-2").show();
                    row1_1[1] = kind;
                    break;
                case "1 1 3":
                    $("#CL-1-1-3").show();
                    row1_1[2] = kind;
                    break;
                case "1 1 4":
                    $("#CL-1-1-4").show();
                    row1_1[3] = kind;
                    break;
                case "1 1 5":
                    $("#CL-1-1-5").show();
                    row1_1[4] = kind;
                    break;
                case "1 1 6":
                    $("#CL-1-1-6").show();
                    row1_1[5] = kind;
                    break;
                case "1 1 7":
                    $("#CL-1-1-7").show();
                    row1_1[6] = kind;
                    break;
                case "1 2 1":
                    $("#CL-1-2-1").show();
                    row1_2[0] = kind;
                    break;
                case "1 2 2":
                    $("#CL-1-2-2").show();
                    row1_2[1] = kind;
                    break;
                case "1 2 3":
                    $("#CL-1-2-3").show();
                    row1_2[2] = kind;
                    break;
                case "1 2 4":
                    $("#CL-1-2-4").show();
                    row1_2[3] = kind;
                    break;
                case "1 2 5":
                    $("#CL-1-2-5").show();
                    row1_2[4] = kind;
                    break;
                case "1 2 6":
                    $("#CL-1-2-6").show();
                    row1_2[5] = kind;
                    break;
                case "1 2 7":
                    $("#CL-1-2-7").show();
                    row1_2[6] = kind;
                    break;
                case "1 3 1":
                    $("#CL-1-3-1").show();
                    row1_3[0] = kind;
                    break;
                case "1 3 2":
                    $("#CL-1-3-2").show();
                    row1_3[1] = kind;
                    break;
                case "1 3 3":
                    $("#CL-1-3-3").show();
                    row1_3[2] = kind;
                    break;
                case "1 3 4":
                    $("#CL-1-3-4").show();
                    row1_3[3] = kind;
                    break;
                case "1 3 5":
                    $("#CL-1-3-5").show();
                    row1_3[4] = kind;
                    break;
                case "1 3 6":
                    $("#CL-1-3-6").show();
                    row1_3[5] = kind;
                    break;
                case "1 3 7":
                    $("#CL-1-3-7").show();
                    row1_3[6] = kind;
                    break;
                case "1 4 1":
                    $("#CL-1-4-1").show();
                    row1_4[0] = kind;
                    break;
                case "1 4 2":
                    $("#CL-1-4-2").show();
                    row1_4[1] = kind;
                    break;
                case "1 4 3":
                    $("#CL-1-4-3").show();
                    row1_4[2] = kind;
                    break;
                case "1 4 4":
                    $("#CL-1-4-4").show();
                    row1_4[3] = kind;
                    break;
                case "1 4 5":
                    $("#CL-1-4-5").show();
                    row1_4[4] = kind;
                    break;
                case "1 4 6":
                    $("#CL-1-4-6").show();
                    row1_4[5] = kind;
                    break;
                case "1 4 7":
                    $("#CL-1-4-7").show();
                    row1_4[6] = kind;
                    break;
                case "1 5 1":
                    $("#CL-1-5-1").show();
                    row1_5[0] = kind;
                    break;
                case "1 5 2":
                    $("#CL-1-5-2").show();
                    row1_5[1] = kind;
                    break;
                case "1 5 3":
                    $("#CL-1-5-3").show();
                    row1_5[2] = kind;
                    break;
                case "1 5 4":
                    $("#CL-1-5-4").show();
                    row1_5[3] = kind;
                    break;
                case "1 5 5":
                    $("#CL-1-5-5").show();
                    row1_5[4] = kind;
                    break;
                case "1 5 6":
                    $("#CL-1-5-6").show();
                    row1_5[5] = kind;
                    break;
                case "1 5 7":
                    $("#CL-1-5-7").show();
                    row1_5[6] = kind;
                    break;
                case "1 6 1":
                    $("#CL-1-6-1").show();
                    row1_6[0] = kind;
                    break;
                case "1 6 2":
                    $("#CL-1-6-2").show();
                    row1_6[1] = kind;
                    break;
                case "1 6 3":
                    $("#CL-1-6-3").show();
                    row1_6[2] = kind;
                    break;
                case "1 6 4":
                    $("#CL-1-6-4").show();
                    row1_6[3] = kind;
                    break;
                case "1 6 5":
                    $("#CL-1-6-5").show();
                    row1_6[4] = kind;
                    break;
                case "1 6 6":
                    $("#CL-1-6-6").show();
                    row1_6[5] = kind;
                    break;
                case "1 6 7":
                    $("#CL-1-6-7").show();
                    row1_6[6] = kind;
                    break;
                case "1 7 1":
                    $("#CL-1-7-1").show();
                    row1_7[0] = kind;
                    break;
                case "1 7 2":
                    $("#CL-1-7-2").show();
                    row1_7[1] = kind;
                    break;
                case "1 7 3":
                    $("#CL-1-7-3").show();
                    row1_7[2] = kind;
                    break;
                case "1 7 4":
                    $("#CL-1-7-4").show();
                    row1_7[3] = kind;
                    break;
                case "1 7 5":
                    $("#CL-1-7-5").show();
                    row1_7[4] = kind;
                    break;
                case "1 7 6":
                    $("#CL-1-7-6").show();
                    row1_7[5] = kind;
                    break;
                case "1 7 7":
                    $("#CL-1-7-7").show();
                    row1_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#yahagi").hide();
            $("#confirm1-5").show();
            $("#shimakaze").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm1-5").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column1[x - 1][y - 1] == 0) {
            var coordinate = 1 + " " + x + " " + y;
            var kind = 5;
            switch (coordinate) {
                case "1 1 1":
                    $("#DD-1-1-1").show();
                    row1_1[0] = kind;
                    break;
                case "1 1 2":
                    $("#DD-1-1-2").show();
                    row1_1[1] = kind;
                    break;
                case "1 1 3":
                    $("#DD-1-1-3").show();
                    row1_1[2] = kind;
                    break;
                case "1 1 4":
                    $("#DD-1-1-4").show();
                    row1_1[3] = kind;
                    break;
                case "1 1 5":
                    $("#DD-1-1-5").show();
                    row1_1[4] = kind;
                    break;
                case "1 1 6":
                    $("#DD-1-1-6").show();
                    row1_1[5] = kind;
                    break;
                case "1 1 7":
                    $("#DD-1-1-7").show();
                    row1_1[6] = kind;
                    break;
                case "1 2 1":
                    $("#DD-1-2-1").show();
                    row1_2[0] = kind;
                    break;
                case "1 2 2":
                    $("#DD-1-2-2").show();
                    row1_2[1] = kind;
                    break;
                case "1 2 3":
                    $("#DD-1-2-3").show();
                    row1_2[2] = kind;
                    break;
                case "1 2 4":
                    $("#DD-1-2-4").show();
                    row1_2[3] = kind;
                    break;
                case "1 2 5":
                    $("#DD-1-2-5").show();
                    row1_2[4] = kind;
                    break;
                case "1 2 6":
                    $("#DD-1-2-6").show();
                    row1_2[5] = kind;
                    break;
                case "1 2 7":
                    $("#DD-1-2-7").show();
                    row1_2[6] = kind;
                    break;
                case "1 3 1":
                    $("#DD-1-3-1").show();
                    row1_3[0] = kind;
                    break;
                case "1 3 2":
                    $("#DD-1-3-2").show();
                    row1_3[1] = kind;
                    break;
                case "1 3 3":
                    $("#DD-1-3-3").show();
                    row1_3[2] = kind;
                    break;
                case "1 3 4":
                    $("#DD-1-3-4").show();
                    row1_3[3] = kind;
                    break;
                case "1 3 5":
                    $("#DD-1-3-5").show();
                    row1_3[4] = kind;
                    break;
                case "1 3 6":
                    $("#DD-1-3-6").show();
                    row1_3[5] = kind;
                    break;
                case "1 3 7":
                    $("#DD-1-3-7").show();
                    row1_3[6] = kind;
                    break;
                case "1 4 1":
                    $("#DD-1-4-1").show();
                    row1_4[0] = kind;
                    break;
                case "1 4 2":
                    $("#DD-1-4-2").show();
                    row1_4[1] = kind;
                    break;
                case "1 4 3":
                    $("#DD-1-4-3").show();
                    row1_4[2] = kind;
                    break;
                case "1 4 4":
                    $("#DD-1-4-4").show();
                    row1_4[3] = kind;
                    break;
                case "1 4 5":
                    $("#DD-1-4-5").show();
                    row1_4[4] = kind;
                    break;
                case "1 4 6":
                    $("#DD-1-4-6").show();
                    row1_4[5] = kind;
                    break;
                case "1 4 7":
                    $("#DD-1-4-7").show();
                    row1_4[6] = kind;
                    break;
                case "1 5 1":
                    $("#DD-1-5-1").show();
                    row1_5[0] = kind;
                    break;
                case "1 5 2":
                    $("#DD-1-5-2").show();
                    row1_5[1] = kind;
                    break;
                case "1 5 3":
                    $("#DD-1-5-3").show();
                    row1_5[2] = kind;
                    break;
                case "1 5 4":
                    $("#DD-1-5-4").show();
                    row1_5[3] = kind;
                    break;
                case "1 5 5":
                    $("#DD-1-5-5").show();
                    row1_5[4] = kind;
                    break;
                case "1 5 6":
                    $("#DD-1-5-6").show();
                    row1_5[5] = kind;
                    break;
                case "1 5 7":
                    $("#DD-1-5-7").show();
                    row1_5[6] = kind;
                    break;
                case "1 6 1":
                    $("#DD-1-6-1").show();
                    row1_6[0] = kind;
                    break;
                case "1 6 2":
                    $("#DD-1-6-2").show();
                    row1_6[1] = kind;
                    break;
                case "1 6 3":
                    $("#DD-1-6-3").show();
                    row1_6[2] = kind;
                    break;
                case "1 6 4":
                    $("#DD-1-6-4").show();
                    row1_6[3] = kind;
                    break;
                case "1 6 5":
                    $("#DD-1-6-5").show();
                    row1_6[4] = kind;
                    break;
                case "1 6 6":
                    $("#DD-1-6-6").show();
                    row1_6[5] = kind;
                    break;
                case "1 6 7":
                    $("#DD-1-6-7").show();
                    row1_6[6] = kind;
                    break;
                case "1 7 1":
                    $("#DD-1-7-1").show();
                    row1_7[0] = kind;
                    break;
                case "1 7 2":
                    $("#DD-1-7-2").show();
                    row1_7[1] = kind;
                    break;
                case "1 7 3":
                    $("#DD-1-7-3").show();
                    row1_7[2] = kind;
                    break;
                case "1 7 4":
                    $("#DD-1-7-4").show();
                    row1_7[3] = kind;
                    break;
                case "1 7 5":
                    $("#DD-1-7-5").show();
                    row1_7[4] = kind;
                    break;
                case "1 7 6":
                    $("#DD-1-7-6").show();
                    row1_7[5] = kind;
                    break;
                case "1 7 7":
                    $("#DD-1-7-7").show();
                    row1_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#shimakaze").hide();
            $("#confirm1-6").show();
            $("#akizuki").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm1-6").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column1[x - 1][y - 1] == 0) {
            var coordinate = 1 + " " + x + " " + y;
            var kind = 6;
            switch (coordinate) {
                case "1 1 1":
                    $("#DE-1-1-1").show();
                    row1_1[0] = kind;
                    break;
                case "1 1 2":
                    $("#DE-1-1-2").show();
                    row1_1[1] = kind;
                    break;
                case "1 1 3":
                    $("#DE-1-1-3").show();
                    row1_1[2] = kind;
                    break;
                case "1 1 4":
                    $("#DE-1-1-4").show();
                    row1_1[3] = kind;
                    break;
                case "1 1 5":
                    $("#DE-1-1-5").show();
                    row1_1[4] = kind;
                    break;
                case "1 1 6":
                    $("#DE-1-1-6").show();
                    row1_1[5] = kind;
                    break;
                case "1 1 7":
                    $("#DE-1-1-7").show();
                    row1_1[6] = kind;
                    break;
                case "1 2 1":
                    $("#DE-1-2-1").show();
                    row1_2[0] = kind;
                    break;
                case "1 2 2":
                    $("#DE-1-2-2").show();
                    row1_2[1] = kind;
                    break;
                case "1 2 3":
                    $("#DE-1-2-3").show();
                    row1_2[2] = kind;
                    break;
                case "1 2 4":
                    $("#DE-1-2-4").show();
                    row1_2[3] = kind;
                    break;
                case "1 2 5":
                    $("#DE-1-2-5").show();
                    row1_2[4] = kind;
                    break;
                case "1 2 6":
                    $("#DE-1-2-6").show();
                    row1_2[5] = kind;
                    break;
                case "1 2 7":
                    $("#DE-1-2-7").show();
                    row1_2[6] = kind;
                    break;
                case "1 3 1":
                    $("#DE-1-3-1").show();
                    row1_3[0] = kind;
                    break;
                case "1 3 2":
                    $("#DE-1-3-2").show();
                    row1_3[1] = kind;
                    break;
                case "1 3 3":
                    $("#DE-1-3-3").show();
                    row1_3[2] = kind;
                    break;
                case "1 3 4":
                    $("#DE-1-3-4").show();
                    row1_3[3] = kind;
                    break;
                case "1 3 5":
                    $("#DE-1-3-5").show();
                    row1_3[4] = kind;
                    break;
                case "1 3 6":
                    $("#DE-1-3-6").show();
                    row1_3[5] = kind;
                    break;
                case "1 3 7":
                    $("#DE-1-3-7").show();
                    row1_3[6] = kind;
                    break;
                case "1 4 1":
                    $("#DE-1-4-1").show();
                    row1_4[0] = kind;
                    break;
                case "1 4 2":
                    $("#DE-1-4-2").show();
                    row1_4[1] = kind;
                    break;
                case "1 4 3":
                    $("#DE-1-4-3").show();
                    row1_4[2] = kind;
                    break;
                case "1 4 4":
                    $("#DE-1-4-4").show();
                    row1_4[3] = kind;
                    break;
                case "1 4 5":
                    $("#DE-1-4-5").show();
                    row1_4[4] = kind;
                    break;
                case "1 4 6":
                    $("#DE-1-4-6").show();
                    row1_4[5] = kind;
                    break;
                case "1 4 7":
                    $("#DE-1-4-7").show();
                    row1_4[6] = kind;
                    break;
                case "1 5 1":
                    $("#DE-1-5-1").show();
                    row1_5[0] = kind;
                    break;
                case "1 5 2":
                    $("#DE-1-5-2").show();
                    row1_5[1] = kind;
                    break;
                case "1 5 3":
                    $("#DE-1-5-3").show();
                    row1_5[2] = kind;
                    break;
                case "1 5 4":
                    $("#DE-1-5-4").show();
                    row1_5[3] = kind;
                    break;
                case "1 5 5":
                    $("#DE-1-5-5").show();
                    row1_5[4] = kind;
                    break;
                case "1 5 6":
                    $("#DE-1-5-6").show();
                    row1_5[5] = kind;
                    break;
                case "1 5 7":
                    $("#DE-1-5-7").show();
                    row1_5[6] = kind;
                    break;
                case "1 6 1":
                    $("#DE-1-6-1").show();
                    row1_6[0] = kind;
                    break;
                case "1 6 2":
                    $("#DE-1-6-2").show();
                    row1_6[1] = kind;
                    break;
                case "1 6 3":
                    $("#DE-1-6-3").show();
                    row1_6[2] = kind;
                    break;
                case "1 6 4":
                    $("#DE-1-6-4").show();
                    row1_6[3] = kind;
                    break;
                case "1 6 5":
                    $("#DE-1-6-5").show();
                    row1_6[4] = kind;
                    break;
                case "1 6 6":
                    $("#DE-1-6-6").show();
                    row1_6[5] = kind;
                    break;
                case "1 6 7":
                    $("#DE-1-6-7").show();
                    row1_6[6] = kind;
                    break;
                case "1 7 1":
                    $("#DE-1-7-1").show();
                    row1_7[0] = kind;
                    break;
                case "1 7 2":
                    $("#DE-1-7-2").show();
                    row1_7[1] = kind;
                    break;
                case "1 7 3":
                    $("#DE-1-7-3").show();
                    row1_7[2] = kind;
                    break;
                case "1 7 4":
                    $("#DE-1-7-4").show();
                    row1_7[3] = kind;
                    break;
                case "1 7 5":
                    $("#DE-1-7-5").show();
                    row1_7[4] = kind;
                    break;
                case "1 7 6":
                    $("#DE-1-7-6").show();
                    row1_7[5] = kind;
                    break;
                case "1 7 7":
                    $("#DE-1-7-7").show();
                    row1_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#akizuki").hide();
            $("#confirm1-7").show();
            $("#i-400").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm1-7").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column1[x - 1][y - 1] == 0) {
            var coordinate = 1 + " " + x + " " + y;
            var kind = 7;
            switch (coordinate) {
                case "1 1 1":
                    $("#SS-1-1-1").show();
                    row1_1[0] = kind;
                    break;
                case "1 1 2":
                    $("#SS-1-1-2").show();
                    row1_1[1] = kind;
                    break;
                case "1 1 3":
                    $("#SS-1-1-3").show();
                    row1_1[2] = kind;
                    break;
                case "1 1 4":
                    $("#SS-1-1-4").show();
                    row1_1[3] = kind;
                    break;
                case "1 1 5":
                    $("#SS-1-1-5").show();
                    row1_1[4] = kind;
                    break;
                case "1 1 6":
                    $("#SS-1-1-6").show();
                    row1_1[5] = kind;
                    break;
                case "1 1 7":
                    $("#SS-1-1-7").show();
                    row1_1[6] = kind;
                    break;
                case "1 2 1":
                    $("#SS-1-2-1").show();
                    row1_2[0] = kind;
                    break;
                case "1 2 2":
                    $("#SS-1-2-2").show();
                    row1_2[1] = kind;
                    break;
                case "1 2 3":
                    $("#SS-1-2-3").show();
                    row1_2[2] = kind;
                    break;
                case "1 2 4":
                    $("#SS-1-2-4").show();
                    row1_2[3] = kind;
                    break;
                case "1 2 5":
                    $("#SS-1-2-5").show();
                    row1_2[4] = kind;
                    break;
                case "1 2 6":
                    $("#SS-1-2-6").show();
                    row1_2[5] = kind;
                    break;
                case "1 2 7":
                    $("#SS-1-2-7").show();
                    row1_2[6] = kind;
                    break;
                case "1 3 1":
                    $("#SS-1-3-1").show();
                    row1_3[0] = kind;
                    break;
                case "1 3 2":
                    $("#SS-1-3-2").show();
                    row1_3[1] = kind;
                    break;
                case "1 3 3":
                    $("#SS-1-3-3").show();
                    row1_3[2] = kind;
                    break;
                case "1 3 4":
                    $("#SS-1-3-4").show();
                    row1_3[3] = kind;
                    break;
                case "1 3 5":
                    $("#SS-1-3-5").show();
                    row1_3[4] = kind;
                    break;
                case "1 3 6":
                    $("#SS-1-3-6").show();
                    row1_3[5] = kind;
                    break;
                case "1 3 7":
                    $("#SS-1-3-7").show();
                    row1_3[6] = kind;
                    break;
                case "1 4 1":
                    $("#SS-1-4-1").show();
                    row1_4[0] = kind;
                    break;
                case "1 4 2":
                    $("#SS-1-4-2").show();
                    row1_4[1] = kind;
                    break;
                case "1 4 3":
                    $("#SS-1-4-3").show();
                    row1_4[2] = kind;
                    break;
                case "1 4 4":
                    $("#SS-1-4-4").show();
                    row1_4[3] = kind;
                    break;
                case "1 4 5":
                    $("#SS-1-4-5").show();
                    row1_4[4] = kind;
                    break;
                case "1 4 6":
                    $("#SS-1-4-6").show();
                    row1_4[5] = kind;
                    break;
                case "1 4 7":
                    $("#SS-1-4-7").show();
                    row1_4[6] = kind;
                    break;
                case "1 5 1":
                    $("#SS-1-5-1").show();
                    row1_5[0] = kind;
                    break;
                case "1 5 2":
                    $("#SS-1-5-2").show();
                    row1_5[1] = kind;
                    break;
                case "1 5 3":
                    $("#SS-1-5-3").show();
                    row1_5[2] = kind;
                    break;
                case "1 5 4":
                    $("#SS-1-5-4").show();
                    row1_5[3] = kind;
                    break;
                case "1 5 5":
                    $("#SS-1-5-5").show();
                    row1_5[4] = kind;
                    break;
                case "1 5 6":
                    $("#SS-1-5-6").show();
                    row1_5[5] = kind;
                    break;
                case "1 5 7":
                    $("#SS-1-5-7").show();
                    row1_5[6] = kind;
                    break;
                case "1 6 1":
                    $("#SS-1-6-1").show();
                    row1_6[0] = kind;
                    break;
                case "1 6 2":
                    $("#SS-1-6-2").show();
                    row1_6[1] = kind;
                    break;
                case "1 6 3":
                    $("#SS-1-6-3").show();
                    row1_6[2] = kind;
                    break;
                case "1 6 4":
                    $("#SS-1-6-4").show();
                    row1_6[3] = kind;
                    break;
                case "1 6 5":
                    $("#SS-1-6-5").show();
                    row1_6[4] = kind;
                    break;
                case "1 6 6":
                    $("#SS-1-6-6").show();
                    row1_6[5] = kind;
                    break;
                case "1 6 7":
                    $("#SS-1-6-7").show();
                    row1_6[6] = kind;
                    break;
                case "1 7 1":
                    $("#SS-1-7-1").show();
                    row1_7[0] = kind;
                    break;
                case "1 7 2":
                    $("#SS-1-7-2").show();
                    row1_7[1] = kind;
                    break;
                case "1 7 3":
                    $("#SS-1-7-3").show();
                    row1_7[2] = kind;
                    break;
                case "1 7 4":
                    $("#SS-1-7-4").show();
                    row1_7[3] = kind;
                    break;
                case "1 7 5":
                    $("#SS-1-7-5").show();
                    row1_7[4] = kind;
                    break;
                case "1 7 6":
                    $("#SS-1-7-6").show();
                    row1_7[5] = kind;
                    break;
                case "1 7 7":
                    $("#SS-1-7-7").show();
                    row1_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#i-400").hide();
            $("#player1").hide();
            $("#table1").hide();
            $("#table3").hide();
            $("#confirm2-1").show();
            $("#midway").show();
            $("#player2").show();
            $("#table2").show();
            $("#table4").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm2-1").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = 2 + " " + x + " " + y;
            var kind = 1;
            switch (coordinate) {
                case "2 1 1":
                    $("#CV-2-1-1").show();
                    row2_1[0] = kind;
                    break;
                case "2 1 2":
                    $("#CV-2-1-2").show();
                    row2_1[1] = kind;
                    break;
                case "2 1 3":
                    $("#CV-2-1-3").show();
                    row2_1[2] = kind;
                    break;
                case "2 1 4":
                    $("#CV-2-1-4").show();
                    row2_1[3] = kind;
                    break;
                case "2 1 5":
                    $("#CV-2-1-5").show();
                    row2_1[4] = kind;
                    break;
                case "2 1 6":
                    $("#CV-2-1-6").show();
                    row2_1[5] = kind;
                    break;
                case "2 1 7":
                    $("#CV-2-1-7").show();
                    row2_1[6] = kind;
                    break;
                case "2 2 1":
                    $("#CV-2-2-1").show();
                    row2_2[0] = kind;
                    break;
                case "2 2 2":
                    $("#CV-2-2-2").show();
                    row2_2[1] = kind;
                    break;
                case "2 2 3":
                    $("#CV-2-2-3").show();
                    row2_2[2] = kind;
                    break;
                case "2 2 4":
                    $("#CV-2-2-4").show();
                    row2_2[3] = kind;
                    break;
                case "2 2 5":
                    $("#CV-2-2-5").show();
                    row2_2[4] = kind;
                    break;
                case "2 2 6":
                    $("#CV-2-2-6").show();
                    row2_2[5] = kind;
                    break;
                case "2 2 7":
                    $("#CV-2-2-7").show();
                    row2_2[6] = kind;
                    break;
                case "2 3 1":
                    $("#CV-2-3-1").show();
                    row2_3[0] = kind;
                    break;
                case "2 3 2":
                    $("#CV-2-3-2").show();
                    row2_3[1] = kind;
                    break;
                case "2 3 3":
                    $("#CV-2-3-3").show();
                    row2_3[2] = kind;
                    break;
                case "2 3 4":
                    $("#CV-2-3-4").show();
                    row2_3[3] = kind;
                    break;
                case "2 3 5":
                    $("#CV-2-3-5").show();
                    row2_3[4] = kind;
                    break;
                case "2 3 6":
                    $("#CV-2-3-6").show();
                    row2_3[5] = kind;
                    break;
                case "2 3 7":
                    $("#CV-2-3-7").show();
                    row2_3[6] = kind;
                    break;
                case "2 4 1":
                    $("#CV-2-4-1").show();
                    row2_4[0] = kind;
                    break;
                case "2 4 2":
                    $("#CV-2-4-2").show();
                    row2_4[1] = kind;
                    break;
                case "2 4 3":
                    $("#CV-2-4-3").show();
                    row2_4[2] = kind;
                    break;
                case "2 4 4":
                    $("#CV-2-4-4").show();
                    row2_4[3] = kind;
                    break;
                case "2 4 5":
                    $("#CV-2-4-5").show();
                    row2_4[4] = kind;
                    break;
                case "2 4 6":
                    $("#CV-2-4-6").show();
                    row2_4[5] = kind;
                    break;
                case "2 4 7":
                    $("#CV-2-4-7").show();
                    row2_4[6] = kind;
                    break;
                case "2 5 1":
                    $("#CV-2-5-1").show();
                    row2_5[0] = kind;
                    break;
                case "2 5 2":
                    $("#CV-2-5-2").show();
                    row2_5[1] = kind;
                    break;
                case "2 5 3":
                    $("#CV-2-5-3").show();
                    row2_5[2] = kind;
                    break;
                case "2 5 4":
                    $("#CV-2-5-4").show();
                    row2_5[3] = kind;
                    break;
                case "2 5 5":
                    $("#CV--5-5").show();
                    row2_5[4] = kind;
                    break;
                case "2 5 6":
                    $("#CV-2-5-6").show();
                    row2_5[5] = kind;
                    break;
                case "2 5 7":
                    $("#CV-2-5-7").show();
                    row2_5[6] = kind;
                    break;
                case "2 6 1":
                    $("#CV-2-6-1").show();
                    row2_6[0] = kind;
                    break;
                case "2 6 2":
                    $("#CV-2-6-2").show();
                    row2_6[1] = kind;
                    break;
                case "2 6 3":
                    $("#CV-2-6-3").show();
                    row2_6[2] = kind;
                    break;
                case "2 6 4":
                    $("#CV-2-6-4").show();
                    row2_6[3] = kind;
                    break;
                case "2 6 5":
                    $("#CV-2-6-5").show();
                    row2_6[4] = kind;
                    break;
                case "2 6 6":
                    $("#CV-2-6-6").show();
                    row2_6[5] = kind;
                    break;
                case "2 6 7":
                    $("#CV-2-6-7").show();
                    row2_6[6] = kind;
                    break;
                case "2 7 1":
                    $("#CV-2-7-1").show();
                    row2_7[0] = kind;
                    break;
                case "2 7 2":
                    $("#CV-2-7-2").show();
                    row2_7[1] = kind;
                    break;
                case "2 7 3":
                    $("#CV-2-7-3").show();
                    row2_7[2] = kind;
                    break;
                case "2 7 4":
                    $("#CV-2-7-4").show();
                    row2_7[3] = kind;
                    break;
                case "2 7 5":
                    $("#CV-2-7-5").show();
                    row2_7[4] = kind;
                    break;
                case "2 7 6":
                    $("#CV-2-7-6").show();
                    row2_7[5] = kind;
                    break;
                case "2 7 7":
                    $("#CV-2-7-7").show();
                    row2_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#midway").hide();
            $("#confirm2-2").show();
            $("#saipan").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm2-2").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column2[x - 1][y - 1] == 0) {
            var coordinate = 2 + " " + x + " " + y;
            var kind = 2;
            switch (coordinate) {
                case "2 1 1":
                    $("#CVL-2-1-1").show();
                    row2_1[0] = kind;
                    break;
                case "2 1 2":
                    $("#CVL-2-1-2").show();
                    row2_1[1] = kind;
                    break;
                case "2 1 3":
                    $("#CVL-2-1-3").show();
                    row2_1[2] = kind;
                    break;
                case "2 1 4":
                    $("#CVL-2-1-4").show();
                    row2_1[3] = kind;
                    break;
                case "2 1 5":
                    $("#CVL-2-1-5").show();
                    row2_1[4] = kind;
                    break;
                case "2 1 6":
                    $("#CVL-2-1-6").show();
                    row2_1[5] = kind;
                    break;
                case "2 1 7":
                    $("#CVL-2-1-7").show();
                    row2_1[6] = kind;
                    break;
                case "2 2 1":
                    $("#CVL-2-2-1").show();
                    row2_2[0] = kind;
                    break;
                case "2 2 2":
                    $("#CVL-2-2-2").show();
                    row2_2[1] = kind;
                    break;
                case "2 2 3":
                    $("#CVL-2-2-3").show();
                    row2_2[2] = kind;
                    break;
                case "2 2 4":
                    $("#CVL-2-2-4").show();
                    row2_2[3] = kind;
                    break;
                case "2 2 5":
                    $("#CVL-2-2-5").show();
                    row2_2[4] = kind;
                    break;
                case "2 2 6":
                    $("#CVL-2-2-6").show();
                    row2_2[5] = kind;
                    break;
                case "2 2 7":
                    $("#CVL-2-2-7").show();
                    row2_2[6] = kind;
                    break;
                case "2 3 1":
                    $("#CVL-2-3-1").show();
                    row2_3[0] = kind;
                    break;
                case "2 3 2":
                    $("#CVL-2-3-2").show();
                    row_3[1] = kind;
                    break;
                case "2 3 3":
                    $("#CVL-2-3-3").show();
                    row2_3[2] = kind;
                    break;
                case "2 3 4":
                    $("#CVL-2-3-4").show();
                    row2_3[3] = kind;
                    break;
                case "2 3 5":
                    $("#CVL-2-3-5").show();
                    row2_3[4] = kind;
                    break;
                case "2 3 6":
                    $("#CVL-2-3-6").show();
                    row2_3[5] = kind;
                    break;
                case "2 3 7":
                    $("#CVL-2-3-7").show();
                    row2_3[6] = kind;
                    break;
                case "2 4 1":
                    $("#CVL-2-4-1").show();
                    row2_4[0] = kind;
                    break;
                case "2 4 2":
                    $("#CVL-2-4-2").show();
                    row2_4[1] = kind;
                    break;
                case "2 4 3":
                    $("#CVL-2-4-3").show();
                    row2_4[2] = kind;
                    break;
                case "2 4 4":
                    $("#CVL-2-4-4").show();
                    row2_4[3] = kind;
                    break;
                case "2 4 5":
                    $("#CVL-2-4-5").show();
                    row2_4[4] = kind;
                    break;
                case "2 4 6":
                    $("#CVL-2-4-6").show();
                    row2_4[5] = kind;
                    break;
                case "2 4 7":
                    $("#CVL-2-4-7").show();
                    row2_4[6] = kind;
                    break;
                case "2 5 1":
                    $("#CVL-2-5-1").show();
                    row2_5[0] = kind;
                    break;
                case "2 5 2":
                    $("#CVL_2-5-2").show();
                    row2_5[1] = kind;
                    break;
                case "2 5 3":
                    $("#CVL-2-5-3").show();
                    row2_5[2] = kind;
                    break;
                case "2 5 4":
                    $("#CVL-2-5-4").show();
                    row2_5[3] = kind;
                    break;
                case "2 5 5":
                    $("#CVL-2-5-5").show();
                    row2_5[4] = kind;
                    break;
                case "2 5 6":
                    $("#CVL-2-5-6").show();
                    row2_5[5] = kind;
                    break;
                case "2 5 7":
                    $("#CVL-2-5-7").show();
                    row2_5[6] = kind;
                    break;
                case "2 6 1":
                    $("#CVL-2-6-1").show();
                    row2_6[0] = kind;
                    break;
                case "2 6 2":
                    $("#CVL-2-6-2").show();
                    row2_6[1] = kind;
                    break;
                case "2 6 3":
                    $("#CVL-2-6-3").show();
                    row2_6[2] = kind;
                    break;
                case "2 6 4":
                    $("#CVL-2-6-4").show();
                    row2_6[3] = kind;
                    break;
                case "2 6 5":
                    $("#CVL-2-6-5").show();
                    row2_6[4] = kind;
                    break;
                case "2 6 6":
                    $("#CVL-2-6-6").show();
                    row2_6[5] = kind;
                    break;
                case "2 6 7":
                    $("#CVL-2-6-7").show();
                    row2_6[6] = kind;
                    break;
                case "2 7 1":
                    $("#CVL-2-7-1").show();
                    row2_7[0] = kind;
                    break;
                case "2 7 2":
                    $("#CVL-2-7-2").show();
                    row2_7[1] = kind;
                    break;
                case "2 7 3":
                    $("#CVL-2-7-3").show();
                    row2_7[2] = kind;
                    break;
                case "2 7 4":
                    $("#CVL-2-7-4").show();
                    row2_7[3] = kind;
                    break;
                case "2 7 5":
                    $("#CVL-2-7-5").show();
                    row2_7[4] = kind;
                    break;
                case "2 7 6":
                    $("#CVL-2-7-6").show();
                    row2_7[5] = kind;
                    break;
                case "2 7 7":
                    $("#CVL-2-7-7").show();
                    row2_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#saipan").hide();
            $("#confirm2-3").show();
            $("#iowa").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm2-3").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column2[x - 1][y - 1] == 0) {
            var coordinate = 2 + " " + x + " " + y;
            var kind = 3;
            switch (coordinate) {
                case "2 1 1":
                    $("#BB-2-1-1").show();
                    row2_1[0] = kind;
                    break;
                case "2 1 2":
                    $("#BB-2-1-2").show();
                    row2_1[1] = kind;
                    break;
                case "2 1 3":
                    $("#BB-2-1-3").show();
                    row2_1[2] = kind;
                    break;
                case "2 1 4":
                    $("#BB-2-1-4").show();
                    row2_1[3] = kind;
                    break;
                case "2 1 5":
                    $("#BB-2-1-5").show();
                    row2_1[4] = kind;
                    break;
                case "2 1 6":
                    $("#BB-2-1-6").show();
                    row2_1[5] = kind;
                    break;
                case "2 1 7":
                    $("#BB-2-1-7").show();
                    row2_1[6] = kind;
                    break;
                case "2 2 1":
                    $("#BB-2-2-1").show();
                    row2_2[0] = kind;
                    break;
                case "2 2 2":
                    $("#BB-2-2-2").show();
                    row2_2[1] = kind;
                    break;
                case "2 2 3":
                    $("#BB-2-2-3").show();
                    row2_2[2] = kind;
                    break;
                case "2 2 4":
                    $("#BB-2-2-4").show();
                    row2_2[3] = kind;
                    break;
                case "2 2 5":
                    $("#BB-2-2-5").show();
                    row2_2[4] = kind;
                    break;
                case "2 2 6":
                    $("#BB-2-2-6").show();
                    row2_2[5] = kind;
                    break;
                case "2 2 7":
                    $("#BB-2-2-7").show();
                    row2_2[6] = kind;
                    break;
                case "2 3 1":
                    $("#BB-2-3-1").show();
                    row2_3[0] = kind;
                    break;
                case "2 3 2":
                    $("#BB-2-3-2").show();
                    row_3[1] = kind;
                    break;
                case "2 3 3":
                    $("#BB-2-3-3").show();
                    row2_3[2] = kind;
                    break;
                case "2 3 4":
                    $("#BB-2-3-4").show();
                    row2_3[3] = kind;
                    break;
                case "2 3 5":
                    $("#BB-2-3-5").show();
                    row2_3[4] = kind;
                    break;
                case "2 3 6":
                    $("#BB-2-3-6").show();
                    row2_3[5] = kind;
                    break;
                case "2 3 7":
                    $("#BB-2-3-7").show();
                    row2_3[6] = kind;
                    break;
                case "2 4 1":
                    $("#BB-2-4-1").show();
                    row2_4[0] = kind;
                    break;
                case "2 4 2":
                    $("#BB-2-4-2").show();
                    row2_4[1] = kind;
                    break;
                case "2 4 3":
                    $("#BB-2-4-3").show();
                    row2_4[2] = kind;
                    break;
                case "2 4 4":
                    $("#BB-2-4-4").show();
                    row2_4[3] = kind;
                    break;
                case "2 4 5":
                    $("#BB-2-4-5").show();
                    row2_4[4] = kind;
                    break;
                case "2 4 6":
                    $("#BB-2-4-6").show();
                    row2_4[5] = kind;
                    break;
                case "2 4 7":
                    $("#BB-2-4-7").show();
                    row2_4[6] = kind;
                    break;
                case "2 5 1":
                    $("#BB-2-5-1").show();
                    row2_5[0] = kind;
                    break;
                case "2 5 2":
                    $("#BB_2-5-2").show();
                    row2_5[1] = kind;
                    break;
                case "2 5 3":
                    $("#BB-2-5-3").show();
                    row2_5[2] = kind;
                    break;
                case "2 5 4":
                    $("#BB-2-5-4").show();
                    row2_5[3] = kind;
                    break;
                case "2 5 5":
                    $("#BB-2-5-5").show();
                    row2_5[4] = kind;
                    break;
                case "2 5 6":
                    $("#BB-2-5-6").show();
                    row2_5[5] = kind;
                    break;
                case "2 5 7":
                    $("#BB-2-5-7").show();
                    row2_5[6] = kind;
                    break;
                case "2 6 1":
                    $("#BB-2-6-1").show();
                    row2_6[0] = kind;
                    break;
                case "2 6 2":
                    $("#BB-2-6-2").show();
                    row2_6[1] = kind;
                    break;
                case "2 6 3":
                    $("#BB-2-6-3").show();
                    row2_6[2] = kind;
                    break;
                case "2 6 4":
                    $("#BB-2-6-4").show();
                    row2_6[3] = kind;
                    break;
                case "2 6 5":
                    $("#BB-2-6-5").show();
                    row2_6[4] = kind;
                    break;
                case "2 6 6":
                    $("#BB-2-6-6").show();
                    row2_6[5] = kind;
                    break;
                case "2 6 7":
                    $("#BB-2-6-7").show();
                    row2_6[6] = kind;
                    break;
                case "2 7 1":
                    $("#BB-2-7-1").show();
                    row2_7[0] = kind;
                    break;
                case "2 7 2":
                    $("#BB-2-7-2").show();
                    row2_7[1] = kind;
                    break;
                case "2 7 3":
                    $("#BB-2-7-3").show();
                    row2_7[2] = kind;
                    break;
                case "2 7 4":
                    $("#BB-2-7-4").show();
                    row2_7[3] = kind;
                    break;
                case "2 7 5":
                    $("#BB-2-7-5").show();
                    row2_7[4] = kind;
                    break;
                case "2 7 6":
                    $("#BB-2-7-6").show();
                    row2_7[5] = kind;
                    break;
                case "2 7 7":
                    $("#BB-2-7-7").show();
                    row2_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#iowa").hide();
            $("#confirm2-4").show();
            $("#baltimore").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm2-4").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column2[x - 1][y - 1] == 0) {
            var coordinate = 2 + " " + x + " " + y;
            var kind = 4;
            switch (coordinate) {
                case "2 1 1":
                    $("#CA-2-1-1").show();
                    row2_1[0] = kind;
                    break;
                case "2 1 2":
                    $("#CA-2-1-2").show();
                    row2_1[1] = kind;
                    break;
                case "2 1 3":
                    $("#CA-2-1-3").show();
                    row2_1[2] = kind;
                    break;
                case "2 1 4":
                    $("#CA-2-1-4").show();
                    row2_1[3] = kind;
                    break;
                case "2 1 5":
                    $("#CA-2-1-5").show();
                    row2_1[4] = kind;
                    break;
                case "2 1 6":
                    $("#CA-2-1-6").show();
                    row2_1[5] = kind;
                    break;
                case "2 1 7":
                    $("#CA-2-1-7").show();
                    row2_1[6] = kind;
                    break;
                case "2 2 1":
                    $("#CA-2-2-1").show();
                    row2_2[0] = kind;
                    break;
                case "2 2 2":
                    $("#CA-2-2-2").show();
                    row2_2[1] = kind;
                    break;
                case "2 2 3":
                    $("#CA-2-2-3").show();
                    row2_2[2] = kind;
                    break;
                case "2 2 4":
                    $("#CA-2-2-4").show();
                    row2_2[3] = kind;
                    break;
                case "2 2 5":
                    $("#CA-2-2-5").show();
                    row2_2[4] = kind;
                    break;
                case "2 2 6":
                    $("#CA-2-2-6").show();
                    row2_2[5] = kind;
                    break;
                case "2 2 7":
                    $("#CA-2-2-7").show();
                    row2_2[6] = kind;
                    break;
                case "2 3 1":
                    $("#CA-2-3-1").show();
                    row2_3[0] = kind;
                    break;
                case "2 3 2":
                    $("#CA-2-3-2").show();
                    row_3[1] = kind;
                    break;
                case "2 3 3":
                    $("#CA-2-3-3").show();
                    row2_3[2] = kind;
                    break;
                case "2 3 4":
                    $("#CA-2-3-4").show();
                    row2_3[3] = kind;
                    break;
                case "2 3 5":
                    $("#CA-2-3-5").show();
                    row2_3[4] = kind;
                    break;
                case "2 3 6":
                    $("#CA-2-3-6").show();
                    row2_3[5] = kind;
                    break;
                case "2 3 7":
                    $("#CA-2-3-7").show();
                    row2_3[6] = kind;
                    break;
                case "2 4 1":
                    $("#CA-2-4-1").show();
                    row2_4[0] = kind;
                    break;
                case "2 4 2":
                    $("#CA-2-4-2").show();
                    row2_4[1] = kind;
                    break;
                case "2 4 3":
                    $("#CA-2-4-3").show();
                    row2_4[2] = kind;
                    break;
                case "2 4 4":
                    $("#CA-2-4-4").show();
                    row2_4[3] = kind;
                    break;
                case "2 4 5":
                    $("#CA-2-4-5").show();
                    row2_4[4] = kind;
                    break;
                case "2 4 6":
                    $("#CA-2-4-6").show();
                    row2_4[5] = kind;
                    break;
                case "2 4 7":
                    $("#CA-2-4-7").show();
                    row2_4[6] = kind;
                    break;
                case "2 5 1":
                    $("#CA-2-5-1").show();
                    row2_5[0] = kind;
                    break;
                case "2 5 2":
                    $("#CA_2-5-2").show();
                    row2_5[1] = kind;
                    break;
                case "2 5 3":
                    $("#CA-2-5-3").show();
                    row2_5[2] = kind;
                    break;
                case "2 5 4":
                    $("#CA-2-5-4").show();
                    row2_5[3] = kind;
                    break;
                case "2 5 5":
                    $("#CA-2-5-5").show();
                    row2_5[4] = kind;
                    break;
                case "2 5 6":
                    $("#CA-2-5-6").show();
                    row2_5[5] = kind;
                    break;
                case "2 5 7":
                    $("#CA-2-5-7").show();
                    row2_5[6] = kind;
                    break;
                case "2 6 1":
                    $("#CA-2-6-1").show();
                    row2_6[0] = kind;
                    break;
                case "2 6 2":
                    $("#CA-2-6-2").show();
                    row2_6[1] = kind;
                    break;
                case "2 6 3":
                    $("#CA-2-6-3").show();
                    row2_6[2] = kind;
                    break;
                case "2 6 4":
                    $("#CA-2-6-4").show();
                    row2_6[3] = kind;
                    break;
                case "2 6 5":
                    $("#CA-2-6-5").show();
                    row2_6[4] = kind;
                    break;
                case "2 6 6":
                    $("#CA-2-6-6").show();
                    row2_6[5] = kind;
                    break;
                case "2 6 7":
                    $("#CA-2-6-7").show();
                    row2_6[6] = kind;
                    break;
                case "2 7 1":
                    $("#CA-2-7-1").show();
                    row2_7[0] = kind;
                    break;
                case "2 7 2":
                    $("#CA-2-7-2").show();
                    row2_7[1] = kind;
                    break;
                case "2 7 3":
                    $("#CA-2-7-3").show();
                    row2_7[2] = kind;
                    break;
                case "2 7 4":
                    $("#CA-2-7-4").show();
                    row2_7[3] = kind;
                    break;
                case "2 7 5":
                    $("#CA-2-7-5").show();
                    row2_7[4] = kind;
                    break;
                case "2 7 6":
                    $("#CA-2-7-6").show();
                    row2_7[5] = kind;
                    break;
                case "2 7 7":
                    $("#CA-2-7-7").show();
                    row2_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#baltimore").hide();
            $("#confirm2-5").show();
            $("#cleveland").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm2-5").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column2[x - 1][y - 1] == 0) {
            var coordinate = 2 + " " + x + " " + y;
            var kind = 5;
            switch (coordinate) {
                case "2 1 1":
                    $("#CL-2-1-1").show();
                    row2_1[0] = kind;
                    break;
                case "2 1 2":
                    $("#CL-2-1-2").show();
                    row2_1[1] = kind;
                    break;
                case "2 1 3":
                    $("#CL-2-1-3").show();
                    row2_1[2] = kind;
                    break;
                case "2 1 4":
                    $("#CL-2-1-4").show();
                    row2_1[3] = kind;
                    break;
                case "2 1 5":
                    $("#CL-2-1-5").show();
                    row2_1[4] = kind;
                    break;
                case "2 1 6":
                    $("#CL-2-1-6").show();
                    row2_1[5] = kind;
                    break;
                case "2 1 7":
                    $("#CL-2-1-7").show();
                    row2_1[6] = kind;
                    break;
                case "2 2 1":
                    $("#CL-2-2-1").show();
                    row2_2[0] = kind;
                    break;
                case "2 2 2":
                    $("#CL-2-2-2").show();
                    row2_2[1] = kind;
                    break;
                case "2 2 3":
                    $("#CL-2-2-3").show();
                    row2_2[2] = kind;
                    break;
                case "2 2 4":
                    $("#CL-2-2-4").show();
                    row2_2[3] = kind;
                    break;
                case "2 2 5":
                    $("#CL-2-2-5").show();
                    row2_2[4] = kind;
                    break;
                case "2 2 6":
                    $("#CL-2-2-6").show();
                    row2_2[5] = kind;
                    break;
                case "2 2 7":
                    $("#CL-2-2-7").show();
                    row2_2[6] = kind;
                    break;
                case "2 3 1":
                    $("#CL-2-3-1").show();
                    row2_3[0] = kind;
                    break;
                case "2 3 2":
                    $("#CL-2-3-2").show();
                    row_3[1] = kind;
                    break;
                case "2 3 3":
                    $("#CL-2-3-3").show();
                    row2_3[2] = kind;
                    break;
                case "2 3 4":
                    $("#CL-2-3-4").show();
                    row2_3[3] = kind;
                    break;
                case "2 3 5":
                    $("#CL-2-3-5").show();
                    row2_3[4] = kind;
                    break;
                case "2 3 6":
                    $("#CL-2-3-6").show();
                    row2_3[5] = kind;
                    break;
                case "2 3 7":
                    $("#CL-2-3-7").show();
                    row2_3[6] = kind;
                    break;
                case "2 4 1":
                    $("#CL-2-4-1").show();
                    row2_4[0] = kind;
                    break;
                case "2 4 2":
                    $("#CL-2-4-2").show();
                    row2_4[1] = kind;
                    break;
                case "2 4 3":
                    $("#CL-2-4-3").show();
                    row2_4[2] = kind;
                    break;
                case "2 4 4":
                    $("#CL-2-4-4").show();
                    row2_4[3] = kind;
                    break;
                case "2 4 5":
                    $("#CL-2-4-5").show();
                    row2_4[4] = kind;
                    break;
                case "2 4 6":
                    $("#CL-2-4-6").show();
                    row2_4[5] = kind;
                    break;
                case "2 4 7":
                    $("#CL-2-4-7").show();
                    row2_4[6] = kind;
                    break;
                case "2 5 1":
                    $("#CL-2-5-1").show();
                    row2_5[0] = kind;
                    break;
                case "2 5 2":
                    $("#CL_2-5-2").show();
                    row2_5[1] = kind;
                    break;
                case "2 5 3":
                    $("#CL-2-5-3").show();
                    row2_5[2] = kind;
                    break;
                case "2 5 4":
                    $("#CL-2-5-4").show();
                    row2_5[3] = kind;
                    break;
                case "2 5 5":
                    $("#CL-2-5-5").show();
                    row2_5[4] = kind;
                    break;
                case "2 5 6":
                    $("#CL-2-5-6").show();
                    row2_5[5] = kind;
                    break;
                case "2 5 7":
                    $("#CL-2-5-7").show();
                    row2_5[6] = kind;
                    break;
                case "2 6 1":
                    $("#CL-2-6-1").show();
                    row2_6[0] = kind;
                    break;
                case "2 6 2":
                    $("#CL-2-6-2").show();
                    row2_6[1] = kind;
                    break;
                case "2 6 3":
                    $("#CL-2-6-3").show();
                    row2_6[2] = kind;
                    break;
                case "2 6 4":
                    $("#CL-2-6-4").show();
                    row2_6[3] = kind;
                    break;
                case "2 6 5":
                    $("#CL-2-6-5").show();
                    row2_6[4] = kind;
                    break;
                case "2 6 6":
                    $("#CL-2-6-6").show();
                    row2_6[5] = kind;
                    break;
                case "2 6 7":
                    $("#CL-2-6-7").show();
                    row2_6[6] = kind;
                    break;
                case "2 7 1":
                    $("#CL-2-7-1").show();
                    row2_7[0] = kind;
                    break;
                case "2 7 2":
                    $("#CL-2-7-2").show();
                    row2_7[1] = kind;
                    break;
                case "2 7 3":
                    $("#CL-2-7-3").show();
                    row2_7[2] = kind;
                    break;
                case "2 7 4":
                    $("#CL-2-7-4").show();
                    row2_7[3] = kind;
                    break;
                case "2 7 5":
                    $("#CL-2-7-5").show();
                    row2_7[4] = kind;
                    break;
                case "2 7 6":
                    $("#CL-2-7-6").show();
                    row2_7[5] = kind;
                    break;
                case "2 7 7":
                    $("#CL-2-7-7").show();
                    row2_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#cleveland").hide();
            $("#confirm2-6").show();
            $("#fletcher").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm2-6").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column2[x - 1][y - 1] == 0) {
            var coordinate = 2 + " " + x + " " + y;
            var kind = 6;
            switch (coordinate) {
                case "2 1 1":
                    $("#DD-2-1-1").show();
                    row2_1[0] = kind;
                    break;
                case "2 1 2":
                    $("#DD-2-1-2").show();
                    row2_1[1] = kind;
                    break;
                case "2 1 3":
                    $("#DD-2-1-3").show();
                    row2_1[2] = kind;
                    break;
                case "2 1 4":
                    $("#DD-2-1-4").show();
                    row2_1[3] = kind;
                    break;
                case "2 1 5":
                    $("#DD-2-1-5").show();
                    row2_1[4] = kind;
                    break;
                case "2 1 6":
                    $("#DD-2-1-6").show();
                    row2_1[5] = kind;
                    break;
                case "2 1 7":
                    $("#DD-2-1-7").show();
                    row2_1[6] = kind;
                    break;
                case "2 2 1":
                    $("#DD-2-2-1").show();
                    row2_2[0] = kind;
                    break;
                case "2 2 2":
                    $("#DD-2-2-2").show();
                    row2_2[1] = kind;
                    break;
                case "2 2 3":
                    $("#DD-2-2-3").show();
                    row2_2[2] = kind;
                    break;
                case "2 2 4":
                    $("#DD-2-2-4").show();
                    row2_2[3] = kind;
                    break;
                case "2 2 5":
                    $("#DD-2-2-5").show();
                    row2_2[4] = kind;
                    break;
                case "2 2 6":
                    $("#DD-2-2-6").show();
                    row2_2[5] = kind;
                    break;
                case "2 2 7":
                    $("#DD-2-2-7").show();
                    row2_2[6] = kind;
                    break;
                case "2 3 1":
                    $("#DD-2-3-1").show();
                    row2_3[0] = kind;
                    break;
                case "2 3 2":
                    $("#DD-2-3-2").show();
                    row_3[1] = kind;
                    break;
                case "2 3 3":
                    $("#DD-2-3-3").show();
                    row2_3[2] = kind;
                    break;
                case "2 3 4":
                    $("#DD-2-3-4").show();
                    row2_3[3] = kind;
                    break;
                case "2 3 5":
                    $("#DD-2-3-5").show();
                    row2_3[4] = kind;
                    break;
                case "2 3 6":
                    $("#DD-2-3-6").show();
                    row2_3[5] = kind;
                    break;
                case "2 3 7":
                    $("#DD-2-3-7").show();
                    row2_3[6] = kind;
                    break;
                case "2 4 1":
                    $("#DD-2-4-1").show();
                    row2_4[0] = kind;
                    break;
                case "2 4 2":
                    $("#DD-2-4-2").show();
                    row2_4[1] = kind;
                    break;
                case "2 4 3":
                    $("#DD-2-4-3").show();
                    row2_4[2] = kind;
                    break;
                case "2 4 4":
                    $("#DD-2-4-4").show();
                    row2_4[3] = kind;
                    break;
                case "2 4 5":
                    $("#DD-2-4-5").show();
                    row2_4[4] = kind;
                    break;
                case "2 4 6":
                    $("#DD-2-4-6").show();
                    row2_4[5] = kind;
                    break;
                case "2 4 7":
                    $("#DD-2-4-7").show();
                    row2_4[6] = kind;
                    break;
                case "2 5 1":
                    $("#DD-2-5-1").show();
                    row2_5[0] = kind;
                    break;
                case "2 5 2":
                    $("#DD_2-5-2").show();
                    row2_5[1] = kind;
                    break;
                case "2 5 3":
                    $("#DD-2-5-3").show();
                    row2_5[2] = kind;
                    break;
                case "2 5 4":
                    $("#DD-2-5-4").show();
                    row2_5[3] = kind;
                    break;
                case "2 5 5":
                    $("#DD-2-5-5").show();
                    row2_5[4] = kind;
                    break;
                case "2 5 6":
                    $("#DD-2-5-6").show();
                    row2_5[5] = kind;
                    break;
                case "2 5 7":
                    $("#DD-2-5-7").show();
                    row2_5[6] = kind;
                    break;
                case "2 6 1":
                    $("#DD-2-6-1").show();
                    row2_6[0] = kind;
                    break;
                case "2 6 2":
                    $("#DD-2-6-2").show();
                    row2_6[1] = kind;
                    break;
                case "2 6 3":
                    $("#DD-2-6-3").show();
                    row2_6[2] = kind;
                    break;
                case "2 6 4":
                    $("#DD-2-6-4").show();
                    row2_6[3] = kind;
                    break;
                case "2 6 5":
                    $("#DD-2-6-5").show();
                    row2_6[4] = kind;
                    break;
                case "2 6 6":
                    $("#DD-2-6-6").show();
                    row2_6[5] = kind;
                    break;
                case "2 6 7":
                    $("#DD-2-6-7").show();
                    row2_6[6] = kind;
                    break;
                case "2 7 1":
                    $("#DD-2-7-1").show();
                    row2_7[0] = kind;
                    break;
                case "2 7 2":
                    $("#DD-2-7-2").show();
                    row2_7[1] = kind;
                    break;
                case "2 7 3":
                    $("#DD-2-7-3").show();
                    row2_7[2] = kind;
                    break;
                case "2 7 4":
                    $("#DD-2-7-4").show();
                    row2_7[3] = kind;
                    break;
                case "2 7 5":
                    $("#DD-2-7-5").show();
                    row2_7[4] = kind;
                    break;
                case "2 7 6":
                    $("#DD-2-7-6").show();
                    row2_7[5] = kind;
                    break;
                case "2 7 7":
                    $("#DD-2-7-7").show();
                    row2_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#fletcher").hide();
            $("#confirm2-7").show();
            $("#balao").show();
        } else {
            alert("輸入有誤");
        }
    });

    $("#confirm2-7").click(function() {
        var x = $('#x1').val()
        var y = $('#y1').val()
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7 && column2[x - 1][y - 1] == 0) {
            var coordinate = 2 + " " + x + " " + y;
            var kind = 7;
            switch (coordinate) {
                case "2 1 1":
                    $("#SS-2-1-1").show();
                    row2_1[0] = kind;
                    break;
                case "2 1 2":
                    $("#SS-2-1-2").show();
                    row2_1[1] = kind;
                    break;
                case "2 1 3":
                    $("#SS-2-1-3").show();
                    row2_1[2] = kind;
                    break;
                case "2 1 4":
                    $("#SS-2-1-4").show();
                    row2_1[3] = kind;
                    break;
                case "2 1 5":
                    $("#SS-2-1-5").show();
                    row2_1[4] = kind;
                    break;
                case "2 1 6":
                    $("#SS-2-1-6").show();
                    row2_1[5] = kind;
                    break;
                case "2 1 7":
                    $("#SS-2-1-7").show();
                    row2_1[6] = kind;
                    break;
                case "2 2 1":
                    $("#SS-2-2-1").show();
                    row2_2[0] = kind;
                    break;
                case "2 2 2":
                    $("#SS-2-2-2").show();
                    row2_2[1] = kind;
                    break;
                case "2 2 3":
                    $("#SS-2-2-3").show();
                    row2_2[2] = kind;
                    break;
                case "2 2 4":
                    $("#SS-2-2-4").show();
                    row2_2[3] = kind;
                    break;
                case "2 2 5":
                    $("#SS-2-2-5").show();
                    row2_2[4] = kind;
                    break;
                case "2 2 6":
                    $("#SS-2-2-6").show();
                    row2_2[5] = kind;
                    break;
                case "2 2 7":
                    $("#SS-2-2-7").show();
                    row2_2[6] = kind;
                    break;
                case "2 3 1":
                    $("#SS-2-3-1").show();
                    row2_3[0] = kind;
                    break;
                case "2 3 2":
                    $("#SS-2-3-2").show();
                    row_3[1] = kind;
                    break;
                case "2 3 3":
                    $("#SS-2-3-3").show();
                    row2_3[2] = kind;
                    break;
                case "2 3 4":
                    $("#SS-2-3-4").show();
                    row2_3[3] = kind;
                    break;
                case "2 3 5":
                    $("#SS-2-3-5").show();
                    row2_3[4] = kind;
                    break;
                case "2 3 6":
                    $("#SS-2-3-6").show();
                    row2_3[5] = kind;
                    break;
                case "2 3 7":
                    $("#SS-2-3-7").show();
                    row2_3[6] = kind;
                    break;
                case "2 4 1":
                    $("#SS-2-4-1").show();
                    row2_4[0] = kind;
                    break;
                case "2 4 2":
                    $("#SS-2-4-2").show();
                    row2_4[1] = kind;
                    break;
                case "2 4 3":
                    $("#SS-2-4-3").show();
                    row2_4[2] = kind;
                    break;
                case "2 4 4":
                    $("#SS-2-4-4").show();
                    row2_4[3] = kind;
                    break;
                case "2 4 5":
                    $("#SS-2-4-5").show();
                    row2_4[4] = kind;
                    break;
                case "2 4 6":
                    $("#SS-2-4-6").show();
                    row2_4[5] = kind;
                    break;
                case "2 4 7":
                    $("#SS-2-4-7").show();
                    row2_4[6] = kind;
                    break;
                case "2 5 1":
                    $("#SS-2-5-1").show();
                    row2_5[0] = kind;
                    break;
                case "2 5 2":
                    $("#SS_2-5-2").show();
                    row2_5[1] = kind;
                    break;
                case "2 5 3":
                    $("#SS-2-5-3").show();
                    row2_5[2] = kind;
                    break;
                case "2 5 4":
                    $("#SS-2-5-4").show();
                    row2_5[3] = kind;
                    break;
                case "2 5 5":
                    $("#SS-2-5-5").show();
                    row2_5[4] = kind;
                    break;
                case "2 5 6":
                    $("#SS-2-5-6").show();
                    row2_5[5] = kind;
                    break;
                case "2 5 7":
                    $("#SS-2-5-7").show();
                    row2_5[6] = kind;
                    break;
                case "2 6 1":
                    $("#SS-2-6-1").show();
                    row2_6[0] = kind;
                    break;
                case "2 6 2":
                    $("#SS-2-6-2").show();
                    row2_6[1] = kind;
                    break;
                case "2 6 3":
                    $("#SS-2-6-3").show();
                    row2_6[2] = kind;
                    break;
                case "2 6 4":
                    $("#SS-2-6-4").show();
                    row2_6[3] = kind;
                    break;
                case "2 6 5":
                    $("#SS-2-6-5").show();
                    row2_6[4] = kind;
                    break;
                case "2 6 6":
                    $("#SS-2-6-6").show();
                    row2_6[5] = kind;
                    break;
                case "2 6 7":
                    $("#SS-2-6-7").show();
                    row2_6[6] = kind;
                    break;
                case "2 7 1":
                    $("#SS-2-7-1").show();
                    row2_7[0] = kind;
                    break;
                case "2 7 2":
                    $("#SS-2-7-2").show();
                    row2_7[1] = kind;
                    break;
                case "2 7 3":
                    $("#SS-2-7-3").show();
                    row2_7[2] = kind;
                    break;
                case "2 7 4":
                    $("#SS-2-7-4").show();
                    row2_7[3] = kind;
                    break;
                case "2 7 5":
                    $("#SS-2-7-5").show();
                    row2_7[4] = kind;
                    break;
                case "2 7 6":
                    $("#SS-2-7-6").show();
                    row2_7[5] = kind;
                    break;
                case "2 7 7":
                    $("#SS-2-7-7").show();
                    row2_7[6] = kind;
                    break;
            }
            $(this).hide();
            $("#balao").hide();
            $("#player2").hide();
            $("#x1").hide();
            $("#y1").hide();
            $("#table4").hide();
            $("#player1").show();
            $("#table3").show();
            $("#finish").show();
            $("#turns").hide();
            $("#placement").hide();
        } else {
            alert("輸入有誤");
        }
    });

    var CV1 = [5, 3],
        BB1 = [7, 3],
        CA1 = [4, 2],
        CL1 = [4, 2],
        DD1 = [2, 1],
        DE1 = [2, 1],
        SS1 = [2, 2],
        CV2 = [5, 3],
        CVL2 = [5, 3],
        BB2 = [7, 3],
        CA2 = [4, 2],
        CL2 = [4, 2],
        DD2 = [2, 1],
        SS2 = [2, 2]

    $("#finish").click(function() {
        $(this).hide();
        $("#turns").show();
        $("#shokaku").show();
        $("#attack").show();
        $("#x2").show();
        $("#y2").show();
        $("#attack1-1").show();
    });

    $("#attack1-1").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column2[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV2[0] = CV2[0] - 3;
                    break;
                case 2:
                    CVL2[0] = CVL2[0] - 3;
                    break;
                case 3:
                    BB2[0] = BB2[0] - 3;
                    break;
                case 4:
                    CA2[0] = CA2[0] - 3;
                    break;
                case 5:
                    CL2[0] = CL2[0] - 3;
                    break;
                case 6:
                    DD2[0] = DD2[0] - 1;
                    break;
                case 7:
                    SS2[0] = SS2[0] - 1;
                    break;
            }
            if (column2[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis2-1-1").show();
                        break;
                    case "1 2":
                        $("#mis2-1-2").show();
                        break;
                    case "1 3":
                        $("#mis2-1-3").show();
                        break;
                    case "1 4":
                        $("#mis2-1-4").show();
                        break;
                    case "1 5":
                        $("#mis2-1-5").show();
                        break;
                    case "1 6":
                        $("#mis2-1-6").show();
                        break;
                    case "1 7":
                        $("#mis2-1-7").show();
                        break;
                    case "2 1":
                        $("#mis2-2-1").show();
                        break;
                    case "2 2":
                        $("#mis2-2-2").show();
                        break;
                    case "2 3":
                        $("#mis2-2-3").show();
                        break;
                    case "2 4":
                        $("#mis2-2-4").show();
                        break;
                    case "2 5":
                        $("#mis2-2-5").show();
                        break;
                    case "2 6":
                        $("#mis2-2-6").show();
                        break;
                    case "2 7":
                        $("#mis2-2-7").show();
                        break;
                    case "3 1":
                        $("#mis2-3-1").show();
                        break;
                    case "3 2":
                        $("#mis2-3-2").show();
                        break;
                    case "3 3":
                        $("#mis2-3-3").show();
                        break;
                    case "3 4":
                        $("#mis2-3-4").show();
                        break;
                    case "3 5":
                        $("#mis2-3-5").show();
                        break;
                    case "3 6":
                        $("#mis2-3-6").show();
                        break;
                    case "3 7":
                        $("#mis2-3-7").show();
                        break;
                    case "4 1":
                        $("#mis2-4-1").show();
                        break;
                    case "4 2":
                        $("#mis2-4-2").show();
                        break;
                    case "4 3":
                        $("#mis2-4-3").show();
                        break;
                    case "4 4":
                        $("#mis2-4-4").show();
                        break;
                    case "4 5":
                        $("#mis2-4-5").show();
                        break;
                    case "4 6":
                        $("#mis2-4-6").show();
                        break;
                    case "4 7":
                        $("#mis2-4-7").show();
                        break;
                    case "5 1":
                        $("#mis2-5-1").show();
                        break;
                    case "5 2":
                        $("#mis2-5-2").show();
                        break;
                    case "5 3":
                        $("#mis2-5-3").show();
                        break;
                    case "5 4":
                        $("#mis2-5-4").show();
                        break;
                    case "5 5":
                        $("#mis2-5-5").show();
                        break;
                    case "5 6":
                        $("#mis2-5-6").show();
                        break;
                    case "5 7":
                        $("#mis2-5-7").show();
                        break;
                    case "6 1":
                        $("#mis2-6-1").show();
                        break;
                    case "6 2":
                        $("#mis2-6-2").show();
                        break;
                    case "6 3":
                        $("#mis2-6-3").show();
                        break;
                    case "6 4":
                        $("#mis2-6-4").show();
                        break;
                    case "6 5":
                        $("#mis2-6-5").show();
                        break;
                    case "6 6":
                        $("#mis2-6-6").show();
                        break;
                    case "6 7":
                        $("#mis2-6-7").show();
                        break;
                    case "7 1":
                        $("#mis2-7-1").show();
                        break;
                    case "7 2":
                        $("#mis2-7-2").show();
                        break;
                    case "7 3":
                        $("#mis2-7-3").show();
                        break;
                    case "7 4":
                        $("#mis2-7-4").show();
                        break;
                    case "7 5":
                        $("#mis2-7-5").show();
                        break;
                    case "7 6":
                        $("#mis2-7-6").show();
                        break;
                    case "7 7":
                        $("#mis2-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit2-1-1").show();
                        break;
                    case "1 2":
                        $("#hit2-1-2").show();
                        break;
                    case "1 3":
                        $("#hit2-1-3").show();
                        break;
                    case "1 4":
                        $("#hit2-1-4").show();
                        break;
                    case "1 5":
                        $("#hit2-1-5").show();
                        break;
                    case "1 6":
                        $("#hit2-1-6").show();
                        break;
                    case "1 7":
                        $("#hit2-1-7").show();
                        break;
                    case "2 1":
                        $("#hit2-2-1").show();
                        break;
                    case "2 2":
                        $("#hit2-2-2").show();
                        break;
                    case "2 3":
                        $("#hit2-2-3").show();
                        break;
                    case "2 4":
                        $("#hit2-2-4").show();
                        break;
                    case "2 5":
                        $("#hit2-2-5").show();
                        break;
                    case "2 6":
                        $("#hit2-2-6").show();
                        break;
                    case "2 7":
                        $("#hit2-2-7").show();
                        break;
                    case "3 1":
                        $("#hit2-3-1").show();
                        break;
                    case "3 2":
                        $("#hit2-3-2").show();
                        break;
                    case "3 3":
                        $("#hit2-3-3").show();
                        break;
                    case "3 4":
                        $("#hit2-3-4").show();
                        break;
                    case "3 5":
                        $("#hit2-3-5").show();
                        break;
                    case "3 6":
                        $("#hit2-3-6").show();
                        break;
                    case "3 7":
                        $("#hit2-3-7").show();
                        break;
                    case "4 1":
                        $("#hit2-4-1").show();
                        break;
                    case "4 2":
                        $("#hit2-4-2").show();
                        break;
                    case "4 3":
                        $("#hit2-4-3").show();
                        break;
                    case "4 4":
                        $("#hit2-4-4").show();
                        break;
                    case "4 5":
                        $("#hit2-4-5").show();
                        break;
                    case "4 6":
                        $("#hit2-4-6").show();
                        break;
                    case "4 7":
                        $("#hit2-4-7").show();
                        break;
                    case "5 1":
                        $("#hit2-5-1").show();
                        break;
                    case "5 2":
                        $("#hit2-5-2").show();
                        break;
                    case "5 3":
                        $("#hit2-5-3").show();
                        break;
                    case "5 4":
                        $("#hit2-5-4").show();
                        break;
                    case "5 5":
                        $("#hit2-5-5").show();
                        break;
                    case "5 6":
                        $("#hit2-5-6").show();
                        break;
                    case "5 7":
                        $("#hit2-5-7").show();
                        break;
                    case "6 1":
                        $("#hit2-6-1").show();
                        break;
                    case "6 2":
                        $("#hit2-6-2").show();
                        break;
                    case "6 3":
                        $("#hit2-6-3").show();
                        break;
                    case "6 4":
                        $("#hit2-6-4").show();
                        break;
                    case "6 5":
                        $("#hit2-6-5").show();
                        break;
                    case "6 6":
                        $("#hit2-6-6").show();
                        break;
                    case "6 7":
                        $("#hit2-6-7").show();
                        break;
                    case "7 1":
                        $("#hit2-7-1").show();
                        break;
                    case "7 2":
                        $("#hit2-7-2").show();
                        break;
                    case "7 3":
                        $("#hit2-7-3").show();
                        break;
                    case "7 4":
                        $("#hit2-7-4").show();
                        break;
                    case "7 5":
                        $("#hit2-7-5").show();
                        break;
                    case "7 6":
                        $("#hit2-7-6").show();
                        break;
                    case "7 7":
                        $("#hit2-7-7").show();
                        break;
                }
            }
            CV1[1] = 0;
            $(this).hide();
            $("#shokaku").hide();
            $("#yamato").show();
            if (BB1[1] == 3 && BB1[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack1-2").show();
            } else {
                BB1[1] = BB1[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove1-2").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove1-1").click(function() {
        $(this).hide();
        $("#shokaku").hide();
        $("#yamato").show();
        if (BB1[1] == 3 && BB1[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack1-2").show();
        } else {
            BB1[1] = BB1[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove1-2").show();
        }
    });

    $("#attack1-2").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column2[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV2[0] = CV2[0] - 4;
                    break;
                case 2:
                    CVL2[0] = CVL2[0] - 4;
                    break;
                case 3:
                    BB2[0] = BB2[0] - 4;
                    break;
                case 4:
                    CA2[0] = CA2[0] - 4;
                    break;
                case 5:
                    CL2[0] = CL2[0] - 4;
                    break;
                case 6:
                    DD2[0] = DD2[0] - 2;
                    break;
                case 7:
                    SS2[0] = SS2[0] - 0;
                    break;
            }
            if (column2[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis2-1-1").show();
                        break;
                    case "1 2":
                        $("#mis2-1-2").show();
                        break;
                    case "1 3":
                        $("#mis2-1-3").show();
                        break;
                    case "1 4":
                        $("#mis2-1-4").show();
                        break;
                    case "1 5":
                        $("#mis2-1-5").show();
                        break;
                    case "1 6":
                        $("#mis2-1-6").show();
                        break;
                    case "1 7":
                        $("#mis2-1-7").show();
                        break;
                    case "2 1":
                        $("#mis2-2-1").show();
                        break;
                    case "2 2":
                        $("#mis2-2-2").show();
                        break;
                    case "2 3":
                        $("#mis2-2-3").show();
                        break;
                    case "2 4":
                        $("#mis2-2-4").show();
                        break;
                    case "2 5":
                        $("#mis2-2-5").show();
                        break;
                    case "2 6":
                        $("#mis2-2-6").show();
                        break;
                    case "2 7":
                        $("#mis2-2-7").show();
                        break;
                    case "3 1":
                        $("#mis2-3-1").show();
                        break;
                    case "3 2":
                        $("#mis2-3-2").show();
                        break;
                    case "3 3":
                        $("#mis2-3-3").show();
                        break;
                    case "3 4":
                        $("#mis2-3-4").show();
                        break;
                    case "3 5":
                        $("#mis2-3-5").show();
                        break;
                    case "3 6":
                        $("#mis2-3-6").show();
                        break;
                    case "3 7":
                        $("#mis2-3-7").show();
                        break;
                    case "4 1":
                        $("#mis2-4-1").show();
                        break;
                    case "4 2":
                        $("#mis2-4-2").show();
                        break;
                    case "4 3":
                        $("#mis2-4-3").show();
                        break;
                    case "4 4":
                        $("#mis2-4-4").show();
                        break;
                    case "4 5":
                        $("#mis2-4-5").show();
                        break;
                    case "4 6":
                        $("#mis2-4-6").show();
                        break;
                    case "4 7":
                        $("#mis2-4-7").show();
                        break;
                    case "5 1":
                        $("#mis2-5-1").show();
                        break;
                    case "5 2":
                        $("#mis2-5-2").show();
                        break;
                    case "5 3":
                        $("#mis2-5-3").show();
                        break;
                    case "5 4":
                        $("#mis2-5-4").show();
                        break;
                    case "5 5":
                        $("#mis2-5-5").show();
                        break;
                    case "5 6":
                        $("#mis2-5-6").show();
                        break;
                    case "5 7":
                        $("#mis2-5-7").show();
                        break;
                    case "6 1":
                        $("#mis2-6-1").show();
                        break;
                    case "6 2":
                        $("#mis2-6-2").show();
                        break;
                    case "6 3":
                        $("#mis2-6-3").show();
                        break;
                    case "6 4":
                        $("#mis2-6-4").show();
                        break;
                    case "6 5":
                        $("#mis2-6-5").show();
                        break;
                    case "6 6":
                        $("#mis2-6-6").show();
                        break;
                    case "6 7":
                        $("#mis2-6-7").show();
                        break;
                    case "7 1":
                        $("#mis2-7-1").show();
                        break;
                    case "7 2":
                        $("#mis2-7-2").show();
                        break;
                    case "7 3":
                        $("#mis2-7-3").show();
                        break;
                    case "7 4":
                        $("#mis2-7-4").show();
                        break;
                    case "7 5":
                        $("#mis2-7-5").show();
                        break;
                    case "7 6":
                        $("#mis2-7-6").show();
                        break;
                    case "7 7":
                        $("#mis2-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit2-1-1").show();
                        break;
                    case "1 2":
                        $("#hit2-1-2").show();
                        break;
                    case "1 3":
                        $("#hit2-1-3").show();
                        break;
                    case "1 4":
                        $("#hit2-1-4").show();
                        break;
                    case "1 5":
                        $("#hit2-1-5").show();
                        break;
                    case "1 6":
                        $("#hit2-1-6").show();
                        break;
                    case "1 7":
                        $("#hit2-1-7").show();
                        break;
                    case "2 1":
                        $("#hit2-2-1").show();
                        break;
                    case "2 2":
                        $("#hit2-2-2").show();
                        break;
                    case "2 3":
                        $("#hit2-2-3").show();
                        break;
                    case "2 4":
                        $("#hit2-2-4").show();
                        break;
                    case "2 5":
                        $("#hit2-2-5").show();
                        break;
                    case "2 6":
                        $("#hit2-2-6").show();
                        break;
                    case "2 7":
                        $("#hit2-2-7").show();
                        break;
                    case "3 1":
                        $("#hit2-3-1").show();
                        break;
                    case "3 2":
                        $("#hit2-3-2").show();
                        break;
                    case "3 3":
                        $("#hit2-3-3").show();
                        break;
                    case "3 4":
                        $("#hit2-3-4").show();
                        break;
                    case "3 5":
                        $("#hit2-3-5").show();
                        break;
                    case "3 6":
                        $("#hit2-3-6").show();
                        break;
                    case "3 7":
                        $("#hit2-3-7").show();
                        break;
                    case "4 1":
                        $("#hit2-4-1").show();
                        break;
                    case "4 2":
                        $("#hit2-4-2").show();
                        break;
                    case "4 3":
                        $("#hit2-4-3").show();
                        break;
                    case "4 4":
                        $("#hit2-4-4").show();
                        break;
                    case "4 5":
                        $("#hit2-4-5").show();
                        break;
                    case "4 6":
                        $("#hit2-4-6").show();
                        break;
                    case "4 7":
                        $("#hit2-4-7").show();
                        break;
                    case "5 1":
                        $("#hit2-5-1").show();
                        break;
                    case "5 2":
                        $("#hit2-5-2").show();
                        break;
                    case "5 3":
                        $("#hit2-5-3").show();
                        break;
                    case "5 4":
                        $("#hit2-5-4").show();
                        break;
                    case "5 5":
                        $("#hit2-5-5").show();
                        break;
                    case "5 6":
                        $("#hit2-5-6").show();
                        break;
                    case "5 7":
                        $("#hit2-5-7").show();
                        break;
                    case "6 1":
                        $("#hit2-6-1").show();
                        break;
                    case "6 2":
                        $("#hit2-6-2").show();
                        break;
                    case "6 3":
                        $("#hit2-6-3").show();
                        break;
                    case "6 4":
                        $("#hit2-6-4").show();
                        break;
                    case "6 5":
                        $("#hit2-6-5").show();
                        break;
                    case "6 6":
                        $("#hit2-6-6").show();
                        break;
                    case "6 7":
                        $("#hit2-6-7").show();
                        break;
                    case "7 1":
                        $("#hit2-7-1").show();
                        break;
                    case "7 2":
                        $("#hit2-7-2").show();
                        break;
                    case "7 3":
                        $("#hit2-7-3").show();
                        break;
                    case "7 4":
                        $("#hit2-7-4").show();
                        break;
                    case "7 5":
                        $("#hit2-7-5").show();
                        break;
                    case "7 6":
                        $("#hit2-7-6").show();
                        break;
                    case "7 7":
                        $("#hit2-7-7").show();
                        break;
                }
            }
            BB1[1] = 0;
            $(this).hide();
            $("#yamato").hide();
            $("#ibuki").show();
            if (CA1[1] == 2 && CA1[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack1-3").show();
            } else {
                CA1[1] = CA1[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove1-3").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove1-2").click(function() {
        $(this).hide();
        $("#yamato").hide();
        $("#ibuki").show();
        if (CA1[1] == 2 && CA1[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack1-3").show();
        } else {
            CA1[1] = CA1[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove1-3").show();
        }
    });

    $("#attack1-3").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column2[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV2[0] = CV2[0] - 2;
                    break;
                case 2:
                    CVL2[0] = CVL2[0] - 2;
                    break;
                case 3:
                    BB2[0] = BB2[0] - 2;
                    break;
                case 4:
                    CA2[0] = CA2[0] - 2;
                    break;
                case 5:
                    CL2[0] = CL2[0] - 2;
                    break;
                case 6:
                    DD2[0] = DD2[0] - 2;
                    break;
                case 7:
                    SS2[0] = SS2[0] - 0;
                    break;
            }
            if (column2[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis2-1-1").show();
                        break;
                    case "1 2":
                        $("#mis2-1-2").show();
                        break;
                    case "1 3":
                        $("#mis2-1-3").show();
                        break;
                    case "1 4":
                        $("#mis2-1-4").show();
                        break;
                    case "1 5":
                        $("#mis2-1-5").show();
                        break;
                    case "1 6":
                        $("#mis2-1-6").show();
                        break;
                    case "1 7":
                        $("#mis2-1-7").show();
                        break;
                    case "2 1":
                        $("#mis2-2-1").show();
                        break;
                    case "2 2":
                        $("#mis2-2-2").show();
                        break;
                    case "2 3":
                        $("#mis2-2-3").show();
                        break;
                    case "2 4":
                        $("#mis2-2-4").show();
                        break;
                    case "2 5":
                        $("#mis2-2-5").show();
                        break;
                    case "2 6":
                        $("#mis2-2-6").show();
                        break;
                    case "2 7":
                        $("#mis2-2-7").show();
                        break;
                    case "3 1":
                        $("#mis2-3-1").show();
                        break;
                    case "3 2":
                        $("#mis2-3-2").show();
                        break;
                    case "3 3":
                        $("#mis2-3-3").show();
                        break;
                    case "3 4":
                        $("#mis2-3-4").show();
                        break;
                    case "3 5":
                        $("#mis2-3-5").show();
                        break;
                    case "3 6":
                        $("#mis2-3-6").show();
                        break;
                    case "3 7":
                        $("#mis2-3-7").show();
                        break;
                    case "4 1":
                        $("#mis2-4-1").show();
                        break;
                    case "4 2":
                        $("#mis2-4-2").show();
                        break;
                    case "4 3":
                        $("#mis2-4-3").show();
                        break;
                    case "4 4":
                        $("#mis2-4-4").show();
                        break;
                    case "4 5":
                        $("#mis2-4-5").show();
                        break;
                    case "4 6":
                        $("#mis2-4-6").show();
                        break;
                    case "4 7":
                        $("#mis2-4-7").show();
                        break;
                    case "5 1":
                        $("#mis2-5-1").show();
                        break;
                    case "5 2":
                        $("#mis2-5-2").show();
                        break;
                    case "5 3":
                        $("#mis2-5-3").show();
                        break;
                    case "5 4":
                        $("#mis2-5-4").show();
                        break;
                    case "5 5":
                        $("#mis2-5-5").show();
                        break;
                    case "5 6":
                        $("#mis2-5-6").show();
                        break;
                    case "5 7":
                        $("#mis2-5-7").show();
                        break;
                    case "6 1":
                        $("#mis2-6-1").show();
                        break;
                    case "6 2":
                        $("#mis2-6-2").show();
                        break;
                    case "6 3":
                        $("#mis2-6-3").show();
                        break;
                    case "6 4":
                        $("#mis2-6-4").show();
                        break;
                    case "6 5":
                        $("#mis2-6-5").show();
                        break;
                    case "6 6":
                        $("#mis2-6-6").show();
                        break;
                    case "6 7":
                        $("#mis2-6-7").show();
                        break;
                    case "7 1":
                        $("#mis2-7-1").show();
                        break;
                    case "7 2":
                        $("#mis2-7-2").show();
                        break;
                    case "7 3":
                        $("#mis2-7-3").show();
                        break;
                    case "7 4":
                        $("#mis2-7-4").show();
                        break;
                    case "7 5":
                        $("#mis2-7-5").show();
                        break;
                    case "7 6":
                        $("#mis2-7-6").show();
                        break;
                    case "7 7":
                        $("#mis2-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit2-1-1").show();
                        break;
                    case "1 2":
                        $("#hit2-1-2").show();
                        break;
                    case "1 3":
                        $("#hit2-1-3").show();
                        break;
                    case "1 4":
                        $("#hit2-1-4").show();
                        break;
                    case "1 5":
                        $("#hit2-1-5").show();
                        break;
                    case "1 6":
                        $("#hit2-1-6").show();
                        break;
                    case "1 7":
                        $("#hit2-1-7").show();
                        break;
                    case "2 1":
                        $("#hit2-2-1").show();
                        break;
                    case "2 2":
                        $("#hit2-2-2").show();
                        break;
                    case "2 3":
                        $("#hit2-2-3").show();
                        break;
                    case "2 4":
                        $("#hit2-2-4").show();
                        break;
                    case "2 5":
                        $("#hit2-2-5").show();
                        break;
                    case "2 6":
                        $("#hit2-2-6").show();
                        break;
                    case "2 7":
                        $("#hit2-2-7").show();
                        break;
                    case "3 1":
                        $("#hit2-3-1").show();
                        break;
                    case "3 2":
                        $("#hit2-3-2").show();
                        break;
                    case "3 3":
                        $("#hit2-3-3").show();
                        break;
                    case "3 4":
                        $("#hit2-3-4").show();
                        break;
                    case "3 5":
                        $("#hit2-3-5").show();
                        break;
                    case "3 6":
                        $("#hit2-3-6").show();
                        break;
                    case "3 7":
                        $("#hit2-3-7").show();
                        break;
                    case "4 1":
                        $("#hit2-4-1").show();
                        break;
                    case "4 2":
                        $("#hit2-4-2").show();
                        break;
                    case "4 3":
                        $("#hit2-4-3").show();
                        break;
                    case "4 4":
                        $("#hit2-4-4").show();
                        break;
                    case "4 5":
                        $("#hit2-4-5").show();
                        break;
                    case "4 6":
                        $("#hit2-4-6").show();
                        break;
                    case "4 7":
                        $("#hit2-4-7").show();
                        break;
                    case "5 1":
                        $("#hit2-5-1").show();
                        break;
                    case "5 2":
                        $("#hit2-5-2").show();
                        break;
                    case "5 3":
                        $("#hit2-5-3").show();
                        break;
                    case "5 4":
                        $("#hit2-5-4").show();
                        break;
                    case "5 5":
                        $("#hit2-5-5").show();
                        break;
                    case "5 6":
                        $("#hit2-5-6").show();
                        break;
                    case "5 7":
                        $("#hit2-5-7").show();
                        break;
                    case "6 1":
                        $("#hit2-6-1").show();
                        break;
                    case "6 2":
                        $("#hit2-6-2").show();
                        break;
                    case "6 3":
                        $("#hit2-6-3").show();
                        break;
                    case "6 4":
                        $("#hit2-6-4").show();
                        break;
                    case "6 5":
                        $("#hit2-6-5").show();
                        break;
                    case "6 6":
                        $("#hit2-6-6").show();
                        break;
                    case "6 7":
                        $("#hit2-6-7").show();
                        break;
                    case "7 1":
                        $("#hit2-7-1").show();
                        break;
                    case "7 2":
                        $("#hit2-7-2").show();
                        break;
                    case "7 3":
                        $("#hit2-7-3").show();
                        break;
                    case "7 4":
                        $("#hit2-7-4").show();
                        break;
                    case "7 5":
                        $("#hit2-7-5").show();
                        break;
                    case "7 6":
                        $("#hit2-7-6").show();
                        break;
                    case "7 7":
                        $("#hit2-7-7").show();
                        break;
                }
            }
            CA1[1] = 0;
            $(this).hide();
            $("#ibuki").hide();
            $("#yahagi").show();
            if (CL1[1] == 2 && CL1[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack1-4").show();
            } else {
                CL1[1] = CL1[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove1-4").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove1-3").click(function() {
        $(this).hide();
        $("#ibuki").hide();
        $("#yahagi").show();
        if (CL1[1] == 2 && CL1[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack1-4").show();
        } else {
            CL1[1] = CL1[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove1-4").show();
        }
    });

    $("#attack1-4").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column2[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV2[0] = CV2[0] - 2;
                    break;
                case 2:
                    CVL2[0] = CVL2[0] - 2;
                    break;
                case 3:
                    BB2[0] = BB2[0] - 2;
                    break;
                case 4:
                    CA2[0] = CA2[0] - 2;
                    break;
                case 5:
                    CL2[0] = CL2[0] - 2;
                    break;
                case 6:
                    DD2[0] = DD2[0] - 2;
                    break;
                case 7:
                    SS2[0] = SS2[0] - 0;
                    break;
            }
            if (column2[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis2-1-1").show();
                        break;
                    case "1 2":
                        $("#mis2-1-2").show();
                        break;
                    case "1 3":
                        $("#mis2-1-3").show();
                        break;
                    case "1 4":
                        $("#mis2-1-4").show();
                        break;
                    case "1 5":
                        $("#mis2-1-5").show();
                        break;
                    case "1 6":
                        $("#mis2-1-6").show();
                        break;
                    case "1 7":
                        $("#mis2-1-7").show();
                        break;
                    case "2 1":
                        $("#mis2-2-1").show();
                        break;
                    case "2 2":
                        $("#mis2-2-2").show();
                        break;
                    case "2 3":
                        $("#mis2-2-3").show();
                        break;
                    case "2 4":
                        $("#mis2-2-4").show();
                        break;
                    case "2 5":
                        $("#mis2-2-5").show();
                        break;
                    case "2 6":
                        $("#mis2-2-6").show();
                        break;
                    case "2 7":
                        $("#mis2-2-7").show();
                        break;
                    case "3 1":
                        $("#mis2-3-1").show();
                        break;
                    case "3 2":
                        $("#mis2-3-2").show();
                        break;
                    case "3 3":
                        $("#mis2-3-3").show();
                        break;
                    case "3 4":
                        $("#mis2-3-4").show();
                        break;
                    case "3 5":
                        $("#mis2-3-5").show();
                        break;
                    case "3 6":
                        $("#mis2-3-6").show();
                        break;
                    case "3 7":
                        $("#mis2-3-7").show();
                        break;
                    case "4 1":
                        $("#mis2-4-1").show();
                        break;
                    case "4 2":
                        $("#mis2-4-2").show();
                        break;
                    case "4 3":
                        $("#mis2-4-3").show();
                        break;
                    case "4 4":
                        $("#mis2-4-4").show();
                        break;
                    case "4 5":
                        $("#mis2-4-5").show();
                        break;
                    case "4 6":
                        $("#mis2-4-6").show();
                        break;
                    case "4 7":
                        $("#mis2-4-7").show();
                        break;
                    case "5 1":
                        $("#mis2-5-1").show();
                        break;
                    case "5 2":
                        $("#mis2-5-2").show();
                        break;
                    case "5 3":
                        $("#mis2-5-3").show();
                        break;
                    case "5 4":
                        $("#mis2-5-4").show();
                        break;
                    case "5 5":
                        $("#mis2-5-5").show();
                        break;
                    case "5 6":
                        $("#mis2-5-6").show();
                        break;
                    case "5 7":
                        $("#mis2-5-7").show();
                        break;
                    case "6 1":
                        $("#mis2-6-1").show();
                        break;
                    case "6 2":
                        $("#mis2-6-2").show();
                        break;
                    case "6 3":
                        $("#mis2-6-3").show();
                        break;
                    case "6 4":
                        $("#mis2-6-4").show();
                        break;
                    case "6 5":
                        $("#mis2-6-5").show();
                        break;
                    case "6 6":
                        $("#mis2-6-6").show();
                        break;
                    case "6 7":
                        $("#mis2-6-7").show();
                        break;
                    case "7 1":
                        $("#mis2-7-1").show();
                        break;
                    case "7 2":
                        $("#mis2-7-2").show();
                        break;
                    case "7 3":
                        $("#mis2-7-3").show();
                        break;
                    case "7 4":
                        $("#mis2-7-4").show();
                        break;
                    case "7 5":
                        $("#mis2-7-5").show();
                        break;
                    case "7 6":
                        $("#mis2-7-6").show();
                        break;
                    case "7 7":
                        $("#mis2-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit2-1-1").show();
                        break;
                    case "1 2":
                        $("#hit2-1-2").show();
                        break;
                    case "1 3":
                        $("#hit2-1-3").show();
                        break;
                    case "1 4":
                        $("#hit2-1-4").show();
                        break;
                    case "1 5":
                        $("#hit2-1-5").show();
                        break;
                    case "1 6":
                        $("#hit2-1-6").show();
                        break;
                    case "1 7":
                        $("#hit2-1-7").show();
                        break;
                    case "2 1":
                        $("#hit2-2-1").show();
                        break;
                    case "2 2":
                        $("#hit2-2-2").show();
                        break;
                    case "2 3":
                        $("#hit2-2-3").show();
                        break;
                    case "2 4":
                        $("#hit2-2-4").show();
                        break;
                    case "2 5":
                        $("#hit2-2-5").show();
                        break;
                    case "2 6":
                        $("#hit2-2-6").show();
                        break;
                    case "2 7":
                        $("#hit2-2-7").show();
                        break;
                    case "3 1":
                        $("#hit2-3-1").show();
                        break;
                    case "3 2":
                        $("#hit2-3-2").show();
                        break;
                    case "3 3":
                        $("#hit2-3-3").show();
                        break;
                    case "3 4":
                        $("#hit2-3-4").show();
                        break;
                    case "3 5":
                        $("#hit2-3-5").show();
                        break;
                    case "3 6":
                        $("#hit2-3-6").show();
                        break;
                    case "3 7":
                        $("#hit2-3-7").show();
                        break;
                    case "4 1":
                        $("#hit2-4-1").show();
                        break;
                    case "4 2":
                        $("#hit2-4-2").show();
                        break;
                    case "4 3":
                        $("#hit2-4-3").show();
                        break;
                    case "4 4":
                        $("#hit2-4-4").show();
                        break;
                    case "4 5":
                        $("#hit2-4-5").show();
                        break;
                    case "4 6":
                        $("#hit2-4-6").show();
                        break;
                    case "4 7":
                        $("#hit2-4-7").show();
                        break;
                    case "5 1":
                        $("#hit2-5-1").show();
                        break;
                    case "5 2":
                        $("#hit2-5-2").show();
                        break;
                    case "5 3":
                        $("#hit2-5-3").show();
                        break;
                    case "5 4":
                        $("#hit2-5-4").show();
                        break;
                    case "5 5":
                        $("#hit2-5-5").show();
                        break;
                    case "5 6":
                        $("#hit2-5-6").show();
                        break;
                    case "5 7":
                        $("#hit2-5-7").show();
                        break;
                    case "6 1":
                        $("#hit2-6-1").show();
                        break;
                    case "6 2":
                        $("#hit2-6-2").show();
                        break;
                    case "6 3":
                        $("#hit2-6-3").show();
                        break;
                    case "6 4":
                        $("#hit2-6-4").show();
                        break;
                    case "6 5":
                        $("#hit2-6-5").show();
                        break;
                    case "6 6":
                        $("#hit2-6-6").show();
                        break;
                    case "6 7":
                        $("#hit2-6-7").show();
                        break;
                    case "7 1":
                        $("#hit2-7-1").show();
                        break;
                    case "7 2":
                        $("#hit2-7-2").show();
                        break;
                    case "7 3":
                        $("#hit2-7-3").show();
                        break;
                    case "7 4":
                        $("#hit2-7-4").show();
                        break;
                    case "7 5":
                        $("#hit2-7-5").show();
                        break;
                    case "7 6":
                        $("#hit2-7-6").show();
                        break;
                    case "7 7":
                        $("#hit2-7-7").show();
                        break;
                }
            }
            CL1[1] = 0;
            $(this).hide();
            $("#yahagi").hide();
            $("#shimakaze").show();
            if (DD1[1] == 1 && DD1[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack1-5").show();
            } else {
                DD1[1] = DD1[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove1-5").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove1-4").click(function() {
        $(this).hide();
        $("#yahagi").hide();
        $("#shimakaze").show();
        if (DD1[1] == 1 && DD1[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack1-5").show();
        } else {
            DD1[1] = DD1[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove1-5").show();
        }
    });

    $("#attack1-5").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column2[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV2[0] = CV2[0] - 3;
                    break;
                case 2:
                    CVL2[0] = CVL2[0] - 3;
                    break;
                case 3:
                    BB2[0] = BB2[0] - 3;
                    break;
                case 4:
                    CA2[0] = CA2[0] - 3;
                    break;
                case 5:
                    CL2[0] = CL2[0] - 3;
                    break;
                case 6:
                    DD2[0] = DD2[0] - 2;
                    break;
                case 7:
                    SS2[0] = SS2[0] - 2;
                    break;
            }
            if (column2[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis2-1-1").show();
                        break;
                    case "1 2":
                        $("#mis2-1-2").show();
                        break;
                    case "1 3":
                        $("#mis2-1-3").show();
                        break;
                    case "1 4":
                        $("#mis2-1-4").show();
                        break;
                    case "1 5":
                        $("#mis2-1-5").show();
                        break;
                    case "1 6":
                        $("#mis2-1-6").show();
                        break;
                    case "1 7":
                        $("#mis2-1-7").show();
                        break;
                    case "2 1":
                        $("#mis2-2-1").show();
                        break;
                    case "2 2":
                        $("#mis2-2-2").show();
                        break;
                    case "2 3":
                        $("#mis2-2-3").show();
                        break;
                    case "2 4":
                        $("#mis2-2-4").show();
                        break;
                    case "2 5":
                        $("#mis2-2-5").show();
                        break;
                    case "2 6":
                        $("#mis2-2-6").show();
                        break;
                    case "2 7":
                        $("#mis2-2-7").show();
                        break;
                    case "3 1":
                        $("#mis2-3-1").show();
                        break;
                    case "3 2":
                        $("#mis2-3-2").show();
                        break;
                    case "3 3":
                        $("#mis2-3-3").show();
                        break;
                    case "3 4":
                        $("#mis2-3-4").show();
                        break;
                    case "3 5":
                        $("#mis2-3-5").show();
                        break;
                    case "3 6":
                        $("#mis2-3-6").show();
                        break;
                    case "3 7":
                        $("#mis2-3-7").show();
                        break;
                    case "4 1":
                        $("#mis2-4-1").show();
                        break;
                    case "4 2":
                        $("#mis2-4-2").show();
                        break;
                    case "4 3":
                        $("#mis2-4-3").show();
                        break;
                    case "4 4":
                        $("#mis2-4-4").show();
                        break;
                    case "4 5":
                        $("#mis2-4-5").show();
                        break;
                    case "4 6":
                        $("#mis2-4-6").show();
                        break;
                    case "4 7":
                        $("#mis2-4-7").show();
                        break;
                    case "5 1":
                        $("#mis2-5-1").show();
                        break;
                    case "5 2":
                        $("#mis2-5-2").show();
                        break;
                    case "5 3":
                        $("#mis2-5-3").show();
                        break;
                    case "5 4":
                        $("#mis2-5-4").show();
                        break;
                    case "5 5":
                        $("#mis2-5-5").show();
                        break;
                    case "5 6":
                        $("#mis2-5-6").show();
                        break;
                    case "5 7":
                        $("#mis2-5-7").show();
                        break;
                    case "6 1":
                        $("#mis2-6-1").show();
                        break;
                    case "6 2":
                        $("#mis2-6-2").show();
                        break;
                    case "6 3":
                        $("#mis2-6-3").show();
                        break;
                    case "6 4":
                        $("#mis2-6-4").show();
                        break;
                    case "6 5":
                        $("#mis2-6-5").show();
                        break;
                    case "6 6":
                        $("#mis2-6-6").show();
                        break;
                    case "6 7":
                        $("#mis2-6-7").show();
                        break;
                    case "7 1":
                        $("#mis2-7-1").show();
                        break;
                    case "7 2":
                        $("#mis2-7-2").show();
                        break;
                    case "7 3":
                        $("#mis2-7-3").show();
                        break;
                    case "7 4":
                        $("#mis2-7-4").show();
                        break;
                    case "7 5":
                        $("#mis2-7-5").show();
                        break;
                    case "7 6":
                        $("#mis2-7-6").show();
                        break;
                    case "7 7":
                        $("#mis2-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit2-1-1").show();
                        break;
                    case "1 2":
                        $("#hit2-1-2").show();
                        break;
                    case "1 3":
                        $("#hit2-1-3").show();
                        break;
                    case "1 4":
                        $("#hit2-1-4").show();
                        break;
                    case "1 5":
                        $("#hit2-1-5").show();
                        break;
                    case "1 6":
                        $("#hit2-1-6").show();
                        break;
                    case "1 7":
                        $("#hit2-1-7").show();
                        break;
                    case "2 1":
                        $("#hit2-2-1").show();
                        break;
                    case "2 2":
                        $("#hit2-2-2").show();
                        break;
                    case "2 3":
                        $("#hit2-2-3").show();
                        break;
                    case "2 4":
                        $("#hit2-2-4").show();
                        break;
                    case "2 5":
                        $("#hit2-2-5").show();
                        break;
                    case "2 6":
                        $("#hit2-2-6").show();
                        break;
                    case "2 7":
                        $("#hit2-2-7").show();
                        break;
                    case "3 1":
                        $("#hit2-3-1").show();
                        break;
                    case "3 2":
                        $("#hit2-3-2").show();
                        break;
                    case "3 3":
                        $("#hit2-3-3").show();
                        break;
                    case "3 4":
                        $("#hit2-3-4").show();
                        break;
                    case "3 5":
                        $("#hit2-3-5").show();
                        break;
                    case "3 6":
                        $("#hit2-3-6").show();
                        break;
                    case "3 7":
                        $("#hit2-3-7").show();
                        break;
                    case "4 1":
                        $("#hit2-4-1").show();
                        break;
                    case "4 2":
                        $("#hit2-4-2").show();
                        break;
                    case "4 3":
                        $("#hit2-4-3").show();
                        break;
                    case "4 4":
                        $("#hit2-4-4").show();
                        break;
                    case "4 5":
                        $("#hit2-4-5").show();
                        break;
                    case "4 6":
                        $("#hit2-4-6").show();
                        break;
                    case "4 7":
                        $("#hit2-4-7").show();
                        break;
                    case "5 1":
                        $("#hit2-5-1").show();
                        break;
                    case "5 2":
                        $("#hit2-5-2").show();
                        break;
                    case "5 3":
                        $("#hit2-5-3").show();
                        break;
                    case "5 4":
                        $("#hit2-5-4").show();
                        break;
                    case "5 5":
                        $("#hit2-5-5").show();
                        break;
                    case "5 6":
                        $("#hit2-5-6").show();
                        break;
                    case "5 7":
                        $("#hit2-5-7").show();
                        break;
                    case "6 1":
                        $("#hit2-6-1").show();
                        break;
                    case "6 2":
                        $("#hit2-6-2").show();
                        break;
                    case "6 3":
                        $("#hit2-6-3").show();
                        break;
                    case "6 4":
                        $("#hit2-6-4").show();
                        break;
                    case "6 5":
                        $("#hit2-6-5").show();
                        break;
                    case "6 6":
                        $("#hit2-6-6").show();
                        break;
                    case "6 7":
                        $("#hit2-6-7").show();
                        break;
                    case "7 1":
                        $("#hit2-7-1").show();
                        break;
                    case "7 2":
                        $("#hit2-7-2").show();
                        break;
                    case "7 3":
                        $("#hit2-7-3").show();
                        break;
                    case "7 4":
                        $("#hit2-7-4").show();
                        break;
                    case "7 5":
                        $("#hit2-7-5").show();
                        break;
                    case "7 6":
                        $("#hit2-7-6").show();
                        break;
                    case "7 7":
                        $("#hit2-7-7").show();
                        break;
                }
            }
            DD1[1] = 0;
            $(this).hide();
            $("#shimakaze").hide();
            $("#akizuki").show();
            if (DE1[1] == 1 && DE1[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack1-6").show();
            } else {
                DE1[1] = DE1[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove1-6").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove1-5").click(function() {
        $(this).hide();
        $("#shimakaze").hide();
        $("#akizuki").show();
        if (DE1[1] == 1 && DE1[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack1-6").show();
        } else {
            DE1[1] = DE1[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove1-6").show();
        }
    });

    $("#attack1-6").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column2[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV2[0] = CV2[0] - 3;
                    break;
                case 2:
                    CVL2[0] = CVL2[0] - 3;
                    break;
                case 3:
                    BB2[0] = BB2[0] - 3;
                    break;
                case 4:
                    CA2[0] = CA2[0] - 3;
                    break;
                case 5:
                    CL2[0] = CL2[0] - 3;
                    break;
                case 6:
                    DD2[0] = DD2[0] - 2;
                    break;
                case 7:
                    SS2[0] = SS2[0] - 2;
                    break;
            }
            if (column2[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis2-1-1").show();
                        break;
                    case "1 2":
                        $("#mis2-1-2").show();
                        break;
                    case "1 3":
                        $("#mis2-1-3").show();
                        break;
                    case "1 4":
                        $("#mis2-1-4").show();
                        break;
                    case "1 5":
                        $("#mis2-1-5").show();
                        break;
                    case "1 6":
                        $("#mis2-1-6").show();
                        break;
                    case "1 7":
                        $("#mis2-1-7").show();
                        break;
                    case "2 1":
                        $("#mis2-2-1").show();
                        break;
                    case "2 2":
                        $("#mis2-2-2").show();
                        break;
                    case "2 3":
                        $("#mis2-2-3").show();
                        break;
                    case "2 4":
                        $("#mis2-2-4").show();
                        break;
                    case "2 5":
                        $("#mis2-2-5").show();
                        break;
                    case "2 6":
                        $("#mis2-2-6").show();
                        break;
                    case "2 7":
                        $("#mis2-2-7").show();
                        break;
                    case "3 1":
                        $("#mis2-3-1").show();
                        break;
                    case "3 2":
                        $("#mis2-3-2").show();
                        break;
                    case "3 3":
                        $("#mis2-3-3").show();
                        break;
                    case "3 4":
                        $("#mis2-3-4").show();
                        break;
                    case "3 5":
                        $("#mis2-3-5").show();
                        break;
                    case "3 6":
                        $("#mis2-3-6").show();
                        break;
                    case "3 7":
                        $("#mis2-3-7").show();
                        break;
                    case "4 1":
                        $("#mis2-4-1").show();
                        break;
                    case "4 2":
                        $("#mis2-4-2").show();
                        break;
                    case "4 3":
                        $("#mis2-4-3").show();
                        break;
                    case "4 4":
                        $("#mis2-4-4").show();
                        break;
                    case "4 5":
                        $("#mis2-4-5").show();
                        break;
                    case "4 6":
                        $("#mis2-4-6").show();
                        break;
                    case "4 7":
                        $("#mis2-4-7").show();
                        break;
                    case "5 1":
                        $("#mis2-5-1").show();
                        break;
                    case "5 2":
                        $("#mis2-5-2").show();
                        break;
                    case "5 3":
                        $("#mis2-5-3").show();
                        break;
                    case "5 4":
                        $("#mis2-5-4").show();
                        break;
                    case "5 5":
                        $("#mis2-5-5").show();
                        break;
                    case "5 6":
                        $("#mis2-5-6").show();
                        break;
                    case "5 7":
                        $("#mis2-5-7").show();
                        break;
                    case "6 1":
                        $("#mis2-6-1").show();
                        break;
                    case "6 2":
                        $("#mis2-6-2").show();
                        break;
                    case "6 3":
                        $("#mis2-6-3").show();
                        break;
                    case "6 4":
                        $("#mis2-6-4").show();
                        break;
                    case "6 5":
                        $("#mis2-6-5").show();
                        break;
                    case "6 6":
                        $("#mis2-6-6").show();
                        break;
                    case "6 7":
                        $("#mis2-6-7").show();
                        break;
                    case "7 1":
                        $("#mis2-7-1").show();
                        break;
                    case "7 2":
                        $("#mis2-7-2").show();
                        break;
                    case "7 3":
                        $("#mis2-7-3").show();
                        break;
                    case "7 4":
                        $("#mis2-7-4").show();
                        break;
                    case "7 5":
                        $("#mis2-7-5").show();
                        break;
                    case "7 6":
                        $("#mis2-7-6").show();
                        break;
                    case "7 7":
                        $("#mis2-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit2-1-1").show();
                        break;
                    case "1 2":
                        $("#hit2-1-2").show();
                        break;
                    case "1 3":
                        $("#hit2-1-3").show();
                        break;
                    case "1 4":
                        $("#hit2-1-4").show();
                        break;
                    case "1 5":
                        $("#hit2-1-5").show();
                        break;
                    case "1 6":
                        $("#hit2-1-6").show();
                        break;
                    case "1 7":
                        $("#hit2-1-7").show();
                        break;
                    case "2 1":
                        $("#hit2-2-1").show();
                        break;
                    case "2 2":
                        $("#hit2-2-2").show();
                        break;
                    case "2 3":
                        $("#hit2-2-3").show();
                        break;
                    case "2 4":
                        $("#hit2-2-4").show();
                        break;
                    case "2 5":
                        $("#hit2-2-5").show();
                        break;
                    case "2 6":
                        $("#hit2-2-6").show();
                        break;
                    case "2 7":
                        $("#hit2-2-7").show();
                        break;
                    case "3 1":
                        $("#hit2-3-1").show();
                        break;
                    case "3 2":
                        $("#hit2-3-2").show();
                        break;
                    case "3 3":
                        $("#hit2-3-3").show();
                        break;
                    case "3 4":
                        $("#hit2-3-4").show();
                        break;
                    case "3 5":
                        $("#hit2-3-5").show();
                        break;
                    case "3 6":
                        $("#hit2-3-6").show();
                        break;
                    case "3 7":
                        $("#hit2-3-7").show();
                        break;
                    case "4 1":
                        $("#hit2-4-1").show();
                        break;
                    case "4 2":
                        $("#hit2-4-2").show();
                        break;
                    case "4 3":
                        $("#hit2-4-3").show();
                        break;
                    case "4 4":
                        $("#hit2-4-4").show();
                        break;
                    case "4 5":
                        $("#hit2-4-5").show();
                        break;
                    case "4 6":
                        $("#hit2-4-6").show();
                        break;
                    case "4 7":
                        $("#hit2-4-7").show();
                        break;
                    case "5 1":
                        $("#hit2-5-1").show();
                        break;
                    case "5 2":
                        $("#hit2-5-2").show();
                        break;
                    case "5 3":
                        $("#hit2-5-3").show();
                        break;
                    case "5 4":
                        $("#hit2-5-4").show();
                        break;
                    case "5 5":
                        $("#hit2-5-5").show();
                        break;
                    case "5 6":
                        $("#hit2-5-6").show();
                        break;
                    case "5 7":
                        $("#hit2-5-7").show();
                        break;
                    case "6 1":
                        $("#hit2-6-1").show();
                        break;
                    case "6 2":
                        $("#hit2-6-2").show();
                        break;
                    case "6 3":
                        $("#hit2-6-3").show();
                        break;
                    case "6 4":
                        $("#hit2-6-4").show();
                        break;
                    case "6 5":
                        $("#hit2-6-5").show();
                        break;
                    case "6 6":
                        $("#hit2-6-6").show();
                        break;
                    case "6 7":
                        $("#hit2-6-7").show();
                        break;
                    case "7 1":
                        $("#hit2-7-1").show();
                        break;
                    case "7 2":
                        $("#hit2-7-2").show();
                        break;
                    case "7 3":
                        $("#hit2-7-3").show();
                        break;
                    case "7 4":
                        $("#hit2-7-4").show();
                        break;
                    case "7 5":
                        $("#hit2-7-5").show();
                        break;
                    case "7 6":
                        $("#hit2-7-6").show();
                        break;
                    case "7 7":
                        $("#hit2-7-7").show();
                        break;
                }
            }
            DE1[1] = 0;
            $(this).hide();
            $("#akizuki").hide();
            $("#i-400").show();
            if (SS1[1] == 2 && SS1[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack1-7").show();
            } else {
                SS1[1] = SS1[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove1-7").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove1-6").click(function() {
        $(this).hide();
        $("#akizuki").hide();
        $("#i-400").show();
        if (SS1[1] == 2 && SS1[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack1-7").show();
        } else {
            SS1[1] = SS1[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove1-7").show();
        }
    });
    $("#attack1-7").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column2[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV2[0] = CV2[0] - 2;
                    break;
                case 2:
                    CVL2[0] = CVL2[0] - 2;
                    break;
                case 3:
                    BB2[0] = BB2[0] - 2;
                    break;
                case 4:
                    CA2[0] = CA2[0] - 2;
                    break;
                case 5:
                    CL2[0] = CL2[0] - 2;
                    break;
                case 6:
                    DD2[0] = DD2[0] - 1;
                    break;
                case 7:
                    SS2[0] = SS2[0] - 2;
                    break;
            }
            if (column2[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis2-1-1").show();
                        break;
                    case "1 2":
                        $("#mis2-1-2").show();
                        break;
                    case "1 3":
                        $("#mis2-1-3").show();
                        break;
                    case "1 4":
                        $("#mis2-1-4").show();
                        break;
                    case "1 5":
                        $("#mis2-1-5").show();
                        break;
                    case "1 6":
                        $("#mis2-1-6").show();
                        break;
                    case "1 7":
                        $("#mis2-1-7").show();
                        break;
                    case "2 1":
                        $("#mis2-2-1").show();
                        break;
                    case "2 2":
                        $("#mis2-2-2").show();
                        break;
                    case "2 3":
                        $("#mis2-2-3").show();
                        break;
                    case "2 4":
                        $("#mis2-2-4").show();
                        break;
                    case "2 5":
                        $("#mis2-2-5").show();
                        break;
                    case "2 6":
                        $("#mis2-2-6").show();
                        break;
                    case "2 7":
                        $("#mis2-2-7").show();
                        break;
                    case "3 1":
                        $("#mis2-3-1").show();
                        break;
                    case "3 2":
                        $("#mis2-3-2").show();
                        break;
                    case "3 3":
                        $("#mis2-3-3").show();
                        break;
                    case "3 4":
                        $("#mis2-3-4").show();
                        break;
                    case "3 5":
                        $("#mis2-3-5").show();
                        break;
                    case "3 6":
                        $("#mis2-3-6").show();
                        break;
                    case "3 7":
                        $("#mis2-3-7").show();
                        break;
                    case "4 1":
                        $("#mis2-4-1").show();
                        break;
                    case "4 2":
                        $("#mis2-4-2").show();
                        break;
                    case "4 3":
                        $("#mis2-4-3").show();
                        break;
                    case "4 4":
                        $("#mis2-4-4").show();
                        break;
                    case "4 5":
                        $("#mis2-4-5").show();
                        break;
                    case "4 6":
                        $("#mis2-4-6").show();
                        break;
                    case "4 7":
                        $("#mis2-4-7").show();
                        break;
                    case "5 1":
                        $("#mis2-5-1").show();
                        break;
                    case "5 2":
                        $("#mis2-5-2").show();
                        break;
                    case "5 3":
                        $("#mis2-5-3").show();
                        break;
                    case "5 4":
                        $("#mis2-5-4").show();
                        break;
                    case "5 5":
                        $("#mis2-5-5").show();
                        break;
                    case "5 6":
                        $("#mis2-5-6").show();
                        break;
                    case "5 7":
                        $("#mis2-5-7").show();
                        break;
                    case "6 1":
                        $("#mis2-6-1").show();
                        break;
                    case "6 2":
                        $("#mis2-6-2").show();
                        break;
                    case "6 3":
                        $("#mis2-6-3").show();
                        break;
                    case "6 4":
                        $("#mis2-6-4").show();
                        break;
                    case "6 5":
                        $("#mis2-6-5").show();
                        break;
                    case "6 6":
                        $("#mis2-6-6").show();
                        break;
                    case "6 7":
                        $("#mis2-6-7").show();
                        break;
                    case "7 1":
                        $("#mis2-7-1").show();
                        break;
                    case "7 2":
                        $("#mis2-7-2").show();
                        break;
                    case "7 3":
                        $("#mis2-7-3").show();
                        break;
                    case "7 4":
                        $("#mis2-7-4").show();
                        break;
                    case "7 5":
                        $("#mis2-7-5").show();
                        break;
                    case "7 6":
                        $("#mis2-7-6").show();
                        break;
                    case "7 7":
                        $("#mis2-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit2-1-1").show();
                        break;
                    case "1 2":
                        $("#hit2-1-2").show();
                        break;
                    case "1 3":
                        $("#hit2-1-3").show();
                        break;
                    case "1 4":
                        $("#hit2-1-4").show();
                        break;
                    case "1 5":
                        $("#hit2-1-5").show();
                        break;
                    case "1 6":
                        $("#hit2-1-6").show();
                        break;
                    case "1 7":
                        $("#hit2-1-7").show();
                        break;
                    case "2 1":
                        $("#hit2-2-1").show();
                        break;
                    case "2 2":
                        $("#hit2-2-2").show();
                        break;
                    case "2 3":
                        $("#hit2-2-3").show();
                        break;
                    case "2 4":
                        $("#hit2-2-4").show();
                        break;
                    case "2 5":
                        $("#hit2-2-5").show();
                        break;
                    case "2 6":
                        $("#hit2-2-6").show();
                        break;
                    case "2 7":
                        $("#hit2-2-7").show();
                        break;
                    case "3 1":
                        $("#hit2-3-1").show();
                        break;
                    case "3 2":
                        $("#hit2-3-2").show();
                        break;
                    case "3 3":
                        $("#hit2-3-3").show();
                        break;
                    case "3 4":
                        $("#hit2-3-4").show();
                        break;
                    case "3 5":
                        $("#hit2-3-5").show();
                        break;
                    case "3 6":
                        $("#hit2-3-6").show();
                        break;
                    case "3 7":
                        $("#hit2-3-7").show();
                        break;
                    case "4 1":
                        $("#hit2-4-1").show();
                        break;
                    case "4 2":
                        $("#hit2-4-2").show();
                        break;
                    case "4 3":
                        $("#hit2-4-3").show();
                        break;
                    case "4 4":
                        $("#hit2-4-4").show();
                        break;
                    case "4 5":
                        $("#hit2-4-5").show();
                        break;
                    case "4 6":
                        $("#hit2-4-6").show();
                        break;
                    case "4 7":
                        $("#hit2-4-7").show();
                        break;
                    case "5 1":
                        $("#hit2-5-1").show();
                        break;
                    case "5 2":
                        $("#hit2-5-2").show();
                        break;
                    case "5 3":
                        $("#hit2-5-3").show();
                        break;
                    case "5 4":
                        $("#hit2-5-4").show();
                        break;
                    case "5 5":
                        $("#hit2-5-5").show();
                        break;
                    case "5 6":
                        $("#hit2-5-6").show();
                        break;
                    case "5 7":
                        $("#hit2-5-7").show();
                        break;
                    case "6 1":
                        $("#hit2-6-1").show();
                        break;
                    case "6 2":
                        $("#hit2-6-2").show();
                        break;
                    case "6 3":
                        $("#hit2-6-3").show();
                        break;
                    case "6 4":
                        $("#hit2-6-4").show();
                        break;
                    case "6 5":
                        $("#hit2-6-5").show();
                        break;
                    case "6 6":
                        $("#hit2-6-6").show();
                        break;
                    case "6 7":
                        $("#hit2-6-7").show();
                        break;
                    case "7 1":
                        $("#hit2-7-1").show();
                        break;
                    case "7 2":
                        $("#hit2-7-2").show();
                        break;
                    case "7 3":
                        $("#hit2-7-3").show();
                        break;
                    case "7 4":
                        $("#hit2-7-4").show();
                        break;
                    case "7 5":
                        $("#hit2-7-5").show();
                        break;
                    case "7 6":
                        $("#hit2-7-6").show();
                        break;
                    case "7 7":
                        $("#hit2-7-7").show();
                        break;
                }
            }
            SS1[1] = 0;
            $(this).hide();
            $("#i-400").hide();
            $("#player1").hide();
            $("#player2").show();
            $("#midway").show();
            if (CV2[0] < 0) {
                CV2[0] = 0;
            }
            if (CVL2[0] < 0) {
                CVL2[0] = 0;
            }
            if (BB2[0] < 0) {
                BB2[0] = 0;
            }
            if (CA2[0] < 0) {
                CA2[0] = 0;
            }
            if (CL2[0] < 0) {
                CL2[0] = 0;
            }
            if (DD2[0] < 0) {
                DD2[0] = 0;
            }
            if (SS2[0] < 0) {
                SS2[0] = 0;
            }
            var USStotal = CV2[0] + CVL2[0] + BB2[0] + CA2[0] + CL2[0] + DD2[0] + SS2[0];
            if (USStotal == 0) {
                $("#turns").hide();
                $("table").hide();
                $("#endGame").show();
                $("#win1").show();
            } else {
                if (CV2[1] == 3 && CV2[0] != 0) {
                    $("#attack").show();
                    $("#x2").show();
                    $("#y2").show();
                    $("#attack2-1").show();
                } else {
                    CV2[1] = CV2[1] + 1;
                    $("#attack").hide();
                    $("#x2").hide();
                    $("#y2").hide();
                    $("#finishMove2-1").show();
                }
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove1-7").click(function() {
        $(this).hide();
        $("#i-400").hide();
        $("#player1").hide();
        $("#midway").show();
        $("#player2").show();
        if (CV2[0] < 0) {
            CV2[0] = 0;
        }
        if (CVL2[0] < 0) {
            CVL2[0] = 0;
        }
        if (BB2[0] < 0) {
            BB2[0] = 0;
        }
        if (CA2[0] < 0) {
            CA2[0] = 0;
        }
        if (CL2[0] < 0) {
            CL2[0] = 0;
        }
        if (DD2[0] < 0) {
            DD2[0] = 0;
        }
        if (SS2[0] < 0) {
            SS2[0] = 0;
        }
        var USStotal = CV2[0] + CVL2[0] + BB2[0] + CA2[0] + CL2[0] + DD2[0] + SS2[0];
        if (USStotal == 0) {
            $("#turns").hide();
            $("table").hide();
            $("#endGame").show();
            $("#win1").show();
        } else {
            if (CV2[1] == 3 && CV2[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack2-1").show();
            } else {
                CV2[1] = CV2[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove2-1").show();
            }
        }
    });

    $("#attack2-1").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column1[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV1[0] = CV1[0] - 4;
                    break;
                case 2:
                    BB1[0] = BB1[0] - 4;
                    break;
                case 3:
                    CA1[0] = CA1[0] - 4;
                    break;
                case 4:
                    CL1[0] = CL1[0] - 4;
                    break;
                case 5:
                    DD1[0] = DD1[0] - 1;
                    break;
                case 6:
                    DE1[0] = DE1[0] - 1;
                    break;
                case 7:
                    SS1[0] = SS1[0] - 2;
                    break;
            }
            if (column1[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis1-1-1").show();
                        break;
                    case "1 2":
                        $("#mis1-1-2").show();
                        break;
                    case "1 3":
                        $("#mis1-1-3").show();
                        break;
                    case "1 4":
                        $("#mis1-1-4").show();
                        break;
                    case "1 5":
                        $("#mis1-1-5").show();
                        break;
                    case "1 6":
                        $("#mis1-1-6").show();
                        break;
                    case "1 7":
                        $("#mis1-1-7").show();
                        break;
                    case "2 1":
                        $("#mis1-2-1").show();
                        break;
                    case "2 2":
                        $("#mis1-2-2").show();
                        break;
                    case "2 3":
                        $("#mis1-2-3").show();
                        break;
                    case "2 4":
                        $("#mis1-2-4").show();
                        break;
                    case "2 5":
                        $("#mis1-2-5").show();
                        break;
                    case "2 6":
                        $("#mis1-2-6").show();
                        break;
                    case "2 7":
                        $("#mis1-2-7").show();
                        break;
                    case "3 1":
                        $("#mis1-3-1").show();
                        break;
                    case "3 2":
                        $("#mis1-3-2").show();
                        break;
                    case "3 3":
                        $("#mis1-3-3").show();
                        break;
                    case "3 4":
                        $("#mis1-3-4").show();
                        break;
                    case "3 5":
                        $("#mis1-3-5").show();
                        break;
                    case "3 6":
                        $("#mis1-3-6").show();
                        break;
                    case "3 7":
                        $("#mis1-3-7").show();
                        break;
                    case "4 1":
                        $("#mis1-4-1").show();
                        break;
                    case "4 2":
                        $("#mis1-4-2").show();
                        break;
                    case "4 3":
                        $("#mis1-4-3").show();
                        break;
                    case "4 4":
                        $("#mis1-4-4").show();
                        break;
                    case "4 5":
                        $("#mis1-4-5").show();
                        break;
                    case "4 6":
                        $("#mis1-4-6").show();
                        break;
                    case "4 7":
                        $("#mis1-4-7").show();
                        break;
                    case "5 1":
                        $("#mis1-5-1").show();
                        break;
                    case "5 2":
                        $("#mis1-5-2").show();
                        break;
                    case "5 3":
                        $("#mis1-5-3").show();
                        break;
                    case "5 4":
                        $("#mis1-5-4").show();
                        break;
                    case "5 5":
                        $("#mis1-5-5").show();
                        break;
                    case "5 6":
                        $("#mis1-5-6").show();
                        break;
                    case "5 7":
                        $("#mis1-5-7").show();
                        break;
                    case "6 1":
                        $("#mis1-6-1").show();
                        break;
                    case "6 2":
                        $("#mis1-6-2").show();
                        break;
                    case "6 3":
                        $("#mis1-6-3").show();
                        break;
                    case "6 4":
                        $("#mis1-6-4").show();
                        break;
                    case "6 5":
                        $("#mis1-6-5").show();
                        break;
                    case "6 6":
                        $("#mis1-6-6").show();
                        break;
                    case "6 7":
                        $("#mis1-6-7").show();
                        break;
                    case "7 1":
                        $("#mis1-7-1").show();
                        break;
                    case "7 2":
                        $("#mis1-7-2").show();
                        break;
                    case "7 3":
                        $("#mis1-7-3").show();
                        break;
                    case "7 4":
                        $("#mis1-7-4").show();
                        break;
                    case "7 5":
                        $("#mis1-7-5").show();
                        break;
                    case "7 6":
                        $("#mis1-7-6").show();
                        break;
                    case "7 7":
                        $("#mis1-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit1-1-1").show();
                        break;
                    case "1 2":
                        $("#hit1-1-2").show();
                        break;
                    case "1 3":
                        $("#hit1-1-3").show();
                        break;
                    case "1 4":
                        $("#hit1-1-4").show();
                        break;
                    case "1 5":
                        $("#hit1-1-5").show();
                        break;
                    case "1 6":
                        $("#hit1-1-6").show();
                        break;
                    case "1 7":
                        $("#hit1-1-7").show();
                        break;
                    case "2 1":
                        $("#hit1-2-1").show();
                        break;
                    case "2 2":
                        $("#hit1-2-2").show();
                        break;
                    case "2 3":
                        $("#hit1-2-3").show();
                        break;
                    case "2 4":
                        $("#hit1-2-4").show();
                        break;
                    case "2 5":
                        $("#hit1-2-5").show();
                        break;
                    case "2 6":
                        $("#hit1-2-6").show();
                        break;
                    case "2 7":
                        $("#hit1-2-7").show();
                        break;
                    case "3 1":
                        $("#hit1-3-1").show();
                        break;
                    case "3 2":
                        $("#hit1-3-2").show();
                        break;
                    case "3 3":
                        $("#hit1-3-3").show();
                        break;
                    case "3 4":
                        $("#hit1-3-4").show();
                        break;
                    case "3 5":
                        $("#hit1-3-5").show();
                        break;
                    case "3 6":
                        $("#hit1-3-6").show();
                        break;
                    case "3 7":
                        $("#hit1-3-7").show();
                        break;
                    case "4 1":
                        $("#hit1-4-1").show();
                        break;
                    case "4 2":
                        $("#hit1-4-2").show();
                        break;
                    case "4 3":
                        $("#hit1-4-3").show();
                        break;
                    case "4 4":
                        $("#hit1-4-4").show();
                        break;
                    case "4 5":
                        $("#hit1-4-5").show();
                        break;
                    case "4 6":
                        $("#hit1-4-6").show();
                        break;
                    case "4 7":
                        $("#hit1-4-7").show();
                        break;
                    case "5 1":
                        $("#hit1-5-1").show();
                        break;
                    case "5 2":
                        $("#hit1-5-2").show();
                        break;
                    case "5 3":
                        $("#hit1-5-3").show();
                        break;
                    case "5 4":
                        $("#hit1-5-4").show();
                        break;
                    case "5 5":
                        $("#hit1-5-5").show();
                        break;
                    case "5 6":
                        $("#hit1-5-6").show();
                        break;
                    case "5 7":
                        $("#hit1-5-7").show();
                        break;
                    case "6 1":
                        $("#hit1-6-1").show();
                        break;
                    case "6 2":
                        $("#hit1-6-2").show();
                        break;
                    case "6 3":
                        $("#hit1-6-3").show();
                        break;
                    case "6 4":
                        $("#hit1-6-4").show();
                        break;
                    case "6 5":
                        $("#hit1-6-5").show();
                        break;
                    case "6 6":
                        $("#hit1-6-6").show();
                        break;
                    case "6 7":
                        $("#hit1-6-7").show();
                        break;
                    case "7 1":
                        $("#hit1-7-1").show();
                        break;
                    case "7 2":
                        $("#hit1-7-2").show();
                        break;
                    case "7 3":
                        $("#hit1-7-3").show();
                        break;
                    case "7 4":
                        $("#hit1-7-4").show();
                        break;
                    case "7 5":
                        $("#hit1-7-5").show();
                        break;
                    case "7 6":
                        $("#hit1-7-6").show();
                        break;
                    case "7 7":
                        $("#hit1-7-7").show();
                        break;
                }
            }
            CV2[1] = 0;
            $(this).hide();
            $("#midway").hide();
            $("#saipan").show();
            if (CVL2[1] == 3 && CVL2[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack2-2").show();
            } else {
                CVL2[1] = CVL2[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove2-2").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove2-1").click(function() {
        $(this).hide();
        $("#midway").hide();
        $("#saipan").show();
        if (CVL2[1] == 3 && CVL2[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack2-2").show();
        } else {
            CVL2[1] = CVL2[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove2-2").show();
        }
    });

    $("#attack2-2").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column1[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV1[0] = CV1[0] - 4;
                    break;
                case 2:
                    BB1[0] = BB1[0] - 4;
                    break;
                case 3:
                    CA1[0] = CA1[0] - 4;
                    break;
                case 4:
                    CL1[0] = CL1[0] - 4;
                    break;
                case 5:
                    DD1[0] = DD1[0] - 1;
                    break;
                case 6:
                    DE1[0] = DE1[0] - 1;
                    break;
                case 7:
                    SS1[0] = SS1[0] - 2;
                    break;
            }
            if (column1[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis1-1-1").show();
                        break;
                    case "1 2":
                        $("#mis1-1-2").show();
                        break;
                    case "1 3":
                        $("#mis1-1-3").show();
                        break;
                    case "1 4":
                        $("#mis1-1-4").show();
                        break;
                    case "1 5":
                        $("#mis1-1-5").show();
                        break;
                    case "1 6":
                        $("#mis1-1-6").show();
                        break;
                    case "1 7":
                        $("#mis1-1-7").show();
                        break;
                    case "2 1":
                        $("#mis1-2-1").show();
                        break;
                    case "2 2":
                        $("#mis1-2-2").show();
                        break;
                    case "2 3":
                        $("#mis1-2-3").show();
                        break;
                    case "2 4":
                        $("#mis1-2-4").show();
                        break;
                    case "2 5":
                        $("#mis1-2-5").show();
                        break;
                    case "2 6":
                        $("#mis1-2-6").show();
                        break;
                    case "2 7":
                        $("#mis1-2-7").show();
                        break;
                    case "3 1":
                        $("#mis1-3-1").show();
                        break;
                    case "3 2":
                        $("#mis1-3-2").show();
                        break;
                    case "3 3":
                        $("#mis1-3-3").show();
                        break;
                    case "3 4":
                        $("#mis1-3-4").show();
                        break;
                    case "3 5":
                        $("#mis1-3-5").show();
                        break;
                    case "3 6":
                        $("#mis1-3-6").show();
                        break;
                    case "3 7":
                        $("#mis1-3-7").show();
                        break;
                    case "4 1":
                        $("#mis1-4-1").show();
                        break;
                    case "4 2":
                        $("#mis1-4-2").show();
                        break;
                    case "4 3":
                        $("#mis1-4-3").show();
                        break;
                    case "4 4":
                        $("#mis1-4-4").show();
                        break;
                    case "4 5":
                        $("#mis1-4-5").show();
                        break;
                    case "4 6":
                        $("#mis1-4-6").show();
                        break;
                    case "4 7":
                        $("#mis1-4-7").show();
                        break;
                    case "5 1":
                        $("#mis1-5-1").show();
                        break;
                    case "5 2":
                        $("#mis1-5-2").show();
                        break;
                    case "5 3":
                        $("#mis1-5-3").show();
                        break;
                    case "5 4":
                        $("#mis1-5-4").show();
                        break;
                    case "5 5":
                        $("#mis1-5-5").show();
                        break;
                    case "5 6":
                        $("#mis1-5-6").show();
                        break;
                    case "5 7":
                        $("#mis1-5-7").show();
                        break;
                    case "6 1":
                        $("#mis1-6-1").show();
                        break;
                    case "6 2":
                        $("#mis1-6-2").show();
                        break;
                    case "6 3":
                        $("#mis1-6-3").show();
                        break;
                    case "6 4":
                        $("#mis1-6-4").show();
                        break;
                    case "6 5":
                        $("#mis1-6-5").show();
                        break;
                    case "6 6":
                        $("#mis1-6-6").show();
                        break;
                    case "6 7":
                        $("#mis1-6-7").show();
                        break;
                    case "7 1":
                        $("#mis1-7-1").show();
                        break;
                    case "7 2":
                        $("#mis1-7-2").show();
                        break;
                    case "7 3":
                        $("#mis1-7-3").show();
                        break;
                    case "7 4":
                        $("#mis1-7-4").show();
                        break;
                    case "7 5":
                        $("#mis1-7-5").show();
                        break;
                    case "7 6":
                        $("#mis1-7-6").show();
                        break;
                    case "7 7":
                        $("#mis1-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit1-1-1").show();
                        break;
                    case "1 2":
                        $("#hit1-1-2").show();
                        break;
                    case "1 3":
                        $("#hit1-1-3").show();
                        break;
                    case "1 4":
                        $("#hit1-1-4").show();
                        break;
                    case "1 5":
                        $("#hit1-1-5").show();
                        break;
                    case "1 6":
                        $("#hit1-1-6").show();
                        break;
                    case "1 7":
                        $("#hit1-1-7").show();
                        break;
                    case "2 1":
                        $("#hit1-2-1").show();
                        break;
                    case "2 2":
                        $("#hit1-2-2").show();
                        break;
                    case "2 3":
                        $("#hit1-2-3").show();
                        break;
                    case "2 4":
                        $("#hit1-2-4").show();
                        break;
                    case "2 5":
                        $("#hit1-2-5").show();
                        break;
                    case "2 6":
                        $("#hit1-2-6").show();
                        break;
                    case "2 7":
                        $("#hit1-2-7").show();
                        break;
                    case "3 1":
                        $("#hit1-3-1").show();
                        break;
                    case "3 2":
                        $("#hit1-3-2").show();
                        break;
                    case "3 3":
                        $("#hit1-3-3").show();
                        break;
                    case "3 4":
                        $("#hit1-3-4").show();
                        break;
                    case "3 5":
                        $("#hit1-3-5").show();
                        break;
                    case "3 6":
                        $("#hit1-3-6").show();
                        break;
                    case "3 7":
                        $("#hit1-3-7").show();
                        break;
                    case "4 1":
                        $("#hit1-4-1").show();
                        break;
                    case "4 2":
                        $("#hit1-4-2").show();
                        break;
                    case "4 3":
                        $("#hit1-4-3").show();
                        break;
                    case "4 4":
                        $("#hit1-4-4").show();
                        break;
                    case "4 5":
                        $("#hit1-4-5").show();
                        break;
                    case "4 6":
                        $("#hit1-4-6").show();
                        break;
                    case "4 7":
                        $("#hit1-4-7").show();
                        break;
                    case "5 1":
                        $("#hit1-5-1").show();
                        break;
                    case "5 2":
                        $("#hit1-5-2").show();
                        break;
                    case "5 3":
                        $("#hit1-5-3").show();
                        break;
                    case "5 4":
                        $("#hit1-5-4").show();
                        break;
                    case "5 5":
                        $("#hit1-5-5").show();
                        break;
                    case "5 6":
                        $("#hit1-5-6").show();
                        break;
                    case "5 7":
                        $("#hit1-5-7").show();
                        break;
                    case "6 1":
                        $("#hit1-6-1").show();
                        break;
                    case "6 2":
                        $("#hit1-6-2").show();
                        break;
                    case "6 3":
                        $("#hit1-6-3").show();
                        break;
                    case "6 4":
                        $("#hit1-6-4").show();
                        break;
                    case "6 5":
                        $("#hit1-6-5").show();
                        break;
                    case "6 6":
                        $("#hit1-6-6").show();
                        break;
                    case "6 7":
                        $("#hit1-6-7").show();
                        break;
                    case "7 1":
                        $("#hit1-7-1").show();
                        break;
                    case "7 2":
                        $("#hit1-7-2").show();
                        break;
                    case "7 3":
                        $("#hit1-7-3").show();
                        break;
                    case "7 4":
                        $("#hit1-7-4").show();
                        break;
                    case "7 5":
                        $("#hit1-7-5").show();
                        break;
                    case "7 6":
                        $("#hit1-7-6").show();
                        break;
                    case "7 7":
                        $("#hit1-7-7").show();
                        break;
                }
            }
            CVL2[1] = 0;
            $(this).hide();
            $("#saipan").hide();
            $("#iowa").show();
            if (BB2[1] == 3 && BB2[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack2-3").show();
            } else {
                BB2[1] = BB2[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove2-3").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove2-2").click(function() {
        $(this).hide();
        $("#saipan").hide();
        $("#iowa").show();
        if (BB2[1] == 3 && BB2[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack2-3").show();
        } else {
            BB2[1] = BB2[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove2-3").show();
        }
    });

    $("#attack2-3").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column1[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV1[0] = CV1[0] - 3;
                    break;
                case 2:
                    BB1[0] = BB1[0] - 3;
                    break;
                case 3:
                    CA1[0] = CA1[0] - 3;
                    break;
                case 4:
                    CL1[0] = CL1[0] - 3;
                    break;
                case 5:
                    DD1[0] = DD1[0] - 2;
                    break;
                case 6:
                    DE1[0] = DE1[0] - 2;
                    break;
                case 7:
                    SS1[0] = SS1[0] - 0;
                    break;
            }
            if (column1[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis1-1-1").show();
                        break;
                    case "1 2":
                        $("#mis1-1-2").show();
                        break;
                    case "1 3":
                        $("#mis1-1-3").show();
                        break;
                    case "1 4":
                        $("#mis1-1-4").show();
                        break;
                    case "1 5":
                        $("#mis1-1-5").show();
                        break;
                    case "1 6":
                        $("#mis1-1-6").show();
                        break;
                    case "1 7":
                        $("#mis1-1-7").show();
                        break;
                    case "2 1":
                        $("#mis1-2-1").show();
                        break;
                    case "2 2":
                        $("#mis1-2-2").show();
                        break;
                    case "2 3":
                        $("#mis1-2-3").show();
                        break;
                    case "2 4":
                        $("#mis1-2-4").show();
                        break;
                    case "2 5":
                        $("#mis1-2-5").show();
                        break;
                    case "2 6":
                        $("#mis1-2-6").show();
                        break;
                    case "2 7":
                        $("#mis1-2-7").show();
                        break;
                    case "3 1":
                        $("#mis1-3-1").show();
                        break;
                    case "3 2":
                        $("#mis1-3-2").show();
                        break;
                    case "3 3":
                        $("#mis1-3-3").show();
                        break;
                    case "3 4":
                        $("#mis1-3-4").show();
                        break;
                    case "3 5":
                        $("#mis1-3-5").show();
                        break;
                    case "3 6":
                        $("#mis1-3-6").show();
                        break;
                    case "3 7":
                        $("#mis1-3-7").show();
                        break;
                    case "4 1":
                        $("#mis1-4-1").show();
                        break;
                    case "4 2":
                        $("#mis1-4-2").show();
                        break;
                    case "4 3":
                        $("#mis1-4-3").show();
                        break;
                    case "4 4":
                        $("#mis1-4-4").show();
                        break;
                    case "4 5":
                        $("#mis1-4-5").show();
                        break;
                    case "4 6":
                        $("#mis1-4-6").show();
                        break;
                    case "4 7":
                        $("#mis1-4-7").show();
                        break;
                    case "5 1":
                        $("#mis1-5-1").show();
                        break;
                    case "5 2":
                        $("#mis1-5-2").show();
                        break;
                    case "5 3":
                        $("#mis1-5-3").show();
                        break;
                    case "5 4":
                        $("#mis1-5-4").show();
                        break;
                    case "5 5":
                        $("#mis1-5-5").show();
                        break;
                    case "5 6":
                        $("#mis1-5-6").show();
                        break;
                    case "5 7":
                        $("#mis1-5-7").show();
                        break;
                    case "6 1":
                        $("#mis1-6-1").show();
                        break;
                    case "6 2":
                        $("#mis1-6-2").show();
                        break;
                    case "6 3":
                        $("#mis1-6-3").show();
                        break;
                    case "6 4":
                        $("#mis1-6-4").show();
                        break;
                    case "6 5":
                        $("#mis1-6-5").show();
                        break;
                    case "6 6":
                        $("#mis1-6-6").show();
                        break;
                    case "6 7":
                        $("#mis1-6-7").show();
                        break;
                    case "7 1":
                        $("#mis1-7-1").show();
                        break;
                    case "7 2":
                        $("#mis1-7-2").show();
                        break;
                    case "7 3":
                        $("#mis1-7-3").show();
                        break;
                    case "7 4":
                        $("#mis1-7-4").show();
                        break;
                    case "7 5":
                        $("#mis1-7-5").show();
                        break;
                    case "7 6":
                        $("#mis1-7-6").show();
                        break;
                    case "7 7":
                        $("#mis1-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit1-1-1").show();
                        break;
                    case "1 2":
                        $("#hit1-1-2").show();
                        break;
                    case "1 3":
                        $("#hit1-1-3").show();
                        break;
                    case "1 4":
                        $("#hit1-1-4").show();
                        break;
                    case "1 5":
                        $("#hit1-1-5").show();
                        break;
                    case "1 6":
                        $("#hit1-1-6").show();
                        break;
                    case "1 7":
                        $("#hit1-1-7").show();
                        break;
                    case "2 1":
                        $("#hit1-2-1").show();
                        break;
                    case "2 2":
                        $("#hit1-2-2").show();
                        break;
                    case "2 3":
                        $("#hit1-2-3").show();
                        break;
                    case "2 4":
                        $("#hit1-2-4").show();
                        break;
                    case "2 5":
                        $("#hit1-2-5").show();
                        break;
                    case "2 6":
                        $("#hit1-2-6").show();
                        break;
                    case "2 7":
                        $("#hit1-2-7").show();
                        break;
                    case "3 1":
                        $("#hit1-3-1").show();
                        break;
                    case "3 2":
                        $("#hit1-3-2").show();
                        break;
                    case "3 3":
                        $("#hit1-3-3").show();
                        break;
                    case "3 4":
                        $("#hit1-3-4").show();
                        break;
                    case "3 5":
                        $("#hit1-3-5").show();
                        break;
                    case "3 6":
                        $("#hit1-3-6").show();
                        break;
                    case "3 7":
                        $("#hit1-3-7").show();
                        break;
                    case "4 1":
                        $("#hit1-4-1").show();
                        break;
                    case "4 2":
                        $("#hit1-4-2").show();
                        break;
                    case "4 3":
                        $("#hit1-4-3").show();
                        break;
                    case "4 4":
                        $("#hit1-4-4").show();
                        break;
                    case "4 5":
                        $("#hit1-4-5").show();
                        break;
                    case "4 6":
                        $("#hit1-4-6").show();
                        break;
                    case "4 7":
                        $("#hit1-4-7").show();
                        break;
                    case "5 1":
                        $("#hit1-5-1").show();
                        break;
                    case "5 2":
                        $("#hit1-5-2").show();
                        break;
                    case "5 3":
                        $("#hit1-5-3").show();
                        break;
                    case "5 4":
                        $("#hit1-5-4").show();
                        break;
                    case "5 5":
                        $("#hit1-5-5").show();
                        break;
                    case "5 6":
                        $("#hit1-5-6").show();
                        break;
                    case "5 7":
                        $("#hit1-5-7").show();
                        break;
                    case "6 1":
                        $("#hit1-6-1").show();
                        break;
                    case "6 2":
                        $("#hit1-6-2").show();
                        break;
                    case "6 3":
                        $("#hit1-6-3").show();
                        break;
                    case "6 4":
                        $("#hit1-6-4").show();
                        break;
                    case "6 5":
                        $("#hit1-6-5").show();
                        break;
                    case "6 6":
                        $("#hit1-6-6").show();
                        break;
                    case "6 7":
                        $("#hit1-6-7").show();
                        break;
                    case "7 1":
                        $("#hit1-7-1").show();
                        break;
                    case "7 2":
                        $("#hit1-7-2").show();
                        break;
                    case "7 3":
                        $("#hit1-7-3").show();
                        break;
                    case "7 4":
                        $("#hit1-7-4").show();
                        break;
                    case "7 5":
                        $("#hit1-7-5").show();
                        break;
                    case "7 6":
                        $("#hit1-7-6").show();
                        break;
                    case "7 7":
                        $("#hit1-7-7").show();
                        break;
                }
            }
            BB2[1] = 0;
            $(this).hide();
            $("#iowa").hide();
            $("#baltimore").show();
            if (CA2[1] == 2 && CA2[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack2-4").show();
            } else {
                CA2[1] = CA2[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove2-4").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove2-3").click(function() {
        $(this).hide();
        $("#iowa").hide();
        $("#baltimore").show();
        if (CA2[1] == 2 && CA2[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack2-4").show();
        } else {
            CA2[1] = CA2[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove2-4").show();
        }
    });

    $("#attack2-4").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column1[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV1[0] = CV1[0] - 2;
                    break;
                case 2:
                    BB1[0] = BB1[0] - 2;
                    break;
                case 3:
                    CA1[0] = CA1[0] - 2;
                    break;
                case 4:
                    CL1[0] = CL1[0] - 2;
                    break;
                case 5:
                    DD1[0] = DD1[0] - 2;
                    break;
                case 6:
                    DE1[0] = DE1[0] - 2;
                    break;
                case 7:
                    SS1[0] = SS1[0] - 0;
                    break;
            }
            if (column1[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis1-1-1").show();
                        break;
                    case "1 2":
                        $("#mis1-1-2").show();
                        break;
                    case "1 3":
                        $("#mis1-1-3").show();
                        break;
                    case "1 4":
                        $("#mis1-1-4").show();
                        break;
                    case "1 5":
                        $("#mis1-1-5").show();
                        break;
                    case "1 6":
                        $("#mis1-1-6").show();
                        break;
                    case "1 7":
                        $("#mis1-1-7").show();
                        break;
                    case "2 1":
                        $("#mis1-2-1").show();
                        break;
                    case "2 2":
                        $("#mis1-2-2").show();
                        break;
                    case "2 3":
                        $("#mis1-2-3").show();
                        break;
                    case "2 4":
                        $("#mis1-2-4").show();
                        break;
                    case "2 5":
                        $("#mis1-2-5").show();
                        break;
                    case "2 6":
                        $("#mis1-2-6").show();
                        break;
                    case "2 7":
                        $("#mis1-2-7").show();
                        break;
                    case "3 1":
                        $("#mis1-3-1").show();
                        break;
                    case "3 2":
                        $("#mis1-3-2").show();
                        break;
                    case "3 3":
                        $("#mis1-3-3").show();
                        break;
                    case "3 4":
                        $("#mis1-3-4").show();
                        break;
                    case "3 5":
                        $("#mis1-3-5").show();
                        break;
                    case "3 6":
                        $("#mis1-3-6").show();
                        break;
                    case "3 7":
                        $("#mis1-3-7").show();
                        break;
                    case "4 1":
                        $("#mis1-4-1").show();
                        break;
                    case "4 2":
                        $("#mis1-4-2").show();
                        break;
                    case "4 3":
                        $("#mis1-4-3").show();
                        break;
                    case "4 4":
                        $("#mis1-4-4").show();
                        break;
                    case "4 5":
                        $("#mis1-4-5").show();
                        break;
                    case "4 6":
                        $("#mis1-4-6").show();
                        break;
                    case "4 7":
                        $("#mis1-4-7").show();
                        break;
                    case "5 1":
                        $("#mis1-5-1").show();
                        break;
                    case "5 2":
                        $("#mis1-5-2").show();
                        break;
                    case "5 3":
                        $("#mis1-5-3").show();
                        break;
                    case "5 4":
                        $("#mis1-5-4").show();
                        break;
                    case "5 5":
                        $("#mis1-5-5").show();
                        break;
                    case "5 6":
                        $("#mis1-5-6").show();
                        break;
                    case "5 7":
                        $("#mis1-5-7").show();
                        break;
                    case "6 1":
                        $("#mis1-6-1").show();
                        break;
                    case "6 2":
                        $("#mis1-6-2").show();
                        break;
                    case "6 3":
                        $("#mis1-6-3").show();
                        break;
                    case "6 4":
                        $("#mis1-6-4").show();
                        break;
                    case "6 5":
                        $("#mis1-6-5").show();
                        break;
                    case "6 6":
                        $("#mis1-6-6").show();
                        break;
                    case "6 7":
                        $("#mis1-6-7").show();
                        break;
                    case "7 1":
                        $("#mis1-7-1").show();
                        break;
                    case "7 2":
                        $("#mis1-7-2").show();
                        break;
                    case "7 3":
                        $("#mis1-7-3").show();
                        break;
                    case "7 4":
                        $("#mis1-7-4").show();
                        break;
                    case "7 5":
                        $("#mis1-7-5").show();
                        break;
                    case "7 6":
                        $("#mis1-7-6").show();
                        break;
                    case "7 7":
                        $("#mis1-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit1-1-1").show();
                        break;
                    case "1 2":
                        $("#hit1-1-2").show();
                        break;
                    case "1 3":
                        $("#hit1-1-3").show();
                        break;
                    case "1 4":
                        $("#hit1-1-4").show();
                        break;
                    case "1 5":
                        $("#hit1-1-5").show();
                        break;
                    case "1 6":
                        $("#hit1-1-6").show();
                        break;
                    case "1 7":
                        $("#hit1-1-7").show();
                        break;
                    case "2 1":
                        $("#hit1-2-1").show();
                        break;
                    case "2 2":
                        $("#hit1-2-2").show();
                        break;
                    case "2 3":
                        $("#hit1-2-3").show();
                        break;
                    case "2 4":
                        $("#hit1-2-4").show();
                        break;
                    case "2 5":
                        $("#hit1-2-5").show();
                        break;
                    case "2 6":
                        $("#hit1-2-6").show();
                        break;
                    case "2 7":
                        $("#hit1-2-7").show();
                        break;
                    case "3 1":
                        $("#hit1-3-1").show();
                        break;
                    case "3 2":
                        $("#hit1-3-2").show();
                        break;
                    case "3 3":
                        $("#hit1-3-3").show();
                        break;
                    case "3 4":
                        $("#hit1-3-4").show();
                        break;
                    case "3 5":
                        $("#hit1-3-5").show();
                        break;
                    case "3 6":
                        $("#hit1-3-6").show();
                        break;
                    case "3 7":
                        $("#hit1-3-7").show();
                        break;
                    case "4 1":
                        $("#hit1-4-1").show();
                        break;
                    case "4 2":
                        $("#hit1-4-2").show();
                        break;
                    case "4 3":
                        $("#hit1-4-3").show();
                        break;
                    case "4 4":
                        $("#hit1-4-4").show();
                        break;
                    case "4 5":
                        $("#hit1-4-5").show();
                        break;
                    case "4 6":
                        $("#hit1-4-6").show();
                        break;
                    case "4 7":
                        $("#hit1-4-7").show();
                        break;
                    case "5 1":
                        $("#hit1-5-1").show();
                        break;
                    case "5 2":
                        $("#hit1-5-2").show();
                        break;
                    case "5 3":
                        $("#hit1-5-3").show();
                        break;
                    case "5 4":
                        $("#hit1-5-4").show();
                        break;
                    case "5 5":
                        $("#hit1-5-5").show();
                        break;
                    case "5 6":
                        $("#hit1-5-6").show();
                        break;
                    case "5 7":
                        $("#hit1-5-7").show();
                        break;
                    case "6 1":
                        $("#hit1-6-1").show();
                        break;
                    case "6 2":
                        $("#hit1-6-2").show();
                        break;
                    case "6 3":
                        $("#hit1-6-3").show();
                        break;
                    case "6 4":
                        $("#hit1-6-4").show();
                        break;
                    case "6 5":
                        $("#hit1-6-5").show();
                        break;
                    case "6 6":
                        $("#hit1-6-6").show();
                        break;
                    case "6 7":
                        $("#hit1-6-7").show();
                        break;
                    case "7 1":
                        $("#hit1-7-1").show();
                        break;
                    case "7 2":
                        $("#hit1-7-2").show();
                        break;
                    case "7 3":
                        $("#hit1-7-3").show();
                        break;
                    case "7 4":
                        $("#hit1-7-4").show();
                        break;
                    case "7 5":
                        $("#hit1-7-5").show();
                        break;
                    case "7 6":
                        $("#hit1-7-6").show();
                        break;
                    case "7 7":
                        $("#hit1-7-7").show();
                        break;
                }
            }
            CA2[1] = 0;
            $(this).hide();
            $("#baltimore").hide();
            $("#cleveland").show();
            if (CL2[1] == 2 && CL2[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack2-5").show();
            } else {
                CL2[1] = CL2[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove2-5").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove2-4").click(function() {
        $(this).hide();
        $("#baltimore").hide();
        $("#cleveland").show();
        if (CL2[1] == 2 && CL2[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack2-5").show();
        } else {
            CL2[1] = CL2[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove2-5").show();
        }
    });

    $("#attack2-5").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column1[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV1[0] = CV1[0] - 2;
                    break;
                case 2:
                    BB1[0] = BB1[0] - 2;
                    break;
                case 3:
                    CA1[0] = CA1[0] - 2;
                    break;
                case 4:
                    CL1[0] = CL1[0] - 2;
                    break;
                case 5:
                    DD1[0] = DD1[0] - 2;
                    break;
                case 6:
                    DE1[0] = DE1[0] - 2;
                    break;
                case 7:
                    SS1[0] = SS1[0] - 0;
                    break;
            }
            if (column1[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis1-1-1").show();
                        break;
                    case "1 2":
                        $("#mis1-1-2").show();
                        break;
                    case "1 3":
                        $("#mis1-1-3").show();
                        break;
                    case "1 4":
                        $("#mis1-1-4").show();
                        break;
                    case "1 5":
                        $("#mis1-1-5").show();
                        break;
                    case "1 6":
                        $("#mis1-1-6").show();
                        break;
                    case "1 7":
                        $("#mis1-1-7").show();
                        break;
                    case "2 1":
                        $("#mis1-2-1").show();
                        break;
                    case "2 2":
                        $("#mis1-2-2").show();
                        break;
                    case "2 3":
                        $("#mis1-2-3").show();
                        break;
                    case "2 4":
                        $("#mis1-2-4").show();
                        break;
                    case "2 5":
                        $("#mis1-2-5").show();
                        break;
                    case "2 6":
                        $("#mis1-2-6").show();
                        break;
                    case "2 7":
                        $("#mis1-2-7").show();
                        break;
                    case "3 1":
                        $("#mis1-3-1").show();
                        break;
                    case "3 2":
                        $("#mis1-3-2").show();
                        break;
                    case "3 3":
                        $("#mis1-3-3").show();
                        break;
                    case "3 4":
                        $("#mis1-3-4").show();
                        break;
                    case "3 5":
                        $("#mis1-3-5").show();
                        break;
                    case "3 6":
                        $("#mis1-3-6").show();
                        break;
                    case "3 7":
                        $("#mis1-3-7").show();
                        break;
                    case "4 1":
                        $("#mis1-4-1").show();
                        break;
                    case "4 2":
                        $("#mis1-4-2").show();
                        break;
                    case "4 3":
                        $("#mis1-4-3").show();
                        break;
                    case "4 4":
                        $("#mis1-4-4").show();
                        break;
                    case "4 5":
                        $("#mis1-4-5").show();
                        break;
                    case "4 6":
                        $("#mis1-4-6").show();
                        break;
                    case "4 7":
                        $("#mis1-4-7").show();
                        break;
                    case "5 1":
                        $("#mis1-5-1").show();
                        break;
                    case "5 2":
                        $("#mis1-5-2").show();
                        break;
                    case "5 3":
                        $("#mis1-5-3").show();
                        break;
                    case "5 4":
                        $("#mis1-5-4").show();
                        break;
                    case "5 5":
                        $("#mis1-5-5").show();
                        break;
                    case "5 6":
                        $("#mis1-5-6").show();
                        break;
                    case "5 7":
                        $("#mis1-5-7").show();
                        break;
                    case "6 1":
                        $("#mis1-6-1").show();
                        break;
                    case "6 2":
                        $("#mis1-6-2").show();
                        break;
                    case "6 3":
                        $("#mis1-6-3").show();
                        break;
                    case "6 4":
                        $("#mis1-6-4").show();
                        break;
                    case "6 5":
                        $("#mis1-6-5").show();
                        break;
                    case "6 6":
                        $("#mis1-6-6").show();
                        break;
                    case "6 7":
                        $("#mis1-6-7").show();
                        break;
                    case "7 1":
                        $("#mis1-7-1").show();
                        break;
                    case "7 2":
                        $("#mis1-7-2").show();
                        break;
                    case "7 3":
                        $("#mis1-7-3").show();
                        break;
                    case "7 4":
                        $("#mis1-7-4").show();
                        break;
                    case "7 5":
                        $("#mis1-7-5").show();
                        break;
                    case "7 6":
                        $("#mis1-7-6").show();
                        break;
                    case "7 7":
                        $("#mis1-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit1-1-1").show();
                        break;
                    case "1 2":
                        $("#hit1-1-2").show();
                        break;
                    case "1 3":
                        $("#hit1-1-3").show();
                        break;
                    case "1 4":
                        $("#hit1-1-4").show();
                        break;
                    case "1 5":
                        $("#hit1-1-5").show();
                        break;
                    case "1 6":
                        $("#hit1-1-6").show();
                        break;
                    case "1 7":
                        $("#hit1-1-7").show();
                        break;
                    case "2 1":
                        $("#hit1-2-1").show();
                        break;
                    case "2 2":
                        $("#hit1-2-2").show();
                        break;
                    case "2 3":
                        $("#hit1-2-3").show();
                        break;
                    case "2 4":
                        $("#hit1-2-4").show();
                        break;
                    case "2 5":
                        $("#hit1-2-5").show();
                        break;
                    case "2 6":
                        $("#hit1-2-6").show();
                        break;
                    case "2 7":
                        $("#hit1-2-7").show();
                        break;
                    case "3 1":
                        $("#hit1-3-1").show();
                        break;
                    case "3 2":
                        $("#hit1-3-2").show();
                        break;
                    case "3 3":
                        $("#hit1-3-3").show();
                        break;
                    case "3 4":
                        $("#hit1-3-4").show();
                        break;
                    case "3 5":
                        $("#hit1-3-5").show();
                        break;
                    case "3 6":
                        $("#hit1-3-6").show();
                        break;
                    case "3 7":
                        $("#hit1-3-7").show();
                        break;
                    case "4 1":
                        $("#hit1-4-1").show();
                        break;
                    case "4 2":
                        $("#hit1-4-2").show();
                        break;
                    case "4 3":
                        $("#hit1-4-3").show();
                        break;
                    case "4 4":
                        $("#hit1-4-4").show();
                        break;
                    case "4 5":
                        $("#hit1-4-5").show();
                        break;
                    case "4 6":
                        $("#hit1-4-6").show();
                        break;
                    case "4 7":
                        $("#hit1-4-7").show();
                        break;
                    case "5 1":
                        $("#hit1-5-1").show();
                        break;
                    case "5 2":
                        $("#hit1-5-2").show();
                        break;
                    case "5 3":
                        $("#hit1-5-3").show();
                        break;
                    case "5 4":
                        $("#hit1-5-4").show();
                        break;
                    case "5 5":
                        $("#hit1-5-5").show();
                        break;
                    case "5 6":
                        $("#hit1-5-6").show();
                        break;
                    case "5 7":
                        $("#hit1-5-7").show();
                        break;
                    case "6 1":
                        $("#hit1-6-1").show();
                        break;
                    case "6 2":
                        $("#hit1-6-2").show();
                        break;
                    case "6 3":
                        $("#hit1-6-3").show();
                        break;
                    case "6 4":
                        $("#hit1-6-4").show();
                        break;
                    case "6 5":
                        $("#hit1-6-5").show();
                        break;
                    case "6 6":
                        $("#hit1-6-6").show();
                        break;
                    case "6 7":
                        $("#hit1-6-7").show();
                        break;
                    case "7 1":
                        $("#hit1-7-1").show();
                        break;
                    case "7 2":
                        $("#hit1-7-2").show();
                        break;
                    case "7 3":
                        $("#hit1-7-3").show();
                        break;
                    case "7 4":
                        $("#hit1-7-4").show();
                        break;
                    case "7 5":
                        $("#hit1-7-5").show();
                        break;
                    case "7 6":
                        $("#hit1-7-6").show();
                        break;
                    case "7 7":
                        $("#hit1-7-7").show();
                        break;
                }
            }
            CL2[1] = 0;
            $(this).hide();
            $("#cleveland").hide();
            $("#fletcher").show();
            if (DD2[1] == 1 && DD2[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack2-6").show();
            } else {
                DD2[1] = DD2[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove2-6").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove2-5").click(function() {
        $(this).hide();
        $("#cleveland").hide();
        $("#fletcher").show();
        if (DD2[1] == 1 && DD2[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack2-6").show();
        } else {
            DD2[1] = DD2[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove2-6").show();
        }
    });

    $("#attack2-6").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column1[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV1[0] = CV1[0] - 2;
                    break;
                case 2:
                    BB1[0] = BB1[0] - 2;
                    break;
                case 3:
                    CA1[0] = CA1[0] - 2;
                    break;
                case 4:
                    CL1[0] = CL1[0] - 2;
                    break;
                case 5:
                    DD1[0] = DD1[0] - 1;
                    break;
                case 6:
                    DE1[0] = DE1[0] - 1;
                    break;
                case 7:
                    SS1[0] = SS1[0] - 2;
                    break;
            }
            if (column1[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis1-1-1").show();
                        break;
                    case "1 2":
                        $("#mis1-1-2").show();
                        break;
                    case "1 3":
                        $("#mis1-1-3").show();
                        break;
                    case "1 4":
                        $("#mis1-1-4").show();
                        break;
                    case "1 5":
                        $("#mis1-1-5").show();
                        break;
                    case "1 6":
                        $("#mis1-1-6").show();
                        break;
                    case "1 7":
                        $("#mis1-1-7").show();
                        break;
                    case "2 1":
                        $("#mis1-2-1").show();
                        break;
                    case "2 2":
                        $("#mis1-2-2").show();
                        break;
                    case "2 3":
                        $("#mis1-2-3").show();
                        break;
                    case "2 4":
                        $("#mis1-2-4").show();
                        break;
                    case "2 5":
                        $("#mis1-2-5").show();
                        break;
                    case "2 6":
                        $("#mis1-2-6").show();
                        break;
                    case "2 7":
                        $("#mis1-2-7").show();
                        break;
                    case "3 1":
                        $("#mis1-3-1").show();
                        break;
                    case "3 2":
                        $("#mis1-3-2").show();
                        break;
                    case "3 3":
                        $("#mis1-3-3").show();
                        break;
                    case "3 4":
                        $("#mis1-3-4").show();
                        break;
                    case "3 5":
                        $("#mis1-3-5").show();
                        break;
                    case "3 6":
                        $("#mis1-3-6").show();
                        break;
                    case "3 7":
                        $("#mis1-3-7").show();
                        break;
                    case "4 1":
                        $("#mis1-4-1").show();
                        break;
                    case "4 2":
                        $("#mis1-4-2").show();
                        break;
                    case "4 3":
                        $("#mis1-4-3").show();
                        break;
                    case "4 4":
                        $("#mis1-4-4").show();
                        break;
                    case "4 5":
                        $("#mis1-4-5").show();
                        break;
                    case "4 6":
                        $("#mis1-4-6").show();
                        break;
                    case "4 7":
                        $("#mis1-4-7").show();
                        break;
                    case "5 1":
                        $("#mis1-5-1").show();
                        break;
                    case "5 2":
                        $("#mis1-5-2").show();
                        break;
                    case "5 3":
                        $("#mis1-5-3").show();
                        break;
                    case "5 4":
                        $("#mis1-5-4").show();
                        break;
                    case "5 5":
                        $("#mis1-5-5").show();
                        break;
                    case "5 6":
                        $("#mis1-5-6").show();
                        break;
                    case "5 7":
                        $("#mis1-5-7").show();
                        break;
                    case "6 1":
                        $("#mis1-6-1").show();
                        break;
                    case "6 2":
                        $("#mis1-6-2").show();
                        break;
                    case "6 3":
                        $("#mis1-6-3").show();
                        break;
                    case "6 4":
                        $("#mis1-6-4").show();
                        break;
                    case "6 5":
                        $("#mis1-6-5").show();
                        break;
                    case "6 6":
                        $("#mis1-6-6").show();
                        break;
                    case "6 7":
                        $("#mis1-6-7").show();
                        break;
                    case "7 1":
                        $("#mis1-7-1").show();
                        break;
                    case "7 2":
                        $("#mis1-7-2").show();
                        break;
                    case "7 3":
                        $("#mis1-7-3").show();
                        break;
                    case "7 4":
                        $("#mis1-7-4").show();
                        break;
                    case "7 5":
                        $("#mis1-7-5").show();
                        break;
                    case "7 6":
                        $("#mis1-7-6").show();
                        break;
                    case "7 7":
                        $("#mis1-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit1-1-1").show();
                        break;
                    case "1 2":
                        $("#hit1-1-2").show();
                        break;
                    case "1 3":
                        $("#hit1-1-3").show();
                        break;
                    case "1 4":
                        $("#hit1-1-4").show();
                        break;
                    case "1 5":
                        $("#hit1-1-5").show();
                        break;
                    case "1 6":
                        $("#hit1-1-6").show();
                        break;
                    case "1 7":
                        $("#hit1-1-7").show();
                        break;
                    case "2 1":
                        $("#hit1-2-1").show();
                        break;
                    case "2 2":
                        $("#hit1-2-2").show();
                        break;
                    case "2 3":
                        $("#hit1-2-3").show();
                        break;
                    case "2 4":
                        $("#hit1-2-4").show();
                        break;
                    case "2 5":
                        $("#hit1-2-5").show();
                        break;
                    case "2 6":
                        $("#hit1-2-6").show();
                        break;
                    case "2 7":
                        $("#hit1-2-7").show();
                        break;
                    case "3 1":
                        $("#hit1-3-1").show();
                        break;
                    case "3 2":
                        $("#hit1-3-2").show();
                        break;
                    case "3 3":
                        $("#hit1-3-3").show();
                        break;
                    case "3 4":
                        $("#hit1-3-4").show();
                        break;
                    case "3 5":
                        $("#hit1-3-5").show();
                        break;
                    case "3 6":
                        $("#hit1-3-6").show();
                        break;
                    case "3 7":
                        $("#hit1-3-7").show();
                        break;
                    case "4 1":
                        $("#hit1-4-1").show();
                        break;
                    case "4 2":
                        $("#hit1-4-2").show();
                        break;
                    case "4 3":
                        $("#hit1-4-3").show();
                        break;
                    case "4 4":
                        $("#hit1-4-4").show();
                        break;
                    case "4 5":
                        $("#hit1-4-5").show();
                        break;
                    case "4 6":
                        $("#hit1-4-6").show();
                        break;
                    case "4 7":
                        $("#hit1-4-7").show();
                        break;
                    case "5 1":
                        $("#hit1-5-1").show();
                        break;
                    case "5 2":
                        $("#hit1-5-2").show();
                        break;
                    case "5 3":
                        $("#hit1-5-3").show();
                        break;
                    case "5 4":
                        $("#hit1-5-4").show();
                        break;
                    case "5 5":
                        $("#hit1-5-5").show();
                        break;
                    case "5 6":
                        $("#hit1-5-6").show();
                        break;
                    case "5 7":
                        $("#hit1-5-7").show();
                        break;
                    case "6 1":
                        $("#hit1-6-1").show();
                        break;
                    case "6 2":
                        $("#hit1-6-2").show();
                        break;
                    case "6 3":
                        $("#hit1-6-3").show();
                        break;
                    case "6 4":
                        $("#hit1-6-4").show();
                        break;
                    case "6 5":
                        $("#hit1-6-5").show();
                        break;
                    case "6 6":
                        $("#hit1-6-6").show();
                        break;
                    case "6 7":
                        $("#hit1-6-7").show();
                        break;
                    case "7 1":
                        $("#hit1-7-1").show();
                        break;
                    case "7 2":
                        $("#hit1-7-2").show();
                        break;
                    case "7 3":
                        $("#hit1-7-3").show();
                        break;
                    case "7 4":
                        $("#hit1-7-4").show();
                        break;
                    case "7 5":
                        $("#hit1-7-5").show();
                        break;
                    case "7 6":
                        $("#hit1-7-6").show();
                        break;
                    case "7 7":
                        $("#hit1-7-7").show();
                        break;
                }
            }
            DD2[1] = 0;
            $(this).hide();
            $("#fletcher").hide();
            $("#balao").show();
            if (SS2[1] == 2 && SS2[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack2-7").show();
            } else {
                SS2[1] = SS2[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove2-7").show();
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove2-6").click(function() {
        $(this).hide();
        $("#fletcher").hide();
        $("#balao").show();
        if (SS2[1] == 2 && SS2[0] != 0) {
            $("#attack").show();
            $("#x2").show();
            $("#y2").show();
            $("#attack2-7").show();
        } else {
            SS2[1] = SS2[1] + 1;
            $("#attack").hide();
            $("#x2").hide();
            $("#y2").hide();
            $("#finishMove2-7").show();
        }
    });

    $("#attack2-7").click(function() {
        var x = $("#x2").val();
        var y = $("#y2").val();
        if (x >= 1 && x <= 7 && y >= 1 && y <= 7) {
            var coordinate = x + " " + y;
            switch (column1[x - 1][y - 1]) {
                case 0:
                    break;
                case 1:
                    CV1[0] = CV1[0] - 2;
                    break;
                case 2:
                    BB1[0] = BB1[0] - 2;
                    break;
                case 3:
                    CA1[0] = CA1[0] - 2;
                    break;
                case 4:
                    CL1[0] = CL1[0] - 2;
                    break;
                case 5:
                    DD1[0] = DD1[0] - 1;
                    break;
                case 6:
                    DE1[0] = DE1[0] - 1;
                    break;
                case 7:
                    SS1[0] = SS1[0] - 2;
                    break;
            }
            if (column1[x - 1][y - 1] == 0) {
                switch (coordinate) {
                    case "1 1":
                        $("#mis1-1-1").show();
                        break;
                    case "1 2":
                        $("#mis1-1-2").show();
                        break;
                    case "1 3":
                        $("#mis1-1-3").show();
                        break;
                    case "1 4":
                        $("#mis1-1-4").show();
                        break;
                    case "1 5":
                        $("#mis1-1-5").show();
                        break;
                    case "1 6":
                        $("#mis1-1-6").show();
                        break;
                    case "1 7":
                        $("#mis1-1-7").show();
                        break;
                    case "2 1":
                        $("#mis1-2-1").show();
                        break;
                    case "2 2":
                        $("#mis1-2-2").show();
                        break;
                    case "2 3":
                        $("#mis1-2-3").show();
                        break;
                    case "2 4":
                        $("#mis1-2-4").show();
                        break;
                    case "2 5":
                        $("#mis1-2-5").show();
                        break;
                    case "2 6":
                        $("#mis1-2-6").show();
                        break;
                    case "2 7":
                        $("#mis1-2-7").show();
                        break;
                    case "3 1":
                        $("#mis1-3-1").show();
                        break;
                    case "3 2":
                        $("#mis1-3-2").show();
                        break;
                    case "3 3":
                        $("#mis1-3-3").show();
                        break;
                    case "3 4":
                        $("#mis1-3-4").show();
                        break;
                    case "3 5":
                        $("#mis1-3-5").show();
                        break;
                    case "3 6":
                        $("#mis1-3-6").show();
                        break;
                    case "3 7":
                        $("#mis1-3-7").show();
                        break;
                    case "4 1":
                        $("#mis1-4-1").show();
                        break;
                    case "4 2":
                        $("#mis1-4-2").show();
                        break;
                    case "4 3":
                        $("#mis1-4-3").show();
                        break;
                    case "4 4":
                        $("#mis1-4-4").show();
                        break;
                    case "4 5":
                        $("#mis1-4-5").show();
                        break;
                    case "4 6":
                        $("#mis1-4-6").show();
                        break;
                    case "4 7":
                        $("#mis1-4-7").show();
                        break;
                    case "5 1":
                        $("#mis1-5-1").show();
                        break;
                    case "5 2":
                        $("#mis1-5-2").show();
                        break;
                    case "5 3":
                        $("#mis1-5-3").show();
                        break;
                    case "5 4":
                        $("#mis1-5-4").show();
                        break;
                    case "5 5":
                        $("#mis1-5-5").show();
                        break;
                    case "5 6":
                        $("#mis1-5-6").show();
                        break;
                    case "5 7":
                        $("#mis1-5-7").show();
                        break;
                    case "6 1":
                        $("#mis1-6-1").show();
                        break;
                    case "6 2":
                        $("#mis1-6-2").show();
                        break;
                    case "6 3":
                        $("#mis1-6-3").show();
                        break;
                    case "6 4":
                        $("#mis1-6-4").show();
                        break;
                    case "6 5":
                        $("#mis1-6-5").show();
                        break;
                    case "6 6":
                        $("#mis1-6-6").show();
                        break;
                    case "6 7":
                        $("#mis1-6-7").show();
                        break;
                    case "7 1":
                        $("#mis1-7-1").show();
                        break;
                    case "7 2":
                        $("#mis1-7-2").show();
                        break;
                    case "7 3":
                        $("#mis1-7-3").show();
                        break;
                    case "7 4":
                        $("#mis1-7-4").show();
                        break;
                    case "7 5":
                        $("#mis1-7-5").show();
                        break;
                    case "7 6":
                        $("#mis1-7-6").show();
                        break;
                    case "7 7":
                        $("#mis1-7-7").show();
                        break;
                }
            } else {
                switch (coordinate) {
                    case "1 1":
                        $("#hit1-1-1").show();
                        break;
                    case "1 2":
                        $("#hit1-1-2").show();
                        break;
                    case "1 3":
                        $("#hit1-1-3").show();
                        break;
                    case "1 4":
                        $("#hit1-1-4").show();
                        break;
                    case "1 5":
                        $("#hit1-1-5").show();
                        break;
                    case "1 6":
                        $("#hit1-1-6").show();
                        break;
                    case "1 7":
                        $("#hit1-1-7").show();
                        break;
                    case "2 1":
                        $("#hit1-2-1").show();
                        break;
                    case "2 2":
                        $("#hit1-2-2").show();
                        break;
                    case "2 3":
                        $("#hit1-2-3").show();
                        break;
                    case "2 4":
                        $("#hit1-2-4").show();
                        break;
                    case "2 5":
                        $("#hit1-2-5").show();
                        break;
                    case "2 6":
                        $("#hit1-2-6").show();
                        break;
                    case "2 7":
                        $("#hit1-2-7").show();
                        break;
                    case "3 1":
                        $("#hit1-3-1").show();
                        break;
                    case "3 2":
                        $("#hit1-3-2").show();
                        break;
                    case "3 3":
                        $("#hit1-3-3").show();
                        break;
                    case "3 4":
                        $("#hit1-3-4").show();
                        break;
                    case "3 5":
                        $("#hit1-3-5").show();
                        break;
                    case "3 6":
                        $("#hit1-3-6").show();
                        break;
                    case "3 7":
                        $("#hit1-3-7").show();
                        break;
                    case "4 1":
                        $("#hit1-4-1").show();
                        break;
                    case "4 2":
                        $("#hit1-4-2").show();
                        break;
                    case "4 3":
                        $("#hit1-4-3").show();
                        break;
                    case "4 4":
                        $("#hit1-4-4").show();
                        break;
                    case "4 5":
                        $("#hit1-4-5").show();
                        break;
                    case "4 6":
                        $("#hit1-4-6").show();
                        break;
                    case "4 7":
                        $("#hit1-4-7").show();
                        break;
                    case "5 1":
                        $("#hit1-5-1").show();
                        break;
                    case "5 2":
                        $("#hit1-5-2").show();
                        break;
                    case "5 3":
                        $("#hit1-5-3").show();
                        break;
                    case "5 4":
                        $("#hit1-5-4").show();
                        break;
                    case "5 5":
                        $("#hit1-5-5").show();
                        break;
                    case "5 6":
                        $("#hit1-5-6").show();
                        break;
                    case "5 7":
                        $("#hit1-5-7").show();
                        break;
                    case "6 1":
                        $("#hit1-6-1").show();
                        break;
                    case "6 2":
                        $("#hit1-6-2").show();
                        break;
                    case "6 3":
                        $("#hit1-6-3").show();
                        break;
                    case "6 4":
                        $("#hit1-6-4").show();
                        break;
                    case "6 5":
                        $("#hit1-6-5").show();
                        break;
                    case "6 6":
                        $("#hit1-6-6").show();
                        break;
                    case "6 7":
                        $("#hit1-6-7").show();
                        break;
                    case "7 1":
                        $("#hit1-7-1").show();
                        break;
                    case "7 2":
                        $("#hit1-7-2").show();
                        break;
                    case "7 3":
                        $("#hit1-7-3").show();
                        break;
                    case "7 4":
                        $("#hit1-7-4").show();
                        break;
                    case "7 5":
                        $("#hit1-7-5").show();
                        break;
                    case "7 6":
                        $("#hit1-7-6").show();
                        break;
                    case "7 7":
                        $("#hit1-7-7").show();
                        break;
                }
            }
            SS2[1] = 0;
            $(this).hide();
            $("#balao").hide();
            $("#player2").hide();
            $("#player1").show();
            $("#shokaku").show();
            if (CV1[0] < 0) {
                CV1[0] = 0;
            }
            if (BB1[0] < 0) {
                BB1[0] = 0;
            }
            if (CA1[0] < 0) {
                CA1[0] = 0;
            }
            if (CL1[0] < 0) {
                CL1[0] = 0;
            }
            if (DD1[0] < 0) {
                DD1[0] = 0;
            }
            if (DE1[0] < 0) {
                DE1[0] = 0;
            }
            if (SS1[0] < 0) {
                SS1[0] = 0;
            }
            var IJNtotal = CV1[0] + BB1[0] + CA1[0] + CL1[0] + DD1[0] + DE1[0] + SS1[0];
            if (IJNtotal == 0) {
                $("table").hide();
                $("#turns").hide();
                $("#endGame").show();
                $("#win2").show();
            } else {
                if (CV1[1] == 3 && CV2[0] != 0) {
                    $("#attack").show();
                    $("#x2").show();
                    $("#y2").show();
                    $("#attack1-1").show();
                } else {
                    CV1[1] = CV1[1] + 1;
                    $("#attack").hide();
                    $("#x2").hide();
                    $("#y2").hide();
                    $("#finishMove1-1").show();
                }
            }
        } else {
            alert("輸入錯誤");
        }
    });

    $("#finishMove2-7").click(function() {
        $(this).hide();
        $("#balao").hide();
        $("#player2").hide();
        $("#player1").show();
        $("#shokaku").show();
        if (CV1[0] < 0) {
            CV1[0] = 0;
        }
        if (BB1[0] < 0) {
            BB1[0] = 0;
        }
        if (CA1[0] < 0) {
            CA1[0] = 0;
        }
        if (CL1[0] < 0) {
            CL1[0] = 0;
        }
        if (DD1[0] < 0) {
            DD1[0] = 0;
        }
        if (DE1[0] < 0) {
            DE1[0] = 0;
        }
        if (SS1[0] < 0) {
            SS1[0] = 0;
        }
        var IJNtotal = CV1[0] + BB1[0] + CA1[0] + CL1[0] + DD1[0] + DE1[0] + SS1[0];
        if (IJNtotal == 0) {
            $("table").hide();
            $("#turns").hide();
            $("#endGame").show();
            $("#win2").show();
        } else {
            if (CV1[1] == 3 && CV2[0] != 0) {
                $("#attack").show();
                $("#x2").show();
                $("#y2").show();
                $("#attack1-1").show();
            } else {
                CV1[1] = CV1[1] + 1;
                $("#attack").hide();
                $("#x2").hide();
                $("#y2").hide();
                $("#finishMove1-1").show();
            }
        }
    });

});