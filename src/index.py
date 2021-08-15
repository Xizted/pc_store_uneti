# desde el modulo flask, importamo Flask y render_template
from flask import Flask, render_template

# Inicializamos Flask el cual recibe como parametro la variable __name__
app = Flask(__name__)

# Creamos la ruta principal con el decorador route


@app.route('/')
@app.route('/home')
# definimos una funcion el cual retornara el template (html) de acuerdo a la ruta especificada en el decorador
def home():
    return render_template('index.html')

# Creamos la ruta products


@app.route('/products')
def products():
    return render_template('products.html')


# Creamos la ruta product
@app.route('/product')
def product():
    return render_template('product.html')


# Verificamos que este sea el archivo principal, de ser verdadero ejecutara el servidor en modo desarrollo
if __name__ == '__main__':
    app.run(debug=True)
