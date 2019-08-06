import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  username = 'glf30';
  private repos: any = [];

  repoUrl = `https://api.github.com/users/${this.username}/repos`;
  //data: any = {};

  constructor(http: HttpClient){
     http.get(this.repoUrl)
    .subscribe(data =>  this.repos = data );

  }


//   getGitData(){
//     return this.http.get(this.repoUrl)
//     .subscribe(data =>  this.repos.push(data) );
   
//  }

 
  ngOnInit() {
  }

}



interface RepoResponse {
  name: string;
  description: string;  
  language: string;
}