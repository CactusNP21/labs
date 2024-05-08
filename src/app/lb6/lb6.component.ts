import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lb6',
  standalone: true,
  imports: [],
  templateUrl: './lb6.component.html',
  styleUrl: './lb6.component.css'
})
export class Lb6Component implements OnInit {
  ngOnInit() {
    const body = document.getElementById('lb6')!
    const r = document.createElement('div');
    const container = document.createElement('p');
    r.style.height = "100px";
    body.appendChild(r);
    r.appendChild(container)

    function createButton(text: string, func: (this: HTMLButtonElement, ev: MouseEvent) => any) {
      let button = document.createElement("button");
      button.textContent = text;
      button.addEventListener("click", func);
      body.appendChild(button);
    }

    function addText(text: string): any {
      console.log('log')
      container.textContent += text
    }

    for (let i = 0; i <= 9; i++) {
      createButton(i.toString(), function () {
        addText(i.toString())
      })
    }
    createButton("+", function () {
      addText("+");
    })
    createButton("-", function () {
      addText("-");
    })
    createButton("*", function () {
      addText("*");
    })
    createButton("/", function () {
      addText("/");
    })
    createButton("=", function () {
      addText("=");
      const res = calculate(container.textContent!)
      container.textContent += res;
    })
    createButton("clear", function () {
      container.textContent = "";
    })
    function calculate(expression: string) {
      // Use regex to split the expression into numbers and operators
      const tokens = expression.match(/\d+|\+|\-|\*|\//g);

      // If the expression is invalid or empty, return NaN
      if (!tokens) {
        return NaN;
      }

      // Define precedence of operators
      const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
      };

      // Function to perform an operation
      function operate(operator: string, num1: number, num2: number) {
        switch (operator) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case '*':
            return num1 * num2;
          case '/':
            return num1 / num2;
          default:
            return NaN;
        }
      }

      const numberStack: any[] = [];
      const operatorStack: (string | number)[] = [];

      tokens.forEach(token => {
        if (!isNaN(parseFloat(token))) {
          numberStack.push(parseFloat(token));
        } else {

          while (
            operatorStack.length > 0 &&
            // @ts-ignore
            precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
            ) {
            const operator = operatorStack.pop();
            const num2 = numberStack.pop();
            const num1 = numberStack.pop();
            // @ts-ignore
            numberStack.push(operate(operator, num1, num2));
          }
          operatorStack.push(token);
        }
      });

      while (operatorStack.length > 0) {
        const operator = operatorStack.pop();
        const num2 = numberStack.pop();
        const num1 = numberStack.pop();
        // @ts-ignore
        numberStack.push(operate(operator, num1, num2));
      }

      return numberStack[0];
    }


  }


}
