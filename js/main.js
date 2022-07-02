
const courses=[20];
var n=0;

function logar(){
   
    if(form1.password.value == form1.password2.value)
    {
        window.location.href = "entrar2.html"; 
        return true;
    }else
    {   
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Passwords não são iguais!',});
        return false;
        
    }
}
function myFunction() {
    var x = document.getElementById("myCheck").required;
    document.getElementById("demo").innerHTML = x;
}




function saveDataToLocalStorage() {
     
    localStorage.setItem("arquivo2", form1.password.value);
    localStorage.setItem("arquivo1", form1.email.value);
    localStorage.setItem("arquivo3", form1.email.value);
    
}




function calledfunction(){
    saveDataToLocalStorage();
    return logar();
     
}
/**
 * Função para exibir o dado salvo no localStorage
 */


function save2ndpart(){
    localStorage.setItem("cardnumber",form2.cardnumber.value);
}

function testcardnumber(){
    let cardnumerold=localStorage.getItem("cardnumber");

    if(cardnumerold!=form3.cardnumberold.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Número não é o correto!',});
        return false;

    }else{
        localStorage.setItem("cardnumber",form4.newcardnumber.value);
        return true;
    }
}

function testemail(){
    let oldemail=localStorage.getItem("arquivo1");
    if(oldemail!=form3.oldemail.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Email não é o correto!',});
        return false;

    }else{
        localStorage.setItem("arquivo1",form3.newemail.value);
        return true;
    }
}
function testemailub(){
    let oldemail=localStorage.getItem("emailub");
    if(oldemail!=form8.oldemail.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Email não é o correto!',});
        return false;

    }else{
        localStorage.setItem("emailub",form8.newemail.value);
        return true;
    }
}
function testpass(){
    let oldpass=localStorage.getItem("arquivo2");
    if(oldpass!=form3.oldpass.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Password não é a correta!',});
        return false;

    }else{
        localStorage.setItem("arquivo2",form3.newpass.value);
        return true;
    }
}
function testpassub(){
    let oldpass=localStorage.getItem("passwordub");
    if(oldpass!=form9.oldpass.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Password não é a correta!',});
        return false;

    }else{
        localStorage.setItem("passwordub",form9.newpass.value);
        return true;
    }
}
if(document.getElementById("CardNumber")){
    let nrcartao=localStorage.getItem("cardnumber");
    document.getElementById("CardNumber").innerHTML=nrcartao;
}



function verifyifChecked(){
    if(form5.checkbox.checked==true){
        return true;
    }else{
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Primeiro precisa de se mostrar disponivel! ',});
        return false;
    }
}
function verify(){
    var obje=  localStorage.getItem("arquivo1");
    var passw = localStorage.getItem("arquivo2");
        if(obje != login.email.value){
             Swal.fire({icon: 'error',title: 'Oops...',text: 'Este email nao corresponde a nenhuma conta! Para se registar clique', footer: 'Nao tem conta? Registe-se <a href="entrar.html"> aqui</a>'});
            return false;
        }
        else if(passw != login.password.value)
        {
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Palavra Passe errada!'});
            return false;
        }else
        {
            window.location.href="main.html";
            return true;
        }
    }
    function saveloginub(){
        localStorage.setItem("emailub",loginub.email.value);
        localStorage.setItem("passwordub",loginub.password.value);
        
    }
    function verifypasswordub(){
        if(loginub.password.value==loginub.password2.value){
            let value=100;
            window.location.href = "mainub.html"; 
            localStorage.setItem("nrident",value);
            alert("Foi-lhe atribuido o numero: "+ localStorage.getItem("nrident"));
            return true;
        } else{
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Passwords não são iguais!',});
            return false;
        }
    }

    function calledfunctionub(){
        saveloginub();
        return verifypasswordub();    
        
    }

    function verifyloginub(){
        if(localStorage.getItem("emailub")!= loginuberbags.email.value){
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Este email nao corresponde a nenhuma conta UBERBAGS! Para se registar clique', footer: 'Nao tem conta? Registe-se <a href="entrar.html"> aqui</a>'});
            return false;
        } else if(localStorage.getItem("passwordub")!=loginuberbags.password.value){
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Palavra Passe errada!'});
            return false;
        }else if(localStorage.getItem("nrident")!=loginuberbags.fname.value){
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Número de identificação errada!'});
            return false;
        }else{
            window.location.href="mainub.html";
            return true;
        }
    }

    function calculatePrice(myform){

        //Get selected data  
        var elt = document.getElementById("funcionario");
        var memory = elt.options[elt.selectedIndex].value;
        
        var elt = document.getElementById("malas");
        var malas = elt.options[elt.selectedIndex].value;  
        //convert data to integers

        memory = parseInt(memory);
        malas = parseInt(malas)
          
        //calculate total value  
        var total = memory + malas; 
          
        //print value to  PicExtPrice 
        document.getElementById("PicExtPrice").value= total + " €";
      
      }
      $(function(){var fixed=null;init=function(){fixed=$('*').filter(function(){canList=$(this).css("position")==='fixed';if(canList){var parents=$(this).parents();$.each(parents,function(i,p){if($(p).prop("tagName")=='APP-ROOT'){canList=false;return;}});}
      return canList;});$.each(fixed,function(index,elem){$(elem).parent().hide();$(elem).attr('fixedWidth',$(elem).css('width'));$(elem).parent().show();});$.each(fixed,function(index,elem){saveOriginalPosition(elem);defineElementCoordinates(elem);});}
      saveOriginalPosition=function(elem){if($(elem).css('top')=="auto")
      $(elem).attr('top',$(elem).position().top);else
      $(elem).attr('top',$(elem).css('top').replace('px',''));if($(elem).css('left')=="auto")
      $(elem).attr('left',$(elem).position().left);else
      $(elem).attr('left',$(elem).css('left').replace('px',''));}
      defineElementCoordinates=function(elem){if($(elem).css('position')!="fixed"||$(elem).attr('fixedWidth')=="100%")
      return;var posX=parseInt($(elem).attr('left'))-$(window).scrollLeft();if(parseInt($(elem).attr('left'))==posX)
      $(elem).css({"left":""});else
      $(elem).css({"left":posX});}
      var prevLeft=0;$(document).scroll(function(evt){var currentLeft=$(this).scrollLeft();if(prevLeft!=currentLeft){prevLeft=currentLeft;if($('html').hasClass("noscroll"))
      return;$.each(fixed,function(index,elem){defineElementCoordinates(elem);});}});var prevWidth=$(window).width();$(window).resize(function(){if($(window).width()<prevWidth){prevWidth=$(window).width();$.each(fixed,function(index,elem){if($(elem).position().top!=parseInt($(elem).attr('top'))){$(elem).attr('top',$(elem).position().top);}
      if($(elem).position().left!=parseInt($(elem).attr('left'))){$(elem).attr('left',$(elem).position().left);}});};});init();});$(function(){history.navigationMode='compatible';var URL=$('base').attr('href');var IDIOMA='';var refreshTimeout=null;var refreshSessionTime=120000;var sessionErrorMsg={'pt_PT':'<b>A sessão expirou!</b><br/>Inicie sessão de novo.','pt_BR':'<b>A sessão expirou!</b><br/>Faça login novamente.','en_GB':'<b>The session has expired!</b><br/>Log in again.','es_ES':'<b>¡La sesión ha expirado!</b><br/>Inicie sesión de nuevo.','fr_FR':'<b>La session a expiré!</b><br/>Connectez-vous à nouveau.',};$("[for]").click(function(){var _for=$(this).attr("for");$('#'+_for).focus();});checkInput=function(type){var input=document.createElement("input");input.setAttribute("type",type);return input.type==type;}
      go=function(where){window.location=URL+where;}
      defineIdioma=function()
      {IDIOMA=$('base').attr('idioma');if(IDIOMA==undefined)
      IDIOMA=$('html').attr('lang').replace('-','_');}
      userSessionRefresh=function()
      {$.ajax({type:'post',url:URL+'user/refreshusersession',success:function(content)
      {if(content&&content.state&&content.state=='error')
      {var alt={0:{'type':'info','msg':sessionErrorMsg[IDIOMA],'controls':[{'name':'Ok','action':function(){window.location=URL+'login';}}]}};var alertsCall=new alerts();alertsCall.showAlert(alt);clearTimeout(refreshTimeout);}}});refreshTimeout=window.setTimeout('userSessionRefresh()',refreshSessionTime);}
      window.onerror=function(msg,url,line){return false;}
      removeSpecialCharacters=function(string)
      {var caracteresInvalidos=[/\\/g,/\//g,/'/g,/"/g,/</g,/>/g,/&/g,/(^\s*)|(\s*$)/gi];for(var i=0;i<caracteresInvalidos.length;i++){var caracter=caracteresInvalidos[i];string=string.replace(caracter,"");}
      return string;}
      trim=function(s){return s;}
      trimTextArea=function(s){return s;}
      trimNum=function(s){s=s.replace(/[^0-9$]/g,"");return s;}
      trimNumDec=function(s){s=s.replace(/[^0-9.$]/g,"");return s;}
      trimEmail=function(s){var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;if(!filter.test(s))s="";return s;}
      trimDate=function(s){s=s.replace(/[^0-9\-.$]/g,"");return s;}
      removeElements=function(array,index){var tempArray=new Array();var counter=0;for(var i=0;i<array.length;i++)
      {if(i!=index)
      {tempArray[counter]=array[i];counter++;}}
      return tempArray;}
      defineIdioma();userSessionRefresh();})
      $(function(){fake_subtitle_plugin=function(elem){var $this=$(elem),numberOfOptGroups=$(elem).children('optgroup').length,numberOfOptions=(numberOfOptGroups<=0)?[$(elem).children('option').length]:[];if(numberOfOptGroups>0){$.each($(elem).children('optgroup'),function(index,optgroup){numberOfOptions[index]=$(optgroup).children('option').length;});};$this.addClass('s-hidden');$this.wrap('<div class="select"></div>');$this.after('<div class="styledSelect"></div>');var $styledSelect=$this.next('div.styledSelect');$styledSelect.text($this.find('option:selected').text());$styledSelect.attr('title',$this.find('option:selected').attr('title'));var $list=$('<ul />',{'class':'options'}).css("visibility","hidden").insertAfter($styledSelect);if(numberOfOptGroups<=0){var option_list=$this.children('option');for(var i=0;i<numberOfOptions[0];i++){$('<li />',{text:$(option_list[i]).text(),title:$(option_list[i]).attr('title'),rel:$(option_list[i]).val()}).addClass($(option_list[i]).attr("selected")).addClass($(option_list[i]).attr("disabled")).appendTo($list);}}else{var optgroup_list=$this.children('optgroup');for(var o=0;o<numberOfOptGroups;o++){var opt=$(optgroup_list[o]);$('<li />',{text:opt.attr('label'),title:opt.attr('label')}).addClass("optgroup").appendTo($list);var option_list=opt.children('option');for(var i=0;i<numberOfOptions[o];i++){$('<li />',{text:$(option_list[i]).text(),title:$(option_list[i]).attr('title'),aa:$(option_list[i]).attr('aa'),rel:$(option_list[i]).val()}).addClass("opt").addClass($(option_list[i]).attr("selected")).addClass($(option_list[i]).attr("disabled")).appendTo($list);}}}
      var $listItems=$list.children('li:not(.optgroup)');var $listOptGroup=$list.children('li.optgroup');var selected_li_position=$list.find(".selected").position().top;if(selected_li_position>232){$list.scrollTop(selected_li_position);}
      $list.css({"visibility":"","display":"none"});elem.on('change',function(){var newVal=$(this).val();var newText=$(this).find('option:selected').text();$styledSelect.text(newText).attr('title',newText).removeClass('active');$list.hide();$listItems.removeClass('selected');$list.find('[rel="'+newVal+'"]').addClass('selected');});$styledSelect.click(function(e){e.stopPropagation();$('div.styledSelect.active').each(function(){$(this).removeClass('active').next('ul.options').hide();});$(this).toggleClass('active').next('ul.options').toggle();});$listItems.click(function(e){e.stopPropagation();$this.val($(this).attr('rel')).trigger("change");});$listOptGroup.click(function(e){e.stopPropagation();});$(document).click(function(){$styledSelect.removeClass('active');$list.hide();});$list.on('mousewheel DOMMouseScroll MozMousePixelScroll',function(e){var event=e.originalEvent;var delta=-event.deltaY||parseInt(e.originalEvent.wheelDelta||-e.originalEvent.detail);bottomOverflow=this.scrollTop+$(this).outerHeight()-this.scrollHeight>=0,topOverflow=this.scrollTop<=0;if((delta<0&&bottomOverflow)||(delta>0&&topOverflow)){e.preventDefault();}});}
      remove_fake_subtitle_plugin=function(elem){var $this=$(elem);if($this.hasClass('s-hidden')==false)
      return false;$this.removeClass('s-hidden');var wrapper=$this.parent();wrapper.find('div.styledSelect').remove();wrapper.find('ul.options').remove();$this.unwrap();return true;}
      setTimeout(function(){$('.topbarDef .wrapper-def .inner-left .subtitulo-select, .options-list .option-select-value').each(function(){fake_subtitle_plugin($(this));});},1);});$(function(){let listMenus=[];formatMenu=function(){const pluginClass='on-scroll-plugin';listMenus=$('.menu-principal');listMenus.each(function(){if(!$(this).hasClass(pluginClass)){ativaPlugin($(this));}});function ativaPlugin($this){const menu_bar=$this.find('.top-menu-btn');const menu_up_btn=$this.find('.menu-scroll-control-up');const menu_down_btn=$this.find('.menu-scroll-control-down');const menu_scroll_velocity=200;const menu_scroll_amount=100;initPlugin=function()
      {$this.addClass(pluginClass);}
      loadScrollPosition=function()
      {if(typeof(Storage)!=="undefined"){var scrollPosition=Number(sessionStorage.getItem('menusp'));doScroll(scrollPosition,false,false);}else{$.ajax({type:"post",url:"user/getmenuposition",dataType:"json",success:function(content){doScroll(content.scrollPosition,false,false);}});}}
      showhideScrollBtns=function(){if(menu_bar.canScrollTop()){menu_up_btn.show();}else{menu_up_btn.hide();}
      if(menu_bar.canScrollDown()){menu_down_btn.show();}else{menu_down_btn.hide();}}
      doScroll=function(updown,animated,savePos){if(animated){menu_bar.animate({'scrollTop':menu_bar.scrollTop()+updown},menu_scroll_velocity,function(){if(savePos){saveScrollPosition();};});}else{menu_bar.scrollTop(updown);if(savePos){saveScrollPosition();};}}
      saveScrollPosition=function()
      {var scrollPosition=menu_bar.scrollTop();if(typeof(Storage)!=="undefined"){sessionStorage.setItem('menusp',scrollPosition);}else{$.ajax({type:"post",url:"user/savemenuposition",data:{'scrollPosition':scrollPosition}});}}
      $(window).resize(function(){showhideScrollBtns();});menu_bar.scroll(function(){showhideScrollBtns();});menu_up_btn.click(function(){doScroll(-menu_scroll_amount,true,true);});menu_down_btn.click(function(){doScroll(+menu_scroll_amount,true,true);});$.fn.hasScrollBar=function(){return this.get(0).scrollHeight>this.height();}
      $.fn.canScrollTop=function(){return($(this).scrollTop()<=0?false:true);}
      $.fn.canScrollDown=function(){return!($(this).scrollTop()+$(this).innerHeight()>=this.get(0).scrollHeight);}
      initPlugin();loadScrollPosition();showhideScrollBtns();}}
      let didFirstSearch=false;let keepSearching=null;goSearchMenu=function(){if(didFirstSearch)
      formatMenu();keepSearching=setInterval(function(){if(listMenus.length<=0){formatMenu();}
      if(listMenus.length>0){clearInterval(keepSearching);}},10);didFirstSearch=true;}
      goSearchMenu();let lastUrl=location.href;new MutationObserver(()=>{const url=location.href;if(url!==lastUrl){lastUrl=url;goSearchMenu();}}).observe(document,{subtree:true,childList:true});});$(function(){$('.defbarExtendend .wrapper-tabs').each(function(){var $this=$(this);var tab_bar=$this.find('.tab-scroll');var tab_left_btn=$this.find('.tab-scroll-control-left');var tab_right_btn=$this.find('.tab-scroll-control-right');var tab_scroll_velocity=200;var tab_scroll_amount=240;loadTabScrollPosition=function(){}
      showhideTabScrollBtns=function(){if(tab_bar.canScrollLeft()){tab_left_btn.show();}else{tab_left_btn.hide();}
      if(tab_bar.canScrollRight()){tab_right_btn.show();}else{tab_right_btn.hide();}}
      doTabScroll=function(leftright,animated){if(animated){tab_bar.animate({'scrollLeft':tab_bar.scrollLeft()+leftright},tab_scroll_velocity,function(){saveTabScrollPosition();});}else{tab_bar.scrollLeft(leftright);saveTabScrollPosition();}}
      saveTabScrollPosition=function(){}
      $(window).resize(function(){showhideTabScrollBtns();});tab_bar.scroll(function(){showhideTabScrollBtns();});tab_left_btn.click(function(){doTabScroll(-tab_scroll_amount,true);});tab_right_btn.click(function(){doTabScroll(+tab_scroll_amount,true);});$.fn.canScrollLeft=function(){return($(this).scrollLeft()<=0?false:true);}
      $.fn.canScrollRight=function(){return!($(this).scrollLeft()+$(this).innerWidth()>=this.get(0).scrollWidth);}
      loadTabScrollPosition();showhideTabScrollBtns();});});$(function(){loading=function(){var $this=this;var wrapper=$('.loading-wrapper');var progressbar_wrapper=$('.loading-wrapper .progressbar-wrapper');var progressbar=$('.loading-wrapper .progressbar-wrapper .progressbar');var progressbar_animation_velocity='fast';var keep_loading_attr='keep-loading';this.startLoading=function(){wrapper.fadeIn(180,function(){wrapper.show();});}
      this.finishLoading=function(){if(wrapper.attr(keep_loading_attr))
      return;wrapper.fadeOut(180,function(){wrapper.hide();});}
      this.enableProgressbar=function(){progressbar_wrapper.show();$this.setProgressBarValue(0);}
      this.disableProgressbar=function(){progressbar_wrapper.hide();$this.setProgressBarValue(0);}
      this.setProgressBarValue=function(percentagem){if(percentagem<0)percentagem=0;if(percentagem>100)percentagem=0;progressbar.animate({'width':percentagem+'%'},progressbar_animation_velocity);}
      this.keepLoading=function(keep)
      {if(keep){wrapper.attr(keep_loading_attr,'true');}else{wrapper.removeAttr(keep_loading_attr);}}}});jQuery(window).load(function(){var loadingCall=new loading();loadingCall.finishLoading();});

      $(function(){alerts=function(check){var $this=this;var alertBoxHTML='<div class="alertBox"></div>';var css_class_alertBox="alertBox";var alertBoxElement=null;var css_class_panel="alertPanel";var css_class_mensagem="alert-mensage";var css_class_controls="alert-controls";var css_pre_class_type="alert-";var available_types=['error','success','warning','info'];var appear_velocity=400;var disappear_velocity=300;var alert_life_time=2000;this.init=function(){if($('body').find('.'+css_class_alertBox).length<=0)
$('body').append(alertBoxHTML);alertBoxElement=$('.'+css_class_alertBox);if(check===true)
$this.checkAlert();}
this.checkAlert=function(){var url='alerts';$.ajax({url:url,type:"post",dataType:"json"}).done(function(result){$this.showAlert(result);});}
this.showAlert=function(alerts){$.each(alerts,function(index,alert){var type=alert['type'];var msg=alert['msg'];var lista_controls=alert['controls'];var have_controls=false;if($.inArray(type,available_types)!=-1){type=css_pre_class_type+type;var id_alert="alert_"+$this.generateAlertId();var controls=null;if(lista_controls.length>0){controls=$('<div class="'+css_class_controls+'"></div>');have_controls=true;var buttons_list=$('<div class="buttons-list"></div>');$.each(lista_controls,function(control_index,control_ctl){var this_ctl_name=control_ctl['name'];var this_ctl_action=control_ctl['action'];var this_ctl_class=((control_index==0)?'button_cancel':'button_confirm');var btn=$('<button type="button" class="'+this_ctl_class+'">'+this_ctl_name+'</button>');btn.click(function(e){e.stopPropagation();if(this_ctl_action==null){$this.removeAlert(id_alert);}else{if(typeof this_ctl_action=="string"&&this_ctl_action.substring(0,8)=="function"){this_ctl_action=eval("var f = function(){ return "+this_ctl_action+"; }; f();");};if(typeof this_ctl_action=="function"){$this.removeAlert(id_alert);this_ctl_action();}else{go(this_ctl_action);}}});buttons_list.append(btn);});controls.append(buttons_list);if(alertBoxElement.hasClass("alertBoxContrls")==false){alertBoxElement.addClass("alertBoxContrls");};};var alertHTML=$('<div class="'+css_class_panel+' '+type+'" alert-id="'+id_alert+'"></div>');var alertMSG=$('<div class="'+css_class_mensagem+'"><span>'+msg+'</span></div>');alertHTML.append(alertMSG);alertHTML.append(controls);alertBoxElement.append(alertHTML);alertHTML.css('top',-10);alertHTML.animate({top:10,opacity:"1"},appear_velocity);if(!have_controls){setTimeout(function(){$this.removeAlert(id_alert);},alert_life_time);};}});}
this.removeAlert=function(id_alert){var alert=alertBoxElement.find('div[alert-id='+id_alert+']');var alerts_with_controls_count=alertBoxElement.find("."+css_class_controls).length;if(alert!=undefined){var alert_with_controls=(alert.find("."+css_class_controls).length>0);if(alert_with_controls&&alerts_with_controls_count<=1){alertBoxElement.removeClass("alertBoxContrls");};alert.animate({top:-20,opacity:"0"},disappear_velocity,function(){alert.animate({"height":"0","min-height":"0"},"fast",function(){$(this).remove();})});};}
this.getNumVisibleAlerts=function(type)
{var class_search='.'+css_class_panel;if(type!=null){class_search+='.'+css_pre_class_type+type;};return alertBoxElement.find(class_search).length;}
this.generateAlertId=function(){var d=new Date().getTime();var uuid='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=(d+Math.random()*16)%16|0;d=Math.floor(d/16);return(c=='x'?r:(r&0x3|0x8)).toString(16);});return uuid;};this.init();}
var alertsCall=new alerts(true);});