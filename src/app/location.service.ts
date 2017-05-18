import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Subject} from "rxjs/Subject";
import 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import {CompleterData, CompleterItem} from "ng2-completer";

@Injectable()
export class LocationService extends Subject<CompleterItem[]> implements CompleterData  {

 productType:string;
  constructor(private http: Http) {super()}
   public search(searchTerm: string): void {
        this.http.get("https://h1917qkv5i.execute-api.us-east-1.amazonaws.com/prd/locations?q="+encodeURI(searchTerm)+"&productType=" + this.productType)
            .map((res: Response) => {
                let data = res.json();                
                let matches: CompleterItem[] = data.locations.map((result: any) => {
                    return {
                        title: result.description,
                        originalObject: result
                    }
                });
                this.next(matches);
            })
            .subscribe();
    }

    public cancel() {
    }
}
