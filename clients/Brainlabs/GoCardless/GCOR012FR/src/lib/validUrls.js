const validUrls = [
  '/fr/guides/articles/agence-web-prelevement/',
  '/fr/guides/articles/comment-faire-pour-annuler-un-prelevement-automatique/',
  '/fr/guides/articles/deux-raisons-pourquoi-paiements-par-prelevement-echouent/',
  '/fr/guides/articles/fonctionnement-du-prelevement-bancaire/',
  '/fr/guides/articles/comment-faire-pour-annuler-un-prelevement-automatique/',
  '/fr/guides/articles/deux-raisons-pourquoi-paiements-par-prelevement-echouent/',
  '/fr/guides/articles/fonctionnement-du-prelevement-bancaire/',
  '/fr/guides/articles/guide-prelevement-automatique-experts-comptables/',
  '/fr/guides/articles/le-prelevement-automatique-du-loyer/',
  '/fr/guides/articles/mettre-en-place-prelevement/',
  '/fr/guides/articles/paiements-bacs-de-quoi-s-agit-il/',
  '/fr/guides/articles/passer-au-prelevement-automatique/',
  '/fr/guides/articles/peut-on-imposer-prelevement-automatique/',
  '/fr/guides/articles/prelevement-automatique-pour-les-payeurs/',
  '/fr/guides/articles/que-pense-leurope-du-prelevement-automatique/',
  '/fr/guides/articles/rejet-de-prelevement-quels-sont-les-delais/',
  '/fr/guides/articles/rejet-ou-incident-de-prelevement-les-frais/',
  '/fr/guides/articles/restaurants-cafes/',
  '/fr/guides/articles/salles-de-sport-comment-utiliser-le-prelevement-bancaire/',
  '/fr/guides/articles/logiciel-devis-facture/',
  '/fr/guides/articles/comment-creer-un-lien-de-paiement/',
  '/fr/guides/articles/payer-en-plusieurs-fois-qui-y-a-droit-et-comment-faire/',
  '/fr/guides/articles/fonctionnement-paiement-par-sms/',
  '/fr/guides/articles/ouvrir-compte-bancaire-professionnel-etranger/',
  '/fr/guides/articles/paiement-recurrent-et-ponctuel/',
  '/fr/guides/articles/payer-par-cheque-ou-creer-un-cheque-en-ligne/',
  '/fr/guides/articles/comment-prelever-avec-un-rib/',
  '/fr/guides/articles/comment-payer-sur-internet-sans-carte-bancaire/',
  '/fr/guides/articles/ouvrir-un-compte-en-france-pour-une-societe-etrangere/',
  '/fr/guides/articles/paiements-en-ligne-securises/',
  '/fr/guides/articles/comment-creer-sa-page-de-paiement/',
  '/fr/guides/articles/paiement-vad-definition-fonctionnement/',
  '/fr/guides/cash-flow-academy/dematerialisation-facture/',
  '/fr/guides/articles/installer-un-systeme-paiement-en-ligne/',
  '/fr/guides/articles/solution-paiement-recurrent/',
  '/fr/guides/articles/application-paiement-mobile/',
  '/fr/guides/articles/start-up-pour-les-modes-de-paiement/',
  '/fr/guides/articles/auto-entrepreneuriat-et-moyens-de-paiement/',
  '/fr/guides/articles/definition-du-terminal-virtuel-paiement/',
  '/fr/guides/articles/facture-artiste-auteur/',
  '/fr/guides/articles/different-moyens-paiement-international-entreprises/',
  '/fr/guides/articles/le-paiement-differe-carte-de-debit/',
  '/fr/guides/articles/choisir-solution-paiement-plusieurs-fois/',
  '/fr/guides/articles/accepter-un-paiement-cb-par-telephone/',
  '/fr/guides/articles/les-etapes-recouvrement-facture-impayee/',
  '/fr/guides/articles/europay-mastercard-visa/',
  '/fr/guides/articles/processeur-de-paiement/',
  '/fr/guides/articles/meilleurs-modules-paiement-pour-wordpress/',
  '/fr/guides/articles/comment-accepter-paiements-en-ligne/',
  '/fr/guides/articles/solution-paiement-en-ligne-auto-entrepreneur/',
  '/fr/guides/articles/paiement-recurrent-repetitif/',
  '/fr/guides/articles/echeancier-de-paiement-modele/',
  '/fr/guides/articles/montant-maximum-pour-un-virement-instantane/',
  '/fr/guides/articles/autoentreprise-facture-client-etranger/',
  '/fr/guides/articles/comment-demander-poliment-paiement-client/',
  '/fr/guides/articles/un-client-peut-il-refuser-de-payer-une-facture/',
  '/fr/guides/articles/en-quoi-consiste-le-paiement-terme-a-echoir/',
  '/fr/guides/articles/paiement-par-debit-differe-fonctionnement-et-exemple/',
  '/fr/guides/articles/les-differentes-etapes-du-processus-de-paiement/',
  '/fr/guides/articles/peut-on-recevoir-un-virement-le-dimanche/',
  '/fr/guides/articles/moyens-de-paiement/',
  '/fr/guides/articles/faire-recu-de-paiement/',
  '/fr/guides/articles/modifier-un-virement-permanent/',
  '/fr/guides/articles/definition-fonctionnement-du-cheque-differe/',
  '/fr/guides/articles/meilleures-applications-de-comptabilite/',
  '/fr/guides/articles/fr-fr-what-are-account-to-account-payments/',
  '/fr/guides/articles/les-logiciels-de-gestion-dabonnement/',
  '/fr/guides/articles/client-refuse-de-payer-une-facture/',
  '/fr/guides/articles/taux-commission-carte-bancaire-commercant/',
  '/fr/guides/articles/facilite-de-paiement/',
  '/fr/guides/articles/que-sont-les-commissions-dinterchange/',
  '/fr/guides/cash-flow-academy/moyen-de-paiement-en-ligne/',
  '/fr/guides/articles/frais-paiement-hors-zone-euro/',
  '/fr/guides/articles/pourquoi-un-paiement-peut-il-etre-refuse/',
  '/fr/guides/articles/comprendre-le-fonctionnement-dun-cheque-de-banque/',
  '/fr/guides/articles/commercant-refuser-paiement/',
  '/fr/guides/articles/paiement-fractionne/',
  '/fr/guides/articles/paiement-qr-code/',
  '/fr/guides/articles/nouveaux-moyens-de-paiements-en-2022/',
  '/fr/guides/articles/paiement-par-virement-bancaire/',
  '/fr/guides/articles/comment-faire-facture-en-ligne/',
  '/fr/guides/articles/conditions-de-paiement/',
  '/fr/guides/articles/comment-proceder-au-suivi-de-paiement/',
  '/fr/guides/articles/quels-sont-les-avantages-du-e-wallet/',
  '/fr/guides/articles/comment-recouvrir-une-somme-impayee/',
  '/fr/guides/articles/comment-fonctionne-le-paiement-instantane/',
  '/fr/guides/articles/prestataire-de-services-de-paiement/',
  '/fr/guides/articles/procedure-relance-client/',
  '/fr/guides/articles/6-solutions-alternatives-a-paypal/',
  '/fr/guides/articles/comment-faire-un-virement-en-ligne/',
  '/fr/guides/articles/echec-de-paiement-en-ligne/',
  '/fr/guides/articles/association-5-modes-de-paiement-en-ligne/',
  '/fr/guides/articles/rediger-une-lettre-de-demande-de-paiement/',
  '/fr/guides/articles/le-prelevement-et-virement-bancaire-banque/',
  '/fr/guides/articles/accepter-un-paiement-par-carte-sans-terminal/',
  '/fr/guides/articles/logiciel-comptabilite-pme/',
  '/fr/guides/articles/lien-de-paiement/',
  '/fr/guides/articles/meilleures-passerelles-de-paiement/',
  '/fr/guides/articles/quest-ce-quune-passerelle-de-paiement/',
  '/fr/guides/articles/quel-est-le-montant-maximum-dun-virement-bancaire/',
  '/fr/guides/articles/apie-paiements/',
  '/fr/guides/articles/bien-remplir-un-formulaire-de-prelevement-sepa/',
  '/fr/guides/articles/comprendre-le-prelevement-sepa-b2b/',
  '/fr/guides/articles/consequences-sur-les-virements-sepa/',
  '/fr/guides/articles/definition-sct-sepa-credit-transfer/',
  '/fr/guides/articles/iban-sepa/',
  '/fr/guides/articles/les-differents-modes-de-paiement-sepa/',
  '/fr/guides/articles/mandat-sepa-de-prelevement-interentreprises/',
  '/fr/guides/articles/prelevement-sepa-en-ligne/',
  '/fr/guides/articles/quest-ce-quun-virement-sepa-instantane/',
  '/fr/guides/articles/se-faire-rembourser-un-prelevement-sepa/',
  '/fr/guides/articles/sepa-prelevement-auto-entrepreneur/',
  '/fr/guides/articles/solution-pour-proposer-le-prelevement-sepa/',
  '/fr/guides/articles/swift-et-sepa-quelle-difference/',
  '/fr/guides/articles/tip-sepa-fonctionnement-utilite/',
  '/fr/guides/articles/virement-bancaire-sepa-ou-non-sepa-quelles-differences/',
  '/fr/guides/articles/virement-sepa-belgique-france/',
  '/fr/guides/articles/virement-sepa-delai/',
  '/fr/guides/articles/virement-sepa-suisse-vers-france/',
  '/fr/guides/articles/virement-sepa/',
  '/fr/guides/articles/virements-sepa-allemagne-france/',
  '/fr/guides/sepa/avantages-electronique/',
  '/fr/guides/sepa/avantages-emandat/',
  '/fr/guides/sepa/cas-utilisation/',
  '/fr/guides/sepa/delais/',
  '/fr/guides/sepa/encaisser-paiements/',
  '/fr/guides/sepa/envoyer-ordres-sepa/',
  '/fr/guides/sepa/gerer-mandats/',
  '/fr/guides/sepa/glossaire/',
  '/fr/guides/sepa/identifiant-creancier/',
  '/fr/guides/sepa/introduction/',
  '/fr/guides/sepa/les-normes-sepa/',
  '/fr/guides/sepa/mandats/',
  '/fr/guides/sepa/pages-mandats/',
  '/fr/guides/sepa/pays/',
  '/fr/guides/sepa/pre-notification/',
  '/fr/guides/sepa/protection-consommateurs/',
  '/fr/guides/sepa/recevoir-messages-sepa/',
  '/fr/guides/sepa/rum/',
  '/fr/guides/sepa/sepa-calendrier-implementation/',
  '/fr/guides/sepa/transferer-mandats/'
];
//return validUrls.indexOf(location.pathname) !== -1;
export default validUrls;
