import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class TruncatePipe implements PipeTransform {
    transform(value, args) {
        let inicio = 0, fin = args;
        if (value) {
            return value.slice( inicio  , fin );
        } else {
            return [];
        }
        
    }
}

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(value, args) {
        const orden = value.sort(function (a, b) {
            if (a[args]  > b[args] ) {
              return 1;
            }
            if (a[args] < b[args]) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        return orden;
    }
}
