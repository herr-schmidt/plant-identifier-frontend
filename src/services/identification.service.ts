import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IdentificationService {
    constructor(private http: HttpClient) { }

    public identifyPlant(plantImage: File) {
        const url = "http://localhost:8080/identify"
        return this.http.post(url, plantImage, { responseType: "blob" });
    }
}