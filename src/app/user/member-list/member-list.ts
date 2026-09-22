import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-list',
  imports: [RouterLink],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList {

  constructor(private route:Router){}


  viewDetails(){

  }
}
