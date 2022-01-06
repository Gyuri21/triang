import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triang';

  teruletVisible= false;

  triangForm !: FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.triangForm = this.formBuilder.group ({
      alap : [''],
      magassag : [''],
      terulet : ['']
    });
  }

  
  onClickSzamit(){
    let alap = Number(this.triangForm.value.alap);
    let magassag = Number(this.triangForm.value.magassag);
    let terulet = alap * magassag / 2;
    this.triangForm.patchValue({terulet: terulet});
    console.log(terulet);
    this.teruletVisible = true;
  }
}
