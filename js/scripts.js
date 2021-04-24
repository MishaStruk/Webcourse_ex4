$(function () {

    $('#emailID').on("input", function () {
        $('#emailPreview').text($(this).val());
    });

    $('#nameID').on("input", function () {
        $('#nameInput').text($(this).val());
    });
    $('#websiteID').on("input", function () {
        $('#websiteInput').text($(this).val());
    });
    $('#telID').on("input", function () {
        $('#telInput').text($(this).val());
    });
    $('#temperID').on("input", function () {
        $('#rangeInput').text($(this).val());
    });
    $('#coffeID').on("input", function () {
        $('#distanceInput').text($(this).val());
    });
    $('#textareaID').on("input", function () {
        $('#textareaInput').text($(this).val());
    });

    $('#chipCheckbox').click(function () {
        if ($(this).prop('checked')) {
            $("#chipAnswer").show();
        } else {
            $("#chipAnswer").hide();
        }
    })
    $('#noFDACheckbox').click(function () {
        if ($(this).prop('checked')) {
            $("#noFDAAnswer").show();
        } else {
            $("#noFDAAnswer").hide();
        }
    })
    $('#protestCheckbox').click(function () {
        if ($(this).prop('checked')) {
            $("#protestAnswer").show();
        } else {
            $("#protestAnswer").hide();
        }
    })
    $('#sleepCheckbox').click(function () {
        if ($(this).prop('checked')) {
            $("#sleepAnswer").show();
        } else {
            $("#sleepAnswer").hide();
        }
    })

    //Radio Button check
    $('#apologyForm .radioInput').on('change', function () {
        output = $('input[name=gender]:checked', '#apologyForm').val();
        
        if (output == "rotem") {
            $("#genderInput").text("אני דומה לרותם");
        }
        else if (output == "ravit") {
            $("#genderInput").text("אני דומה לרוית");
        }
        else if (output == "libary") {
            $("#genderInput").text("יש לי ספרייה מאחורה");
        }
        else if (output == "sea") {
            $("#genderInput").text("יש לי רקע של ים");
        }
        else if (output == "accent") {
            $("#genderInput").text("יש לי מבטא אמריקאי שכולנו היינו רוצים");
        }
    });

    //Radio Button check
    $('#apologyForm #ageID').on('change', function () {
        $("#ageInput").text($( "#ageID option:selected" ).text());
        
    });

    //validation
    $("#submitBtm").click(function () {
        checked = $("input[type=checkbox]:checked").length;
        if (!checked) {
            alert("Please Check a reason");
            return false;
        }
    });
});