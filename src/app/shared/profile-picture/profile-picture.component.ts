import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {}

  selectImage(event) {
    this.selectedFiles = event.target.files;
    const image = URL.createObjectURL(event.target.files[0])
    const imageTag = document.getElementById('profile') as HTMLImageElement
    if (imageTag !== null) {
      imageTag.src = image
    }
    
  }

  upload() {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.userService.uploadPicture(this.currentFile)
        .subscribe((res: any) => {
          console.log('res: ', res)
        });
      }
      this.selectedFiles = undefined;
    }
  }
}
