# [Weather Alerts API](https://apiverve.com/marketplace/weatheralerts?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

Weather Alerts returns the severe weather warnings, watches and advisories in effect right now for any point or state in the United States, straight from the National Weather Service. Each alert names the event, how severe and urgent it is, the area covered, when it starts and ends, and what to do.

The Weather Alerts API provides a simple, reliable way to integrate weather alerts functionality into your applications. Built for developers who need production-ready weather alerts capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/weatheralerts?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/weatheralerts?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/weatheralerts)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.WeatherAlerts)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-weatheralerts/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_weatheralerts)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/weatheralerts)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_weatheralerts)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callWeatherAlertsAPI() {
    try {
        const params = new URLSearchParams({
            lat: 38.627,
            lon: -90.1994,
            state: 'TX'
        });

        const response = await fetch(`https://api.apiverve.com/v1/weatheralerts?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callWeatherAlertsAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/weatheralerts?lat=38.627&lon=-90.1994&state=TX" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/weatheralerts
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/weatheralerts) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.WeatherAlerts
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.WeatherAlerts) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-weatheralerts
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-weatheralerts/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_weatheralerts
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_weatheralerts) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/weatheralerts
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/weatheralerts) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_weatheralerts
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_weatheralerts) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:weatheralerts-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/weatheralerts-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Weather Alerts API](https://apiverve.com/marketplace/weatheralerts?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/weatheralerts](https://docs.apiverve.com/ref/weatheralerts)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Weather Alerts API is commonly used for:

- **Web Applications** - Add weather alerts features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with weather alerts capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Weather Alerts API:

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

## Support & Community

- 🏠 **API Home**: [Weather Alerts API](https://apiverve.com/marketplace/weatheralerts?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
