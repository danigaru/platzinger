import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keys',
    pure: false
})

export class SearchPipe implements PipeTransform {

    transform( value: any ): any {

        const key$ = [];

        for ( const key in value ) {

            if ( key ) {

                key$.push( key );
            }
        }

        return key$;

    }
}




// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//     name: 'search'
// })

// export class SearchPipe implements PipeTransform {

//     public transform( value, args: string  ) {

//         if ( !value ) {
//             return;
//         } else {
//             if ( !args ) {
//                 return value;
//             } else {
//                 args = args.toLocaleLowerCase();
//                 return value.filter( ( item ) => {
//                     return JSON.stringify( item ).toLocaleLowerCase().includes(args);
//                 });
//             }
//         }
//     }
// }
