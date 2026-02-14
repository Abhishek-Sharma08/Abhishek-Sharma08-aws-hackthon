const lessons = [
  {
    lessonNumber: 1,
    title: "Hello Java",
    goal: "Print a simple message using System.out.println",
    concept:
      "In Java, System.out.println is used to display output on the screen. It prints the given text and then moves to a new line.\n\nExample:\nSystem.out.println(\"Hello Java\");\n\nSolution:\nHello Java",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n        // TODO: Print \"Hello Java\" to the console\n    }\n}",
    expectedOutput: "Hello Java",
    commonMistakes: [
      "Forgetting double quotes around text",
      "Using print instead of println",
      "Misspelling System.out.println",
      "Missing semicolon"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 2,
    title: "Printing Variables",
    goal: "Declare variables and print them using System.out.println",
    concept:
      "Variables store data that can be used later in a program. In Java, each variable has a specific data type that defines what kind of value it can hold.\n\nCommon data types:\n- String → stores text\n- int → stores whole numbers\n- double → stores decimal numbers\n- boolean → stores true or false values\n\nVariables are declared using the data type followed by the variable name, and they must be initialized before use.\n\nExample:\nString name = \"John\";\nint age = 21;\ndouble gpa = 3.5;\nboolean isStudent = true;\n\nSystem.out.println(\"Hello \" + name);\nSystem.out.println(\"You are \" + age + \" years old\");\nSystem.out.println(\"Your gpa is: \" + gpa);\n\nSolution:\nHello John\nYou are 21 years old\nYour gpa is: 3.5",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n        // TODO: Declare a String variable named name and assign \"John\"\n\n        // TODO: Declare an int variable named age and assign 21\n\n        // TODO: Declare a double variable named gpa and assign 3.5\n\n        // TODO: Declare a boolean variable named isStudent and assign true\n\n        // TODO: Print all variables in the given format\n    }\n}",
    expectedOutput:
      "Hello John\nYou are 21 years old\nYour gpa is: 3.5\nYou are enrolled in classes",
    commonMistakes: [
      "Forgetting to initialize variables",
      "Using incorrect data types",
      "Missing semicolons",
      "Incorrect output format"
    ],
    difficulty: "easy"
  }
  ,
  {
    lessonNumber: 3,
    title: "Mad Libs with Strings",
    goal: "Combine multiple String variables to create a dynamic story",
    concept:
      "Strings can be combined using the + operator in Java. By storing words in variables and joining them together, we can generate fun and dynamic sentences like a Mad Libs game.\n\nExample:\nString adjective = \"happy\";\nString noun = \"cat\";\nSystem.out.println(\"The \" + noun + \" is \" + adjective);\n\nSolution:\nThe cat is happy",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n        // TODO: Declare a String variable adjective and assign \"funny\"\n\n        // TODO: Declare a String variable noun and assign \"dog\"\n\n        // TODO: Declare a String variable verb and assign \"running\"\n\n        // TODO: Declare a String variable feeling and assign \"excited\"\n\n        // TODO: Print the Mad Libs story exactly as shown in expected output\n    }\n}",
    expectedOutput:
      "Today I went to a funny zoo.\nIn an exhibit, I saw a dog.\ndog was playful and running!\nI was excited!",
    commonMistakes: [
      "Forgetting double quotes around strings",
      "Incorrect string concatenation",
      "Missing spaces or punctuation",
      "Output format does not match expected output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 4,
    title: "Arithmetic Operators",
    goal: "Use arithmetic operators to perform basic calculations in Java",
    concept:
      "Arithmetic operators are used to perform mathematical calculations in Java. These operators work with numeric data types such as int and double.\n\nCommon arithmetic operators:\n- +  (Addition): Adds two values\n- -  (Subtraction): Subtracts one value from another\n- *  (Multiplication): Multiplies two values\n- /  (Division): Divides one value by another\n- %  (Modulus): Returns the remainder after division\n\nExample:\nint x = 10;\nint y = 2;\n\nSystem.out.println(x + y); // 12\nSystem.out.println(x - y); // 8\nSystem.out.println(x * y); // 20\nSystem.out.println(x / y); // 5\nSystem.out.println(x % y); // 0\n\nSolution:\n12\n8\n20\n5\n0",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // Arithmetic Operators\n\n        int x = 10;\n        int y = 2;\n        int z;\n\n        // TODO: Use the modulus operator (%) with x and y\n        // TODO: Store the result in z\n        // TODO: Print z\n\n    }\n}",
    expectedOutput: "0",
    commonMistakes: [
      "Using division (/) instead of modulus (%)",
      "Forgetting to assign a value to z",
      "Printing the wrong variable",
      "Missing semicolon"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 5,
    title: "Arithmetic Operators",
    goal: "Practice arithmetic operators using fixed values",
    concept:
      "Arithmetic operators are used to perform mathematical calculations in Java. When both operands are integers, Java performs integer arithmetic.\n\nImportant rule:\nWhen dividing two integers, Java removes the decimal part and keeps only the whole number. This is called integer division.\n\nCommon arithmetic operators:\n- +  Addition\n- -  Subtraction\n- *  Multiplication\n- /  Division\n- %  Modulus (remainder)\n\nExample:\nint a = 20;\nint b = 6;\nSystem.out.println(a / b);\n\nExplanation:\n20 divided by 6 is 3.33, but Java keeps only 3.\n\nSolution:\n3",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // Arithmetic Operators\n\n        int a = 20;\n        int b = 6;\n        int result;\n\n        // TODO: Divide a by b\n        // TODO: Store the result in result\n        // TODO: Print result\n\n    }\n}",
    expectedOutput: "3",
    commonMistakes: [
      "Expecting a decimal result from integer division",
      "Forgetting to assign the result",
      "Using the wrong operator",
      "Printing the wrong variable"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 6,
    title: "Conditional Statements (if / else)",
    goal: "Use if, else if, and else statements to make decisions in Java",
    concept:
      "Conditional statements allow a program to make decisions based on conditions that evaluate to true or false.\n\nIn Java:\n- if runs when a condition is true\n- else if checks another condition if the previous one was false\n- else runs when none of the conditions are true\n\nCommon comparison operators:\n- ==  equal to\n- !=  not equal to\n- >   greater than\n- <   less than\n- >=  greater than or equal to\n- <=  less than or equal to\n\nExample:\nint age = 20;\n\nif (age < 18) {\n    System.out.println(\"Minor\");\n} else {\n    System.out.println(\"Adult\");\n}\n\nSolution:\nAdult",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        String name = \"Alex\";\n        int age = 25;\n        boolean isStudent = true;\n\n        // TODO: Print greeting using name\n\n        // TODO: Use if-else to check if age is 18 or above\n\n        // TODO: Use if-else to check if the person is a student\n\n    }\n}",
    expectedOutput:
      "Hello Alex!\nYou are an adult!\nYou are a student!",
    commonMistakes: [
      "Using = instead of == in conditions",
      "Incorrect condition logic",
      "Forgetting curly braces",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 7,
    title: "Random Numbers and Booleans",
    goal: "Understand how random numbers and boolean values are used in Java",
    concept:
      "The Random class in Java is used to generate pseudo-random values. Methods like nextInt() generate numbers, while boolean values are often used to represent two possible states such as true or false.\n\nIn learning examples, fixed values are sometimes used instead of real randomness to make program output predictable.\n\nExample:\nint number = 4;\nboolean isHeads = true;\n\nSystem.out.println(number);\nSystem.out.println(isHeads ? \"HEADS\" : \"TAILS\");\n\nSolution:\n4\nHEADS",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        int number = 4;      // between 1 and 6\n        boolean isHeads = true;\n\n        // TODO: Print the number\n\n        // TODO: If isHeads is true, print HEADS, otherwise print TAILS\n\n    }\n}",
    expectedOutput:
      "4\nHEADS",
    commonMistakes: [
      "Using assignment (=) instead of comparison (==)",
      "Forgetting else condition",
      "Incorrect output spelling",
      "Not matching output format exactly"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 8,
    title: "Math Class Operations",
    goal: "Use the Math class to perform basic mathematical calculations in Java",
    concept:
      "The Math class in Java provides static methods for performing common mathematical operations. Since these methods are static, they are called using the class name Math without creating an object.\n\nSome commonly used Math methods:\n- Math.pow(a, b)   → raises a to the power of b\n- Math.abs(x)     → returns the absolute value\n- Math.sqrt(x)    → returns the square root\n- Math.round(x)   → rounds to the nearest whole number\n- Math.ceil(x)    → rounds up\n- Math.floor(x)   → rounds down\n- Math.max(a, b)  → returns the larger value\n- Math.min(a, b)  → returns the smaller value\n\nExample:\ndouble result = Math.pow(4, 2);\nSystem.out.println(result);\n\nSolution:\n16.0",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n         double result;\n\n        // TODO: Use Math.pow() to calculate 4 raised to the power 2\n        // TODO: Store the value in result\n\n        // TODO: Print result\n\n    }\n}",
    expectedOutput: "16.0",
    commonMistakes: [
      "Forgetting Math methods are static",
      "Using incorrect arguments in Math.pow()",
      "Printing the wrong variable",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 9,
    title: "Formatted Output using printf",
    goal: "Use printf to format integer output with width and zero padding",
    concept:
      "The printf() method in Java is used to format output in a specific way. It allows control over how values are displayed using format specifiers.\n\nCommon format specifiers:\n- %s  → String\n- %d  → integer\n- %f  → decimal number\n\nFormatting options:\n- Width specifies the minimum number of characters to display\n- Zero padding adds leading zeros if the number is shorter than the width\n\nExample:\nint id = 7890;\nSystem.out.printf(\"id: %04d\", id);\n\nExplanation:\n%04d means:\n- d → integer\n- 4 → width of 4 characters\n- 0 → pad with zeros if needed\n\nSolution:\nid: 7890",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        int id = 7890;\n\n        // TODO: Use printf to print the id using width 4\n\n    }\n}",
    expectedOutput: "id: 7890",
    commonMistakes: [
      "Using the wrong format specifier",
      "Forgetting to use printf instead of println",
      "Missing the width value",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 10,
    title: "Compound Interest Calculation",
    goal: "Calculate a final amount using Math.pow()",
    concept:
      "Compound interest calculations often involve exponential growth. In Java, exponentiation is performed using the Math.pow(base, exponent) method.\n\nIn this lesson, the calculation is limited to a single expression so that the program follows one clear and predictable path.\n\nExample:\ndouble amount = 1000 * Math.pow(1.05, 5);\nSystem.out.println(amount);\n\nExplanation:\n1.05 represents a 5% increase applied repeatedly for 5 years.\n\nSolution:\n1276.28",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        double principal = 1000;\n        double rate = 1.05;\n        int years = 5;\n        double amount;\n\n        // TODO: Calculate the final amount using Math.pow(rate, years)\n\n        // TODO: Print the result using printf with 2 decimal places\n\n    }\n}",
    expectedOutput: "The amount after 5 years is $1276.28",
    commonMistakes: [
      "Using the wrong base value in Math.pow()",
      "Incorrect exponent value",
      "Not using Math.pow() at all",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 11,
    title: "Nested If Statements",
    goal: "Use nested if statements to apply a single discount condition",
    concept:
      "Nested if statements are if statements placed inside other if statements. They are useful when a condition should only be checked if another condition is already true.\n\nIn this lesson, a discount is applied only when both conditions are true. This ensures that the program follows a single clear decision path.\n\nExample:\nboolean isStudent = true;\nboolean isSenior = true;\ndouble price = 9.99;\n\nif (isStudent) {\n    if (isSenior) {\n        price = price * 0.7;\n    }\n}\n\nSystem.out.println(price);\n\nSolution:\n6.99",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        boolean isStudent = true;\n        boolean isSenior = true;\n        double price = 9.99;\n\n        // TODO: Use a nested if statement\n        // TODO: Apply a 30% discount only when both conditions are true\n\n        // TODO: Print the final ticket price using printf\n\n    }\n}",
    expectedOutput: "The price of a ticket is: $6.99",
    commonMistakes: [
      "Using separate if statements instead of nested if",
      "Applying the discount when only one condition is true",
      "Incorrect percentage calculation",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 12,
    title: "String Methods",
    goal: "Use built-in String methods to analyze and modify text",
    concept:
      "Java Strings provide built-in methods that help analyze and modify text. These methods do not change the original String unless the returned value is stored.\n\nCommon String methods:\n- contains() → checks if a String contains specific text\n- equalsIgnoreCase() → compares Strings while ignoring case differences\n\nExample:\nString name = \"Java\";\nSystem.out.println(name.contains(\"a\"));\n\nSolution:\ntrue",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        String name = \"Alex Smith\";\n\n        // TODO: Print \"Hello \" followed by name\n\n        // TODO: If the name contains a space, print \"Your name contains a space\"\n\n        // TODO: Compare the name with \"password\" ignoring case\n        // If they are not equal, print \"Hello \" followed by name\n\n    }\n}",
    expectedOutput:
      "Hello Alex Smith\nYour name contains a space\nHello Alex Smith",
    commonMistakes: [
      "Using == instead of equalsIgnoreCase()",
      "Forgetting that String methods return new values",
      "Incorrect contains() condition",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 13,
    title: "Substring and String Parsing",
    goal: "Extract parts of a string using the substring() method",
    concept:
      "The substring(start, end) method is used to extract a portion of a String. The start index is inclusive, and the end index is exclusive.\n\nIndexes begin at 0, and counting moves from left to right.\n\nExample:\nString text = \"Hello\";\nSystem.out.println(text.substring(0, 2));\n\nSolution:\nHe",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        String email = \"john.doe@gmail.com\";\n\n        // TODO: Find the index of '@'\n\n        // TODO: Extract the username using substring()\n\n        // TODO: Extract the domain using substring()\n\n        // TODO: Print the username on the first line\n\n        // TODO: Print the domain on the second line\n\n    }\n}",
    expectedOutput:
      "john.doe\ngmail.com",
    commonMistakes: [
      "Using incorrect substring indexes",
      "Forgetting that the end index is exclusive",
      "Off-by-one errors",
      "Printing values in the wrong order"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 14,
    title: "Weight Conversion Program",
    goal: "Use conditional statements to convert weight values",
    concept:
      "Conditional statements allow a program to choose between different actions based on a condition. This is useful for unit conversions where a calculation depends on a selected option.\n\nIn this lesson, a condition is used to determine whether a weight should be converted from pounds to kilograms.\n\nExample:\nint choice = 1;\n\nif (choice == 1) {\n    System.out.println(\"Converting weight\");\n}\n\nSolution:\nConverting weight",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        int choice = 1;\n        double weightInLbs = 100;\n        double weightInKgs;\n\n        // TODO: If choice is 1, convert weightInLbs to kilograms\n\n        // TODO: Print \"The new weight in kgs is: \" followed by the value rounded to 2 decimal places\n\n    }\n}",
    expectedOutput: "The new weight in kgs is: 45.36",
    commonMistakes: [
      "Using incorrect conversion factor",
      "Forgetting to use conditional logic",
      "Incorrect decimal formatting",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 15,
    title: "Ternary Operator",
    goal: "Use the ternary operator to make a decision in a single line",
    concept:
      "The ternary operator is a short form of an if-else statement. It evaluates a condition and returns one value if the condition is true and another value if it is false.\n\nSyntax:\ncondition ? valueIfTrue : valueIfFalse\n\nExample:\nint number = 4;\nString result = (number % 2 == 0) ? \"EVEN\" : \"ODD\";\nSystem.out.println(result);\n\nSolution:\nEVEN",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        int number = 4;\n\n        // TODO: Use the ternary operator to assign \"EVEN\" or \"ODD\" to a String variable named result\n        // The condition should check whether number is even\n\n        // TODO: Print result\n\n    }\n}",
    expectedOutput: "EVEN",
    commonMistakes: [
      "Using if-else instead of the ternary operator",
      "Swapping the true and false values",
      "Forgetting to store the ternary result",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 16,
    title: "Temperature Conversion with Ternary Operator",
    goal: "Use the ternary operator to convert temperature values",
    concept:
      "The ternary operator can replace a simple if-else statement to choose between two expressions. It is often used when exactly one of two values should be selected.\n\nSyntax:\ncondition ? valueIfTrue : valueIfFalse\n\nExample:\ndouble tempC = 0.0;\nString result = (tempC <= 0) ? \"Freezing\" : \"Above Freezing\";\nSystem.out.println(result);\n\nSolution:\nFreezing",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        double temperatureC = 0.0;\n        String result;\n\n        // TODO: Use the ternary operator to convert Celsius to Fahrenheit\n        // Use the formula: (temperatureC * 9 / 5) + 32\n\n        // TODO: Store the formatted result with one decimal place and the symbol \"°C\"\n\n        // TODO: Print the result\n\n    }\n}",
    expectedOutput: "0.0°C",
    commonMistakes: [
      "Swapping the true and false expressions in the ternary operator",
      "Using the wrong conversion formula",
      "Incorrect decimal formatting",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 17,
    title: "Enhanced Switch Statement",
    goal: "Use the enhanced switch statement with arrow syntax",
    concept:
      "The enhanced switch statement uses arrow syntax (->) and does not require break statements. It allows grouping multiple cases and guarantees that only one branch executes.\n\nThis lesson focuses on using the enhanced switch to return a result based on a value.\n\nExample:\nint day = 7;\nString type = switch (day) {\n    case 6, 7 -> \"Weekend\";\n    default -> \"Weekday\";\n};\nSystem.out.println(type);\n\nSolution:\nWeekend",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        int day = 3;\n        String result;\n\n        // TODO: Use an enhanced switch expression to assign\n        // \"It is a weekend\" or \"It is a weekday\" to result\n        // Days 6 and 7 are weekends\n\n        // TODO: Print result\n\n    }\n}",
    expectedOutput: "It is a weekday",
    commonMistakes: [
      "Using if-else instead of an enhanced switch",
      "Using old switch syntax with break",
      "Forgetting to assign the switch result to a variable",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 18,
    title: "Calculator using Enhanced Switch",
    goal: "Use an enhanced switch expression to perform a calculation",
    concept:
      "An enhanced switch expression can return a value directly into a variable. This makes it useful for selecting one calculation based on a single operator.\n\nExample:\nchar operator = '+';\ndouble result = switch (operator) {\n    case '+' -> 5.0 + 3.0;\n    default -> 0.0;\n};\nSystem.out.println(result);\n\nSolution:\n8.0",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        double a = 5.0;\n        double b = 3.0;\n        char operator = '+';\n        double result;\n\n        // TODO: Use an enhanced switch expression on operator\n        // Assign the result of a + b to result when operator is '+'\n        // Use default to assign 0.0 to result\n\n        // TODO: Print result\n\n    }\n}",
    expectedOutput: "8.0",
    commonMistakes: [
      "Using int instead of double for calculations",
      "Using if-else instead of enhanced switch",
      "Using old switch syntax with break",
      "Printing the wrong variable"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 19,
    title: "Logical Operators",
    goal: "Use logical operators to combine conditions",
    concept:
      "Logical operators are used to combine boolean conditions.\n\nOperators:\n- && (AND): true only if both conditions are true\n- || (OR): true if at least one condition is true\n- !  (NOT): reverses a boolean value\n\nExample:\nboolean a = true;\nboolean b = false;\nSystem.out.println(a && !b);\n\nSolution:\ntrue",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        double temperature = 10.0;\n        boolean isSunny = true;\n\n        // TODO: Use logical operators to determine if the weather is bad\n        // Bad weather means it is sunny AND temperature is less than 15\n\n        // TODO: Print \"The weather is BAD\"\n\n    }\n}",
    expectedOutput: "The weather is BAD",
    commonMistakes: [
      "Using || instead of &&",
      "Forgetting to use the NOT operator when needed",
      "Not grouping conditions correctly",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 20,
    title: "While and Do-While Loops",
    goal: "Understand the difference between while and do-while loops",
    concept:
      "A while loop checks the condition before executing the loop body. A do-while loop executes the loop body at least once before checking the condition.\n\nThis difference is useful when a task must run at least one time.\n\nExample:\nint i = 0;\nwhile (i < 2) {\n    System.out.print(i + \" \");\n    i++;\n}\n\nSolution:\n0 1",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        int count = 0;\n\n        // TODO: Use a while loop to print numbers from 0 to 2\n\n        int number = 5;\n\n        // TODO: Use a do-while loop to print \"You picked number: 5\" once\n\n    }\n}",
    expectedOutput:
      "0\n1\n2\nYou picked number: 5",
    commonMistakes: [
      "Forgetting to update the loop variable",
      "Using while instead of do-while",
      "Creating infinite loops",
      "Printing incorrect values"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 21,
    title: "Number Guessing Logic",
    goal: "Use loops and conditionals to repeat until a condition is met",
    concept:
      "Loops and conditionals are often used together to repeat actions until a specific condition becomes true.\n\nA do-while loop is useful when an action must run at least once before checking the condition.\n\nExample:\nint target = 3;\nint guess = 0;\n\ndo {\n    guess++;\n} while (guess != target);\n\nSystem.out.println(guess);\n\nSolution:\n3",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        int target = 42;\n        int guess = 40;\n        int attempts = 0;\n\n        // TODO: Use a do-while loop to increase guess until it equals target\n        // Increase guess by 1 each time\n        // Increase attempts each loop\n\n        // TODO: When the loop ends, print:\n        // \"CORRECT! The number was 42\"\n        // \"# of attempts: 2\"\n\n    }\n}",
    expectedOutput:
      "CORRECT! The number was 42\n# of attempts: 2",
    commonMistakes: [
      "Forgetting to update the guess value",
      "Not incrementing the attempts counter",
      "Using while instead of do-while",
      "Printing incorrect output format"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 22,
    title: "For Loop Countdown",
    goal: "Use a for loop to execute code a fixed number of times",
    concept:
      "A for loop is used when the number of repetitions is known in advance. It has three parts: initialization, condition, and update.\n\nThe loop runs as long as the condition is true, and the update changes the loop variable after each iteration.\n\nExample:\nfor (int i = 3; i > 0; i--) {\n    System.out.print(i + \" \");\n}\n\nSolution:\n3 2 1",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Use a for loop to print numbers from 3 down to 1\n\n        // TODO: After the loop, print \"HAPPY NEW YEAR!\"\n\n    }\n}",
    expectedOutput:
      "3\n2\n1\nHAPPY NEW YEAR!",
    commonMistakes: [
      "Using the wrong loop condition",
      "Forgetting to decrement the loop variable",
      "Printing values in the wrong order",
      "Missing the final message"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 23,
    title: "Break in Loops",
    goal: "Use the break statement to stop a loop early",
    concept:
      "The break statement immediately stops a loop when a condition is met. After break runs, the loop ends and execution continues after the loop.\n\nExample:\nfor (int i = 0; i < 5; i++) {\n    if (i == 3) {\n        break;\n    }\n    System.out.print(i + \" \");\n}\n\nSolution:\n0 1 2 ",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Use a for loop from 0 to 9\n\n        // TODO: Use break to stop the loop when the value becomes 4\n\n        // TODO: Print each value followed by a space\n\n    }\n}",
    expectedOutput: "0 1 2 3 ",
    commonMistakes: [
      "Placing break outside the loop",
      "Using break without a condition",
      "Stopping the loop at the wrong value",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 24,
    title: "Nested Loops",
    goal: "Use nested loops to print rows and columns",
    concept:
      "A nested loop is a loop inside another loop. The outer loop controls how many rows are printed, and the inner loop controls how many columns are printed in each row.\n\nExample:\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 3; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}\n\nSolution:\n***\n***",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Use a nested loop to print 2 rows\n        // TODO: Each row should contain 3 asterisks (*)\n        // TODO: Move to a new line after each row\n\n    }\n}",
    expectedOutput:
      "***\n***",
    commonMistakes: [
      "Printing the newline inside the inner loop",
      "Using only one loop instead of nested loops",
      "Incorrect loop boundaries",
      "Printing extra spaces or characters"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 25,
    title: "Methods in Java",
    goal: "Create and call a method to print a message",
    concept:
      "A method is a reusable block of code that performs a specific task. Methods help organize code and avoid repetition.\n\nA method can be called from the main method to execute its code.\n\nExample:\nstatic void sayHello() {\n    System.out.println(\"Hello World\");\n}\n\nsayHello();\n\nSolution:\nHello World",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the printMessage method\n\n    }\n\n    // TODO: Create a method named printMessage\n    // The method should print \"Happy Birthday!\"\n\n}",
    expectedOutput:
      "Happy Birthday!",
    commonMistakes: [
      "Printing the message inside main instead of the method",
      "Not calling the method",
      "Using a different method name",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 26,
    title: "Method Overloading",
    goal: "Use method overloading to call the correct method based on parameters",
    concept:
      "Method overloading allows multiple methods to have the same name as long as their parameter lists are different. Java decides which method to use based on the number or types of arguments passed.\n\nExample:\nstatic void show(int x) {\n    System.out.println(x);\n}\n\nstatic void show(String x) {\n    System.out.println(x);\n}\n\nshow(5);\nshow(\"Hi\");\n\nSolution:\n5\nHi",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the bakePizza method with three arguments\n        // Store the returned value in a variable\n\n        // TODO: Print the returned value\n\n    }\n\n    // TODO: Create a bakePizza method with one String parameter\n\n    // TODO: Create a bakePizza method with two String parameters\n\n    // TODO: Create a bakePizza method with three String parameters\n    // This version should return \"pepperoni mozzarella flat-bread pizza\"\n\n}",
    expectedOutput:
      "pepperoni mozzarella flat-bread pizza",
    commonMistakes: [
      "Changing only the return type instead of parameters",
      "Calling the wrong overloaded method",
      "Printing directly instead of returning a value",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 27,
    title: "Variable Scope",
    goal: "Understand how local variables work inside different methods",
    concept:
      "Variable scope defines where a variable can be accessed.\n\nA local variable exists only inside the method where it is declared. If multiple methods declare variables with the same name, each variable is separate and independent.\n\nExample:\nstatic void test() {\n    int x = 5;\n    System.out.println(x);\n}\n\ntest();\n\nSolution:\n5",
    starterCode:
      "public class Main {\n\n        static int x = 3;\n\n        public static void main(String[] args){\n\n            int x = 1;\n\n            // TODO: Print the local variable x from main\n\n            // TODO: Call the doSomething method\n\n        }\n\n        static void doSomething(){\n\n            int x = 2;\n\n            // TODO: Print the local variable x from this method\n\n        }\n}",
    expectedOutput:
      "1\n2",
    commonMistakes: [
      "Assuming variables with the same name share values",
      "Trying to access a local variable outside its method",
      "Confusing local variables with class variables",
      "Printing the wrong variable"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 28,
    title: "Banking Program",
    goal: "Understand how a simple banking balance is displayed using a method",
    concept:
      "A banking program usually works with a balance value. One common operation is showing the current balance to the user.\n\nIn beginner programs, this can be demonstrated by storing a balance in a variable and printing it using a method. This helps separate logic (data) from actions (methods).\n\nExample:\nstatic void showBalance() {\n    System.out.println(\"$0.00\");\n}\n\nshowBalance();\n\nSolution:\n$0.00",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        double balance = 0.0;\n\n        // TODO: Call the showBalance method\n\n    }\n\n    // TODO: Create a method named showBalance\n    // The method should print \"$0.00\"\n\n}",
    expectedOutput:
      "$0.00",
    commonMistakes: [
      "Printing the balance inside main instead of the method",
      "Not using the exact output format",
      "Forgetting to call the method",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 29,
    title: "Dice Roller Program",
    goal: "Understand how a dice value can be displayed using a method",
    concept:
      "A dice program often works with a number between 1 and 6. One basic task is displaying the dice value in a clear message.\n\nIn beginner programs, this can be demonstrated by using a predefined number and printing it through a method. This helps learners focus on methods and output without extra complexity.\n\nExample:\nstatic void showDie() {\n    System.out.println(\"You rolled: 4\");\n}\n\nshowDie();\n\nSolution:\nYou rolled: 4",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        int die = 4;\n\n        // TODO: Call the printDie method\n\n    }\n\n    // TODO: Create a method named printDie\n    // The method should print \"You rolled: 4\"\n\n}",
    expectedOutput:
      "You rolled: 4",
    commonMistakes: [
      "Printing the value directly instead of using the method",
      "Not calling the method",
      "Using a different message format",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 30,
    title: "Arrays in Java",
    goal: "Create an array and access its elements using a loop",
    concept:
      "An array is used to store multiple values of the same type. The size of an array is fixed when it is created.\n\nElements in an array are accessed using their index, starting from 0.\n\nExample:\nString[] foods = {\"Pizza\", \"Burger\", \"Pasta\"};\nSystem.out.println(foods.length);\n\nSolution:\n3",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        String[] foods = {\"pizza\", \"burger\", \"pasta\"};\n\n        // TODO: Use a loop to print each food item on a new line\n\n    }\n}",
    expectedOutput:
      "pizza\nburger\npasta",
    commonMistakes: [
      "Using the wrong loop condition",
      "Accessing indexes outside the array length",
      "Printing all values on one line",
      "Forgetting that array indexing starts at 0"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 31,
    title: "Linear Search in Arrays",
    goal: "Search for an element in an array using a loop",
    concept:
      "Linear search checks each element of an array one by one until the target value is found.\n\nThis approach works for any array because it does not require the array to be sorted.\n\nExample:\nint[] nums = {1, 2, 3};\nint target = 2;\nfor (int n : nums) {\n    if (n == target) {\n        System.out.println(\"Found\");\n    }\n}\n\nSolution:\nFound",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        String[] items = {\"apple\", \"banana\", \"cherry\"};\n        String target = \"banana\";\n\n        // TODO: Use a loop to search for target in items\n        // TODO: When found, print \"Element found at index: 1\"\n\n    }\n}",
    expectedOutput:
      "Element found at index: 1",
    commonMistakes: [
      "Using == instead of equals() for String comparison",
      "Forgetting to stop the loop after finding the element",
      "Printing the wrong index",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 32,
    title: "Variable Arguments (Varargs)",
    goal: "Use varargs to pass multiple values to a method",
    concept:
      "Varargs allow a method to accept multiple values of the same type. Inside the method, varargs behave like an array.\n\nThis is useful when the number of values is known at the call site but flexible in the method definition.\n\nExample:\nstatic void show(int... nums) {\n    System.out.println(nums.length);\n}\n\nshow(1, 2, 3);\n\nSolution:\n3",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the average method with the values 2 and 3\n\n    }\n\n    // TODO: Create a method named average using varargs\n    // The method should return the average of the values\n\n}",
    expectedOutput:
      "2.5",
    commonMistakes: [
      "Not using varargs in the method definition",
      "Treating varargs as a single value instead of an array",
      "Using int division instead of double division",
      "Printing inside the method instead of returning the value"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 33,
    title: "2D Arrays in Java",
    goal: "Store and access data using a two-dimensional array",
    concept:
      "A 2D array is an array of arrays. It is often used to represent rows and columns, like a table or grid.\n\nEach element is accessed using two indexes: one for the row and one for the column.\n\nExample:\nint[][] nums = { {1, 2}, {3, 4} };\nSystem.out.println(nums[0][1]);\n\nSolution:\n2",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        String[][] groceries = {\n            {\"apple\", \"orange\", \"banana\"},\n            {\"potato\", \"onion\", \"carrot\"}\n        };\n\n        // TODO: Use nested loops to print each item followed by a space\n        // TODO: Move to a new line after each row\n\n    }\n}",
    expectedOutput:
      "apple orange banana \npotato onion carrot ",
    commonMistakes: [
      "Mixing up row and column indexes",
      "Using only one loop instead of nested loops",
      "Printing items without spaces",
      "Printing rows on the same line"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 34,
    title: "Quiz Game",
    goal: "Understand how quiz data can be stored and evaluated using arrays",
    concept:
      "A quiz program can store questions and answers in arrays. Each question is matched with its correct answer using the same index.\n\nIn beginner programs, quiz logic can be demonstrated without user input by checking a predefined answer and calculating the score.\n\nExample:\nString[] questions = {\"2 + 2 = ?\"};\nString[] answers = {\"4\"};\nString userAnswer = \"4\";\n\nif (userAnswer.equals(answers[0])) {\n    System.out.println(\"Correct\");\n}\n\nSolution:\nCorrect",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        String[] questions = {\"2 + 2 = ?\"};\n        String[] answers = {\"4\"};\n        String userAnswer = \"4\";\n        int score = 0;\n\n        // TODO: Check if userAnswer matches the correct answer\n        // TODO: Increase score if the answer is correct\n        // TODO: Print \"Your final score is: 1 out of 1\"\n\n    }\n}",
    expectedOutput:
      "Your final score is: 1 out of 1",
    commonMistakes: [
      "Using == instead of equals() for String comparison",
      "Not updating the score correctly",
      "Printing incorrect score format",
      "Accessing the wrong array index"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 35,
    title: "Rock Paper Scissors",
    goal: "Understand how game choices can be compared using conditionals",
    concept:
      "Many simple games compare two choices to decide a result. In Rock–Paper–Scissors, each choice wins or loses against another.\n\nIn beginner programs, game logic can be demonstrated using predefined choices instead of randomness.\n\nExample:\nString player = \"Rock\";\nString computer = \"Scissors\";\n\nif (player.equals(\"Rock\") && computer.equals(\"Scissors\")) {\n    System.out.println(\"Player wins\");\n}\n\nSolution:\nPlayer wins",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        String playerChoice = \"Rock\";\n        String computerChoice = \"Scissors\";\n\n        // TODO: Use conditional statements to check the winner\n        // TODO: Print \"You win!\"\n\n    }\n}",
    expectedOutput:
      "You win!",
    commonMistakes: [
      "Using == instead of equals() for String comparison",
      "Writing incorrect win conditions",
      "Printing the wrong result message",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 36,
    title: "Slot Machine Game",
    goal: "Understand how matching symbols can be checked using arrays and conditionals",
    concept:
      "A slot machine game works by comparing symbols. If all symbols in a row match, it is considered a win.\n\nIn beginner programs, this logic can be demonstrated using a predefined row of symbols instead of randomness.\n\nExample:\nString[] row = {\"Cherry\", \"Cherry\", \"Cherry\"};\n\nif (row[0].equals(row[1]) && row[1].equals(row[2])) {\n    System.out.println(\"Win\");\n}\n\nSolution:\nWin",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        String[] slotRow = {\"Cherry\", \"Cherry\", \"Cherry\"};\n\n        // TODO: Check if all three symbols in slotRow are the same\n        // TODO: If they match, print \"You won $40\"\n\n    }\n}",
    expectedOutput:
      "You won $40",
    commonMistakes: [
      "Comparing Strings using ==",
      "Checking only two symbols instead of all three",
      "Printing the wrong message",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 37,
    title: "Objects and Classes",
    goal: "Create an object from a class and access its attributes and methods",
    concept:
      "A class is a blueprint that defines properties and behavior. An object is created from a class and represents a real instance.\n\nObject members are accessed using the dot (.) operator.\n\nExample:\nclass Person {\n    String name = \"Alex\";\n}\n\nPerson p = new Person();\nSystem.out.println(p.name);\n\nSolution:\nAlex",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an object of the Car class\n\n        // TODO: Print the car's brand\n\n        // TODO: Call the drive method\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare a String attribute named brand\n\n    // TODO: Create a drive method that prints \"You drive the Ford\"\n\n}",
    expectedOutput:
      "Ford\nYou drive the Ford",
    commonMistakes: [
      "Forgetting to create an object before using it",
      "Trying to access instance variables statically",
      "Misspelling method or variable names",
      "Printing incorrect output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 38,
    title: "Constructors in Java",
    goal: "Create an object using a constructor",
    concept:
      "A constructor is a special method that runs when an object is created. It is used to initialize the object's attributes.\n\nThe constructor has the same name as the class and does not have a return type.\n\nExample:\nclass Person {\n    String name;\n\n    Person(String n) {\n        name = n;\n    }\n}\n\nPerson p = new Person(\"Alex\");\nSystem.out.println(p.name);\n\nSolution:\nAlex",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Student object using the constructor\n\n        // TODO: Print the student's name\n\n        // TODO: Call the study method\n\n    }\n}\n\nclass Student {\n\n    String name;\n\n    // TODO: Create a constructor that sets the name\n\n    void study() {\n        System.out.println(\"Student is studying\");\n    }\n\n}",
    expectedOutput:
      "Spongebob\nStudent is studying",
    commonMistakes: [
      "Forgetting to create the constructor",
      "Not assigning the constructor parameter to the attribute",
      "Trying to access attributes before creating the object",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 39,
    title: "Constructor Overloading",
    goal: "Create objects using multiple constructors with different parameters",
    concept:
      "Constructor overloading allows a class to have more than one constructor with different parameter lists. This lets objects be created in different ways depending on the data available.\n\nJava decides which constructor to call based on the arguments provided when creating the object.\n\nExample:\nclass Box {\n    Box() {\n        System.out.println(\"Empty\");\n    }\n\n    Box(int size) {\n        System.out.println(size);\n    }\n}\n\nnew Box(5);\n\nSolution:\n5",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a User object using the constructor with one parameter\n\n        // TODO: Print the username\n\n        // TODO: Create a User object using the default constructor\n\n        // TODO: Print the username\n\n    }\n}\n\nclass User {\n\n    // TODO: Declare a String attribute named username\n\n    // TODO: Create a default constructor that sets username to \"Guest\"\n\n    // TODO: Create an overloaded constructor that accepts a username\n\n}",
    expectedOutput:
      "Spongebob\nGuest",
    commonMistakes: [
      "Creating constructors with the same parameter list",
      "Forgetting to assign constructor parameters to attributes",
      "Trying to print values without creating objects",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 40,
    title: "Arrays of Objects",
    goal: "Store and use multiple objects inside an array",
    concept:
      "An array can store objects just like it stores numbers or strings. Each position in the array holds a reference to an object.\n\nBoth the array and each object inside it must be created before use.\n\nExample:\nclass Cat {\n    String name;\n    Cat(String n) { name = n; }\n}\n\nCat[] cats = new Cat[1];\ncats[0] = new Cat(\"Milo\");\nSystem.out.println(cats[0].name);\n\nSolution:\nMilo",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an array of 3 Car objects\n\n        // TODO: Use a loop to call the drive method on each Car\n\n    }\n}\n\nclass Car {\n\n        // TODO: Declare a String attribute named model\n\n        // TODO: Create a constructor that sets the model\n\n        // TODO: Create a drive method that prints:\n        // \"You drive the Mustang\"\n        // \"You drive the Corvette\"\n        // \"You drive the Charger\"\n\n}",
    expectedOutput:
      "You drive the Mustang\nYou drive the Corvette\nYou drive the Charger",
    commonMistakes: [
      "Forgetting to initialize objects inside the array",
      "Trying to call methods on null array elements",
      "Not using a loop to process all objects",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 41,
    title: "Static Variables and Methods",
    goal: "Understand how static variables and methods belong to a class",
    concept:
      "A static variable belongs to the class itself, not to individual objects. This means all objects of the class share the same static variable.\n\nA static method can access only static variables directly and is usually called using the class name.\n\nExample:\nclass Counter {\n    static int count = 0;\n}\n\nCounter.count++;\nSystem.out.println(Counter.count);\n\nSolution:\n1",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create 4 Friend objects\n\n        // TODO: Call the static method to print total friends\n\n    }\n}\n\nclass Friend {\n\n    // TODO: Declare a static int variable named totalFriends\n\n    // TODO: Create a constructor that increases totalFriends\n\n    // TODO: Create a static method that prints:\n    // \"You have 4 total friends\"\n\n}",
    expectedOutput:
      "You have 4 total friends",
    commonMistakes: [
      "Trying to use non-static variables inside static methods",
      "Thinking each object has its own copy of a static variable",
      "Calling static methods using object references",
      "Forgetting that static variables are shared"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 42,
    title: "Inheritance",
    goal: "Understand how a child class inherits behavior from a parent class",
    concept:
      "Inheritance allows one class to reuse properties and methods of another class using the extends keyword.\n\nThe child class automatically gets access to the public methods of the parent class.\n\nExample:\nclass Animal {\n    void eat() {\n        System.out.println(\"Eating\");\n    }\n}\n\nclass Dog extends Animal {}\n\nDog d = new Dog();\nd.eat();\n\nSolution:\nEating",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Dog object\n\n        // TODO: Call the eat method using the Dog object\n\n    }\n}\n\nclass Animal {\n\n        // TODO: Create an eat method that prints \"The dog eats\"\n\n}\n\nclass Dog extends Animal {\n\n        // No additional code needed here\n\n}",
    expectedOutput:
      "The dog eats",
    commonMistakes: [
      "Forgetting to use the extends keyword",
      "Trying to redefine parent methods unnecessarily",
      "Assuming inheritance copies code instead of sharing behavior",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 43,
    title: "Super Keyword",
    goal: "Use the super keyword to call a parent class constructor",
    concept:
      "The super keyword refers to the parent class. It is commonly used inside a child class constructor to call the parent class constructor.\n\nCalling super() ensures that the parent class is initialized before the child class.\n\nExample:\nclass Parent {\n    Parent() {\n        System.out.println(\"Parent\");\n    }\n}\n\nclass Child extends Parent {\n    Child() {\n        super();\n    }\n}\n\nnew Child();\n\nSolution:\nParent",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Student object\n\n    }\n}\n\nclass Person {\n\n        // TODO: Create a constructor that prints \"Person created\"\n\n}\n\nclass Student extends Person {\n\n        // TODO: Create a constructor that calls super()\n\n}",
    expectedOutput:
      "Person created",
    commonMistakes: [
      "Forgetting to call super() in the child constructor",
      "Calling super() after other statements",
      "Assuming super creates a new object",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 44,
    title: "Method Overriding",
    goal: "Override a method in a child class",
    concept:
      "Method overriding occurs when a child class provides its own version of a method that already exists in the parent class.\n\nThe method name, return type, and parameters must match exactly.\n\nExample:\nclass Animal {\n    void sound() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Bark\");\n    }\n}\n\nnew Dog().sound();\n\nSolution:\nBark",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Fish object\n\n        // TODO: Call the move method\n\n    }\n}\n\nclass Animal {\n\n        // TODO: Create a move method that prints \"This animal is moving\"\n\n}\n\nclass Fish extends Animal {\n\n        // TODO: Override the move method to print \"This animal is swimming\"\n\n}",
    expectedOutput:
      "This animal is swimming",
    commonMistakes: [
      "Method signature does not match the parent method",
      "Forgetting to override the method in the child class",
      "Using different method names",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 45,
    title: "toString() Method",
    goal: "Override the toString() method to return meaningful text",
    concept:
      "The toString() method defines how an object is displayed as text. When an object is printed, Java automatically calls its toString() method.\n\nBy overriding toString(), you can control what information is shown.\n\nExample:\nclass Box {\n    public String toString() {\n        return \"Box\";\n    }\n}\n\nSystem.out.println(new Box());\n\nSolution:\nBox",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Car object\n\n        // TODO: Print the Car object\n\n    }\n}\n\nclass Car {\n\n        // TODO: Declare a String attribute named model\n\n        // TODO: Create a constructor that sets the model\n\n        // TODO: Override toString() to return the model\n\n}",
    expectedOutput:
      "Mustang",
    commonMistakes: [
      "Forgetting to override toString()",
      "Returning null instead of a String",
      "Printing the object instead of relying on toString()",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 46,
    title: "Abstract Classes and Methods",
    goal: "Use an abstract class and implement an abstract method",
    concept:
      "An abstract class cannot be used to create objects directly. It is meant to be extended by other classes.\n\nAn abstract method has no body and must be implemented by the child class.\n\nExample:\nabstract class Animal {\n    abstract void sound();\n}\n\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Bark\");\n    }\n}\n\nnew Dog().sound();\n\nSolution:\nBark",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Dog object\n\n        // TODO: Call the sound method\n\n    }\n}\n\nabstract class Animal {\n\n        // TODO: Declare an abstract method named sound\n\n        void info() {\n            System.out.println(\"This is an animal\");\n        }\n\n}\n\nclass Dog extends Animal {\n\n        // TODO: Implement the sound method to print \"Dog barks\"\n\n}",
    expectedOutput:
      "Dog barks",
    commonMistakes: [
      "Trying to create an object of an abstract class",
      "Forgetting to implement the abstract method",
      "Using a different method signature",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 47,
    title: "Interfaces",
    goal: "Implement an interface in a class",
    concept:
      "An interface defines a set of methods that a class must implement. It specifies WHAT a class should do, not HOW it does it.\n\nA class uses the keyword implements to use an interface and must provide implementations for all its methods.\n\nExample:\ninterface Switch {\n    void turnOn();\n}\n\nclass Light implements Switch {\n    public void turnOn() {\n        System.out.println(\"Light On\");\n    }\n}\n\nnew Light().turnOn();\n\nSolution:\nLight On",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Rabbit object\n\n        // TODO: Call the flee method\n\n    }\n}\n\ninterface Prey {\n\n        // TODO: Declare a flee method\n\n}\n\nclass Rabbit implements Prey {\n\n        // TODO: Implement the flee method to print \"The rabbit is running away\"\n\n}",
    expectedOutput:
      "The rabbit is running away",
    commonMistakes: [
      "Forgetting to implement interface methods",
      "Using extends instead of implements",
      "Trying to create an object of an interface",
      "Method signature mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 48,
    title: "Polymorphism",
    goal: "Use a parent type to reference a child object",
    concept:
      "Polymorphism allows a parent type reference to point to a child object. When a method is called, Java decides which version to run based on the actual object type at runtime.\n\nThis means the same method call can behave differently depending on the object.\n\nExample:\nclass Animal {\n    void sound() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Woof\");\n    }\n}\n\nAnimal a = new Dog();\na.sound();\n\nSolution:\nWoof",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an Animal reference pointing to a Dog object\n\n        // TODO: Call the sound method using the Animal reference\n\n    }\n}\n\nclass Animal {\n\n        // TODO: Create a sound method that prints \"Animal sound\"\n\n}\n\nclass Dog extends Animal {\n\n        // TODO: Override the sound method to print \"Dog barks\"\n\n}",
    expectedOutput:
      "Dog barks",
    commonMistakes: [
      "Using the child type instead of the parent reference",
      "Forgetting to override the method",
      "Assuming method calls depend on reference type",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 49,
    title: "Runtime Polymorphism",
    goal: "Understand how method execution is decided at runtime",
    concept:
      "Runtime polymorphism means the method that runs is chosen based on the actual object created, not the reference type.\n\nThe same parent reference can point to different child objects, and the overridden method will execute accordingly.\n\nExample:\nclass Animal {\n    void speak() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\nclass Cat extends Animal {\n    void speak() {\n        System.out.println(\"Meow\");\n    }\n}\n\nAnimal a = new Cat();\na.speak();\n\nSolution:\nMeow",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare an Animal reference\n\n        // TODO: Assign a Dog object to it\n\n        // TODO: Call the speak method\n\n    }\n}\n\nclass Animal {\n\n        // TODO: Create a speak method that prints \"Animal sound\"\n\n}\n\nclass Dog extends Animal {\n\n        // TODO: Override speak to print \"The dog goes *woof*\"\n\n}",
    expectedOutput:
      "The dog goes *woof*",
    commonMistakes: [
      "Forgetting to override the method in the subclass",
      "Assuming method calls depend on reference type",
      "Using the child type instead of parent reference",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 50,
    title: "Encapsulation",
    goal: "Protect object data using private variables and public getters and setters",
    concept:
      "Encapsulation means hiding internal data by making variables private and allowing controlled access using public methods.\n\nThis prevents invalid data from being assigned directly and keeps objects safe.\n\nExample:\nclass Box {\n    private int size;\n\n    void setSize(int s) {\n        if (s > 0) size = s;\n    }\n\n    int getSize() {\n        return size;\n    }\n}\n\nBox b = new Box();\nb.setSize(5);\nSystem.out.println(b.getSize());\n\nSolution:\n5",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Car object\n\n        // TODO: Print the model using a getter\n\n        // TODO: Update the color using a setter\n\n        // TODO: Print the updated color\n\n    }\n}\n\nclass Car {\n\n        // TODO: Declare private variables for model and color\n\n        // TODO: Create a constructor to initialize the variables\n\n        // TODO: Create a getter for model\n\n        // TODO: Create a getter for color\n\n        // TODO: Create a setter to update the color\n\n}",
    expectedOutput:
      "Mustang\nBlack",
    commonMistakes: [
      "Making fields public instead of private",
      "Accessing variables directly instead of using getters",
      "Forgetting to create setters",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 51,
    title: "Aggregation",
    goal: "Understand aggregation as a has-a relationship",
    concept:
      "Aggregation represents a has-a relationship where one object contains another object.\n\nThe contained object can exist independently of the container.\n\nExample:\nclass Engine {}\nclass Car {\n    Engine engine;\n}\n\nSolution:\n(Relationship exists)",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Book object\n\n        // TODO: Create a Library object using the Book\n\n        // TODO: Call the display method\n\n    }\n}\n\nclass Book {\n\n        // TODO: Declare a String variable named title\n\n        // TODO: Create a constructor to set the title\n\n        // TODO: Create a method that returns the title\n\n}\n\nclass Library {\n\n        // TODO: Declare a String variable named name\n\n        // TODO: Declare a Book variable\n\n        // TODO: Create a constructor to initialize name and Book\n\n        // TODO: Create a display method that prints:\n        // \"Library contains: <book title>\"\n\n}",
    expectedOutput:
      "Library contains: Java Basics",
    commonMistakes: [
      "Confusing aggregation with inheritance",
      "Creating the contained object inside the container",
      "Forgetting to store the object reference",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 52,
    title: "Composition",
    goal: "Understand composition as a part-of relationship between objects",
    concept:
      "Composition represents a strong part-of relationship. One object is created inside another object and cannot exist independently.\n\nIn composition, the owned object is usually created inside the constructor of the owner class.\n\nExample:\nclass Engine {}\nclass Car {\n    Engine engine = new Engine();\n}\n\nSolution:\n(Strong relationship)",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Car object\n\n        // TODO: Call the start method\n\n    }\n}\n\nclass Car {\n\n        // TODO: Declare a String variable named model\n\n        // TODO: Declare an Engine variable\n\n        // TODO: Create a constructor that initializes model and Engine\n\n        // TODO: Create a start method that prints:\n        // \"The car is running\"\n\n}\n\nclass Engine {\n\n        // TODO: Create a start method that prints:\n        // \"Engine started\"\n\n}",
    expectedOutput:
      "Engine started\nThe car is running",
    commonMistakes: [
      "Creating the Engine outside the Car class",
      "Confusing composition with aggregation",
      "Forgetting to initialize the Engine in the constructor",
      "Printing output in the wrong order"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 53,
    title: "Wrapper Classes",
    goal: "Convert primitive values to objects and back using wrapper classes",
    concept:
      "Wrapper classes allow primitive data types to be used as objects. Java automatically converts between primitives and their wrapper types using autoboxing and unboxing.\n\nAutoboxing converts a primitive into an object.\nUnboxing converts an object back into a primitive.\n\nExample:\nInteger x = 5;   // autoboxing\nint y = x;       // unboxing\nSystem.out.println(y);\n\nSolution:\n5",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an Integer object using autoboxing with value 100\n\n        // TODO: Print the Integer object\n\n        // TODO: Unbox the Integer into an int variable\n\n        // TODO: Print the int variable\n\n    }\n}",
    expectedOutput:
      "100\n100",
    commonMistakes: [
      "Confusing autoboxing with type casting",
      "Trying to call methods on primitive types",
      "Assuming wrapper objects cannot be null",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 54,
    title: "ArrayList",
    goal: "Store and access elements using an ArrayList",
    concept:
      "An ArrayList is a resizable list that can grow or shrink dynamically. Unlike arrays, its size does not need to be fixed at creation.\n\nYou can add elements using add() and access them using get().\n\nExample:\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");\nSystem.out.println(list.get(0));\n\nSolution:\nJava",
    starterCode:
      "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an ArrayList of Strings\n\n        // TODO: Add \"Apple\", \"Banana\", \"Coconut\", and \"Orange\" to the list\n\n        // TODO: Print each element using get()\n\n    }\n}",
    expectedOutput:
      "Apple\nBanana\nCoconut\nOrange",
    commonMistakes: [
      "Forgetting to import ArrayList",
      "Using array syntax instead of get()",
      "Assuming ArrayList has a fixed size",
      "Output format mismatch"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 55,
    title: "Exception Handling",
    goal: "Handle runtime errors using try, catch, and finally blocks",
    concept:
      "Exception handling prevents a program from crashing when a runtime error occurs.\n\nCode that may fail is placed inside a try block. If an error happens, the catch block runs. The finally block always runs, whether an error occurs or not.\n\nExample:\ntry {\n    int x = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Error\");\n} finally {\n    System.out.println(\"Done\");\n}\n\nSolution:\nError\nDone",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Use a try block to divide a number by zero\n\n        // TODO: Catch the ArithmeticException and print \"Cannot divide\"\n\n        // TODO: Add a finally block that prints \"This always executes\"\n\n    }\n}",
    expectedOutput:
      "Cannot divide\nThis always executes",
    commonMistakes: [
      "Placing code outside the try block",
      "Forgetting the catch block",
      "Assuming finally runs only when an exception occurs",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 56,
    title: "Writing Files in Java",
    goal: "Understand how FileWriter is used to write text to a file",
    concept:
      "FileWriter is used to write text data to a file. Writing to files can cause errors, so file operations are usually placed inside a try-catch block.\n\nAfter writing, the file must be closed to save the data.\n\nExample:\nFileWriter writer = new FileWriter(\"data.txt\");\nwriter.write(\"Hello\");\nwriter.close();\n\nSolution:\n(Data written)",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Use a try block to create a FileWriter\n\n        // TODO: Write the text \"Hello File\" to a file named \"output.txt\"\n\n        // TODO: Close the FileWriter\n\n        // TODO: Print \"File has been written\"\n\n    }\n}",
    expectedOutput:
      "File has been written",
    commonMistakes: [
      "Forgetting to close the FileWriter",
      "Placing write statements outside the try block",
      "Assuming file writing never fails",
      "Printing output before closing the file"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 57,
    title: "Reading Files in Java",
    goal: "Understand how BufferedReader reads text line by line",
    concept:
      "BufferedReader is used to read text from a file line by line. It is often combined with FileReader to read text files efficiently.\n\nReading usually happens inside a loop until no more lines are available.\n\nExample:\nBufferedReader reader = new BufferedReader(new FileReader(\"data.txt\"));\nSystem.out.println(reader.readLine());\nreader.close();\n\nSolution:\n(Prints a line)",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        String[] fileLines = {\n            \"Roses are Red\",\n            \"Violets are Blue\"\n        };\n\n        // TODO: Use a loop to print each line from fileLines\n\n    }\n}",
    expectedOutput:
      "Roses are Red\nViolets are Blue",
    commonMistakes: [
      "Assuming files always exist",
      "Forgetting to loop through lines",
      "Trying to read beyond available data",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 58,
    title: "Playing Audio in Java",
    goal: "Understand how audio playback is controlled in Java",
    concept:
      "Java can play audio using the Clip class from javax.sound.sampled. A Clip can be started, stopped, and reset.\n\nIn learning environments, audio control is often demonstrated conceptually instead of playing real sound files.\n\nExample:\n// Conceptual control\nclip.start();\nclip.stop();\n\nSolution:\n(Audio controlled)",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Print the audio control menu\n\n        // TODO: Print \"Audio started\"\n\n        // TODO: Print \"Audio stopped\"\n\n        // TODO: Print \"Audio reset\"\n\n    }\n}",
    expectedOutput:
      "P = Play\nS = Stop\nR = Reset\nQ = Quit\nAudio started\nAudio stopped\nAudio reset",
    commonMistakes: [
      "Trying to play real audio files in restricted environments",
      "Assuming audio formats always work",
      "Forgetting audio playback needs system support",
      "Printing output in the wrong order"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 59,
    title: "Hangman Game Logic",
    goal: "Understand how guessed letters are checked against a word",
    concept:
      "Hangman works by checking whether guessed letters exist inside a word. Correct guesses reveal letters, while incorrect guesses do not.\n\nIn beginner programs, the core logic can be demonstrated without user input or randomness.\n\nExample:\nString word = \"JAVA\";\nchar guess = 'A';\nif (word.contains(\"A\")) {\n    System.out.println(\"Correct\");\n}\n\nSolution:\nCorrect",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        String word = \"JAVA\";\n        char guess = 'A';\n\n        // TODO: Check if the word contains the guessed letter\n\n        // TODO: If it does, print \"Correct guess\"\n\n    }\n}",
    expectedOutput:
      "Correct guess",
    commonMistakes: [
      "Comparing characters incorrectly",
      "Forgetting that contains() works on Strings",
      "Using == instead of equals() for String comparison",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 60,
    title: "Dates and Times in Java",
    goal: "Work with date and time objects using the java.time API",
    concept:
      "The java.time package provides modern classes such as LocalDate, LocalTime, and LocalDateTime to represent dates and times.\n\nIn real-world applications, methods like LocalDate.now() and LocalTime.now() are commonly used to get the current system date and time.\n\nHowever, when learning or testing programs, fixed date and time values are preferred so the output remains predictable and easy to verify.\n\nExample:\nLocalDate today = LocalDate.now();\nSystem.out.println(today);\n\nSolution:\n(Current system date)",
    starterCode:
      "import java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.LocalTime;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a LocalDate for 2025-01-01 and print it\n\n        // TODO: Create a LocalTime for 12:00:00 and print it\n\n        // TODO: Create a LocalDateTime using the date and time and print it\n\n        // TODO: Create another LocalDateTime for 2025-01-01T13:00:00\n\n        // TODO: Compare the two LocalDateTime objects using isBefore()\n\n    }\n}",
    expectedOutput:
      "2025-01-01\n12:00:00\n2025-01-01T12:00\ntrue",
    commonMistakes: [
      "Using now() instead of fixed values",
      "Confusing LocalDateTime with timezone-based classes",
      "Using == instead of isBefore() or isAfter()",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 61,
    title: "Anonymous Classes",
    goal: "Override behavior using an anonymous class",
    concept:
      "An anonymous class allows you to override a method without creating a separate named class.\n\nIt is created at the moment the object is instantiated and is often used for quick custom behavior.\n\nExample:\nDog d = new Dog() {\n    void speak() {\n        System.out.println(\"Custom bark\");\n    }\n};\n\nd.speak();\n\nSolution:\nCustom bark",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an anonymous Dog object\n\n        // TODO: Override the speak method to print \"Scooby Doo says *Ruh Roh*\"\n\n        // TODO: Call the speak method\n\n    }\n}\n\nclass Dog {\n\n        // TODO: Create a speak method that prints \"The dog goes *woof*\"\n\n}",
    expectedOutput:
      "Scooby Doo says *Ruh Roh*",
    commonMistakes: [
      "Forgetting to override the method",
      "Trying to reuse an anonymous class",
      "Using incorrect method signatures",
      "Printing extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 62,
    title: "Timer and TimerTask",
    goal: "Understand how Timer and TimerTask are used to schedule tasks in Java",
    concept:
      "Timer is used to schedule tasks to run after a delay or repeatedly. TimerTask represents the task that should be executed.\n\nIn real applications, Timer and TimerTask work with time delays and background threads.\n\nFor learning purposes, timer behavior can be demonstrated conceptually using fixed output so the program remains predictable.\n\nExample:\nTimer timer = new Timer();\nTimerTask task = new TimerTask() {\n    public void run() {\n        System.out.println(\"Task executed\");\n    }\n};\n\nSolution:\nTask executed",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Print a message indicating the timer has started\n\n        // TODO: Print \"Hello!\" to represent a scheduled task execution\n\n        // TODO: Print a message indicating the timer has stopped\n\n    }\n}",
    expectedOutput:
      "Timer started\nHello!\nTimer stopped",
    commonMistakes: [
      "Trying to rely on real-time delays in learning environments",
      "Assuming timers execute immediately in a predictable order",
      "Confusing TimerTask with threads",
      "Using real scheduling when conceptual output is required"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 63,
    title: "Countdown Timer Logic",
    goal: "Understand how countdown logic works using repeated execution",
    concept:
      "A countdown works by decreasing a number step by step until it reaches zero.\n\nIn real programs, this logic may run inside a TimerTask or loop that executes repeatedly.\n\nFor learning purposes, the countdown behavior can be demonstrated using fixed values and predictable output.\n\nExample:\nint count = 3;\ncount--;\nSystem.out.println(count);\n\nSolution:\n2",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        int count = 3;\n\n        // TODO: Print the value of count\n\n        // TODO: Decrease count by 1 and print it\n\n        // TODO: Decrease count by 1 and print it again\n\n        // TODO: Decrease count by 1 and print it again\n\n        // TODO: Print \"HAPPY NEW YEAR!\"\n\n    }\n}",
    expectedOutput:
      "3\n2\n1\n0\nHAPPY NEW YEAR!",
    commonMistakes: [
      "Forgetting to update the countdown variable",
      "Printing values in the wrong order",
      "Using real timers instead of demonstrating logic",
      "Adding extra output"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 64,
    title: "Generics",
    goal: "Create a reusable class using generics",
    concept:
      "Generics allow a class to work with different data types while keeping type safety.\n\nA generic type is written using angle brackets like <T>. The actual type is provided when creating the object.\n\nExample:\nclass Box<T> {\n    T value;\n}\nBox<String> box = new Box<>();\nbox.value = \"Apple\";\nSystem.out.println(box.value);\n\nSolution:\nApple",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Box object that stores a String\n\n        // TODO: Set the value to \"banana\"\n\n        // TODO: Print the value from the Box\n\n    }\n}\n\nclass Box<T> {\n\n    // TODO: Declare a generic variable\n\n    // TODO: Create a setter method\n\n    // TODO: Create a getter method\n\n}",
    expectedOutput:
      "banana",
    commonMistakes: [
      "Using primitive types instead of wrapper classes",
      "Confusing generic type parameters with actual types",
      "Using Object instead of generics",
      "Forgetting to specify the type when creating the object"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 65,
    title: "HashMap",
    goal: "Store and retrieve values using key-value pairs with HashMap",
    concept:
      "A HashMap stores data as key-value pairs. Each key maps to exactly one value, and keys must be unique.\n\nValues are retrieved by providing the key using the get() method.\n\nExample:\nHashMap<String, Integer> map = new HashMap<>();\nmap.put(\"Apple\", 5);\nSystem.out.println(map.get(\"Apple\"));\n\nSolution:\n5",
    starterCode:
      "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a HashMap with String keys and Double values\n\n        // TODO: Add a key \"apple\" with value 0.5\n\n        // TODO: Add a key \"orange\" with value 0.5\n\n        // TODO: Add a key \"banana\" with value 0.25\n\n        // TODO: Add a key \"coconut\" with value 1.0\n\n        // TODO: Print each value using get() in the same order\n\n    }\n}",
    expectedOutput:
      "apple : $0.5\norange : $0.5\nbanana : $0.25\ncoconut : $1.0",
    commonMistakes: [
      "Assuming HashMap maintains insertion order",
      "Trying to loop over HashMap for ordered output",
      "Using duplicate keys",
      "Calling get() with a key that does not exist"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 66,
    title: "Enums (Enumerations)",
    goal: "Use enums to represent a fixed set of constant values",
    concept:
      "Enums are used to represent a fixed set of predefined constants. They make code safer and more readable than using strings.\n\nAn enum value is accessed using the enum name followed by the constant.\n\nExample:\nenum Color { RED, BLUE }\nColor c = Color.RED;\nSystem.out.println(c);\n\nSolution:\nRED",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Day variable and assign MONDAY\n\n        // TODO: Print the Day value\n\n    }\n}\n\nenum Day {\n\n        // TODO: Declare enum constants for days of the week\n\n}",
    expectedOutput:
      "MONDAY",
    commonMistakes: [
      "Using strings instead of enums",
      "Assuming enum values can change",
      "Comparing enums using equals() instead of ==",
      "Forgetting that enum names are case-sensitive"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 67,
    title: "Multithreading Concept",
    goal: "Understand how threads allow tasks to run independently",
    concept:
      "Multithreading allows multiple tasks to run at the same time. One task may handle user interaction while another runs in the background.\n\nIn real applications, threads can enforce time limits or perform background work.\n\nFor learning purposes, thread behavior can be demonstrated conceptually without real concurrency.\n\nExample:\nRunnable task = () -> System.out.println(\"Task running\");\n\nSolution:\nTask running",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Print a message indicating the main task has started\n\n        // TODO: Print \"Time's up!\" to represent a background task finishing\n\n    }\n}",
    expectedOutput:
      "Main task started\nTime's up!",
    commonMistakes: [
      "Assuming threads run in a predictable order",
      "Trying to rely on real timing in learning programs",
      "Calling run() instead of start() in real applications",
      "Overusing threads when not necessary"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 68,
    title: "Runnable Interface",
    goal: "Understand how Runnable defines a task that can be run in a thread",
    concept:
      "The Runnable interface represents a task that can be executed. It contains a single method called run().\n\nIn real applications, Runnable is often passed to a Thread to run code in parallel.\n\nFor learning purposes, the behavior of Runnable can be demonstrated conceptually without starting real threads.\n\nExample:\nRunnable task = () -> System.out.println(\"Task running\");\ntask.run();\n\nSolution:\nTask running",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Runnable object\n\n        // TODO: Call the run method to execute the task\n\n    }\n}",
    expectedOutput:
      "Task running",
    commonMistakes: [
      "Assuming Runnable automatically runs in a new thread",
      "Forgetting that run() is just a normal method",
      "Using threads when sequential execution is sufficient",
      "Confusing Runnable with Thread"
    ],
    difficulty: "easy"
  },
  {
    lessonNumber: 69,
    title: "Alarm Clock Concept",
    goal: "Understand how an alarm clock compares time values and triggers an action",
    concept:
      "An alarm clock works by comparing a target time with the current time. When both times match, an action such as playing a sound is triggered.\n\nIn real programs, this comparison may happen repeatedly in a background thread and use system time.\n\nFor learning purposes, the comparison logic can be demonstrated using fixed time values so the output is predictable.\n\nExample:\nLocalTime alarm = LocalTime.of(7, 0);\nLocalTime now = LocalTime.of(7, 0);\nif (now.equals(alarm)) {\n    System.out.println(\"Alarm triggered\");\n}\n\nSolution:\nAlarm triggered",
    starterCode:
      "import java.time.LocalTime;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        LocalTime alarmTime = LocalTime.of(7, 0);\n        LocalTime currentTime = LocalTime.of(7, 0);\n\n        // TODO: Compare currentTime with alarmTime\n\n        // TODO: If they are equal, print \"*ALARM NOISES*\"\n\n    }\n}",
    expectedOutput:
      "*ALARM NOISES*",
    commonMistakes: [
      "Using now() instead of fixed time values",
      "Comparing times using == instead of equals()",
      "Mixing time logic with real threads too early",
      "Adding extra output"
    ],
    difficulty: "easy"
  }
];

export default lessons;