import { Image } from "src/model/model";

export module Utils {
    export function setImageUrl(image: Image) {
        if (!image.imageFile) {
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(image.imageFile);
        reader.onload = (_event) => {
            image.imageURL = reader.result;
        }
    }
}