import { AbstractControl } from '@angular/forms';


export function number(control : AbstractControl) {

    if(!/^\s*(\S\s*){1,6}$/.test(control.value)) return { number: true }
    return null
}

export function cep(control : AbstractControl) {
    
  if(!/[0-9]{5}-[\d]{3}/g.test(control.value) && control.value == 0) return { cep: true }
  return null
}

export function cpf_cnpf(control : AbstractControl) {
  
  const value = (control.value || '') as string
  if(!/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/.test(value)) return { cpf_cnpf: true }
  return null
}