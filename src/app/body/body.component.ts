import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  readonly headerHeight: number = environment.headerHeight;

  constructor() { }

  ngOnInit() {
  }

  language='javascript';

  content = `{
    "Author" :
    {
        "First name": "Rugal",
        "Family name": "Bernstein",
        "Location":"Windsor, Ontario, Canada",
        "Degree":"Master degree of Science",
        "Major":"Applied Computing",
        "University":"University of Windsor",
        "QQ" : "359788955",
        "Github" : "Rugal",
        "StackOverflow" : "Rugal",
        "Twitter" : "@ryujinwrath",
        "LinkedIn" : "Yunheng Yao",
        "Facebook" : "Rugal Bernstein",
        "Gmail" : "ryujinwrath",
        "Nature language":["Chinese","English","Italiano"],
        "Programming language":["Java","C","Bash","Clojure","Matlab"],
        "Markup language":["Latex","Markdown","HTML"],
    },
    "Recent plan":"Gracker",
    "Blog": "https://rug.al",
    "Editor": "Vim",
    "IDE": "Netbeans",
    "Font": "HeyMono(Monaco)",
    "Community":["PostgreSQL","Hadoop"],
    "Interests":["Database System","Artificial Intelligence"],
    "Certificate":"Oracle Certified Professional 12C",
    "Expert":["Java","C","Linux","Oracle","Bash","Mysql"],
    "Familiar":["Hadoop","PostgreSQL","Clojure","Matlab","Latex"],
    "Learning":["Artificial Intellegence","Machine Learning"],
    "Motto":"Never yield to destiny!"
}`
}
