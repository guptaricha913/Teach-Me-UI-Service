import { Component, OnInit } from "@angular/core";
import { SubjectService } from "src/app/Services/subject.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-subject",
  templateUrl: "./create-subject.component.html",
  styleUrls: ["./create-subject.component.scss"]
})
export class CreateSubjectComponent implements OnInit {
  showErrorMessage = false;
  errorMessage = "This Subject already exists";
  subject = "";
  submitForm() {
    if (this.subject !== "") {
      console.log(this.subject);

      this.subjectService.createSubject(this.subject).subscribe(response => {
        if (response === null) this.showErrorMessage = true;
        else this.router.navigateByUrl("/tutor");
      });
    }
  }

  constructor(private subjectService: SubjectService, private router: Router) {}

  ngOnInit(): void {}
}
