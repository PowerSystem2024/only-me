import os
import random
import msvcrt
import sqlite3
import time
from datetime import datetime

# ============================
# BASE DE DATOS
# ============================
conn = sqlite3.connect("laberinto.db")
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS partidas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        jugador TEXT,
        tamano INTEGER,
        fecha TEXT,
        tiempo_segundos REAL,
        resultado TEXT
    )
''')
conn.commit()

# ============================
# FUNCIONES
# ============================
def limpiar_pantalla():
    os.system('cls' if os.name == 'nt' else 'clear')

def mostrar_instrucciones():
    limpiar_pantalla()
    print("""
=========================================
          🎩 JUEGO DEL LABERINTO
=========================================
Controles:
  W = Arriba   A = Izquierda
  S = Abajo    D = Derecha
  Q = Salir
Meta: llegar desde 😃 (arriba izquierda)
hasta abajo derecha.
=========================================
    """)

def mostrar_laberinto(laberinto, jugador_pos):
    limpiar_pantalla()
    n = len(laberinto)
    for i in range(n):
        fila = ""
        for j in range(n):
            if (i, j) == jugador_pos:
                fila += "😃 "
            elif laberinto[i][j] == 0:
                fila += "█ "
            else:
                fila += ". "
        print(fila)

def generar_laberinto(n):
    laberinto = [[0] * n for _ in range(n)]
    visitado = [[False] * n for _ in range(n)]

    def dfs(x, y):
        direcciones = [(0,1), (1,0), (0,-1), (-1,0)]
        random.shuffle(direcciones)
        visitado[x][y] = True
        laberinto[x][y] = 1
        for dx, dy in direcciones:
            nx, ny = x + dx*2, y + dy*2
            if 0 <= nx < n and 0 <= ny < n and not visitado[nx][ny]:
                laberinto[x+dx][y+dy] = 1
                dfs(nx, ny)

    dfs(0, 0)
    laberinto[n-1][n-1] = 1
    return laberinto

def jugar_con_teclado(laberinto, jugador, tamano):
    n = len(laberinto)
    pos = [0, 0]
    inicio = time.time()

    if laberinto[0][0] == 0 or laberinto[n-1][n-1] == 0:
        print("No se puede iniciar o terminar el recorrido.")
        input("Presioná Enter para continuar...")
        return

    while True:
        mostrar_laberinto(laberinto, tuple(pos))
        print("\n(W/A/S/D para moverse, Q para salir)")
        tecla = msvcrt.getch().decode('utf-8').lower()

        if tecla == 'q':
            resultado = "Abandonó"
            break

        nueva_pos = pos[:]
        if tecla == 'w': nueva_pos[0] -= 1
        elif tecla == 's': nueva_pos[0] += 1
        elif tecla == 'a': nueva_pos[1] -= 1
        elif tecla == 'd': nueva_pos[1] += 1

        if 0 <= nueva_pos[0] < n and 0 <= nueva_pos[1] < n and laberinto[nueva_pos[0]][nueva_pos[1]] == 1:
            pos = nueva_pos

        if pos == [n-1, n-1]:
            mostrar_laberinto(laberinto, tuple(pos))
            print("\n🎉 ¡Saliste del laberinto!\n")
            resultado = "Ganó"
            break

    fin = time.time()
    duracion = round(fin - inicio, 2)
    fecha = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Guardar partida
    cursor.execute('''
        INSERT INTO partidas (jugador, tamano, fecha, tiempo_segundos, resultado)
        VALUES (?, ?, ?, ?, ?)
    ''', (jugador if jugador else "Anónimo", tamano, fecha, duracion, resultado))
    conn.commit()

def mostrar_historial():
    limpiar_pantalla()
    print("=== HISTORIAL DE PARTIDAS ===\n")
    cursor.execute("SELECT * FROM partidas ORDER BY id DESC LIMIT 10")
    filas = cursor.fetchall()
    for fila in filas:
        print(f"ID: {fila[0]} | Jugador: {fila[1]} | Tamaño: {fila[2]} | Fecha: {fila[3]} | Tiempo: {fila[4]}s | Resultado: {fila[5]}")
    input("\nPresioná Enter para volver al menú...")

# ============================
# BUCLE PRINCIPAL
# ============================
while True:
    mostrar_instrucciones()
    print("1. Jugar partida")
    print("2. Ver historial de partidas")
    print("3. Salir")
    opcion = input("\nElegí una opción: ")

    if opcion == '1':
        jugador = input("Nombre del jugador (opcional): ")
        try:
            tamano = int(input("Tamaño del laberinto (impar recomendado): "))
            if tamano % 2 == 0:
                tamano += 1
            lab = generar_laberinto(tamano)
            jugar_con_teclado(lab, jugador, tamano)
        except:
            print("Tamaño inválido. Intentá de nuevo.")
            input("Presioná Enter para continuar...")

    elif opcion == '2':
        mostrar_historial()

    elif opcion == '3':
        print("¡Gracias por jugar!")
        break

    else:
        print("Opción inválida. Intentá de nuevo.")
        input("Presioná Enter para continuar...")

conn.close()
