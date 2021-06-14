$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Authentifiaction.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Authentification",
  "description": "",
  "id": "authentification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 321600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Authentification avec e-mail valide et mot de passe non valide",
  "description": "",
  "id": "authentification;authentification-avec-e-mail-valide-et-mot-de-passe-non-valide",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Acceder a URL du site web legalife",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Cliquer sur le bouton Connection",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Saisir un email valide dans l icone indiquant  Votre email",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Saisir un mot de passe non valide dans l icone indiquant Votre mot de passe",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Cliquer sur le bouton CONNECTION",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Affichage d un message Mot de passe incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.accder_lurl_du_site_web_httpswwwlegalifefr()"
});
formatter.result({
  "duration": 17196577900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.cliquer_sur_le_bouton_connection()"
});
formatter.result({
  "duration": 2526264700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.saisir_un_email_valide_dans_l_icone_indiquant_Votre_email()"
});
formatter.result({
  "duration": 158773800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.saisir_un_mot_de_passe_non_valide_dans_licne_indiquant_votre_mot_de_passe_()"
});
formatter.result({
  "duration": 90389700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.cliquer_sur_le_bouton_connection_()"
});
formatter.result({
  "duration": 99677000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.affichage_dun_message_mot_de_passe_incorrect_()"
});
formatter.result({
  "duration": 804233700,
  "status": "passed"
});
});