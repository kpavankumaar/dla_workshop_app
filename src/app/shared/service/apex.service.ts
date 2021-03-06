import { MatSnackBar} from '@angular/material';
import {Injectable, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ApexService {

     sessionUserEvent: EventEmitter<any>  = new EventEmitter( );
     menuEvent:  EventEmitter<any>  = new EventEmitter( );
     loaderEvent: EventEmitter<any>  = new EventEmitter( );

    constructor(private _domSanitizer: DomSanitizer, private _snackBarService: MatSnackBar ){

    }
    showMessage(message: string){
        this._snackBarService.open(message, 'x',{ duration: 3000 });
    }
   sessionUserEmit (sessionUser: any) {
        this.sessionUserEvent.emit(sessionUser);
    }
    menuEmit(menu: any){
         this.menuEvent.emit(menu);
    }
    bypassURL(url: string){
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}