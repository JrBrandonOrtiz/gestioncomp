import { IVacancies,ICreateVacancyBody } from "@/models/vacancies";
import { HttpClient } from "@/utils/client-http";
import { ICompany} from "@/models/company";

export class VacancieService{

    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient()
    }

    async findAll(page:number = 0 ,size:number = 3) {
        try {

            const vacants = await this.httpClient.get<IVacancies>(`vacants?page=${page}&size=${size}`);
            console.log(vacants); 
            return vacants;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getVacancieById(id:string){
        try {

            const vacants = await this.httpClient.get<ICreateVacancyBody>(`vacants/${id}`);
            console.log(vacants); 
            return vacants;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    
    async findAllCompanies() {
        try {
            const response = await this.httpClient.get<ICompany[]>("company/all");
            console.log(response); 
            return response; 
        } catch (error) {
            console.error("Error fetching companies:", error);
            throw error;
        }
    }

    async destroy(id:string){
        try{
            const vacant = await this.httpClient.delete(`vacants/${id}`);

            return vacant;
        }catch(error){
            console.log(error);
            throw error;
        }
    };
    
    async createVacancie(body: ICreateVacancyBody):Promise<ICreateVacancyBody>{
        try {
            
            return await this.httpClient.post<ICreateVacancyBody,ICreateVacancyBody>("vacants", body);
        } catch (error) {
            console.error("Error creating company:", error);
            throw error;
        }
    }
    
    async updateVacancie(id: string, body: ICreateVacancyBody): Promise<ICreateVacancyBody> {
        try {
            return await this.httpClient.put<ICreateVacancyBody, ICreateVacancyBody>(`vacants/${id}`, body);
        } catch (error) {
            console.error("Error updating vacancy:", error);
            throw error; 
        }
    }
  
}