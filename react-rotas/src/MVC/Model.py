from flask import Flask, request, jsonify, make_response
import json

tasks = [
    {
        'id': 1,
        'name': "Hercules Rodrigues dos Santos",
        "description": "Um Maluco no pedaço....Hehehe"
    },
    {
        "id": 2,
        "name": " Cristina Dias Rodrigues",
        "description": " A Super poderosa"
    },
    {
        "id": 3,
        "name": "Ana Lu",
        "description": " A Princesinha"
    }
]



Familia = json.dumps(tasks)

class Model():

    def jsonReturn():
        return Familia

    def soma():
        return '10'


   