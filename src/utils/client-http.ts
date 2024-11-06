const defaultBaseUrl: string = "https://vacantsbackendgates-production.up.railway.app/api/v1";

export class HttpClient {
    private baseUrl: string;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || defaultBaseUrl;
    };

    private async getHeaders() {
        return {
            "Content-Type": "application/json"
        }
    };

    private async handleResponse(response: Response) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`${response.status}: ${errorData.message || "Ocurrió un error en la petición."}`);
        }
        return response.json();
    }

    async get<T>(url: string): Promise<T> {
        const headers = await this.getHeaders()
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "GET",
            cache: "no-store"
        });
        return this.handleResponse(response)
    };

    async delete(url: string): Promise<void> {
        const headers = await this.getHeaders()
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "DELETE"
        });
        console.log(response)
     

    };

    async post<T, R>(url: string, body: R): Promise<T> {
        const headers = await this.getHeaders()
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(body)
        });

        return this.handleResponse(response)
    };

    async getcompanies<T>(url: string): Promise<T> {
        const headers = await this.getHeaders()
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "GET",
            cache: "no-store"
        });
        return this.handleResponse(response)
    };

    async put<T, R>(url: string, body: R): Promise<T> {
        const headers = await this.getHeaders();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "PUT",
            body: JSON.stringify(body),
        });
        return this.handleResponse(response);
    }
}