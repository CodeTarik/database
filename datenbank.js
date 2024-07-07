let users = [];

const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/";

async function onloadFunc(){
    let userResponse = await getAllUsers("namen");
    let UserKeysArray = Object.keys(userResponse);

    for (let i = 0; i < UserKeysArray.length; i++) {
        users.push(
            {
                id: UserKeysArray[i],
                user: userResponse[UserKeysArray[i]].name,
                email: userResponse[UserKeysArray[i]].email
            }
        )
    }
    await addEditSingleUser(users[2].id, {name: 'Maradona'});   // direkte aktualisierung des Users, Namensänderung

    console.log(users);
}

async function putData(path = "", data = {}){ 
    try {
        let response = await fetch(BASE_URL + path + ".json", {
            method: "PUT", // Methode auf PUT setzen
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) // Daten in JSON-String umwandeln
        });

        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.statusText);
        }

        let responseData = await response.json();
        console.log("Data successfully uploaded:", responseData);
        return responseData;
        } catch (error) {
        console.error("Error in putData:", error);
        return null;
    }
}

async function addEditSingleUser(id = 44, user = {name: 'Tülay', email: 'mustermann@gmail.com'}) {
    await putData(`namen/${id}`, user);
}

async function getAllUsers(path) {
    let response = await fetch(BASE_URL + path + ".json");
    return await response.json();
}

onloadFunc();
