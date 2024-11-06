import {  IGetCompanyResponse } from "@/models/company";
import { HttpClient } from "@/utils/client-http";
import { ICreateCompany } from "@/models/company";

export class CompanyService{

    private httpClient: HttpClient;
    static findAll: any;

    constructor(){
        this.httpClient = new HttpClient()
    }

    async findAll(page:number = 0 ,size:number = 3) {
        try {

            const companie = await this.httpClient.get<IGetCompanyResponse>(`company?page=${page}&size=${size}`);
            console.log(companie); 
            return companie;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(id:string){
        try{
            const companie = await this.httpClient.delete(`company/${id}`);

            return companie;
        }catch(error){
            console.log(error);
            throw error;
        }
    };
    
    async createCompany(body: ICreateCompany): Promise<ICreateCompany> {
        try {
            return await this.httpClient.post<ICreateCompany, ICreateCompany>("company", body);
        } catch (error) {
            console.error("Error creating company:", error);
            throw error;
        }
    }
    async updateCompany(id: string, body: ICreateCompany): Promise<ICreateCompany> {
        try {
            return await this.httpClient.put<ICreateCompany, ICreateCompany>(`company/${id}`, body);
        } catch (error) {
            console.error("Error updating vacancy:", error);
            throw error; 
        }
    }
}