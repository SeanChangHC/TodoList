from api import db, app, Todo

with app.app_context():
    db.create_all()
    todo = Todo(content = ' I love meat2')
    secondtodo = Todo(content = ' slap jiggle jiggle2')
    db.session.add(todo)
    db.session.add(secondtodo)
    db.session.commit()


