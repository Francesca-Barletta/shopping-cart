## MILESTONE 1

Analizziamo il layout e cerchiamo di individurare delle variabili che potrebbero esserci utili per lo sviluppo del progetto: colori, spazi, bordi, larghezze, etc. Impostiamo quindi delle custom properties da sfruttare nel CSS.

## Milestone 2

Impostiamo il macro layout. Facciamo in modo che vengano affiancati i due box con la giusta proporzione nella larghezza e con la giusta centratura rispetto alla viewport.

## Milestone 3

Osservando il layout ragioniamo su come impostare i nostri dati per mostrarli all’utente. Proviamo a creare un oggetto che rappresenti uno dei prodotti in tabella: di quali proprietà abbiamo bisogno? che tipo di dato sono? Con quale struttura gestiamo la lista di prodotti? N.B. nello scaffolding abbiamo già gli asset di riferimento (le immagini).

## Milestone 4

Impostiamo gli header (titoli e linea di separazione) delle due sezioni. In particolare:
il numero di items mostrati nella sezione di sinistra deve essere dinamico (se sto gestendo 10 prodotti deve apparire la scritta “10 items”)

## Milestone 5
Impostiamo l’HTML e il CSS della tabella dei prodotti. Creiamo l’intestazione della tabella e una riga di esempio, stampando un’immagine e dei dati statici. Lasciamo vuota per ora la colonna QUANTITY.

## Milestone 6
Lavoriamo alla colonna QUANTITY. Facciamo in modo che nella colonna sia presente un input numerico disabilitato, con a fianco i pulsanti - e + per incrementare la quantità del prodotto. Per ora ignoriamo la parte JS.

## Milestone 7
Iniziamo a rendere le cose dinamiche. Creiamo una funzione render e al suo interno scriviamo il codice necessario per far sì che appaia una riga nella tabella per ogni prodotto. Manteniamo ancora i dati statici, assicuriamoci solo che se abbiamo 5 prodotti appaiono 5 righe nella tabella, tutte uguali.

## Milestone 8
Sostituiamo ai dati statici i dati dei prodotti:
immagine corretta
quantità corretta nell’input
prezzo
totale (come lo calcoliamo?)

## Milestone 9
Aggiungiamo due listener ai pulsanti + e -. Facciamo in modo che al click venga stampato (in console) il nome del prodotto della riga su cui abbiamo cliccato.

## Milestone 10
Al click sul pulsante + deve essere incrementata la quantità del prodotto e che questa venga aggiornata correttamente in pagina.

## Milestone 11
Al click sul pulsante - deve essere decrementata la quantità del prodotto e che questa venga aggiornata correttamente in pagina. La quantità non può andare al di sotto dell’1.

## Milestone 12
Al click sulla scritta “Remove” sotto il nome del prodotto, quest’ultimo viene eliminato definitivamente dalla lista (deve scomparire anche la riga della tabella). Alla rimozione di un prodotto dalla lista deve aggiornarsi anche il titolo in alto (ad es. “4 items” diventa “3 items”).

## Milestone 13
Lavoriamo al layout del box di destra. Inseriamo dati statici e definiamo lo stile del testo e lo spazio tra gli elementi. Le select possiamo lasciarle vuote, per ora. Per i pulsanti notiamo che parte dello stile è in comune.

## Milestone 14
La scritta “Items - 4 ….. 31 €” deve diventare dinamica, sia nel numero di items complessivi sia nel totale che viene mostrato. Il totale è parziale, è dato solo dalla somma dei prezzi dei prodotti per la loro quantità.

## Milestone 15
Nella select relativa allo SHIPPING inseriamo due opzioni:
Standard Delivery - 5 €
Fast Delivery - 15 €
Ragioniamo quindi su come gestire il costo della spedizione, che andrà ad aggiungersi al totale del carrello.

## Milestone 16
Nell’input relativo al PROMO CODE facciamo in modo che, inserendo “FABIO10” e cliccando su APPLY venga applicato uno sconto del 10% sul totale del carrello (costi di spedizione compresi).

## Milestone 17
La scritta che mostra il totale diventa dinamica. Il totale è dato dal totale dei prodotti, i costi di spedizione ed eventuale sconto applicato.

## Milestone 18
Formattiamo tutti i prezzi presenti nel layout sfruttando il metodo NumberFormat di Intl. Assicuriamoci così che il dato venga gestito come una valuta. Creiamo quindi un metodo formatCurrency e sfruttiamolo dove serve.

## Milestone 19
Funziona tutto? C’è qualcosa che possiamo migliorare?


