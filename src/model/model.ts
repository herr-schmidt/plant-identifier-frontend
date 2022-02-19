export interface Image {
    imageFile: File | null;
    imageURL: any;
}

export interface Classification {
    species: string,
    confidence: number
}