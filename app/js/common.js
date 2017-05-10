$(document).ready(function(){
 
    $(".account-header__description-input").labelauty();

    $(".account-payment__agree-input").labelauty();

    $(".account-payment__accept-input").labelauty();

    $(".account-capabilities__heading").click(function () {
        $(".account-capabilities__form").toggle('slow');
    });

    $(".account-contact__heading").click(function () {
        $(".account-contact__form").toggle('slow');
    });

    $(".account-password__heading").click(function () {
        $(".account-password__form").toggle('slow');
    });

    $(".account-payment__heading").click(function () {
        $(".account-payment__form").toggle('slow');
    });

    $(".account-verify__heading").click(function () {
        $(".account-verify__form").toggle('slow');
    });

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

    $('#selectStateAccount').scombobox({
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

    var categoryMultiSelect = $("#category");
    categoryMultiSelect.multiselect({
        header: true,
        width: 466,
        maxWidth: 466,
        noneSelectedText: "Category",
        showCheckAll: false,
        showUncheckAll: false,
        closeIcon: 'ui-multiselect-icon-closethick'
    });

    changeOptGroup()

    customCheckbox('multiselect_category');
    categoryMultiSelect.bind("multiselectoptgrouptoggle", function (event, ui) {
        /* event: the original event object, most likely "click"
         ui.inputs: an array of the checkboxes (DOM elements) inside the optgroup
         ui.label: the text of the optgroup
         ui.checked: whether or not the checkboxes were checked or unchecked in the toggle (boolean) */
        customCheckboxOptGroup(ui);
    });

    var attributesMultiSelect = $("#attributes");
    attributesMultiSelect.multiselect({
        header: true,
        noneSelectedText: "Attributes"
    });

    customCheckbox('multiselect_attributes');
    attributesMultiSelect.bind("multiselectcheckall", function (event, ui) {
        customCheckboxCheckAll('multiselect_attributes', true);
    });
    attributesMultiSelect.bind("multiselectuncheckall", function (event, ui) {
        customCheckboxCheckAll('multiselect_attributes', false);
    });

    $(".chosen-select").chosen({
        width: "100%",
        disable_search_threshold: 10
    });

    $('#selectState').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#company').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#individual').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#self').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#check').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#selectStatePayment').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#verifyState').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#originTerm').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

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

    var selectPayment = $('select[name="payment"]')
    selectPayment.change(function () {

            var el = $(this).val();
            console.log(el)
            if (el == 'Chek') {
                $('#paymentpaychek').css('display', 'block');
                $('#paymentpaypal').css('display', 'none');
                $('#paymentbank').css('display', 'none');
                $('#paymentindividual').css('display', 'none');
                $('#paymentcompany').css('display', 'none')
            }
            if (el == 'PayPal') {
                $('#paymentpaychek').css('display', 'none');
                $('#paymentpaypal').css('display', 'block');
                $('#paymentbank').css('display', 'none');
                $('#paymentindividual').css('display', 'none');
                $('#paymentcompany').css('display', 'none')
            }
            if (el == 'BankAccount') {
                $('#paymentpaychek').css('display', 'none');
                $('#paymentpaypal').css('display', 'none');
                $('#paymentbank').css('display', 'block');
                $('#paymentcompany').css('display', 'block');
                $('#paymentindividual').css('display', 'none')
            }
    });

    $('select[name="company"]').change(function () {

        var el = $(this).val();
        if (el == 'Company') {
            $('#paymentpaychek').css('display', 'none');
            $('#paymentpaypal').css('display', 'none');
            $('#paymentbank').css('display', 'block');
            $('#paymentcompany').css('display', 'block');
            $('#paymentindividual').css('display', 'none')
        }
        else {
            $('#paymentpaychek').css('display', 'none');
            $('#paymentpaypal').css('display', 'none');
            $('#paymentbank').css('display', 'block');
            $('#paymentcompany').css('display', 'none');
            $('#paymentindividual').css('display', 'block')
        }
    });

    $(function () {
        $("#datepicker").datepicker();
    });
    $(function () {
        $("#monthpicker").datepicker();
    });
    $(function () {
        $("#yearpicker").datepicker();
    });    
});

/* Customize jQuery UI MultiSelect Widget ---start--- */
function customCheckbox(checkboxName) {
    var checkBox = $('input[name="' + checkboxName + '"]');
    $(checkBox).each(function () {
        $(this).wrap("<span class='custom-checkbox'></span>");
        if ($(this).is(':checked')) {
            $(this).parent().addClass("custom-checkbox--selected");
            $(this).parent().parent().addClass("custom-checkbox--active");
        }
    });
    $(checkBox).click(function () {
        $(this).parent().toggleClass("custom-checkbox--selected");
        $(this).parent().parent().toggleClass("custom-checkbox--active");
    });
}

function customCheckboxOptGroup(ui) {
    var i;
    for (i = 0; i < ui.inputs.length; i++) {
        var checkBox = $(ui.inputs[i]);
        if (ui.checked != false) {
            checkBox.parent().addClass("custom-checkbox--selected");
            checkBox.parent().parent().addClass("custom-checkbox--active");
        } else {
            checkBox.parent().removeClass("custom-checkbox--selected");
            checkBox.parent().parent().removeClass("custom-checkbox--active");
        }
    }
}

function customCheckboxCheckAll(checkboxName, add) {
    var checkBoxes = $('input[name="' + checkboxName + '"]');
    var i;

    for (i = 0; i < checkBoxes.length; i++) {
        var checkBox = $(checkBoxes[i]);
        if (add){
            checkBox.parent().addClass("custom-checkbox--selected");
            checkBox.parent().parent().addClass("custom-checkbox--active");
        } else {
            checkBox.parent().removeClass("custom-checkbox--selected");
            checkBox.parent().parent().removeClass("custom-checkbox--active");
        }
    }
}

function changeOptGroup() {
    var multiselect = $(".ui-multiselect-optgroup");
    for (i = 0; i < multiselect.length; i++) { 
        var optGroup = $(multiselect[i]);
        optGroup.children('a').after('<span class="multiselect__span">(click to check all)</span>')
    }
}

/* Customize jQuery UI MultiSelect Widget ---end--- */