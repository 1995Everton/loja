import { AbstractControl } from '@angular/forms';


export function number(control : AbstractControl) {

    if(!/^\s*(\S\s*){1,6}$/.test(control.value)) return { number: true }
    return null
}

export function cep(control : AbstractControl) {
    
  if(!/[0-9]{5}-[\d]{3}/g.test(control.value) && control.value == 0) return { cep: true }
  return null
}