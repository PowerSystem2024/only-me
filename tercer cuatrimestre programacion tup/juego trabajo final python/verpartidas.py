import sqlite3
import os

# Verificar si existe la base de datos
if not os.path.exists("laberinto.db"):
    print("\n❌ No se encontró la base de datos 'laberinto.db'. Ejecutá primero el juego.")
    input("\nPresioná Enter para salir...")
    exit()

# Conectar con la base de datos
conn = sqlite3.connect("laberinto.db")
cursor = conn.cursor()

# Verificar si la tabla existe
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='partidas'")
if not cursor.fetchone():
    print("La tabla 'partidas' no existe.")
else:
    # Consultar las últimas 10 partidas
    cursor.execute("SELECT * FROM partidas ORDER BY id DESC LIMIT 10")
    partidas = cursor.fetchall()

    print("=== HISTORIAL DE PARTIDAS ===\n")
    for partida in partidas:
        print(f"ID: {partida[0]} | Jugador: {partida[1]} | Tamaño: {partida[2]} | Fecha: {partida[3]} | Tiempo: {partida[4]}s | Resultado: {partida[5]}")
    print("\nTotal de partidas mostradas:", len(partidas))

conn.close()
input("\nPresioná Enter para salir...")
