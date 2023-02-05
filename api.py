from flask import Flask, jsonify,json
from flask_sqlalchemy import SQLAlchemy
from flask import request


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"

db = SQLAlchemy()

db.init_app(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    
    def __str__(self):
        return f'{self.id} {self.content}'
    

def todo_serializer(todo):
    return{
        'id':todo.id,
        'content':todo.content
        
    }

# @app.before_first_request
# def create_tables():
#     db.create_all()

@app.route("/", methods=['GET'])
def one():
    return "Welcome to the database, you bitch!"

@app.route("/api", methods=['GET'])
def index():
    return jsonify([*map(todo_serializer,Todo.query.all())])


@app.route("/api/create", methods=['POST'])
def create():
    from generateText import text
    request_data = json.loads(request.data)
    generateText_json = text(request_data['content'])
    for i in range(len(generateText_json)):
        with app.app_context():
            todo = Todo(content=generateText_json[f'{i+1}'])
            db.session.add(todo)
            db.session.commit()
    
    return{'201' : 'todo created successfully'}


@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])

@app.route('/api/<int:id>',methods=['POST'])
def delete(id):
    request_data = json.loads(request.data)
    Todo.query.filter_by(id=request_data['id']).delete()
    db.session.commit()
    
    return {'204':'Deleted Successfully!'}

if __name__ == '__main__':
    app.run(debug=True)

