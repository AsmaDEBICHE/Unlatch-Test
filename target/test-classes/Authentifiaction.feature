#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

@tag
Feature: Authentification

  @tag1
  Scenario: Authentification avec e-mail valide et mot de passe non valide
  
    Given Acceder a URL du site web legalife
    
    When Cliquer sur le bouton Connection
    When Saisir un email valide dans l icone indiquant  Votre email 
    When Saisir un mot de passe non valide dans l icone indiquant Votre mot de passe 
    When Cliquer sur le bouton CONNECTION 
    
    Then Affichage d un message Mot de passe incorrect 
   


