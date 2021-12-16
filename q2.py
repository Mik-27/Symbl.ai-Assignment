import requests
# import json

# r = requests.get("https://jsonplaceholder.typicode.com/todos/1")
r = requests.get("https://www.example.com/get-data")
res = r.json()

# with open('./sample.json') as f:
#     res = json.load(f)
# print(res)
res['data'].sort(key=lambda x: x['id'])

for item in res['data']:
    print(item['id'], " ", item['name'])