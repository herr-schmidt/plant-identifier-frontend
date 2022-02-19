import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classification } from 'src/model/model';

@Injectable()
export class IdentificationService {
    constructor(private http: HttpClient) { }

    public identifyPlant(plantImage: File) {
        const url = "http://localhost:8080/identify"
        return this.http.post<Classification>(url, plantImage);
    }
}