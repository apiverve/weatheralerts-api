using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WeatherAlerts
{
    /// <summary>
    /// Query options for the Weather Alerts API
    /// </summary>
    public class WeatherAlertsQueryOptions
    {
        /// <summary>
        /// Latitude of the location to check. Send with lon
        /// </summary>
        [JsonProperty("lat")]
        public double? Lat { get; set; }

        /// <summary>
        /// Longitude of the location to check. Send with lat
        /// </summary>
        [JsonProperty("lon")]
        public double? Lon { get; set; }

        /// <summary>
        /// Two-letter US state or territory code (e.g., MO) for every alert in effect across it. Used when lat and lon are not sent
        /// </summary>
        [JsonProperty("state")]
        public string State { get; set; }
    }
}
