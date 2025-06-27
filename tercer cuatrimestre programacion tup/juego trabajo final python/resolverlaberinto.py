import os
import random
import msvcrt

def limpiar_pantalla():
    os.system('cls' if os.name == 'nt' else 'clear')

def mostrar_instrucciones():
    limpiar_pantalla()
    print("""
=========================================
          🧩 JUEGO DEL LABERINTO
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
    # Inicializar laberinto todo con paredes
    laberinto = [[0] * n for _ in range(n)]
    visitado = [[False] * n for _ in range(n)]

    # DFS para crear caminos
    def dfs(x, y):
        direcciones = [(0,1), (1,0), (0,-1), (-1,0)]
        random.shuffle(direcciones)
        visitado[x][y] = True
        laberinto[x][y] = 1
        for dx, dy in direcciones:
            nx, ny = x + dx*2, y + dy*2
            if 0 <= nx < n and 0 <= ny < n and not visitado[nx][ny]:
                laberinto[x+dx][y+dy] = 1  # Abrir camino intermedio
                dfs(nx, ny)

    dfs(0, 0)
    laberinto[n-1][n-1] = 1  # Salida segura
    return laberinto

def jugar_con_teclado(laberinto):
    n = len(laberinto)
    pos = [0, 0]

    if laberinto[0][0] == 0 or laberinto[n-1][n-1] == 0:
        print("No se puede iniciar o terminar el recorrido.")
        input("Presioná Enter para continuar...")
        return

    while True:
        mostrar_laberinto(laberinto, tuple(pos))
        print("\n(W/A/S/D para moverse, Q para salir)")
        tecla = msvcrt.getch().decode('utf-8').lower()

        if tecla == 'q':
            print("Saliste del juego.")
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
            input("Presioná Enter para continuar...")
            break

# Bucle principal
while True:
    mostrar_instrucciones()
    try:
        tamaño = int(input("¿De qué tamaño querés el laberinto? (ej: 9): "))
        if tamaño % 2 == 0:
            tamaño += 1  # Tamaño impar para mejor generación
        lab = generar_laberinto(tamaño)
        jugar_con_teclado(lab)
    except:
        print("Tamaño inválido.")
    r = input("¿Jugar otro laberinto? (s/n): ").strip().lower()
    if r != "s":
        print("¡Gracias por jugar!")
        break
