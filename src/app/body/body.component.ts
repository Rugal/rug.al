import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-json';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  readonly headerHeight: number = environment.headerHeight;

  constructor() { }

  ngOnInit() { }

  private data = `{
  "first name": "Rugal",
  "last name": "Bernstein",
  "degree": "Master degree of Science",
  "contact": {
    "qq": "359788955",
    "github": "Rugal",
    "stackOverflow": "Rugal",
    "twitter": "@ryujinwrath",
    "linkedIn": "Yunheng Yao",
    "facebook": "Rugal Bernstein"
  },
  "language": {
    "nature language": [
      "Chinese",
      "English",
      "Italiano"
    ],
    "programming language": [
      "Java",
      "C",
      "Bash",
      "Python",
      "Clojure"
    ],
    "markup language": [
      "Latex",
      "Markdown",
      "HTML"
    ]
  },
  "interests": [
    "AI"
  ],
  "blog": "https://rug.al",
  "editor": "Vim",
  "ide": "Netbeans",
  "font": "Monaco",
  "motto": "Never yield to destiny!"
}`;

  private content = Prism.highlight(this.data, Prism.languages.json, 'json');
}
