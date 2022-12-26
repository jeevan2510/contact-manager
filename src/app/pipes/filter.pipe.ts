import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';
import { ContactManagerComponent } from '../contact-manager/contact-manager.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts: any[], searchKey: string, propName: string): any[] {
    const result: any = []
    if (!allContacts || searchKey == '' || propName == '') {
      return allContacts
    }
    allContacts.forEach((Contact: any) => {
      if (Contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())) {
        result.push(Contact)
      }
    })
    return result;
  }

}
