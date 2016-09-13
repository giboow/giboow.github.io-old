---
title: Mon experience avec ReactJS
date: 2016-09-13
layout: Post
tags:
  - react
  - experience
  - javascript
sources :
  - Blog Okto : http://blog.octo.com/pourquoi-sinteresser-a-react/
  - Blog Atima : http://blog.altima.fr/seo/react-js-isomorphisme/
---
Cela fait quelques temps que je m'interesse aux applications web "Single Page"
qui à pour avantage principal, de proposer à l'utilisateur une navigation
très fluide (sans allé-retours avec
le serveur pour génerer la page suivante).

# Mes premiers pas dans le "Single Page"

Au tout début, je gérais l'ensemble de mon rendu avec jQuery
et des appels Ajax à une API écrite en PHP, ce qui était un peu "barbare",
difficil à organiser (la partie vue est à moitié rendu par la partie serveur,
et modifié par le JS), et la gestion des évenements utilisateur devenait vite
un enfer!

J'ai ensuite découvert [AngularJS](https://angularjs.org/), qui permet un vrai rendu côté client, et avec
une architecture proche du MVC (ou plutôt [MVW](https://plus.google.com/+AngularJS/posts/aZNVhj355G2)).
La structure du projet est bien mieux pensée, et il est plus facile de maintenir
ce type d'application et d'implémenter des [tests unitaires](https://docs.angularjs.org/guide/unit-testing).
Pour moi ce type d'application est très bien adapée pour faire une
[RIA](https://fr.wikipedia.org/wiki/Rich_Internet_application) sans contenu SEO, mais lorsque
l'on souhaite développer un site Single Page avec du contenu à indexer (type Blog, ou référencement de documents),
cela devient vite impossible pour une application qui charge uniquement le contenu côté client. [Des solutions "complexes et un peu bancales"](http://www.yearofmoo.com/2012/11/angularjs-and-seo.html)
éxistent tout de même, en proposant un système de snapshot côté serveur...
mais cela pose des problèmes de synchronisation des snapshots
et des données, lorsqu'il y a une mise à jour.



<!--

J'ai toujours été attiré par ce type d'application


Le principal inconvénient est que les rendus sont injectés côté client, ce qui ne permet pas aux moteurs de
recherches d'indexer ce contenu dynamique (à contrario d'une application PHP).-->

#
