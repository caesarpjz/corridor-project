import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-info-page',
  templateUrl: './basic-info-page.component.html',
  styleUrls: ['./basic-info-page.component.css']
})
export class BasicInfoPageComponent implements OnInit {
  collapsed = false;
  signupBasicInfoForm: FormGroup;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.signupBasicInfoForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      serviceCategory: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      tags: new FormControl('')
    });
  }

  signupNext() {
    const data = {
      name: this.signupBasicInfoForm.get('name').value,
      address: this.signupBasicInfoForm.get('address').value,
      postalCode: this.signupBasicInfoForm.get('postalCode').value,
      serviceCategory: this.signupBasicInfoForm.get('serviceCategory').value,
      description: this.signupBasicInfoForm.get('description').value,
      tags: this.signupBasicInfoForm.get('tags').value
    };
    this.dataService.serviceProviderSignupData.name = this.signupBasicInfoForm.get('name').value;
    this.dataService.serviceProviderSignupData.address = this.signupBasicInfoForm.get('address').value;
    this.dataService.serviceProviderSignupData.postalCode = this.signupBasicInfoForm.get('postalCode').value;
    this.dataService.serviceProviderSignupData.serviceCategory = this.signupBasicInfoForm.get('serviceCategory').value;
    this.dataService.serviceProviderSignupData.description = this.signupBasicInfoForm.get('description').value;
    this.dataService.serviceProviderSignupData.tags = this.signupBasicInfoForm.get('tags').value;

    this.router.navigateByUrl('/sign-up-photo');
  }
}
