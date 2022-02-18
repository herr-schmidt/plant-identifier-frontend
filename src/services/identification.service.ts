import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IdentificationService {
    constructor(private http: HttpClient) { }

    public identifyPlant(plantId: number) {
        const url = "http://localhost:8080/identify";
        return this.http.get<string>(url);
    }
}