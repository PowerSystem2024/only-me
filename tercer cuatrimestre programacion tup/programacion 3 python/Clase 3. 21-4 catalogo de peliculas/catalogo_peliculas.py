import os

class Pelicula:
    def __init__(self, nombre):
        self.nombre = nombre

    def __str__(self):
        return f"Pelicula: {self.nombre}"

class CatalogoPeliculas:
    ruta_archivo = 'peliculas.txt'

    @staticmethod
    def agregar_pelicula(pelicula):
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf-8') as archivo:
            archivo.write(str(pelicula) + '\n')

    @staticmethod
    def listar_peliculas():
        try:
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                print("Listado de películas:")
                print(archivo.read())
        except FileNotFoundError:
            print("No se encontró el archivo de películas.")

    @staticmethod
    def eliminar():
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print("Archivo eliminado.")
        else:
            print("El archivo no existe.")

def menu():
    while True:
        print("\nOpciones:")
        print("1) Agregar película")
        print("2) Listar películas")
        print("3) Eliminar archivo de películas")
        print("4) Salir")
        opcion = input("Seleccione una opción (1-4): ")

        if opcion == '1':
            nombre = input("Ingrese el nombre de la película: ")
            pelicula = Pelicula(nombre)
            CatalogoPeliculas.agregar_pelicula(pelicula)
        elif opcion == '2':
            CatalogoPeliculas.listar_peliculas()
        elif opcion == '3':
            CatalogoPeliculas.eliminar()
        elif opcion == '4':
            print("Saliendo del programa...")
            break
        else:
            print("Opción inválida. Intente nuevamente.")

if __name__ == '__main__':
    menu()
