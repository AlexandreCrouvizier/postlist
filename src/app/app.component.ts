import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  postes = [
    {
      title: 'the first poste of this.blog',
      content: 'le contenue du poste et contenue dans postes.content ',
      loveIts: -1,
      created_at: Date()
    },
    {
      title: '42',
      content: 'La grande question sur la vie, l\'univers et le reste ' +
      'La grande question sur la vie, l\'univers et le reste est – dans l\'œuvre de ' +
        'science-fiction de Douglas Adams Le Guide du voyageur galactique – la question ultime sur le sens de la vie. Une réponse est proposée : le nombre 42,' +
        ' mais le problème est que personne n\'a jamais su la question précise. Dans l\'histoire, la réponse est cherchée par le super-ordinateur Pensées ' +
        'Profondes. Cependant, celui-ci n\'était pas assez puissant pour' +
        ' fournir la question ultime après avoir calculé la réponse durant 7,5 millions d\'années. La réponse de Pensées Profondes embarque les protagonistes' +
        ' dans une quête pour découvrir la question qui y correspond. \n ' +
        'D\'après une théorie, le jour où quelqu\'un découvrira exactement à quoi sert l\'Univers et pourquoi il est là, ledit Univers disparaîtra ' +
        'sur-le-champ pour se voir remplacé par quelque chose de considérablement plus bizarre et inexplicable. Selon une autre théorie, la chose se ' +
        'serait en fait déjà produite.',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'une histoire de cordes',
      content: 'La théorie repose sur deux hypothèses :\n Les briques fondamentales de l\'Univers ne seraient pas des particules ponctuelles mais des sortes ' +
        'de cordelettes vibrantes possédant une tension, à la manière d\'un élastique. Ce que nous percevons comme des particules de caractéristiques distinctes ' +
        '(masse, charge électrique, etc.) ne seraient que des cordes vibrant différemment. Les différents types de cordes, vibrant à des fréquences différentes, ' +
        'seraient ainsi à l\'origine de toutes les particules élémentaires de notre Univers. Avec cette hypothèse, les théoriciens des cordes admettent une échelle ' +
        'minimale, reliée à la taille de Planck, et permettent ainsi d\'éviter facilement l\'apparition de certaines quantités infinies (« divergences ») qui sont ' +
        'inévitables dans les théories quantiques de champs habituelles. L\'Univers contiendrait plus de trois dimensions spatiales. Certaines d\'entre elles, repliées sur elles-mêmes (théories de Kaluza-Klein), passant ' +
        'inaperçues à nos échelles (par une procédure appelée réduction dimensionnelle).\n À partir de ces hypothèses, la théorie des cordes prédit que :\n Le' +
        ' graviton, boson (c.-à-d. médiateur) de la gravitation serait une particule de spin 2 et de masse nulle (conformément à la physique quantique). Sa ' +
        'corde a une amplitude d\'onde nulle.\n Il n\'y a pas de différences mesurables entre des cordes qui s\'enroulent autour d\'une dimension et celles ' +
        'qui se déplacent dans les dimensions (c.-à-d. les effets dans une dimension de taille R sont les mêmes que dans une dimension de taille 1/R). merci wikipedia.org',
      loveIts: 3,
      created_at: Date()
    }
  ];

  constructor(){  }
}
