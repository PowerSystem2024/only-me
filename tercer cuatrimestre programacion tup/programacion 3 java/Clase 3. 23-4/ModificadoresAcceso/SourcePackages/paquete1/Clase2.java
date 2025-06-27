package paquete1;

class Clase2 {
    String atributoDefault = "valor del atributo default";

    /*Clase2 (){
        System.out.println ("constructor Default");
    }
     */

     public Clase2 () {
        super();
        this.atributoDefault = "Modificadores del atributo default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault ();
     }

     void metodoDefault () {
        System.out.println("Metodo Default");
     }
}
