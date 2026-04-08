import { Card } from "react-bootstrap";

/**
 * Function: getImageUrl
 * Description: gets the image URL by concatenating "./images/" to the imageName parameter
 * @param {*} imageName 
 * @returns String ("./images/imageName")
 */
function getImageUrl(imageName){
    return ("./images/" + imageName);
}



export default {getImageUrl}