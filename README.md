(projekt zaliczeniowy przedmiotu Inżynieria Oprogramowania)
# News Search

#### News Search - aplikacja wyszukiwująca newsy!
> Aplikacja wyszukiwuje newsy z trzech największych portali (za pomocą Web Scrappingu) i zestawia je w desktopowej aplikacji. Aplikacja umożliwia wyświetlanie listy newsów, fitrowanie jej, wyświetlanie szczegółowych informacji - wraz z opcją przejścia do strony na której news został upublikowany oraz dodanie do listy ulubionych. W aplikacji dostępna jest również mała konfiguracja - dane tej konfiguracji zapisane są w pliku oraz ładowane przy każdym uruchomieniu aplikacji.

## Specyfikacja wymagań

1) **Wymagania funkcjonalne** 

Nie ujeliśmy kategorii zależności od systemu i oprogramowania bo jest to nieistotne w naszyym projekcie. Nasza aplikacja jest multiplatformowa – działająca niezależnie od systemu operacyjnego. Jest to aplikacja desktopowa nieposiadająca dodatkowego oprogramowania potrzebnego do uruchomienia aplikacji.

|**Identyfikator**|**Nazwa krótka**|**Opis**|**Priorytet**|
| :-: | :-: | :-: | :-: |
|W\_FUN\_1|Wyświetlanie listy|Aplikacja powinien umożliwić wyświetlenie listy wiadomości (ostatnie 50 względem danej kategorii oraz stron internowej) o prace względem daty dodania do portalu. Jako użytkownik systemu otrzymam dostęp do ogłoszeń na bieżąco.|1 (wymagane)|
|W\_FUN\_2|Webscrapping danych| Serwer powinien na rządzanie klienta wykonać Web Scrapping stron aby odesłać odpowiedz z aktualną listą wiadomości. Jako użytkownik mogę na bieżąco spradzać listę ogłoszeń o pracę odświeżajać listę za pomocą przycisku. |1 (wymagane)|
|W\_FUN\_3|Lista ulubionych| Aplikacja powinna umożliwić dodawanie wiadomości do ulubionych aby mieć dostęp do niego poźniej (zapisany w aplikacji). Jako użytkownik mam dostęp do zapisanych i w każdej chwili mogę je wyświetlić. |2 (oczekiwana)|
|W\_FUN\_4|Filtrowanie | Aplikacja umożliwia filtrowanie rezultatów Jako użytkownik mam dostep do filtrowania stron internetowych. |2 (oczekiwana)|
|W\_FUN\_5|Podgląd wiadomości| Aplikacja umożliwa podgląd wiadomości. Jako użytkownik mam dostęp do przycisku wyświeltającego cały opis ogłoszenia. |2 (oczekiwana)|
|W\_FUN\_6|Przejście do wiadomości oryginalnej|Aplikacja umożliwia przejście z wiadomości wyświetlanej w aplikacji do oryginalnego ogłoszenia. Jako użytkownik mogę przejść do strony wyświetlającej ogłosznie.|3 (dodatkowa)|
|W\_FUN\_7|Kontrola blędów dotycząca pobierania danych z serwera.|Aplikacja wyświetli informacje gdy niemożliwe będzie pobranie danych z serwera udostępniajac przycisk – spróbuj ponownie.|2 (oczekiwana)|
|W\_FUN\_8|Konfiguracja |Aplikacja umożliwia konfigurowanie opcji wyświetlania newsów - zapis konfiguracji w pliku json.|3 (dodatkowa)|

2) **Wymagania niefuncjonalne**

|**Identyfikator**|**Podkategoria**|**Nazwa krótka**|**Opis**|**Priorytet**|
| :- | :- | :- | :- | :- |
|W\_NIEFUN\_1|3 - wydajność|Zapewnienie wydajności|Zapewnienie wydajności oraz niezawadności oprogramowania. Zapewnienie najkrótszego ładowania danych.|1 (wymagane)|
|W\_NIEFUN\_2|2 - bezpieczeństwo|Poufność danych|Wszelkie dane zabezpieczone w aplikacji. Brak wypływania danych na zewnątrz. Przechowywanie tylko na dysku użytkownika.|1 (wymagane)|
|W\_NIEFUN\_3|1 - projektowe|Wolność oprogramowania|Dostarczane przez nas oprogamowanie jest wolne, kod jest otwarty i ogólnodostepny|1 (wymagane)|
|W\_NIEFUN\_4|1 - projektowe|Kompatybilność |Oprogramowanie klienckie dostępne i działające na konkurencyjnych systemach operacyjnych|2 (oczekiwane)|
|W\_NIEFUN\_5|4 – ergonomia UI |Design|Prosty, lecz dobrze wyglądający interfejs użytkownika, który w sposób intuicyjny pozwoli na wykorzystywanie funkcji.|3 (dodatkowa)|

## Stack technologiczny

### Client
- electron.js 1.0.4
- angular 11 (https://github.com/maximegris/angular-electron)
- bulma css framework 0.9.2
- scss 
- node.js 12.18.1^

### Server
- node.js 12.18.1^, 
- express.js 1.0.0^,
- crawler 1.3.0
- jest (testing)

## Architektura uruchomieniowa
- Visual Studio Code jako edytor kodu,
- Aplikacja klienta dostępna na systemy operacyjne: macOS, Windows oraz Linux,
- Server uruchomiony na wieloplatformowym środowisku uruchomieniowym



