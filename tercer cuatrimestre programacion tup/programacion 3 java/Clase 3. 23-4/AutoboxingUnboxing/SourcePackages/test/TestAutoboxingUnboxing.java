package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //clases envolventes o wrapper
        /*
         * clases envolventes de tipos primitivos
         * 
         * int= la clase envolvente en Integer
         * long= la clase envolvente es Boolean
         * float= la clase envolvente es Float
         * double = la clase envolvente es Double
         * boolean = la clase envolvente es Boolean
         * byte= la clase envolvente en Byte
         * char= la clase envolvente en Character
         * short= la clase envolvente es Short
         */

         int enteroPrim = 10; //tipo entero
         System.out.println("enteroPrim = " + enteroPrim);
         Integer entero =10; //tipo object con la clase integer
         System.out.println("entero = " + entero.doubleValue()); // autoboxing

         int entero2 = entero; //unboxing
         System.out.println("entero2 = " + entero2);
    }
}
