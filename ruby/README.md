# Weather Alerts API - Ruby Gem

Weather Alerts returns the severe weather warnings, watches and advisories in effect right now for any point or state in the United States, straight from the National Weather Service. Each alert names the event, how severe and urgent it is, the area covered, when it starts and ends, and what to do.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_weatheralerts'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_weatheralerts
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_weatheralerts'

# Initialize the client
client = APIVerve::Weatheralerts::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  lat: 38.627,
  lon: -90.1994,
  state: "TX"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ lat: 38.627, lon: -90.1994, state: "TX" })
  puts response["data"]
rescue APIVerve::Weatheralerts::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Weatheralerts::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Weatheralerts::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/weatheralerts?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/weatheralerts?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/weatheralerts?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
