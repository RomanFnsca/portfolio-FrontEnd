import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";


//Este servicio se encarga de comprobar el estado del token 
@Injectable({
    providedIn : 'root'
})
export class InterceptorService {
    constructor(private tokenService:TokenService){}

    //Este metodo valida que el token sea valido
    intercept(request : HttpRequest<any>, nex: HttpHandler):Observable<HttpEvent<any>>{
        let intRequest = request;
        const token = this.tokenService.getToken();
        if(token!= null){
            intRequest = request.clone({
                headers: request.headers.set('Authorization','Bearer' + token)
            });
        }
        return nex.handle(intRequest);
    }
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];
