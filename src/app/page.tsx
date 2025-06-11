import { CapacitorInit } from "@/components/CapacitorInit";
const NIP24 = require('nip24client')
const nip24 = new NIP24.NIP24Client()

const getCompanyData = async () => await nip24.getAllDataExt(NIP24.Number.NIP, '7272445205')

const Home = async () => {
  const companyData = await getCompanyData()
  console.log('companyData', companyData);

  return (
    <div className="">
      <CapacitorInit />
    </div>
  );
}

export default Home
