import { Component } from '@angular/core';

@Component({
  selector: 'testform',
  templateUrl: './testform.component.html'
})
export class TestForm {
  onFormSubmit(userForm) {
    console.log(userForm.value);
    console.log('Name:' + userForm.controls['name'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);
}
resetUserForm(userForm) {
    userForm.resetForm({
      name: '',
      city: ''
   });
}
}
