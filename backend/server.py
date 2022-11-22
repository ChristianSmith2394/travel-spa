from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import requests
import json
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')
token_url = "https://test.api.amadeus.com/v1/security/oauth2/token"
token_payload = f"grant_type=client_credentials&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}"
token_headers = {"Content-Type": "application/x-www-form-urlencoded"}
flight_url = "https://test.api.amadeus.com/v2/shopping/flight-offers"


def get_token():
    token_respone = requests.post(
        token_url, data=token_payload, headers=token_headers).json()
    print(token_respone)
    ACCESS_TOKEN = token_respone['access_token']
    return ACCESS_TOKEN


@app.route('/api', methods=['POST'])
def api():
    ACCESS_TOKEN = get_token()
    postData = json.loads(request.data)

    departCode = postData['departCode']
    arriveCode = postData['arriveCode']
    departDate = postData['departDate']
    returnDate = postData['returnDate']
    passengers = postData['passengers']

    params = {"originLocationCode": departCode,
              "destinationLocationCode": arriveCode,
              "departureDate": departDate,
              "returnDate": returnDate,
              "adults": passengers,
              "nonStop": "false",
              "max": "25",
              "currencyCode": "USD"}

    headers = {"Authorization": f"Bearer {ACCESS_TOKEN}"}
    response = requests.get(flight_url, headers=headers,
                            params=params).json()

    data = response['data']
  
    dict_list = []
    for d in range(len(data)):
        id = data[d]['id']
        price = data[d]['price']['total']
        for i in range(len(data[d]['itineraries'])):
            itinerary = i+1
            if itinerary == 1:
                direction = "Desination Flight"
            else:
                direction = "Return Flight"
            iDuration = data[d]['itineraries'][i]['duration']
            segments = len(data[d]['itineraries'][i]['segments'])
            for s in range(len(data[d]['itineraries'][i]['segments'])):
                segment = s+1
                departureCode = data[d]['itineraries'][i]['segments'][s]['departure']['iataCode']
                departureTime = data[d]['itineraries'][i]['segments'][s]['departure']['at']
                arrivalCode = data[d]['itineraries'][i]['segments'][s]['arrival']['iataCode']
                arrivalTime = data[d]['itineraries'][i]['segments'][s]['arrival']['at']
                carrierCode = data[d]['itineraries'][i]['segments'][s]['carrierCode']
                sDuration = data[d]['itineraries'][i]['segments'][s]['duration']

                dict_list.append({
                                'id': id, 
                                'itinerary': itinerary,
                                'direction': direction,
                                'segment': segment, 
                                'segments': segments, 
                                'segDuration': sDuration,
                                'departureCode': departureCode,
                                'departureTime': departureTime, 
                                'arrivalCode': arrivalCode, 
                                'arrivalTime': arrivalTime, 
                                'price': price, 
                                'carrierCode': carrierCode, 
                                'itinDuration': iDuration
                                })

    print(dict_list)
    return jsonify(dict_list)

if __name__ == '__main__':
    app.run(debug=True)
