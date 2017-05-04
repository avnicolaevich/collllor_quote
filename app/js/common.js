$(document).ready(function(){
    
    $(".signin__memory").labelauty();

    // $( ".capabilities__heading" ).click(function() {
    //     $( ".capabilities__form" ).toggle('slow');
    // });

    // $(".contact__heading").click(function(){
    //     $(".contact__form").toggle('slow');
    // });

    // $(".password__heading").click(function(){
    //     $(".password__form").toggle('slow');
    // });

    // $(".payment__heading").click(function(){
    //     $(".payment__form").toggle('slow');
    // });

    // $(".verify__heading").click(function(){
    //     $(".verify__form").toggle('slow');
    // });

    // $("#category").multiselect({
    //     header: true,
    //     width: 466,
    //     maxWidth: 466,
    //     noneSelectedText: "Category"
    // });

    // $("#attributes").multiselect({
    //     header: true,
    //     noneSelectedText: "Attributes"
    // });

    // $(".chosen-select").chosen({
    // 	width: "100%",
    // 	disable_search_threshold: 10
    // });

    // $('#selectState').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#company').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#individual').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#self').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#check').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#Pal').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#Bank').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#selectStatePayment').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#verifyState').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

    // $('#originTerm').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

 //    $('select[name="payment"]').change(function(){
    
 //    	var el = $(this).val();
 //   		if (el=='Chek') { 
 //          $('#paymentpaychek').css('display','block');
 //          $('#paymentpaypal').css('display','none');
 //          $('#paymentbank').css('display','none');
 //          $('#paymentindividual').css('display','none')
 //        }
 //    	else if (el=='PayPal') {
 //          $('#paymentpaychek').css('display','none');
 //          $('#paymentpaypal').css('display','block');
 //          $('#paymentbank').css('display','none');
 //          $('#paymentindividual').css('display','none')
 //        }
 //        else { 
 //          $('#paymentpaychek').css('display','none');
 //          $('#paymentpaypal').css('display','none');
 //          $('#paymentbank').css('display','block');
 //          $('#paymentindividual').css('display','none')
 //        }
	// });

	// $('select[name="company"]').change(function(){
    
 //    	var el = $(this).val();
 //   		if (el=='Company') { 
 //          $('#paymentpaychek').css('display','none');
 //          $('#paymentpaypal').css('display','none');
 //          $('#paymentbank').css('display','block');
 //          $('#paymentindividual').css('display','none')
 //        }
 //    	else {
 //          $('#paymentpaychek').css('display','none');
 //          $('#paymentpaypal').css('display','none');
 //          $('#paymentbank').css('display','none');
 //          $('#paymentindividual').css('display','block')
 //        }
	// });

	// $(function() {
 //    	$("#datepicker").datepicker();
 // 	});
 	// $(function() {
  //   	$("#monthpicker").datepicker();
 	// });
 	// $(function() {
  //   	$("#yearpicker").datepicker();
 	// });

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


