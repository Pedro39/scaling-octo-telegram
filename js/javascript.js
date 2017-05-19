/*------------------Skill-R---- TOP----------------------------------*/

$(function(){
   var ocultar = $('.work_cabocalho');
  	ocultar.click(function(){  	 	
  	$('.work_experice_top, .work_experice_mid, .work_experice_booton').toggle(500)

  	$('.main_work').toggleClass("divEscondida");
});


  });

/*-------------------Skill-R----Bottton------------------------------*/

$(function(){
   var ocultar = $('.education_cabocalho');
  	
  	ocultar.click(function(){  	 	

  	$('.education_top, .education_mid, .education_booton').toggle(500);
  	$('.main_education').toggleClass("divEscondida");
  });
})

/*---------------------Skill-L-----Prog-----------------------------*/

$(function(){
   var ocultar = $('.divAbilitiesProgBT');
  	
  	ocultar.click(function(){  	 
  	$('.skillset').toggle(1000);
  	$('.skill').toggleClass("divEscondidaLeft");
  });
})

/*-------------------Skill-L----Languages----------------------------*/

$(function(){
   var ocultar = $('.divLanguagesBT');
  	
  	ocultar.click(function(){  	 
  	$('.skillset_languages').toggle(1000);
  	$('.languages').toggleClass("divEscondidaLeftTop");
  });
})

/*-------------------Skill-L-----Name--------------------------*/

$(function(){
   var ocultar = $('.tituloDaImagem');
    
    ocultar.click(function(){    
    $('.contactos_icons').toggle(1000);
    $('.contactos').toggleClass("divEscondidaLeftTopImg");
  });
})