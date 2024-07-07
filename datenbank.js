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
    await addEditSingleUser(users[4].id, {name: 'Breitner'});   // direkte aktualisierung des Users, Namensänderung
    await addEditSingleUser(); // push new User

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

async function addEditSingleUser(id = 66, user = {name: 'Tülay', email: 'mustermann@gmail.com'}) {
    try {
        let response = await putData(`namen/${id}`, user);
        return response;
    } catch (error) {
        console.error("Error in addEditSingleUser:", error);
        return null;
    }
}



async function getAllUsers(path) {
    try {
        let response = await fetch(BASE_URL + path + ".json");
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Resource not found: " + response.statusText);
            } else {
                throw new Error("Network response was not ok: " + response.statusText);
            }
        }

        return await response.json();
    } catch (error) {
        console.error("Error in getAllUsers:", error);
        return null;
    }
}

onloadFunc();
