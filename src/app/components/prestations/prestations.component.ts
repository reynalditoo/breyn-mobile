import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {}

  fiches = {
    vitrine: {
      titre: 'SITE VITRINE',
      body: `
              Vous êtes un artiste peintre voulant faire connaître ses oeuvres au plus grande nombre ? Vous êtes boulanger/pâtissier et souhaitez
              promouvoir vos créations ? Vous êtes un groupe de rock désirant partager sa musique, son actualité et plus encore avec ses fans ?
              Bref, vous êtes un passionné qui rêve de voir son activité passer la vitesse supérieure en la partageant avec le monde entier ?
              Alors un site vitrine est ce qu'il vous faut !
            `
    },
    refonte: {
      titre: 'Refonte/Amélioration d\'un site',
      body: `
              Vous avez peut-être déjà votre propre site web mais il ne répond plus à vos attentes ? Pas de souci, je peux le modifier ou en créer 
              un nouveau qui sera en accord avec vos nouvelles aspirations.
            `
    },
    blog: {
      titre: 'BLOG',
      body: `
              Vous êtes un professionnel expert dans son domaine et souhaitez partager son savoir au travers d'articles ? Ou peut-être êtes-vous un
              particulier tout aussi éclairé désireux de partager sa vision du monde par le biais d'un site entièrement personnalisé ? Dans tous les cas
              vous souhaitez que vos lecteurs puissent intéragir avec vous en commentant vos publications ? Alors c'est plutôt un blog que je vous conseillerai !
            `
    },
    autre_site: {
      titre: 'UN AUTRE TYPE DE SITE ?',
      body: 'Tout autre idée de site est la bienvenue. <a href="#contact">Faites-en moi part</a> et je serai ravi de vous apporter mon aide !'
    },
    responsive: {
      titre: 'RESPONSIVE',
      body: `
              Un site dit "responsive" est tout simplement un site configuré pour s'adapter à tout type d'écran, du plus large au plus petit,
              d'un écran de TV à un smartphone.
            `
    },
    traduction: {
      titre: 'TRADUCTION',
      body: `
              Vous voulez que votre site soit compréhensible du plus grande nombre ? Fort de ma maitrise universitaire en anglais et espagnol et de mes longs séjours en Australie, Irlande et Espagne,
              je sous propose une traduction de haute qualité en anglais et/ou en espagnol pour que votre site traverse les frontières.
            `
    },
    seo: {
      titre: 'REFERENCEMENT NATUREL',
      body: `
              Vous attachez une importance toute particulière à ce que votre site apparaisse en bonne position dans les moteurs de recherche ?
              Pas de problème !
            `
    },
    admin: {
      titre: 'ESPACE ADMINISTRATEUR',
      body: `
              Bon, avoir son propre site, c'est bien. Mais pouvoir ajouter soi-même des photos ou supprimer ce commentaire inapproprié, c'est mieux ! 
              Voilà ce que vous permettra de faire un espace "admin" : gérer une partie du contenu de votre site internet sans avoir à faire appel à un développeur.
              C'est quand même plus pratique, non ?
            ` 
    },
    autre_fonctionnalite: {
      titre: 'AUTRES FONCTIONNALITES',
      body: 'Vous pensiez à un autre type de fonctionnalité ? Pas de problème, j\'étudierai chaque proposition avec la plus grande attention.'
    }
  };


  onClick(data: object) {
    this.mainService.dataClicked = data;
    console.log(this.mainService.dataClicked);
  }

}
