package Test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        int[] edades = {5, 6, 8, 9};  //sintaxis resumida
        for (int edad : edades) {   //sintaxis del For Each 
            System.out.println("edad = " + edad);
        }

        Persona personas[] = {new Persona("Juan"), new Persona("carla"), new Persona("Beatriz") };

        //For Each
        for(Persona persona: personas){
            System.err.println("persona =" + persona);
        }

    }

}
