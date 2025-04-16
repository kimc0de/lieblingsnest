import express from 'express';

const router = express.Router();
const DEFAULT_TITLE = 'Lieblingsnest Detmold | Ihr gemütliches Ferienhaus in Detmold';
const DEFAULT_DESCRIPTION = 'Willkommen im Lieblingsnest Detmold - Ihr charmantes Ferienhaus im Herzen von Ostwestfalen-Lippe. Genießen Sie einen erholsamen Aufenthalt in unserer komfortablen Unterkunft, ideal für Familien und Naturliebhaber.';

router.get('/', (req, res) => {
  res.render('home', {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  });
});

const ROOM_DESCRIPTION = 'Entdecken Sie unsere gemütlichen Zimmer im Lieblingsnest Detmold. Moderne Ausstattung, komfortable Betten und stilvolles Ambiente erwarten Sie in unserem Ferienhaus.';

router.get('/zimmer', (req, res) => {
  res.render('room', {
    title: 'Zimmer | Lieblingsnest Detmold',
    description: ROOM_DESCRIPTION,
  });
});

const PRICE_DESCRIPTION = 'Transparente Preise und Hausregeln für Ihren Aufenthalt im Lieblingsnest Detmold. Informieren Sie sich über unsere fairen Konditionen und einen reibungslosen Aufenthalt.';

router.get('/preise/regeln', (req, res) => {
  res.render('price', {
    title: 'Preise und Regeln | Lieblingsnest Detmold',
    description: PRICE_DESCRIPTION,
  });
});

const AREA_DESCRIPTION = 'Erkunden Sie die reizvolle Umgebung des Lieblingsnest Detmold. Teutoburger Wald, Hermannsdenkmal und historische Altstadt in unmittelbarer Nähe - perfekt für Ihren Urlaub.';

router.get('/haus/umfeld', (req, res) => {
  res.render('area', {
    title: 'Umfeld | Lieblingsnest Detmold',
    description: AREA_DESCRIPTION,
  });
});

const CONTACT_DESCRIPTION = 'Haben Sie Fragen zum Lieblingsnest Detmold? Kontaktieren Sie uns für Buchungsanfragen oder weitere Informationen zu unserem Ferienhaus. Wir freuen uns auf Sie.';

router.get('/kontakt', (req, res) => {
  res.render('contact', {
    title: 'Kontakt | Lieblingsnest Detmold',
    description: CONTACT_DESCRIPTION
  });
});

// router.get('/kalendar', (req, res) => {
//   res.render('calendar', {
//     title: 'Kalender | Lieblingsnest Detmold',
//     description: ''
//   })
// };

const RATING_DESCRIPTION = 'Lesen Sie die Bewertungen unserer Gäste im Lieblingsnest Detmold. Ihre Meinung ist uns wichtig! Teilen Sie Ihre Erfahrungen und helfen Sie anderen bei der Wahl ihrer Unterkunft.';

router.get('/bewertungen', (req, res) => {
  res.render('rating', {
    title: 'Bewertungen | Lieblingsnest Detmold',
    description: RATING_DESCRIPTION,
  });
});

router.get('/partner', (req, res) => {
  res.render('partner', {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  });
});

router.get('/danke', (req, res) => {
  res.render('thanks', {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  });
});

router.get ('/sitemap.xml', function(req, res) {
  res.sendFile('sitemap.xml', {root: './public'});
})

export default router;
