
**Fully Coded Components**

Agrokrebs Angular is built with over 100 individual components, giving you the freedom of choosing and combining. All components can take variations in color, that you can easily modify using SASS files.
You will save a lot of time going from prototyping to full-functional code, because all elements are implemented. So the development process is seamless, switching from our pages to the real website is very easy to be done.
Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.
The angular app is hosting by firebase and the data that you will send is allow by SQL in Google cloud platform.
This project requires an account of Google cloud and firebase.


## Table of Contents

* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)



## Quick start

- [Download from Github](https://github.com/111gilberth/agrokrebsFinal/archive/master.zip).
- Clone the repo: `git clone https://github.com/111gilberth/agrokrebsFinal.git`.


## File Structure
Within the download you'll find the following directories and files:

```
agrokrebs
├── CHANGELOG.md
├── ISSUES_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── e2e
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
|   |   |___adherentes
|   |   |   |___adherentes.component.html
|   |   |   |___adherentes.component.scss
|   |   |   |___adherentes.component.spec.ts
|   |   |   └──adherentes.component.ts
|   |   ├── agrokrebs
|   |   |   |___agrokrebs.component.html 
|   |   |   |___agrokrebs.component.scss
|   |   |   |___agrokrebs.spec.ts
|   |   |   |___agrokrebs.component.ts
|   |   ├── contacto
|   |   |   |___contacto.component.html 
|   |   |   |___contacto.component.scss
|   |   |   |___contacto.spec.ts
|   |   |   |___contacto.component.ts
|   |   ├── credito
|   |   |   |___credito.component.html 
|   |   |   |___credito.component.scss
|   |   |   |___credito.spec.ts
|   |   |   |___credito.component.ts
|   |   ├── fertilizantes-h
|   |   |   |___fertilizantes-h.component.html 
|   |   |   |___fertilizantes-h.component.scss
|   |   |   |___fertilizantes-h.spec.ts
|   |   |   |___fertilizantes-h.component.ts
|   |   ├── fertilizantes-l
|   |   |   |___fertilizantes-l.component.html 
|   |   |   |___fertilizantes-l.component.scss
|   |   |   |___fertilizantes-l.spec.ts
|   |   |   |___fertilizantes-l.component.ts
|   |   ├── galeria
|   |   |   |___galeria.component.html 
|   |   |   |___galeria.component.scss
|   |   |   |___galeria.spec.ts
|   |   |   |___galeria.component.ts
│   │   ├── home
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   ├── home.component.ts
│   │   │   └── home.module.ts
|   |   ├── inicio
|   |   |   |___inicio.component.html 
|   |   |   |___inicio.component.scss
|   |   |   |___inicio.spec.ts
|   |   |   |___inicio.component.ts
│   │   ├── landing
│   │   │   ├── landing.component.html
│   │   │   ├── landing.component.scss
│   │   │   ├── landing.component.spec.ts
│   │   │   └── landing.component.ts
│   │   ├── login
│   │   │   ├── login.component.css
│   │   │   ├── login.component.html
│   │   │   ├── login.component.spec.ts
│   │   │   └── login.component.ts
│   │   ├── productos
│   │   │   ├── productos.component.css
│   │   │   ├── productos.component.html
│   │   │   ├── productos.component.spec.ts
│   │   │   └── productos.component.ts
│   │   ├── profile
│   │   │   ├── profile.component.html
│   │   │   ├── profile.component.scss
│   │   │   ├── profile.component.spec.ts
│   │   │   └── profile.component.ts
│   │   ├── reguladores
│   │   │   ├── reguladores.component.html
│   │   │   ├── reguladores.component.scss
│   │   │   ├── reguladores.component.spec.ts
│   │   │   └── reguladores.component.ts
│   │   ├── sections
│   │   │   ├── alerts-section
│   │   │   │   ├── alerts-section.component.css
│   │   │   │   ├── alerts-section.component.html
│   │   │   │   ├── alerts-section.component.spec.ts
│   │   │   │   └── alerts-section.component.ts
│   │   │   ├── angular-section
│   │   │   │   ├── angular-section.component.css
│   │   │   │   ├── angular-section.component.html
│   │   │   │   ├── angular-section.component.spec.ts
│   │   │   │   └── angular-section.component.ts
│   │   │   ├── buttons-section
│   │   │   │   ├── buttons-section.component.css
│   │   │   │   ├── buttons-section.component.html
│   │   │   │   ├── buttons-section.component.spec.ts
│   │   │   │   └── buttons-section.component.ts
│   │   │   ├── crs-section
│   │   │   │   ├── crs-section.component.css
│   │   │   │   ├── crs-section.component.html
│   │   │   │   ├── crs-section.component.spec.ts
│   │   │   │   └── crs-section.component.ts
│   │   │   ├── inputs-section
│   │   │   │   ├── inputs-section.component.css
│   │   │   │   ├── inputs-section.component.html
│   │   │   │   ├── inputs-section.component.spec.ts
│   │   │   │   └── inputs-section.component.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.html
│   │   │   │   ├── modal.component.scss
│   │   │   │   ├── modal.component.spec.ts
│   │   │   │   └── modal.component.ts
│   │   │   ├── navigation-section
│   │   │   │   ├── navigation-section.component.css
│   │   │   │   ├── navigation-section.component.html
│   │   │   │   ├── navigation-section.component.spec.ts
│   │   │   │   └── navigation-section.component.ts
│   │   │   ├── nucleo-section
│   │   │   │   ├── nucleo-section.component.css
│   │   │   │   ├── nucleo-section.component.html
│   │   │   │   ├── nucleo-section.component.spec.ts
│   │   │   │   └── nucleo-section.component.ts
│   │   │   ├── sections.component.css
│   │   │   ├── sections.component.html
│   │   │   ├── sections.component.spec.ts
│   │   │   ├── sections.component.ts
│   │   │   ├── sections.module.ts
│   │   │   ├── tabs-section
│   │   │   │   ├── tabs-section.component.css
│   │   │   │   ├── tabs-section.component.html
│   │   │   │   ├── tabs-section.component.spec.ts
│   │   │   │   └── tabs-section.component.ts
│   │   │   ├── typography-section
│   │   │   │   ├── typography-section.component.css
│   │   │   │   ├── typography-section.component.html
│   │   │   │   ├── typography-section.component.spec.ts
│   │   │   │   └── typography-section.component.ts
│   │   │   └── versions-section
│   │   │       ├── versions-section.component.css
│   │   │       ├── versions-section.component.html
│   │   │       ├── versions-section.component.spec.ts
│   │   │       └── versions-section.component.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.scss
│   │   │       ├── navbar.component.spec.ts
│   │   │       └── navbar.component.ts
│   │   ├── signup
│   │   |   ├── signup.component.html
│   │   |   ├── signup.component.scss
│   │   |   ├── signup.component.spec.ts
│   │   |   └── signup.component.ts
│   │   └── videos
│   │       ├── videos.component.html
│   │       ├── videos.component.scss
│   │       ├── videos.component.spec.ts
│   │       └── videos.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   ├── js
│   │   ├── scss
│   │   │   ├── angular
│   │   │   ├── argon.scss
│   │   │   ├── bootstrap
│   │   │   └── custom
│   │   └── vendor
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json

```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



## Resources
- Demo: <https://agrokrebstesting.web.app/>
- Support: <https://github.com/111gilberth>


## Licensing

- Copyright 2020 Xrot

- Licensed under MIT (https://github.com/111gilberth/blob/master/LICENSE.md)

### Social Media

Facebook: <https://www.facebook.com/agrokrebs/?eid=ARBmWX2IJe7tV4sUsjPa8LA__fcjC4Twv8fZO1eObXkkUd8vFbJw2hg__IHtXad8EPh2h6FEIw_0F-Sg>

"# agrokrebsFinal" 
