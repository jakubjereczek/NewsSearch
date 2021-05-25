(projekt zaliczeniowy przedmiotu In�ynieria Oprogramowania)
# News Search

#### News Search - aplikacja wyszukiwuj�ca newsy!
> Aplikacja wyszukiwuje newsy z trzech najwi�kszych portali (za pomoc� Web Scrappingu) i zestawia je w desktopowej aplikacji. Aplikacja umo�liwia wy�wietlanie listy news�w, fitrowanie jej, wy�wietlanie szczeg�owych informacji - wraz z opcj� przej�cia do strony na kt�rej news zosta� upublikowany oraz dodanie do listy ulubionych. W aplikacji dost�pna jest r�wnie� ma�a konfiguracja - dane tej konfiguracji zapisane s� w pliku oraz �adowane przy ka�dym uruchomieniu aplikacji.

## Specyfikacja wymaga�

1) **Wymagania funkcjonalne** 

Nie ujeli�my kategorii zale�no�ci od systemu i oprogramowania bo jest to nieistotne w naszyym projekcie. Nasza aplikacja jest multiplatformowa � dzia�aj�ca niezale�nie od systemu operacyjnego. Jest to aplikacja desktopowa nieposiadaj�ca dodatkowego oprogramowania potrzebnego do uruchomienia aplikacji.

|**Identyfikator**|**Nazwa kr�tka**|**Opis**|**Priorytet**|
| :-: | :-: | :-: | :-: |
|W\_FUN\_1|Wy�wietlanie listy|Aplikacja powinien umo�liwi� wy�wietlenie listy wiadomo�ci (ostatnie 50 wzgl�dem danej kategorii oraz stron internowej) o prace wzgl�dem daty dodania do portalu. Jako u�ytkownik systemu otrzymam dost�p do og�osze� na bie��co.|1 (wymagane)|
|W\_FUN\_2|Webscrapping danych| Serwer powinien na rz�dzanie klienta wykona� Web Scrapping stron aby odes�a� odpowiedz z aktualn� list� wiadomo�ci. Jako u�ytkownik mog� na bie��co spradza� list� og�osze� o prac� od�wie�aja� list� za pomoc� przycisku. |1 (wymagane)|
|W\_FUN\_3|Lista ulubionych| Aplikacja powinna umo�liwi� dodawanie wiadomo�ci do ulubionych aby mie� dost�p do niego po�niej (zapisany w aplikacji). Jako u�ytkownik mam dost�p do zapisanych i w ka�dej chwili mog� je wy�wietli�. |2 (oczekiwana)|
|W\_FUN\_4|Filtrowanie | Aplikacja umo�liwia filtrowanie rezultat�w Jako u�ytkownik mam dostep do filtrowania stron internetowych. |2 (oczekiwana)|
|W\_FUN\_5|Podgl�d wiadomo�ci| Aplikacja umo�liwa podgl�d wiadomo�ci. Jako u�ytkownik mam dost�p do przycisku wy�wieltaj�cego ca�y opis og�oszenia. |2 (oczekiwana)|
|W\_FUN\_6|Przej�cie do wiadomo�ci oryginalnej|Aplikacja umo�liwia przej�cie z wiadomo�ci wy�wietlanej w aplikacji do oryginalnego og�oszenia. Jako u�ytkownik mog� przej�� do strony wy�wietlaj�cej og�osznie.|3 (dodatkowa)|
|W\_FUN\_7|Kontrola bl�d�w dotycz�ca pobierania danych z serwera.|Aplikacja wy�wietli informacje gdy niemo�liwe b�dzie pobranie danych z serwera udost�pniajac przycisk � spr�buj ponownie.|2 (oczekiwana)|
|W\_FUN\_8|Konfiguracja |Aplikacja umo�liwia konfigurowanie opcji wy�wietlania news�w - zapis konfiguracji w pliku json.|3 (dodatkowa)|

2) **Wymagania niefuncjonalne**

|**Identyfikator**|**Podkategoria**|**Nazwa kr�tka**|**Opis**|**Priorytet**|
| :- | :- | :- | :- | :- |
|W\_NIEFUN\_1|3 - wydajno��|Zapewnienie wydajno�ci|Zapewnienie wydajno�ci oraz niezawadno�ci oprogramowania. Zapewnienie najkr�tszego �adowania danych.|1 (wymagane)|
|W\_NIEFUN\_2|2 - bezpiecze�stwo|Poufno�� danych|Wszelkie dane zabezpieczone w aplikacji. Brak wyp�ywania danych na zewn�trz. Przechowywanie tylko na dysku u�ytkownika.|1 (wymagane)|
|W\_NIEFUN\_3|1 - projektowe|Wolno�� oprogramowania|Dostarczane przez nas oprogamowanie jest wolne, kod jest otwarty i og�lnodostepny|1 (wymagane)|
|W\_NIEFUN\_4|1 - projektowe|Kompatybilno�� |Oprogramowanie klienckie dost�pne i dzia�aj�ce na konkurencyjnych systemach operacyjnych|2 (oczekiwane)|
|W\_NIEFUN\_5|4 � ergonomia UI |Design|Prosty, lecz dobrze wygl�daj�cy interfejs u�ytkownika, kt�ry w spos�b intuicyjny pozwoli na wykorzystywanie funkcji.|3 (dodatkowa)|

## Stack technologiczny

### Client
- electron.js 1.0.4
- angular 11 (https://github.com/maximegris/angular-electron)
- bulma css framework 0.9.2
- scss 
- node.js 12.18.1^,


### Server
- node.js 12.18.1^, 
- express.js 1.0.0^,
- crawler 1.3.0
- jest (testing)

## Architektura 
#### Architektura rozwoju
- Visual Studio Code jako edytor kodu,
- Leapwork (do test�w Klienta)

#### Architektura uruchomieniowa
- Serwer uruchomiony na wieloplatformowym �rodowisku uruchomieniowym Node.js,
- Aplikacja klienta dost�pna na systemy operacyjne: macOS, Windows oraz Linux uruchioma na otwartym silniku Chrominium 
(otwarty projekt przegl�darki internetowej, z kt�rego kod �r�d�owy czerpi� mi�dzy innymi Google Chrome, slu�y do do wy�wietlania tre�ci internetowych),

#### Testy
Testowanie poprawno�ci funkcjanalno�ci serwera odby�o si� za pomoc� frameworka jest.js
![jestjs](screenshots/tests.png)
Natomiast testowanie aplikacji odby�o si� przy pomocy platformmy do automatyzacji test�w Leapwork.
![leapwork](screenshots/tests2.png)
