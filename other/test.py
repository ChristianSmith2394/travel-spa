from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/api', methods=['GET']) 
def api():
    querystring = {"originLocationCode":"MSP","destinationLocationCode":"LAX","departureDate":"2022-11-22","returnDate":"2022-11-24","adults":"1","nonStop":"false"}
    headers = {"Authorization": "Bearer FjG9WXNKGG6j6fJfLutmyZDxxkJE"}
    response = requests.request("GET", url, headers=headers, params=querystring)
    print("hello")
    return jsonify({'message': 'Hello World'})


if __name__ == '__main__':
    app.run(debug=True)
    
    
    import requests

url = "https://test.api.amadeus.com/v2/shopping/flight-offers"

querystring = {"originLocationCode":"MSP","destinationLocationCode":"LAX","departureDate":"2022-11-22","returnDate":"2022-11-24","adults":"1","nonStop":"false"}

headers = {"Authorization": "Bearer FjG9WXNKGG6j6fJfLutmyZDxxkJE"}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)