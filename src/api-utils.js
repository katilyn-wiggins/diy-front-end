import request from 'superagent';

const URL = 'https://tranquil-reaches-22835.herokuapp.com'
export async function getJewelry () {
    //desctructuring using the curly brackets to stand for an object, you can "suck" properties out of the object, like body
    const response = await request.get(`${URL}/jewelry`);

    return response.body;
}

export async function getKinds () {
    const response = await request.get(`${URL}/kinds`);

    return response.body;

}

export async function getJewel (id) {
    const response = await request.get(`${URL}/jewelry/${id}`);

    return response.body;

}

export async function makeJewel (aPieceOfJewelry) {
    const response = await request.post(`${URL}/jewelry`)
        .send(aPieceOfJewelry);

    return response.body;
}

export async function deleteJewel (id) {
    const response = await request.delete(`${URL}/jewelry/${id}`);

    return response.body;
}

export async function updateJewel (id, aPieceOfJewelry) {
    const response = await request.put(`${URL}/jewelry/${id}`)
        .send(aPieceOfJewelry);

    return response.body;
} 
