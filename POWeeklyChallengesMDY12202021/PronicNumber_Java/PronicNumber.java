
/* To Run 1 : Compile With javac PronicNumber.java
 * To Run 2 : Run With java PronicNumber
 */

import java.io.File;
import java.util.Scanner;
import java.nio.file.Paths;

public class PronicNumber{

  public static void main(String[] args) {

    String inputFileName = "PronicNumberInput.txt";
    File input = new File(inputFileName);

    Scanner in;

    try {
    in = new Scanner(input);
    }
    catch(Exception e) {
      System.out.println(inputFileName + " Was Not Found");
      return;
    }

    int testTo;
    
    while(in.hasNextLine()) {

      // System.out.println(in.nextLine());

      testTo = Integer.parseInt(in.nextLine());

      System.out.print(testTo);
      if (isHeteromecic(testTo))
        System.out.println(" : true : Is Pronic");
      else
        System.out.println(" : false : Is Not Pronic");

      // System.out.println(testTo);

      
      // for (int i = 0; i < testTo; ++i) {

      //   if (isHeteromecic(i)) 
      //     System.out.println("Number " + i + " Is Pronic");

      //   // System.out.println(isHeteromecic(i));

      // }

    }

  }

  public static boolean isHeteromecic(int number) {

    boolean searching = true;
    boolean found = false;
    int i = 0;
    int product = 0;

    while(searching) {

      // System.out.println(i);

      product = i * (i + 1);

      if (product >= number) searching = false;

      ++i;

      // if (product == number) {
      //   found = true;
      //   searching = false;
      // }
      // else if (product > number) {
      //   searching = false;
      // }
      // else ++i;

    }

    return (product == number) ? true : false;

  }

}