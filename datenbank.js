let names = [];

const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/";

async function onloadFunc(){
    let userResponse = await getAllUsers("namen");
    let UserKeysArray = Object.keys(userResponse);

    await addEditSingleUser();

    console.log(UserKeysArray);
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

async function addEditSingleUser(id = 33, user = {name: 'Haci Yusuf', email: 'mustermann@gmail.com'}) {
    await putData(`namen/${id}`, user);
}

async function getAllUsers(path) {
    let response = await fetch(BASE_URL + path + ".json");
    return await response.json();
}

onloadFunc();
