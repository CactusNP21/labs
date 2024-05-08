import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lb1',
  standalone: true,
  imports: [],
  templateUrl: './lb1.component.html',
  styleUrl: './lb1.component.css'
})
export class Lb1Component implements OnInit {
  ngOnInit() {
    this.func1();
    this.func2();
    this.func3();
    this.func4();
    this.func5();
    this.func6();

  }

  func6() {
    // Отримуємо число від користувача за допомогою prompt
    // @ts-ignore
    let number = parseInt(prompt("Введіть число від 1 до 7:"));

// Перевіряємо, чи введене число знаходиться у діапазоні від 1 до 7 та чи є це число
    if (number >= 1 && number <= 7 && !isNaN(number)) {
      // Масив з назвами днів тижня
      const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

      // Виводимо відповідний день тижня за введеним числом
      alert(`День тижня за введеним числом: ${daysOfWeek[number - 1]}`);
    } else {
      // Якщо введене число не входить у діапазон або не є числом, виводимо повідомлення про помилку
      alert("Введено неправильне число. Будь ласка, введіть число від 1 до 7.");
    }

  }

  func5() {
    // Отримуємо температуру в градусах Цельсія від користувача за допомогою prompt
    // @ts-ignore
    let temperatureCelsius = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));

// Розрахунок температури в градусах Фаренгейта за формулою
    let temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;

// Повідомлення з результатом
    let message = `Температура в градусах Фаренгейта: ${temperatureFahrenheit} °F`;

// Виводимо результат у вигляді модального вікна alert
    alert(message);

  }

  func4() {
    // Отримуємо число з діапазону від 1 до 12 з використанням prompt
    // @ts-ignore
    let month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));

// Змінна для зберігання назви пори року
    let season;

// Визначаємо пору року за номером місяця
    switch (Math.ceil(month / 3)) {
      case 1:
        season = "зима";
        break;
      case 2:
        season = "весна";
        break;
      case 3:
        season = "літо";
        break;
      case 4:
        season = "осінь";
        break;
      default:
        season = "невідома пора року";
    }

// Масив назв місяців
    const monthsNames = [
      "січня", "лютого", "березня", "квітня",
      "травня", "червня", "липня", "серпня",
      "вересня", "жовтня", "листопада", "грудня"
    ];

// Визначаємо назву місяця
    let monthName = monthsNames[month - 1];

// Повідомлення з результатом
    let message = `Місяць ${monthName} належить до пори року ${season}.`;

// Виводимо результат у вигляді модального вікна alert
    alert(message);
  }

  func3() {
    let numb = 10000;
    let counter = 0;

    while (numb >= 50) {
      numb /= 2;
      counter++;
    }

    let result = numb;

    console.log("Результат:", result);
    console.log("Кількість ітерацій:", counter);
  }

  func2() {
    let number = 0;

    do {
      if (number === 0) {
        console.log(`${number} - це нуль`);
      } else if (number % 2 === 0) {
        console.log(`${number} - парне число`);
      } else {
        console.log(`${number} - непарне число`);
      }

      number++;
    } while (number <= 10);
  }

  func1() {
    let number = 2;

    while (number <= 100) {
      let isPrime = true;
      let divisor = 2;

      while (divisor <= Math.sqrt(number)) {
        if (number % divisor === 0) {
          isPrime = false;
          break;
        }
        divisor++;
      }

      if (isPrime) {
        console.log(number);
      }

      number++;
    }
  }
}
