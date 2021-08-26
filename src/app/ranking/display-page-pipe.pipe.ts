import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayPagePipe'
})
export class DisplayPagePipePipe implements PipeTransform {

  transform(objects: any[], currentPage: number): any[] {
    var lowerLimit = 1 + ((currentPage-1) * 10);
    var upperLimit = currentPage * 10;
    if (objects != null) {
      if (currentPage != -1)
        return objects.filter(rec => (rec.rank >= lowerLimit && rec.rank <= upperLimit)).sort((x1, x2) => x1.rank - x2.rank);
      else
        return objects.sort((x1, x2) => x1.rank - x2.rank).slice(0, 10);
    }
    return null;
  }
}
