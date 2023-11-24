import bowserImage from './bowser.png';
import yubabaImage from './yubaba.png';
import knightImage from './the-knight.png';
import { characterCoordinates } from './characterCoordinates.js';

export const charactersA = {
    bowser: {
        name: 'Bowser',
        image: bowserImage,
        clicked: false,
        coordinatesList: characterCoordinates.bowserCoordinates,
        difficulty: 'easy'
    },
    yubaba: {
        name: 'Yubaba',
        image: yubabaImage,
        clicked: false,
        coordinatesList: characterCoordinates.yubabaCoordinates,
        difficulty: 'medium'
    },
    knight: {
        name: 'The Knight',
        image: knightImage,
        clicked: false,
        coordinatesList: characterCoordinates.knightCoordinates,
        difficulty: 'hard'
    }
}


export const bowser = {
    name: 'Bowser',
    image: bowserImage,
    clicked: false,
    coordinatesList: characterCoordinates.bowserCoordinates,
    difficulty: 'easy'
}

export const yubaba = {
    name: 'Yubaba',
    image: yubabaImage,
    clicked: false,
    coordinatesList: characterCoordinates.yubabaCoordinates,
    difficulty: 'medium'
}

export const knight = {
    name: 'The Knight',
    image: knightImage,
    clicked: false,
    coordinatesList: characterCoordinates.knightCoordinates,
    difficulty: 'hard'
}