import { Component, OnInit } from '@angular/core';
import {
  animate,
  trigger,
  state,
  style,
  transition,
  keyframes
} from "@angular/animations";
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  animations: [
    trigger("ballonEffect", [
      state(
        "initial",
        style({
          backgroundColor: "green",
          transform: "scale(1)"
        })
      ),
      state(
        "final",
        style({
          backgroundColor: "red",
          transform: "scale(1.5)"
        })
      ),
      transition("final=> initial", animate("1000ms")),
      transition("initial=> final", animate("1500ms"))
    ]),
    trigger("goals", [
      state("in", style({ transform: "translateX(0)" })),
      transition("void => *", [
        animate(
          ".6s ease-in",
          keyframes([
            style({ opacity: 0, transform: "translateY(-75%)", offset: 0 }),
            style({ opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }),
            style({ opacity: 1, transform: "translateY(0)", offset: 1 })
          ])
        )
      ]),
      transition("* => void", [
        animate(
          ".6s ease-in",
          keyframes([
            style({ opacity: 1, transform: "translateY(0)", offset: 0 }),
            style({ opacity: 0.5, transform: "translateY(35px)", offset: 0.3 }),
            style({ opacity: 0, transform: "translateY(-75%)", offset: 1 })
          ])
        )
      ])
    ]),
    trigger("todoList", [
      state("in", style({ transform: "translateX(0)" })),
      transition("void => *", [
        style({ transform: "translateX(-100%)" }),
        animate(1000)
      ]),
      transition("* => void", [
        animate(1000, style({ transform: "translateX(100%)" }))
      ])
    ])
  ]
})
export class BasicComponent implements OnInit {

  currentState = "final";
  changeState() {
    this.currentState = this.currentState === "final" ? "initial" : "final";
  }

  categories;
  categoryData;

  ngOnInit() {
    this.categoryData = [
      {
        id: 12,
        parent_id: null,
        title: "develop"
      },
      {
        id: 13,
        parent_id: null,
        title: "bussiness"
      },
      {
        id: 14,
        parent_id: 12,
        title: "web"
      },
      {
        id: 16,
        parent_id: 14,
        title: "php"
      },
      {
        id: 17,
        parent_id: 14,
        title: "asp"
      },
      {
        id: 18,
        parent_id: 12,
        title: "android"
      },
      {
        id: 19,
        parent_id: 18,
        title: "java"
      },
      {
        id: 20,
        parent_id: 13,
        title: "speach"
      },
      {
        id: 21,
        parent_id: 20,
        title: "full"
      },
      {
        id: 22,
        parent_id: 20,
        title: "mini"
      },
      {
        id: 23,
        parent_id: 13,
        title: "no speach"
      },
      {
        id: 24,
        parent_id: 14,
        title: "html"
      },
      {
        id: 25,
        parent_id: 23,
        title: "nospech2"
      }
    ];

    this.categories = this.categoryData
      .filter(c => c.parent_id === null)
      .map(
        title =>
          <{ title: string; sub: any; subsub: object[] }>{
            title: title.title,
            sub: this.categoryData
              .filter(sc => sc.parent_id === title.id)
              .map(
                sc =>
                  <{ title: string; sub: any }>{
                    title: sc.title,
                    sub: this.categoryData
                      .filter(
                        c => c.parent_id !== null && sc.id === c.parent_id
                      )
                      .map(
                        ss =>
                          <{ secondSub: object[] }>{
                            secondSub: ss.title,
                            isVisible: false
                          }
                      )
                  }
              )
          }
      );

    this.itemCount = this.goals.length;
  }

  hover(category) {
    this.categories.forEach(ct1 => {
      ct1.sub.forEach(ct11 => {
        ct11.isVisible = false;
        ct11.sub.forEach(ct111 => {
          ct111.isVisible = false;
        });
      });
    });
    category.sub.forEach(ct => {
      ct.isVisible = true;
    });
  }

  hoversc(category) {
    this.categories.forEach(ct1 => {
      ct1.sub.forEach(ct11 => {
        ct11.sub.forEach(ct111 => {
          ct111.isVisible = false;
        });
      });
    });
    category.forEach(ct => {
      ct.isVisible = true;
    });
  }

  restore() {
    this.categories.forEach(cat => {
      cat.sub.forEach(sub => {
        sub.isVisible = false;
      });
    });
  }

  itemCount: number;
  btnText: string = "Add an item";
  goalText: string = "my first life goal";
  goals = ["my first goal", "i wnat be the world", "buy new car"];

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = "";
    this.itemCount = this.goals.length;
  }

  removeItem(i) {
    this.goals.splice(i, 1);
  }

}
