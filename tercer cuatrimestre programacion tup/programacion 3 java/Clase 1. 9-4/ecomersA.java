import java.util.ArrayList;
import java.util.List;

public class ecomersA {
    public static void main(String[] args) {
        Raton raton1 = new Raton("USB", "Logitech");
        Teclado teclado1 = new Teclado("USB", "Genius");
        Monitor monitor1 = new Monitor("Samsung", "24 pulgadas");

        Computadora computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);

        Orden orden1 = new Orden();
        orden1.agregarComputadora(computadora1);

        System.out.println(orden1);
    }
}

class DispositivoEntrada {
    protected String tipoEntrada;
    protected String marca;

    public DispositivoEntrada(String tipoEntrada, String marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    @Override
    public String toString() {
        return "DispositivoEntrada{tipoEntrada='" + tipoEntrada + "', marca='" + marca + "'}";
    }
}

class Raton extends DispositivoEntrada {
    private static int contadorRatones = 0;
    private int idRaton;

    public Raton(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++contadorRatones;
    }

    @Override
    public String toString() {
        return "Raton{idRaton=" + idRaton + ", " + super.toString() + "}";
    }
}

class Teclado extends DispositivoEntrada {
    private static int contadorTeclados = 0;
    private int idTeclado;

    public Teclado(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++contadorTeclados;
    }

    @Override
    public String toString() {
        return "Teclado{idTeclado=" + idTeclado + ", " + super.toString() + "}";
    }
}

class Monitor {
    private static int contadorMonitores = 0;
    private int idMonitor;
    private String marca;
    private String tamano;

    public Monitor(String marca, String tamano) {
        this.idMonitor = ++contadorMonitores;
        this.marca = marca;
        this.tamano = tamano;
    }

    @Override
    public String toString() {
        return "Monitor{idMonitor=" + idMonitor + ", marca='" + marca + "', tamano='" + tamano + "'}";
    }
}

class Computadora {
    private static int contadorComputadoras = 0;
    private int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Raton raton;

    public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton) {
        this.idComputadora = ++contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    @Override
    public String toString() {
        return "Computadora{idComputadora=" + idComputadora +
                ", nombre='" + nombre + '\'' +
                ", " + monitor +
                ", " + teclado +
                ", " + raton + '}';
    }
}

class Orden {
    private static int contadorOrdenes = 0;
    private int idOrden;
    private List<Computadora> computadoras;

    public Orden() {
        this.idOrden = ++contadorOrdenes;
        this.computadoras = new ArrayList<>();
    }

    public void agregarComputadora(Computadora computadora) {
        computadoras.add(computadora);
    }

    @Override
    public String toString() {
        return "Orden{idOrden=" + idOrden + ", computadoras=" + computadoras + "}";
    }
}


