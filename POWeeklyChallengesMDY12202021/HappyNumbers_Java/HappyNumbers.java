// To Run 1 : Be in this file's directory
// To Run 2 : Run command javac HappyNumbers.java
// To Run 3 : Run command java HappyNumbers

import java.io.File;
import java.util.Scanner;
import java.lang.Math;

public class HappyNumbers {

  public static void main(String[] args){
    
    String inputFileName = "HappyNumbersInput.txt";
    File input = new File(inputFileName);

    Scanner in;

    try {
    in = new Scanner(input);
    }
    catch(Exception e) {
      System.out.println(inputFileName + " Was Not Found");
      return;
    }

    int activeNumber;

    while (in.hasNextLine()) {

      activeNumber = in.nextInt();

      System.out.print(activeNumber);
      if (happy(activeNumber))
        System.out.println(" : true : Is A Happy Number");
      else 
        System.out.println(" : false : Is Not A Happy Number");

    }

  }

  public static boolean happy(int input) {

    int activeInt;
    int lastNum = Integer.MAX_VALUE;
    int nextNum = input;
    char[] inputArr = Integer.toString(input).toCharArray();

    while (nextNum < lastNum) {

      lastNum = nextNum;
      nextNum = 0;

      inputArr = Integer.toString(lastNum).toCharArray();

      for (char c : inputArr) {

        activeInt = (int) c - 48;

        nextNum += Math.pow(activeInt, 2);

      }

      // System.out.println(nextNum);

    }

    return (nextNum == 1) ? true : false;

  }

}