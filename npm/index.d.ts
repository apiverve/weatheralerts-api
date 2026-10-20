declare module '@apiverve/weatheralerts' {
  export interface weatheralertsOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface weatheralertsResponse {
    status: string;
    error: string | null;
    data: WeatherAlertsData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WeatherAlertsData {
      location:        Location;
      count:           number | null;
      highestSeverity: null | string;
      alerts:          Alert[];
  }
  
  interface Alert {
      id:          null | string;
      event:       null | string;
      headline:    null | string;
      summary:     null | string;
      severity:    null | string;
      urgency:     null | string;
      certainty:   null | string;
      response:    null | string;
      messageType: null | string;
      area:        null | string;
      issuedBy:    null | string;
      sent:        Date | null;
      onset:       Date | null;
      expires:     Date | null;
      ends:        Date | null;
      description: null | string;
      instruction: null | string;
      geometry:    Geometry | null;
  }
  
  interface Geometry {
      type:        null | string;
      coordinates: Array<Array<(number | null)[]>>;
  }
  
  interface Location {
      state: null | string;
  }

  export default class weatheralertsWrapper {
    constructor(options: weatheralertsOptions);

    execute(callback: (error: any, data: weatheralertsResponse | null) => void): Promise<weatheralertsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: weatheralertsResponse | null) => void): Promise<weatheralertsResponse>;
    execute(query?: Record<string, any>): Promise<weatheralertsResponse>;
  }
}
