# Snap Shot [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=See%20this%20react%20example&url=https://yog9.github.io/SnapShot/&hashtags=react,context-api,freecodecamp,developers)

[![Build Status](https://travis-ci.org/Yog9/SnapShot.svg?branch=master)](https://travis-ci.org/Yog9/SnapShot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HitCount](http://hits.dwyl.com/Yog9/SnapShot.svg)](http://hits.dwyl.com/Yog9/SnapShot)

[Demo of Snap Shot](https://yog9.github.io/SnapShot/)

git : https://github.com/Yog9/SnapShot.git

![](/snapscout.png)

### Summary

Snap Shot is a gallery created using React,React Hooks, React Router and Context API. The Routes were setup for four default pages and a search page. Also the images were displayed using the Flickr API and axios to fetch data.

### Motivation

The purpose of this project was to get familiar with React Hooks and Context API.

### Getting Started

Click the demo link or clone/download the repository on your local machine.
Create a config.js file in api folder inside src folders. In config.js file write
`export const apiKey = "YOUR_FLIKR_API_KEY";`

##### Install dependencies

`yarn install`

##### Run Snap Shot from the root directory.

`yarn start`

### Built With

- React js
- React Router
- React Hooks
- Context API
- Flickr API

### Features

**1. Responsive Design.**

**2. Search functionality added to search photos from API.**

### Coming Soon

- [ ] Cypress E2E Tests

### Contributing

Everyone is welcomed to contribute to this project. You can contribute either by submitting bugs or suggesting improvements by opening an issue on GitHub. Please see the [CONTRIBUTING](CONTRIBUTING.md) guidelines for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Suffix size for picture 

Les différentes tailles proposées sur Flickr ont les suffixes suivants :

Suffixe	Catégorie	Côté le plus long (en pixels)	Remarques
s	Vignette    75	Carré rogné
q	Vignette	150	Carré rogné
t	Vignette	100	
m	petite      240	
n	petite  	320	
w	petite  	400	(none)	moyenne	500	
z	moyenne	    640	
c	moyenne	    800	
b	grande	    1024	
h	grande	    1600	A un secret exclusif ; le propriétaire de la photo peut limiter cette taille
k	grande	    2048	A un secret exclusif ; le propriétaire de la photo peut limiter cette taille
3k	Extra large	3072	A un secret exclusif ; le propriétaire de la photo peut limiter cette taille
4k	Extra large	4096	A un secret exclusif ; le propriétaire de la photo peut limiter cette taille
f	Extra large	4096	A un secret exclusif ; le propriétaire de la photo peut limiter cette taille. Existe uniquement pour les photos au format 2:1
5k	Extra large	5120	A un secret exclusif ; le propriétaire de la photo peut limiter cette taille
6k	Extra large	6144	A un secret exclusif ; le propriétaire de la photo peut limiter cette taille
o	Original	Arbitraire	A un secret exclusif ; le propriétaire de la photo peut limiter cette taille. Les fichiers comprennent des données EXIF complètes, ne peuvent pas être pivotés et peuvent utiliser une extension de fichier arbitraire

# React Image Lightbox
https://www.npmjs.com/package/react-image-lightbox

yarn add react-image-lightbox

# Git init
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:meyerAlexis/react-gallery-flickr.git
git push -u origin main