Weather Alerts API
============

Weather Alerts returns the severe weather warnings, watches and advisories in effect right now for any point or state in the United States, straight from the National Weather Service. Each alert names the event, how severe and urgent it is, the area covered, when it starts and ends, and what to do.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-weatheralerts.svg)](https://pypi.org/project/apiverve-weatheralerts/)

This is a Python wrapper for the [Weather Alerts API](https://apiverve.com/marketplace/weatheralerts?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-weatheralerts
```

Using `pip3`:

```bash
pip3 install apiverve-weatheralerts
```

---

## Configuration

Before using the Weather Alerts API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_weatheralerts.apiClient import WeatheralertsAPIClient

# Initialize the client with your APIVerve API key
api = WeatheralertsAPIClient("[YOUR_API_KEY]")

query = {
    "lat": 38.627,
    "lon": -90.1994,
    "state": "TX"
}

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Weather Alerts API documentation is found here: [https://docs.apiverve.com/ref/weatheralerts](https://docs.apiverve.com/ref/weatheralerts?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_weatheralerts.apiClient import WeatheralertsAPIClient

# Initialize the client with your APIVerve API key
api = WeatheralertsAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = {
    "lat": 38.627,
    "lon": -90.1994,
    "state": "TX"
}
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "location": {
      "state": "TX"
    },
    "count": 2,
    "highestSeverity": "Severe",
    "alerts": [
      {
        "id": "urn:oid:2.49.0.1.840.0.f9aca49ebcd46d4148ecadc4f42f00d6fee04ca6.001.1",
        "event": "Flood Warning",
        "headline": "Flood Warning issued October 2 at 1:51PM CDT until October 3 at 2:51AM CDT by NWS Fort Worth TX",
        "summary": "FLOOD WARNING NOW IN EFFECT UNTIL LATE TONIGHT",
        "severity": "Severe",
        "urgency": "Immediate",
        "certainty": "Observed",
        "response": "Avoid",
        "messageType": "Update",
        "area": "Dallas, TX",
        "issuedBy": "NWS Fort Worth TX",
        "sent": "2026-10-02T13:51:00-05:00",
        "onset": "2026-10-02T13:51:00-05:00",
        "expires": "2026-10-03T03:00:00-05:00",
        "ends": "2026-10-03T02:51:00-05:00",
        "description": "...The Flood Warning continues for the following rivers in Texas...\n\nTrinity River At Dallas affecting Dallas County.\n\n* WHAT...Minor flooding is occurring and minor flooding is forecast.\n\n* WHERE...Trinity River at Dallas.\n\n* WHEN...Until late tonight.\n\n* IMPACTS...At 30.0 feet, Minor lowland flooding will begin, and\ntrails along the river begin to flood.\n\n* ADDITIONAL DETAILS...\n- At 1:30 PM CDT Friday the stage was 30.9 feet.\n- Forecast...The river is expected to fall below flood stage this\nafternoon and continue falling to 12.7 feet early Wednesday\nafternoon.\n- Bankfull stage is 30.0 feet.\n- Flood stage is 30.0 feet.",
        "instruction": "Do not drive cars through flooded areas. Caution is urged when\nwalking near riverbanks.\n\nAdditional information is available at water.noaa.gov/wfo/fwd.",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -96.93,
                32.75
              ],
              [
                -96.93,
                32.81
              ],
              [
                -96.83,
                32.83
              ],
              [
                -96.71,
                32.75
              ],
              [
                -96.76,
                32.69
              ],
              [
                -96.87,
                32.78
              ],
              [
                -96.93,
                32.75
              ]
            ]
          ]
        }
      },
      {
        "id": "urn:oid:2.49.0.1.840.0.b7cdd851a493afa58b5cf5fc13948ba8a35d2b25.001.1",
        "event": "Flood Watch",
        "headline": "Flood Watch issued October 2 at 1:36AM CDT until October 2 at 7:00PM CDT by NWS Corpus Christi TX",
        "summary": "FLOOD WATCH REMAINS IN EFFECT THROUGH THIS EVENING",
        "severity": "Severe",
        "urgency": "Future",
        "certainty": "Possible",
        "response": "Prepare",
        "messageType": "Update",
        "area": "La Salle; McMullen; Live Oak; Bee; Goliad; Victoria; Webb; Duval; Jim Wells; Inland Kleberg; Inland Nueces; Inland San Patricio",
        "issuedBy": "NWS Corpus Christi TX",
        "sent": "2026-10-02T01:36:00-05:00",
        "onset": "2026-10-02T01:36:00-05:00",
        "expires": "2026-10-02T19:00:00-05:00",
        "ends": "2026-10-02T19:00:00-05:00",
        "description": "* WHAT...Flooding caused by excessive rainfall continues to be\npossible.\n\n* WHERE...A portion of south Texas, including the following areas,\nBee, Duval, Goliad, Inland Kleberg, Inland Nueces, Inland San\nPatricio, Jim Wells, La Salle, Live Oak, McMullen, Victoria and\nWebb.\n\n* WHEN...Through this evening.\n\n* IMPACTS...Excessive runoff may result in flooding of rivers,\ncreeks, streams, and other low-lying and flood-prone locations.\nFlooding may occur in poor drainage and urban areas.\n\n* ADDITIONAL DETAILS...\n- Flooding caused by excessive rainfall is possible. Additional\nrainfall totals of 1-3 inches with isolated higher amounts will\nfall over areas that have already seen 2-4\" of rain within the\nwatch area.\n- http://www.weather.gov/safety/flood",
        "instruction": "You should monitor later forecasts and be alert for possible Flood\nWarnings. Those living in areas prone to flooding should be prepared\nto take action should flooding develop.",
        "geometry": null
      }
    ]
  }
}
```

---

## Error Handling

The API client provides comprehensive error handling through the `WeatheralertsAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_weatheralerts.apiClient import WeatheralertsAPIClient, WeatheralertsAPIClientError

api = WeatheralertsAPIClient("[YOUR_API_KEY]")

query = {
    "lat": 38.627,
    "lon": -90.1994,
    "state": "TX"
}

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except WeatheralertsAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_weatheralerts.apiClient import WeatheralertsAPIClient, WeatheralertsAPIClientError

api = WeatheralertsAPIClient("[YOUR_API_KEY]")

query = {
    "lat": 38.627,
    "lon": -90.1994,
    "state": "TX"
}

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except WeatheralertsAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_weatheralerts.apiClient import WeatheralertsAPIClient, WeatheralertsAPIClientError

query = {
    "lat": 38.627,
    "lon": -90.1994,
    "state": "TX"
}

# Using context manager ensures proper cleanup
with WeatheralertsAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except WeatheralertsAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_weatheralerts.apiClient import WeatheralertsAPIClient

# Enable debug mode
api = WeatheralertsAPIClient("[YOUR_API_KEY]", debug=True)

query = {
    "lat": 38.627,
    "lon": -90.1994,
    "state": "TX"
}

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_weatheralerts.apiClient import WeatheralertsAPIClient

api = WeatheralertsAPIClient("[YOUR_API_KEY]")

query = {
    "lat": 38.627,
    "lon": -90.1994,
    "state": "TX"
}

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
