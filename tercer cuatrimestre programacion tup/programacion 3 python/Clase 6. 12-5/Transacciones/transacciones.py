import psycopg2 as bd  # Esto es para poder conectarnos a PostgreSQL

try:
    conexion = bd.connect(
        user='postgres',
        password='admin',
        host='127.0.0.1',
        port='5432',
        database='test_bd'
    )
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Maria', 'Esparza', 'mesparza@mail.com')
    cursor.execute(sentencia, valores)
    conexion.commit()  # Hacemos el commit manualmente
    print('Termina la transacción')
    
except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error, se hizo un rollback: {e}')
    
finally:
    if conexion:
        conexion.close()