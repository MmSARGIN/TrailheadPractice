public with sharing class ContactController {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContacts(){
    try {
       List<Contact> myCon = [SELECT FirstName, LastName, Email FROM Contact];
        return  myCon;
    } catch (Exception e) {
        throw new AuraHandledException('olmadı');
    }
  }
}
