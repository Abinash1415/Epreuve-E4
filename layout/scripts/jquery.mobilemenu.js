/*Améliore l'utilisation via mobile de la barre menu par un menu déroulant*/
/*Création d'un menu de navigation*/
$('<form action="#"><select /></form>').appendTo("#mainav");
/*Ajout d'option dans le menu*/
$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#mainav select");
/*Recherche les option existant dans le menu suivant l'ordre*/
$("#mainav a").each(function(){var e=$(this);
    if($(e).parents("ul ul ul").length>=1)
    {$("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mainav select")}
    else if($(e).parents("ul ul").length>=1)
    { $("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mainav select")}
    else if($(e).parents("ul").length>=1){$("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#mainav select")}
    else{ $("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#mainav select")}});
$("#mainav select").change(function(){
    if($(this).find("option:selected").val()!=="#")
        {window.location=$(this).find("option:selected").val()}})