let names = [];

const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/";

async function onloadFunc(){
    let userResponse = await getAllUsers("namen");
    console.log(userResponse);

    await addEditSingleUser();
}

async function putData(path = "", data = {}){ 

}


async function addEditSingleUser(id=11, user={name: 'Tarik'}){
    putData(`namen/${id}`, user);
}
async function getAllUsers(path) {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json();
}

onloadFunc();

