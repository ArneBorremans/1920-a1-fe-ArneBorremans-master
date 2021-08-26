import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(objects: any[], name: string): any[] {
    if (!name || name.length === 0) {
      return objects;
    }
    return objects.filter(rec =>
      rec.name.toLowerCase().includes(name.toLowerCase().trim())
    );
  }

}
