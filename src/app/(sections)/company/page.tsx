import Div from "@/components/template/div/div";
import CardsCompanyTemplate from "@/components/template/cardscompany/cardscompanytemplate";
import Headx from "@/components/organisms/headx/headx";
import AddCompany from "@/components/molecules/addcompany/addcompany";
import { CompanyService } from "@/services/company.services";

interface IProps {
  searchParams?: {
    page?: string;
    size?: string;
  };
}

export default async function Company({ searchParams }: IProps) {
  const CompanyServices = new CompanyService();

  // Esperamos a que searchParams esté resuelto
  const { page = "1", size = "3" } = await searchParams || {};

  const pageNum = parseInt(page, 10);
  const sizeNum = parseInt(size, 10);

  const data = await CompanyServices.findAll(pageNum, sizeNum);

  return (
    <Div>
      <Headx title={"Compañía"}>
        <AddCompany />
      </Headx>
      <CardsCompanyTemplate data={data} />
    </Div>
  );
}
