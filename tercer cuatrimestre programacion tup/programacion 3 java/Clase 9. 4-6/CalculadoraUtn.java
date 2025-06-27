import java.util.Scanner;

public class CalculadoraUtnFinal {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int opcion;

        do {
            mostrarMenu();

            try {
                System.out.print("Elige una opcion: ");
                opcion = Integer.parseInt(input.nextLine());

                if (opcion >= 1 && opcion <= 4) {
                    double num1 = leerNumero(input, "Ingresa el primer numero: ");
                    double num2 = leerNumero(input, "Ingresa el segundo numero: ");
                    ejecutarOperacion(opcion, num1, num2);
                } else if (opcion == 5) {
                    System.out.println("Gracias por usar la calculadora. Hasta pronto.");
                } else {
                    System.out.println("Opciun invulida. Intenta nuevamente.");
                }

            } catch (NumberFormatException e) {
                System.out.println("Entrada invalida. Por favor ingresa un numero entero.");
                opcion = 0;
            }

            System.out.println(); // Espaciado entre operaciones
        } while (opcion != 5);

        input.close();
    }

    public static void mostrarMenu() {
        System.out.println("***** Calculadora UTN *****");
        System.out.println("1. Sumar");
        System.out.println("2. Restar");
        System.out.println("3. Multiplicar");
        System.out.println("4. Dividir");
        System.out.println("5. Salir");
    }

    public static double leerNumero(Scanner input, String mensaje) {
        while (true) {
            try {
                System.out.print(mensaje);
                return Double.parseDouble(input.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Entrada invalida. Intenta de nuevo.");
            }
        }
    }

    public static void ejecutarOperacion(int opcion, double a, double b) {
        double resultado;
        switch (opcion) {
            case 1:
                resultado = a + b;
                System.out.println("Resultado: " + resultado);
                break;
            case 2:
                resultado = a - b;
                System.out.println("Resultado: " + resultado);
                break;
            case 3:
                resultado = a * b;
                System.out.println("Resultado: " + resultado);
                break;
            case 4:
                if (b != 0) {
                    resultado = a / b;
                    System.out.println("Resultado: " + resultado);
                } else {
                    System.out.println("Error: No se puede dividir por cero.");
                }
                break;
        }
    }
}
