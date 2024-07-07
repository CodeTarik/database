// Initialisiert ein leeres Array 'names', das später verwendet werden kann, um Benutzernamen zu speichern.
let names = []

// Definiert die Basis-URL für die Firebase-Realtime-Datenbank.
const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/";

// Definiert eine asynchrone Funktion 'onload', die wahrscheinlich beim Laden der Seite aufgerufen wird.
async function onload() {

    // Ruft die Funktion 'getAllUsers' mit dem Argument 'namen' auf und wartet auf das Ergebnis.
    // 'getAllUsers' ist wahrscheinlich eine Funktion, die alle Benutzerinformationen aus der Datenbank abruft.
    let userResponse = await getAllUsers("namen");

    // Extrahiert alle Schlüssel (Property-Namen) aus dem 'userResponse'-Objekt in ein Array 'UserKeysArray'.
    // Diese Schlüssel könnten Benutzernamen oder eindeutige Benutzer-IDs sein.
    let UserKeysArray = Object.keys(userResponse);

    // Iteriert über jedes Element im 'UserKeysArray'-Array. Der aktuelle Index wird in der Variablen 'index' gespeichert.
    for (let index = 0; index < UserKeysArray.length; index++) {
        // Der Code hier ist unvollständig. Wahrscheinlich sollte hier eine Operation stattfinden,
        // die das 'names'-Array verwendet oder ändert. Zum Beispiel:
        // names.push(UserKeysArray[index]);
        names
    }

    // Gibt das 'UserKeysArray' in der Konsole aus. Dies ist nützlich zum Debuggen, um sicherzustellen,
    // dass die Benutzerschlüssel korrekt abgerufen wurden.
    console.log(UserKeysArray);

    // Ruft die Funktion 'addEditSingleUser' auf und wartet auf deren Abschluss.
    // Diese Funktion könnte zum Hinzufügen oder Bearbeiten eines einzelnen Benutzers in der Datenbank verwendet werden.
    await addEditSingleUser()   // holt alle Usernamen aus der Datenbank
}




