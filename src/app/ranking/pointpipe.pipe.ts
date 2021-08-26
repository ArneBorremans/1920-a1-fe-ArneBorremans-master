import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pointpipe'
})
export class PointpipePipe implements PipeTransform {

  transform(t: Number): string {
    var x = t.toString()
    if (x.length > 3) {
      var r = reverseString(x);
      var l = chunkString(r, 3);
      r = l.join('.');
      x = reverseString(r);
      return x;
    }
    else
      return x;
  }
}

function chunkString(str, length): string[] {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

function reverseString(str): string {
  var splitString = str.split(""); 
  var reverseArray = splitString.reverse(); 
  var joinArray = reverseArray.join(""); 

  return joinArray; 
}
