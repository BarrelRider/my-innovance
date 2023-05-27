import axios, { AxiosResponse } from "axios";
import { Character } from "../../constants/types/Character";

const API = "https://rickandmortyapi.com/api";

export const getCharacterById = (id: number | string) => {
    return new Promise<Character>((resolve, reject) => {
        const requestURL = `${API}/character/${id}`;
        axios.get(requestURL)
            .then((response: AxiosResponse<Character>) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error.response);
            })
    });
}

export const getTop10Characters = () => {
    return new Promise<Array<Character>>((resolve, reject) => {
        const requestURL = `${API}/character/1,2,3,4,5,6,7,8,9,10`;
        axios.get(requestURL)
            .then((response: AxiosResponse<Array<Character>>) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error.response);
            })
    });
}
