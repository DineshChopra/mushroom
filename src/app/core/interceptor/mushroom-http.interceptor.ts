import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nextContext } from '@angular/core/src/render3';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
    'providedIn': 'root'
})
export class MushroomHttpInterceptor implements HttpInterceptor {

    private readonly apiBaseUrl = environment.apiBaseUrl;  // URL to web api
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('request : ', req);
        const method = req.method;
        let localHeaders = null;
        if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
            localHeaders = headers;
        }
        const request = req.clone({
            url: this.apiBaseUrl + req.url,
            headers: localHeaders
        });
        return next.handle(request);
    }
}
