let names = []
const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/";

async function onload() {

    let userResponse = await getAllUsers ("namen");
    let UserKeysArray = Object.keys(userResponse);

    for (let index = 0; index < UserKeysArray.length; index++) {
        names
    }

    console.log(UserKeysArray);
    await addEditSingleUser()
}


