function print_hello_world() {
    for (var i = 0; i < 3; i++) {
      console.log("Hello, World!");
    }
  }
  
  function rectangle_perimeter(side1, side2) {
    var perimeter = 2 * (side1 + side2);
    return perimeter;
  }
  
  function circle_area(radius) {
    var PI = 3.14;
    var area = PI * Math.pow(radius, 2);
    return area;
  }
  
  function greet_person(name) {
    console.log("Hi, " + name + "!");
  }
  
  function ratio_of_numbers(num1, num2) {
    var ratio = num1 / num2;
    return ratio;
  }
  
  function sum_of_squares(num1, num2) {
    var sum = Math.pow(num1, 2) + Math.pow(num2, 2);
    return sum;
  }
  
  function product_of_numbers(num1, num2, num3) {
    var product = num1 * num2 * num3;
    return product;
  }
  
  function dollars_to_tenge(dollars) {
    var exchange_rate = 445; 
    var tenge = dollars * exchange_rate;
    return tenge;
  }
  
  function is_positive_or_negative(number) {
    if (number > 0) {
      console.log(number + " is positive");
    } else if (number < 0) {
      console.log(number + " is negative");
    } else {
      console.log(number + " is neither positive nor negative");
    }
  }
  
  function are_numbers_equal(num1, num2) {
    if (num1 === num2) {
      console.log(num1 + " and " + num2 + " are equal");
    } else {
      console.log(num1 + " and " + num2 + " are not equal");
    }
  }
  
  function is_number_even_or_odd(number) {
    if (number % 2 === 0) {
      console.log(number + " is even");
    } else {
      console.log(number + " is odd");
    }
  }
  
  function is_number_between_0_and_1(number) {
    if (number >= 0 && number <= 1) {
      console.log(number + " is between 0 and 1");
    } else {
      console.log(number + " is not between 0 and 1");
    }
  }
  
  function greatest_of_two_numbers(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " is the greatest");
    } else if (num1 < num2) {
      console.log(num2 + " is the greatest");
    } else {
      console.log(num1 + " and " + num2 + " are equal");
    }
  }
  
  function greatest_of_three_numbers(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      console.log(num1 + " is the greatest");
    } else if (num2 > num1 && num2 > num3) {
      console.log(num2 + " is the greatest");
    } else if (num3 > num1 && num3 > num2) {
      console.log(num3 + " is the greatest");
    } else {
      console.log(num1 + ", " + num2 + ", and " + num3 + " are equal");
    }
  }

  function day_of_week(day) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day >= 1 && day <= 7) {
      return days[day-1];
    } else {
      return "There is no such day number. It should be between 1 and 7.";
    }
  }


print_hello_world();
console.log(rectangle_perimeter(7, 6));
console.log(circle_area(8));
greet_person("Kassym");
console.log(ratio_of_numbers(7, 2));
console.log(sum_of_squares(7, 8));
console.log(product_of_numbers(7, 2, 9));
console.log(dollars_to_tenge(200));
is_positive_or_negative(-5);
are_numbers_equal(9, 9);
is_number_even_or_odd(87);
is_number_between_0_and_1(0.33);
greatest_of_two_numbers(5, 9);
greatest_of_three_numbers(5, 8, 5);
console.log(day_of_week(7));
