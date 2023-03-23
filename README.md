# Du har fått i uppdrag att utveckla API’et till en webbshop.

En lösningsarkitekt har redan dokumenterat vilka endpoints som skall finnas för API’et samt skrivit ett test flöde med REST-Client som ni kan börja utveckal med. Dvs vilka endpoints och vad de skall heta samt vad de förväntas returnera är redan förutbestämt. 

För att testerna skall fungera behöver ni Rest-Client (extension) installerat till vsc.

För G krav så räcker det att de endpoints markerade med G fungerar. 

All data skall sparas i en lokal MongoDB databas. Döp databasen enligt “fornamn-efternamn”.

Det är helt ok att skapa alla produkter med “mock” data, samt att för designens skull använda en “placeholder”-bild för produkterna, dvs att alla produkter har samma bild.


### Skillnader mellan G och VG krav:

För kravet G så behöver inte anänvdarens lösenord krypteras. 

OBS! Spara aldrig API nyckeln i databasen när du tex sparar en order eller en ny kategori.

Hårdkoda heller inte in nyckeln någonstans i backend, tänk på att nyckeln skall enkelt kunna ändras vid behov. Tex via en global variabel, eller en .env variabel.

Skapar du en .env fil för projektet så skicka med ett exempel på env filen döpt till “example.env”.

För G nivå så behöver inte produkter sparas i kategorier. För VG så behöver kategorier kunna skapas och produkter sparas i olika kategorier.
