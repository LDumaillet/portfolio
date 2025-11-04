<?php

require_once "mailer/phpmailer.php";

?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio de Lucas Dumaillet, développeur web full stack passionné spécialisé en JavaScript (Angular) et PHP (Symfony), mon parcours, mes projets et comment me contacter.">
  <link rel="stylesheet" href="./styles/index.css">
  <link rel="shortcut icon" alt="logo-cv" href="pictures/logo.png" />
  <script src="script/active.js" defer></script>
  <script src="script/progress.js" defer></script>
  <script src="script/carousel.js" defer></script>
  <title>Portfolio Lucas DUMAILLET | Développeur web full stack</title>
</head>

<body>
  <div id="progress-bar"></div>
  <header>
    <nav class="navbar">
      <ul>
        <li id="link-index"><img src="pictures/logo.png" alt="Logo Lucas DUMAILLET Développeur Web Full Stack"></li>
        <li id="link-about">A propos</li>
        <li id="link-course">Parcours</li>
        <li id="link-portfolio">Portfolio</li>
        <li id="link-interet">Centres d'intérêt</li>
        <li id="link-contact">Contact</li>
        <li id="menu-burger"><img src="pictures/menu-burger.svg" alt="menu hamburger"></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>

      <div class="welcome">
        <div class="presentation">
          <div class="background-wrapper">
            <img src="pictures/background.svg" alt="" class="background" loading="lazy">
          </div>
          <div class="text">
            <h1>Lucas DUMAILLET</h1>
            <h3>Développeur Web Full Stack</h3>
          </div>
        </div>

      </div>

      <div class="about flux-right">
        <h2 id="about" class="reveal-left">A propos</h2>
        <h6>Bonjour, bienvenue !</h6>
        <p>Je m'appelle Lucas, j'ai 29 ans et vous allez pouvoir découvrir mon parcours.</p>
        <p>En reconversion professionnelle en tant que développeur web, j’ai d’abord acquis des compétences en HTML, CSS
          et JavaScript de manière autodidacte. Désireux d’approfondir mes connaissances et d’obtenir un diplôme
          reconnu,
          j’ai ensuite suivi une formation diplômante de niveau Bac +2 avec STUDI pour devenir Développeur Web Full Stack. Cette formation m’a permis d’explorer des concepts essentiels tels que les bases de données
          relationnelles et non relationnelles, ainsi que l’utilisation d’un gestionnaire de tâches. J’y ai également
          appris à concevoir des maquettes, à maîtriser les principaux termes techniques du développement web et à
          comprendre l’importance de Git et de GitHub dans le processus de collaboration et de gestion de version. Afin
          de
          renforcer ma maîtrise du développement front-end et back-end, j’ai aussi appris PHP, ce qui m’a permis de
          rendre
          mes pages plus interactives et dynamiques en interagissant avec mes bases de données.

          Toujours en quête de nouveau défi et prouver mes compétences.
        </p>

        <div class="header-skill">
          <h6>Mes compétences</h6>
          <div class="skill">
            <img src="pictures/trello.svg" alt="logo-trello">
            <img src="pictures/figma.svg" alt="logo-figma">
            <img src="pictures/html.svg" alt="logo-html">
            <img src="pictures/css.svg" alt="logo-css">
            <img src="pictures/bootstrap.svg" alt="logo-bootstrap">
            <img src="pictures/javascript.svg" alt="logo-javascript">
            <img src="pictures/angular.svg" alt="logo-angular">
            <img src="pictures/docker.svg" alt="logo-docker">
            <img src="pictures/php.svg" alt="logo-php">
            <img src="pictures/symfony.svg" alt="logo-symfony">
            <img src="pictures/mariadb.svg" alt="logo-mariadb">
            <img src="pictures/mongodb.svg" alt="logo-mongodb">
            <img src="pictures/github.svg" alt="logo-github">
            <img src="pictures/git.svg" alt="logo-git">
            <img src="pictures/wordpress.svg" alt="logo-wordpress">
          </div>
        </div>
      </div>

      <div class="course flux-right">
        <h2 id="course" class="reveal-left">Mon parcours</h2>
        <div class="timeline">
          <div class="date">2014</div>
          <div class="timeline-item left reveal-left" id="first-item">
            <div class="content">
              <h3>CAP MAINTENANCE DES VEHICULES AUTOMOBILES</h3>
              <p>Lycée des métiers entre Meurthe et Sanon</p>
            </div>
          </div>
          <div class="date">2015</div>
          <div class="timeline-item right reveal-right" id="second-item">
            <div class="content">
              <h3>BAC MAINTENANCE DES VEHICULES AUTOMOBILES</h3>
              <h6>Avec mention</h6>
              <p>Lycée des métiers entre Meurthe et Sanon</p>
            </div>
          </div>
          <div class="timeline-item left reveal-left" id="third-item">
            <div class="content">
              <h3>Equipier de cuisine</h3>
              <p>Mcdonald’s - Frouard</p>
            </div>
          </div>
          <div class="timeline-item right reveal-right" id="fourth-item">
            <div class="content">
              <h3>Vulcanisateur mécanicien</h3>
              <p>ABC - Pompey</p>
            </div>
          </div>
          <div class="date">2016</div>
          <div class="timeline-item left reveal-left" id="fifth-item">
            <div class="content">
              <h3>Maintenance automobile service rapide</h3>
              <p>Peugeot - Pont à Mousson</p>
            </div>
          </div>
          <div class="date">2018</div>
          <div class="timeline-item right reveal-right" id="sixth-item">
            <div class="content">
              <h3>Conseiller commercial après-vente</h3>
              <p>Peugeot - Pont à Mousson</p>
            </div>
          </div>
          <div class="date">2022</div>
          <div class="timeline-item left reveal-left" id="seventh-item">
            <div class="content">
              <h3>Conseiller commercial après-vente</h3>
              <p>Peugeot et Citroën - Pont à Mousson</p>
              <p class="italic">2022 à aujourd'hui</p>
            </div>
          </div>
          <div class="date">2025</div>
          <div class="timeline-item right reveal-right" id="eighth-item">
            <div class="content">
              <h3>Graduate développeur web et web mobile</h3>
              <p>Studi - Ecole en ligne</p>
            </div>
          </div>
          <div class="timeline-item left reveal-left" id="seventh-item">
            <div class="content">
              <h3>Développeur Full Stack</h3>
              <p>JeVeuxAider.com - Stream Team</p>
              <p class="italic">Août 2025 à aujourd'hui</p>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio flux-right">
        <h2 id="portfolio" class="reveal-left">Portfolio</h2>
        <div class="example">
          <div class="model reveal-left">
            <h3>Maquette avec Figma</h3>
            <img src="./pictures/maquette/miniature.webp"
              alt="Maquette Figma"
              class="preview"
              loading="lazy"
              data-gallery="figma"
              data-index="0">
            <div class="not-display">
              <h6>Technologie</h6>
              <p>Figma</p>
            </div>
          </div>
          <div class="gaming-campus reveal-right">
            <h3>Reproduction du gaming campus</h3>
            <img src="./pictures/gaming_campus/miniature.webp"
              alt="Gaming Campus"
              class="preview"
              loading="lazy"
              data-gallery="campus"
              data-index="0">
            <div class="not-display">
              <h6>Technologie</h6>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <div class="api reveal-left">
            <h3>Extraction API de pays</h3>
            <img src="./pictures/api_pays/miniature.webp"
              alt="API Pays"
              class="preview"
              loading="lazy"
              data-gallery="api"
              data-index="0">
            <div class="not-display">
              <h6>Technologie</h6>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </div>
          </div>
          <div class="arcadia reveal-right">
            <h3>Site du Zoo Arcadia</h3>
            <img src="./pictures/zoo_arcadia/miniature.webp"
              alt="Zoo Arcadia"
              class="preview"
              loading="lazy"
              data-gallery="arcadia"
              data-index="0">
            <div class="not-display">
              <h6>Technologie</h6>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>PHP</p>
              <p>MariaDB</p>
              <p>MongoDB</p>
            </div>
          </div>
          <div class="todo reveal-left">
            <h3>To-do List</h3>
            <img src="./pictures/todo/home.webp"
              alt="To-do List"
              class="preview"
              loading="lazy"
              data-gallery="todo"
              data-index="0">
            <div class="not-display">
              <h6>Technologie</h6>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </div>
          </div>
          <div class="crypto reveal-right">
            <h3>Suivi Crypto</h3>
            <img src="./pictures/crypto/miniature.webp"
              alt="Crypto suivi"
              class="preview"
              loading="lazy"
              data-gallery="crypto"
              data-index="0">
            <div class="not-display">
              <h6>Technologie</h6>
              <p>HTML</p>
              <p>SCSS</p>
              <p>JavaScript</p>
              <p>Angular</p>
              <p>API</p>
            </div>
          </div>
          <div class="library reveal-left">
            <h3>Librairie</h3>
            <img src="./pictures/library/library.webp"
              alt="librairie"
              class="preview"
              loading="lazy"
              data-gallery="library"
              data-index="0">
            <div class="not-display">
              <h6>Technologie</h6>
              <p>HTML</p>
              <p>SCSS</p>
              <p>JavaScript</p>
              <p>Angular</p>
              <p>JSON</p>
            </div>
          </div>
          <div class="stream-team reveal-right">
            <a href="https://www.stream-team.site/" class="external-link" data-site-name="Stream-Team">
              <h3>Stream-Team</h3>
              <img src="./pictures/stream_team/stream_team.webp"
                alt="stream-team"
                class="preview"
                loading="lazy"
                data-gallery="stream_team"
                data-index="0">
              <div class="not-display">
                <h6>Technologie</h6>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Node.JS</p>
                <p>Express</p>
                <p>SQL</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="carouselModal" class="modal">
        <img src="./pictures/close.png" alt="Fermer" class="close">
        <img src="./pictures/arrow-right.png" alt="Suivant" class="next">
        <img src="./pictures/arrow-left.png" alt="Précedent" class="prev">
        <img class="carousel-image" id="carouselImage" src="" alt="">
      </div>

      <div class="center-of-interet flux-right">
        <h2 id="center-of-interet" class="reveal-left">Centres d'intérêt</h2>
        <div class="car">
          <h6>Automobile</h6>
        </div>
        <div class="techno">
          <h6>Technologie</h6>
        </div>
        <div class="read">
          <h6>Lecture</h6>
        </div>
        <div class="music">
          <h6>Musique</h6>
        </div>
        <div class="basket">
          <h6>Basket-Ball</h6>
        </div>
      </div>
      <div class="form-contact flux-right">
        <h2 id="contact" class="reveal-left">Contact</h2>
        <form method="post">
          <div class="form">
            <div>
              <label for="email">Votre email</label>
              <input type="email" name="email" id="email" required>
            </div>
            <div>
              <label for="title" class="opinion"> Votre titre</label>
              <input type="title" name="title" id="title" required>
            </div>
            <div>
              <label for="message" class="message"> Votre message</label>
              <textarea name="message" id="message" placeholder="Indiquez votre message" required></textarea>
            </div>
            <div class="submit">
              <input type="submit" name="contact" value="Envoyer">
            </div>
          </div>
        </form>
      </div>
    </section>

    <!-- Modale de confirmation -->
    <div id="redirectModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Redirection</h3>
        <p id="modalMessage"></p>
        <div class="modal-buttons">
          <button id="cancelBtn" class="btn-cancel">Annuler</button>
          <button id="confirmBtn" class="btn-confirm">Continuer</button>
        </div>
      </div>
    </div>

    <hr class="flux-right">

    <footer class="flux-right">
      <div class="logo">
        <a href="https://www.linkedin.com/in/lucas-dumaillet-3558a235b" class="tooltip-container external-link" data-site-name="LinkedIn">
          <img src="pictures/linkedin.svg" alt="logo-linkedin" loading="lazy">
          <span class="tooltip">Accéder à mon LinkedIn</span>
        </a>
        <a href="file/CV_Lucas_Dumaillet.pdf" class="tooltip-container external-link" data-site-name="le Curriculum Vitae de Lucas DUMAILLET">
          <img src="pictures/profile.svg" alt="logo-profil" loading="lazy">
          <span class="tooltip tooltip-cv">Télécharger mon CV</span>
        </a>
        <a href="mailto:dumaillet.lucas@gmail.com" class="tooltip-container external-link" data-site-name="votre boite email">
          <img src="pictures/mail.svg" alt="logo-email" loading="lazy">
          <span class="tooltip">Envoyer un email</span>
        </a>
      </div>
      <div class="copyright">
        <p><img src="pictures/copyright.svg" alt="copyright" loading="lazy"> | Lucas DUMAILLET | Développeur web et web mobile</p>
      </div>
    </footer>
  </main>

</body>

</html>