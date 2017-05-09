$(document).ready(function(){
    
    $(".signin__memory").labelauty();
    
    $(".user__check").labelauty();

    $(".user__link").click(function() {
        $(".user__registration").toggle('slow');
    });

    $(".seller-header__check-input").labelauty();


    $('.seller-header__sign').on('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        target = $(this).attr('href');
        $('.seller-header__content > div').not(target).hide();
        $(target).fadeIn(600);
    });

    $('#selectState').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('.seller-header__link').click(function() {
        var checkElement = $(this).next();
        checkElement.stop().animate({'height':'toggle'}, 0.1, 'linear');
        if((checkElement.is('form')) && (checkElement.is(':visible'))) {
            return false;
        } else if ((checkElement.is('form')) && (checkElement.is(':hidden'))) {
            return true;
        }
    });

    $(document).click( function(event){
        if( $(event.target).closest("form").length )
            return;
        $(".registration").fadeOut("0.1");
        event.stopPropagation();
    });

    // CHANGE BACKGROUND COLOR
    $(document).mousemove(function (e) {
        $("#blueBg").css("opacity", "" + (1 - e.pageY / 1e3));
    });
    // CHANGE BACKGROUND COLOR END

    $("#selectSubCategory").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !1,
        placeholder: "Sub-category"
    });

    $("#selectSize").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !1,
        placeholder: "Size"
    });

    $("#selectMaterial").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !1,
        placeholder: "Material"
    });

    $("#selectFinish").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !1,
        placeholder: "Finish"
    });

    $("#selectMore").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !1,
        placeholder: "More"
    });
});


