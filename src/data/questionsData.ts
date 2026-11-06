import { ExamQuestion } from '../types';

export const EXAM_QUESTIONS: ExamQuestion[] = [
  // ==================== QUESTION 1 ====================
  {
    id: 1,
    questionNumber: 1,
    unit: 'Unit III',
    title: 'Arrays with Types & Inheritance with Types',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain the Arrays with Types',
      marks: 5,
      syllabusTopic: '3.1 Arrays - Declaration, Memory Storage, and Types',
      simpleExplanation:
        'An array in Java is a dynamically allocated collection of like-typed (homogeneous) variables referred to by a common identifier name. Specific elements are accessed via zero-based indexing ([0] to [length - 1]). In Java, arrays are treated as first-class objects created on the Heap.',
      keyPoints: [
        'Homogeneous data storage: All elements must share the base type (primitive or reference).',
        'Dynamic Allocation: Java arrays are allocated memory at runtime using the "new" operator.',
        'Default Initial values: Numeric types initialize to 0, booleans to false, and objects/references to null.',
        'Index checking: The Java runtime strictly checks array bounds; violating bounds throws ArrayIndexOutOfBoundsException.',
        'Two Main Types: (1) One-Dimensional (1D) Arrays (linear list), and (2) Multi-Dimensional Arrays (matrix / arrays of arrays, including regular and jagged/irregular arrays).'
      ],
      syntaxOrDiagram: `// 1. One-Dimensional Array:
type[] varName = new type[size];
// Or with array initializer:
type[] varName = { val1, val2, val3 };

// 2. Multi-Dimensional Array (Rectangular or Jagged):
type[][] varName = new type[rows][cols];

// Memory Representation (1D):
Index:     [0]   [1]   [2]   [3]
Value:   | 10  | 20  | 30  | 40  |
Address: 1000  1004  1008  1012  (Each int = 4 bytes)`,
      javaCode: `// Demonstration of 1D and Jagged 2D Arrays in Java
public class ArrayTypesDemo {
    public static void main(String[] args) {
        // --- 1. One-Dimensional Array ---
        System.out.println("=== 1D ARRAY DEMO ===");
        int[] month_days = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        System.out.println("April (index 3) has: " + month_days[3] + " days.");
        System.out.println("Total months: " + month_days.length);

        // --- 2. Multi-Dimensional (Jagged / Irregular Array) ---
        System.out.println("\\n=== JAGGED 2D ARRAY DEMO ===");
        // Allocate first dimension (4 rows)
        int[][] jagged = new int[4][];
        jagged[0] = new int[1]; // row 0 has 1 column
        jagged[1] = new int[2]; // row 1 has 2 columns
        jagged[2] = new int[3]; // row 2 has 3 columns
        jagged[3] = new int[4]; // row 3 has 4 columns

        int count = 0;
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                jagged[i][j] = count++;
                System.out.print(jagged[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
      expectedOutput: `=== 1D ARRAY DEMO ===
April (index 3) has: 30 days.
Total months: 12

=== JAGGED 2D ARRAY DEMO ===
0
1 2
3 4 5
6 7 8 9`,
      examTips:
        'Always mention that Java multidimensional arrays are actually "arrays of arrays", allowing rows of unequal lengths (Jagged Arrays).'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain Inheritance with Types',
      marks: 5,
      syllabusTopic: '3.2 Inheritance - Forms, Syntax, and Types',
      simpleExplanation:
        'Inheritance is an OOP mechanism where a new class (derived/subclass) acquires properties and methods of an existing class (base/superclass) using the "extends" keyword. It enables code reusability, method overriding (runtime polymorphism), and hierarchical classification.',
      keyPoints: [
        'Base Class (Superclass): The class providing its members to derived classes.',
        'Derived Class (Subclass): The class inheriting members and adding custom functionality.',
        'Memory allocation: Whenever a derived class object is created, JVM creates memory for base class members first.',
        'Types of Inheritance in Java:',
        '  1. Single Inheritance: Class B extends Class A (A -> B).',
        '  2. Multilevel Inheritance: Class C extends B, and B extends A (A -> B -> C).',
        '  3. Hierarchical Inheritance: Multiple subclasses inherit one common superclass (A -> B, A -> C, A -> D).',
        '  4. Multiple Inheritance (With Classes): NOT supported in Java to avoid ambiguity (the Diamond Problem). Achieved using Interfaces.',
        '  5. Hybrid Inheritance: Combination of two or more types (e.g., Hierarchical + Single), supported via Interfaces.'
      ],
      syntaxOrDiagram: `// Hierarchy Flow:
Single:       [A] -> [B]
Multilevel:   [A] -> [B] -> [C]
Hierarchical: [A] -> [B], [A] -> [C], [A] -> [D]
Multiple:     [A] + [B] -> [C] (Allowed only with interfaces in Java!)`,
      javaCode: `// Java Program demonstrating Multilevel and Hierarchical Inheritance
class Animal {
    void eat() {
        System.out.println("Animal eats food.");
    }
}

// Single / Multilevel Step 1
class Mammal extends Animal {
    void walk() {
        System.out.println("Mammal walks on land.");
    }
}

// Multilevel Step 2 (Animal -> Mammal -> Dog)
class Dog extends Mammal {
    void bark() {
        System.out.println("Dog barks: Woof Woof!");
    }
}

// Hierarchical Inheritance branch (Animal -> Cat)
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows: Meow Meow!");
    }
}

public class InheritanceTypesDemo {
    public static void main(String[] args) {
        System.out.println("--- Multilevel Test (Dog) ---");
        Dog dog = new Dog();
        dog.eat();   // Inherited from Animal
        dog.walk();  // Inherited from Mammal
        dog.bark();  // Own method

        System.out.println("\\n--- Hierarchical Test (Cat) ---");
        Cat cat = new Cat();
        cat.eat();   // Inherited from Animal
        cat.meow();  // Own method
    }
}`,
      expectedOutput: `--- Multilevel Test (Dog) ---
Animal eats food.
Mammal walks on land.
Dog barks: Woof Woof!

--- Hierarchical Test (Cat) ---
Animal eats food.
Cat meows: Meow Meow!`,
      examTips:
        'Highlight why Java rejects multiple inheritance with classes: method signature collisions (diamond problem). State clearly that interfaces resolve this limitation.'
    }
  },

  // ==================== QUESTION 2 ====================
  {
    id: 2,
    questionNumber: 2,
    unit: 'Unit III',
    title: 'Interfaces & Static Methods in Interfaces',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Interfaces',
      marks: 5,
      syllabusTopic: '3.3 Interface in Java - Declaration and Properties',
      simpleExplanation:
        'An interface in Java is a 100% abstract blueprint of a class containing constants and abstract method declarations. It defines WHAT a class must do, but not HOW. Interfaces allow Java to achieve total abstraction and support multiple inheritance.',
      keyPoints: [
        'Defined using the "interface" keyword; classes use "implements" keyword.',
        'Implicit Modifiers: Fields are implicitly "public static final"; methods are implicitly "public abstract" (prior to Java 8).',
        'Cannot be instantiated directly (cannot do "new InterfaceName()").',
        'Polymorphic References: An interface reference variable can refer to any object whose class implements that interface.',
        'Multiple Inheritance: A single Java class can implement multiple interfaces separated by commas: "class C implements A, B".'
      ],
      syntaxOrDiagram: `access interface InterfaceName {
    // Implicitly public static final:
    int CONSTANT_VAL = 100;

    // Implicitly public abstract:
    void methodName(parameters);
}`,
      javaCode: `// Demonstration of Interfaces and Multiple Interface Implementation
interface Printable {
    void print();
}

interface Showable {
    void show();
}

// Class implementing multiple interfaces
class Document implements Printable, Showable {
    @Override
    public void print() {
        System.out.println("Document printed successfully.");
    }

    @Override
    public void show() {
        System.out.println("Displaying document on screen.");
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        // Accessing implementation through interface reference variable
        Printable p = new Document();
        p.print();

        Showable s = new Document();
        s.show();
    }
}`,
      expectedOutput: `Document printed successfully.
Displaying document on screen.`,
      examTips:
        'Remember that implementing methods in a class MUST be marked with the "public" access specifier, otherwise compiler throws an access restriction error.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Static Methods in Interfaces',
      marks: 5,
      syllabusTopic: '3.3.8 Static Methods in Interfaces (Java 8 Feature)',
      simpleExplanation:
        'Beginning in Java 8, interfaces can contain concrete static methods with method bodies. These static methods provide general utility functions directly related to the interface without needing an implementing object.',
      keyPoints: [
        'Introduced in Java 8 alongside default methods to enhance API usability.',
        'Contains full implementation: Declared with the "static" keyword and contains curly braces {}.',
        'Belongs to the Interface: Interface static methods belong to the interface itself, not to the implementing class.',
        'Cannot be overridden: Implementing classes do not inherit or override static methods of an interface.',
        'Calling convention: Must be invoked exclusively via the interface name: "InterfaceName.methodName()". Calling via an implementing class or object reference produces a compile error.'
      ],
      syntaxOrDiagram: `interface MathUtil {
    // Static method inside interface
    static int cube(int x) {
        return x * x * x;
    }
}

// Invocation syntax:
MathUtil.cube(5); // Correct
new Demo().cube(5); // Compile-time Error!`,
      javaCode: `// Java Program demonstrating Static Methods in Interfaces
interface Calculator {
    // Abstract method
    double calculate(double a, double b);

    // Static utility method inside interface
    static double add(double a, double b) {
        return a + b;
    }

    static double multiply(double a, double b) {
        return a * b;
    }
}

class SimpleCalc implements Calculator {
    @Override
    public double calculate(double a, double b) {
        return a - b; // subtraction
    }
}

public class StaticMethodInterfaceDemo {
    public static void main(String[] args) {
        // 1. Invoking static methods directly using interface name
        double sum = Calculator.add(15.5, 24.5);
        double prod = Calculator.multiply(6, 7);
        System.out.println("Static Add Result: " + sum);
        System.out.println("Static Multiply Result: " + prod);

        // 2. Invoking implemented method
        SimpleCalc sc = new SimpleCalc();
        System.out.println("Instance Calculate (Subtract): " + sc.calculate(50, 20));
    }
}`,
      expectedOutput: `Static Add Result: 40.0
Static Multiply Result: 42.0
Instance Calculate (Subtract): 30.0`,
      examTips:
        'Contrast static methods with default methods: default methods can be overridden by implementing classes; static methods cannot be overridden and belong strictly to the interface.'
    }
  },

  // ==================== QUESTION 3 ====================
  {
    id: 3,
    questionNumber: 3,
    unit: 'Unit IV',
    title: 'Packages & Importing Packages / Exception Handling',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'What is Package? Explain about importing packages',
      marks: 5,
      syllabusTopic: 'Unit IV - Packages & Java Library, Importing & Classpath',
      simpleExplanation:
        'A package in Java is a container or directory that groups related classes, interfaces, and sub-packages. Packages prevent name collisions, provide access control, and promote code modularity and maintainability.',
      keyPoints: [
        'Package Declaration: Defined as the first statement in a source file using keyword "package <packagename>;".',
        'Types of Packages: (1) Built-in API packages (java.lang, java.util, java.io, java.net, java.sql) and (2) User-defined packages.',
        'Compiling Packages: Use "javac -d . FileName.java" where "-d" specifies destination directory (dot . = current folder).',
        'Ways to Import: (1) Fully Qualified Name (e.g. java.util.Scanner sc = ...), (2) Member import (import java.util.Scanner;), (3) Package-wide wildcard (import java.util.*;).',
        'PATH vs CLASSPATH: PATH locates binary executables (.exe) for the OS; CLASSPATH tells the Java ClassLoader where to find .class and .jar files.'
      ],
      syntaxOrDiagram: `// Package statement (first non-comment line in file):
package com.institute.math;

// Import statements:
import com.institute.math.Addition; // Specific class
import com.institute.math.*;        // All classes in package

Directory Structure:
./com/institute/math/Addition.class`,
      javaCode: `// File 1: MathOperations.java (inside user-defined package 'mypack')
/*
package mypack;
public class MathOperations {
    public int add(int a, int b) {
        return a + b;
    }
}
*/

// File 2: MainApp.java (importing from package)
// import mypack.MathOperations;
// import java.util.Date; // Built-in package import

public class PackageDemoApp {
    public static void main(String[] args) {
        System.out.println("=== Built-in Package Demo ===");
        // Method 1: Using import statement
        java.util.Date today = new java.util.Date();
        System.out.println("Today's Date from java.util: " + today);

        // Method 2: Fully qualified class name
        double root = java.lang.Math.sqrt(144);
        System.out.println("Square root via fully qualified name: " + root);

        System.out.println("Simulating user package: mypack.MathOperations successfully compiled with 'javac -d . MathOperations.java'");
    }
}`,
      expectedOutput: `=== Built-in Package Demo ===
Today's Date from java.util: Fri Nov 06 05:40:57 PST 2026
Square root via fully qualified name: 12.0
Simulating user package: mypack.MathOperations successfully compiled with 'javac -d . MathOperations.java'`,
      examTips:
        'State the compilation command "javac -d . ClassName.java" clearly; examiners specifically look for the -d flag in package answers.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Exception Handling',
      marks: 5,
      syllabusTopic: 'Unit IV - Exception Handling Concept & Hierarchy',
      simpleExplanation:
        'Exception handling is a structured mechanism in Java to intercept runtime errors, allowing a program to handle abnormal situations gracefully without terminating abruptly. Every exception in Java is represented as an object derived from the Throwable class.',
      keyPoints: [
        'Exception: An abnormal condition arising at runtime during program execution.',
        'Throwable Class Hierarchy: java.lang.Object -> java.lang.Throwable -> Error (system failures like OutOfMemoryError) and Exception.',
        'Two Categories of Exceptions:',
        '  - Checked Exceptions: Checked at compile-time (e.g., IOException, SQLException). Must be caught or declared with "throws".',
        '  - Unchecked Exceptions: Arise at runtime (subclasses of RuntimeException, e.g., ArithmeticException, NullPointerException).',
        '5 Core Keywords: "try" (monitored code), "catch" (error handler), "finally" (cleanup code), "throw" (explicitly raise error), "throws" (declare propagating exceptions).'
      ],
      syntaxOrDiagram: `Throwable Class Hierarchy:
              Object
                |
            Throwable
           /         \\
      Exception       Error (Irrecoverable, e.g., StackOverflowError)
      /       \\
  Checked    RuntimeException (Unchecked, e.g., NullPointerException)
 Exceptions`,
      javaCode: `// Java Program showing basic Exception Handling
public class ExceptionIntroDemo {
    public static void main(String[] args) {
        System.out.println("Program starting execution...");
        try {
            int numerator = 50;
            int denominator = 0;
            int result = numerator / denominator; // Triggers ArithmeticException
            System.out.println("Result: " + result); // Skipped
        } catch (ArithmeticException e) {
            System.out.println("Caught Exception: Division by zero is undefined!");
            System.out.println("Exception message: " + e.getMessage());
        } finally {
            System.out.println("Finally block: Resources cleaned up successfully.");
        }
        System.out.println("Program continues normal execution after handling exception.");
    }
}`,
      expectedOutput: `Program starting execution...
Caught Exception: Division by zero is undefined!
Exception message: / by zero
Finally block: Resources cleaned up successfully.
Program continues normal execution after handling exception.`,
      examTips:
        'Differentiate between compile-time errors (syntax errors caught by compiler) and runtime errors (exceptions occurring during execution).'
    }
  },

  // ==================== QUESTION 4 ====================
  {
    id: 4,
    questionNumber: 4,
    unit: 'Unit IV',
    title: 'Exception Handling Program & Byte Streams',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Write a JAVA program that describes exception handling mechanism',
      marks: 5,
      syllabusTopic: 'Unit IV - Multi-catch, try-catch-finally, and error recovery',
      simpleExplanation:
        'This Java program demonstrates the complete exception handling mechanism using try, multiple catch blocks (for ArithmeticException, ArrayIndexOutOfBoundsException, and general Exception), and a finally block.',
      keyPoints: [
        'Execution Flow: Code inside try block executes line by line until an exception occurs.',
        'Transfer of Control: The moment an exception is thrown, the rest of the try block is skipped and control jumps to matching catch block.',
        'Multiple Catch Clauses: Java searches catch blocks sequentially from top to bottom (subclass exception must precede superclass exception).',
        'Guaranteed Finally Execution: The finally block executes regardless of whether an exception was thrown or caught.'
      ],
      syntaxOrDiagram: `try {
    // Risky code statements
} catch (SubException e) {
    // Specific handler
} catch (SuperException e) {
    // Generalized fallback handler
} finally {
    // Always runs
}`,
      javaCode: `// Comprehensive Java Program for Exception Handling Mechanism
public class ComprehensiveExceptionMechanism {
    public static void main(String[] args) {
        int[] numbers = { 10, 20, 30 };
        int a = 25, b = 0;

        // Test 1: Arithmetic Exception
        try {
            System.out.println("--- Inside Try Block 1 ---");
            int division = a / b; // Causes ArithmeticException
            System.out.println("Division result: " + division);
        } catch (ArithmeticException ae) {
            System.out.println("Catch 1: Caught ArithmeticException -> " + ae.getMessage());
        } finally {
            System.out.println("Finally 1: Executed unconditionally.\\n");
        }

        // Test 2: Array Index & Multiple Catch Demonstration
        try {
            System.out.println("--- Inside Try Block 2 ---");
            System.out.println("Accessing index 5: " + numbers[5]); // Causes ArrayIndexOutOfBoundsException
        } catch (ArithmeticException ae) {
            System.out.println("Catch: Arithmetic error.");
        } catch (ArrayIndexOutOfBoundsException aiobe) {
            System.out.println("Catch 2: Caught ArrayIndexOutOfBoundsException -> " + aiobe.getMessage());
        } catch (Exception e) {
            System.out.println("Catch General: " + e);
        } finally {
            System.out.println("Finally 2: Cleanup completed.");
        }

        System.out.println("\\nApplication terminated gracefully with exit code 0.");
    }
}`,
      expectedOutput: `--- Inside Try Block 1 ---
Catch 1: Caught ArithmeticException -> / by zero
Finally 1: Executed unconditionally.

--- Inside Try Block 2 ---
Catch 2: Caught ArrayIndexOutOfBoundsException -> Index 5 out of bounds for length 3
Finally 2: Cleanup completed.

Application terminated gracefully with exit code 0.`,
      examTips:
        'Make sure to point out that statements after the crashing line inside the try block are NEVER executed.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain Byte streams with Example',
      marks: 5,
      syllabusTopic: 'Unit IV - Java I/O Streams (Byte Streams vs Character Streams)',
      simpleExplanation:
        'Byte streams in Java process input and output of raw 8-bit bytes. They are ideal for handling binary data such as image files, audio, video, or executing raw file byte copying. All byte stream classes inherit from the abstract superclasses InputStream and OutputStream.',
      keyPoints: [
        '8-Bit Processing: Reads and writes data 1 byte (8 bits) at a time.',
        'Core Abstract Classes: java.io.InputStream (for input) and java.io.OutputStream (for output).',
        'Common Subclasses: FileInputStream, FileOutputStream, ByteArrayInputStream, ByteArrayOutputStream, BufferedInputStream.',
        'Key Methods: read() returns byte as int (-1 indicates End Of File / EOF), write(int b), write(byte[] b), flush(), close().',
        'Try-with-resources: Modern Java ensures streams are safely auto-closed at the end of block.'
      ],
      syntaxOrDiagram: `Byte Stream Class Hierarchy:
            InputStream                   OutputStream
                 |                              |
         FileInputStream                FileOutputStream
                 |                              |
       BufferedInputStream            BufferedOutputStream`,
      javaCode: `// Java Program demonstrating Byte Streams using ByteArrayInputStream & ByteArrayOutputStream
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class ByteStreamDemo {
    public static void main(String[] args) {
        String originalData = "Hello, Java Byte Streams!";
        byte[] inputBytes = originalData.getBytes();

        System.out.println("Original String: " + originalData);
        System.out.println("Total Bytes: " + inputBytes.length);

        // Reading byte stream via ByteArrayInputStream
        try (ByteArrayInputStream inStream = new ByteArrayInputStream(inputBytes);
             ByteArrayOutputStream outStream = new ByteArrayOutputStream()) {

            int byteData;
            // read() returns each byte (0-255) or -1 at EOF
            while ((byteData = inStream.read()) != -1) {
                // Write byte in uppercase representation
                outStream.write(Character.toUpperCase((char) byteData));
            }

            // Convert accumulated byte stream back to string
            String processedData = outStream.toString();
            System.out.println("Transferred & Uppercased Byte Data: " + processedData);

        } catch (IOException e) {
            System.err.println("I/O Error: " + e.getMessage());
        }
    }
}`,
      expectedOutput: `Original String: Hello, Java Byte Streams!
Total Bytes: 26
Transferred & Uppercased Byte Data: HELLO, JAVA BYTE STREAMS!`,
      examTips:
        'Contrast Byte Streams (8-bit bytes, InputStream/OutputStream) with Character Streams (16-bit Unicode characters, Reader/Writer).'
    }
  },

  // ==================== QUESTION 5 ====================
  {
    id: 5,
    questionNumber: 5,
    unit: 'Unit V',
    title: 'Thread Class & JDBC Architecture',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Thread Class',
      marks: 5,
      syllabusTopic: 'Unit V - Multithreaded Programming: Thread Class and Creation',
      simpleExplanation:
        'The java.lang.Thread class provides constructors and methods to create, manage, and perform operations on independent paths of code execution (threads). Thread extends Object and implements the Runnable interface.',
      keyPoints: [
        'Main Thread: Every Java application has a main thread created automatically by JVM.',
        'Thread Creation Methods: (1) By extending Thread class and overriding run(), (2) By implementing the Runnable interface.',
        'Common Constructors: Thread(), Thread(String name), Thread(Runnable r), Thread(Runnable r, String name).',
        'Crucial Methods: start() (allocates CPU thread and invokes run()), run() (entry point for thread task), sleep(ms), join(), currentThread(), getPriority(), setPriority(int), isAlive(), yield().',
        'Thread Priorities: Integer values ranging from Thread.MIN_PRIORITY (1) to Thread.MAX_PRIORITY (10); default is Thread.NORM_PRIORITY (5).'
      ],
      syntaxOrDiagram: `// Creating thread by extending Thread:
class MyThread extends Thread {
    public void run() {
        // Thread work here
    }
}
MyThread t = new MyThread();
t.start(); // Note: start() creates separate call stack; do NOT call run() directly!`,
      javaCode: `// Java Program demonstrating Thread Class features and methods
class WorkerThread extends Thread {
    WorkerThread(String name, int priority) {
        super(name);
        setPriority(priority);
    }

    @Override
    public void run() {
        System.out.println("Thread started: " + getName() + " | Priority: " + getPriority());
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " executing step " + i);
            try {
                Thread.sleep(150); // Pause for 150ms
            } catch (InterruptedException e) {
                System.out.println(getName() + " interrupted.");
            }
        }
        System.out.println("Thread finished: " + getName());
    }
}

public class ThreadClassDemo {
    public static void main(String[] args) {
        // Main Thread inspection
        Thread mainThread = Thread.currentThread();
        System.out.println("Current Main Thread: " + mainThread.getName() + " [Priority: " + mainThread.getPriority() + "]");

        // Creating child threads using Thread subclass
        WorkerThread t1 = new WorkerThread("FastWorker", Thread.MAX_PRIORITY);
        WorkerThread t2 = new WorkerThread("NormalWorker", Thread.NORM_PRIORITY);

        t1.start();
        t2.start();

        try {
            t1.join(); // Wait for t1 to complete
            t2.join(); // Wait for t2 to complete
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("All threads finished. Main thread ends.");
    }
}`,
      expectedOutput: `Current Main Thread: main [Priority: 5]
Thread started: FastWorker | Priority: 10
FastWorker executing step 1
Thread started: NormalWorker | Priority: 5
NormalWorker executing step 1
FastWorker executing step 2
NormalWorker executing step 2
FastWorker executing step 3
NormalWorker executing step 3
Thread finished: FastWorker
Thread finished: NormalWorker
All threads finished. Main thread ends.`,
      examTips:
        'Emphasize the difference between calling start() vs run(): calling run() directly simply executes the method synchronously in the same thread without spawning a new thread.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about JDBC Architecture',
      marks: 5,
      syllabusTopic: 'Unit V - Java Database Connectivity (JDBC) Architecture & Drivers',
      simpleExplanation:
        'JDBC (Java Database Connectivity) is an industry-standard Java API from Sun Microsystems that allows Java applications to connect, execute SQL commands, and interact with relational databases independently of database vendor specifics.',
      keyPoints: [
        'Two-Tier Architecture Model: Comprises the JDBC API (application level) and the JDBC Driver API (driver level).',
        'Application Layer: Java programs call standard methods defined in the java.sql package.',
        'DriverManager: Manages database driver instances and handles connection requests from applications.',
        'Driver Layer (4 Types of JDBC Drivers):',
        '  - Type 1: JDBC-ODBC Bridge Driver (translates JDBC to ODBC, slow, obsolete).',
        '  - Type 2: Native-API Driver (partly Java, uses client-side C/C++ DB libraries).',
        '  - Type 3: Network-Protocol Driver (pure Java client talking to middleware server).',
        '  - Type 4: Thin Driver / Direct-to-Database Pure Java Driver (recommended, fast, portable, e.g. MySQL Connector/J).',
        'Core java.sql Interfaces: Driver, Connection, Statement, PreparedStatement, CallableStatement, ResultSet.'
      ],
      syntaxOrDiagram: `+-----------------------------------------------+
|             Java Application                  |
+-----------------------------------------------+
                       |
                       v
+-----------------------------------------------+
|         JDBC API (java.sql / javax.sql)       |
+-----------------------------------------------+
                       |
                       v
+-----------------------------------------------+
|               JDBC DriverManager              |
+-----------------------------------------------+
                       |
                       v
+-----------------------------------------------+
|       JDBC Driver (e.g., MySQL Thin Driver)   |
+-----------------------------------------------+
                       |
                       v
+-----------------------------------------------+
|      Database (MySQL, Oracle, PostgreSQL)     |
+-----------------------------------------------+`,
      javaCode: `// Java Program showing typical JDBC architecture usage with java.sql interfaces
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCArchitectureDemo {
    public static void main(String[] args) {
        System.out.println("=== JDBC Architecture Components ===");
        System.out.println("1. Driver Registration (Class.forName)");
        System.out.println("2. Connection Management (DriverManager.getConnection)");
        System.out.println("3. SQL Execution (Statement / PreparedStatement)");
        System.out.println("4. Result Processing (ResultSet)");

        // Conceptual representation of JDBC Code:
        String url = "jdbc:mysql://localhost:3306/university_db";
        String user = "root";
        String password = "password123";

        System.out.println("\\nSimulating JDBC Workflow:");
        System.out.println("Connecting to: " + url);
        System.out.println("Executing Query: SELECT roll_no, name, branch FROM students;");
        System.out.println("Iterating through ResultSet:");
        System.out.println("Row 1: [2415, 'Vahida', 'CSE']");
        System.out.println("Row 2: [117,  'Sai',    'ECE']");
        System.out.println("Connection closed safely.");
    }
}`,
      expectedOutput: `=== JDBC Architecture Components ===
1. Driver Registration (Class.forName)
2. Connection Management (DriverManager.getConnection)
3. SQL Execution (Statement / PreparedStatement)
4. Result Processing (ResultSet)

Simulating JDBC Workflow:
Connecting to: jdbc:mysql://localhost:3306/university_db
Executing Query: SELECT roll_no, name, branch FROM students;
Iterating through ResultSet:
Row 1: [2415, 'Vahida', 'CSE']
Row 2: [117,  'Sai',    'ECE']
Connection closed safely.`,
      examTips:
        'Draw the 4-tier layer diagram in your exam paper: Application -> JDBC API -> DriverManager -> JDBC Driver -> Database. Mention the 4 driver types.'
    }
  },

  // ==================== QUESTION 6 ====================
  {
    id: 6,
    questionNumber: 6,
    unit: 'Unit V',
    title: 'Inter-thread Communication & Mouse Events',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain Inter-thread Communication',
      marks: 5,
      syllabusTopic: 'Unit V - Inter-thread Communication (wait, notify, notifyAll)',
      simpleExplanation:
        'Inter-thread communication is a mechanism where synchronized threads communicate with each other using wait(), notify(), and notifyAll() methods of the Object class. It avoids CPU polling/busy-waiting in producer-consumer scenarios.',
      keyPoints: [
        'Belongs to Object class: wait(), notify(), and notifyAll() are methods of java.lang.Object (not Thread) because they operate on object locks/monitors.',
        'Must be in Synchronized Context: These methods can only be called from within a synchronized block or synchronized method; otherwise IllegalMonitorStateException is thrown.',
        'wait(): Causes the current thread to release the lock and enter the waiting state until another thread invokes notify() or notifyAll() on the same monitor.',
        'notify(): Wakes up a single thread waiting on that object monitor.',
        'notifyAll(): Wakes up all threads waiting on that object monitor.',
        'No CPU wastage: Waiting threads are idle and do not consume CPU cycles.'
      ],
      syntaxOrDiagram: `Producer Thread                    Consumer Thread
       |                                  |
1. Acquires lock on buffer                |
2. Produces data                          |
3. Calls buffer.notify()                  |
4. Releases lock                          |
                                  5. Wakes up and acquires lock
                                  6. Consumes data
                                  7. Calls buffer.wait() (if empty)`,
      javaCode: `// Java Program demonstrating Inter-Thread Communication (Producer - Consumer)
class SharedBuffer {
    private int data;
    private boolean available = false;

    // Consumer method
    public synchronized int get() {
        while (!available) {
            try {
                System.out.println("Consumer: Waiting for data...");
                wait(); // Releases lock and pauses until producer notifies
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        available = false;
        System.out.println("Consumer: Consumed -> " + data);
        notify(); // Notify producer that slot is empty
        return data;
    }

    // Producer method
    public synchronized void put(int value) {
        while (available) {
            try {
                System.out.println("Producer: Buffer full, waiting...");
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        data = value;
        available = true;
        System.out.println("Producer: Produced -> " + data);
        notify(); // Notify waiting consumer
    }
}

public class InterThreadCommunicationDemo {
    public static void main(String[] args) {
        SharedBuffer buffer = new SharedBuffer();

        // Producer Thread
        Thread producer = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                buffer.put(i * 10);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        });

        // Consumer Thread
        Thread consumer = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                buffer.get();
                try { Thread.sleep(150); } catch (InterruptedException e) {}
            }
        });

        consumer.start();
        producer.start();
    }
}`,
      expectedOutput: `Consumer: Waiting for data...
Producer: Produced -> 10
Consumer: Consumed -> 10
Producer: Produced -> 20
Consumer: Consumed -> 20
Producer: Produced -> 30
Consumer: Consumed -> 30`,
      examTips:
        'Explain why wait(), notify(), and notifyAll() are in Object class rather than Thread: because locks are associated with objects (monitors), not individual threads.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Mouse Events',
      marks: 5,
      syllabusTopic: 'Unit V - Event Handling: MouseListener and MouseMotionListener',
      simpleExplanation:
        'Mouse events are generated when the user clicks, presses, releases, enters, exits, or moves the mouse over a component. In Java GUI (AWT/Swing), mouse events are represented by MouseEvent and handled via MouseListener and MouseMotionListener interfaces.',
      keyPoints: [
        'Event Class: java.awt.event.MouseEvent encapsulates details like X/Y coordinates, button clicked, and click counts.',
        'MouseListener Interface (5 methods):',
        '  - mouseClicked(MouseEvent e): Triggered when clicked (pressed + released).',
        '  - mousePressed(MouseEvent e): Triggered when button is pressed down.',
        '  - mouseReleased(MouseEvent e): Triggered when button is released.',
        '  - mouseEntered(MouseEvent e): Triggered when mouse cursor enters component boundaries.',
        '  - mouseExited(MouseEvent e): Triggered when mouse cursor leaves component boundaries.',
        'MouseMotionListener Interface (2 methods):',
        '  - mouseMoved(MouseEvent e): Cursor moves without button pressed.',
        '  - mouseDragged(MouseEvent e): Cursor moves while button is pressed.',
        'MouseAdapter: An abstract adapter class providing empty implementations so developers only override needed methods.'
      ],
      syntaxOrDiagram: `Component (Source)
      |
      | (User clicks/drags mouse)
      v
MouseEvent Object (contains getX(), getY(), getButton())
      |
      +---> MouseListener (clicked, pressed, released, entered, exited)
      +---> MouseMotionListener (moved, dragged)`,
      javaCode: `// Java Program showing Mouse Event Handling structure using MouseAdapter
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

public class MouseEventsDemo {
    public static void main(String[] args) {
        System.out.println("=== Java Mouse Events Architecture ===");

        // Simulating MouseListener implementation
        MouseListener listener = new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                System.out.println("Mouse Clicked at: (" + e.getX() + ", " + e.getY() + ") | Clicks: " + e.getClickCount());
            }

            @Override
            public void mouseEntered(MouseEvent e) {
                System.out.println("Mouse entered component region.");
            }

            @Override
            public void mouseExited(MouseEvent e) {
                System.out.println("Mouse exited component region.");
            }
        };

        System.out.println("Simulating Mouse Events on a Dummy Component:");
        // Creating mock event for demonstration
        java.awt.Component dummyComp = new java.awt.Label();
        MouseEvent clickEvt = new MouseEvent(dummyComp, MouseEvent.MOUSE_CLICKED, System.currentTimeMillis(), 0, 142, 85, 1, false);
        MouseEvent enterEvt = new MouseEvent(dummyComp, MouseEvent.MOUSE_ENTERED, System.currentTimeMillis(), 0, 0, 0, 0, false);

        listener.mouseEntered(enterEvt);
        listener.mouseClicked(clickEvt);
    }
}`,
      expectedOutput: `=== Java Mouse Events Architecture ===
Simulating Mouse Events on a Dummy Component:
Mouse entered component region.
Mouse Clicked at: (142, 85) | Clicks: 1`,
      examTips:
        'Mention the convenience of MouseAdapter: it prevents clutter by allowing you to override only the required methods instead of implementing all 5 methods of MouseListener.'
    }
  },

  // ==================== QUESTION 7 ====================
  {
    id: 7,
    questionNumber: 7,
    unit: 'Unit III',
    title: 'Operations of Arrays & Method Overriding',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain operations of Arrays',
      marks: 5,
      syllabusTopic: '3.1.5 Operations on Array Elements, Search & Sort',
      simpleExplanation:
        'Arrays support fundamental data processing operations: element traversal, insertion, deletion, assignment/reference copying, searching (Linear vs Binary), and sorting (Bubble, Selection, Quick Sort).',
      keyPoints: [
        'Traversal: Iterating through elements using standard for loop or enhanced for-each loop.',
        'Array Assignment (b = a): Assigns the reference, NOT a copy. Modifying b will also modify a.',
        'Searching:',
        '  - Linear Search: Sequential check of each element from index 0 to n-1 (works on unsorted arrays, O(n)).',
        '  - Binary Search: Fast divide-and-conquer on sorted arrays (O(log n)).',
        'Sorting: Rearranging elements in ascending/descending order (Bubble sort, Selection sort, Arrays.sort()).',
        'Cloning / Copying: Real copies created using .clone(), System.arraycopy(), or Arrays.copyOf().'
      ],
      syntaxOrDiagram: `// Reference assignment (Shares memory):
int[] a = { 1, 8, 3 };
int[] b = a; // b points to the SAME memory as a!
b[0] = 99;   // a[0] also becomes 99!

// True copy:
int[] c = a.clone(); // Separate memory allocated`,
      javaCode: `// Java Program demonstrating Array Operations: Traversal, Reference Assignment, and Sorting
public class ArrayOperationsDemo {
    public static void main(String[] args) {
        int[] original = { 64, 25, 12, 22, 11 };

        System.out.println("--- 1. Array Traversal ---");
        for (int val : original) {
            System.out.print(val + " ");
        }
        System.out.println();

        System.out.println("\\n--- 2. Bubble Sort Operation ---");
        int n = original.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (original[j] > original[j + 1]) {
                    // Swap
                    int temp = original[j];
                    original[j] = original[j + 1];
                    original[j + 1] = temp;
                }
            }
        }
        System.out.print("Sorted Array: ");
        for (int val : original) {
            System.out.print(val + " ");
        }
        System.out.println();

        System.out.println("\\n--- 3. Reference Assignment Effect ---");
        int[] ref = original; // Only reference copied
        ref[0] = 999;
        System.out.println("ref[0] modified to 999 -> original[0] is now: " + original[0]);
    }
}`,
      expectedOutput: `--- 1. Array Traversal ---
64 25 12 22 11

--- 2. Bubble Sort Operation ---
Sorted Array: 11 12 22 25 64

--- 3. Reference Assignment Effect ---
ref[0] modified to 999 -> original[0] is now: 999`,
      examTips:
        'Clearly distinguish between reference copying (b = a) and value copying (clone / System.arraycopy) to earn full marks.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Method Overriding',
      marks: 5,
      syllabusTopic: '3.2.8 Method Overriding & Dynamic Method Dispatch',
      simpleExplanation:
        'Method Overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. It enables runtime polymorphism (Dynamic Method Dispatch) where method calls are resolved at runtime based on the actual object type.',
      keyPoints: [
        'Method Signature Match: Must have the exact same method name, return type (or covariant), and parameter list.',
        'Access Specifier Rule: The subclass method cannot have a more restrictive access modifier than the superclass method.',
        'Cannot Override: Methods marked static, private, or final CANNOT be overridden.',
        'Keyword super: Subclass can invoke the superclass version using "super.methodName()".',
        'Dynamic Method Dispatch: When a superclass reference variable refers to a subclass object, Java invokes the subclass overridden method.'
      ],
      syntaxOrDiagram: `SuperClass ref = new SubClass();
ref.display(); // Resolves to SubClass.display() at RUNTIME!

Overloading vs Overriding:
- Overloading: Same class, same name, different parameters (Compile-time).
- Overriding: Superclass & Subclass, same name, identical parameters (Runtime).`,
      javaCode: `// Java Program demonstrating Method Overriding & Dynamic Method Dispatch
class Bank {
    double getInterestRate() {
        return 0.0;
    }
}

class SBI extends Bank {
    @Override
    double getInterestRate() {
        return 7.5;
    }
}

class HDFC extends Bank {
    @Override
    double getInterestRate() {
        return 8.2;
    }
}

public class MethodOverridingDemo {
    public static void main(String[] args) {
        // Superclass reference variable pointing to subclass objects
        Bank myBank;

        myBank = new SBI();
        System.out.println("SBI Interest Rate: " + myBank.getInterestRate() + "%");

        myBank = new HDFC();
        System.out.println("HDFC Interest Rate: " + myBank.getInterestRate() + "%");
    }
}`,
      expectedOutput: `SBI Interest Rate: 7.5%
HDFC Interest Rate: 8.2%`,
      examTips:
        'Always include the table comparing Method Overloading vs Method Overriding in 10-mark answers.'
    }
  },

  // ==================== QUESTION 8 ====================
  {
    id: 8,
    questionNumber: 8,
    unit: 'Unit III',
    title: 'Implementation of Interface & Functional Interfaces',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain Implementation of Interface',
      marks: 5,
      syllabusTopic: '3.3.3 Implementing Interfaces & Multiple Interfaces',
      simpleExplanation:
        'To use an interface, a class must "implement" it using the implements clause. The implementing class must provide concrete method bodies for all abstract methods declared in the interface, using the public access specifier.',
      keyPoints: [
        'The "implements" keyword connects the class to the interface contract.',
        'All interface abstract methods MUST be declared "public" in the implementing class.',
        'Multiple Interfaces: A class can implement multiple interfaces: "class A implements B, C, D".',
        'Partial Implementation: If a class fails to implement all methods of an interface, it must be declared "abstract".',
        'Interface Reference Variable: An interface type can be used as a reference variable to hold any instance of an implementing class.'
      ],
      syntaxOrDiagram: `class ClassName [extends SuperClass] implements Interface1, Interface2 {
    // Implementations with public modifier
    public void methodFromInterface1() { ... }
    public void methodFromInterface2() { ... }
}`,
      javaCode: `// Java Program showing Interface Implementation and Interface References
interface Vehicle {
    void start();
    void stop();
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car engine started with key turn.");
    }

    @Override
    public void stop() {
        System.out.println("Car disc brakes applied. Vehicle stopped.");
    }

    // Additional class-specific method
    public void playMusic() {
        System.out.println("Playing FM radio inside car.");
    }
}

public class InterfaceImplementationDemo {
    public static void main(String[] args) {
        // Polymorphic reference
        Vehicle v = new Car();
        v.start();
        v.stop();

        // Class reference to call class-specific methods
        Car myCar = (Car) v;
        myCar.playMusic();
    }
}`,
      expectedOutput: `Car engine started with key turn.
Car disc brakes applied. Vehicle stopped.
Playing FM radio inside car.`,
      examTips:
        'Point out that interface variables are implicitly "public static final", acting as compile-time constants.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Functional Interfaces',
      marks: 5,
      syllabusTopic: '3.3.9 Functional Interfaces & @FunctionalInterface (Java 8)',
      simpleExplanation:
        'A Functional Interface is an interface that contains exactly ONE abstract method (also known as Single Abstract Method / SAM interface). They serve as the target types for Lambda Expressions and Method References in Java 8+.',
      keyPoints: [
        'Single Abstract Method (SAM): Can have only one abstract method.',
        'Default & Static Methods: Allowed to have any number of default and static methods without losing functional interface status.',
        '@FunctionalInterface Annotation: Optional annotation that directs the compiler to generate an error if more than one abstract method is present.',
        'Built-in Functional Interfaces: Runnable (run()), Comparable (compareTo()), ActionListener (actionPerformed()), Predicate, Function, Consumer.',
        'Lambda Expression Syntax: (arguments) -> { body }.'
      ],
      syntaxOrDiagram: `@FunctionalInterface
interface Square {
    int calculate(int x); // Exactly ONE abstract method
}

// Lambda Implementation:
Square sq = (x) -> x * x;`,
      javaCode: `// Java Program demonstrating Functional Interface with Lambda Expression
@FunctionalInterface
interface Operation {
    int compute(int a, int b); // Single Abstract Method
}

public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        // 1. Implementing using Lambda Expression (Addition)
        Operation addition = (a, b) -> a + b;

        // 2. Implementing using Lambda Expression (Multiplication)
        Operation multiplication = (a, b) -> a * b;

        System.out.println("Addition (10 + 20): " + addition.compute(10, 20));
        System.out.println("Multiplication (6 * 7): " + multiplication.compute(6, 7));

        // Built-in Functional Interface demonstration: Runnable
        Runnable r = () -> System.out.println("Runnable Functional Interface executing via Lambda!");
        r.run();
    }
}`,
      expectedOutput: `Addition (10 + 20): 30
Multiplication (6 * 7): 42
Runnable Functional Interface executing via Lambda!`,
      examTips:
        'Mention that attempting to add a second abstract method to an interface marked @FunctionalInterface results in a compile-time error.'
    }
  },

  // ==================== QUESTION 9 ====================
  {
    id: 9,
    questionNumber: 9,
    unit: 'Unit IV',
    title: 'Wrapper Classes & Exception Handling Keywords',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Illustrate Wrapper Classes',
      marks: 5,
      syllabusTopic: 'Unit IV - Wrapper Classes, Parsing, and Type Conversion',
      simpleExplanation:
        'Wrapper classes in java.lang encapsulate primitive data types into object representations. This allows primitive values to participate in object-centric operations like Java Collections (ArrayList, HashMap), serialization, and multithreading locks.',
      keyPoints: [
        'Mapping Table: byte->Byte, short->Short, int->Integer, long->Long, float->Float, double->Double, char->Character, boolean->Boolean.',
        'Conversion Methods:',
        '  - Primitive to Object: Integer.valueOf(x) or new Integer(x).',
        '  - Object to Primitive: obj.intValue(), obj.doubleValue(), obj.byteValue().',
        '  - String to Primitive: Integer.parseInt("123"), Double.parseDouble("45.67").',
        '  - Primitive to String: Integer.toString(123), String.valueOf(true).',
        'Immutability: All wrapper class instances are immutable once instantiated.'
      ],
      syntaxOrDiagram: `Primitive Data Types                Wrapper Object Types
--------------------                --------------------
int       ======== valueOf() ========>  Integer
double    <======= doubleValue() =====  Double
char      ===========================>  Character
boolean   <===========================  Boolean`,
      javaCode: `// Java Program illustrating Wrapper Class Operations
public class WrapperClassDemo {
    public static void main(String[] args) {
        // 1. Primitive to Wrapper Object (Boxing / valueOf)
        int primitiveInt = 450;
        Integer boxedInt = Integer.valueOf(primitiveInt);

        // 2. Wrapper Object to Primitive (Unboxing / intValue)
        int extractedInt = boxedInt.intValue();

        // 3. Parsing String into Primitive
        String numString = "789";
        int parsedVal = Integer.parseInt(numString);
        double parsedDouble = Double.parseDouble("123.45");

        // 4. Utility Constants & Methods
        System.out.println("Boxed Integer: " + boxedInt);
        System.out.println("Extracted Primitive: " + extractedInt);
        System.out.println("Parsed String '789' + 11 = " + (parsedVal + 11));
        System.out.println("Parsed Double: " + parsedDouble);
        System.out.println("Integer Max Value: " + Integer.MAX_VALUE);
        System.out.println("Binary representation of 450: " + Integer.toBinaryString(primitiveInt));
    }
}`,
      expectedOutput: `Boxed Integer: 450
Extracted Primitive: 450
Parsed String '789' + 11 = 800
Parsed Double: 123.45
Integer Max Value: 2147483647
Binary representation of 450: 111000010`,
      examTips:
        'Draw the 8 primitive-to-wrapper mapping table and write both parseInt() and valueOf() methods clearly.'
    }
    ,
    partB: {
      subQuestion: 'b',
      title: 'Explain about Keywords throws and throw, try, catch, and finally Blocks',
      marks: 5,
      syllabusTopic: 'Unit IV - Exception Handling 5 Keywords',
      simpleExplanation:
        'Java manages runtime errors using five primary keywords: "try" encapsulates risky code; "catch" catches and processes exceptions; "finally" always executes for resource cleanup; "throw" explicitly triggers an exception object; and "throws" declares that a method may propagate exceptions to its caller.',
      keyPoints: [
        'try: Encloses statements that might throw an exception.',
        'catch: Immediately follows try block to catch and handle the specific exception type.',
        'finally: Clean-up block that executes unconditionally (even if a return statement is encountered in try/catch).',
        'throw: Used inside a method body to throw a specific exception instance explicitly: "throw new ArithmeticException("error");".',
        'throws: Used in method signature to declare checked exceptions that the method does not handle itself.',
        'throw vs throws: "throw" is used inside method bodies to raise an error; "throws" is part of the method header to declare potential errors.'
      ],
      syntaxOrDiagram: `returnType methodName() throws Exception1, Exception2 { // throws in signature
    try {
        if (errorCondition) {
            throw new Exception1("Explicitly thrown!"); // throw inside body
        }
    } catch (Exception1 e) {
        // catch block handles it
    } finally {
        // cleanup block always runs
    }
}`,
      javaCode: `// Java Program showing all 5 Exception Keywords: try, catch, finally, throw, and throws
public class FiveKeywordsDemo {

    // 'throws' declares that this method may propagate an exception
    static void validateAge(int age) throws IllegalArgumentException {
        if (age < 18) {
            // 'throw' explicitly creates and raises an exception
            throw new IllegalArgumentException("Age " + age + " is ineligible to vote!");
        } else {
            System.out.println("Age " + age + " is valid for voting.");
        }
    }

    public static void main(String[] args) {
        // 'try' block monitors potential exceptions
        try {
            System.out.println("Testing age: 15");
            validateAge(15);
        }
        // 'catch' block handles the thrown exception
        catch (IllegalArgumentException e) {
            System.err.println("Caught in Catch: " + e.getMessage());
        }
        // 'finally' block executes regardless of outcome
        finally {
            System.out.println("Finally Block: Audit log completed.\\n");
        }

        // Test with valid age
        try {
            System.out.println("Testing age: 21");
            validateAge(21);
        } catch (IllegalArgumentException e) {
            System.err.println("Caught in Catch: " + e.getMessage());
        } finally {
            System.out.println("Finally Block: Second audit completed.");
        }
    }
}`,
      expectedOutput: `Testing age: 15
Caught in Catch: Age 15 is ineligible to vote!
Finally Block: Audit log completed.

Testing age: 21
Age 21 is valid for voting.
Finally Block: Second audit completed.`,
      examTips:
        'Include a comparison table between "throw" and "throws" (Usage, Location, Syntax, Number of exceptions allowed).'
    }
  },

  // ==================== QUESTION 10 ====================
  {
    id: 10,
    questionNumber: 10,
    unit: 'Unit IV',
    title: 'Standard I/O Streams & Scanner Classes with Files',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain about standard I/O streams',
      marks: 5,
      syllabusTopic: 'Unit IV - Standard I/O Streams in java.lang.System',
      simpleExplanation:
        'Java provides three standard predefined stream objects in the java.lang.System class: System.in (standard input), System.out (standard output), and System.err (standard error). They are automatically opened when a program starts.',
      keyPoints: [
        'System.in: Instance of java.io.InputStream. Reads raw input from the console/keyboard.',
        'System.out: Instance of java.io.PrintStream. Directs normal program output to the console display.',
        'System.err: Instance of java.io.PrintStream. Directs diagnostic error messages and warnings to the console.',
        'Redirection: While System.out and System.err both display to terminal by default, System.err can be redirected separately in command line to an error log file.',
        'Wrapping System.in: Because System.in reads raw bytes, it is commonly wrapped inside InputStreamReader and BufferedReader, or used with Scanner.'
      ],
      syntaxOrDiagram: `System.in   --> InputStream  (Reads bytes from keyboard)
System.out  --> PrintStream  (Prints regular output to console)
System.err  --> PrintStream  (Prints error messages to console)`,
      javaCode: `// Java Program demonstrating Standard I/O Streams: System.in, System.out, and System.err
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class StandardStreamsDemo {
    public static void main(String[] args) {
        // 1. Using System.out
        System.out.println("=== System.out: Standard Output Stream ===");
        System.out.println("This is normal output text.");

        // 2. Using System.err
        System.err.println("=== System.err: Standard Error Stream ===");
        System.err.println("Warning: This is a diagnostic error message.");

        // 3. Simulating reading from System.in via BufferedReader
        System.out.println("\\nReading byte from System.in representation:");
        try {
            // Note: Demonstrating stream wrap mechanism
            InputStreamReader isr = new InputStreamReader(System.in);
            System.out.println("InputStreamReader connected to System.in successfully.");
        } catch (Exception e) {
            System.err.println("Stream error: " + e.getMessage());
        }
    }
}`,
      expectedOutput: `=== System.out: Standard Output Stream ===
This is normal output text.
=== System.err: Standard Error Stream ===
Warning: This is a diagnostic error message.

Reading byte from System.in representation:
InputStreamReader connected to System.in successfully.`,
      examTips:
        'State clearly that System.in is an InputStream, whereas System.out and System.err are PrintStream objects.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Scanner classes and Files',
      marks: 5,
      syllabusTopic: 'Unit IV - java.util.Scanner & java.io.File Integration',
      simpleExplanation:
        'java.util.Scanner is a high-level text parser that breaks input into tokens using whitespace or regex delimiters and parses primitive types directly. When paired with java.io.File, Scanner enables simple, line-by-line file reading.',
      keyPoints: [
        'Package: Located in java.util.Scanner; requires java.io.File or System.in.',
        'Parsing Methods: nextInt(), nextDouble(), nextBoolean(), next(), nextLine().',
        'Inspection Methods: hasNext(), hasNextInt(), hasNextLine(). Useful to prevent InputMismatchException or NoSuchElementException.',
        'File Reading: "Scanner sc = new Scanner(new File("filename.txt"));".',
        'Resource Management: Must call sc.close() or use try-with-resources to release underlying file handles.'
      ],
      syntaxOrDiagram: `File file = new File("data.txt");
try (Scanner sc = new Scanner(file)) {
    while (sc.hasNextLine()) {
        String line = sc.nextLine();
    }
}`,
      javaCode: `// Java Program showing Scanner reading from String and File representation
import java.util.Scanner;

public class ScannerFileDemo {
    public static void main(String[] args) {
        // 1. Scanner with String buffer (simulating file records: ID Name Score)
        String fileContent = "101 Alice 95.5\\n102 Bob 88.0\\n103 Charlie 92.4";

        System.out.println("=== Parsing Formatted File Data with Scanner ===");
        try (Scanner fileScanner = new Scanner(fileContent)) {
            while (fileScanner.hasNext()) {
                int id = fileScanner.nextInt();
                String name = fileScanner.next();
                double score = fileScanner.nextDouble();

                System.out.printf("Student ID: %d | Name: %-8s | Score: %.1f%n", id, name, score);
            }
        }

        // 2. Scanner delimiter demonstration
        System.out.println("\\n=== Custom Delimiter (CSV) ===");
        String csvData = "Java,Python,C++,JavaScript";
        try (Scanner csvScanner = new Scanner(csvData).useDelimiter(",")) {
            while (csvScanner.hasNext()) {
                System.out.println("Tech: " + csvScanner.next());
            }
        }
    }
}`,
      expectedOutput: `=== Parsing Formatted File Data with Scanner ===
Student ID: 101 | Name: Alice    | Score: 95.5
Student ID: 102 | Name: Bob      | Score: 88.0
Student ID: 103 | Name: Charlie  | Score: 92.4

=== Custom Delimiter (CSV) ===
Tech: Java
Tech: Python
Tech: C++
Tech: JavaScript`,
      examTips:
        'Mention the difference between next() (reads single token until whitespace) and nextLine() (reads entire line including spaces).'
    }
  },

  // ==================== QUESTION 11 ====================
  {
    id: 11,
    questionNumber: 11,
    unit: 'Unit V',
    title: 'Class StringBuffer & Deadlock and Race Situations',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Class String Buffer',
      marks: 5,
      syllabusTopic: 'Unit V - Class StringBuffer, Mutability, Capacity, and Methods',
      simpleExplanation:
        'StringBuffer is a peer class of String that represents mutable (modifiable) character sequences. Unlike String, which creates new heap objects on every modification, StringBuffer modifies characters in place and is thread-safe (synchronized).',
      keyPoints: [
        'Mutability: Characters and length can be changed dynamically without creating new objects.',
        'Thread-Safe: All major methods in StringBuffer are synchronized, making it safe for multithreaded environments.',
        'Default Capacity: Initial capacity is 16 characters. When capacity is exceeded, it grows dynamically by (oldCapacity * 2) + 2.',
        'Key Methods: append(), insert(offset, str), reverse(), delete(start, end), deleteCharAt(index), replace(start, end, str), ensureCapacity(min), setCharAt(index, ch).',
        'StringBuffer vs StringBuilder: StringBuffer is synchronized (thread-safe, slower); StringBuilder (JDK 1.5) is non-synchronized (faster).'
      ],
      syntaxOrDiagram: `// Capacity Growth Formula:
newCapacity = (oldCapacity * 2) + 2

// Memory diagram:
Initial:  [16 char buffer]
Append:   "Hello" -> fits in buffer, no new object allocated.`,
      javaCode: `// Java Program demonstrating StringBuffer methods and capacity
public class StringBufferDemo {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");

        System.out.println("Original StringBuffer: " + sb);
        System.out.println("Initial Length: " + sb.length());
        System.out.println("Initial Capacity (16 + 5): " + sb.capacity());

        // 1. append()
        sb.append(" World");
        System.out.println("After append: " + sb);

        // 2. insert()
        sb.insert(5, ", Beautiful");
        System.out.println("After insert: " + sb);

        // 3. replace()
        sb.replace(0, 5, "Greetings");
        System.out.println("After replace: " + sb);

        // 4. delete()
        sb.delete(9, 20); // removes ", Beautiful"
        System.out.println("After delete: " + sb);

        // 5. reverse()
        sb.reverse();
        System.out.println("After reverse: " + sb);
    }
}`,
      expectedOutput: `Original StringBuffer: Hello
Initial Length: 5
Initial Capacity (16 + 5): 21
After append: Hello World
After insert: Hello, Beautiful World
After replace: Greetings, Beautiful World
After delete: Greetings World
After reverse: dlroW sgniteerG`,
      examTips:
        'Be sure to state the difference between String (immutable), StringBuffer (mutable, synchronized), and StringBuilder (mutable, non-synchronized).'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Deadlock and Race Situations',
      marks: 5,
      syllabusTopic: 'Unit V - Multithreading Concurrency Issues: Deadlock and Race Condition',
      simpleExplanation:
        'A Race Condition occurs when multiple threads concurrently read and write shared data without synchronization, causing non-deterministic output. A Deadlock occurs when two or more threads are permanently blocked, each holding a lock that the other needs in a circular dependency.',
      keyPoints: [
        'Race Condition: Occurs due to unsynchronized critical sections where thread execution order changes the final variable outcome.',
        'Deadlock: A deadlock arises when Thread 1 holds Resource A and requests Resource B, while Thread 2 holds Resource B and requests Resource A.',
        'Four Coffman Conditions for Deadlock: (1) Mutual Exclusion, (2) Hold and Wait, (3) No Preemption, (4) Circular Wait.',
        'Deadlock Prevention: Always acquire locks in a consistent, uniform order; use lock timeouts (tryLock); avoid nested locks.'
      ],
      syntaxOrDiagram: `Deadlock Circular Wait:
Thread 1 holds [Lock R1] ----> waiting for ----> [Lock R2]
                                                   ^
                                                   |
Thread 2 holds [Lock R2] ----> waiting for ----> [Lock R1]`,
      javaCode: `// Java Program showing Deadlock occurrence scenario
public class DeadlockDemo {
    public static void main(String[] args) {
        final String ResourceA = "Printer";
        final String ResourceB = "Scanner";

        // Thread 1: tries to lock ResourceA, then ResourceB
        Thread t1 = new Thread(() -> {
            synchronized (ResourceA) {
                System.out.println("Thread 1: Locked " + ResourceA);
                try { Thread.sleep(100); } catch (Exception e) {}

                System.out.println("Thread 1: Waiting for " + ResourceB + "...");
                synchronized (ResourceB) {
                    System.out.println("Thread 1: Locked both resources!");
                }
            }
        }, "Worker-1");

        // Thread 2: tries to lock ResourceB, then ResourceA (Opposite Order -> Deadlock!)
        Thread t2 = new Thread(() -> {
            synchronized (ResourceB) {
                System.out.println("Thread 2: Locked " + ResourceB);
                try { Thread.sleep(100); } catch (Exception e) {}

                System.out.println("Thread 2: Waiting for " + ResourceA + "...");
                synchronized (ResourceA) {
                    System.out.println("Thread 2: Locked both resources!");
                }
            }
        }, "Worker-2");

        t1.start();
        t2.start();
    }
}`,
      expectedOutput: `Thread 1: Locked Printer
Thread 2: Locked Scanner
Thread 1: Waiting for Scanner...
Thread 2: Waiting for Printer...
(Deadlock reached: Both threads wait indefinitely on each other)`,
      examTips:
        'State how to resolve deadlocks: acquire locks in the SAME sequence across all threads (e.g., both acquire ResourceA first, then ResourceB).'
    }
  },

  // ==================== QUESTION 12 ====================
  {
    id: 12,
    questionNumber: 12,
    unit: 'Unit V',
    title: 'Event Handling & Establishing JDBC Database Connections',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Event handling',
      marks: 5,
      syllabusTopic: 'Unit V - Delegation Event Model, Sources, and Listeners',
      simpleExplanation:
        'Event Handling is a mechanism where GUI components generate event objects upon user interaction (mouse click, keystroke, window resize) and delegate them to registered listener objects for processing.',
      keyPoints: [
        'Delegation Event Model: A source generates an event and sends it to one or more registered listeners.',
        'Event Source: The GUI component where the event originated (e.g., Button, TextField, Window).',
        'Event Object: Subclass of java.util.EventObject containing event data (e.g., ActionEvent, MouseEvent, KeyEvent).',
        'Event Listener: An interface containing callback methods implemented to handle specific events (e.g., ActionListener, KeyListener).',
        'Registration: Connecting listener to source using "source.addActionListener(listener)".',
        'Adapter Classes: Provide empty implementations of multi-method listener interfaces to simplify coding.'
      ],
      syntaxOrDiagram: `[Event Source: Button] --(User clicks button)--> [Creates ActionEvent Object]
           |
           v
  (Dispatched to)
           |
           v
[Registered Listener: ActionListener] ---> [Calls actionPerformed(ActionEvent e)]`,
      javaCode: `// Java Program showing Delegation Event Model with ActionListener
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EventHandlingDemo {
    public static void main(String[] args) {
        System.out.println("=== Java Delegation Event Model ===");

        // Simulating an Event Source (like a Button)
        class MockButton {
            private ActionListener listener;

            public void addActionListener(ActionListener l) {
                this.listener = l;
            }

            public void click() {
                System.out.println("[Event Source]: Button clicked by user!");
                if (listener != null) {
                    // Create and dispatch event
                    ActionEvent evt = new ActionEvent(this, ActionEvent.ACTION_PERFORMED, "SUBMIT_FORM");
                    listener.actionPerformed(evt);
                }
            }
        }

        // Listener registration using Lambda (ActionListener is a functional interface)
        MockButton submitBtn = new MockButton();
        submitBtn.addActionListener(e -> {
            System.out.println("[Event Listener]: Received action command -> " + e.getActionCommand());
            System.out.println("[Event Handler]: Form submitted and saved successfully!");
        });

        // Trigger the event
        submitBtn.click();
    }
}`,
      expectedOutput: `=== Java Delegation Event Model ===
[Event Source]: Button clicked by user!
[Event Listener]: Received action command -> SUBMIT_FORM
[Event Handler]: Form submitted and saved successfully!`,
      examTips:
        'Draw the 3-step diagram: Event Source -> Event Object -> Event Listener.'
    },
    partB: {
      subQuestion: 'b',
      title: 'How to Establishing JDBC Database Connections',
      marks: 5,
      syllabusTopic: 'Unit V - 5 Steps to Establish JDBC Connection',
      simpleExplanation:
        'Establishing a JDBC connection involves five standardized steps: loading the database driver, defining the database URL, creating a connection via DriverManager, creating statement objects to execute SQL, and closing resources.',
      keyPoints: [
        'Step 1: Load and Register the Driver class using Class.forName("com.mysql.cj.jdbc.Driver").',
        'Step 2: Define Connection URL with format "jdbc:<subprotocol>://<host>:<port>/<dbname>".',
        'Step 3: Establish Connection using DriverManager.getConnection(url, username, password).',
        'Step 4: Create Statement or PreparedStatement object using connection.createStatement().',
        'Step 5: Execute SQL Queries (executeQuery for SELECT, executeUpdate for INSERT/UPDATE/DELETE).',
        'Step 6: Close ResultSet, Statement, and Connection objects in finally or try-with-resources.'
      ],
      syntaxOrDiagram: `// Standard 5 Steps:
1. Class.forName("com.mysql.cj.jdbc.Driver");
2. String url = "jdbc:mysql://localhost:3306/db_name";
3. Connection con = DriverManager.getConnection(url, user, pass);
4. Statement stmt = con.createStatement();
5. ResultSet rs = stmt.executeQuery("SELECT * FROM emp");
6. con.close();`,
      javaCode: `// Java Program showing complete 5 steps to establish a JDBC connection
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;

public class JDBCConnectionStepsDemo {
    public static void main(String[] args) {
        String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/college_db";
        String user = "root";
        String pass = "root";

        System.out.println("=== 5 STEPS TO ESTABLISH JDBC CONNECTION ===");
        System.out.println("Step 1: Loading driver -> " + driver);
        System.out.println("Step 2: Connecting to URL -> " + url);
        System.out.println("Step 3: Authenticating with user: " + user);

        // Illustrative structured database execution code:
        /*
        try {
            Class.forName(driver);
            Connection con = DriverManager.getConnection(url, user, pass);
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT id, name, city FROM students");
            while (rs.next()) {
                System.out.println(rs.getInt(1) + " | " + rs.getString(2) + " | " + rs.getString(3));
            }
            con.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        */

        System.out.println("Step 4: Statement created via con.createStatement()");
        System.out.println("Step 5: Query executed & connection closed safely.");
    }
}`,
      expectedOutput: `=== 5 STEPS TO ESTABLISH JDBC CONNECTION ===
Step 1: Loading driver -> com.mysql.cj.jdbc.Driver
Step 2: Connecting to URL -> jdbc:mysql://localhost:3306/college_db
Step 3: Authenticating with user: root
Step 4: Statement created via con.createStatement()
Step 5: Query executed & connection closed safely.`,
      examTips:
        'Clearly list the 5 steps numbered 1 through 5. Write the exact syntax of DriverManager.getConnection() with all 3 parameters.'
    }
  },

  // ==================== QUESTION 13 ====================
  {
    id: 13,
    questionNumber: 13,
    unit: 'Unit III',
    title: 'Class Arrays & Constructor Method and Inheritance',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Illustrate Class Arrays',
      marks: 5,
      syllabusTopic: '3.1.10 Class Arrays (java.util.Arrays)',
      simpleExplanation:
        'The java.util.Arrays class contains various static utility methods for manipulating arrays, including sorting, searching, comparing, filling, and converting arrays to string representations.',
      keyPoints: [
        'Inheritance: Extends java.lang.Object; all methods are static.',
        'Arrays.sort(arr): Sorts the array in ascending numerical/alphabetical order using QuickSort/Dual-Pivot QuickSort.',
        'Arrays.binarySearch(arr, key): Performs binary search on a pre-sorted array; returns index or negative value if absent.',
        'Arrays.equals(arr1, arr2): Returns true if both arrays contain equal elements in identical order.',
        'Arrays.fill(arr, val): Fills every slot of the array with the specified value.',
        'Arrays.copyOf(arr, newLength): Copies the array to a new array of specified length.',
        'Arrays.toString(arr): Returns a readable string representation "[elem1, elem2, ...]".'
      ],
      syntaxOrDiagram: `// Common Static Methods in java.util.Arrays:
Arrays.sort(int[] a);
Arrays.binarySearch(int[] a, int key);
Arrays.equals(int[] a, int[] b);
Arrays.fill(int[] a, int val);
Arrays.toString(int[] a);`,
      javaCode: `// Java Program demonstrating Class java.util.Arrays utility methods
import java.util.Arrays;

public class ClassArraysDemo {
    public static void main(String[] args) {
        int[] numbers = { 45, 12, 85, 32, 89, 39, 69, 44, 42, 1, 6, 8 };

        // 1. Arrays.toString()
        System.out.println("Original Array: " + Arrays.toString(numbers));

        // 2. Arrays.sort()
        Arrays.sort(numbers);
        System.out.println("Sorted Array:   " + Arrays.toString(numbers));

        // 3. Arrays.binarySearch()
        int searchKey = 42;
        int foundIndex = Arrays.binarySearch(numbers, searchKey);
        System.out.println("Value " + searchKey + " found at index: " + foundIndex);

        // 4. Arrays.copyOf()
        int[] copy = Arrays.copyOf(numbers, 5);
        System.out.println("First 5 elements copy: " + Arrays.toString(copy));

        // 5. Arrays.fill()
        int[] filledArray = new int[5];
        Arrays.fill(filledArray, 7);
        System.out.println("Filled Array with 7s:  " + Arrays.toString(filledArray));

        // 6. Arrays.equals()
        boolean isEqual = Arrays.equals(numbers, numbers);
        System.out.println("Self comparison equals: " + isEqual);
    }
}`,
      expectedOutput: `Original Array: [45, 12, 85, 32, 89, 39, 69, 44, 42, 1, 6, 8]
Sorted Array:   [1, 6, 8, 12, 32, 39, 42, 44, 45, 69, 85, 89]
Value 42 found at index: 6
First 5 elements copy: [1, 6, 8, 12, 32]
Filled Array with 7s:  [7, 7, 7, 7, 7]
Self comparison equals: true`,
      examTips:
        'Note that binarySearch requires the array to be sorted first; otherwise the return value is undefined.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain Constructor Method and Inheritance',
      marks: 5,
      syllabusTopic: '3.2.7 Constructor Method and Inheritance, super() keyword',
      simpleExplanation:
        'In inheritance, constructors are not inherited by subclasses. When a subclass object is instantiated, the superclass constructor is always invoked first to initialize inherited fields before the subclass constructor executes.',
      keyPoints: [
        'Execution Order: Base class constructor executes FIRST, followed by the derived class constructor.',
        'Implicit super(): If a subclass constructor does not explicitly call a superclass constructor, the Java compiler automatically inserts a call to super() (the no-argument superclass constructor).',
        'Explicit super(args): If the superclass lacks a default constructor, the subclass must explicitly call super(parameters) as the very FIRST statement in its constructor body.',
        'super() vs this(): "super()" invokes the immediate parent class constructor; "this()" invokes another constructor in the same class (constructor chaining).'
      ],
      syntaxOrDiagram: `SubClass Constructor execution flow:
  [SubClass Constructor Called]
              |
    (First statement)
              |
              v
  [super(args) executes SuperClass Constructor]
              |
  [SuperClass fields initialized]
              |
  [Control returns to SubClass Constructor]
              |
  [SubClass fields initialized]`,
      javaCode: `// Java Program showing Constructor execution order and super() in inheritance
class SuperClass {
    int i, j;

    // Superclass Constructor
    SuperClass(int a, int b) {
        this.i = a;
        this.j = b;
        System.out.println("1. SuperClass constructor executed: i = " + i + ", j = " + j);
    }
}

class SubClass extends SuperClass {
    int k;

    // Subclass Constructor
    SubClass(int a, int b, int c) {
        super(a, b); // Must be the FIRST statement to invoke immediate parent constructor
        this.k = c;
        System.out.println("2. SubClass constructor executed: k = " + k);
    }

    void displayAll() {
        System.out.println("Combined Values: i = " + i + ", j = " + j + ", k = " + k);
    }
}

public class ConstructorInheritanceDemo {
    public static void main(String[] args) {
        System.out.println("Instantiating SubClass object:");
        SubClass obj = new SubClass(10, 20, 30);
        obj.displayAll();
    }
}`,
      expectedOutput: `Instantiating SubClass object:
1. SuperClass constructor executed: i = 10, j = 20
2. SubClass constructor executed: k = 30
Combined Values: i = 10, j = 20, k = 30`,
      examTips:
        'Emphasize that super() must be the very first statement inside a subclass constructor body; placing it on line 2 produces a compile-time error.'
    }
  },

  // ==================== QUESTION 14 ====================
  {
    id: 14,
    questionNumber: 14,
    unit: 'Unit III',
    title: 'Abstract Classes & Inheritance of Interfaces',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain Abstract Classes',
      marks: 5,
      syllabusTopic: '3.2.10 Abstract Classes and Abstract Methods',
      simpleExplanation:
        'An abstract class is a class declared with the "abstract" keyword that cannot be instantiated directly. It can contain both abstract methods (without body) and concrete methods (with body). It defines a common template for subclasses to extend.',
      keyPoints: [
        'Declaration: Uses the "abstract" keyword before class keyword.',
        'Instantiation: Cannot create objects directly with "new AbstractClass()". Must be subclassed.',
        'Abstract Methods: Methods without a body (e.g. "abstract void draw();") that MUST be implemented by any concrete subclass.',
        'Concrete Methods: Can have fully implemented methods shared across all subclasses.',
        'Constructors & Fields: An abstract class can have constructors, instance variables, and static methods.',
        'Polymorphism: References of abstract class type can point to subclass objects.'
      ],
      syntaxOrDiagram: `abstract class Shape {
    int color;
    abstract double area(); // Unimplemented abstract method

    void display() {        // Implemented concrete method
        System.out.println("Displaying shape.");
    }
}`,
      javaCode: `// Java Program demonstrating Abstract Class with abstract and concrete methods
abstract class Shape {
    String name;

    Shape(String name) {
        this.name = name;
    }

    // Abstract method (must be implemented by subclass)
    abstract double calculateArea();

    // Concrete method (shared implementation)
    void printDetails() {
        System.out.println("Shape: " + name + " | Area: " + calculateArea());
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        super("Circle");
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double length, width;

    Rectangle(double l, double w) {
        super("Rectangle");
        this.length = l;
        this.width = w;
    }

    @Override
    double calculateArea() {
        return length * width;
    }
}

public class AbstractClassDemo {
    public static void main(String[] args) {
        // Abstract class reference pointing to concrete subclasses
        Shape s1 = new Circle(5.0);
        Shape s2 = new Rectangle(4.0, 6.0);

        s1.printDetails();
        s2.printDetails();
    }
}`,
      expectedOutput: `Shape: Circle | Area: 78.53981633974483
Shape: Rectangle | Area: 24.0`,
      examTips:
        'Mention differences between Abstract Class and Interface: Abstract classes can have instance variables and constructors; interfaces have only static final constants.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Inheritance of Interfaces',
      marks: 5,
      syllabusTopic: '3.3.6 Inheritance of Interfaces (extends keyword)',
      simpleExplanation:
        'In Java, one interface can inherit from another interface using the "extends" keyword. Furthermore, unlike classes, an interface can extend multiple interfaces simultaneously ("interface C extends A, B").',
      keyPoints: [
        'Keyword: Uses "extends" (not implements) when one interface inherits another.',
        'Multiple Interface Inheritance: An interface can extend two or more parent interfaces: "interface C extends A, B".',
        'Implementation Obligation: Any concrete class that implements a derived interface must provide implementations for all methods across the entire interface inheritance chain.',
        'No diamond problem with abstract methods: Because abstract methods have no implementation, duplicate signatures from multiple parent interfaces cause no conflict.'
      ],
      syntaxOrDiagram: `interface A { void meth1(); }
interface B extends A { void meth2(); } // B has meth1() and meth2()

class MyClass implements B {
    // Must implement BOTH meth1() and meth2()
    public void meth1() { ... }
    public void meth2() { ... }
}`,
      javaCode: `// Java Program showing Interface Inheritance
interface BaseInterface {
    void methodOne();
}

// Child interface extends BaseInterface and adds methodTwo
interface ChildInterface extends BaseInterface {
    void methodTwo();
}

// Concrete class implementing the derived interface
class ImplementationClass implements ChildInterface {
    @Override
    public void methodOne() {
        System.out.println("Implementation of methodOne from BaseInterface.");
    }

    @Override
    public void methodTwo() {
        System.out.println("Implementation of methodTwo from ChildInterface.");
    }
}

public class InterfaceInheritanceDemo {
    public static void main(String[] args) {
        ImplementationClass obj = new ImplementationClass();
        obj.methodOne();
        obj.methodTwo();

        // Testing polymorphic interface reference
        BaseInterface baseRef = obj;
        baseRef.methodOne();
    }
}`,
      expectedOutput: `Implementation of methodOne from BaseInterface.
Implementation of methodTwo from ChildInterface.
Implementation of methodOne from BaseInterface.`,
      examTips:
        'Remember to state that a class "implements" an interface, but an interface "extends" another interface.'
    }
  },

  // ==================== QUESTION 15 ====================
  {
    id: 15,
    questionNumber: 15,
    unit: 'Unit IV',
    title: 'Java util Classes and Interfaces & Date/Time Formatting',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain about Java util Classes and Interfaces',
      marks: 5,
      syllabusTopic: 'Unit IV - java.util Package Overview (Collections, Dates, Utilities)',
      simpleExplanation:
        'The java.util package provides the Java Collections Framework, legacy collection classes, date and time facilities, internationalization, random number generators, string tokenizers, and scanning utilities.',
      keyPoints: [
        'Core Collection Interfaces: Collection<E>, List<E> (ordered, index-based), Set<E> (unique elements), Map<K,V> (key-value pairs), Queue<E>, Deque<E>, Iterator<E>.',
        'Prominent Utility Classes:',
        '  - ArrayList / LinkedList: Resizable dynamic array and doubly-linked list implementations of List.',
        '  - HashMap / HashSet: Fast hash-table-based implementations of Map and Set.',
        '  - Scanner: High-level text and token parsing utility.',
        '  - Random: Pseudo-random number generator (nextInt(), nextDouble()).',
        '  - Arrays / Collections: Static utility classes for searching, sorting, and synchronizing data structures.'
      ],
      syntaxOrDiagram: `java.util Hierarchy:
           Collection<E>                   Map<K, V>
          /      |      \\                      |
      List<E>  Set<E>  Queue<E>             HashMap
        |        |        |
    ArrayList HashSet LinkedList`,
      javaCode: `// Java Program demonstrating java.util Classes (ArrayList, HashMap, Collections)
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JavaUtilDemo {
    public static void main(String[] args) {
        // 1. List & ArrayList demonstration
        List<String> studentList = new ArrayList<>();
        studentList.add("Vahida");
        studentList.add("Abhishek");
        studentList.add("Charan");
        studentList.add("Deepak");

        System.out.println("Original ArrayList: " + studentList);
        Collections.sort(studentList);
        System.out.println("Sorted ArrayList:   " + studentList);

        // 2. Map & HashMap demonstration
        Map<Integer, String> studentMap = new HashMap<>();
        studentMap.put(101, "CSE Department");
        studentMap.put(102, "ECE Department");
        studentMap.put(103, "IT Department");

        System.out.println("\\nHashMap Contents:");
        for (Map.Entry<Integer, String> entry : studentMap.entrySet()) {
            System.out.println("Code: " + entry.getKey() + " -> " + entry.getValue());
        }
    }
}`,
      expectedOutput: `Original ArrayList: [Vahida, Abhishek, Charan, Deepak]
Sorted ArrayList:   [Abhishek, Charan, Deepak, Vahida]

HashMap Contents:
Code: 101 -> CSE Department
Code: 102 -> ECE Department
Code: 103 -> IT Department`,
      examTips:
        'List at least 5 classes (ArrayList, HashMap, Scanner, Random, Formatter) and 4 interfaces (List, Set, Map, Iterator) from the java.util package.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Formatting for Date/Time in Java',
      marks: 5,
      syllabusTopic: 'Unit IV - SimpleDateFormat and modern java.time.format.DateTimeFormatter',
      simpleExplanation:
        'Date and time formatting in Java converts raw temporal objects into human-readable strings and parses formatted strings back into date objects. Java supports both legacy SimpleDateFormat (java.text) and modern DateTimeFormatter (java.time.format, Java 8).',
      keyPoints: [
        'Legacy Approach: java.text.SimpleDateFormat with java.util.Date.',
        'Modern Approach (Java 8+): java.time.format.DateTimeFormatter with LocalDate, LocalTime, and LocalDateTime (thread-safe and immutable).',
        'Common Format Specifiers:',
        '  - "dd" / "d": Day of month (e.g. 06)',
        '  - "MM" / "MMMM": Month (07 = July, July = MMMM)',
        '  - "yyyy": 4-digit Year (2026)',
        '  - "HH" / "hh": Hour (24-hour / 12-hour)',
        '  - "mm": Minutes, "ss": Seconds, "E": Day of week (Fri)',
        'Temporal Adjusters: java.time.temporal.TemporalAdjusters provides convenient methods like firstDayOfMonth(), lastDayOfYear().'
      ],
      syntaxOrDiagram: `Pattern Syntax:
"dd/MM/yyyy"                 --> 06/11/2026
"dd-MMMM-yyyy hh:mm:ss a"    --> 06-November-2026 05:40:57 AM
"E, MMM dd, yyyy"            --> Fri, Nov 06, 2026`,
      javaCode: `// Java Program showing Date/Time Formatting using both SimpleDateFormat and DateTimeFormatter
import java.text.SimpleDateFormat;
import java.util.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateTimeFormattingDemo {
    public static void main(String[] args) {
        // 1. Legacy SimpleDateFormat
        Date currentDate = new Date();
        SimpleDateFormat sdf1 = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat sdf2 = new SimpleDateFormat("E, dd MMM yyyy HH:mm:ss");

        System.out.println("=== Legacy SimpleDateFormat ===");
        System.out.println("Format 1 (dd/MM/yyyy): " + sdf1.format(currentDate));
        System.out.println("Format 2 (Full):       " + sdf2.format(currentDate));

        // 2. Modern Java 8 DateTimeFormatter
        System.out.println("\\n=== Modern Java 8 DateTimeFormatter ===");
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd-MMMM-yyyy | hh:mm a");
        System.out.println("Formatted Java 8 Time: " + now.format(dtf));
    }
}`,
      expectedOutput: `=== Legacy SimpleDateFormat ===
Format 1 (dd/MM/yyyy): 06/11/2026
Format 2 (Full):       Fri, 06 Nov 2026 05:40:57

=== Modern Java 8 DateTimeFormatter ===
Formatted Java 8 Time: 06-November-2026 | 05:40 AM`,
      examTips:
        'Point out that SimpleDateFormat is not thread-safe, whereas Java 8 DateTimeFormatter is immutable and completely thread-safe.'
    }
  },

  // ==================== QUESTION 16 ====================
  {
    id: 16,
    questionNumber: 16,
    unit: 'Unit IV',
    title: 'Checked vs Unchecked Exceptions & Auto-boxing/Auto-unboxing',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain Unchecked Exceptions, Checked Exceptions',
      marks: 5,
      syllabusTopic: 'Unit IV - Checked Exceptions vs Unchecked Exceptions',
      simpleExplanation:
        'Checked Exceptions are evaluated at compile time and must be handled or declared with "throws". Unchecked Exceptions occur at runtime (subclasses of RuntimeException and Error) and are not forced by the compiler.',
      keyPoints: [
        'Checked Exceptions: Subclasses of Throwable and Exception, excluding RuntimeException. Examples: IOException, SQLException, ClassNotFoundException, FileNotFoundException.',
        'Compiler Enforcement: If code throws a checked exception, the compiler requires either a try-catch block or a "throws" clause in the method header.',
        'Unchecked Exceptions: Subclasses of RuntimeException and Error. Examples: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, NumberFormatException.',
        'Root Cause: Checked exceptions typically represent external failures outside application control (file missing, network down); unchecked exceptions indicate programming logic errors (null dereference, index out of range).'
      ],
      syntaxOrDiagram: `Comparison Table:
Feature             Checked Exceptions              Unchecked Exceptions
-----------------   ----------------------------    ----------------------------
Checking Point      Compile-Time                    Run-Time
Inherits From       java.lang.Exception             java.lang.RuntimeException
Handling required?  Mandatory (compiler enforced)   Optional (handled as needed)
Examples            IOException, SQLException       ArithmeticException, NPE`,
      javaCode: `// Java Program illustrating Checked and Unchecked Exceptions
import java.io.FileReader;
import java.io.IOException;

public class CheckedUncheckedDemo {

    // Demonstrating Checked Exception (must declare 'throws' or handle)
    static void testChecked() throws IOException {
        FileReader file = new FileReader("non_existing_file.txt");
        file.read();
        file.close();
    }

    // Demonstrating Unchecked Exception (compiler does not force handling)
    static void testUnchecked() {
        int[] arr = new int[3];
        arr[10] = 50; // Triggers ArrayIndexOutOfBoundsException at runtime
    }

    public static void main(String[] args) {
        System.out.println("=== 1. Handling Checked Exception ===");
        try {
            testChecked();
        } catch (IOException e) {
            System.out.println("Caught Checked Exception: " + e.getMessage());
        }

        System.out.println("\\n=== 2. Handling Unchecked Exception ===");
        try {
            testUnchecked();
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught Unchecked Exception: " + e.getMessage());
        }
    }
}`,
      expectedOutput: `=== 1. Handling Checked Exception ===
Caught Checked Exception: non_existing_file.txt (No such file or directory)

=== 2. Handling Unchecked Exception ===
Caught Unchecked Exception: Index 10 out of bounds for length 3`,
      examTips:
        'Draw the Throwable class hierarchy diagram showing where RuntimeException branches off from Exception.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Difference between auto-boxing and auto-unboxing in java with suitable code',
      marks: 5,
      syllabusTopic: 'Unit IV - Auto-boxing and Auto-unboxing (Java 5 Feature)',
      simpleExplanation:
        'Auto-boxing is the automatic conversion of primitive data types into their corresponding wrapper class objects. Auto-unboxing is the reverse process, where a wrapper object is automatically converted into its primitive data type.',
      keyPoints: [
        'Introduced in Java 5 to eliminate repetitive manual wrapping (new Integer()) and unwrapping (.intValue()).',
        'Auto-boxing: int -> Integer, double -> Double, char -> Character, boolean -> Boolean.',
        'Auto-unboxing: Integer -> int, Double -> double, Character -> char, Boolean -> boolean.',
        'Primary Benefit: Allows primitives to be added seamlessly to Java Collections (e.g. list.add(10) where 10 is automatically autoboxed to Integer.valueOf(10)).',
        'Caveat: Unboxing a null wrapper object throws NullPointerException.'
      ],
      syntaxOrDiagram: `Auto-boxing:
int num = 100;
Integer obj = num; // Compiler internally does: Integer.valueOf(num)

Auto-unboxing:
Integer obj = 200;
int num = obj;     // Compiler internally does: obj.intValue()`,
      javaCode: `// Java Program showing Auto-boxing and Auto-unboxing with Collections
import java.util.ArrayList;
import java.util.List;

public class AutoboxingUnboxingDemo {
    public static void main(String[] args) {
        // --- 1. Auto-boxing Example ---
        int primitiveA = 50;
        Integer boxedA = primitiveA; // Auto-boxing: int converted to Integer object
        System.out.println("Auto-boxed Integer Object: " + boxedA);

        // --- 2. Auto-unboxing Example ---
        Integer boxedB = Integer.valueOf(250);
        int primitiveB = boxedB; // Auto-unboxing: Integer object converted to primitive int
        System.out.println("Auto-unboxed Primitive int: " + primitiveB);

        // --- 3. Seamless use with Java Collections ---
        List<Integer> list = new ArrayList<>();
        list.add(10); // Auto-boxing: primitive 10 -> Integer
        list.add(20);
        list.add(30);

        int sum = 0;
        for (Integer val : list) {
            sum += val; // Auto-unboxing: Integer object automatically converted to int for addition
        }
        System.out.println("Sum computed using auto-unboxing in loop: " + sum);
    }
}`,
      expectedOutput: `Auto-boxed Integer Object: 50
Auto-unboxed Primitive int: 250
Sum computed using auto-unboxing in loop: 60`,
      examTips:
        'Show the explicit methods that the compiler substitutes behind the scenes: Integer.valueOf(a) for boxing, and obj.intValue() for unboxing.'
    }
  },

  // ==================== QUESTION 17 ====================
  {
    id: 17,
    questionNumber: 17,
    unit: 'Unit V',
    title: 'String Handling in Java & Multithreaded Programming',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain the String Handling in Java',
      marks: 5,
      syllabusTopic: 'Unit V - String Handling, String Constant Pool, and Methods',
      simpleExplanation:
        'In Java, a String is an object that represents an immutable sequence of characters. Once created, its content cannot be altered in memory. String literals are stored in the specialized String Constant Pool (SCP) in Heap memory to optimize memory utilization.',
      keyPoints: [
        'Immutability: Any operation that appears to modify a String actually creates a brand-new String object on the Heap.',
        'String Creation:',
        '  - String Literal (String s = "hello"): Stored in the String Constant Pool (SCP); shares memory if duplicate exists.',
        '  - "new" Keyword (String s = new String("hello")): Always creates a new object in normal heap memory.',
        'Comparing Strings: "==" compares object reference memory addresses; ".equals()" compares actual character content.',
        'Common Methods: length(), charAt(i), substring(start, end), concat(), contains(), replace(old, new), toLowerCase(), toUpperCase(), trim(), split(regex), indexOf(ch).'
      ],
      syntaxOrDiagram: `String Constant Pool (SCP) vs Heap:
Heap Memory:
  [new String("sai")] -> Address 0x100
  [new String("sai")] -> Address 0x200 (Separate objects!)

String Constant Pool:
  "sai" <--- s1 and s2 both point here!
  s1 == s2 is TRUE for literals, but FALSE for 'new' objects.`,
      javaCode: `// Java Program demonstrating String Handling, SCP, and Core Methods
public class StringHandlingDemo {
    public static void main(String[] args) {
        // Demonstration of SCP vs Heap
        String s1 = "Aditya";
        String s2 = "Aditya";
        String s3 = new String("Aditya");

        System.out.println("=== String Reference vs Content Equality ===");
        System.out.println("s1 == s2 (SCP literals):        " + (s1 == s2)); // true (same reference)
        System.out.println("s1 == s3 ('new' heap object):   " + (s1 == s3)); // false (different addresses)
        System.out.println("s1.equals(s3) (Content check):  " + s1.equals(s3)); // true (same characters)

        // String Manipulation Methods
        System.out.println("\\n=== Core String Methods ===");
        String college = "  Aditya Engineering College  ";
        System.out.println("Trimmed:         '" + college.trim() + "'");
        System.out.println("Upper Case:      " + college.trim().toUpperCase());
        System.out.println("Substring(0, 6): " + college.trim().substring(0, 6));
        System.out.println("Replace:         " + college.trim().replace("College", "Academy"));
        System.out.println("Contains 'Eng':  " + college.contains("Eng"));
    }
}`,
      expectedOutput: `=== String Reference vs Content Equality ===
s1 == s2 (SCP literals):        true
s1 == s3 ('new' heap object):   false
s1.equals(s3) (Content check):  true

=== Core String Methods ===
Trimmed:         'Aditya Engineering College'
Upper Case:      ADITYA ENGINEERING COLLEGE
Substring(0, 6): Aditya
Replace:         Aditya Engineering Academy
Contains 'Eng':  true`,
      examTips:
        'Include a drawing of Heap memory and String Constant Pool (SCP) showing reference arrows to secure top marks.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Explain about Multiple Threads Multithreaded Programming',
      marks: 5,
      syllabusTopic: 'Unit V - Multithreaded Programming for Multi-core Processors',
      simpleExplanation:
        'Multithreading is a programming model that executes two or more concurrent lightweight units of processing (threads) within a single application. It enables true parallel execution on multi-core processors, maximizing CPU efficiency and keeping user interfaces responsive.',
      keyPoints: [
        'Multiprocessing vs Multithreading: Processes have isolated memory spaces (heavyweight); threads share the same address space and memory (lightweight).',
        'Multi-core Utilization: Multi-threaded applications distribute workload across multiple physical CPU cores.',
        'Thread Life Cycle (5 States): (1) New/Newborn, (2) Runnable, (3) Running, (4) Blocked/Waiting/Sleeping, (5) Terminated/Dead.',
        'Thread Synchronization: Using "synchronized" blocks or methods to protect shared resources against race conditions.',
        'Thread Coordination: Utilizing join(), sleep(), yield(), wait(), and notify().'
      ],
      syntaxOrDiagram: `Thread Life Cycle:
  [Newborn] --start()--> [Runnable] <--yield()-- [Running] --run() ends--> [Dead]
                           ^                       |
                           |-- (sleep/wait ends) --+-- sleep()/wait() --> [Blocked]`,
      javaCode: `// Java Program showing Multithreaded Programming executing concurrently
class TaskA extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Thread-A [Printing Document " + i + "]");
            try { Thread.sleep(100); } catch (InterruptedException e) {}
        }
    }
}

class TaskB extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Thread-B [Downloading Chunk " + i + "]");
            try { Thread.sleep(120); } catch (InterruptedException e) {}
        }
    }
}

public class MultiThreadingDemo {
    public static void main(String[] args) {
        System.out.println("Main thread starting TaskA and TaskB concurrently...");
        TaskA threadA = new TaskA();
        TaskB threadB = new TaskB();

        threadA.start();
        threadB.start();

        try {
            threadA.join();
            threadB.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Both background tasks finished. Main thread ends.");
    }
}`,
      expectedOutput: `Main thread starting TaskA and TaskB concurrently...
Thread-A [Printing Document 1]
Thread-B [Downloading Chunk 1]
Thread-A [Printing Document 2]
Thread-B [Downloading Chunk 2]
Thread-A [Printing Document 3]
Thread-B [Downloading Chunk 3]
Both background tasks finished. Main thread ends.`,
      examTips:
        'Draw the 5-state lifecycle diagram (New -> Runnable -> Running -> Blocked -> Dead) in your exam script.'
    }
  },

  // ==================== QUESTION 18 ====================
  {
    id: 18,
    questionNumber: 18,
    unit: 'Unit V',
    title: 'Java FX Scene Builder & Java FX App Window Structure',
    totalMarks: 10,
    partA: {
      subQuestion: 'a',
      title: 'Explain Java FX Scene Builder',
      marks: 5,
      syllabusTopic: 'Unit V - JavaFX Scene Builder, FXML, and Visual UI Design',
      simpleExplanation:
        'JavaFX Scene Builder is a visual drag-and-drop design tool that enables developers to construct user interfaces without coding. It generates FXML (an XML-based declarative markup language) that separates UI presentation from business logic controllers.',
      keyPoints: [
        'Visual WYSIWYG Editor: Allows drag-and-drop placement of UI controls, layout panes, and containers.',
        'Separation of Concerns: Decouples UI structure (FXML file) from application logic (Java Controller class) and styling (CSS file).',
        'Scene Builder Panes:',
        '  - Library Panel: Palette containing UI components (Buttons, Labels, TextFields, Charts, Containers).',
        '  - Hierarchy Panel: Tree structure displaying parent-child relationships of the Scene Graph.',
        '  - Canvas / Content Panel: The interactive visual design canvas showing live UI layout.',
        '  - Inspector Panel: Configures properties, layouts, and controller mappings (e.g. fx:id and onAction event handlers).',
        'FXML Loader: In Java code, FXMLLoader.load(getClass().getResource("view.fxml")) loads the UI graph into the Stage.'
      ],
      syntaxOrDiagram: `Scene Builder Architecture:
+-------------------+----------------------------+--------------------+
|  Library Panel    |     Canvas (Live View)     |  Inspector Panel   |
| (Buttons, Text,   |                            | (Properties,       |
|  Panes, Charts)   |   [Button] [TextField]     |  Layout,           |
|-------------------|                            |  fx:id, onAction)  |
| Hierarchy (Tree)  |                            |                    |
+-------------------+----------------------------+--------------------+
                    | Generates .fxml markup
                    v
            JavaFX Controller (@FXML)` ,
      javaCode: `// JavaFX Controller class connected to Scene Builder FXML
/* Sample FXML snippet generated by Scene Builder:
   <VBox spacing="10" xmlns:fx="http://javafx.com/fxml" fx:controller="HelloController">
       <Label fx:id="welcomeText" text="Welcome to JavaFX!"/>
       <Button text="Click Me" onAction="#handleButtonClick"/>
   </VBox>
*/

// Corresponding Controller in Java:
public class HelloController {
    // @FXML connects Java variable to fx:id in Scene Builder
    // private javafx.scene.control.Label welcomeText;

    // Event handler mapped in Scene Builder onAction
    public void handleButtonClick() {
        System.out.println("Button clicked in Scene Builder generated UI!");
        // welcomeText.setText("Hello from JavaFX Scene Builder!");
    }

    public static void main(String[] args) {
        System.out.println("JavaFX Scene Builder integrates seamlessly with FXML & Controller!");
        new HelloController().handleButtonClick();
    }
}`,
      expectedOutput: `JavaFX Scene Builder integrates seamlessly with FXML & Controller!
Button clicked in Scene Builder generated UI!`,
      examTips:
        'Explain the role of the 4 panels: Library panel, Hierarchy panel, Content canvas, and Inspector panel.'
    },
    partB: {
      subQuestion: 'b',
      title: 'Illustrate Java FX App Window Structure',
      marks: 5,
      syllabusTopic: 'Unit V - JavaFX Window Structure: Stage, Scene, and Scene Graph',
      simpleExplanation:
        'The JavaFX application window architecture is modeled after a physical theater: the Stage represents the primary window (frame), the Scene represents the content canvas inside the window, and the Scene Graph is a hierarchical tree of nodes (controls, containers) displayed in the scene.',
      keyPoints: [
        'Application Class: Every JavaFX application extends javafx.application.Application and overrides the start(Stage primaryStage) method.',
        'Stage: Top-level native OS window container created by the JavaFX runtime platform.',
        'Scene: Container for all visual content. A Stage can host only one Scene at a time, but scenes can be swapped.',
        'Scene Graph: Tree data structure containing Nodes. Composed of Root Node (e.g. VBox, BorderPane), Branch Nodes (nested containers), and Leaf Nodes (Buttons, Labels).',
        'Lifecycle Methods: init() -> start(Stage primaryStage) -> stop(). App launched with launch(args).'
      ],
      syntaxOrDiagram: `+-------------------------------------------------------+
|  STAGE (The Native Window / Frame)                    |
|  +-------------------------------------------------+  |
|  |  SCENE (The Container for Scene Graph)         |  |
|  |  +-------------------------------------------+  |  |
|  |  |  ROOT NODE (Layout Pane, e.g., VBox)      |  |  |
|  |  |    |-- Label (Leaf Node)                  |  |  |
|  |  |    |-- TextField (Leaf Node)              |  |  |
|  |  |    +-- Button (Leaf Node)                 |  |  |
|  |  +-------------------------------------------+  |  |
|  +-------------------------------------------------+  |
+-------------------------------------------------------+`,
      javaCode: `// Java Program illustrating JavaFX Application Window Structure
/*
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class JavaFXAppStructureDemo extends Application {

    @Override
    public void start(Stage primaryStage) {
        // 1. Create Leaf Nodes
        Label titleLabel = new Label("Student Registration Portal");
        Button submitButton = new Button("Submit Application");

        // 2. Create Root Node (Layout Pane)
        VBox rootPane = new VBox(15); // 15px spacing
        rootPane.getChildren().addAll(titleLabel, submitButton);

        // 3. Create Scene hosting the Root Node
        Scene scene = new Scene(rootPane, 400, 300);

        // 4. Configure and Display the Stage
        primaryStage.setTitle("JavaFX Architecture Window");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
*/

public class JavaFXStructureConcept {
    public static void main(String[] args) {
        System.out.println("=== JavaFX Window Theater Model ===");
        System.out.println("1. Stage  -> The outer native OS window (primaryStage)");
        System.out.println("2. Scene  -> The surface container mounted on the Stage");
        System.out.println("3. Root   -> The layout container (VBox, HBox, BorderPane)");
        System.out.println("4. Nodes  -> Visual elements (Buttons, Labels, Charts)");
        System.out.println("Lifecycle: launch() -> init() -> start(Stage) -> stop()");
    }
}`,
      expectedOutput: `=== JavaFX Window Theater Model ===
1. Stage  -> The outer native OS window (primaryStage)
2. Scene  -> The surface container mounted on the Stage
3. Root   -> The layout container (VBox, HBox, BorderPane)
4. Nodes  -> Visual elements (Buttons, Labels, Charts)
Lifecycle: launch() -> init() -> start(Stage) -> stop()`,
      examTips:
        'Use the theater analogy (Stage = Stage, Scene = Backdrop/Play, Nodes = Actors) — university evaluators love this explanation!'
    }
  }
];

export const UNIT_CONFIG = [
  {
    unit: 'Unit III' as const,
    name: 'Unit III: Arrays, Inheritance & Interfaces',
    topics: 'Arrays, Jagged Arrays, Class Arrays, Inheritance types, super, Abstract Classes, Interfaces, Default/Static methods, Functional Interfaces',
    questionIds: [1, 2, 7, 8, 13, 14],
    color: 'emerald'
  },
  {
    unit: 'Unit IV' as const,
    name: 'Unit IV: Packages, Wrapper Classes & Exception Handling',
    topics: 'Packages, CLASSPATH, Wrapper Classes, Autoboxing, java.util, Date/Time formatting, Exception Hierarchy, 5 keywords, Checked/Unchecked, try-with-resources, Streams',
    questionIds: [3, 4, 9, 10, 15, 16],
    color: 'indigo'
  },
  {
    unit: 'Unit V' as const,
    name: 'Unit V: Strings, Multithreading, JDBC & JavaFX',
    topics: 'String handling, StringBuffer, Multithreading, Thread class, Synchronization, Inter-thread communication, Deadlock, JDBC architecture & connection, Mouse Events, JavaFX',
    questionIds: [5, 6, 11, 12, 17, 18],
    color: 'amber'
  }
];

export const HIGH_FREQUENCY_VIVA_FLASHCARDS = [
  {
    id: 'f1',
    unit: 'Unit III' as const,
    questionNumber: 1,
    front: 'Why are arrays dynamically allocated in Java, and what is a Jagged Array?',
    back: 'Java arrays are objects created on the Heap at runtime using "new". A jagged array is a multidimensional array whose inner rows have varying lengths (e.g. jagged[0]=new int[2], jagged[1]=new int[5]).'
  },
  {
    id: 'f2',
    unit: 'Unit III' as const,
    questionNumber: 2,
    front: 'Why does Java disallow Multiple Inheritance with classes, and how is it resolved?',
    back: 'To prevent the Diamond Problem (ambiguity when two parents provide identical method signatures). It is resolved cleanly using Interfaces where methods are abstract or conflict-free.'
  },
  {
    id: 'f3',
    unit: 'Unit III' as const,
    questionNumber: 8,
    front: 'What is a Functional Interface in Java 8?',
    back: 'An interface with exactly ONE abstract method (Single Abstract Method - SAM). It can have multiple default or static methods, and serves as the target type for Lambda Expressions.'
  },
  {
    id: 'f4',
    unit: 'Unit IV' as const,
    questionNumber: 3,
    front: 'What is the key difference between PATH and CLASSPATH?',
    back: 'PATH is used by the operating system to find executable binary files (.exe like javac, java). CLASSPATH is used by Java ClassLoader to find user and library .class / .jar files.'
  },
  {
    id: 'f5',
    unit: 'Unit IV' as const,
    questionNumber: 16,
    front: 'What distinguishes Checked Exceptions from Unchecked Exceptions?',
    back: 'Checked exceptions (e.g. IOException) are checked at compile-time and MUST be caught or declared with "throws". Unchecked exceptions (subclasses of RuntimeException like ArithmeticException) occur at runtime.'
  },
  {
    id: 'f6',
    unit: 'Unit V' as const,
    questionNumber: 17,
    front: 'Explain the difference between == and .equals() in Java String handling.',
    back: '"==" checks reference equality (whether both references point to the same memory address in Heap/SCP). ".equals()" compares actual sequence of characters.'
  },
  {
    id: 'f7',
    unit: 'Unit V' as const,
    questionNumber: 11,
    front: 'What is the primary difference between StringBuffer and StringBuilder?',
    back: 'StringBuffer is synchronized (thread-safe, slightly slower). StringBuilder is non-synchronized (not thread-safe, significantly faster for single-threaded tasks).'
  },
  {
    id: 'f8',
    unit: 'Unit V' as const,
    questionNumber: 12,
    front: 'What are the 5 standard steps to establish a JDBC connection?',
    back: '1. Load Driver (Class.forName)\\n2. Define DB URL\\n3. DriverManager.getConnection(url, user, pass)\\n4. Create Statement (con.createStatement())\\n5. Execute Query & close connection.'
  },
  {
    id: 'f9',
    unit: 'Unit V' as const,
    questionNumber: 18,
    front: 'Describe the theater metaphor for JavaFX App Window Structure.',
    back: 'Stage = The window frame; Scene = The visible backdrop container set upon the Stage; Scene Graph / Nodes = The controls (buttons, labels, layouts) acting within the Scene.'
  }
];
