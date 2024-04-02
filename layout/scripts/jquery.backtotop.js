/*Boutton pour ce rediriger vers le haut*/
jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 500);
});

/*Apparrition du bouton*/
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

/*Téléchargement du rapport Optic You*/
function downloadOptic() {
    setTimeout(function() {
      var link = document.createElement('a');
      link.href = '../../../pdf/OpticYou.pdf';
      link.download = 'Rapport de stage Optic You.pdf';
      link.click();
    }, 300);
  }

/*Téléchargement du rapport Wedoo*/
function downloadWedoo() {
    setTimeout(function() {
      var link = document.createElement('a');
      link.href = '../../../pdf/WedooMotion.pdf';
      link.download = 'Rapport de stage WedooMotion Association.pdf';
      link.click();
    }, 300);
  }

/*Téléchargement du CV*/
function downloadCV() {
    setTimeout(function() {
      var link = document.createElement('a');
      link.href = '../../../pdf/cv.pdf';
      link.download = 'CV ROY Abinash.pdf';
      link.click();
    }, 300);
  }
/*Ouvre au hasard une des fichiers java*/
  function ouvrirAuHasardProjetJ() {
    var pages = [
        "../pages/projet/java/banque.html",
        "../pages/projet/java/calculatrice.html",
        "../pages/projet/java/dé.html",
        "../pages/projet/java/motus.html"
    ];
    // Sélectionne un index au hasard parmi les pages
    var indexAuHasard = Math.floor(Math.random() * pages.length);
    // Redirige vers la page sélectionnée
    window.location.href = pages[indexAuHasard];
}

/*Projet*/
/*Ouvre au hasard une des fichiers java*/
  function ouvrirAuHasardJava() {
    var pages = [
        "../../../pages/projet/java/banque.html",
        "../../../pages/projet/java/calculatrice.html",
        "../../../pages/projet/java/dé.html",
        "../../../pages/projet/java/motus.html"
    ];
    // Récupérer la liste des pages déjà vues du stockage local, si elle existe
    var pagesVues = localStorage.getItem('pagesVues') ? JSON.parse(localStorage.getItem('pagesVues')) : [];

    // Filtrer les pages qui n'ont pas encore été vues
    var pagesRestantes = pages.filter(function(page) {
        return pagesVues.indexOf(page) === -1;
    });

    // Si toutes les pages ont été vues, réinitialiser la liste des pages vues et recommencer
    if (pagesRestantes.length === 0) {
        pagesVues = [];
        pagesRestantes = pages;
    }

    // Sélectionner aléatoirement une page parmi les restantes
    var indexAuHasard = Math.floor(Math.random() * pagesRestantes.length);
    var pageSelectionnee = pagesRestantes[indexAuHasard];

    // Ajouter la page sélectionnée à la liste des pages vues et sauvegarder dans le stockage local
    pagesVues.push(pageSelectionnee);
    localStorage.setItem('pagesVues', JSON.stringify(pagesVues));

    // Rediriger vers la page sélectionnée
    window.location.href = pageSelectionnee;
}